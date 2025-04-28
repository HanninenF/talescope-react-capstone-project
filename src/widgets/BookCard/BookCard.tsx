import "./BookCard.scss";
import { Link } from "react-router-dom";
import { Doc } from "../../types/OpenLibrarySearchResponse";
import { routes } from "../../config/routes";

type Props = {
  book: Doc;
};

export default function BookCard({ book }: Props) {
  const bookId = book.key.replace("/works/", "");
  const bookDetailUrl = routes.bookDetails.replace(":bookId", bookId);
  console.log("bookDetailUrl= ", bookDetailUrl);
  return (
    <>
      <Link className="cardContainer" to={bookDetailUrl}>
        <h1>{book.title}</h1>
      </Link>
    </>
  );
}
