import React from 'react';
import { Truck, MapPin, Sparkles, Gift, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ActiveView } from '../types';

interface BrandStoryProps {
  onNavigate: (view: ActiveView) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onNavigate }) => {
  return (
    <section 
      id="why-buubu-bloom-section"
      className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#F4F1EA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Visual Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
                  alt="Happy stylish children at Buubu Bloom Lagos"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlaid Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#F4F1EA] max-w-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#F58220]/20 flex items-center justify-center text-[#F58220]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-black text-[#173F70] uppercase tracking-wider">
                    BUUBU BLOOM
                  </span>
                </div>
                <p className="text-xs text-[#172033]/80 font-medium">
                  “Match your vibe, Bloom your style!”
                </p>
              </div>

              {/* Accent Corner Badge */}
              <div className="absolute -top-4 -left-4 bg-[#173F70] text-white py-2 px-3.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#27AFA5]" />
                <span>Galleria Mall, Orchid</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Benefits */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 bg-[#27AFA5]/15 text-[#27AFA5] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
              <span>STORE PROMISE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display leading-[1.15] mb-6">
              WHY BUUBU BLOOM?
            </h2>

            {/* 4 Core Benefit Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              <div className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#2563C7]/15 text-[#2563C7] flex items-center justify-center font-bold mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 uppercase tracking-wide">
                  NATIONWIDE DELIVERY
                </h4>
                <p className="text-xs text-[#172033]/75 leading-relaxed">
                  From Lagos to anywhere in Nigeria, we’ll get their favourites to you.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center font-bold mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 uppercase tracking-wide">
                  VISIT US IN PERSON
                </h4>
                <p className="text-xs text-[#172033]/75 leading-relaxed">
                  Find us at Galleria Mall, Orchid, Lagos.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#F9C928]/25 text-[#173F70] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5 text-[#F58220]" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 uppercase tracking-wide">
                  CURATED FOR LITTLE PEOPLE
                </h4>
                <p className="text-xs text-[#172033]/75 leading-relaxed">
                  From babies to growing trendsetters, discover styles for every little personality.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#D93F92]/15 text-[#D93F92] flex items-center justify-center font-bold mb-3">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 uppercase tracking-wide">
                  FASHION + FUN + GIFTS
                </h4>
                <p className="text-xs text-[#172033]/75 leading-relaxed">
                  Outfits, shoes, toys and thoughtful little surprises — all in one place.
                </p>
              </div>

            </div>

            {/* Section CTA */}
            <button
              id="why-buubu-bloom-shop-btn"
              onClick={() => onNavigate('shop', 'all')}
              className="bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide flex items-center gap-2 shadow-md transition-all active:scale-95 group"
            >
              <span>SHOP BUUBU BLOOM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
