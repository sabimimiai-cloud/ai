import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Navigation, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { STORE_CONTACT, FAQ_ITEMS } from '../data/storeData';
import { ActiveView } from '../types';

interface ContactViewProps {
  onNavigate: (view: ActiveView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formInterest, setFormInterest] = useState('Birthday Outfit for Girl');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Buubu Bloom! 🌸 My name is ${formName || 'a customer'}.\nPhone: ${formPhone || 'Not provided'}\nLooking for: ${formInterest}\n\nMessage: ${formMessage || 'I would like assistance with finding the right products.'}`
    );
    window.open(`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div id="contact-store-view" className="min-h-screen bg-[#FFFDF8] py-10 sm:py-16 border-b border-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F58220]/15 text-[#F58220] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#173F70] tracking-tight font-display mb-4">
            We’re Happy to Help
          </h1>

          <p className="text-sm sm:text-base text-[#172033]/80">
            Not sure about sizing? Need an outfit in a hurry? Or planning to visit the store today? Reach out anytime — we're always happy to help you find what you need.
          </p>
        </div>

        {/* 4 Direct Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          
          {/* Channel 1: Physical Store */}
          <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#D93F92]/15 text-[#D93F92] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#173F70] uppercase tracking-wider mb-1">
              Visit Our Store
            </h3>
            <p className="text-xs font-bold text-[#172033]">Galleria Mall, Orchid</p>
            <p className="text-xs text-gray-500 mb-4">Orchid Road, Lekki / Ajah, Lagos</p>
            <a
              href="https://maps.google.com/?q=Galleria+Mall+Orchid+Lagos"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#2563C7] hover:underline flex items-center gap-1"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions →</span>
            </a>
          </div>

          {/* Channel 2: WhatsApp Line */}
          <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#27AFA5]/15 text-[#27AFA5] flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#173F70] uppercase tracking-wider mb-1">
              WhatsApp Us
            </h3>
            <p className="text-xs font-bold text-[#172033]">{STORE_CONTACT.phoneDisplay}</p>
            <p className="text-xs text-gray-500 mb-4">Fast sizing advice & live videos</p>
            <a
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#27AFA5] hover:underline flex items-center gap-1"
            >
              <span>Message on WhatsApp →</span>
            </a>
          </div>

          {/* Channel 3: Phone Direct */}
          <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#2563C7]/15 text-[#2563C7] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#173F70] uppercase tracking-wider mb-1">
              Call the Store
            </h3>
            <p className="text-xs font-bold text-[#172033]">{STORE_CONTACT.phoneDisplay}</p>
            <p className="text-xs text-gray-500 mb-4">Speak directly with our team</p>
            <a
              href={`tel:${STORE_CONTACT.phoneRaw}`}
              className="text-xs font-bold text-[#173F70] hover:underline flex items-center gap-1"
            >
              <span>Call 0806 014 3654 →</span>
            </a>
          </div>

          {/* Channel 4: Online Shopping */}
          <div className="bg-white p-6 rounded-3xl border border-[#F4F1EA] shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-2xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-4">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#173F70] uppercase tracking-wider mb-1">
              Order Online
            </h3>
            <p className="text-xs font-bold text-[#172033]">Delivery Across Nigeria</p>
            <p className="text-xs text-gray-500 mb-4">Doorstep dispatch to any state</p>
            <button
              onClick={() => onNavigate('shop', 'all')}
              className="text-xs font-bold text-[#F58220] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Browse Catalog →</span>
            </button>
          </div>

        </div>

        {/* Enquiry Form + FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Interactive Enquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#F4F1EA] shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-black uppercase text-[#27AFA5] tracking-wider">
                SEND A MESSAGE
              </span>
              <h2 className="text-2xl font-black text-[#173F70] font-display mt-1">
                How Can We Help?
              </h2>
              <p className="text-xs text-gray-600">
                Tell us what you're looking for and we'll reply right away.
              </p>
            </div>

            {formSent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#27AFA5]/15 text-[#27AFA5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#173F70]">Message Received!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Thank you, <strong>{formName}</strong>. If you need an immediate reply, tap below to chat with us on WhatsApp:
                </p>
                <button
                  onClick={handleWhatsAppDirect}
                  className="bg-[#27AFA5] text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mx-auto shadow-sm hover:bg-[#27AFA5]/90 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CONTINUE ON WHATSAPP (0806 014 3654)</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#173F70] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bukky Johnson"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#173F70]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#173F70] mb-1">
                    Phone Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0806 014 3654"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#173F70]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#173F70] mb-1">
                    What are you looking for? *
                  </label>
                  <select
                    value={formInterest}
                    onChange={(e) => setFormInterest(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#173F70]"
                  >
                    <option value="Girls Dresses & Outfits">Girls' Dresses & Outfits</option>
                    <option value="Boys Sets & Clothing">Boys' Sets & Clothing</option>
                    <option value="Baby Rompers & Newborn Sets">Baby Rompers & Newborn Sets</option>
                    <option value="Children Shoes & Footwear">Children's Shoes & Footwear</option>
                    <option value="Toys & Birthday Gifts">Toys & Birthday Gifts</option>
                    <option value="Help with Sizing or Store Pickup">Help with Sizing or Store Pickup</option>
                    <option value="Something Else">Something Else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#173F70] mb-1">
                    Your Message (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need a birthday outfit for a 5-year-old girl before Friday."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#173F70]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#173F70] hover:bg-[#2563C7] text-white py-3.5 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-[#27AFA5] hover:bg-[#27AFA5]/90 text-white px-5 py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CHAT ON WHATSAPP</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-black uppercase text-[#F58220] tracking-wider">
                COMMON QUESTIONS
              </span>
              <h2 className="text-2xl font-black text-[#173F70] font-display mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-gray-600">
                Helpful details about our Lagos store, sizing, gift boxes and delivery.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#F4F1EA] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#173F70] flex items-center justify-between gap-3 hover:bg-[#F4F1EA]/50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-[#173F70]' : ''
                    }`} />
                  </button>

                  {openFaq === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-[#F4F1EA] bg-[#FFFDF8]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
