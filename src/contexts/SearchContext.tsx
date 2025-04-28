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
    const q = searchParams.get("q") || "";
    const c = searchParams.get("category") || "all";
    setQuery(q);
    setCategory(c);
  }, [searchParams]);

  useEffect(() => {
    setResults(books);
    console.log("setResults(books)", books);
  }, [books]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        category,
        setCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
