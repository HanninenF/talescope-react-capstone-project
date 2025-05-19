import { createContext, useContext, useState } from "react";
import { fetchBookEditionDetails } from "../services/fetchBookEditionDetails";
import { WorkDetails } from "../types/OpenLibrarySearchResponse";

export type ReadingListItem = WorkDetails & {
  status?: "reading" | "finished";
  rating?: number;
  number_of_pages?: number;
  cover_edition_key?: string;
};

type ReadingListContextType = {
  readingList: ReadingListItem[];
  addToReadingList: (book: WorkDetails) => void;
  removeFromReadingList: (key: string) => void;
  updateRating: (key: string, rating: number) => void;
  updateStatus: (
    key: string,
    status: "reading" | "finished" | null
  ) => Promise<"missing_pages" | void>;

  updatePages: (key: string, pages: number) => void;
};

export const ReadingListContext = createContext<
  ReadingListContextType | undefined
>(undefined);

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

  const updateStatus = async (
    key: string,
    status: "reading" | "finished" | null
  ): Promise<"missing_pages" | void> => {
    setReadingList((prev) =>
      prev.map((b) =>
        b.key === key ? { ...b, status: status || undefined } : b
      )
    );

    if (status === "finished") {
      const book = readingList.find((b) => b.key === key);
      console.log("book.ReadingListItem: ", book);

      if (book && book.number_of_pages == null && book.cover_edition_key) {
        const pages = await fetchBookEditionDetails(book.cover_edition_key);
        if (pages) {
          setReadingList((prev) =>
            prev.map((b) =>
              b.key === key ? { ...b, number_of_pages: pages } : b
            )
          );
        } else {
          // 🔁 Nytt: returnera en signal att sidor saknas
          return "missing_pages";
        }
      }
    }
  };

  const updatePages = (key: string, pages: number) => {
    setReadingList((prev) =>
      prev.map((b) => (b.key === key ? { ...b, number_of_pages: pages } : b))
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
        updatePages,
      }}
    >
      {children}
    </ReadingListContext.Provider>
  );
};
