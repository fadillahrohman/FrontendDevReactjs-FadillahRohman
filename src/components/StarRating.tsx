import React from "react";

interface Props {
  rating: number;
}

const StarRating: React.FC<Props> = ({ rating }) => {
  return (
    <div className="flex text-[#001e3c] text-lg">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default StarRating;
