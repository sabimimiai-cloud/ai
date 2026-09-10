import React from 'react';
import { Truck, MapPin, MessageSquare, Gift, ArrowRight } from 'lucide-react';
import { ActiveView } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface DeliveryTrustStripProps {
  onNavigate: (view: ActiveView) => void;
}

export const DeliveryTrustStrip: React.FC<DeliveryTrustStripProps> = ({ onNavigate }) => {
  return (
    <section 
      id="trust-section"
      className="py-14 sm:py-18 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 4 Legitimate Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* 1. NATIONWIDE DELIVERY */}
          <div 
            id="trust-card-delivery"
            className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563C7]/10 text-[#2563C7] flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#2563C7] mb-1.5 font-display">
                NATIONWIDE DELIVERY
              </h3>
              <p className="text-base font-bold text-[#173F70] leading-snug">
                We deliver across Nigeria.
              </p>
              <p className="text-xs text-[#172033]/70 mt-1.5 leading-relaxed">
                Reliable doorstep dispatch to Lagos and every state.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop')}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#173F70] hover:text-[#2563C7] cursor-pointer pt-2 border-t border-[#F4F1EA]"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2. VISIT US IN LAGOS */}
          <div 
            id="trust-card-location"
            className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#F58220] mb-1.5 font-display">
                VISIT US IN LAGOS
              </h3>
              <p className="text-base font-bold text-[#173F70] leading-snug">
                Galleria Mall, Orchid, Lagos.
              </p>
              <p className="text-xs text-[#172033]/70 mt-1.5 leading-relaxed">
                Feel the fabrics and try on sizes in person Monday to Sunday.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Galleria+Mall+Orchid+Lagos"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#173F70] hover:text-[#F58220] cursor-pointer pt-2 border-t border-[#F4F1EA]"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3. EASY ORDERING */}
          <div 
            id="trust-card-ordering"
            className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#27AFA5]/10 text-[#27AFA5] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#27AFA5] mb-1.5 font-display">
                EASY ORDERING
              </h3>
              <p className="text-base font-bold text-[#173F70] leading-snug">
                Need help choosing? Chat with us.
              </p>
              <p className="text-xs text-[#172033]/70 mt-1.5 leading-relaxed">
                Direct WhatsApp assistance for sizing, looks, and questions.
              </p>
            </div>
            <a
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#173F70] hover:text-[#27AFA5] cursor-pointer pt-2 border-t border-[#F4F1EA]"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4. GIFT READY */}
          <div 
            id="trust-card-gifting"
            className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F9C928]/20 text-[#F58220] flex items-center justify-center mb-4">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#F58220] mb-1.5 font-display">
                GIFT READY
              </h3>
              <p className="text-base font-bold text-[#173F70] leading-snug">
                Perfect picks for birthdays and special moments.
              </p>
              <p className="text-xs text-[#172033]/70 mt-1.5 leading-relaxed">
                Delivered in ready-to-present packaging with gift notes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('shop', 'gifts')}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#173F70] hover:text-[#F58220] cursor-pointer pt-2 border-t border-[#F4F1EA]"
            >
              <span>Explore Gifts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
