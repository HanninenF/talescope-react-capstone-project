import starIcon from "../../assets/Icons/starIcon.svg";
import "./BookInfo.scss";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import Loader from "../../components/Loader/Loader";
import { Doc } from "../../types/OpenLibrarySearchResponse";
import { getImageUrl } from "../../config/imageUrls";
/* import { fetchBookDetails } from "../../services/fetchBookDetails"; */

export default function BookInfo() {
  const { bookId } = useParams();
  const cleanBookId = (bookId || "").trim();
  const searchContext = useContext(SearchContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext) || {
    isLoading: false,
    setIsLoading: () => {},
  };

  const [book, setBook] = useState<Doc | null>(null);
  const [hasTriedFetch, setHasTriedFetch] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);

      let found: Doc | undefined;

      // 1. Försök hitta i SearchContext
      if (searchContext && searchContext.results.length > 0) {
        found = searchContext.results.find(
          (b) => b.key.replace("/works/", "").trim() === cleanBookId
        );
      }

      // 2. Om inte hittad, kolla i localStorage
      if (!found && searchContext) {
        const storageKey = `books:${searchContext.category}:${searchContext.query}`;
        const cached = localStorage.getItem(storageKey);
        if (cached) {
          try {
            const parsed = JSON.parse(cached) as Doc[];
            found = parsed.find(
              (b) => b.key.replace("/works/", "").trim() === cleanBookId
            );
          } catch {
            console.warn("Kunde inte parsa localStorage.");
          }
        }
      }

      /*   // 3. Om fortfarande inte hittad, hämta från nätet
      if (!found && !hasTriedFetch) {
        try {
          const fetched = await fetchBookDetails(cleanBookId);
          found = fetched;
        } catch {
          console.warn("Kunde inte hämta bok från nätet.");
        } finally {
          setHasTriedFetch(true);
        }
      } */

      setBook(found || null);
      setIsLoading(false);
    };

    if (cleanBookId) fetchBook();
  }, [cleanBookId, searchContext, hasTriedFetch, setIsLoading]);

  // Avbryt loading state om komponenten avmonteras
  useEffect(() => () => setIsLoading(false), [setIsLoading]);

  if (isLoading) return <Loader />;
  if (!book && hasTriedFetch) return <div>Book not found!</div>;

  return (
    book && (
      <div className="detailedBookCard">
        <div className="detailedBookCard__topSection">
          <button>X</button>

          <h3>{book.first_publish_year}</h3>
        </div>
        <div className="detailedBookCard__midSectionAuthor">
          <h2>{book.title}</h2>
          {book.cover_i ? (
            <a
              href={getImageUrl(book.cover_i, "L")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={getImageUrl(book.cover_i, "M")}
                alt={`Cover for ${book.title}`}
              />
            </a>
          ) : (
            <p>No cover available </p>
          )}
          <div
            className="BookCard__rating"
            role="radiogroup"
            aria-label="Betygsätt bok"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                className={`star ${i < rating ? "active" : ""}`}
                onClick={() => setRating(i + 1)}
                aria-pressed={i < rating}
                aria-label={`Sätt betyg ${i + 1} av 5`}
              >
                <img src={starIcon} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

//TODO: css a-taggar
