import "./BookList.scss";
import { Doc } from "../../types/OpenLibrarySearchResponse";
import BookCard from "../BookCard/BookCard";
import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import Loader from "../../components/Loader/Loader";
import BookCard2 from "../BookCard/BookCard2";

type Props = {
  books: Doc[];
};
export default function BookList({ books }: Props) {
  const loadingContext = useContext(LoadingContext);

  const isBookLoading = loadingContext?.loading.books || false;

  if (isBookLoading) return <Loader />;

  if (books.length === 0) return <p>No Books were found!</p>;

  return (
    <ul className="resultsList">
      {books &&
        books.map((book) => (
          <li className="" key={book.key}>
            <BookCard book={book} />
          </li>
        ))}
    </ul>
  );
}
