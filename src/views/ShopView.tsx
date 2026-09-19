import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  X, 
  Sparkles, 
  Check,
  RotateCcw,
  Tag,
  ArrowUpDown
} from 'lucide-react';
import { Product, ProductCategory, OccasionMoment, AgeGroup, Audience, ProductType } from '../types';
import { PRODUCTS, interleaveProductVariety } from '../data/products';
import { CATEGORIES } from '../data/storeData';
import { ProductCard } from '../components/ProductCard';

interface ShopViewProps {
  initialCategory?: ProductCategory;
  initialSearchQuery?: string;
  initialNewIn?: boolean;
  initialAge?: string;
  initialOccasion?: string;
  onSelectCategory?: (category: ProductCategory) => void;
  onSelectProduct?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
}

const STORAGE_KEY = 'buubu_bloom_catalogue_filter_state';

export const ShopView: React.FC<ShopViewProps> = ({
  initialCategory = 'all',
  initialSearchQuery = '',
  initialNewIn = false,
  initialAge = 'all',
  initialOccasion = 'all',
  onSelectCategory,
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

  // Retrieve any saved session filter state to preserve state on navigation (Section 15)
  const savedState = useMemo(() => {
    try {
      const item = sessionStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(() => {
    if (initialCategory && initialCategory !== 'all') return initialCategory;
    return savedState?.category || initialCategory || 'all';
  });

  const [selectedAudience, setSelectedAudience] = useState<Audience | 'all'>(() => {
    if (initialCategory === 'girls') return 'girls';
    if (initialCategory === 'boys') return 'boys';
    if (initialCategory === 'baby') return 'baby';
    return savedState?.audience || 'all';
  });

  const [selectedProductType, setSelectedProductType] = useState<ProductType | 'all'>(() => {
    if (initialCategory === 'shoes') return 'shoes';
    if (initialCategory === 'accessories') return 'accessories';
    if (initialCategory === 'toys') return 'toys';
    if (initialCategory === 'gifts') return 'gifts';
    return savedState?.productType || 'all';
  });

  const [selectedAge, setSelectedAge] = useState<string>(() => {
    if (initialAge && initialAge !== 'all') return initialAge;
    return savedState?.age || 'all';
  });

  const [selectedOccasion, setSelectedOccasion] = useState<string>(() => {
    if (initialOccasion && initialOccasion !== 'all') return initialOccasion;
    return savedState?.occasion || 'all';
  });

  const [onlyNewIn, setOnlyNewIn] = useState<boolean>(() => {
    if (initialNewIn) return true;
    return savedState?.onlyNewIn || false;
  });

  const [searchQuery, setSearchQuery] = useState<string>(() => {
    if (initialSearchQuery !== undefined && initialSearchQuery !== '') return initialSearchQuery;
    return savedState?.searchQuery || '';
  });

  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-asc' | 'price-desc'>(() => {
    return (savedState?.sortBy && savedState.sortBy !== 'rating') ? savedState.sortBy : 'featured';
  });

  const [maxPrice, setMaxPrice] = useState<number>(() => {
    if (typeof savedState?.maxPrice === 'number' && savedState.maxPrice > 0) {
      return savedState.maxPrice === 350000 ? 500000 : savedState.maxPrice;
    }
    return 500000;
  });

  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state to sessionStorage whenever filters change (Section 15)
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        category: selectedCategory,
        audience: selectedAudience,
        productType: selectedProductType,
        subCategory: selectedSubCategory,
        age: selectedAge,
        occasion: selectedOccasion,
        onlyNewIn,
        searchQuery,
        sortBy,
        maxPrice
      }));
    } catch {
      // Ignore storage errors
    }
  }, [selectedCategory, selectedAudience, selectedProductType, selectedSubCategory, selectedAge, selectedOccasion, onlyNewIn, searchQuery, sortBy, maxPrice]);

  // Sync with incoming navigation props if they explicitly change
  const initialCategoryRef = useRef(initialCategory);
  useEffect(() => {
    if (initialCategory !== initialCategoryRef.current) {
      initialCategoryRef.current = initialCategory;
      setSelectedCategory(initialCategory);
      if (initialCategory === 'girls') {
        setSelectedAudience('girls');
        setSelectedProductType('all');
      } else if (initialCategory === 'boys') {
        setSelectedAudience('boys');
        setSelectedProductType('all');
      } else if (initialCategory === 'baby') {
        setSelectedAudience('baby');
        setSelectedProductType('all');
      } else if (initialCategory === 'shoes') {
        setSelectedAudience('all');
        setSelectedProductType('shoes');
      } else if (initialCategory === 'accessories') {
        setSelectedAudience('all');
        setSelectedProductType('accessories');
      } else if (initialCategory === 'toys') {
        setSelectedAudience('all');
        setSelectedProductType('toys');
      } else if (initialCategory === 'gifts') {
        setSelectedAudience('all');
        setSelectedProductType('gifts');
      } else if (initialCategory === 'all') {
        setSelectedAudience('all');
        setSelectedProductType('all');
      }
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialSearchQuery !== undefined && initialSearchQuery !== '') {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  useEffect(() => {
    if (initialNewIn !== undefined) {
      setOnlyNewIn(initialNewIn);
    }
  }, [initialNewIn]);

  useEffect(() => {
    if (initialAge && initialAge !== 'all') {
      setSelectedAge(initialAge);
    }
  }, [initialAge]);

  useEffect(() => {
    if (initialOccasion && initialOccasion !== 'all') {
      setSelectedOccasion(initialOccasion);
    }
  }, [initialOccasion]);

  // Combined Master Filtering Logic (Sections 1-12)
  const filteredProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((item) => {
      // 1. Audience / Department filter (Girls, Boys, Baby, Unisex)
      if (selectedAudience !== 'all') {
        const audienceMatches =
          item.audience === selectedAudience ||
          item.audience === 'unisex' ||
          (selectedAudience === 'girls' && item.category === 'girls') ||
          (selectedAudience === 'boys' && item.category === 'boys') ||
          (selectedAudience === 'baby' && (item.category === 'baby' || (item.ageGroups && item.ageGroups.includes('0-12M'))));
        if (!audienceMatches) return false;
      }

      // 2. Category / Product Type filter (Clothing, Shoes, Bags, Accessories, Toys, Baby Essentials, Gifts)
      if (selectedProductType !== 'all') {
        const typeMatches =
          item.productType === selectedProductType ||
          item.category === (selectedProductType as any) ||
          (selectedProductType === 'clothing' && (item.category === 'girls' || item.category === 'boys' || item.productType === 'clothing')) ||
          (selectedProductType === 'baby-essentials' && (item.category === 'baby' || item.productType === 'baby-essentials')) ||
          (selectedProductType === 'accessories' && (item.category === 'accessories' || item.productType === 'accessories' || item.productType === 'bags')) ||
          (selectedProductType === 'bags' && (item.subCategory === 'Bags' || item.productType === 'bags')) ||
          (selectedProductType === 'toys' && (item.category === 'toys' || item.productType === 'toys' || item.productType === 'ride-ons')) ||
          (selectedProductType === 'ride-ons' && (item.productType === 'ride-ons' || item.subCategory === 'Ride-On Toys' || item.subCategory === 'Ride-On')) ||
          (selectedProductType === 'gifts' && (item.category === 'gifts' || item.productType === 'gifts' || (item.occasions && item.occasions.includes('gifting'))));
        if (!typeMatches) return false;
      }

      // Subcategory Filter (e.g. Toys & Play -> Ride-On Toys)
      if (selectedSubCategory !== 'all') {
        if (item.subCategory !== selectedSubCategory) {
          return false;
        }
      }

      // 3. Age Group Filter (Section 6, 8)
      if (selectedAge !== 'all') {
        if (selectedAge === 'all-ages') {
          const matchesAllAges =
            item.ageGroup === 'all-ages' ||
            (item.ageGroups && item.ageGroups.includes('all-ages')) ||
            item.category === 'toys' ||
            item.category === 'gifts';
          if (!matchesAllAges) return false;
        } else {
          const hasAge =
            item.ageGroup === selectedAge ||
            (item.ageGroups && item.ageGroups.includes(selectedAge as AgeGroup)) ||
            (selectedAge !== '0-12M' && item.ageGroups && item.ageGroups.includes('all-ages'));
          if (!hasAge) return false;
        }
      }

      // 4. Occasion & Moment Filter (Section 7)
      if (selectedOccasion !== 'all') {
        const matchesOccasion = item.occasions && item.occasions.includes(selectedOccasion as OccasionMoment);
        if (!matchesOccasion) return false;
      }

      // 5. New In Only Filter (Section 3, 4)
      if (onlyNewIn && !item.isNewArrival) {
        return false;
      }

      // 6. Max Budget Slider Filter (Section 10)
      if (maxPrice < 500000 && item.price > maxPrice) {
        return false;
      }

      // 7. Search Query Filter (Section 12)
      if (searchQuery.trim() !== '') {
        const queryTerms = searchQuery.toLowerCase().trim().split(/\s+/);
        const searchableText = [
          item.name,
          item.description,
          item.category,
          item.subCategory || '',
          item.audience || '',
          item.productType || '',
          item.highlightTag || '',
          item.details.material,
          item.details.fit,
          ...item.colors.map(c => c.name),
          ...item.sizes,
          item.ageGroups?.includes('0-12M') ? 'baby newborn infant 0-12m 0-12' : '',
          item.ageGroups?.includes('1-3Y') ? 'toddler 1-3y 1-3 2y 3y' : '',
          item.ageGroups?.includes('4-7Y') ? 'kid kids 4-7y 4-7 5y 6y' : '',
          item.ageGroups?.includes('8-12Y') ? 'pre-teen teen teens 8-12y 8-12 10y 12y' : '',
          item.occasions.includes('birthday') ? 'birthday party celebration' : '',
          item.occasions.includes('everyday') ? 'everyday daily casual play school' : '',
          item.occasions.includes('special-occasion') ? 'special wedding sunday church formal event' : '',
          item.occasions.includes('gifting') ? 'gift hamper present box' : '',
        ].join(' ').toLowerCase();

        const allTermsMatch = queryTerms.every(term => searchableText.includes(term));
        if (!allTermsMatch) return false;
      }

      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });

    // When browsing broad mixed catalogue views (not filtered to a single product type or specific price sort),
    // interleave product variety so identical product types are never adjacent in the grid.
    if (
      (selectedProductType === 'all' || selectedCategory === 'all') &&
      sortBy !== 'price-asc' &&
      sortBy !== 'price-desc' &&
      searchQuery.trim() === ''
    ) {
      return interleaveProductVariety(sorted);
    }

    return sorted;
  }, [selectedAudience, selectedProductType, selectedSubCategory, selectedAge, selectedOccasion, onlyNewIn, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedAudience('all');
    setSelectedProductType('all');
    setSelectedSubCategory('all');
    setSelectedAge('all');
    setSelectedOccasion('all');
    setOnlyNewIn(false);
    setMaxPrice(500000);
    setSearchQuery('');
    setSortBy('featured');
    if (onSelectCategory) onSelectCategory('all');
  };

  const handleCategoryTabClick = (catId: ProductCategory) => {
    setSelectedCategory(catId);
    setSelectedSubCategory('all');
    if (catId === 'girls') {
      setSelectedAudience('girls');
      setSelectedProductType('all');
    } else if (catId === 'boys') {
      setSelectedAudience('boys');
      setSelectedProductType('all');
    } else if (catId === 'baby') {
      setSelectedAudience('baby');
      setSelectedProductType('all');
    } else if (catId === 'shoes') {
      setSelectedAudience('all');
      setSelectedProductType('shoes');
    } else if (catId === 'accessories') {
      setSelectedAudience('all');
      setSelectedProductType('accessories');
    } else if (catId === 'toys') {
      setSelectedAudience('all');
      setSelectedProductType('toys');
    } else if (catId === 'gifts') {
      setSelectedAudience('all');
      setSelectedProductType('gifts');
    } else {
      setSelectedAudience('all');
      setSelectedProductType('all');
    }
    if (onSelectCategory) onSelectCategory(catId);
  };

  const activeFiltersList: { label: string; onRemove: () => void }[] = [];

  if (selectedAudience !== 'all') {
    const audienceNames: Record<string, string> = {
      girls: "Girls' Collection",
      boys: "Boys' Collection",
      baby: "Baby & Newborn",
      unisex: "Unisex Pieces"
    };
    activeFiltersList.push({
      label: audienceNames[selectedAudience] || selectedAudience,
      onRemove: () => {
        setSelectedAudience('all');
        if (['girls', 'boys', 'baby'].includes(selectedCategory)) {
          setSelectedCategory('all');
          if (onSelectCategory) onSelectCategory('all');
        }
      }
    });
  }

  if (selectedProductType !== 'all') {
    const typeNames: Record<string, string> = {
      clothing: "Clothing",
      shoes: "Footwear & Shoes",
      accessories: "Accessories",
      bags: "Bags & Backpacks",
      toys: "Toys & Play",
      'ride-ons': "Ride-On Toys",
      'baby-essentials': "Baby Essentials",
      gifts: "Gifts & Hampers"
    };
    activeFiltersList.push({
      label: typeNames[selectedProductType] || selectedProductType,
      onRemove: () => {
        setSelectedProductType('all');
        if (['shoes', 'accessories', 'toys', 'gifts'].includes(selectedCategory)) {
          setSelectedCategory('all');
          if (onSelectCategory) onSelectCategory('all');
        }
      }
    });
  }

  if (selectedSubCategory !== 'all') {
    activeFiltersList.push({
      label: selectedSubCategory,
      onRemove: () => setSelectedSubCategory('all')
    });
  }

  if (selectedAge !== 'all') {
    const ageNames: Record<string, string> = {
      '0-12M': 'Baby (0 - 12 Months)',
      '1-3Y': 'Toddler (1 - 3 Years)',
      '4-7Y': 'Kids (4 - 7 Years)',
      '8-12Y': 'Pre-Teen (8 - 12 Years)',
      'all-ages': 'All Ages (Toys/Gifts)'
    };
    activeFiltersList.push({
      label: ageNames[selectedAge] || selectedAge,
      onRemove: () => setSelectedAge('all')
    });
  }

  if (selectedOccasion !== 'all') {
    const occNames: Record<string, string> = {
      everyday: 'Everyday Play & Casual',
      birthday: 'Birthday Celebrations',
      'special-occasion': 'Special Events & Sunday',
      gifting: 'Gifting & Hampers'
    };
    activeFiltersList.push({
      label: occNames[selectedOccasion] || selectedOccasion,
      onRemove: () => setSelectedOccasion('all')
    });
  }

  if (onlyNewIn) {
    activeFiltersList.push({
      label: '✨ New In Only',
      onRemove: () => setOnlyNewIn(false)
    });
  }

  if (maxPrice < 500000) {
    activeFiltersList.push({
      label: `Max ₦${maxPrice.toLocaleString()}`,
      onRemove: () => setMaxPrice(500000)
    });
  }

  if (searchQuery.trim() !== '') {
    activeFiltersList.push({
      label: `"${searchQuery}"`,
      onRemove: () => setSearchQuery('')
    });
  }

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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-tab-${cat.id}`}
                onClick={() => handleCategoryTabClick(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#123B68] text-white shadow-md'
                    : 'bg-white border border-[#F4F1EA] text-[#172033]/80 hover:border-[#123B68]/30 hover:bg-[#F4F1EA]/50'
                }`}
              >
                <span>{cat.name}</span>
                {cat.count !== undefined && (
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}

          {/* New Arrivals Quick Switch Tab */}
          <button
            id="cat-tab-new-arrivals"
            onClick={() => {
              setOnlyNewIn(prev => !prev);
            }}
            className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              onlyNewIn
                ? 'bg-[#F58220] text-white shadow-md'
                : 'bg-white border border-[#F58220]/30 text-[#F58220] hover:bg-[#F58220]/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Arrivals Only</span>
          </button>
        </div>

        {/* Toys & Play Subcategory Quick Navigation Strip */}
        {(selectedCategory === 'toys' || selectedProductType === 'toys' || selectedProductType === 'ride-ons') && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
            <span className="text-xs font-black text-[#123B68] uppercase tracking-wider mr-1 whitespace-nowrap flex items-center gap-1">
              <span>Toys & Play:</span>
            </span>
            {[
              { id: 'all-toys', label: 'All Toys', sub: 'all', prodType: 'toys' },
              { id: 'ride-on-toys', label: '🚗 Ride-On Toys', sub: 'Ride-On Toys', prodType: 'ride-ons' },
              { id: 'educational-toys', label: '🧩 Educational', sub: 'Educational Toys', prodType: 'toys' },
              { id: 'pretend-play', label: '🍳 Pretend Play', sub: 'Pretend Play', prodType: 'toys' },
              { id: 'dolls-plush', label: '🧸 Dolls & Plush', sub: 'Plush Toys', prodType: 'toys' },
              { id: 'rc-musical', label: '🎮 RC & Musical', sub: 'Remote-Control Toys', prodType: 'toys' },
            ].map((subTab) => {
              const isActive =
                (subTab.id === 'ride-on-toys' && (selectedProductType === 'ride-ons' || selectedSubCategory === 'Ride-On Toys')) ||
                (subTab.id === 'all-toys' && selectedProductType === 'toys' && selectedSubCategory === 'all') ||
                (selectedSubCategory === subTab.sub && selectedProductType !== 'ride-ons');
              return (
                <button
                  key={subTab.id}
                  id={`toy-sub-${subTab.id}`}
                  onClick={() => {
                    if (subTab.id === 'ride-on-toys') {
                      setSelectedProductType('ride-ons');
                      setSelectedSubCategory('Ride-On Toys');
                    } else if (subTab.id === 'all-toys') {
                      setSelectedProductType('toys');
                      setSelectedSubCategory('all');
                    } else {
                      setSelectedProductType('toys');
                      setSelectedSubCategory(subTab.sub);
                    }
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#123B68] text-white shadow-xs'
                      : 'bg-white border border-[#F4F1EA] text-[#172033] hover:bg-[#F4F1EA]'
                  }`}
                >
                  {subTab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Search, Filter Summary, and Sort Row */}
        <div className="bg-white rounded-2xl p-4 border border-[#F4F1EA] shadow-2xs mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="shop-catalogue-search-input"
              type="text"
              placeholder="Search by title, age, occasion, color or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F1EA]/50 border border-[#F4F1EA] pl-10 pr-9 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white transition-all font-medium text-[#172033]"
            />
            {searchQuery && (
              <button 
                id="clear-search-btn"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right controls: Mobile Filter Toggle & Sort */}
          <div className="flex items-center gap-3 self-end md:self-auto w-full md:w-auto justify-between md:justify-end">
            
            <button
              id="toggle-mobile-filters-btn"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-[#F4F1EA] rounded-xl text-xs font-bold text-[#123B68] cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFiltersList.length > 0 && `(${activeFiltersList.length})`}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 hidden sm:inline">Sort:</span>
              <select
                id="shop-catalogue-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#F4F1EA] rounded-xl px-3 py-2 text-xs font-bold text-[#123B68] focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="newest">New Arrivals First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>

        </div>

        {/* Active Filter Chips Strip */}
        {activeFiltersList.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-white p-3.5 rounded-2xl border border-[#F4F1EA]">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>Active Filters:</span>
            </span>
            {activeFiltersList.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-[#123B68]/10 text-[#123B68] text-xs font-bold px-3 py-1 rounded-full"
              >
                <span>{chip.label}</span>
                <button
                  onClick={chip.onRemove}
                  className="hover:text-red-500 transition-colors cursor-pointer p-0.5"
                  title="Remove filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              id="clear-all-filter-chips-btn"
              onClick={resetFilters}
              className="text-xs font-black text-[#F58220] hover:underline ml-auto flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear All</span>
            </button>
          </div>
        )}

        {/* Main Grid with Sidebar Filter Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Filter Sidebar */}
          <div className={`lg:col-span-3 ${showMobileFilters ? 'block' : 'hidden lg:block'} bg-white rounded-3xl p-6 border border-[#F4F1EA] shadow-2xs space-y-6 sticky top-24`}>
            
            <div className="flex items-center justify-between pb-4 border-b border-[#F4F1EA]">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#123B68]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#123B68]">
                  Filter Pieces
                </h3>
              </div>
              {activeFiltersList.length > 0 && (
                <button
                  id="sidebar-reset-filters-btn"
                  onClick={resetFilters}
                  className="text-xs text-[#F58220] font-bold hover:underline cursor-pointer"
                >
                  Reset all
                </button>
              )}
            </div>

            {/* 1. Audience / Department */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Audience / Department
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'all', label: 'All Kids' },
                  { id: 'girls', label: '🌸 Girls' },
                  { id: 'boys', label: '🧢 Boys' },
                  { id: 'baby', label: '🍼 Baby' },
                ].map((aud) => (
                  <button
                    key={aud.id}
                    id={`filter-aud-${aud.id}`}
                    onClick={() => {
                      setSelectedAudience(aud.id as any);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedAudience === aud.id
                        ? 'bg-[#123B68] text-white shadow-xs'
                        : 'bg-[#F4F1EA]/60 text-gray-700 hover:bg-[#F4F1EA]'
                    }`}
                  >
                    {aud.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Age Group Filter */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Age Group
              </h4>
              <div className="space-y-1.5">
                {[
                  { id: 'all', label: 'All Ages' },
                  { id: '0-12M', label: 'Baby (0 - 12 Months)' },
                  { id: '1-3Y', label: 'Toddler (1 - 3 Years)' },
                  { id: '4-7Y', label: 'Kids (4 - 7 Years)' },
                  { id: '8-12Y', label: 'Pre-Teen (8 - 12 Years)' },
                  { id: 'all-ages', label: 'All Ages (Toys / Gifts)' },
                ].map((age) => (
                  <button
                    key={age.id}
                    id={`filter-age-${age.id}`}
                    onClick={() => setSelectedAge(age.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
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

            {/* 3. Product Category / Type */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Category / Product Type
              </h4>
              <div className="space-y-1.5">
                {[
                  { id: 'all', label: 'All Categories' },
                  { id: 'clothing', label: '👗 Clothing & Sets' },
                  { id: 'shoes', label: '👟 Shoes & Sandals' },
                  { id: 'accessories', label: '👑 Accessories & Sunnies' },
                  { id: 'bags', label: '🎒 Bags & Backpacks' },
                  { id: 'toys', label: '🧸 Toys & Play' },
                  { id: 'ride-ons', label: '🚗 Ride-On Toys' },
                  { id: 'baby-essentials', label: '🍼 Baby Essentials' },
                  { id: 'gifts', label: '🎁 Gifts & Hampers' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    id={`filter-cat-${cat.id}`}
                    onClick={() => setSelectedProductType(cat.id as any)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                      selectedProductType === cat.id
                        ? 'bg-[#123B68]/10 text-[#123B68] font-black'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.label}</span>
                    {selectedProductType === cat.id && <Check className="w-3.5 h-3.5 text-[#123B68]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Occasion & Moment Filter */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#172033] mb-3">
                Occasion & Moment
              </h4>
              <div className="space-y-1.5">
                {[
                  { id: 'all', label: 'All Occasions' },
                  { id: 'everyday', label: '☀️ Everyday Play & Casual' },
                  { id: 'birthday', label: '🎂 Birthday Celebrations' },
                  { id: 'special-occasion', label: '✨ Special Events & Sunday' },
                  { id: 'gifting', label: '🎁 Gifting & Hampers' },
                ].map((occ) => (
                  <button
                    key={occ.id}
                    id={`filter-occ-${occ.id}`}
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
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

            {/* 5. Max Budget Filter (Section 10) */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#172033]">
                  Maximum Budget
                </h4>
                <span className="text-sm font-black text-[#123B68] bg-[#123B68]/10 px-2.5 py-0.5 rounded-md">
                  ₦{maxPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mb-2">
                {maxPrice >= 500000 
                  ? 'Showing all items regardless of price' 
                  : `Filtering items priced up to ₦${maxPrice.toLocaleString()}`}
              </p>
              <input
                id="shop-budget-slider"
                type="range"
                min={10000}
                max={500000}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#123B68] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
                <span>₦10,000</span>
                <span>₦500,000+</span>
              </div>

              {/* Quick Budget Presets */}
              <div className="flex flex-wrap gap-1 mt-3">
                {[
                  { label: '≤ ₦20k', val: 20000 },
                  { label: '≤ ₦35k', val: 35000 },
                  { label: '≤ ₦50k', val: 50000 },
                  { label: '≤ ₦100k', val: 100000 },
                  { label: '≤ ₦250k', val: 250000 },
                  { label: 'Any Budget', val: 500000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => setMaxPrice(preset.val)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                      maxPrice === preset.val
                        ? 'bg-[#123B68] text-white'
                        : 'bg-[#F4F1EA]/80 text-[#172033] hover:bg-[#F4F1EA]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 6. New In Toggle */}
            <div className="pt-4 border-t border-[#F4F1EA]">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-black uppercase tracking-wider text-[#172033] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
                  <span>New Arrivals Only</span>
                </span>
                <input
                  id="filter-new-in-toggle"
                  type="checkbox"
                  checked={onlyNewIn}
                  onChange={(e) => setOnlyNewIn(e.target.checked)}
                  className="w-4 h-4 accent-[#F58220] rounded cursor-pointer"
                />
              </label>
            </div>

            {/* Physical Boutique Card */}
            <div className="pt-4 border-t border-[#F4F1EA] bg-[#F4F1EA]/50 p-4 rounded-2xl">
              <p className="text-xs font-bold text-[#123B68] mb-1">
                📍 Galleria Mall Orchid, Lagos
              </p>
              <p className="text-[11px] text-[#172033]/70">
                All catalogue pieces are available for walk-in inspection or dispatch.
              </p>
            </div>

          </div>

          {/* Product Results Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              /* Intelligent Empty State (Section 14) */
              <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#F4F1EA] shadow-2xs">
                <div className="w-16 h-16 rounded-full bg-[#F4F1EA] flex items-center justify-center text-[#123B68] mx-auto mb-4">
                  <Search className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#123B68] font-display mb-2">
                  No matching pieces found
                </h3>
                <p className="text-sm text-[#172033]/70 max-w-md mx-auto mb-6">
                  We couldn't find items that match all of your selected filters at the same time.
                </p>

                {/* Helpful suggestions based on active filters */}
                <div className="max-w-md mx-auto bg-[#FFFDF8] border border-[#F4F1EA] rounded-2xl p-4 mb-6 text-left">
                  <p className="text-xs font-black text-[#123B68] uppercase tracking-wider mb-2">
                    Try broadening your selection:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-2">
                    {maxPrice < 50000 && (
                      <li className="flex items-center justify-between gap-2">
                        <span>• Your budget is set to ₦{maxPrice.toLocaleString()}.</span>
                        <button
                          onClick={() => setMaxPrice(500000)}
                          className="text-[#123B68] font-bold underline cursor-pointer hover:text-[#F58220]"
                        >
                          Increase budget to ₦500k+
                        </button>
                      </li>
                    )}
                    {selectedAge !== 'all' && (
                      <li className="flex items-center justify-between gap-2">
                        <span>• Filtered by age: {selectedAge}.</span>
                        <button
                          onClick={() => setSelectedAge('all')}
                          className="text-[#123B68] font-bold underline cursor-pointer hover:text-[#F58220]"
                        >
                          View all ages
                        </button>
                      </li>
                    )}
                    {selectedOccasion !== 'all' && (
                      <li className="flex items-center justify-between gap-2">
                        <span>• Filtered by occasion: {selectedOccasion}.</span>
                        <button
                          onClick={() => setSelectedOccasion('all')}
                          className="text-[#123B68] font-bold underline cursor-pointer hover:text-[#F58220]"
                        >
                          View all occasions
                        </button>
                      </li>
                    )}
                    {onlyNewIn && (
                      <li className="flex items-center justify-between gap-2">
                        <span>• Restricted to New Arrivals only.</span>
                        <button
                          onClick={() => setOnlyNewIn(false)}
                          className="text-[#123B68] font-bold underline cursor-pointer hover:text-[#F58220]"
                        >
                          Show all collection
                        </button>
                      </li>
                    )}
                    {selectedProductType !== 'all' && (
                      <li className="flex items-center justify-between gap-2">
                        <span>• Filtered by category: {selectedProductType}.</span>
                        <button
                          onClick={() => setSelectedProductType('all')}
                          className="text-[#123B68] font-bold underline cursor-pointer hover:text-[#F58220]"
                        >
                          Show all categories
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    id="empty-state-reset-btn"
                    onClick={resetFilters}
                    className="bg-[#123B68] hover:bg-[#2563C7] text-white px-6 py-3 rounded-2xl font-bold text-xs shadow-xs cursor-pointer transition-colors"
                  >
                    Clear All Filters & Show Full Catalogue
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4 px-1">
                  <p className="text-xs text-[#172033]/70 font-semibold">
                    Showing <strong className="text-[#123B68]">{filteredProducts.length}</strong> items
                    {maxPrice < 500000 && (
                      <span className="text-[#F58220] ml-1.5 font-bold">
                        (Budget ≤ ₦{maxPrice.toLocaleString()})
                      </span>
                    )}
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
