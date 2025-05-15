import { createContext, useState, useEffect } from "react";
import { useFetchBooks } from "../hooks/useFetchBooks";
import useDebounce from "../hooks/useDebounce";
import { Doc } from "../types/OpenLibrarySearchResponse";
import { useSearchParams } from "react-router-dom";

type SearchContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  results: Doc[];
  addBookToResults: (book: Doc) => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState<Doc[]>([]);

  const [searchParams] = useSearchParams();

  const debouncedQuery = useDebounce(query, 500);

  const { books } = useFetchBooks(debouncedQuery, category);

  useEffect(() => {
    const q = searchParams.get("q");
    const c = searchParams.get("category");

    if (q !== null) setQuery(q);
    if (c !== null) setCategory(c);
  }, [searchParams]);

  useEffect(() => {
    if (books.length > 0) {
      setResults(books);
      console.log("✅ Nya resultat från fetch:", books);
    } else {
      console.warn(
        "⚠️ Inga böcker hittades i SearchContext – använder tidigare results eller annan källa."
      );
    }
  }, [books]);

  const addBookToResults = (book: Doc) => {
    setResults((prev) => {
      const alreadyExists = prev.some((b) => b.key === book.key);
      return alreadyExists ? prev : [...prev, book];
    });
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        category,
        setCategory,
        addBookToResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
