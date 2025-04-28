import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import RootLayout from "./RootLayout";

export default function WithoutSearchLayout() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}
