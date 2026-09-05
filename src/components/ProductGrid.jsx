import React from 'react';
import { useApp } from '../context/AppContext.jsx';
import { ProductCard } from './ProductCard.jsx';

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/70 p-3.5 flex flex-col justify-between animate-pulse">
      <div className="flex items-center justify-between mb-2">
        <div className="w-16 h-4 bg-gray-200 rounded-md" />
        <div className="w-10 h-4 bg-gray-100 rounded-full" />
      </div>

      <div className="w-full h-36 bg-gray-100 rounded-xl mb-2.5" />

      <div className="space-y-2">
        <div className="w-12 h-3 bg-purple-100 rounded" />
        <div className="w-3/4 h-4 bg-gray-200 rounded" />
        <div className="w-full h-3 bg-gray-100 rounded" />
        <div className="w-2/3 h-3 bg-gray-100 rounded" />
      </div>

      <div className="mt-3 pt-2 border-t border-gray-100 space-y-2">
        <div className="w-20 h-5 bg-gray-200 rounded" />
        <div className="w-full h-10 bg-purple-50 rounded-xl" />
        <div className="w-full h-8 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}

export function ProductGrid() {
  const { products, isLoading, error, refetchProducts, setSearchQuery, setCategory } = useApp();

  // 1. Loading State (Skeleton cards matching 1Fi UI)
  if (isLoading) {
    return (
      <div className="w-full px-1 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <ProductSkeleton key={n} />
          ))}
        </div>
      </div>
    );
  }

  // 2. Error State with Working Retry Button
  if (error) {
    return (
      <div className="w-full px-4 py-12 text-center bg-white rounded-2xl border border-red-100 shadow-sm mx-1 my-2">
        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
          ⚠️
        </div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">
          Unable to load products
        </h3>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed max-w-xs mx-auto">
          {error || 'Something went wrong while loading the marketplace.'}
        </p>
        <button
          onClick={() => refetchProducts()}
          className="px-5 py-2.5 bg-[#4A15D1] hover:bg-[#3B0FA8] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          id="btn-retry-fetch"
        >
          Try Again
        </button>
      </div>
    );
  }

  // 3. Empty State
  if (products.length === 0) {
    return (
      <div className="w-full px-4 py-12 text-center bg-white rounded-2xl border border-gray-100 shadow-sm mx-1 my-2">
        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
          🔍
        </div>
        <h3 className="text-sm font-bold text-gray-900 mb-1">
          No products available
        </h3>
        <p className="text-xs text-gray-500 mb-4 leading-relaxed max-w-xs mx-auto">
          We couldn't find any products matching your search criteria.
        </p>
        <button
          onClick={() => {
            setSearchQuery('');
            setCategory('all');
          }}
          className="px-4 py-2 bg-[#4A15D1] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[#3B0FA8] transition-colors"
          id="btn-reset-filters"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  // 4. Product Listing Grid
  return (
    <div className="w-full px-1 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
