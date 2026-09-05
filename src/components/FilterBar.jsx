import React from 'react';
import { useApp } from '../context/AppContext.jsx';

export function FilterBar() {
  const {
    searchQuery, setSearchQuery,
    category, setCategory,
    sortBy, setSortBy,
    categories, products
  } = useApp();

  return (
    <div className="w-full px-1 mb-2">
      {/* Search Capsule */}
      <div className="mb-3">
        <div className="bg-white border border-gray-200/90 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-2.5 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search products, phones, laptops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            id="marketplace-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-gray-600 text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Meta Row: Count & Sort */}
      <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
        <span className="text-[11px] text-gray-400 font-medium">
          <strong className="text-gray-800 font-bold">{products.length}</strong> items available
        </span>

        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-gray-400 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold py-1 px-2 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-200 cursor-pointer"
            id="marketplace-sort-select"
          >
            <option value="popular">Popular</option>
            <option value="price-asc">Price: Low</option>
            <option value="price-desc">Price: High</option>
            <option value="emi-asc">0% EMI: Low</option>
            <option value="rating-desc">Rating</option>
          </select>
        </div>
      </div>

      {/* Category Filter Pills (Horizontal Scroll) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-[#4A15D1] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-purple-300'
              }`}
              id={`cat-pill-${cat.id}`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
