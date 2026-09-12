import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts?: Product[];
  wishlistItems?: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onAddToCartDirect?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistedProducts,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
  onAddToCartDirect,
  onQuickView,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const items = wishlistedProducts || wishlistItems || [];

  const handleAdd = (prod: Product) => {
    if (onAddToCart) onAddToCart(prod);
    else if (onAddToCartDirect) onAddToCartDirect(prod);
  };

  const handleView = (prod: Product) => {
    if (onQuickView) onQuickView(prod);
    else if (onSelectProduct) onSelectProduct(prod);
  };

  return (
    <div 
      id="wishlist-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div 
        id="wishlist-drawer-container"
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F4F1EA] flex items-center justify-between bg-[#FFFDF8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F58220] text-white flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#123B68] font-display">
                Saved Favourites ({items.length})
              </h2>
              <p className="text-[11px] text-gray-500">
                Keep track of looks they will love
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-[#F4F1EA]"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#F4F1EA] text-[#123B68]/40 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-[#123B68] mb-1">No saved items yet</h3>
              <p className="text-xs text-[#172033]/70 mb-4 max-w-xs mx-auto">
                Tap the heart icon on any outfit, shoes, or toy to save it to your favourites list.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((prod) => (
                <div
                  key={prod.id}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#FFFDF8] border border-[#F4F1EA] shadow-2xs"
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-16 h-20 rounded-xl object-cover bg-[#F4F1EA] cursor-pointer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/images/hero_nigerian_girl.jpg';
                    }}
                    onClick={() => {
                      onClose();
                      handleView(prod);
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#27AFA3]">
                      {prod.category}
                    </p>
                    <h4 
                      onClick={() => {
                        onClose();
                        handleView(prod);
                      }}
                      className="text-xs font-bold text-[#172033] truncate cursor-pointer hover:text-[#123B68]"
                    >
                      {prod.name}
                    </h4>
                    <p className="text-xs font-black text-[#123B68] mt-0.5">
                      ₦{prod.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          handleAdd(prod);
                          onRemoveWishlist(prod);
                        }}
                        className="bg-[#123B68] hover:bg-[#2563C7] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-2xs transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => onRemoveWishlist(prod)}
                        className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#F4F1EA] bg-[#FFFDF8]">
          <button
            onClick={onClose}
            className="w-full bg-[#F4F1EA] hover:bg-gray-200 text-[#123B68] py-3 rounded-xl font-bold text-xs transition-colors"
          >
            CONTINUE BROWSING
          </button>
        </div>

      </div>
    </div>
  );
};
