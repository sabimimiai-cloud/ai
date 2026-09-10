import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Heart, ShoppingBag, Eye, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, ProductCategory, ActiveView } from '../types';
import { NEW_ARRIVALS_PRODUCTS } from '../data/products';

interface NewArrivalsSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
}

export const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onNavigate
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'girls' | 'boys' | 'accessories' | 'shoes'>('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const railRef = useRef<HTMLDivElement>(null);

  const filterTabs: { key: 'all' | 'girls' | 'boys' | 'accessories' | 'shoes'; label: string }[] = [
    { key: 'all', label: 'All New In' },
    { key: 'girls', label: 'Girls' },
    { key: 'boys', label: 'Boys' },
    { key: 'accessories', label: 'Bags & Accessories' },
    { key: 'shoes', label: 'Shoes' },
  ];

  const displayedProducts = NEW_ARRIVALS_PRODUCTS.filter(product => {
    if (selectedFilter === 'all') return true;
    return product.category === selectedFilter;
  });

  const checkScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate index
    const cardWidth = 280;
    const index = Math.min(displayedProducts.length, Math.max(1, Math.round(scrollLeft / cardWidth) + 1));
    setActiveIndex(index);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (rail) {
      rail.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => rail.removeEventListener('scroll', checkScroll);
    }
  }, [displayedProducts]);

  const scrollRail = (direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const scrollAmount = railRef.current.clientWidth * 0.75;
    railRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1800);
  };

  return (
    <section 
      id="new-arrivals-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED RAIL</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display">
              Just In at Buubu Bloom
            </h2>
            
            <p className="text-base sm:text-lg text-[#172033]/80 mt-2.5 leading-relaxed font-normal">
              Fresh pieces have landed. Browse the new arrivals rail for this season’s standout looks.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Showing indicator */}
            <span className="text-xs font-bold text-[#172033]/60 hidden sm:inline">
              Showing {activeIndex} of {displayedProducts.length}
            </span>

            {/* Subtle Desktop Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollRail('left')}
                disabled={!canScrollLeft}
                aria-label="Previous arrivals"
                className={`w-10 h-10 rounded-full border border-[#173F70]/20 flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  canScrollLeft
                    ? 'bg-white text-[#173F70] hover:bg-[#173F70] hover:text-white shadow-xs cursor-pointer'
                    : 'bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollRail('right')}
                disabled={!canScrollRight}
                aria-label="Next arrivals"
                className={`w-10 h-10 rounded-full border border-[#173F70]/20 flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  canScrollRight
                    ? 'bg-white text-[#173F70] hover:bg-[#173F70] hover:text-white shadow-xs cursor-pointer'
                    : 'bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              id="new-arrivals-view-all-cta"
              onClick={() => onNavigate('shop', 'all')}
              className="inline-flex items-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white px-5 sm:px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 cursor-pointer group shrink-0"
            >
              <span>Shop All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedFilter(tab.key);
                if (railRef.current) railRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.key
                  ? 'bg-[#173F70] text-white shadow-xs'
                  : 'bg-white text-[#173F70] border border-[#F4F1EA] hover:bg-[#F4F1EA]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Curated Fashion Rail with Horizontal Snap & Swipe */}
        <div 
          ref={railRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {displayedProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const isAdded = recentlyAddedId === product.id;

            return (
              <div
                key={product.id}
                id={`new-arrival-card-${product.id}`}
                className="snap-start shrink-0 w-[240px] sm:w-[280px] md:w-[295px] group relative bg-white rounded-2xl sm:rounded-3xl border border-[#F4F1EA] hover:border-[#173F70]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col overflow-hidden"
              >
                {/* Clean Product Image Container */}
                <div 
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4F1EA] cursor-pointer"
                  onClick={() => onQuickView(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* New Arrival Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#F58220] text-white text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full shadow-xs tracking-wider">
                      NEW
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    id={`wishlist-new-${product.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-2.5 right-2.5 z-10 w-10 h-10 sm:w-9 sm:h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 active:scale-90 cursor-pointer ${
                      isWishlisted 
                        ? 'bg-[#F58220] text-white shadow-md' 
                        : 'bg-white/90 text-[#172033] hover:bg-white hover:text-[#F58220] shadow-xs'
                    }`}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart className={`w-4 h-4 transition-transform duration-200 ${isWishlisted ? 'fill-current scale-110' : ''}`} />
                  </button>

                  {/* Quick Look overlay for Desktop */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="bg-white/95 hover:bg-white text-[#173F70] font-bold text-xs px-4 py-2.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-1.5 group-hover:translate-y-0 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>See Sizes</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#27AFA5]">
                        {product.subCategory || product.category}
                      </span>
                      {product.sizes && product.sizes.length > 0 && (
                        <span className="text-[10px] text-gray-400 font-medium truncate max-w-[90px]">
                          {product.sizes[0]}
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 
                      onClick={() => onQuickView(product)}
                      className="text-sm sm:text-base font-bold text-[#172033] group-hover:text-[#173F70] transition-colors line-clamp-1 cursor-pointer mb-1.5"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* Short Natural Description */}
                    <p className="text-[11px] sm:text-xs text-[#172033]/70 line-clamp-2 leading-relaxed mb-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Direct Shopping CTA */}
                  <div className="pt-3 border-t border-[#F4F1EA] flex flex-col gap-2.5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-base sm:text-lg font-black text-[#173F70] font-display">
                        ₦{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[11px] sm:text-xs text-gray-400 line-through font-normal">
                          ₦{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`shop-look-btn-${product.id}`}
                        type="button"
                        onClick={() => onQuickView(product)}
                        className="w-full min-h-[42px] py-2 sm:py-2.5 px-2 rounded-xl bg-[#F4F1EA] hover:bg-[#eae5da] text-[#173F70] text-[11px] sm:text-xs font-bold transition-all duration-200 text-center truncate cursor-pointer active:scale-95 flex items-center justify-center"
                      >
                        Shop Look
                      </button>

                      <button
                        id={`add-bag-new-${product.id}`}
                        type="button"
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`w-full min-h-[42px] py-2 sm:py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 shadow-2xs active:scale-95 cursor-pointer ${
                          isAdded 
                            ? 'bg-[#27AFA5] text-white shadow-sm' 
                            : 'bg-[#173F70] hover:bg-[#2563C7] text-white'
                        }`}
                        title="Add to shopping bag"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span className="truncate">Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span className="truncate">Add to Bag</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Progress Bar underneath the rail */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400 px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-[#173F70]">Swipe or drag to explore</span>
            <span className="text-gray-300">•</span>
            <span className="text-[11px] text-[#27AFA5] font-semibold">{displayedProducts.length} items curated</span>
          </div>
          <button 
            onClick={() => onNavigate('shop', 'all')}
            className="text-xs font-bold text-[#173F70] hover:text-[#2563C7] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 sm:mt-16 text-center bg-[#F4F1EA]/50 rounded-3xl p-8 sm:p-10 border border-[#F4F1EA]">
          <h3 className="text-xl sm:text-2xl font-black text-[#173F70] font-display mb-2">
            Want to see even more new arrivals?
          </h3>
          <p className="text-sm text-[#172033]/75 max-w-md mx-auto mb-6">
            We drop new pieces weekly. Grab your little one’s size before it runs out.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="new-arrivals-bottom-shop-btn"
              onClick={() => onNavigate('shop', 'all')}
              className="bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center gap-2 cursor-pointer transition-all duration-200"
            >
              <span>Shop New Arrivals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="new-arrivals-bottom-girls-btn"
              onClick={() => onNavigate('shop', 'girls')}
              className="bg-white hover:bg-gray-50 text-[#173F70] border border-[#173F70]/20 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              Girls New In
            </button>
            <button
              id="new-arrivals-bottom-boys-btn"
              onClick={() => onNavigate('shop', 'boys')}
              className="bg-white hover:bg-gray-50 text-[#173F70] border border-[#173F70]/20 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              Boys New In
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
