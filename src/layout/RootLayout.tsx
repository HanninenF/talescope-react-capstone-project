import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import SearchBar from "../components/SearchBar/SearchBar";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <PageWrapper>
          <SearchBar />
          <Outlet />
        </PageWrapper>
      </main>
    </>
  );
}
