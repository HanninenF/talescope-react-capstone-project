import "./BookCard.scss";
import { Link } from "react-router-dom";
import { Doc } from "../../types/OpenLibrarySearchResponse";
import { routes } from "../../config/routes";
import { getImageUrl } from "../../config/imageUrls";

type Props = {
  book: Doc;
};

export default function BookCard({ book }: Props) {
  const bookId = book.key.replace("/works/", "");
  const bookDetailUrl = routes.bookDetails.replace(":bookId", bookId);

  const imageUrl = getImageUrl(book.cover_i, "M");
  const isPlaceholder = imageUrl.includes(
    "https://covers.openlibrary.org/b/id/10909258"
  );
  return (
    <>
      <Link className="BookCard" to={bookDetailUrl}>
        <div
          className={`BookCard__imageWrapper ${isPlaceholder ? "is-placeholder" : ""}`}
        >
          <img
            className="BookCard__image"
            loading="lazy"
            src={imageUrl}
            alt={`Cover for book: ${book.title}`}
          />
        </div>
        <div className="BookCard__info">
          <h2>{book.title}</h2>
          <h3>{book.author_name}</h3>
        </div>
      </Link>
    </>
  );
}
