import React from 'react';
import { useApp } from '../context/AppContext.jsx';

export function BottomDock() {
  const { bottomNav, setBottomNav, setActiveTab, addToast } = useApp();

  const handleNav = (tabId, label) => {
    setBottomNav(tabId);
    if (tabId === 'shop') {
      setActiveTab('marketplace');
    } else {
      addToast(`Navigating to ${label}`, 'info');
    }
  };

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'shop',
      label: 'Shop',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 'emi-dues',
      label: 'EMI Dues',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      )
    },
    {
      id: 'limit',
      label: 'Limit',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <nav 
      className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-between z-40 w-[92%] max-w-[480px]"
      aria-label="Bottom Navigation"
    >
      {navItems.map((item) => {
        const isActive = bottomNav === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNav(item.id, item.label)}
            className={`flex flex-col items-center justify-center relative py-1 px-2.5 transition-all ${
              isActive 
                ? 'text-[#4A15D1] font-bold scale-105' 
                : 'text-gray-400 hover:text-gray-600 font-medium'
            }`}
            id={`dock-btn-${item.id}`}
          >
            {isActive && (
              <span className="absolute -top-1 w-4 h-0.5 bg-[#4A15D1] rounded-full" />
            )}
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-[10px] tracking-tight mt-0.5 font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
