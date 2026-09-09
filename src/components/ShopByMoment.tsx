import React from 'react';
import { Sparkles, ArrowRight, Camera, Cake, Heart, Sun } from 'lucide-react';
import { MOMENTS_DATA } from '../data/storeData';
import { ActiveView } from '../types';

interface ShopByMomentProps {
  onSelectMoment: (momentKey: string) => void;
  onNavigate: (view: ActiveView) => void;
}

export const ShopByMoment: React.FC<ShopByMomentProps> = ({
  onSelectMoment,
  onNavigate
}) => {
  const getMomentIcon = (key: string) => {
    switch (key) {
      case 'everyday': return <Sun className="w-5 h-5 text-[#2563C7]" />;
      case 'birthday': return <Cake className="w-5 h-5 text-[#F58220]" />;
      case 'special-occasion': return <Camera className="w-5 h-5 text-[#123B68]" />;
      case 'gifting': return <Heart className="w-5 h-5 text-[#27AFA3]" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleMomentClick = (momentKey: string) => {
    onSelectMoment(momentKey);
    onNavigate('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="shop-by-moment-section"
      className="py-16 sm:py-24 bg-[#F4F1EA]/40 border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white border border-[#173F70]/10 text-xs font-extrabold uppercase px-3.5 py-1 rounded-full text-[#173F70] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
            <span>BY OCCASION OR MOOD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] tracking-tight font-display mb-3">
            What are you looking for?
          </h2>
          <p className="text-sm sm:text-base text-[#172033]/75">
            Tell us what’s on the calendar and we’ll show you outfits, shoes and gifts ready for the moment.
          </p>
        </div>

        {/* 4 Moment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOMENTS_DATA.map((moment) => (
            <div
              key={moment.id}
              id={`moment-card-${moment.momentKey}`}
              onClick={() => handleMomentClick(moment.momentKey)}
              className="group bg-white rounded-3xl p-5 border border-[#F4F1EA] hover:border-[#123B68]/30 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#F4F1EA]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs p-2 rounded-xl shadow-xs">
                    {getMomentIcon(moment.momentKey)}
                  </div>
                </div>

                {/* Subtag */}
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#27AFA3]">
                  {moment.tagline}
                </span>

                {/* Title */}
                <h3 className="text-lg font-black text-[#123B68] font-display mt-0.5 mb-2 group-hover:text-[#2563C7] transition-colors">
                  {moment.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#172033]/75 leading-relaxed">
                  {moment.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-[#F4F1EA] flex items-center justify-between text-xs font-bold text-[#123B68] group-hover:text-[#F58220] transition-colors">
                <span>SEE OUTFITS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
