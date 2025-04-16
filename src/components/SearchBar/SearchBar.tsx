import "./SearchBar.scss";
export default function SearchBar() {
  return (
    <form /* onSubmit={} */>
      <label htmlFor="">
        <input type="text" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
