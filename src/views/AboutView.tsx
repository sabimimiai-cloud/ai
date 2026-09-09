import React from 'react';
import { Sparkles, Heart, ShieldCheck, Sun, MapPin, Phone, ArrowRight, Store, Gift } from 'lucide-react';
import { ActiveView } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { BuubuBloomLogo } from '../components/BuubuBloomLogo';

interface AboutViewProps {
  onNavigate: (view: ActiveView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-view-container" className="bg-[#FFFDF8]">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#173F70] via-[#173F70] to-[#2563C7] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#27AFA5]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3.5 rounded-3xl shadow-xl inline-block">
              <BuubuBloomLogo height={56} />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-[#F9C928] mb-6">
            <Sparkles className="w-4 h-4" />
            <span>BEHIND BUUBU BLOOM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight mb-6">
            Clothes they love. <br className="hidden sm:inline" />
            <span className="text-[#F9C928]">Made for real little lives.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Buubu Bloom was started in Lagos with a simple thought: dressing children should bring big smiles, feel wonderfully soft, and make parents feel proud every time they step out.
          </p>
        </div>
      </section>

      {/* Main Story & Photography */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#27AFA5]">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>THE STORY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] font-display">
              Match your vibe, Bloom your style!
            </h2>

            <p className="text-base text-[#172033]/80 leading-relaxed">
              We know what it’s like shopping for active kids. You want outfits that look stunning in photos, but your child wants clothes they can actually run, tumble, and jump in without complaining.
            </p>

            <p className="text-base text-[#172033]/80 leading-relaxed">
              At <strong>Buubu Bloom</strong>, we hand-select pieces with breathable cottons, easy closures, and joyful colours that suit our Nigerian climate. From birthday party dresses and sharp boys’ sets to soft newborn rompers, comfy kicks, and ready gift hampers — we have you covered.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Shop New In</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#27AFA5]/10 text-[#0f5c56] hover:bg-[#27AFA5]/20 border border-[#27AFA5]/30 px-6 py-4 rounded-2xl font-bold text-sm transition-colors"
              >
                Chat with our Stylist
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                <img
                  src="/src/assets/images/hero_nigerian_girl_1787489055452.jpg"
                  alt="Little girl smiling in Buubu Bloom outfit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F58220]/15 p-6 rounded-3xl text-center">
                <span className="text-2xl font-black text-[#F58220] font-display">Lagos & Beyond</span>
                <p className="text-xs font-bold text-[#173F70] mt-1">Galleria Mall Boutique & Fast Nationwide Dispatch</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-[#27AFA5]/15 p-6 rounded-3xl text-center">
                <span className="text-2xl font-black text-[#27AFA5] font-display">Hand-Picked</span>
                <p className="text-xs font-bold text-[#173F70] mt-1">Breathable Fabrics & Kid-Approved Comfort</p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-100">
                <img
                  src="/src/assets/images/boys_nigerian_safari_1787489099338.jpg"
                  alt="Boy laughing outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Promises */}
      <section className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-y border-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
              THE BUUBU BLOOM STANDARD
            </h3>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] font-display">
              What you can count on
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#173F70] font-display mb-2">
                Comfort First
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Breathable cottons, gentle seams, and elastic cuts suited for warm days and active playtime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#27AFA5]/15 text-[#27AFA5] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#173F70] font-display mb-2">
                Real Personality
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Joyful styles that look lovely in photographs and make your child feel like the star of the room.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#2563C7]/15 text-[#2563C7] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#173F70] font-display mb-2">
                Durable Quality
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Neat stitching and reliable fabrics that hold their shape and colour wash after wash.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#F4F1EA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#D93F92]/15 text-[#D93F92] flex items-center justify-center mb-4">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-[#173F70] font-display mb-2">
                Effortless Gifting
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                Ready-to-open gift boxes, pretty packaging, and baby hampers that make giving completely stress-free.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Retail Store Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#173F70] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-[#F9C928]">
                <Store className="w-3.5 h-3.5" />
                <span>VISIT US IN LAGOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display">
                Galleria Mall, Orchid, Lagos
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                We love welcoming parents and kids! Come feel the fabrics, check sizes, let your little one choose what they like, or pick up your online order immediately.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#F58220] hover:bg-[#e07519] text-white px-7 py-3.5 rounded-xl font-bold text-xs tracking-wider cursor-pointer"
                >
                  GET STORE DIRECTIONS & HOURS
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 aspect-video bg-white">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
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
