import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
  onAddToCart?: (product: Product, size?: string, color?: string) => void;
  onQuickAdd?: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onSelectProduct,
  onAddToCart,
  onQuickAdd,
  isWishlisted,
  onToggleWishlist
}) => {
  const [isAddedRecently, setIsAddedRecently] = useState<boolean>(false);

  const handleView = () => {
    if (onQuickView) onQuickView(product);
    else if (onSelectProduct) onSelectProduct(product);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onAddToCart) {
      onAddToCart(product);
    } else if (onQuickAdd) {
      onQuickAdd(product);
    }

    setIsAddedRecently(true);
    setTimeout(() => {
      setIsAddedRecently(false);
    }, 1800);
  };
  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative bg-white rounded-2xl border border-[#F4F1EA] hover:border-[#123B68]/30 transition-all duration-300 hover:shadow-md flex flex-col h-full overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F4F1EA] cursor-pointer" onClick={handleView}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Highlight Badge */}
        {product.highlightTag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#173F70] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs tracking-wide">
              {product.highlightTag}
            </span>
          </div>
        )}

        {/* Discount Badge if applicable */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 right-12 z-10">
            <span className="bg-[#F58220] text-white text-[10px] font-extrabold px-2 py-1 rounded-full shadow-xs">
              SAVE ₦{(product.originalPrice - product.price).toLocaleString()}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            isWishlisted 
              ? 'bg-[#F58220] text-white scale-110' 
              : 'bg-white/80 text-[#172033] hover:bg-white hover:text-[#F58220]'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick View Overlay for Desktop */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 pointer-events-none sm:pointer-events-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleView();
            }}
            className="bg-white/95 hover:bg-white text-[#173F70] font-bold text-xs px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>QUICK LOOK</span>
          </button>
        </div>

        {/* Sizes Pill Overlay on bottom of image */}
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur-xs text-[10px] font-semibold text-[#173F70] px-2 py-0.5 rounded-md shadow-2xs">
            Sizes: {product.sizes.slice(0, 3).join(', ')}{product.sizes.length > 3 ? '...' : ''}
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Color indicators */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#27AFA5]">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((col, idx) => (
                <span 
                  key={idx} 
                  className="w-2.5 h-2.5 rounded-full border border-gray-200"
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={handleView}
            className="text-sm sm:text-base font-bold text-[#172033] hover:text-[#173F70] transition-colors line-clamp-1 cursor-pointer mb-2"
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Bag Trigger */}
        <div className="pt-2 border-t border-[#F4F1EA] flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-[#173F70] font-display">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through font-normal">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-bold text-[#172033]">{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          <button
            id={`add-to-bag-btn-${product.id}`}
            type="button"
            onClick={handleAdd}
            className={`p-2.5 px-3 rounded-xl transition-all shadow-2xs active:scale-90 flex items-center gap-1.5 text-xs font-bold ${
              isAddedRecently 
                ? 'bg-[#27AFA5] text-white scale-105' 
                : 'bg-[#173F70] hover:bg-[#2563C7] text-white'
            }`}
            title="Add to shopping bag"
            aria-label={`Add ${product.name} to bag`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">ADDED!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">ADD TO BAG</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
