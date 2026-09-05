import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext.jsx';

export function ConfirmationModal() {
  const { isConfirmationOpen, setIsConfirmationOpen, confirmedOrder, setSelectedProduct } = useApp();

  const handleClose = () => {
    setIsConfirmationOpen(false);
    setSelectedProduct(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isConfirmationOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isConfirmationOpen]);

  if (!isConfirmationOpen || !confirmedOrder) return null;

  const { product, variant, color, emiPlan, finalPrice } = confirmedOrder;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
      onClick={handleClose}
    >
      <div 
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with success check */}
        <div className="p-6 text-center bg-gradient-to-b from-purple-50/80 to-white border-b border-gray-100">
          <div className="w-14 h-14 bg-[#4A15D1]/10 text-[#4A15D1] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3 shadow-inner">
            ✓
          </div>
          <h3 id="confirmation-title" className="text-lg font-extrabold text-gray-900">
            You're ready to continue
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Your 0% No-Cost EMI plan has been configured.
          </p>
        </div>

        {/* Product & EMI Plan Summary */}
        <div className="p-6 space-y-4 text-xs">
          {/* Product Overview Card */}
          <div className="bg-gray-50 rounded-2xl p-3.5 border border-gray-100 flex items-center gap-3">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-gray-100 shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-gray-900 truncate">
                {product.title}
              </h4>
              <p className="text-gray-500 text-[11px] mt-0.5">
                {variant?.name} {color?.name ? `• ${color.name}` : ''}
              </p>
              <p className="text-sm font-black text-gray-900 mt-1">
                ₹{finalPrice.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* Selected EMI Plan Details */}
          <div className="bg-[#FAF5FF] border border-[#E9DFFC] rounded-2xl p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Selected Plan</span>
              <span className="font-bold text-purple-900 bg-purple-100/80 px-2 py-0.5 rounded-full text-[11px]">
                {emiPlan.tenureMonths} Months EMI
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-purple-100/80 pt-2">
              <span className="text-gray-600 font-medium">Monthly Installment</span>
              <span className="text-base font-extrabold text-[#4A15D1]">
                ₹{emiPlan.monthlyAmount.toLocaleString('en-IN')}/month
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-purple-100/80 pt-2 text-[11px]">
              <span className="text-gray-500">Interest Rate</span>
              <span className="font-bold text-emerald-600">0% (No-Cost EMI)</span>
            </div>
          </div>
        </div>

        {/* Modal Action Button */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button
            onClick={handleClose}
            className="w-full py-3 px-4 bg-[#4A15D1] hover:bg-[#3B0FA8] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
            id="btn-confirmation-continue"
          >
            <span>Back to Marketplace</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
