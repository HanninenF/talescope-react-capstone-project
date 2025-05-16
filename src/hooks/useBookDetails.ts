// hooks/useBookDetails.ts
import { useContext, useEffect, useState } from "react";
import { useReadingList } from "../contexts/ReadingListContext";
import { SearchContext } from "../contexts/SearchContext";
import { LoadingContext } from "../contexts/LoadingContext";
import { fetchBookDetails, WorkDetails } from "../services/fetchBookDetails";
import { Doc, ExtendedDoc } from "../types/OpenLibrarySearchResponse";
import { mapDocToWorkDetails } from "../utils/mapDocToWorkDetails";

export function useBookDetails(bookId: string | undefined) {
  const cleanBookId = (bookId || "").trim();
  const searchContext = useContext(SearchContext);
  const loadingContext = useContext(LoadingContext);
  const setLoading = loadingContext?.setLoading || (() => {});
  const isBookLoading = loadingContext?.loading.books || false;

  const [book, setBook] = useState<WorkDetails | null>(null);
  const [hasTriedFetch, setHasTriedFetch] = useState(false);

  const {
    readingList,
    addToReadingList,
    removeFromReadingList,
    updateRating,
    updateStatus,
  } = useReadingList();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading((prev) => ({ ...prev, books: true }));
      let foundDoc: Doc | undefined;

      // SearchContext
      if (searchContext?.results.length) {
        foundDoc = searchContext.results.find(
          (b) => b.key.replace("/works/", "").trim() === cleanBookId
        );
      }

      // LocalStorage
      if (!foundDoc && searchContext) {
        const key = `books:${searchContext.category}:${searchContext.query}`;
        try {
          const cached = JSON.parse(localStorage.getItem(key) || "[]") as Doc[];
          foundDoc = cached.find(
            (b) => b.key.replace("/works/", "").trim() === cleanBookId
          );
        } catch {
          console.warn("⚠️ Failed to parse localStorage");
        }
      }

      // Fetch from API
      if (!foundDoc && !hasTriedFetch) {
        try {
          const fetched = await fetchBookDetails(cleanBookId);
          setBook(fetched);

          const asDoc: ExtendedDoc = {
            ...fetched,
            edition_year: fetched.edition_year,
            edition_count: 0,
            has_fulltext: false,
            public_scan_b: false,
          };

          searchContext?.addBookToResults?.(asDoc);
        } catch {
          console.warn("❌ Failed to fetch from API");
        } finally {
          setHasTriedFetch(true);
          setLoading((prev) => ({ ...prev, books: false }));
        }
        return;
      }

      if (foundDoc) {
        const mapped = mapDocToWorkDetails(foundDoc);
        setBook(mapped);
      } else {
        setBook(null);
        console.warn("🚫 Book not found in any source");
      }
      setLoading((prev) => ({ ...prev, books: false }));
    };

    if (cleanBookId && !hasTriedFetch) {
      fetchBook();
    }
  }, [
    cleanBookId,
    hasTriedFetch,
    searchContext?.results,
    searchContext?.category,
    searchContext?.query,
  ]);

  const bookInList = readingList.find((b) => b.key === book?.key);
  const rating = bookInList?.rating || 0;
  const status = bookInList?.status;

  const handleToggleReadingList = () => {
    if (!book) return;
    bookInList ? removeFromReadingList(book.key) : addToReadingList(book);
  };

  return {
    book,
    isBookLoading,
    hasTriedFetch,
    handleToggleReadingList,
    inReadingList: !!bookInList,
    rating,
    status,
    updateRating,
    updateStatus,
  };
}
