import React from 'react';
import { useApp } from '../context/AppContext.jsx';

export function ShopTabs() {
  const { activeTab, setActiveTab } = useApp();

  return (
    <div className="relative z-[10] -mt-8 mb-1 px-5 w-full">
      <div 
        className="bg-[#F2EEFE] border border-[#E5DAFB] p-1.5 rounded-full flex items-center justify-between shadow-md w-full"
        role="tablist"
      >
        {/* Tab 1: Top Brands */}
        <button 
          className={`flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 relative flex items-center justify-center ${
            activeTab === 'top-brands' 
              ? 'bg-white text-[#4A15D1] shadow-sm font-bold' 
              : 'text-gray-600 hover:text-purple-900'
          }`}
          onClick={() => setActiveTab('top-brands')}
          role="tab"
          aria-selected={activeTab === 'top-brands'}
          id="tab-btn-top-brands"
        >
          <span>Top Brands</span>
          {activeTab === 'top-brands' && (
            <span className="absolute bottom-1 w-6 h-0.5 bg-[#4A15D1] rounded-full" />
          )}
        </button>

        {/* Tab 2: Nearby Stores */}
        <button 
          className={`flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 relative flex items-center justify-center ${
            activeTab === 'nearby-stores' 
              ? 'bg-white text-[#4A15D1] shadow-sm font-bold' 
              : 'text-gray-600 hover:text-purple-900'
          }`}
          onClick={() => setActiveTab('nearby-stores')}
          role="tab"
          aria-selected={activeTab === 'nearby-stores'}
          id="tab-btn-nearby-stores"
        >
          <span>Nearby Stores</span>
          {activeTab === 'nearby-stores' && (
            <span className="absolute bottom-1 w-6 h-0.5 bg-[#4A15D1] rounded-full" />
          )}
        </button>

        {/* Tab 3: 1Fi Marketplace */}
        <button 
          className={`flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 relative flex items-center justify-center gap-1.5 ${
            activeTab === 'marketplace' 
              ? 'bg-white text-[#4A15D1] shadow-sm font-bold' 
              : 'text-gray-600 hover:text-purple-900'
          }`}
          onClick={() => setActiveTab('marketplace')}
          role="tab"
          aria-selected={activeTab === 'marketplace'}
          id="tab-btn-marketplace"
        >
          <span>Marketplace</span>
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-tight">
            New
          </span>
          {activeTab === 'marketplace' && (
            <span className="absolute bottom-1 w-6 h-0.5 bg-[#4A15D1] rounded-full" />
          )}
        </button>
      </div>
    </div>
  );
}
