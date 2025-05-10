import { useReadingList } from "../../contexts/ReadingListContext";
import ReadingListCard from "../ReadingListCard/ReadingListCard";

export default function ReadingListView() {
  const { readingList } = useReadingList();
  if (readingList.length === 0) return <p>You have not added any Books yet.</p>;
  return (
    <ul>
      {readingList.map((book) => (
        <li>
          <ReadingListCard book={book} />
        </li>
      ))}
    </ul>
  );
}
