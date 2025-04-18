import { useState } from "react";
import "./SearchBar.scss";
export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form /* onSubmit={} */>
      <label htmlFor="search">
        <input
          onChange={handleChange}
          value={inputValue}
          placeholder="Search for book"
          id="search"
          type="text"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
