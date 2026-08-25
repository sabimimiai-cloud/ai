import React, { useState } from 'react';
import { X, Ruler, Sparkles, MessageSquare } from 'lucide-react';
import { STORE_CONTACT } from '../data/storeData';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'baby' | 'kids' | 'shoes'>('kids');

  if (!isOpen) return null;

  return (
    <div 
      id="size-guide-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="size-guide-modal-container"
        className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#F4F1EA] my-auto animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F4F1EA] hover:bg-gray-200 text-[#123B68] flex items-center justify-center transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#27AFA3] tracking-wider mb-2">
          <Ruler className="w-4 h-4" />
          <span>FITTING ASSISTANCE</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#123B68] font-display mb-2">
          Buubu Bloom Size Guide
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-6">
          Our clothing is designed for growing kids. When in doubt or between sizes, we recommend sizing up for comfortable wear.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-[#F4F1EA] rounded-2xl mb-6">
          <button
            onClick={() => setActiveTab('kids')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kids' ? 'bg-[#123B68] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Kids (2-12Y)
          </button>
          <button
            onClick={() => setActiveTab('baby')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'baby' ? 'bg-[#123B68] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Baby (0-24M)
          </button>
          <button
            onClick={() => setActiveTab('shoes')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'shoes' ? 'bg-[#123B68] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Kids Shoes
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto mb-6">
          {activeTab === 'kids' && (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#123B68] text-white">
                  <th className="p-3 rounded-l-xl font-bold">Size / Age</th>
                  <th className="p-3 font-bold">Child Height</th>
                  <th className="p-3 font-bold">Chest</th>
                  <th className="p-3 rounded-r-xl font-bold">Waist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">2-3 Years</td>
                  <td className="p-3">92 - 98 cm</td>
                  <td className="p-3">54 cm</td>
                  <td className="p-3">51 cm</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">4-5 Years</td>
                  <td className="p-3">104 - 110 cm</td>
                  <td className="p-3">58 cm</td>
                  <td className="p-3">54 cm</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">6-7 Years</td>
                  <td className="p-3">116 - 122 cm</td>
                  <td className="p-3">63 cm</td>
                  <td className="p-3">58 cm</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">8-10 Years</td>
                  <td className="p-3">128 - 140 cm</td>
                  <td className="p-3">71 cm</td>
                  <td className="p-3">64 cm</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === 'baby' && (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F4C430] text-[#123B68]">
                  <th className="p-3 rounded-l-xl font-bold">Size</th>
                  <th className="p-3 font-bold">Baby Age</th>
                  <th className="p-3 font-bold">Length</th>
                  <th className="p-3 rounded-r-xl font-bold">Weight Approx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">0-3M</td>
                  <td className="p-3">0 - 3 Months</td>
                  <td className="p-3">Up to 62 cm</td>
                  <td className="p-3">3 - 6 kg</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">3-6M</td>
                  <td className="p-3">3 - 6 Months</td>
                  <td className="p-3">62 - 68 cm</td>
                  <td className="p-3">6 - 8 kg</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">6-12M</td>
                  <td className="p-3">6 - 12 Months</td>
                  <td className="p-3">68 - 80 cm</td>
                  <td className="p-3">8 - 10 kg</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">12-18M</td>
                  <td className="p-3">12 - 18 Months</td>
                  <td className="p-3">80 - 86 cm</td>
                  <td className="p-3">10 - 12 kg</td>
                </tr>
              </tbody>
            </table>
          )}

          {activeTab === 'shoes' && (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#27AFA3] text-white">
                  <th className="p-3 rounded-l-xl font-bold">EU Shoe Size</th>
                  <th className="p-3 font-bold">Foot Length (cm)</th>
                  <th className="p-3 font-bold">UK Size</th>
                  <th className="p-3 rounded-r-xl font-bold">Typical Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">EU 22</td>
                  <td className="p-3">13.5 cm</td>
                  <td className="p-3">UK 5</td>
                  <td className="p-3">1.5 - 2 Years</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">EU 24</td>
                  <td className="p-3">15.0 cm</td>
                  <td className="p-3">UK 7</td>
                  <td className="p-3">2 - 3 Years</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">EU 26</td>
                  <td className="p-3">16.5 cm</td>
                  <td className="p-3">UK 8.5</td>
                  <td className="p-3">3 - 4 Years</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">EU 28</td>
                  <td className="p-3">17.8 cm</td>
                  <td className="p-3">UK 10</td>
                  <td className="p-3">4 - 5 Years</td>
                </tr>
                <tr className="hover:bg-[#F4F1EA]/50">
                  <td className="p-3 font-bold text-[#123B68]">EU 30</td>
                  <td className="p-3">19.0 cm</td>
                  <td className="p-3">UK 11.5</td>
                  <td className="p-3">5 - 6 Years</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Live Personal Stylist Callout */}
        <div className="bg-[#FFFDF8] border border-[#F4F1EA] p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-[#123B68]">Need help measuring before ordering?</p>
            <p className="text-[11px] text-gray-500">Send us your child's age or current shoe size on WhatsApp for an instant recommendation.</p>
          </div>
          <a
            href={STORE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#27AFA3] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-[#27AFA3]/90"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat Stylist</span>
          </a>
        </div>

      </div>
    </div>
  );
};
