import React from 'react';
import { Sparkles, Heart, ShieldCheck, Sun, MapPin, Phone, ArrowRight, Store, Gift } from 'lucide-react';
import { ActiveView } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface AboutViewProps {
  onNavigate: (view: ActiveView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-view-container" className="bg-[#FFFDF8]">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#123B68] via-[#123B68] to-[#2563C7] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#27AFA3]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-[#F4C430] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>OUR BRAND STORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight mb-6">
            Where Little Style <br className="hidden sm:inline" />
            <span className="text-[#F58220]">Comes to Life.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Buubu Bloom was founded with a warm, joyful mission: to dress children in pieces that let them express their cheerful energy, stay comfortable all day, and make parents proud.
          </p>
        </div>
      </section>

      {/* Main Story & Photography */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#27AFA3]">
              <span>OUR PHILOSOPHY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#123B68] font-display">
              Match your vibe, Bloom your style!
            </h2>

            <p className="text-sm sm:text-base text-[#172033]/80 leading-relaxed">
              We believe children’s fashion should never be rigid or boring. Every piece at <strong>Buubu Bloom</strong> is carefully selected to blend sweet childlike charm with modern silhouettes and durable construction.
            </p>

            <p className="text-sm sm:text-base text-[#172033]/80 leading-relaxed">
              Whether it’s a birthday tulle gown that sparkles across the room, a sharp linen set for Sunday thanksgiving, a pair of supportive first-walker sneakers, or a battery-powered cruiser that lights up the driveway — we bring joy into every childhood milestone.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="bg-[#123B68] hover:bg-[#2563C7] text-white px-7 py-3.5 rounded-2xl font-bold text-xs tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <span>EXPLORE THE COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
                  alt="Little girl smiling in Buubu Bloom outfit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F58220]/15 p-6 rounded-3xl text-center">
                <span className="text-2xl font-black text-[#F58220] font-display">Lagos & Nationwide</span>
                <p className="text-xs font-bold text-[#123B68] mt-1">Galleria Mall Boutique & Fast Nigerian Dispatch</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-[#27AFA3]/15 p-6 rounded-3xl text-center">
                <span className="text-2xl font-black text-[#27AFA3] font-display">Curated Quality</span>
                <p className="text-xs font-bold text-[#123B68] mt-1">Breathable Fabrics & Thoughtful Details</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1503944546569-a7578f7fa747?auto=format&fit=crop&w=600&q=80"
                  alt="Boy laughing outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-y border-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
              THE BUUBU BLOOM STANDARD
            </h3>
            <h2 className="text-3xl sm:text-4xl font-black text-[#123B68] font-display">
              What We Promise Every Parent
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#123B68] font-display mb-2">
                Comfort First
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Breathable organic cottons, non-scratchy tags, and flexible waistbands made for Lagos heat and energetic play.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#27AFA3]/15 text-[#27AFA3] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#123B68] font-display mb-2">
                Standout Joy
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Curated designs that look cheerful, photograph beautifully, and give kids an instant burst of confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#2563C7]/15 text-[#2563C7] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#123B68] font-display mb-2">
                Wash & Wear Durability
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Strong seams, reinforced buttons, and colorfast dyes made to survive endless playground adventures and frequent laundering.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#F5A6C8]/25 text-[#123B68] flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-[#F58220]" />
              </div>
              <h4 className="text-lg font-black text-[#123B68] font-display mb-2">
                Thoughtful Gifting
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Curated gift bundles, custom ribbons, handwritten cards, and presentation-ready packaging for newborn arrivals and birthdays.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Retail Store Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#123B68] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-[#F4C430]">
                <Store className="w-3.5 h-3.5" />
                <span>VISIT OUR PHYSICAL STORE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display">
                Galleria Mall, Orchid, Lagos
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                We love meeting you and your children in person! Stop by our store to feel fabrics, try sizes, test ride-on cruisers, or pick up your online orders immediately with no delivery wait.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-6 py-3.5 rounded-xl font-bold text-xs"
                >
                  GET STORE DIRECTIONS & HOURS
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 aspect-video bg-white">
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=700&q=80"
                  alt="Buubu Bloom store experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
