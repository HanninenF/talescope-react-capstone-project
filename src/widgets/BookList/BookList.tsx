import { Doc } from "../../types/OpenLibrarySearchResponse";
import BookCard from "../BookCard/BookCard";

type Props = {
  books: Doc[];
};
export default function BookList({ books }: Props) {
  return (
    <>{books && books.map((book) => <BookCard key={book.key} book={book} />)}</>
  );
}
