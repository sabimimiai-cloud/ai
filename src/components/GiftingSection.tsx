import React, { useState } from 'react';
import { Gift, Cake, Baby, Sparkles, Heart, ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { ActiveView, ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface GiftingSectionProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({
  onNavigate,
  onQuickView,
  onAddToCart
}) => {
  const [recipient, setRecipient] = useState<'girl' | 'boy' | 'baby'>('girl');
  const [occasion, setOccasion] = useState<'birthday' | 'baby-shower' | 'just-because'>('birthday');

  // Filter gift products matching recipient
  const giftProducts = PRODUCTS.filter(p => {
    if (p.category === 'gifts' || p.category === 'toys') return true;
    if (recipient === 'girl') return p.category === 'girls' || p.category === 'accessories';
    if (recipient === 'boy') return p.category === 'boys' || p.category === 'shoes';
    if (recipient === 'baby') return p.category === 'baby';
    return true;
  }).slice(0, 3);

  return (
    <section 
      id="gifting-hub-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Gifting Philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#F58220]/15 text-[#F58220] px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
              <Gift className="w-3.5 h-3.5" />
              <span>THE GIFT EDIT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display leading-[1.15] mb-5">
              LOOKING FOR A GIFT <br />
              <span className="text-[#F58220]">THEY’LL ACTUALLY LOVE?</span>
            </h2>

            <p className="text-base text-[#172033]/80 leading-relaxed mb-6 font-medium">
              Birthday coming up? Baby shower? A special little celebration? Find something they’ll be excited to unwrap.
              <br /><br />
              Whether you're a parent, auntie, uncle, grandparent or family friend, discover statement party outfits, curated gift hampers, ride-ons and keepsake boxes ready for gifting.
            </p>

            {/* 4 Gifting Category Quick Links */}
            <div className="grid grid-cols-2 gap-2.5 w-full mb-8">
              <button
                onClick={() => onNavigate('shop', 'gifts')}
                className="p-3 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-2xl text-left transition-all text-xs font-bold text-[#173F70] flex items-center justify-between group"
              >
                <span>🎂 BIRTHDAY GIFTS</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('shop', 'baby')}
                className="p-3 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-2xl text-left transition-all text-xs font-bold text-[#173F70] flex items-center justify-between group"
              >
                <span>🍼 BABY SHOWER GIFTS</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('shop', 'toys')}
                className="p-3 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-2xl text-left transition-all text-xs font-bold text-[#173F70] flex items-center justify-between group"
              >
                <span>🚗 RIDE-ONS & TOYS</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('shop', 'girls')}
                className="p-3 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-2xl text-left transition-all text-xs font-bold text-[#173F70] flex items-center justify-between group"
              >
                <span>👑 FASHION GIFTS</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <button
              id="gifting-shop-all-btn"
              onClick={() => onNavigate('shop', 'gifts')}
              className="bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide flex items-center gap-2 shadow-md transition-all active:scale-95 group"
            >
              <span>SHOP GIFTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Interactive Gift Finder Widget & Showcase */}
          <div className="lg:col-span-7 bg-[#F4F1EA]/60 border border-[#F4F1EA] rounded-3xl p-6 sm:p-8">
            
            <div className="flex items-center justify-between border-b border-[#123B68]/10 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-black text-[#123B68] font-display">
                  Quick Gift Helper
                </h3>
                <p className="text-xs text-[#172033]/70">Select recipient & occasion for instant recommendations</p>
              </div>
              <span className="text-[11px] font-extrabold text-[#27AFA3] bg-white px-2.5 py-1 rounded-full border border-[#27AFA3]/30">
                Complimentary Ribbon Wrapping
              </span>
            </div>

            {/* Selector 1: Recipient */}
            <div className="mb-4">
              <label className="block text-xs font-black text-[#123B68] uppercase tracking-wider mb-2">
                1. Who are you shopping for?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRecipient('girl')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    recipient === 'girl'
                      ? 'bg-[#F5A6C8] text-[#123B68] shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Girl</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRecipient('boy')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    recipient === 'boy'
                      ? 'bg-[#2563C7] text-white shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Boy</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRecipient('baby')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    recipient === 'baby'
                      ? 'bg-[#F4C430] text-[#123B68] shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Baby className="w-3.5 h-3.5" />
                  <span>Baby / Newborn</span>
                </button>
              </div>
            </div>

            {/* Selector 2: Occasion */}
            <div className="mb-6">
              <label className="block text-xs font-black text-[#123B68] uppercase tracking-wider mb-2">
                2. What is the occasion?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setOccasion('birthday')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    occasion === 'birthday'
                      ? 'bg-[#123B68] text-white shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Cake className="w-3.5 h-3.5" />
                  <span>Birthday</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOccasion('baby-shower')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    occasion === 'baby-shower'
                      ? 'bg-[#123B68] text-white shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Baby className="w-3.5 h-3.5" />
                  <span>Baby Shower</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOccasion('just-because')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    occasion === 'just-because'
                      ? 'bg-[#123B68] text-white shadow-xs'
                      : 'bg-white text-[#172033]/70 hover:bg-white/80'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Just Because</span>
                </button>
              </div>
            </div>

            {/* Recommended Products Carousel / List */}
            <div className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#123B68]">
                Top Matches For Your Selection:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {giftProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl p-3 border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2 relative bg-[#F4F1EA]">
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-1.5 left-1.5 bg-[#123B68] text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                          {prod.highlightTag || 'Gift Pick'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-[#172033] line-clamp-1">{prod.name}</p>
                      <p className="text-xs font-extrabold text-[#F58220] mt-0.5">₦{prod.price.toLocaleString()}</p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-[#F4F1EA] flex items-center gap-1.5">
                      <button
                        onClick={() => onQuickView?.(prod)}
                        className="flex-1 py-1.5 bg-[#F4F1EA] hover:bg-[#123B68] hover:text-white rounded-lg text-[10px] font-bold text-[#123B68] transition-colors cursor-pointer"
                      >
                        VIEW
                      </button>
                      <button
                        onClick={() => onAddToCart?.(prod)}
                        className="p-1.5 bg-[#123B68] text-white hover:bg-[#2563C7] rounded-lg transition-colors cursor-pointer"
                        title="Add to bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
