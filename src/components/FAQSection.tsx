import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, STORE_CONTACT } from '../data/storeData';
import { ActiveView } from '../types';

interface FAQSectionProps {
  onNavigate?: (view: ActiveView) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] tracking-tight font-display">
            GOT A QUESTION?
          </h2>
          <p className="text-sm sm:text-base text-[#172033]/75 mt-2 max-w-xl mx-auto">
            A few things people often ask before ordering or visiting our store.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-[#F4F1EA] transition-all duration-200 overflow-hidden shadow-2xs hover:border-[#173F70]/20"
              >
                <button
                  id={`faq-accordion-toggle-${index}`}
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 transition-colors select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#173F70] font-display">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#173F70] text-white rotate-180' : 'bg-[#F4F1EA] text-[#173F70]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#172033]/80 leading-relaxed border-t border-[#F4F1EA]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Strip */}
        <div className="mt-10 sm:mt-12 bg-[#F4F1EA]/70 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#F4F1EA]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#27AFA5]/20 text-[#27AFA5] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#173F70]">
                Still have a question?
              </p>
              <p className="text-[11px] sm:text-xs text-[#172033]/70">
                Send a quick WhatsApp message or call us on {STORE_CONTACT.phoneDisplay}.
              </p>
            </div>
          </div>

          <a
            id="faq-whatsapp-cta"
            href={STORE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#173F70] hover:bg-[#2563C7] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95 shadow-xs"
          >
            <span>CHAT ON WHATSAPP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
