import React from 'react';
import { useApp } from './context/AppContext.jsx';
import { HeroBanner } from './components/HeroBanner.jsx';
import { ShopTabs } from './components/ShopTabs.jsx';
import { TopBrandsList } from './components/TopBrandsList.jsx';
import { NearbyStoresList } from './components/NearbyStoresList.jsx';
import { FilterBar } from './components/FilterBar.jsx';
import { ProductGrid } from './components/ProductGrid.jsx';
import { ProductDetailModal } from './components/ProductDetailModal.jsx';
import { ConfirmationModal } from './components/ConfirmationModal.jsx';
import { BottomDock } from './components/BottomDock.jsx';
import { ToastContainer } from './components/Toast.jsx';

export function App() {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased flex flex-col items-center" >
      {/* 1Fi App Container: Balanced max-w-[530px] */}
      <div className="w-full max-w-[540px] min-h-screen bg-[var(--background)] flex flex-col relative pb-[calc(5rem+env(safe-area-inset-bottom))]">
        {/* 1. Hero Banner */}
        <HeroBanner />

        {/* 2. Shop Main Body */}
        <main className="flex-1 flex flex-col gap-3 px-8 py-2" id="shop-main">
          {/* 3-Tab Pill Switcher */}
          <ShopTabs />

          {/* Active Tab Views */}
          {activeTab === 'top-brands' && <TopBrandsList />}
          {activeTab === 'nearby-stores' && <NearbyStoresList />}
          {activeTab === 'marketplace' && (
            <section className="w-full flex flex-col gap-3">
              <FilterBar />
              <ProductGrid />
            </section>
          )}
        </main>

        {/* 3. Floating Bottom Navigation Dock */}
        <BottomDock />
      </div>

      {/* 4. Product Details Modal */}
      <ProductDetailModal />

      {/* 5. Simple Confirmation Modal */}
      <ConfirmationModal />

      {/* 6. Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
