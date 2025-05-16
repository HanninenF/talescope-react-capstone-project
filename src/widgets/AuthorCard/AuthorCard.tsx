import { useAuthorFavoritesContext } from "../../hooks/useAuthorFavorites";
import { AuthorDetails } from "../../types/authorresponsetype";
import "./AuthorCard.scss";
type Props = {
  authorDetails: AuthorDetails;
};

export default function AuthorCard({ authorDetails }: Props) {
  const { addFavorite, removeFavorite, isFavorite } =
    useAuthorFavoritesContext();
  const favorite = isFavorite(authorDetails.key);

  const handleToggleFavorite = () => {
    favorite ? removeFavorite(authorDetails.key) : addFavorite(authorDetails);
  };
  return (
    <>
      <div className="authorCard">
        <button onClick={handleToggleFavorite} className="favoriteButton">
          {favorite ? "💔 remove favorite" : "❤️ Favorite"}
        </button>
        <h1>{authorDetails.name}</h1>
      </div>
    </>
  );
}
