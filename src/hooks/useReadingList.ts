import { useContext } from "react";
import { ReadingListContext } from "../contexts/ReadingListContext";

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) {
    throw new Error("useReadingList must be used within a ReadingListProvider");
  }
  return context;
};
