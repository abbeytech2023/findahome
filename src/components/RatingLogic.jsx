import { useState } from "react";
import StarRating from "./StarRating";

export function RatingLogic() {
  const [rating, setRating] = useState();
  const [averageRating, setAverageRating] = useState(0);

  const calculateAverageRating = () => {
    const sum = rating.reduce((acc, rating) => {
      acc + rating;
    }, 0);

    const average = sum / rating.length;
    setAverageRating(7);
  };

  const handleRatingSubmission = (rating) => {
    setRating((prevRatings) => [...prevRatings, rating]);
    calculateAverageRating();
  };
  2;

  return (
    <div>
      <StarRating defaultRating={averageRating} size={30} />
    </div>
  );
}
