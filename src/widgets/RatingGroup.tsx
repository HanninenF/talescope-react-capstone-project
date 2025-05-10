import StarIcon from "../components/StarIcon/StarIcon";

type RatingGroupProps = {
  rating: number;
  onRate: (newRating: number) => void;
  size?: number;
};

export default function RatingGroup({
  rating,
  onRate,
  size = 24,
}: RatingGroupProps) {
  return (
    <div className="BookCard__rating" role="radiogroup" aria-label="Rate Book">
      {Array.from({ length: 5 }).map((_, i) => {
        const isActive = i < rating;
        return (
          <button
            key={i}
            className={`star ${isActive ? "active" : ""}`}
            onClick={() => onRate(i + 1)}
            aria-pressed={isActive}
            aria-label={`Set rating ${i + 1} of 5`}
          >
            <StarIcon size={size} />
          </button>
        );
      })}
    </div>
  );
}
