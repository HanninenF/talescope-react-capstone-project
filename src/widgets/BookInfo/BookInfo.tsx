import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import Loader from "../../components/Loader/Loader";
import { LoadingContext } from "../../contexts/LoadingContext";
import { useFetchBooks } from "../../hooks/useFetchBooks";

export default function BookInfo() {
  const { bookId } = useParams();
  const context = useContext(SearchContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext) || {
    isLoading: false,
    setIsLoading: () => {},
  };

  /*   const {
    books,
    isLoading: fetchBooksLoading,
    error,
  } = useFetchBooks(bookId || "", "all"); */
  /* 
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    if (context && context.results.length > 0) {
      setIsLoading(true);
      const foundBook = context.results.find(
        (book) => book.key.replace("/works/", "") === bookId
      );
      setBook(foundBook || null);
    } else if (books.length > 0) {
      const foundBook = books.find(
        (book) => book.key.replace("/works/", "") === bookId
      );
      setBook(foundBook || null);
    } else {
      setBook(null);
    }
  }, [context, bookId, books]); */
  if (!context) return null;
  const book = context.results.find(
    (book) => book.key.replace("/works/", "") === bookId
  );
  useEffect(() => {
    if (context && context.results.length > 0) {
      setIsLoading(true);

      if (book) {
        setIsLoading(false); // Set isLoading to false once we have the book
      }
    }
  }, [book, setIsLoading]);

  if (isLoading /* || fetchBooksLoading */) return <Loader />;
  if (!book) return <div>Book not found!</div>;

  console.log("book=", book);

  return (
    <div>
      <h2>{book.title}</h2>
    </div>
  );
}
