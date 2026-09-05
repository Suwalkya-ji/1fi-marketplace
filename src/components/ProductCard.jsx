import React from 'react';
import { useApp } from '../context/AppContext.jsx';

export function ProductCard({ product }) {
  const { setSelectedProduct } = useApp();

  const maxTenure = Math.max(...product.tenurePlans);
  const minMonthlyEmi = Math.ceil(product.basePrice / maxTenure);
  const discountPercent = Math.round(((product.mrp - product.basePrice) / product.mrp) * 100);

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="bg-white rounded-2xl border border-gray-200/80 p-3.5 hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedProduct(product);
        }
      }}
      aria-label={`View details for ${product.title}`}
    >
      {/* Top Meta: Badge & Rating */}
      <div className="flex items-center justify-between mb-2">
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-1.5 py-0.2 rounded-md uppercase tracking-wider">
          {product.badge || '0% Interest'}
        </span>
        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-gray-50 px-1.5 py-0.2 rounded-full border border-gray-100">
          <span className="text-amber-500 text-xs">★</span>
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full h-36 bg-gradient-to-b from-gray-50 to-purple-50/20 rounded-xl overflow-hidden mb-2.5 flex items-center justify-center p-2 relative group-hover:bg-purple-50/40 transition-colors">
        <img
          src={product.images[0]}
          alt={product.title}
          className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {discountPercent > 0 && (
          <span className="absolute bottom-1.5 left-1.5 bg-purple-900/80 text-white text-[9px] font-bold px-1.5 py-0.2 rounded backdrop-blur-sm">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 mb-0.5">
          {product.brand}
        </span>
        <h3 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#4A15D1] transition-colors line-clamp-1">
          {product.title}
        </h3>
        <p className="text-[11px] text-gray-400 line-clamp-2 mt-0.5 mb-2 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing & 0% EMI Block */}
        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex items-baseline gap-1.5 mb-1.5">
            <span className="text-sm sm:text-base font-extrabold text-gray-900">
              ₹{product.basePrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-gray-400 line-through">
              ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          </div>

          {/* 0% EMI Highlight Pill */}
          <div className="bg-[#F4EEFF] border border-[#E4D5FC] rounded-xl p-2 flex items-center justify-between mb-2">
            <div>
              <div className="text-[9px] font-bold text-purple-900 uppercase tracking-tight">
                0% No-Cost EMI
              </div>
              <div className="text-xs font-black text-[#4A15D1]">
                ₹{minMonthlyEmi.toLocaleString('en-IN')}/mo
              </div>
            </div>
            <span className="text-[10px] font-bold text-purple-700 bg-white px-1.5 py-0.2 rounded-full border border-purple-200">
              {maxTenure}M
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="w-full py-2 bg-gray-900 hover:bg-[#4A15D1] text-white rounded-xl text-[11px] font-bold transition-colors shadow-sm flex items-center justify-center gap-1"
            id={`btn-view-${product.id}`}
          >
            <span>View Details</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
