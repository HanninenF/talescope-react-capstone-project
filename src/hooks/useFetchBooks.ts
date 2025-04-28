import { useEffect, useState } from "react";
import { fetchBooks } from "../services/fetchBooks";
import { Doc } from "../types/OpenLibrarySearchResponse";

export function useFetchBooks(query: string, category: string) {
  const [books, setBooks] = useState<Doc[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    const getBooks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchBooks(query, category, controller.signal);
        setBooks(data);
        console.log("books after fetch", data);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          setError("Could not fetch books");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getBooks();
    return () => controller.abort();
  }, [query, category]);
  return { books, isLoading, error };
}
