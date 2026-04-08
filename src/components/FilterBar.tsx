import React from "react";

interface FilterProps {
  onFilterChange: (filters: {
    isOpen: boolean;
    price: string;
    category: string;
  }) => void;
  filters: { isOpen: boolean; price: string; category: string };
}

const FilterBar: React.FC<FilterProps> = ({ onFilterChange, filters }) => {
  const categories = ["Japanese", "American", "Italian", "Seafood", "Cafe"];

  return (
    <div className="flex flex-wrap items-center gap-4 py-6 border-y border-gray-200 mb-8">
      <span className="text-sm text-gray-500">Filter By:</span>

      <label className="flex items-center gap-2 text-sm cursor-pointer border-b border-gray-300 focus:outline-none py-1">
        <input
          type="checkbox"
          checked={filters.isOpen}
          onChange={(e) =>
            onFilterChange({ ...filters, isOpen: e.target.checked })
          }
          className="rounded-full border-gray-300"
        />
        Open Now
      </label>

      <select
        value={filters.price}
        onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
        className="border-b border-gray-300 text-sm focus:outline-none py-1"
      >
        <option value="">Price</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>

      <select
        value={filters.category}
        onChange={(e) =>
          onFilterChange({ ...filters, category: e.target.value })
        }
        className="border-b border-gray-300 text-sm focus:outline-none py-1"
      >
        <option value="">Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button
        onClick={() =>
          onFilterChange({ isOpen: false, price: "", category: "" })
        }
        className="ml-auto text-xs border px-4 py-2 uppercase tracking-widest text-gray-400 hover:bg-gray-50"
      >
        Clear All
      </button>
    </div>
  );
};

export default FilterBar;
