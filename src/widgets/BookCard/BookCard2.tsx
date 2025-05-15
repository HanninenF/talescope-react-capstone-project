import { routes } from "../../config/routes";
import { WorkDetails } from "../../types/OpenLibrarySearchResponse";
import { isExtendedDoc } from "../../utils/isExtendedDoc";
import { mapDocToWorkDetails } from "../../utils/mapDocToWorkDetails";

type Props<
  T extends {
    key: string;
    title: string;
    cover_i?: number;
    author_name?: string[];
  },
> = { book: T; children?: React.ReactNode };

export default function BookCard2<
  T extends {
    key: string;
    title: string;
    cover_i?: number;
    author_name?: string[];
    status?: "reading" | "finished";
  },
>({ book, children }: Props<T>) {
  //skapa en url i stil med /library/book/OL8127201W – används för att länka till bokens detaljsida.
  const bookId = book.key.replace("/works/", "");
  const bookDetailsUrl = routes.bookDetails.replace(":bookId", bookId);
  console.log("bookDetailsUrl: ", bookDetailsUrl);

  //Spara lässtatusen (kan vara "reading" eller "finished") för att användas i statusindikatorn längre ner.
  const status = book.status;

  /*Om boken kommer från sökresultat (Doc), så mappas den om till WorkDetails.
Om den redan är ett WorkDetails, används den som den är.
Om author_name saknas, sätts den till ["Unknown"].*/

  const workBook: WorkDetails = isExtendedDoc(book)
    ? mapDocToWorkDetails(book)
    : { ...book, author_name: book.author_name ?? ["unknown"] };

  return <></>;
}
