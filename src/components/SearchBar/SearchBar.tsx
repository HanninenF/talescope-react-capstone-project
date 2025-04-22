import { useContext } from "react";
import "./SearchBar.scss";
import { SearchContext } from "../../contexts/SearchContext";
export default function SearchBar() {
  const context = useContext(SearchContext);
  if (!context) return null;
  const { query, setQuery } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search for book"
          id="search"
          type="text"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

//
