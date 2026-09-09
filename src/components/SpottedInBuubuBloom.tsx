import React from 'react';
import { Heart, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product, ActiveView } from '../types';
import { PRODUCTS } from '../data/products';

interface SpottedInBuubuBloomProps {
  onQuickView: (product: Product) => void;
  onNavigate: (view: ActiveView) => void;
}

interface CustomerLook {
  id: string;
  childName: string;
  ageAndCity: string;
  image: string;
  quote: string;
  featuredProductId: string;
  lookTitle: string;
}

const CUSTOMER_LOOKS: CustomerLook[] = [
  {
    id: 'look-1',
    childName: 'Aria',
    ageAndCity: '4 yrs, Lekki Phase 1',
    image: '/src/assets/images/girls_nigerian_yellow_1787489114238.jpg',
    quote: '“She refused to take it off even for bedtime!”',
    featuredProductId: 'prod-1',
    lookTitle: 'Daisy Sunshine Tiered Dress'
  },
  {
    id: 'look-2',
    childName: 'Kamsi',
    ageAndCity: '5 yrs, Victoria Island',
    image: '/src/assets/images/boys_nigerian_safari_1787489099338.jpg',
    quote: '“Sharp, breathable and survived the playground without wrinkles.”',
    featuredProductId: 'prod-3',
    lookTitle: 'Safari Explorer Two-Piece Set'
  },
  {
    id: 'look-3',
    childName: 'Tiwa & David',
    ageAndCity: '6 & 7 yrs, Ikeja GRA',
    image: '/src/assets/images/nigerian_birthday_kids_1787489171127.jpg',
    quote: '“Birthday party champions! Everyone asked where we got the outfits.”',
    featuredProductId: 'prod-7',
    lookTitle: 'Party Celebration Edition'
  },
  {
    id: 'look-4',
    childName: 'Tariq',
    ageAndCity: '3 yrs, Ikoyi',
    image: '/src/assets/images/boys_nigerian_denim_1787489068562.jpg',
    quote: '“Coolest boy in the room. The denim quality is 10/10.”',
    featuredProductId: 'prod-2',
    lookTitle: 'Denim Chore Jacket & Shorts'
  }
];

export const SpottedInBuubuBloom: React.FC<SpottedInBuubuBloomProps> = ({
  onQuickView,
  onNavigate
}) => {
  return (
    <section 
      id="spotted-in-buubu-bloom-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>REAL CUSTOMERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display">
              Spotted in Buubu Bloom 💛
            </h2>
            <p className="text-base sm:text-lg text-[#172033]/80 mt-2 max-w-xl">
              The cutest part of what we do? Seeing our little customers wear it their way.
            </p>
          </div>

          <button
            id="see-more-looks-btn"
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white px-7 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 self-start sm:self-auto cursor-pointer"
          >
            <span>See More Looks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_LOOKS.map((look) => {
            const product = PRODUCTS.find(p => p.id === look.featuredProductId) || PRODUCTS[0];
            return (
              <div
                key={look.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#F4F1EA] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F4F1EA]">
                  <img
                    src={look.image}
                    alt={`${look.childName} in Buubu Bloom`}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1 text-[11px] font-black text-[#173F70]">
                    <Heart className="w-3 h-3 fill-[#F58220] text-[#F58220]" />
                    <span>Lagos</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium italic opacity-95 mb-1 leading-snug">
                      {look.quote}
                    </p>
                    <p className="text-sm font-black">
                      {look.childName} <span className="text-[11px] font-normal opacity-80">({look.ageAndCity})</span>
                    </p>
                  </div>
                </div>

                {/* Product Reference Tag Beneath */}
                <div className="p-4 bg-[#FFFDF8] border-t border-[#F4F1EA] flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#27AFA5] block">
                      Featured Look
                    </span>
                    <h4 
                      onClick={() => onQuickView(product)}
                      className="text-xs font-bold text-[#172033] truncate hover:text-[#173F70] cursor-pointer"
                    >
                      {look.lookTitle}
                    </h4>
                    <span className="text-xs font-black text-[#F58220]">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onQuickView(product)}
                    className="p-2 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-xl text-[#173F70] transition-colors cursor-pointer"
                    title="View this product"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
