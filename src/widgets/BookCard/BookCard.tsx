import { Doc } from "../../types/OpenLibrarySearchResponse";

type Props = {
  book: Doc;
};

export default function BookCard({ book }: Props) {
  return (
    <>
      <div>
        <h1>{book.title}</h1>
      </div>
    </>
  );
}
