import { WorkDetails } from "../../../services/fetchBookDetails";
import "./BookHeader.scss";

type Props = {
  book: WorkDetails;
  inList: boolean;
  onToggle: () => void;
};

export default function BookHeader({ book, inList, onToggle }: Props) {
  return (
    <div className="detailedBookCard__topSection">
      <button onClick={onToggle} aria-label={inList ? "Remove" : "Add"}>
        {inList ? "❌" : "➕"}
      </button>
      {book.first_publish_year && <h3>{book.first_publish_year}</h3>}
      {!book.first_publish_year && book.edition_year && (
        <h3 className="editionYearInline">
          <em>This edition:</em> {book.edition_year}
        </h3>
      )}
      {!book.first_publish_year && !book.edition_year && <h3>Unknown year</h3>}
    </div>
  );
}
