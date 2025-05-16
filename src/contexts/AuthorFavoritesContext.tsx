import { createContext, useContext, useState } from "react";
import { AuthorDetails } from "../types/authorresponsetype";

type AuthorFavoritesContextType = {
  favorites: AuthorDetails[];
  addFavorite: (author: AuthorDetails) => void;
  removeFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
};

export const AuthorFavoritesContext =
  createContext<AuthorFavoritesContextType | null>(null);

export const AuthorFavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<AuthorDetails[]>([]);

  const addFavorite = (author: AuthorDetails) => {
    setFavorites((prev) => [...prev, author]);
  };

  const removeFavorite = (key: string) => {
    setFavorites((prev) => prev.filter((a) => a.key !== key));
  };

  const isFavorite = (key: string) => {
    return favorites.some((a) => a.key === key);
  };

  return (
    <AuthorFavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </AuthorFavoritesContext.Provider>
  );
};
