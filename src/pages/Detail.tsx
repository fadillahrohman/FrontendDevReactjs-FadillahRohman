import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Restaurant } from "../types";
import StarRating from "../components/StarRating";

const Detail: React.FC = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    // API
    fetch(`https://69d674d01c120e733cce3dbe.mockapi.io/api/restaurant/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }, [id]);

  if (!restaurant)
    return (
      <div className="p-10 text-center uppercase tracking-widest">
        Loading...
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/" className="text-sm text-gray-500 mb-8 inline-block">
        Back to List
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-5xl font-light mb-4">{restaurant.name}</h1>
          <StarRating rating={restaurant.rating} />
        </div>
        {/* OPSIONAL: MAP PLACEHOLDER */}
        <div className="w-full md:w-1/3 h-48 bg-gray-200 flex items-center justify-center text-gray-400">
          Map Area
        </div>
      </div>

      <div className="border-t border-gray-200 pt-10">
        <h3 className="text-lg mb-8 uppercase tracking-widest text-gray-500">
          Reviews
        </h3>
        <div className="space-y-10">
          {restaurant.reviews.length > 0 ? (
            restaurant.reviews.map((review, i) => (
              <div key={i} className="flex gap-6">
                <img
                  src={review.user_image}
                  className="w-16 h-16 rounded-full bg-gray-200"
                  alt={review.user_name}
                />
                <div>
                  <h4 className="font-semibold">{review.user_name}</h4>
                  <div className="my-1">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
