import React from 'react';
import { Sparkles, Phone, MapPin, Instagram, ArrowUpRight, Heart, ShieldCheck, Truck } from 'lucide-react';
import { ActiveView, ProductCategory } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { BuubuBloomLogo } from './BuubuBloomLogo';

interface FooterProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  return (
    <footer id="main-footer" className="bg-[#173F70] text-white pt-16 pb-12 border-t border-[#173F70]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Brand Statement Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div 
              id="footer-brand-logo-btn"
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-flex items-center bg-white px-3.5 py-1.5 rounded-2xl shadow-sm hover:bg-white/95 transition-all group"
              aria-label="Buubu Bloom Home"
            >
              <BuubuBloomLogo height={42} className="h-10 w-auto" />
            </div>

            <p className="text-sm text-[#F9C928] font-bold">
              “Match your vibe, Bloom your style!”
            </p>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              Outfits, shoes, toys and thoughtful gifts for babies and growing kids. Visit us at Galleria Mall, Orchid, Lagos or order online for delivery anywhere in Nigeria.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F58220] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#27AFA5] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F4C430]">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'all')} 
                  className="hover:text-white transition-colors"
                >
                  All Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'girls')} 
                  className="hover:text-[#F4C430] transition-colors"
                >
                  Girls
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'boys')} 
                  className="hover:text-[#27AFA5] transition-colors"
                >
                  Boys
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'baby')} 
                  className="hover:text-[#F4C430] transition-colors"
                >
                  Baby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'shoes')} 
                  className="hover:text-[#27AFA5] transition-colors"
                >
                  Shoes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'accessories')} 
                  className="hover:text-[#F58220] transition-colors"
                >
                  Accessories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'toys')} 
                  className="hover:text-[#F58220] transition-colors"
                >
                  Toys & Gifts
                </button>
              </li>
            </ul>
          </div>

          {/* Help & Info Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F4C430]">
              HELP & QUESTIONS
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Store
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Directions & Store Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSizeGuide} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Size Guide & Measurements
                </button>
              </li>
              <li>
                <span className="text-white/60">
                  Delivery Across Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* Visit & Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F9C928]">
              VISIT US IN LAGOS
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Galleria Mall</strong><br />
                  Orchid, Lagos, Nigeria
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#27AFA5] shrink-0" />
                <a href={`tel:${STORE_CONTACT.phoneRaw}`} className="hover:text-white font-bold">
                  {STORE_CONTACT.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                id="footer-shop-now-cta"
                onClick={() => onNavigate('shop', 'all')}
                className="w-full bg-[#F58220] hover:bg-[#F58220]/90 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                SHOP NOW
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} BUUBU BLOOM. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Galleria Mall, Orchid, Lagos</span>
            <span>•</span>
            <span>0806 014 3654</span>
            <span>•</span>
            <span>Nationwide Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
