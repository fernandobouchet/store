import { GoStarFill } from "react-icons/go";

interface Props {
  rating: number;
}

export default function ProductRating({ rating }: Props) {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <GoStarFill key={i} className="text-primary fill-primary h-5 w-5" />
    );
  }

  while (stars.length < 5) {
    stars.push(
      <GoStarFill
        key={`empty-${stars.length}`}
        className="text-gray-300 h-5 w-5"
      />
    );
  }

  return stars;
}
