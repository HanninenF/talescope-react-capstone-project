import { createContext, useState } from "react";

type LoadingMap = {
  books: boolean;
  authors: boolean;
};

type LoadingContextType = {
  loading: LoadingMap;
  setLoading: React.Dispatch<React.SetStateAction<LoadingMap>>;
};

export const LoadingContext = createContext<LoadingContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function LoadingContextProvider({ children }: Props) {
  const [loading, setLoading] = useState<LoadingMap>({
    books: false,
    authors: false,
  });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
