import { useContext } from "react";
import { AuthorFavoritesContext } from "../contexts/AuthorFavoritesContext";

export const useAuthorFavoritesContext = () => {
  const context = useContext(AuthorFavoritesContext);
  if (!context) {
    throw new Error(
      "useAuthorFavoritesContext must be used within AuthorFavoritesProvider"
    );
  }
  return context;
};
