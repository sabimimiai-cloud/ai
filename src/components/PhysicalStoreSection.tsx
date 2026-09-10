import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

export const PhysicalStoreSection: React.FC = () => {
  return (
    <section 
      id="physical-store-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-gradient-to-br from-[#173F70] via-[#173F70] to-[#2563C7] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          
          {/* Subtle Decorative Backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#27AFA5]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F58220]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#F9C928] mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>STORE LOCATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-display text-white leading-tight mb-2">
                COME SAY HELLO
              </h2>

              <p className="text-xl sm:text-2xl font-bold text-[#F9C928] mb-4">
                Galleria Mall, Orchid, Lagos
              </p>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 font-light">
                Prefer to see it before you buy? Visit us in-store.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                
                {/* Location */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#F9C928] font-bold text-xs uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>WHERE WE ARE</span>
                  </div>
                  <p className="text-sm font-bold text-white">Buubu Bloom</p>
                  <p className="text-xs text-white/80">Galleria Mall, Orchid, Lagos</p>
                </div>

                {/* Opening Hours */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-2 text-[#27AFA5] font-bold text-xs uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4" />
                    <span>OPENING HOURS</span>
                  </div>
                  <p className="text-sm font-bold text-white">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-xs text-white/80">Sunday: 1:00 PM – 6:00 PM</p>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  id="store-directions-btn"
                  href="https://maps.google.com/?q=Galleria+Mall+Orchid+Lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#F58220] hover:bg-[#e07519] text-white px-7 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="store-whatsapp-btn"
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#27AFA5] hover:bg-[#209c93] text-white px-6 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 aspect-[4/3] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
                  alt="Buubu Bloom Galleria Mall store environment"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-600 ease-out"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#173F70] border border-white/20 p-3.5 rounded-2xl shadow-xl text-xs font-bold text-[#F9C928] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#27AFA5]" />
                <span>Walk-ins & Order Pickups Welcome</span>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
