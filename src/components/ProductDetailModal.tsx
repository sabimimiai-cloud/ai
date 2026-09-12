import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Check, 
  MapPin, 
  Share2
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { STORE_CONTACT } from '../data/storeData';

const getResolvedImage = (src: string): string => {
  try {
    const filename = src.split('/').pop() || '';
    const stored = JSON.parse(localStorage.getItem('buubu_bloom_extracted_photos') || '{}');
    if (stored[filename]) return stored[filename];
  } catch (e) {}
  return src;
};

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedSize: string, selectedColor: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide?: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide,
  onSelectProduct
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'Standard');
      setSelectedColor(product.colors[0]?.name || 'Standard');
      setQuantity(1);
      setSelectedImageIndex(0);
      setAddedNotice(false);
    }
  }, [product?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleAdd = () => {
    if (!product) return;
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const generateWhatsAppMessage = () => {
    if (!product) return '';
    const text = `Hi Buubu Bloom! I need help choosing something for a child - inquiring about ${product.name} (₦${product.price.toLocaleString()}, Size: ${selectedSize || 'Standard'}).`;
    return `https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div 
          key="product-detail-modal-backdrop"
          id="product-detail-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div 
            id="product-detail-modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#F4F1EA] relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#123B68] shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-5 sm:p-8">
          
          {/* Left Column: Images Gallery */}
          <div className="md:col-span-6 flex flex-col gap-3">
            {/* Main Active Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F1EA] border border-[#F4F1EA]">
              <img
                src={getResolvedImage(product.images[selectedImageIndex] || product.images[0])}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallbacks: Record<string, string> = {
                    shoes: '/images/white_chunky_sandals.jpg',
                    girls: '/images/blue_flower_dress.jpg',
                    boys: '/images/boys_nigerian_denim.jpg',
                    baby: '/images/baby_nigerian_romper.jpg',
                    accessories: '/images/pink_school_backpack.jpg'
                  };
                  const fallback = fallbacks[product.category] || '/images/hero_nigerian_girl.jpg';
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />
              
              {product.highlightTag && (
                <span className="absolute top-3 left-3 bg-[#123B68] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {product.highlightTag}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === idx 
                        ? 'border-[#123B68] scale-95 ring-2 ring-[#123B68]/20' 
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={getResolvedImage(img)} 
                      alt="" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = '/images/hero_nigerian_girl.jpg';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#27AFA3]">
                  {product.category}
                </span>
                {product.rating !== undefined && product.reviewCount !== undefined && product.reviewCount > 0 && (
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-normal">({product.reviewCount} reviews)</span>
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-[#123B68] font-display mb-3">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl sm:text-3xl font-black text-[#123B68] font-display">
                  ₦{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-gray-400 line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  In Stock
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#172033]/80 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* What's Inside Section for Bundles / Gift Boxes */}
              {product.whatsInside && product.whatsInside.length > 0 && (
                <div className="mb-6 bg-[#FFFDF8] border border-[#F4F1EA] rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-black text-[#123B68] uppercase tracking-wider">
                      What's inside
                    </h4>
                    <span className="text-[11px] font-bold text-[#27AFA3]">
                      {product.whatsInside.length} included items
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.whatsInside.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#F4F1EA]"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#F4F1EA] flex items-center justify-center font-bold text-xs text-[#123B68] shrink-0 overflow-hidden">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{idx + 1}</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#172033] truncate">
                            {item.name}
                          </p>
                          {item.description && (
                            <p className="text-[11px] text-[#172033]/65 leading-tight mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-[11px] text-[#172033]/70 mt-3 pt-2.5 border-t border-[#F4F1EA]">
                    Contents are tailored to the recipient's age group and sizing preference upon order confirmation.
                  </p>
                </div>
              )}

              {/* Size Selector */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#123B68]">
                    Size:
                  </span>
                  {onOpenSizeGuide && (
                    <button
                      type="button"
                      onClick={onOpenSizeGuide}
                      className="text-[11px] text-[#2563C7] font-semibold hover:underline cursor-pointer"
                    >
                      Size guide
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-[#123B68] text-white shadow-xs'
                          : 'bg-[#F4F1EA] text-[#172033] hover:bg-[#F4F1EA]/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              {product.colors.length > 0 && (
                <div className="mb-5">
                  <span className="block text-xs font-black uppercase tracking-wider text-[#123B68] mb-2">
                    Colour: <span className="font-normal text-[#172033]">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                          selectedColor === color.name
                            ? 'border-[#123B68] bg-[#123B68]/5 font-bold text-[#123B68]'
                            : 'border-[#F4F1EA] text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-gray-200" 
                          style={{ backgroundColor: color.hex }} 
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#123B68]">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#F4F1EA] rounded-xl bg-[#F4F1EA]/50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white font-bold text-[#123B68] hover:bg-gray-100 flex items-center justify-center text-sm shadow-2xs"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#123B68]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white font-bold text-[#123B68] hover:bg-gray-100 flex items-center justify-center text-sm shadow-2xs"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Actions & WhatsApp Ordering */}
            <div className="space-y-3 pt-4 border-t border-[#F4F1EA]">
              
              <div className="flex items-center gap-3">
                <button
                  id="modal-add-to-bag-btn"
                  onClick={handleAdd}
                  className="flex-1 bg-[#123B68] hover:bg-[#2563C7] text-white py-4 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO BAG • ₦{(product.price * quantity).toLocaleString()}</span>
                </button>

                <button
                  id="modal-wishlist-toggle-btn"
                  onClick={() => onToggleWishlist(product)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#F58220] text-white border-[#F58220]'
                      : 'border-[#F4F1EA] text-[#123B68] hover:bg-[#F4F1EA]'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {addedNotice && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Added to your bag!</span>
                </div>
              )}

              {/* Direct WhatsApp Order Link */}
              <a
                id="modal-whatsapp-enquire-btn"
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#27AFA5] hover:bg-[#27AFA5]/90 text-white py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Need help choosing? Chat on WhatsApp</span>
              </a>

              {/* Store & Delivery Notes */}
              <div className="bg-[#F4F1EA]/60 p-3.5 rounded-2xl text-[11px] text-[#172033]/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                  <span><strong>Store pickup:</strong> Galleria Mall, Orchid, Lagos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#2563C7]" />
                  <span><strong>Delivery:</strong> Lagos & nationwide doorstep delivery</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* You Might Want These Too */}
        {(() => {
          const relatedProducts = PRODUCTS.filter(
            p => p.id !== product.id && (p.category === product.category || p.category === 'accessories' || p.category === 'shoes')
          ).slice(0, 3);

          if (relatedProducts.length === 0) return null;

          return (
            <div className="border-t border-[#F4F1EA] p-5 sm:p-8 bg-[#FFFDF8] rounded-b-3xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-black text-[#173F70] font-display uppercase tracking-wider">
                  You might want these too
                </h3>
                <span className="text-xs text-[#172033]/60">Pairs well together</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      if (onSelectProduct) {
                        onSelectProduct(rel);
                      }
                    }}
                    className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#F4F1EA] hover:border-[#173F70]/30 hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-16 h-16 rounded-xl object-cover bg-[#F4F1EA] shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#173F70] truncate group-hover:text-[#2563C7]">
                        {rel.name}
                      </p>
                      <p className="text-xs font-black text-[#F58220] mt-0.5">
                        ₦{rel.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};
