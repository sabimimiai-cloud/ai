import React from 'react';
import { Truck, ShieldCheck, Clock, MapPin, ArrowRight, PackageCheck } from 'lucide-react';
import { ActiveView } from '../types';

interface DeliveryTrustStripProps {
  onNavigate: (view: ActiveView) => void;
}

export const DeliveryTrustStrip: React.FC<DeliveryTrustStripProps> = ({ onNavigate }) => {
  return (
    <section 
      id="delivery-trust-strip"
      className="py-12 sm:py-16 bg-[#F4F1EA]/80 border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#F4F1EA] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#2563C7]/15 flex items-center justify-center text-[#2563C7] shrink-0">
              <Truck className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#F58220] mb-1">
                <PackageCheck className="w-3.5 h-3.5" />
                <span>NATIONWIDE DELIVERY ACROSS NIGERIA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display">
                From Our Store To Your Door.
              </h3>
              <p className="text-sm text-[#172033]/75 mt-1 max-w-xl">
                Shopping from Lagos, Abuja, Port Harcourt or anywhere in Nigeria? Buubu Bloom delivers straight to your doorstep with careful packaging.
              </p>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              id="delivery-strip-shop-btn"
              onClick={() => onNavigate('shop', 'all')}
              className="w-full sm:w-auto bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 group"
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
