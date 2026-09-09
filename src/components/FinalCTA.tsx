import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { ActiveView, ProductCategory } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface FinalCTAProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section 
      id="final-homepage-cta-section"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#FFFDF8] to-[#F4F1EA] text-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Blossom Sparkle Accent */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F58220]/20 text-[#F58220] mb-6 shadow-sm">
          <Sparkles className="w-7 h-7" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#173F70] tracking-tight font-display mb-4">
          Let’s get them dressed.
        </h2>

        <p className="text-base sm:text-lg text-[#172033]/80 max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Browse new arrivals, find a special gift, or visit our store in Lagos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-shop-btn"
            onClick={() => onNavigate('shop', 'all')}
            className="w-full sm:w-auto bg-[#173F70] hover:bg-[#2563C7] text-white px-9 py-4 rounded-2xl font-black text-base tracking-wide flex items-center justify-center gap-2.5 shadow-xl transition-all active:scale-95 group cursor-pointer"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            id="final-cta-whatsapp-btn"
            href={STORE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-2xl font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat with Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
