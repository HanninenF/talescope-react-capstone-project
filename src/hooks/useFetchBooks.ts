import { useEffect, useState } from "react";
import { fetchBooks } from "../services/fetchBooks";

export function useFetchBooks(query: string) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    const getBooks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchBooks(query, controller.signal);
        setBooks(data);
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
  }, [query]);
  return { books, isLoading, error };
}
