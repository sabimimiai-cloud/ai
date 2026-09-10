import React from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin, Sparkles, Gift, ArrowRight, MessageCircle, Heart } from 'lucide-react';
import { ActiveView } from '../types';
import { STORE_CONTACT } from '../data/storeData';

interface BrandStoryProps {
  onNavigate: (view: ActiveView) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onNavigate }) => {
  return (
    <section 
      id="why-buubu-bloom-section"
      className="py-16 sm:py-24 bg-[#F4F1EA]/60 border-b border-[#F4F1EA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-white">
                <img
                  src="/images/editorial_nigerian_twirl_1787489158292.jpg"
                  alt="Happy stylish children at Buubu Bloom Lagos"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlaid Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#F4F1EA] max-w-xs transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-[#F58220]/20 flex items-center justify-center text-[#F58220]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-black text-[#173F70] uppercase tracking-wider">
                    BUUBU BLOOM
                  </span>
                </div>
                <p className="text-xs text-[#172033]/80 font-medium">
                  “Match your vibe, Bloom your style!”
                </p>
              </div>

              {/* Accent Corner Badge */}
              <div className="absolute -top-4 -left-4 bg-[#173F70] text-white py-2 px-3.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F9C928]" />
                <span>Galleria Mall, Orchid</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Points */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 bg-[#27AFA5]/15 text-[#27AFA5] text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-3 tracking-wider">
              <Heart className="w-3 h-3 fill-current" />
              <span>THE BUUBU BLOOM PROMISE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display leading-[1.15] mb-8">
              Why parents keep coming back
            </h2>

            {/* 4 Core Benefit Blocks with gentle staggered entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              {/* Point 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F9C928]/25 text-[#173F70] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5 text-[#F58220]" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 font-display">
                  Plenty of cute choices
                </h4>
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed">
                  From everyday outfits to those “where did you get that?” looks.
                </p>
              </motion.div>

              {/* Point 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.18 }}
                className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D93F92]/15 text-[#D93F92] flex items-center justify-center font-bold mb-3">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 font-display">
                  More than clothes
                </h4>
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed">
                  Shoes, toys, accessories and gifts too.
                </p>
              </motion.div>

              {/* Point 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.26 }}
                className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center font-bold mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 font-display">
                  Shop in Lagos or anywhere in Nigeria
                </h4>
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed">
                  Visit us at Galleria Mall, Orchid, Lagos, or order for nationwide delivery.
                </p>
              </motion.div>

              {/* Point 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.34 }}
                className="bg-white p-5 rounded-2xl border border-[#F4F1EA] shadow-2xs hover:border-[#173F70]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#27AFA5]/15 text-[#27AFA5] flex items-center justify-center font-bold mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black text-[#173F70] mb-1.5 font-display">
                  Need help? Just ask
                </h4>
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed">
                  If you’re unsure about sizing, gifting or what would look good together, chat with us.
                </p>
              </motion.div>

            </div>

            {/* Section CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                id="why-buubu-bloom-shop-btn"
                onClick={() => onNavigate('shop', 'all')}
                className="w-full sm:w-auto bg-[#173F70] hover:bg-[#2563C7] text-white px-8 py-4 rounded-2xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>Shop Buubu Bloom</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#075E54] border border-[#25D366]/30 hover:bg-[#25D366]/20 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
