import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Navigation, 
  Sparkles 
} from 'lucide-react';
import { STORE_CONTACT, FAQS } from '../data/storeData';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    phoneOrEmail: '',
    subject: 'Sizing & Style Advice',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateDirectWhatsAppMessage = () => {
    const text = `Hello Buubu Bloom! 👋 I have a question about shopping at your Galleria Mall Orchid boutique.`;
    return `https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="contact-view-container" className="bg-[#FFFDF8] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WE ARE HERE FOR YOU</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#123B68] tracking-tight font-display mb-4">
            Visit Our Store or Chat With Us
          </h1>
          <p className="text-sm sm:text-base text-[#172033]/70 leading-relaxed">
            Need help selecting the perfect outfit size, customizing a luxury gift hamper, or arranging immediate Lagos dispatch? Our friendly team is always ready to assist.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Visit */}
          <div className="bg-white p-7 rounded-3xl border border-[#F4F1EA] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F58220]/15 text-[#F58220] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#123B68] font-display mb-1">
                Physical Store
              </h3>
              <p className="text-xs text-gray-500 mb-3">Walk-ins, Fitting & Pickups</p>
              <p className="text-sm font-bold text-[#172033]">
                Galleria Mall, Orchid
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Orchid Road, Lekki / Lagos, Nigeria
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Galleria+Mall+Orchid+Lagos"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#F4F1EA] hover:bg-[#123B68] hover:text-white text-[#123B68] px-4 py-3 rounded-xl text-xs font-bold transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Card 2: WhatsApp & Phone */}
          <div className="bg-white p-7 rounded-3xl border border-[#F4F1EA] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#27AFA3]/15 text-[#27AFA3] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#123B68] font-display mb-1">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-gray-500 mb-3">Fast Replies & Live Video Showcase</p>
              <p className="text-sm font-bold text-[#172033]">
                {STORE_CONTACT.phoneDisplay}
              </p>
              <p className="text-xs text-gray-600 mt-0.5">
                Instant order placement & styling assistance
              </p>
            </div>

            <a
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#27AFA3] hover:bg-[#27AFA3]/90 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Hours & Phone */}
          <div className="bg-white p-7 rounded-3xl border border-[#F4F1EA] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563C7]/15 text-[#2563C7] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#123B68] font-display mb-1">
                Store Hours
              </h3>
              <p className="text-xs text-gray-500 mb-3">Open 7 Days a Week</p>
              <div className="text-xs space-y-1 text-[#172033]">
                <p><strong>Mon – Sat:</strong> 9:00 AM – 7:00 PM</p>
                <p><strong>Sundays:</strong> 12:00 PM – 6:00 PM</p>
              </div>
            </div>

            <a
              href={`tel:${STORE_CONTACT.phoneRaw}`}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#123B68] hover:bg-[#2563C7] text-white px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0806 014 3654</span>
            </a>
          </div>

        </div>

        {/* Interactive Form & Store Location Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left: Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#F4F1EA] shadow-2xs">
            <h2 className="text-2xl font-black text-[#123B68] font-display mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Have questions about wholesale, bulk birthday hampers, or specific piece availability? Fill out this quick form and we’ll get right back to you.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-emerald-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                  Thank you, <strong>{formState.fullName}</strong>. A Buubu Bloom customer representative will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ fullName: '', phoneOrEmail: '', subject: 'Sizing & Style Advice', message: '' });
                  }}
                  className="text-xs font-bold text-[#123B68] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chioma Eze"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full bg-[#F4F1EA]/30 border border-[#F4F1EA] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number or WhatsApp *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 0806 014 3654"
                    value={formState.phoneOrEmail}
                    onChange={(e) => setFormState({ ...formState, phoneOrEmail: e.target.value })}
                    className="w-full bg-[#F4F1EA]/30 border border-[#F4F1EA] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Enquiry Subject</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-[#F4F1EA]/30 border border-[#F4F1EA] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white"
                  >
                    <option value="Sizing & Style Advice">Sizing & Style Advice</option>
                    <option value="Birthday Gift Hamper Customization">Birthday Gift Hamper Customization</option>
                    <option value="Store Pickup at Galleria Mall">Store Pickup at Galleria Mall</option>
                    <option value="Nationwide Delivery Tracking">Nationwide Delivery Tracking</option>
                    <option value="Ride-on Cruiser Availability">Ride-on Cruiser Availability</option>
                    <option value="Wholesale / Party Favors">Wholesale / Party Favors</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for, children's ages, occasion date, or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F4F1EA]/30 border border-[#F4F1EA] rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#123B68]/20 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#123B68] hover:bg-[#2563C7] text-white py-3.5 rounded-xl font-bold text-xs tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Store Map Graphic & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#123B68] text-white p-7 rounded-3xl relative overflow-hidden shadow-xl">
              <h3 className="text-xl font-black font-display mb-2">
                Galleria Mall Boutique
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Located conveniently on Orchid Road in Lekki, Lagos. Safe parking, air-conditioned fitting rooms, and welcoming customer care.
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/20 aspect-[16/10] bg-white mb-4">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=700&q=80"
                  alt="Galleria Mall Orchid Lagos"
                  className="w-full h-full object-cover"
                />
              </div>

              <a
                href={generateDirectWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#27AFA3] hover:bg-[#27AFA3]/90 text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Text Us Before You Visit</span>
              </a>
            </div>

          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-[#F4F1EA]">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#27AFA3] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-black text-[#123B68] font-display">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#F4F1EA] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-bold text-[#123B68]">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#172033]/75 leading-relaxed border-t border-[#F4F1EA]/60 pt-3 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
