import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/storeData';
import { ProductCategory, ActiveView } from '../types';

interface CategoryDiscoveryProps {
  onSelectCategory: (category: ProductCategory) => void;
  onNavigate?: (view: ActiveView) => void;
}

export const CategoryDiscovery: React.FC<CategoryDiscoveryProps> = ({
  onSelectCategory,
  onNavigate
}) => {
  const handleCategoryClick = (categoryKey: string) => {
    onSelectCategory(categoryKey as ProductCategory);
    if (onNavigate) {
      onNavigate('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="category-discovery-section"
      className="py-14 sm:py-20 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#27AFA5] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27AFA5]" />
              SHOP BY CATEGORY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173F70] tracking-tight font-display">
              FIND THEIR NEXT FAVOURITE
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#172033]/75 max-w-md">
            Little styles, big choices. Shop by what they love.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((category) => (
            <div
              key={category.id}
              id={`category-card-${category.categoryKey}`}
              onClick={() => handleCategoryClick(category.categoryKey)}
              className="group relative rounded-2xl overflow-hidden bg-[#F4F1EA] border border-[#F4F1EA] hover:border-[#173F70]/40 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between h-[360px] sm:h-[400px]"
            >
              {/* Category Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F70]/95 via-[#173F70]/40 to-black/10 group-hover:from-[#173F70]/90 transition-colors" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 p-4">
                <span 
                  className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-[#173F70] bg-white/90 backdrop-blur-xs shadow-xs"
                >
                  {category.badgeText}
                </span>
              </div>

              {/* Bottom Information */}
              <div className="relative z-10 p-5 text-white flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight font-display text-white group-hover:text-[#F9C928] transition-colors">
                    {category.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#F58220] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-xs text-white/85 leading-relaxed mb-3">
                  {category.description}
                </p>

                <div className="flex items-center text-[11px] font-extrabold uppercase tracking-widest text-[#F9C928] group-hover:text-white transition-colors">
                  <span>SHOP CATEGORY</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
