type Props = {
  setSelectedAuthor: React.Dispatch<React.SetStateAction<string>>;
  selectedAuthor: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function AuthorSearchBar({
  setSelectedAuthor,
  selectedAuthor,
  onSubmit,
}: Props) {
  return (
    <div className="authorSearchBarWrapper">
      <form onSubmit={onSubmit}>
        <label htmlFor="search">
          <input
            onChange={(e) => setSelectedAuthor(e.target.value)}
            value={selectedAuthor}
            placeholder="Search for author"
            id="search"
            type="text"
          />
        </label>
        <button type="submit">🔎</button>
      </form>
    </div>
  );
}
