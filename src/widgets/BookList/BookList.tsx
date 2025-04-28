import { Doc } from "../../types/OpenLibrarySearchResponse";
import BookCard from "../BookCard/BookCard";

type Props = {
  books: Doc[];
};
export default function BookList({ books }: Props) {
  return (
    <ul>
      {books &&
        books.map((book) => (
          <li key={book.key}>
            <BookCard book={book} />
          </li>
        ))}
    </ul>
  );
}
