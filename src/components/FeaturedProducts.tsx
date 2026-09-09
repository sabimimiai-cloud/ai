import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product, ProductCategory, ActiveView } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onQuickView,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('all');

  const filterTabs: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'All Picks' },
    { key: 'girls', label: 'Girls' },
    { key: 'boys', label: 'Boys' },
    { key: 'baby', label: 'Baby' },
    { key: 'shoes', label: 'Shoes' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'toys', label: 'Toys' },
    { key: 'gifts', label: 'Gifts' }
  ];

  const displayedProducts = PRODUCTS.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  }).slice(0, 8);

  return (
    <section 
      id="featured-collection-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#F58220] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MOST LOVED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] tracking-tight font-display">
              Customer Favourites ⭐
            </h2>
            <p className="text-sm sm:text-base text-[#172033]/75 mt-1">
              Tried, tested, and re-ordered by parents all over Lagos and beyond.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                id={`featured-tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#173F70] text-white shadow-sm'
                    : 'bg-[#F4F1EA] text-[#172033]/70 hover:text-[#173F70] hover:bg-[#F4F1EA]/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {displayedProducts.map(product => (
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

        {/* Bottom Call to Action */}
        <div className="text-center pt-2">
          <button
            id="view-full-shop-btn"
            onClick={() => onNavigate('shop', activeTab)}
            className="inline-flex items-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 group cursor-pointer"
          >
            <span>Shop New Arrivals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
