import { WorkDetails } from "../../../types/OpenLibrarySearchResponse";
import "./BookMetadata.scss";
type Props = {
  book: WorkDetails;
  classNameTitle: string;
  classNameAuthor: string;
};

export default function BookMetadata({
  book,
  classNameAuthor,
  classNameTitle,
}: Props) {
  return (
    <>
      <h2 className={classNameTitle}>{book.title}</h2>
      <h4 className={classNameAuthor}>{book.author_name.join(", ")}</h4>
    </>
  );
}
