import { useReadingList } from "../../hooks/useReadingList";
import ReadingListCard from "../ReadingListCard/ReadingListCard";

export default function ReadingListView() {
  const { readingList } = useReadingList();
  if (readingList.length === 0) return <p>I have not added any Books yet.</p>;
  const finishedBooks = readingList.filter(
    (book) => book.status === "finished"
  );
  const totalPages = finishedBooks.reduce(
    (sum, b) => sum + (b.number_of_pages || 0),
    0
  );
  return (
    <>
      <div className="ReadingListMeta">
        <p>Books read: {finishedBooks.length}</p>
        <p>Total pages read: {totalPages}</p>
      </div>
      <ul className="resultsList">
        {readingList.map((book) => (
          <li className="" key={book.key}>
            <ReadingListCard book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}
