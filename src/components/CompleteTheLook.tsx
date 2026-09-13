import React, { useState } from 'react';
import { Sparkles, Plus, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface CompleteTheLookProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size?: string, color?: string) => void;
  onOpenCart?: () => void;
}

interface OutfitBundle {
  id: string;
  name: string;
  tagline: string;
  mainImage: string;
  items: {
    productId: string;
    role: string;
  }[];
}

const LOOK_BUNDLES: OutfitBundle[] = [
  {
    id: 'girls-bloom',
    name: 'GIRLS BLOOM',
    tagline: 'A little wardrobe refresh, all in one.',
    mainImage: '/images/girls_nigerian_yellow_1787489114238.jpg',
    items: [
      { productId: 'bb-g-002', role: 'Main Outfit' },
      { productId: 'bb-s-003', role: 'Shoes' },
      { productId: 'bb-a-001', role: 'Accessory' }
    ]
  },
  {
    id: 'boys-bloom',
    name: 'BOYS BLOOM',
    tagline: 'Cool fits for little guys who already know their style.',
    mainImage: '/images/boys_nigerian_safari_1787489099338.jpg',
    items: [
      { productId: 'bb-b-002', role: 'Main Outfit' },
      { productId: 'bb-s-004', role: 'Shoes' },
      { productId: 'bb-a-002', role: 'Accessory' }
    ]
  },
  {
    id: 'weekend-bloom',
    name: 'WEEKEND EXPLORER',
    tagline: 'Durable denim and comfortable kicks for busy days.',
    mainImage: '/images/boys_nigerian_denim_1787489068562.jpg',
    items: [
      { productId: 'bb-b-001', role: 'Main Outfit' },
      { productId: 'bb-s-001', role: 'Shoes' },
      { productId: 'bb-a-002', role: 'Accessory' }
    ]
  }
];

export const CompleteTheLook: React.FC<CompleteTheLookProps> = ({
  onQuickView,
  onAddToCart,
  onOpenCart
}) => {
  const [activeLookIndex, setActiveLookIndex] = useState<number>(0);
  const currentBundle = LOOK_BUNDLES[activeLookIndex];

  // Map products
  const bundleProducts = currentBundle.items.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    return {
      product: prod,
      role: item.role
    };
  }).filter((item): item is { product: Product; role: string } => item.product !== undefined);

  // Selected items inside bundle
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(
    bundleProducts.map(b => b.product.id)
  );

  const toggleItem = (id: string) => {
    if (selectedProductIds.includes(id)) {
      if (selectedProductIds.length > 1) {
        setSelectedProductIds(selectedProductIds.filter(i => i !== id));
      }
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const selectedItems = bundleProducts.filter(b => selectedProductIds.includes(b.product.id));
  const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.product.price, 0);

  const handleAddFullLook = () => {
    selectedItems.forEach(item => {
      onAddToCart(item.product, item.product.sizes[0], item.product.colors[0]?.name || 'Standard');
    });
    if (onOpenCart) {
      onOpenCart();
    }
  };

  return (
    <section 
      id="complete-the-look-section"
      className="py-16 sm:py-24 bg-[#F4F1EA]/50 border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-white border border-[#173F70]/10 text-xs font-extrabold uppercase px-3.5 py-1 rounded-full text-[#173F70] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
            <span>FULL OUTFIT STYLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#173F70] tracking-tight font-display mb-3">
            One piece is cute. The full look? Even better.
          </h2>
          <p className="text-sm sm:text-base text-[#172033]/75">
            Match the outfit with shoes, cute bags and sunnies so they step out completely styled.
          </p>
        </div>

        {/* Look Selector Pills */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {LOOK_BUNDLES.map((bundle, index) => (
            <button
              key={bundle.id}
              onClick={() => {
                setActiveLookIndex(index);
                const newItems = bundle.items.map(i => i.productId);
                setSelectedProductIds(newItems);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeLookIndex === index
                  ? 'bg-[#173F70] text-white shadow-sm'
                  : 'bg-white text-[#172033]/70 hover:bg-[#F4F1EA] border border-[#F4F1EA]'
              }`}
            >
              {bundle.name}
            </button>
          ))}
        </div>

        {/* Merchandising Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#F4F1EA] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Big Styled Child Model Imagery */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#F4F1EA] shadow-md group">
                <img
                  src={currentBundle.mainImage}
                  alt={currentBundle.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F70]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block bg-[#F58220] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1">
                    READY-TO-WEAR SET
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {currentBundle.name}
                  </h3>
                  <p className="text-xs text-white/90">
                    {currentBundle.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bundled Items with Checkboxes and Single-Click Bundle Buy */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#F4F1EA]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#173F70]/70">
                    Select pieces in this look:
                  </p>
                  <span className="text-xs font-bold text-[#27AFA5]">
                    {selectedItems.length} of {bundleProducts.length} items selected
                  </span>
                </div>

                {/* List of 3 items */}
                <div className="divide-y divide-[#F4F1EA] mt-2">
                  {bundleProducts.map(({ product, role }) => {
                    const isSelected = selectedProductIds.includes(product.id);
                    return (
                      <div 
                        key={product.id}
                        className={`py-3.5 flex items-center gap-4 transition-colors rounded-xl px-2 ${
                          isSelected ? 'bg-[#FFFDF8]' : 'opacity-60'
                        }`}
                      >
                        {/* Checkbox */}
                        <button
                          onClick={() => toggleItem(product.id)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                            isSelected ? 'bg-[#173F70] text-white' : 'border-2 border-gray-300 bg-white'
                          }`}
                          title={isSelected ? 'Remove from bundle' : 'Add to bundle'}
                        >
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </button>

                        {/* Thumbnail */}
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          onClick={() => onQuickView(product)}
                          className="w-16 h-16 rounded-xl object-cover bg-gray-50 border border-[#F4F1EA] cursor-pointer hover:opacity-80 transition-opacity"
                        />

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                            {role}
                          </span>
                          <h4 
                            onClick={() => onQuickView(product)}
                            className="text-sm font-bold text-[#172033] truncate cursor-pointer hover:text-[#173F70]"
                          >
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            Available in sizes: {product.sizes.slice(0, 3).join(', ')}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-sm font-black text-[#173F70]">
                            ₦{product.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total Summary and CTA */}
              <div className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#F4F1EA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Total for {selectedItems.length} pieces:
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-[#173F70]">
                    ₦{totalPrice.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    id="shop-full-look-btn"
                    onClick={handleAddFullLook}
                    className="w-full sm:w-auto bg-[#F58220] hover:bg-[#e07519] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Shop the Full Look</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
