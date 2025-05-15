import RatingGroup from "../RatingGroup/RatingGroup";

type Props = {
  rating: number;
  onRate: (rating: number) => void;
  size: number;
};

export default function BookRating({ rating, onRate, size }: Props) {
  return (
    <RatingGroup
      rating={rating}
      onRate={(newRating) => onRate(newRating)}
      size={size}
    />
  );
}
