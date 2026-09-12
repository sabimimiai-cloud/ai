import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Mail, Check, ArrowRight } from 'lucide-react';
import { ActiveView, ProductCategory } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { BuubuBloomLogo } from './BuubuBloomLogo';

interface FooterProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#173F70] text-white pt-16 pb-12 border-t border-[#173F70]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Brand Banner Above Columns */}
        <div className="pb-10 mb-10 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div 
            id="footer-brand-logo-btn"
            onClick={() => onNavigate('home')}
            className="cursor-pointer inline-flex items-center bg-white px-3.5 py-1.5 rounded-2xl shadow-sm hover:bg-white/95 transition-all group"
            aria-label="Buubu Bloom Home"
          >
            <BuubuBloomLogo height={40} className="h-10 w-auto" />
          </div>

          <p className="text-sm sm:text-base font-bold text-[#F9C928]">
            “Match your vibe, Bloom your style!”
          </p>
        </div>

        {/* 4 Standard Retail Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: SHOP */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F9C928] font-display">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'girls')} 
                  className="hover:text-[#F9C928] transition-colors cursor-pointer"
                >
                  Girls
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'boys')} 
                  className="hover:text-[#27AFA5] transition-colors cursor-pointer"
                >
                  Boys
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'shoes')} 
                  className="hover:text-[#F9C928] transition-colors cursor-pointer"
                >
                  Shoes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'accessories')} 
                  className="hover:text-[#27AFA5] transition-colors cursor-pointer"
                >
                  Accessories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'gifts')} 
                  className="hover:text-[#F58220] transition-colors cursor-pointer"
                >
                  Gifts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shop', 'all')} 
                  className="hover:text-white font-bold transition-colors cursor-pointer"
                >
                  View All
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: HELP */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F9C928] font-display">
              HELP
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <button 
                  onClick={onOpenSizeGuide} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('orders')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  My Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Delivery Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a 
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#27AFA5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp Styling</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: VISIT US */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F9C928] font-display">
              VISIT US
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p className="font-bold text-white">Buubu Bloom</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>Galleria Mall, Orchid, Lagos</span>
              </p>
              <div className="pt-2 text-xs space-y-1 text-white/70 border-t border-white/10">
                <p>Mon – Sat: 9am – 7pm</p>
                <p>Sun: 1pm – 6pm</p>
              </div>
            </div>
          </div>

          {/* Column 4: CONNECT */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F9C928] font-display">
              CONNECT
            </h4>
            <div className="space-y-2.5 text-sm text-white/80">
              <p>
                <a 
                  href={STORE_CONTACT.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#27AFA5] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#27AFA5]" />
                  <span>WhatsApp: {STORE_CONTACT.phoneDisplay}</span>
                </a>
              </p>
              <p>
                <a 
                  href={STORE_CONTACT.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#F58220] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#F58220]" />
                  <span>Instagram</span>
                </a>
              </p>

              {/* Stay in touch box */}
              <div className="pt-2">
                <p className="text-xs text-white/70 mb-2">Stay in touch for new arrivals:</p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F9C928]"
                  />
                  <button
                    type="submit"
                    className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                {subscribed && (
                  <p className="text-[11px] text-[#27AFA5] mt-1.5 flex items-center gap-1 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Thanks for staying in touch!</span>
                  </p>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025 Buubu Bloom. Match your vibe, Bloom your style.</p>
          <p className="text-white/75 font-medium">Made for little moments that matter.</p>
        </div>

      </div>
    </footer>
  );
};
