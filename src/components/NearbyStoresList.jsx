import React, { useState } from 'react';
import { NEARBY_STORES } from '../data/mockData.js';
import { useApp } from '../context/AppContext.jsx';

export function NearbyStoresList() {
  const [storeSearch, setStoreSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('Jaipur');
  const { addToast } = useApp();

  const filteredStores = NEARBY_STORES.filter(s => 
    s.name.toLowerCase().includes(storeSearch.toLowerCase()) ||
    s.address.toLowerCase().includes(storeSearch.toLowerCase())
  );

  const handleStoreClick = (store) => {
    addToast(`Selected store: ${store.name} (${store.distance})`, 'info');
  };

  const getStoreLogo = (brandType, name) => {
    if (brandType === 'suzuki') {
      return (
        <div className="w-10 h-10 flex flex-col items-center justify-center text-red-600 font-black">
          <span className="text-base leading-none">S</span>
          <span className="text-[6px] tracking-widest text-blue-900 font-bold">SUZUKI</span>
        </div>
      );
    }
    if (brandType === 'honda') {
      return (
        <div className="w-10 h-10 flex flex-col items-center justify-center text-red-600 font-black">
          <span className="text-base leading-none">🪽</span>
          <span className="text-[6px] tracking-widest text-red-600 font-bold">HONDA</span>
        </div>
      );
    }
    if (brandType === 'charger') {
      return (
        <div className="w-10 h-10 flex flex-col items-center justify-center text-black font-black text-center leading-tight">
          <span className="text-[7px] bg-black text-white px-1 py-0.5 rounded font-bold">CHARGER</span>
          <span className="text-[5px] tracking-tighter text-gray-700">ON WHEELS</span>
        </div>
      );
    }
    return (
      <div className="w-10 h-10 flex items-center justify-center text-red-500 font-bold text-[9px] text-center border border-dashed border-red-200 rounded-lg">
        {name.slice(0, 8)}
      </div>
    );
  };

  return (
    <div className="w-full px-1 pb-16">
      {/* Search Bar matching live screenshot */}
      <div className="mb-4">
        <div className="bg-white border border-gray-200/90 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-2.5 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search stores..."
            value={storeSearch}
            onChange={(e) => setStoreSearch(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            id="search-nearby-stores-input"
          />
          {storeSearch && (
            <button 
              onClick={() => setStoreSearch('')}
              className="text-gray-400 hover:text-gray-600 text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Header with City Dropdown */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-base font-bold text-gray-900 tracking-tight">Nearby Stores</h2>
        
        {/* City Selector Pill */}
        <div className="relative">
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              addToast(`Location: ${e.target.value}`, 'info');
            }}
            className="appearance-none bg-white border border-gray-200 text-gray-700 text-xs font-semibold py-1 pl-2.5 pr-6 rounded-full shadow-sm cursor-pointer hover:border-purple-300 focus:outline-none focus:ring-1 focus:ring-purple-200 transition-all"
            id="city-selector-dropdown"
          >
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-gray-500">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stores List */}
      <div className="flex flex-col gap-2.5">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            onClick={() => handleStoreClick(store)}
            className="bg-white border border-gray-200/80 rounded-2xl p-3.5 flex items-center gap-3.5 hover:shadow-md hover:border-purple-200 transition-all duration-200 cursor-pointer group"
          >
            {/* Store Brand Icon */}
            <div className="w-12 h-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0 p-1 group-hover:scale-105 transition-transform">
              {getStoreLogo(store.brandType, store.name)}
            </div>

            {/* Store Information */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1">
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#4A15D1] transition-colors truncate">
                  {store.name}
                </h3>
                {/* Distance Badge */}
                <span className="shrink-0 text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-1.5 py-0.2 rounded-full">
                  {store.distance}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-normal mt-0.5 line-clamp-2 leading-snug">
                {store.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
