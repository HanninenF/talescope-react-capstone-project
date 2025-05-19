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
import { useEffect, useState } from "react";

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
    updatePages,
  } = useBookDetails(bookId);

  const [showPagesModal, setShowPagesModal] = useState(false);
  const [manualPageCount, setManualPageCount] = useState("");

  const { readingList } = useReadingList();
  const bookInList = readingList.find((b) => b.key === book?.key);

  const handleStatusUpdate = async (
    key: string,
    status: "reading" | "finished" | null
  ) => {
    const result = await updateStatus(key, status);
    if (result === "missing_pages") {
      setShowPagesModal(true);
    }
  };

  useEffect(() => {
    if (showPagesModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showPagesModal]);

  if (isBookLoading) return <Loader />;
  if (!book && hasTriedFetch) return <div>Book not found!</div>;
  if (!book) return null;
  const largeUrl = getImageUrl(book.cover_i, "L");
  return (
    <>
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
                updateStatus={handleStatusUpdate}
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

      {showPagesModal &&
        status === "finished" &&
        bookInList?.number_of_pages == null && (
          <div
            className="modalOverlay"
            onClick={() => setShowPagesModal(false)}
          >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <h3>Missing page count</h3>
              <p>Please enter the number of pages manually:</p>
              <input
                type="number"
                min="1"
                autoFocus
                value={manualPageCount}
                onChange={(e) => setManualPageCount(e.target.value)}
              />
              <button
                onClick={() => {
                  const value = parseInt(manualPageCount, 10);
                  if (!isNaN(value) && value > 0) {
                    updatePages(book.key, value);
                    setShowPagesModal(false);
                    setManualPageCount("");
                  }
                }}
              >
                Save
              </button>
              <button onClick={() => setShowPagesModal(false)}>Cancel</button>
            </div>
          </div>
        )}
    </>
  );
}
