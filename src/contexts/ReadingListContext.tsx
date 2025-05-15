import { createContext, useContext, useState } from "react";
import { WorkDetails } from "../services/fetchBookDetails";

export type ReadingListItem = WorkDetails & {
  status?: "reading" | "finished";
  rating?: number;
};

type ReadingListContextType = {
  readingList: ReadingListItem[];
  addToReadingList: (book: WorkDetails) => void;
  removeFromReadingList: (key: string) => void;
  updateRating: (key: string, rating: number) => void;
  updateStatus: (key: string, status: "reading" | "finished" | null) => void;
};

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
);

export const ReadingListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [readingList, setReadingList] = useState<ReadingListItem[]>([]);

  const addToReadingList = (book: WorkDetails) => {
    if (!readingList.find((b) => b.key === book.key)) {
      setReadingList((prev) => [...prev, { ...book }]);
    }
  };

  const removeFromReadingList = (key: string) => {
    setReadingList((prev) => prev.filter((b) => b.key !== key));
  };

  const updateRating = (key: string, rating: number) => {
    setReadingList((prev) =>
      prev.map((b) => (b.key === key ? { ...b, rating } : b))
    );
  };

  const updateStatus = (key: string, status: "reading" | "finished" | null) => {
    setReadingList((prev) =>
      prev.map((b) =>
        b.key === key ? { ...b, status: status || undefined } : b
      )
    );
  };

  return (
    <ReadingListContext.Provider
      value={{
        readingList,
        addToReadingList,
        removeFromReadingList,
        updateRating,
        updateStatus,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within a ReadingListProvider");
  }
  return context;
};
