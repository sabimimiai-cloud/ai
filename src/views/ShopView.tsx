import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  X, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { Product, ProductCategory, OccasionMoment, AgeGroup } from '../types';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/storeData';
import { ProductCard } from '../components/ProductCard';

interface ShopViewProps {
  initialCategory?: ProductCategory;
  initialSearchQuery?: string;
  onSelectProduct?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategory = 'all',
  initialSearchQuery = '',
  onSelectProduct,
  onQuickView,
  onQuickAdd,
  onAddToCart,
  wishlistIds,
  onToggleWishlist
}) => {
  const handleProductSelect = (product: Product) => {
    if (onSelectProduct) onSelectProduct(product);
    else if (onQuickView) onQuickView(product);
  };

  const handleProductAdd = (product: Product) => {
    if (onAddToCart) onAddToCart(product);
    else if (onQuickAdd) onQuickAdd(product);
  };
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(350000);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync if initialCategory prop updates
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  React.useEffect(() => {
    if (initialSearchQuery !== undefined) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Age group filter
      if (selectedAge !== 'all' && item.ageGroup !== selectedAge) {
        return false;
      }

      // Occasion filter
      if (selectedOccasion !== 'all' && !item.occasions.includes(selectedOccasion as OccasionMoment)) {
        return false;
      }

      // Max price
      if (item.price > maxPrice) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesTag = item.highlightTag?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTag) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedAge, selectedOccasion, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedAge('all');
    setSelectedOccasion('all');
    setMaxPrice(350000);
    setSearchQuery('');
    setSortBy('featured');
  };

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedAge !== 'all' ? 1 : 0) +
    (selectedOccasion !== 'all' ? 1 : 0) +
    (maxPrice < 350000 ? 1 : 0) +
    (searchQuery !== '' ? 1 : 0);

  return (
    <div id="shop-view-container" className="py-8 sm:py-12 bg-[#FFFDF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Title */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUUBU BLOOM CATALOGUE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B68] tracking-tight font-display">
            The Children's Collection
          </h1>
          <p className="text-sm sm:text-base text-[#172033]/70 mt-1 max-w-2xl">
            From adorable daily staples to standout partywear, cruisers, and thoughtful gift boxes. Available online with nationwide delivery & at Galleria Mall, Orchid, Lagos.
          </p>
        </div>

        {/* Category Horizontal Scrolling Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#123B68] text-white shadow-md'
                    : 'bg-white border border-[#F4F1EA] text-[#172033]/80 hover:border-[#123B68]/30 hover:bg-[#F4F1EA]/50'
                }`}
              >
                <span>{cat.name}</span>
                {cat.count && (
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search, Filter Summary, and Sort Row */}
        <div className="bg-white rounded-2xl p-4 border border-[#F4F1EA] shadow-2xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dress, shoes, ride-on, gift set..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F1EA]/50 border border-[#F4F1EA] pl-10 pr-9 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white transition-all font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right controls: Mobile Filter Toggle & Sort */}
          <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
            
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-[#F4F1EA] rounded-xl text-xs font-bold text-[#123B68]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#F4F1EA] rounded-xl px-3 py-2 text-xs font-bold text-[#123B68] focus:outline-none focus:ring-2 focus:ring-[#123B68]/20"
              >
                <option value="featured">Featured Picks</option>
                <option value="newest">New Arrivals First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

          </div>

        </div>

        {/* Main Grid with Sidebar Filter Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className={`lg:col-span-3 ${showMobileFilters ? 'block' : 'hidden lg:block'} bg-white rounded-3xl p-6 border border-[#F4F1EA] shadow-2xs space-y-6`}>
            
            <div className="flex items-center justify-between pb-4 border-b border-[#F4F1EA]">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#123B68]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#123B68]">
                  Filter Pieces
                </h3>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#F58220] font-bold hover:underline"
                >
                  Reset all
                </button>
              )}
            </div>

            {/* Age Group Filter */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Age Group
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All Ages' },
                  { id: '0-12M', label: 'Baby (0 - 12 Months)' },
                  { id: '1-3Y', label: 'Toddler (1 - 3 Years)' },
                  { id: '4-7Y', label: 'Kids (4 - 7 Years)' },
                  { id: '8-12Y', label: 'Pre-Teen (8 - 12 Years)' },
                  { id: 'all-ages', label: 'All Ages / Accessories / Toys' },
                ].map((age) => (
                  <button
                    key={age.id}
                    onClick={() => setSelectedAge(age.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      selectedAge === age.id
                        ? 'bg-[#123B68]/10 text-[#123B68] font-black'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{age.label}</span>
                    {selectedAge === age.id && <Check className="w-3.5 h-3.5 text-[#123B68]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion / Moment Filter */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Occasion & Moment
              </h4>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All Occasions' },
                  { id: 'everyday', label: '☀️ Everyday Play & Casual' },
                  { id: 'birthday', label: '🎂 Birthday Celebrations' },
                  { id: 'special-occasion', label: '✨ Special Events & Sunday' },
                  { id: 'gifting', label: '🎁 Gifting & Hampers' },
                ].map((occ) => (
                  <button
                    key={occ.id}
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      selectedOccasion === occ.id
                        ? 'bg-[#123B68]/10 text-[#123B68] font-black'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{occ.label}</span>
                    {selectedOccasion === occ.id && <Check className="w-3.5 h-3.5 text-[#123B68]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Price Slider */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#172033]">
                  Max Budget
                </h4>
                <span className="text-xs font-black text-[#123B68]">
                  ₦{maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={350000}
                step={5000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#123B68] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
                <span>₦10,000</span>
                <span>₦350,000</span>
              </div>
            </div>

            {/* Lagos Store Tag */}
            <div className="pt-4 border-t border-[#F4F1EA] bg-[#F4F1EA]/50 p-4 rounded-2xl">
              <p className="text-xs font-bold text-[#123B68] mb-1">
                📍 Galleria Mall Orchid, Lagos
              </p>
              <p className="text-[11px] text-[#172033]/70">
                All catalog pieces are inspectable and ready for pickup at our physical boutique.
              </p>
            </div>

          </div>

          {/* Product Results Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-[#F4F1EA] shadow-2xs">
                <div className="w-16 h-16 rounded-full bg-[#F4F1EA] flex items-center justify-center text-[#123B68] mx-auto mb-4">
                  <Search className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="text-xl font-bold text-[#123B68] font-display mb-2">
                  No blooming pieces found
                </h3>
                <p className="text-sm text-[#172033]/70 max-w-md mx-auto mb-6">
                  We couldn’t find products matching your exact filters. Try adjusting your filters or clearing search terms.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#123B68] text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-xs"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4 px-1">
                  <p className="text-xs text-[#172033]/70 font-semibold">
                    Showing <strong className="text-[#123B68]">{filteredProducts.length}</strong> items
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={handleProductSelect}
                      onSelectProduct={handleProductSelect}
                      onAddToCart={handleProductAdd}
                      onQuickAdd={handleProductAdd}
                      isWishlisted={wishlistIds.includes(product.id)}
                      onToggleWishlist={onToggleWishlist}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
