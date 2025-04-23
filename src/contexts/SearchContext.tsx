import { createContext, useState, useEffect } from "react";
import { useFetchBooks } from "../hooks/useFetchBooks";
import useDebounce from "../hooks/useDebounce";

type SearchContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  results: Book[];
};

export const SearchContext = createContext<SearchContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState<Book[]>([]);

  const debouncedQuery = useDebounce(query, 500);

  const { books } = useFetchBooks(debouncedQuery, category);

  useEffect(() => {
    setResults(books);
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
