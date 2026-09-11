import React from 'react';
import { Sparkles, Heart, CheckCircle2, MapPin, Truck, ShoppingBag, ArrowRight } from 'lucide-react';
import { ActiveView } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface AboutViewProps {
  onNavigate: (view: ActiveView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-brand-view" className="min-h-screen bg-[#FFFDF8] py-10 sm:py-16 border-b border-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#27AFA5]/15 text-[#27AFA5] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT BUUBU BLOOM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#173F70] tracking-tight font-display mb-6">
            Little Looks. <br />
            <span className="text-[#F58220]">Big Personality.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#172033]/80 leading-relaxed font-normal">
            “Match your vibe, Bloom your style!” — Buubu Bloom is your go-to children's fashion, shoes, toys and gift store at Galleria Mall, Orchid, Lagos with nationwide delivery across Nigeria.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[4/3] bg-white">
              <img
                src="/images/nigerian_birthday_kids_1787489171127.jpg"
                alt="Children laughing and blooming in Buubu Bloom style"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#F4F1EA] max-w-xs">
              <p className="text-xs font-black text-[#173F70] uppercase tracking-wider mb-1">
                Lagos Retail Store
              </p>
              <p className="text-xs text-gray-600">
                Galleria Mall, Orchid, Lagos. Open for walk-ins, sizing checks, and pickups.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#172033]/85 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display">
              Dressing children should be fun, not stressful.
            </h2>
            
            <p>
              Whether you're shopping for your own child or picking out a gift for a niece, nephew, or friend's celebration, you want pieces that look great, feel soft, and hold up through a full day of playing.
            </p>

            <p>
              <strong className="text-[#173F70] font-bold">Buubu Bloom</strong> is our store at Galleria Mall, Orchid, Lagos. We bring together cute everyday outfits, party dresses, sharp boys' sets, comfortable shoes, and fun gifts all in one welcoming place.
            </p>

            <p>
              You can stop by the store to feel the fabrics and try things on, or order online and we'll dispatch it to your doorstep anywhere in Nigeria.
            </p>

            <div className="p-4 rounded-2xl bg-[#F4F1EA] border-l-4 border-[#F58220] text-sm font-medium text-[#173F70]">
              “Clothes they love wearing. Shoes they can run in. Gifts they'll actually be excited to open.”
            </div>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display">
              WHAT WE CARE ABOUT
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#D93F92]/20 text-[#D93F92] flex items-center justify-center font-bold mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#173F70] mb-2 font-display">Clothes They Love</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cute, comfortable styles that children feel excited to put on without fussing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#F9C928]/25 text-[#173F70] flex items-center justify-center font-bold mb-4">
                <Heart className="w-6 h-6 text-[#F58220]" />
              </div>
              <h4 className="text-base font-black text-[#173F70] mb-2 font-display">Shoes & Gifts Too</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Matching shoes, fun accessories, and ready-to-go birthday presents in one stop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#27AFA5]/20 text-[#27AFA5] flex items-center justify-center font-bold mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#173F70] mb-2 font-display">Visit Us in Lagos</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Find us at Galleria Mall, Orchid, Lagos whenever you want to check sizes in person.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#2563C7]/20 text-[#2563C7] flex items-center justify-center font-bold mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-black text-[#173F70] mb-2 font-display">Delivery Across Nigeria</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Packaged carefully and dispatched quickly right to your door, wherever you are.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#173F70] rounded-3xl text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-5">
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Ready to find something for them?
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              Browse the collection online or stop by the store at Galleria Mall, Orchid, Lagos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('shop', 'all')}
                className="w-full sm:w-auto bg-[#F58220] hover:bg-[#F58220]/90 text-white px-8 py-4 rounded-2xl font-black text-sm tracking-wide shadow-lg inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all cursor-pointer"
              >
                VISIT OUR STORE
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
