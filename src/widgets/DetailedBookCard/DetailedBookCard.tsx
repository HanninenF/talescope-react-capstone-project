import "./DetailedBookCard.scss";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../hooks/useBookDetails";
import Loader from "../../components/Loader/Loader";
import BookHeader from "../BookInfo/BookHeader/BookHeader";
import BookMetadata from "../BookInfo/BookMetadata/BookMetadata";
import BookStatus from "../BookInfo/BookStatus/BookStatus";
import BookRating from "../BookInfo/BookRating/BookRating";
import ReadingStatusIndicator from "../BookInfo/ReadingStatusIndicator/ReadingStatusIndicator";
import BookCover from "../BookInfo/BookCover/BookCover";
import { getImageUrl } from "../../config/imageUrls";
import { useReadingList } from "../../hooks/useReadingList";

export default function DetailedBookCard() {
  const { bookId } = useParams();
  const {
    book,
    isBookLoading,
    hasTriedFetch,
    handleToggleReadingList,
    inReadingList,
    rating,
    status,
    updateRating,
    updateStatus,
  } = useBookDetails(bookId);

  if (isBookLoading) return <Loader />;
  if (!book && hasTriedFetch) return <div>Book not found!</div>;
  if (!book) return null;
  const largeUrl = getImageUrl(book.cover_i, "L");
  return (
    <div className="detailedBookCard">
      <BookHeader
        book={book}
        inList={inReadingList}
        onToggle={handleToggleReadingList}
      />

      <div className="detailedBookCard__midSection">
        <BookMetadata
          classNameTitle="detailedBookCard__title"
          classNameAuthor="detailedBookCard__author"
          book={book}
        />
        <a
          className="bookCoverLink"
          href={largeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <BookCover
            classNameImg="bookCover"
            coverId={book.cover_i}
            title={book.title}
          />
        </a>
        {inReadingList && (
          <>
            <BookStatus
              bookKey={book.key}
              status={status}
              updateStatus={updateStatus}
            />
            <ReadingStatusIndicator
              variant="compact"
              showLabel={true}
              status={status}
            />
            <BookRating
              size={26}
              rating={rating}
              onRate={(newRating) => updateRating(book.key, newRating)}
            />
          </>
        )}
      </div>
    </div>
  );
}
