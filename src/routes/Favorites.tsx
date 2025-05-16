import { useAuthorFavoritesContext } from "../hooks/useAuthorFavorites";
import AuthorCard from "../widgets/AuthorCard/AuthorCard";

export default function Favorites() {
  const { favorites } = useAuthorFavoritesContext();

  return (
    <section>
      <h2>Your favorite authors</h2>

      {favorites.length === 0 ? (
        <p>You don't have any favorite authors yet.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((author) => (
            <li key={author.key}>
              <AuthorCard authorDetails={author} />
            </li>
          ))}
        </ul>
      )}
      <p>Total authors: {favorites.length}</p>
      <p>
        Total works:{" "}
        {favorites.length > 0
          ? favorites.reduce((acc, f) => acc + f.work_count, 0)
          : 0}
      </p>

      <p>
        Average works:{" "}
        {favorites.length > 0
          ? Math.round(
              favorites.reduce((acc, f) => acc + f.work_count, 0) /
                favorites.length
            )
          : 0}
      </p>
    </section>
  );
}
