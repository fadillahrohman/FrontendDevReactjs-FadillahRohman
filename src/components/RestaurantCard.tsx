import React from "react";
import { Link } from "react-router-dom";
import type { Restaurant } from "../types";
import StarRating from "./StarRating";

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  return (
    <div className="bg-white border border-gray-100 flex flex-col">
      <img
        src={restaurant.photos[0]}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 grow">
        <h3 className="text-lg font-semibold truncate mb-1">
          {restaurant.name}
        </h3>
        <StarRating rating={restaurant.rating} />
        <div className="flex justify-between items-center mt-3 text-xs text-gray-500 uppercase tracking-wider">
          <span>
            {restaurant.category} • {restaurant.price_range}
          </span>
          <span className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${restaurant.is_open ? "bg-teal-300" : "bg-red-500"}`}
            />
            {restaurant.is_open ? "OPEN NOW" : "CLOSED"}
          </span>
        </div>
      </div>
      <Link
        to={`/detail/${restaurant.id}`}
        className="bg-[#001e3c] text-white text-center py-3 text-sm font-bold hover:bg-blue-900 transition-colors"
      >
        LEARN MORE
      </Link>
    </div>
  );
};

export default RestaurantCard;
