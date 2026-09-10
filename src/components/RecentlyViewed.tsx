import React from 'react';
import { Sparkles, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface RecentlyViewedProps {
  recentProductIds: string[];
  onQuickView: (product: Product) => void;
  onAddToCart?: (product: Product, size?: string, color?: string) => void;
  onClearRecent?: () => void;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  recentProductIds,
  onQuickView,
  onAddToCart,
  onClearRecent
}) => {
  if (!recentProductIds || recentProductIds.length === 0) {
    return null;
  }

  // Hydrate full products from IDs
  const recentProducts: Product[] = recentProductIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, 4);

  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <section 
      id="recently-viewed-section"
      className="py-14 sm:py-18 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#27AFA5] mb-2">
              <Eye className="w-3.5 h-3.5" />
              <span>RECENTLY VIEWED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173F70] tracking-tight font-display">
              You Were Looking At...
            </h2>
            <p className="text-sm text-[#172033]/70 mt-1">
              Pick up right where you left off.
            </p>
          </div>

          {onClearRecent && (
            <button
              onClick={onClearRecent}
              className="text-xs font-bold text-[#172033]/50 hover:text-[#173F70] transition-colors cursor-pointer"
            >
              Clear history
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {recentProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onQuickView(product)}
              className="group bg-white rounded-3xl p-3 sm:p-4 border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F1EA] mb-3 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  {product.highlightTag && (
                    <span className="absolute top-2 left-2 bg-[#F58220] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                      {product.highlightTag}
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#27AFA5] block mb-0.5">
                  {product.category}
                </span>

                <h3 className="text-xs sm:text-sm font-bold text-[#173F70] line-clamp-1 group-hover:text-[#2563C7] transition-colors">
                  {product.name}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#F4F1EA] flex items-center justify-between">
                <span className="text-xs sm:text-sm font-black text-[#173F70]">
                  ₦{product.price.toLocaleString()}
                </span>

                {onAddToCart && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, product.sizes[0], product.colors[0]?.name || 'Standard');
                    }}
                    className="p-2 rounded-xl bg-[#F4F1EA] text-[#173F70] hover:bg-[#173F70] hover:text-white transition-colors cursor-pointer"
                    title="Add to bag"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
