import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, MapPin, Gift, Star } from 'lucide-react';
import { ActiveView, ProductCategory } from '../types';

interface HeroProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F4F1EA]/60 to-[#FFFDF8] pt-6 pb-14 sm:pt-10 sm:pb-20 border-b border-[#F4F1EA]"
    >
      {/* Decorative Brand Color Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F5A6C8]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#F4C430]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#27AFA3]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Brand Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 bg-white/95 border border-[#173F70]/15 px-3.5 py-1.5 rounded-full shadow-2xs mb-5">
              <span className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#173F70] tracking-wide">
                “Match your vibe, Bloom your style!”
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#173F70] tracking-tight font-display leading-[1.1] mb-5">
              Little looks. <br className="hidden sm:inline" />
              <span className="text-[#F58220] relative inline-block">
                Big personality.
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="#F9C928" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Body */}
            <p className="text-base sm:text-lg text-[#172033]/85 leading-relaxed max-w-xl mb-8">
              Cute clothes, shoes, toys and gifts for the little people who already have plenty of personality.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                id="hero-shop-collection-btn"
                onClick={() => onNavigate('shop', 'all')}
                className="bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
              >
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-find-gift-btn"
                onClick={() => onNavigate('shop', 'gifts')}
                className="bg-white hover:bg-[#F4F1EA] text-[#173F70] border-2 border-[#173F70] px-7 py-4 rounded-2xl font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <Gift className="w-4 h-4 text-[#F58220]" />
                <span>Find a Gift</span>
              </button>
            </div>

            {/* Trust highlights bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#123B68]/10 w-full">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#27AFA3]/15 flex items-center justify-center text-[#27AFA3]">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#123B68] leading-tight">Delivery Across Nigeria</p>
                  <p className="text-[11px] text-[#172033]/60">Fast to your doorstep</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F58220]/15 flex items-center justify-center text-[#F58220]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#123B68] leading-tight">Galleria Mall</p>
                  <p className="text-[11px] text-[#172033]/60">Orchid, Lagos</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F4C430]/20 flex items-center justify-center text-[#123B68]">
                  <Star className="w-4 h-4 fill-current text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#123B68] leading-tight">Baby to Teens</p>
                  <p className="text-[11px] text-[#172033]/60">Fits they'll actually wear</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-white group">
                <img
                  src="/src/assets/images/hero_nigerian_girl_1787489055452.jpg"
                  alt="Stylish children fashion at Buubu Bloom Lagos"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F70]/75 via-transparent to-transparent" />
                
                {/* Floating Bottom Card Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block bg-[#F58220] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1.5 shadow-xs">
                    NEW IN STORE
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Fresh Looks Just Landed
                  </h3>
                  <p className="text-xs text-white/90">At Galleria Mall, Orchid & nationwide delivery</p>
                </div>
              </div>

              {/* Floating Mini Accent Card 1: Boy Styling */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white p-2.5 rounded-2xl shadow-lg border border-[#F4F1EA] max-w-[160px] sm:max-w-[180px] hidden sm:flex items-center gap-2 animate-bounce-slow">
                <img
                  src="/src/assets/images/boys_nigerian_denim_1787489068562.jpg"
                  alt="Boys stylish outfit preview"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase text-[#2563C7]">Little Gents</p>
                  <p className="text-xs font-bold text-[#172033]">Easy 2-Piece Sets</p>
                </div>
              </div>

              {/* Floating Mini Accent Card 2: Shoes & Accessories */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-lg border border-[#F4F1EA] flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4C430]/20 flex items-center justify-center text-[#123B68]">
                  <Sparkles className="w-5 h-5 text-[#F58220]" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#123B68]">Gifts & Toys</p>
                  <p className="text-[11px] text-[#172033]/70">Wrapped & ready</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
