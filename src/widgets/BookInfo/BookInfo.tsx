import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import Loader from "../../components/Loader/Loader";

export default function BookInfo() {
  const { bookId } = useParams();
  const context = useContext(SearchContext);

  if (!context || !context.results.length) return <Loader />;
  const { results } = context;

  const book = results.find(
    (book) => book.key.replace("/works/", "") === bookId
  );
  return (
    <>
      {book && (
        <div>
          <h2>{book.title}</h2>
        </div>
      )}
    </>
  );
}
