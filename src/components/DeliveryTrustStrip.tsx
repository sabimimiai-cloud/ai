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

        {/* Packed With Care & Boutique Packaging Feature */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F4F1EA] shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-4 sm:md:col-span-5 flex justify-center">
              <div className="w-full max-w-xs aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#F4F1EA] relative group bg-[#F4F1EA]">
                <img
                  src="/images/IMG_6594.png"
                  alt="Buubu Bloom signature geometric boutique shopping bag"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('IMG_6594.png')) {
                      target.src = '/IMG_6594.png';
                    }
                  }}
                />
                <span className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  Signature Packaging
                </span>
              </div>
            </div>

            <div className="md:col-span-8 sm:md:col-span-7 flex flex-col items-start justify-center">
              <div className="inline-flex items-center gap-1.5 bg-[#F58220]/10 text-[#F58220] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                <Gift className="w-3.5 h-3.5" />
                <span>PACKED WITH CARE</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#173F70] font-display mb-2">
                Boutique Presentation for Every Order
              </h4>
              <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed mb-4 max-w-xl">
                Every purchase—whether picked up at our Galleria Mall, Orchid store or delivered straight to your door across Nigeria—arrives neatly packed in our vibrant, custom-designed Buubu Bloom geometric shopping bags. Perfect for unboxings and ready to present directly as a thoughtful gift.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#173F70]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Complimentary Gift Wrap on Request</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#27AFA5]" />
                  <span>Safe & Sturdy Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F58220]" />
                  <span>Store Pickup Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
