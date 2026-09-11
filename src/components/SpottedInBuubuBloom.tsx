import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product, ActiveView } from '../types';
import { PRODUCTS } from '../data/products';

interface SpottedInBuubuBloomProps {
  onQuickView: (product: Product) => void;
  onNavigate: (view: ActiveView) => void;
}

interface CustomerLook {
  id: string;
  childName: string;
  styleTag: string;
  image: string;
  featuredProductId: string;
  lookTitle: string;
}

const CUSTOMER_LOOKS: CustomerLook[] = [
  {
    id: 'look-1',
    childName: 'Yellow Party Dress',
    styleTag: 'Weekend & Party Look',
    image: '/images/girls_nigerian_yellow_1787489114238.jpg',
    featuredProductId: 'bb-g-002',
    lookTitle: 'Yellow Tiered Dress'
  },
  {
    id: 'look-2',
    childName: 'Linen Shorts Set',
    styleTag: 'Playground & Outdoor Fit',
    image: '/images/boys_nigerian_safari_1787489099338.jpg',
    featuredProductId: 'bb-b-002',
    lookTitle: 'Linen Shirt & Shorts Set'
  },
  {
    id: 'look-3',
    childName: 'Pink Birthday Dress',
    styleTag: 'Occasion & Celebration',
    image: '/images/nigerian_birthday_kids_1787489171127.jpg',
    featuredProductId: 'bb-g-001',
    lookTitle: 'Pink Bow Dress'
  },
  {
    id: 'look-4',
    childName: 'Boys Denim Set',
    styleTag: 'Everyday Cool Style',
    image: '/images/boys_nigerian_denim_1787489068562.jpg',
    featuredProductId: 'bb-b-001',
    lookTitle: 'Boys Denim Two-Piece Set'
  }
];

export const SpottedInBuubuBloom: React.FC<SpottedInBuubuBloomProps> = ({
  onQuickView,
  onNavigate
}) => {
  return (
    <section 
      id="spotted-in-buubu-bloom-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#F58220] mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>STYLE INSPIRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display">
              SPOTTED IN BUUBU BLOOM
            </h2>
            <p className="text-base sm:text-lg text-[#172033]/80 mt-2 max-w-xl">
              Some of our favourite little looks.
            </p>
          </div>

          <button
            id="see-more-looks-btn"
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2 bg-[#173F70] hover:bg-[#2563C7] text-white px-7 py-4 rounded-2xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] active:translate-y-0 self-start sm:self-auto cursor-pointer"
          >
            <span>See More Looks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_LOOKS.map((look, index) => {
            const product = PRODUCTS.find(p => p.id === look.featuredProductId) || PRODUCTS[0];
            return (
              <motion.div
                key={look.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-white rounded-3xl overflow-hidden border border-[#F4F1EA] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F4F1EA]">
                  <img
                    src={look.image}
                    alt={`${look.childName} style inspiration`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-600 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1 text-[11px] font-black text-[#173F70]">
                    <Heart className="w-3 h-3 fill-[#F58220] text-[#F58220]" />
                    <span>Lagos</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#F9C928] mb-0.5">
                      {look.styleTag}
                    </p>
                    <p className="text-base font-black">
                      {look.childName}
                    </p>
                  </div>
                </div>

                {/* Product Reference Tag Beneath */}
                <div className="p-4 bg-[#FFFDF8] border-t border-[#F4F1EA] flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#27AFA5] block">
                      Featured Look
                    </span>
                    <h4 
                      onClick={() => onQuickView(product)}
                      className="text-xs font-bold text-[#172033] truncate hover:text-[#173F70] cursor-pointer transition-colors"
                    >
                      {look.lookTitle}
                    </h4>
                    <span className="text-xs font-black text-[#F58220]">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onQuickView(product)}
                    className="min-h-[44px] min-w-[44px] p-2 bg-[#F4F1EA] hover:bg-[#173F70] hover:text-white rounded-xl text-[#173F70] transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center"
                    title="View this product"
                    aria-label={`View ${look.lookTitle}`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
