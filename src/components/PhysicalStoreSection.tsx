import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Sparkles, Navigation, ArrowRight } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export const PhysicalStoreSection: React.FC = () => {
  return (
    <section 
      id="physical-store-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#123B68] via-[#123B68] to-[#2563C7] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Decorative Backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#27AFA3]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F58220]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F9C928] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STORE & NATIONWIDE DELIVERY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-display text-white leading-tight mb-4">
                SHOP ONLINE. <br className="hidden sm:inline" />
                VISIT US IN LAGOS.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 font-light">
                Shop with confidence online with <strong className="font-bold text-[#F9C928]">Nationwide delivery across Nigeria</strong>, or walk into our retail store at <strong className="font-bold text-white">Galleria Mall, Orchid, Lagos</strong> to pick your favourites in person.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#D93F92] font-bold text-xs uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>STORE LOCATION</span>
                  </div>
                  <p className="text-sm font-bold text-white">Galleria Mall</p>
                  <p className="text-xs text-white/80">Orchid, Lagos, Nigeria</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#27AFA5] font-bold text-xs uppercase tracking-wider mb-1">
                    <Phone className="w-4 h-4" />
                    <span>PHONE & WHATSAPP</span>
                  </div>
                  <p className="text-sm font-bold text-white">{STORE_CONTACT.phoneDisplay}</p>
                  <p className="text-xs text-white/80">Call or Message Us Directly</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  id="store-directions-btn"
                  href="https://maps.google.com/?q=Galleria+Mall+Orchid+Lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-7 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  id="store-call-btn"
                  href={`tel:${STORE_CONTACT.phoneRaw}`}
                  className="bg-white hover:bg-white/90 text-[#173F70] px-7 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#173F70]" />
                  <span>CALL BUUBU BLOOM</span>
                </a>

                <a
                  id="store-whatsapp-btn"
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#27AFA5] hover:bg-[#27AFA5]/90 text-white px-6 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 aspect-[4/3] sm:aspect-[4/3] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
                  alt="Buubu Bloom Galleria Mall store environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#123B68] border border-white/20 p-3.5 rounded-2xl shadow-xl text-xs font-bold text-[#F4C430] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#27AFA3]" />
                <span>Open for Walk-ins & Pickups</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
