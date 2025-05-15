import { useReadingList } from "../../contexts/ReadingListContext";
import ReadingListCard from "../ReadingListCard/ReadingListCard";

export default function ReadingListView() {
  const { readingList } = useReadingList();
  if (readingList.length === 0) return <p>I have not added any Books yet.</p>;
  return (
    <ul className="resultsList">
      {readingList.map((book) => (
        <li className="" key={book.key}>
          <ReadingListCard book={book} />
        </li>
      ))}
    </ul>
  );
}
