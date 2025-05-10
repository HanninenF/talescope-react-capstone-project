import { Link } from "react-router-dom";
import { ReadingListItem } from "../../contexts/ReadingListContext";

type Props = {
  book: ReadingListItem;
};
export default function ReadingListCard({ book }: Props) {
  const bookId = book.key.replace("/works/", "");
  return (
    <Link to={`/library/book/${bookId}`}>
      <h3>{book.title}</h3>
      {book.author_name && <p>Author: {book.author_name.join(",")}</p>}
      {book.status && <p>Status: {book.status} </p>}
      {book.rating !== undefined && <p>Rating: {book.rating}/5 </p>}
    </Link>
  );
}
