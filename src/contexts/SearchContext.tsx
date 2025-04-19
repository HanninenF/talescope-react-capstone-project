import { createContext, useState } from "react";

type SearchContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: Book[];
  setResults: React.Dispatch<React.SetStateAction<Book[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function SearchContextProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
