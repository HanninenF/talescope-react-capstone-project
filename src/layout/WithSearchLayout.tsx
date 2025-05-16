import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import RootLayout from "./RootLayout";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import ResultsWrapper from "../components/ResultsWrapper/ResultsWrapper";
import AuthorSearch from "../widgets/AuthorSearch/AuthorSearch";

export default function WithSearchLayout() {
  return (
    <>
      <SearchBar />
      <AuthorSearch />
      <ResultsWrapper>
        <Outlet />
      </ResultsWrapper>
    </>
  );
}
