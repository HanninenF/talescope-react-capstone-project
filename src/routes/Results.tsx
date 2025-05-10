import { useContext } from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { SearchContext } from "../contexts/SearchContext";
import BookList from "../widgets/BookList/BookList";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Results() {
  const searchContext = useContext(SearchContext);

  if (!searchContext || searchContext.results.length === 0) {
    return null;
  }

  /* console.log("SearchContext i Results:", searchContext); */
  return <BookList books={searchContext?.results || []} />;
}
