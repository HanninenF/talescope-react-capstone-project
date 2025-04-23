import { useContext } from "react";
import "./SearchBar.scss";
import { SearchContext } from "../../contexts/SearchContext";
export default function SearchBar() {
  const context = useContext(SearchContext);
  if (!context)
    return null; /*useContext(SearchContext) returnerar null om man försöker använda den utanför SearchContextProvider. Du menar utanför <SearchContext.Provider>
  {children}
</SearchContext.Provider>*/
  const { query, setQuery, category, setCategory } = context;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        name="category"
        id="category"
      >
        <option value="all">All</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
      </select>
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

/* context är kopplat till searchContext. Om det inte finns någon context returneras null och då händer ingenting?
Jag destructar query och setQuery från kontexten. När jag skriver i sökfältet så ändrar jag setQuery och den nya queryn blir det som står i fältet. I useDebounce är min query ett argument och den triggar useEffect vilket gör att debouncedValue returneras efter den tid som är satt. useFetchBooks triggas med debouncedValue argumentet. useEffext triggas och controller skapas. getBooks triggar loadingkomponenten. sen provas fetchBooks med argumenten query och controller.signal. fetchBooks sköter själva api-anropet. const response = await fetch(url, { signal }); hur signal destruktat där fungerar och vad det gör förstår jag inte riktigt på djupet. Om anropet misslyckas kastas ett nytt error, vilket avbryter funktionen och  triggar catch i useFetchBooks. Om felet är något annat än abortError så triggas setError could not fetch books, och då kan man använda det i UI sen. Som sista händelse sätts isLoading till false. Om fetchBooks inte kastar ett fel returneras data.docs och setBooks sätts till data.docs. controller.abort städas. i SearchContextProvider har vi destructat books från useFetchBooks, som returnerar books, isLoading, error. Men varför vi behöver returnera isLoading och error förstår jag inte eftersom vi bara destructar books, men det kanske kommer användas i loading och error komponenter senare. i SearchContextProvider triggar books useEffect och setResults sätts till böckerna från useFetchBooks
*/
