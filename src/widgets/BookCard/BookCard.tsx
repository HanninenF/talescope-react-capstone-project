import "./BookCard.scss";
import { Link } from "react-router-dom";
import {
  ExtendedDoc,
  WorkDetails,
} from "../../types/OpenLibrarySearchResponse";
import { routes } from "../../config/routes";
import { getImageUrl } from "../../config/imageUrls";
import BookCover from "../BookInfo/BookCover/BookCover";
import BookMetadata from "../BookInfo/BookMetadata/BookMetadata";
import { mapDocToWorkDetails } from "../../utils/mapDocToWorkDetails";
import ReadingStatusIndicator from "../BookInfo/ReadingStatusIndicator/ReadingStatusIndicator";
import { isExtendedDoc as isExtendedDoc } from "../../utils/isExtendedDoc"; //type guard

type Props<
  T extends {
    key: string;
    title: string;
    cover_i?: number;
    author_name?: string[];
  },
> = {
  book: T;
  children?: React.ReactNode;
};

export default function BookCard<
  T extends {
    key: string;
    title: string;
    cover_i?: number;
    author_name?: string[];
    status?: "reading" | "finished";
  },
>({ book, children }: Props<T>) {
  const bookId = book.key.replace("/works/", "");
  const bookDetailUrl = routes.bookDetails.replace(":bookId", bookId);

  const status = book.status;

  const workBook: WorkDetails = isExtendedDoc(book)
    ? mapDocToWorkDetails(book as ExtendedDoc)
    : {
        ...book,
        author_name: book.author_name ?? ["Unknown"],
      };

  const imageUrl = getImageUrl(book.cover_i, "L");
  const isPlaceholder = imageUrl.includes(
    "https://covers.openlibrary.org/b/id/10909258"
  );
  return (
    <div className="BookCard__wrapper">
      <Link className="BookCard" to={bookDetailUrl}>
        <div
          className={`BookCard__imageWrapper ${isPlaceholder ? "is-placeholder" : ""}`}
        >
          <BookCover
            classNameImg="BookCard__image"
            title={book.title}
            coverId={book.cover_i}
          />
        </div>
        <ReadingStatusIndicator
          variant="small"
          showLabel={false}
          status={status}
        />
        <div className="BookCard__info">
          <BookMetadata
            classNameTitle="BookCard__info__title"
            classNameAuthor="BookCard__info__author"
            book={workBook}
          />
        </div>
      </Link>
      {children && <div className="BookCard__extra">{children}</div>}
    </div>
  );
}
