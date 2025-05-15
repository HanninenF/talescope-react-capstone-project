import { useContext, useEffect, useState } from "react";
import { fetchBooks } from "../services/fetchBooks";
import { Doc } from "../types/OpenLibrarySearchResponse";
import { LoadingContext } from "../contexts/LoadingContext";

export function useFetchBooks(query: string, category: string) {
  const [books, setBooks] = useState<Doc[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadingContext = useContext(LoadingContext);

  const setIsLoading = loadingContext?.setIsLoading || (() => {});
  const isLoading = loadingContext?.isLoading || false;

  const storageKey = `books:${category}:${query}`;

  useEffect(() => {
    if (!query) return;

    const cached = localStorage.getItem(storageKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setBooks(parsed);
        return;
      } catch {
        localStorage.removeItem(storageKey);
      }
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const getBooks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchBooks(query, category, signal);
        if (!signal.aborted) {
          setBooks(data);
          localStorage.setItem(storageKey, JSON.stringify(data));
          console.log("books after fetch", data);
          setIsLoading(false);
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setError("Could not fetch books");
          setIsLoading(false);
        }
      }
    };

    getBooks();
    return () => controller.abort();
  }, [query, category]);
  return { books, isLoading, error };
}
