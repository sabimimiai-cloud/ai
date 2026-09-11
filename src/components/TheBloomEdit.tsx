import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, ShoppingBag, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, ActiveView, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';

interface TheBloomEditProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
}

interface EditStory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  productIds: string[];
}

const EDITS: EditStory[] = [
  {
    id: 'birthday',
    title: 'Birthday Looks',
    subtitle: 'Centre-of-attention style for their big day',
    description: 'Golden tulle, twirl-tested hems, and bright birthday energy that looks just as good in photos as it does in person.',
    image: '/images/nigerian_birthday_kids_1787489171127.jpg',
    tag: 'Celebration Ready',
    productIds: ['bb-g-001', 'bb-g-002', 'bb-a-001']
  },
  {
    id: 'weekend',
    title: 'Weekend Looks',
    subtitle: 'Easy breezy pieces for Saturdays & family outings',
    description: 'Soft breathable cottons, elastic waists, and easy-moving cuts designed for playground running and Sunday brunch.',
    image: '/images/boys_nigerian_safari_1787489099338.jpg',
    tag: 'Comfy & Playful',
    productIds: ['bb-b-001', 'bb-b-002', 'bb-s-001']
  },
  {
    id: 'back-to-school',
    title: 'Back-to-School Picks',
    subtitle: 'Durable kicks & sharp pieces that last',
    description: 'Flexible sneakers, lightweight layers, and versatile basics that survive the school year while looking crisp.',
    image: '/images/pink_school_backpack_1788990964231.jpg',
    tag: 'Durable & Sharp',
    productIds: ['bb-na-003', 'bb-s-001', 'bb-na-006']
  },
  {
    id: 'trendsetters',
    title: 'Tiny Trendsetters',
    subtitle: 'Street-smart denim & relaxed two-piece sets',
    description: 'Denim chore jackets, relaxed carpenter shorts, and vintage-tone sneakers for kids who already pick out their own outfits.',
    image: '/images/boys_nigerian_denim_1787489068562.jpg',
    tag: 'Cool & Confident',
    productIds: ['bb-b-001', 'bb-na-007', 'bb-na-005']
  },
  {
    id: 'gift-worthy',
    title: 'Gift-Worthy Picks',
    subtitle: 'Boxes & surprises that get the biggest smiles',
    description: 'Curated sets, keepsake baby hampers, and playful battery cruisers that make any celebration feel extra special.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80',
    tag: 'Unwrap The Joy',
    productIds: ['bb-gft-001', 'bb-t-001', 'bb-t-002']
  },
  {
    id: 'special-day',
    title: 'Special Day Looks',
    subtitle: 'Thanksgiving, weddings and dress-up milestones',
    description: 'Tailored pastel blazers, tiered ruffled gowns, and pristine patent loafers for when the whole family is dressing up.',
    image: '/images/editorial_nigerian_twirl_1787489158292.jpg',
    tag: 'Dressed To Impress',
    productIds: ['bb-b-003', 'bb-na-001', 'bb-na-002']
  }
];

export const TheBloomEdit: React.FC<TheBloomEditProps> = ({
  onQuickView,
  onAddToCart,
  onNavigate
}) => {
  const [activeEditId, setActiveEditId] = useState<string>('birthday');

  const currentEdit = EDITS.find(e => e.id === activeEditId) || EDITS[0];
  const editProducts = PRODUCTS.filter(p => currentEdit.productIds.includes(p.id));

  return (
    <section 
      id="the-bloom-edit-section"
      className="py-16 sm:py-24 bg-[#173F70] text-white relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563C7]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#27AFA5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#F9C928] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STYLE INSPIRATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display text-white">
              The Bloom Edit
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-2 font-light max-w-xl">
              Little looks we’re loving right now.
            </p>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F9C928] hover:text-white transition-colors cursor-pointer"
          >
            <span>View all in shop</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Curated Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
          {EDITS.map((edit) => (
            <button
              key={edit.id}
              onClick={() => setActiveEditId(edit.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeEditId === edit.id
                  ? 'bg-[#F58220] text-white shadow-md scale-102'
                  : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
              }`}
            >
              {edit.title}
            </button>
          ))}
        </div>

        {/* Interactive Curated Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Look Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-white/5 aspect-[4/3] sm:aspect-[16/10] group">
              <img
                src={currentEdit.image}
                alt={currentEdit.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F70] via-[#173F70]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-[#27AFA5] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                  {currentEdit.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                  {currentEdit.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 line-clamp-2 sm:line-clamp-none">
                  {currentEdit.description}
                </p>
              </div>
            </div>
          </div>

          {/* Shoppable Pieces in this Edit */}
          <div className="lg:col-span-6 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F9C928]">
              Pieces in this edit ({editProducts.length}):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {editProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 hover:border-[#F9C928]/60 transition-all flex gap-3.5 group cursor-pointer"
                  onClick={() => onQuickView(prod)}
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-20 h-24 rounded-xl object-cover bg-white/5 shrink-0 group-hover:scale-104 transition-transform"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#27AFA5]">
                        {prod.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-[#F9C928] transition-colors">
                        {prod.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-black text-[#F9C928]">
                        ₦{prod.price.toLocaleString()}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(prod);
                        }}
                        className="p-2 rounded-xl bg-[#F58220] hover:bg-[#e07519] text-white shadow-xs transition-colors cursor-pointer"
                        title="Add to bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-white/70">
                Want styling advice for this look?
              </span>
              <button
                onClick={() => onNavigate('shop')}
                className="text-xs font-bold text-[#F9C928] hover:underline cursor-pointer"
              >
                Shop more looks →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
