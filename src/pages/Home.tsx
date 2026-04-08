import React, { useState, useEffect, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import RestaurantCard from "../components/RestaurantCard";
import type { Restaurant } from "../types";

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filters, setFilters] = useState({
    isOpen: false,
    price: "",
    category: "",
  });
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // API
    fetch("https://69d674d01c120e733cce3dbe.mockapi.io/api/restaurant")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  const filtered = useMemo(() => {
    let result = restaurants;
    if (filters.isOpen) result = result.filter((r) => r.is_open);
    if (filters.price)
      result = result.filter((r) => r.price_range === filters.price);
    if (filters.category)
      result = result.filter((r) => r.category === filters.category);
    return result;
  }, [filters, restaurants]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light mb-4">Restaurants</h1>
      <p className="text-gray-500 max-w-2xl mb-8">
        Discover the best restaurants around you with a variety of delicious
        dishes, cozy atmospheres, and unforgettable dining experiences.
      </p>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <h2 className="text-2xl font-light mb-6">All Restaurants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.slice(0, visibleCount).map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-16 py-3 border border-[#001e3c] text-[#001e3c] text-sm font-semibold hover:bg-gray-50 uppercase tracking-widest"
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
