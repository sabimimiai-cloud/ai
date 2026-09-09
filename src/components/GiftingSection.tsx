import React, { useState } from 'react';
import { Gift, Cake, Baby, Sparkles, Heart, ArrowRight, ShoppingBag, Check, Phone } from 'lucide-react';
import { ActiveView, ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { STORE_CONTACT } from '../data/storeData';

interface GiftingSectionProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product, size?: string, color?: string) => void;
}

type RecipientType = 'Girl' | 'Boy' | 'Baby';
type AgeType = '0–2' | '3–5' | '6–9' | '10–13' | 'Teen';
type OccasionType = 'Birthday' | 'Baby gift' | 'Christmas' | 'Just because' | 'Something special';

export const GiftingSection: React.FC<GiftingSectionProps> = ({
  onNavigate,
  onQuickView,
  onAddToCart
}) => {
  const [who, setWho] = useState<RecipientType>('Girl');
  const [age, setAge] = useState<AgeType>('3–5');
  const [occasion, setOccasion] = useState<OccasionType>('Birthday');
  const [picked, setPicked] = useState<boolean>(true);

  // Dynamic filter based on selected inputs
  const recommendedGifts = PRODUCTS.filter(p => {
    if (who === 'Baby') return p.category === 'baby' || p.category === 'gifts';
    if (who === 'Girl') return p.category === 'girls' || p.category === 'accessories' || p.category === 'gifts' || p.category === 'toys';
    if (who === 'Boy') return p.category === 'boys' || p.category === 'shoes' || p.category === 'toys' || p.category === 'gifts';
    return true;
  }).slice(0, 4);

  const whatsappInquiryUrl = `https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
    `Hello Buubu Bloom! 🎁 I need help picking a gift for a ${who} (Age: ${age}) for ${occasion}. What would you recommend?`
  )}`;

  return (
    <section 
      id="gift-concierge-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Standout Container */}
        <div className="bg-gradient-to-br from-[#FFFDF8] to-[#F4F1EA]/60 rounded-3xl border border-[#F4F1EA] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle brand glow circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#27AFA5]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#F58220]/15 text-[#F58220] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
              <Gift className="w-4 h-4" />
              <span>GIFT CONCIERGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display leading-[1.15] mb-4">
              Buying a gift and don’t know where to start?
            </h2>

            <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed">
              Tell us a little about the child and we’ll help you narrow it down.
            </p>
          </div>

          {/* Selections Interactive Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#F4F1EA] shadow-md mb-10 relative z-10">
            
            {/* Question 1: Who is it for? */}
            <div className="mb-6 pb-6 border-b border-[#F4F1EA]">
              <label className="block text-xs font-black uppercase tracking-wider text-[#173F70] mb-3">
                Who is it for?
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                {(['Girl', 'Boy', 'Baby'] as RecipientType[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setWho(opt)}
                    className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      who === opt
                        ? 'bg-[#173F70] text-white shadow-sm scale-101'
                        : 'bg-[#F4F1EA] text-[#172033]/70 hover:bg-[#F4F1EA]/80'
                    }`}
                  >
                    {opt === 'Girl' && <Sparkles className="w-4 h-4 text-[#F58220]" />}
                    {opt === 'Boy' && <Sparkles className="w-4 h-4 text-[#2563C7]" />}
                    {opt === 'Baby' && <Baby className="w-4 h-4 text-[#F4C430]" />}
                    <span>{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: How old are they? */}
            <div className="mb-6 pb-6 border-b border-[#F4F1EA]">
              <label className="block text-xs font-black uppercase tracking-wider text-[#173F70] mb-3">
                How old are they?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                {(['0–2', '3–5', '6–9', '10–13', 'Teen'] as AgeType[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAge(opt)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all text-center cursor-pointer ${
                      age === opt
                        ? 'bg-[#F58220] text-white shadow-sm'
                        : 'bg-[#F4F1EA] text-[#172033]/70 hover:bg-[#F4F1EA]/80'
                    }`}
                  >
                    {opt} {opt !== 'Teen' && 'years'}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: What's the occasion? */}
            <div className="mb-8">
              <label className="block text-xs font-black uppercase tracking-wider text-[#173F70] mb-3">
                What’s the occasion?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                {(['Birthday', 'Baby gift', 'Christmas', 'Just because', 'Something special'] as OccasionType[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setOccasion(opt)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold transition-all text-center cursor-pointer ${
                      occasion === opt
                        ? 'bg-[#27AFA5] text-white shadow-sm'
                        : 'bg-[#F4F1EA] text-[#172033]/70 hover:bg-[#F4F1EA]/80'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                id="help-me-pick-btn"
                onClick={() => setPicked(true)}
                className="w-full sm:w-auto bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl font-black text-sm tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#F9C928]" />
                <span>Help Me Pick</span>
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#27AFA5] hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>Or ask our personal shopper directly on WhatsApp →</span>
              </a>
            </div>

          </div>

          {/* Results Display */}
          {picked && (
            <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-black uppercase tracking-wider text-[#173F70]">
                  Picks for {who} • {age} years • {occasion}:
                </p>
                <button
                  onClick={() => onNavigate('shop', 'gifts')}
                  className="text-xs font-bold text-[#2563C7] hover:underline cursor-pointer"
                >
                  View more gift ideas →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recommendedGifts.map((prod) => (
                  <div
                    key={prod.id}
                    className="bg-white rounded-2xl p-3 border border-[#F4F1EA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                    onClick={() => onQuickView?.(prod)}
                  >
                    <div>
                      <div className="aspect-[4/5] rounded-xl overflow-hidden mb-2 relative bg-[#F4F1EA]">
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform"
                        />
                        <span className="absolute top-2 left-2 bg-[#F58220] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
                          {prod.highlightTag || 'Gift Pick'}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#172033] line-clamp-2 group-hover:text-[#173F70] transition-colors">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-black text-[#173F70] mt-1">
                        ₦{prod.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-[#F4F1EA] flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#27AFA5]">
                        ✓ In Stock
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart?.(prod, prod.sizes[0], prod.colors[0]?.name || 'Standard');
                        }}
                        className="p-1.5 rounded-lg bg-[#173F70] hover:bg-[#2563C7] text-white transition-colors cursor-pointer"
                        title="Add to bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
