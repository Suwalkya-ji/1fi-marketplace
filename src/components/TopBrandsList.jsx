import React, { useState } from 'react';
import { TOP_BRANDS } from '../data/mockData.js';
import { useApp } from '../context/AppContext.jsx';

export function TopBrandsList() {
  const [brandSearch, setBrandSearch] = useState('');
  const { setActiveTab, setCategory, addToast } = useApp();

  const filteredBrands = TOP_BRANDS.filter(b => 
    b.name.toLowerCase().includes(brandSearch.toLowerCase()) ||
    (b.category && b.category.toLowerCase().includes(brandSearch.toLowerCase()))
  );

  const handleBrandClick = (brand) => {
    if (brand.category === 'Electronics') {
      setActiveTab('marketplace');
      setCategory('all');
      addToast(`Showing 0% EMI products for ${brand.name}`, 'info');
    } else {
      addToast(`Browsing ${brand.name} partner vouchers & 0% EMIs`, 'info');
    }
  };

  return (
    <div className="w-full px-1 pb-16">
      {/* Search Bar matching live screenshot & DevTools */}
      <div className="mb-3">
        <div className="bg-white border border-gray-200/90 rounded-full px-4 py-3 shadow-sm flex items-center gap-3 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search online stores..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            id="search-top-brands-input"
          />
          {brandSearch && (
            <button 
              onClick={() => setBrandSearch('')}
              className="text-gray-400 hover:text-gray-600 text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">Top Brands</h2>
      </div>

      {/* Brand Cards List */}
      <div className="flex flex-col gap-3">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleBrandClick(brand)}
            className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md hover:border-purple-200 transition-all duration-200 cursor-pointer group"
          >
            {/* Brand Logo Box */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 shadow-sm transition-transform group-hover:scale-105"
              style={{
                backgroundColor: brand.bgColor || '#111827',
                color: brand.textColor || '#FFFFFF',
                border: brand.border || 'none'
              }}
            >
              {brand.isApple ? (
                <div className="flex flex-col items-center justify-center leading-none">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.57-11.05-20.48-14.26-32.74-3.21-12.26-4.82-23.75-4.82-34.47 0-14.54 3.73-26.68 11.19-36.43 7.46-9.75 16.89-14.74 28.3-14.97 4.12 0 8.95 1.05 14.48 3.17 5.53 2.13 9.4 3.24 11.61 3.35 2.65-.21 6.83-1.42 12.54-3.64 5.71-2.22 10.59-3.23 14.64-3.03 10.87.53 19.68 4.63 26.43 12.3-9.57 5.8-14.26 13.97-14.07 24.51.21 8.35 3.42 15.34 9.63 20.97 6.21 5.63 13.43 8.84 21.67 9.63-2.12 6.33-4.69 12.63-7.71 18.91zM119.22 31.84c0-6.73 2.45-12.87 7.35-18.42 4.9-5.55 10.97-8.99 18.2-10.32.21 1.27.32 2.33.32 3.17 0 6.63-2.5 12.87-7.51 18.73-5.01 5.86-11.08 9.24-18.2 10.14-.07-1.05-.16-2.14-.16-3.3z"/>
                  </svg>
                  <span className="text-[7px] tracking-tighter mt-0.5">Premium Reseller</span>
                </div>
              ) : (
                <span className="text-[11px] font-black tracking-wider uppercase text-center px-1">
                  {brand.logoText || brand.name}
                </span>
              )}
            </div>

            {/* Brand Information */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[15px] sm:text-base text-gray-900 group-hover:text-[#4A15D1] transition-colors truncate">
                {brand.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 font-normal mt-0.5">
                {brand.tenureInfo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
