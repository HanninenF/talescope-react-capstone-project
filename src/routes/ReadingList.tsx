import PageWrapper from "../components/PageWrapper/PageWrapper";
import ReadingListView from "../widgets/ReadingListView/ReadingListView";

export default function ReadingList() {
  return (
    <PageWrapper>
      <h1>📚 My Reading List</h1>
      <ReadingListView />
    </PageWrapper>
  );
}
