import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Sparkles, 
  X, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Grid, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { Product, ProductCategory, OccasionMoment, AgeGroup } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface ShopPageProps {
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  selectedOccasion: string;
  setSelectedOccasion: (occ: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedOccasion,
  setSelectedOccasion,
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: { key: ProductCategory; label: string; icon: string }[] = [
    { key: 'all', label: 'All Items', icon: '✨' },
    { key: 'girls', label: 'Girls', icon: '🌸' },
    { key: 'boys', label: 'Boys', icon: '🧢' },
    { key: 'baby', label: 'Baby & Newborn', icon: '🍼' },
    { key: 'shoes', label: 'Shoes', icon: '👟' },
    { key: 'accessories', label: 'Accessories', icon: '👑' },
    { key: 'toys', label: 'Toys & Ride-Ons', icon: '🚗' },
    { key: 'gifts', label: 'Gift Sets', icon: '🎁' }
  ];

  const occasions = [
    { key: 'all', label: 'All Occasions' },
    { key: 'everyday', label: 'Everyday Style' },
    { key: 'birthday', label: 'Birthday Moments' },
    { key: 'special-occasion', label: 'Special Occasions & Weddings' },
    { key: 'gifting', label: 'Gifting & Hampers' }
  ];

  const ageGroups = [
    { key: 'all', label: 'All Ages' },
    { key: '0-12M', label: '0 - 12 Months' },
    { key: '1-3Y', label: '1 - 3 Years' },
    { key: '4-7Y', label: '4 - 7 Years' },
    { key: '8-12Y', label: '8 - 12 Years' }
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Occasion filter
      if (selectedOccasion !== 'all' && !product.occasions.includes(selectedOccasion as OccasionMoment)) {
        return false;
      }

      // Age group filter
      if (selectedAge !== 'all' && product.ageGroup !== selectedAge && product.ageGroup !== 'all-ages') {
        return false;
      }

      // Max price filter
      if (product.price > maxPrice) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchSub = product.subCategory?.toLowerCase().includes(query) || false;
        if (!matchName && !matchCat && !matchDesc && !matchSub) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedOccasion, selectedAge, maxPrice, searchQuery, sortBy]);

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) + 
    (selectedOccasion !== 'all' ? 1 : 0) + 
    (selectedAge !== 'all' ? 1 : 0) + 
    (searchQuery !== '' ? 1 : 0) +
    (maxPrice < 150000 ? 1 : 0);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setSelectedAge('all');
    setSearchQuery('');
    setMaxPrice(150000);
    setSortBy('featured');
  };

  return (
    <div id="shop-catalog-view" className="min-h-screen bg-[#FFFDF8] py-8 sm:py-12 border-b border-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#27AFA3] mb-2">
            <span>BUUBU BLOOM CATALOGUE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#123B68] tracking-tight font-display">
            Shop Buubu Bloom
          </h1>
          <p className="text-sm sm:text-base text-[#172033]/70 mt-1 max-w-xl">
            Find something they'll love. Everything from Sunday statement pieces and party dresses to comfortable shoes, ride-ons and ready gift sets.
          </p>
        </div>

        {/* Horizontal Category Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`shop-category-tab-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.key
                  ? 'bg-[#123B68] text-white shadow-sm'
                  : 'bg-[#F4F1EA] text-[#172033]/80 hover:bg-[#F4F1EA]/80 hover:text-[#123B68]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Top Control Bar: Search, Filters button, Sort dropdown & Results count */}
        <div className="bg-[#F4F1EA]/60 p-4 rounded-2xl border border-[#F4F1EA] mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, style, size..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-xs pl-10 pr-8 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden bg-white px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-[#123B68] flex items-center gap-2"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white text-xs font-bold text-[#123B68] px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#123B68]"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>

            {/* Clear All */}
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-red-500 hover:underline px-2"
              >
                Reset
              </button>
            )}
          </div>

        </div>

        {/* Main Grid with Left Desktop Filter Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-5 rounded-3xl border border-[#F4F1EA] sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4F1EA]">
              <h3 className="text-sm font-black text-[#123B68] uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-[#F58220]" />
                <span>Filter By</span>
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] font-bold text-[#2563C7] hover:underline"
                >
                  Clear ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Occasions / Moments Filter */}
            <div>
              <label className="block text-xs font-black text-[#123B68] uppercase tracking-wider mb-2.5">
                Occasion / Reason
              </label>
              <div className="space-y-1">
                {occasions.map((occ) => (
                  <button
                    key={occ.key}
                    onClick={() => setSelectedOccasion(occ.key)}
                    className={`w-full text-left p-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedOccasion === occ.key
                        ? 'bg-[#123B68] text-white font-bold'
                        : 'text-[#172033]/75 hover:bg-[#F4F1EA]'
                    }`}
                  >
                    {occ.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Range Filter */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <label className="block text-xs font-black text-[#123B68] uppercase tracking-wider mb-2.5">
                Age Range
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {ageGroups.map((ag) => (
                  <button
                    key={ag.key}
                    onClick={() => setSelectedAge(ag.key)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all text-center ${
                      selectedAge === ag.key
                        ? 'bg-[#F4C430] text-[#123B68]'
                        : 'bg-[#F4F1EA] text-[#172033] hover:bg-gray-200'
                    }`}
                  >
                    {ag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black text-[#123B68] uppercase tracking-wider">
                  Max Budget
                </label>
                <span className="text-xs font-bold text-[#F58220]">
                  Up to ₦{maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#123B68]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>₦10,000</span>
                <span>₦150,000+</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="pt-4 border-t border-[#F4F1EA] bg-[#FFFDF8] p-3 rounded-2xl text-[11px] text-[#123B68] font-medium leading-tight">
              📍 <strong className="font-bold">Galleria Mall, Orchid Lagos</strong>
              <p className="text-gray-500 mt-1">All items in stock or ready for fast nationwide dispatch.</p>
            </div>
          </div>

          {/* Product Results Column (9 cols) */}
          <div className="lg:col-span-9">
            
            {/* Results Counter & Active Pills */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-500">
                Showing <strong className="text-[#123B68]">{filteredProducts.length}</strong> items
              </span>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                    onAddToCart={onAddToCart}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            ) : (
              /* Empty Filter State */
              <div className="text-center py-20 px-4 bg-white rounded-3xl border border-[#F4F1EA]">
                <div className="w-16 h-16 rounded-full bg-[#F4F1EA] text-[#123B68]/40 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#123B68] mb-1">No matching items found</h3>
                <p className="text-xs text-[#172033]/70 mb-6 max-w-sm mx-auto">
                  Try adjusting your filters or price slider to see more wonderful children's pieces.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#123B68] text-white px-6 py-3 rounded-xl font-bold text-xs shadow-sm hover:bg-[#2563C7]"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
