import { Link } from "react-router-dom";
import {
  ReadingListItem,
  useReadingList,
} from "../../contexts/ReadingListContext";
import { getImageUrl } from "../../config/imageUrls";
import RatingGroup from "../BookInfo/RatingGroup/RatingGroup";
import "./ReadingListCard.scss";
import ReadingStatusIndicator from "../BookInfo/ReadingStatusIndicator/ReadingStatusIndicator";
import BookMetadata from "../BookInfo/BookMetadata/BookMetadata";
import BookCover from "../BookInfo/BookCover/BookCover";
import BookCard from "../BookCard/BookCard";

type Props = {
  book: ReadingListItem;
};
export default function ReadingListCard({ book }: Props) {
  const { updateRating } = useReadingList();
  const rating = book.rating || 0;

  return (
    <>
      <BookCard book={book}>
        {book.rating !== undefined && (
          <RatingGroup
            rating={rating}
            onRate={(newRating) => updateRating(book.key, newRating)}
            size={18}
          />
        )}
      </BookCard>
    </>
  );
}
