import React, { useState } from 'react';

export function HeroBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#25045C] via-[#320888] to-[#4A12B8]">
      {!imgError ? (
        <section className="w-full overflow-hidden relative">
          <img
            alt="Shop today, Pay later using Mutual funds"
            width="800"
            height="400"
            loading="eager"
            onError={() => setImgError(true)}
            className="w-full h-auto object-cover -mt-6 sm:-mt-4"
            src="https://cdn.1fi.in/banners/shop-page%201536x1024.webp"
          />
        </section>
      ) : (
        /* Fallback rich vector graphic matching 1Fi brand banner */
        <div className="pt-8 pb-10 px-5 text-white relative min-h-[200px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-wide backdrop-blur-md mb-3 shadow-sm">
            <span className="text-amber-300">✦</span>
            <span>NO-COST EMIs</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight mb-2">
            Shop today,<br />
            Pay later using<br />
            Mutual funds.
          </h1>

          <p className="text-xs text-purple-100/80 font-normal leading-relaxed max-w-[260px]">
            No credit score required. No interest. Backed by your investments.
          </p>

          <div className="absolute right-3 bottom-3 w-36 h-36 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-28 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-2xl shadow-xl transform rotate-6 border border-yellow-200/50 flex flex-col items-center justify-center p-2">
              <span className="text-xl">🛍️</span>
              <span className="text-[9px] font-black text-yellow-950 mt-1">1Fi SHOP</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
