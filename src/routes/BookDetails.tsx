import { useParams } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";

export default function BookDetails() {
  const { bookId } = useParams();
  return <h1>BookDetails for {bookId}</h1>;
}
