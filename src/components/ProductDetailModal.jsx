import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext.jsx';

export function ProductDetailModal() {
  const {
    selectedProduct, setSelectedProduct,
    selectedVariant, setSelectedVariant,
    selectedColor, setSelectedColor,
    selectedTenure, setSelectedTenure,
    confirmEmiOrder
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct, setSelectedProduct]);

  if (!selectedProduct) return null;

  const currentVariant = selectedVariant || selectedProduct.variants[0];
  const currentColor = selectedColor || selectedProduct.colors[0];
  const currentPrice = selectedProduct.basePrice + (currentVariant?.priceDelta || 0);

  // Compute available EMI plans dynamically based on current variant price
  const emiPlans = selectedProduct.tenurePlans.map((tenure) => {
    const monthlyAmount = Math.ceil(currentPrice / tenure);
    return {
      tenureMonths: tenure,
      monthlyAmount,
      isZeroCost: true
    };
  });

  const activeEmiPlan = emiPlans.find(p => p.tenureMonths === selectedTenure) || emiPlans[0];

  const handleProceed = () => {
    confirmEmiOrder({
      product: selectedProduct,
      variant: currentVariant,
      color: currentColor,
      emiPlan: activeEmiPlan,
      finalPrice: currentPrice
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={() => setSelectedProduct(null)}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-6 border border-gray-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div>
            <span className="text-[10px] font-bold text-[#4A15D1] uppercase tracking-wider">
              {selectedProduct.brand} • 0% No-Cost EMI
            </span>
            <h2 id="product-modal-title" className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {selectedProduct.title}
            </h2>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center font-bold text-xs transition-colors"
            aria-label="Close product modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Top Section: Gallery & Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            {/* Gallery Image */}
            <div className="space-y-2.5">
              <div className="w-full h-56 bg-gradient-to-b from-gray-50 to-purple-50/30 rounded-2xl p-3 flex items-center justify-center border border-gray-100 relative">
                <img
                  src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                  alt={selectedProduct.title}
                  className="max-h-full max-w-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-1.5 py-0.2 rounded-md">
                  0% No-Cost EMI
                </span>
              </div>

              {/* Thumbnails */}
              {selectedProduct.images.length > 1 && (
                <div className="flex gap-2">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-12 rounded-xl border p-1 bg-gray-50 flex items-center justify-center overflow-hidden transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#4A15D1] ring-2 ring-purple-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-label={`Thumbnail ${idx + 1}`}
                    >
                      <img src={img} alt="thumb" className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price & Options */}
            <div className="space-y-3.5">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-gray-900">
                    ₹{currentPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ₹{selectedProduct.mrp.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Color Swatches */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Color: <span className="font-semibold text-gray-900">{currentColor?.name}</span>
                </label>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((c, i) => {
                    const isSelected = currentColor?.name === c.name;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSelectedColor(c);
                          if (c.imageIndex !== undefined && selectedProduct.images[c.imageIndex]) {
                            setActiveImageIndex(c.imageIndex);
                          }
                        }}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected ? 'border-[#4A15D1] scale-110 shadow-md ring-2 ring-purple-200' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                        aria-label={c.name}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Variant Selector */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Variant / Storage:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.variants.map((v) => {
                    const isSelected = currentVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-[#4A15D1] text-white border-[#4A15D1] shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300'
                        }`}
                        aria-pressed={isSelected}
                      >
                        {v.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Choose EMI Plan */}
          <div className="bg-[#FAF7FF] border border-[#E9DFFC] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <span>⚡ Choose 0% EMI Plan</span>
                  <span className="bg-purple-100 text-[#4A15D1] text-[10px] font-bold px-2 py-0.2 rounded-full">
                    No-Cost
                  </span>
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Select a repayment tenure that works best for you.
                </p>
              </div>
            </div>

            {/* EMI Plans Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {emiPlans.map((plan) => {
                const isSelected = activeEmiPlan.tenureMonths === plan.tenureMonths;
                return (
                  <button
                    key={plan.tenureMonths}
                    type="button"
                    onClick={() => setSelectedTenure(plan.tenureMonths)}
                    className={`p-3 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between relative cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#4A15D1] shadow-md ring-2 ring-purple-200'
                        : 'bg-white/80 border-gray-200/90 text-gray-800 hover:border-purple-300 hover:bg-white'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-900">
                        {plan.tenureMonths} Months
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#4A15D1]" />
                      )}
                    </div>
                    <div className="text-sm font-black text-[#4A15D1]">
                      ₹{plan.monthlyAmount.toLocaleString('en-IN')}<span className="text-[10px] font-normal text-gray-500">/mo</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-1">
                      0% Interest
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Key Specifications */}
          {selectedProduct.specs && (
            <div>
              <h4 className="text-xs font-bold text-gray-700 mb-2">Specifications</h4>
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 divide-y divide-gray-200/60 text-[11px]">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <div key={key} className="py-1.5 flex justify-between gap-4">
                    <span className="text-gray-500 font-medium">{key}</span>
                    <span className="font-bold text-gray-900 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer with Dynamic CTA Button */}
        <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3 sticky bottom-0 z-20">
          <div>
            <span className="text-[10px] text-gray-500 font-medium block">
              Selected EMI Plan
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#4A15D1]">
              ₹{activeEmiPlan.monthlyAmount.toLocaleString('en-IN')}/mo • {activeEmiPlan.tenureMonths}M
            </span>
          </div>

          <button
            onClick={handleProceed}
            className="py-2.5 px-5 bg-[#4A15D1] hover:bg-[#3B0FA8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center gap-1.5"
            id="btn-proceed-emi"
          >
            <span>Continue with {activeEmiPlan.tenureMonths}-month EMI</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
