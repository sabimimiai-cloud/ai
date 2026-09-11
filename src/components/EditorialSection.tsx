import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { ActiveView } from '../types';

interface EditorialSectionProps {
  onNavigate: (view: ActiveView) => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="editorial-lifestyle-section"
      className="py-16 sm:py-28 bg-[#123B68] text-white relative overflow-hidden"
    >
      {/* Background Ambience Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563C7]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#27AFA3]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#F4C430] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>IN STORE & ONLINE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-display leading-[1.1] mb-6 text-white">
              CLOTHES THEY LOVE. <br />
              <span className="text-[#F5A6C8]">EASY TO WEAR.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-lg font-light">
              Whether it’s a twirl dress she never wants to take off, or an easy two-piece set he can run around in without fussing, we pick pieces that look great and feel good on active children.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="editorial-explore-style-btn"
                onClick={() => onNavigate('shop')}
                className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-8 py-4 rounded-2xl font-black text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="editorial-about-story-btn"
                onClick={() => onNavigate('about')}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all cursor-pointer"
              >
                ABOUT OUR STORE
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Collage Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Image 1: Main tall shot */}
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-2 border-white/20 relative group">
                  <img
                    src="/images/editorial_nigerian_twirl_1787489158292.jpg"
                    alt="Girl in twirl celebration dress"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Confidence & Big Smiles
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15">
                  <p className="text-xl font-black text-[#F4C430] font-display">Comfortable Fabrics</p>
                  <p className="text-xs text-white/80 font-medium">Soft seams, breathable cottons and easy cuts that suit our weather.</p>
                </div>
              </div>

              {/* Image 2: Staggered second column */}
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="bg-gradient-to-br from-[#27AFA3] to-[#2563C7] p-4 sm:p-5 rounded-2xl shadow-xl text-white">
                  <Heart className="w-6 h-6 text-[#F5A6C8] fill-current mb-2" />
                  <p className="text-sm font-bold leading-snug">“The outfit they actually want to wear again and again.”</p>
                </div>

                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-2 border-white/20 relative group">
                  <img
                    src="/images/boys_nigerian_suit_1787489130668.jpg"
                    alt="Boys tailored style"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-white">
                    Everyday & Party Looks
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
