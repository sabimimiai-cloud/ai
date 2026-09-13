import React, { useState, useMemo, useRef } from 'react';
import { 
  Gift, 
  Cake, 
  Baby, 
  Heart, 
  Sparkles, 
  ShoppingBag, 
  Check, 
  MessageSquare, 
  ArrowRight, 
  RefreshCw, 
  Shirt, 
  UserCheck,
  Calendar,
  Compass,
  Star,
  ExternalLink
} from 'lucide-react';
import { ActiveView, ProductCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { STORE_CONTACT } from '../data/storeData';
import { 
  GiftAudience, 
  GiftAgeRange, 
  GiftOccasion, 
  getGiftRecommendations, 
  getRecommendationHeadline,
  GiftRecommendationItem 
} from '../data/giftRecommendations';

interface GiftingSectionProps {
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product, size?: string, color?: string) => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({
  onNavigate,
  onQuickView,
  onAddToCart
}) => {
  // Gift Finder Selections
  const [who, setWho] = useState<GiftAudience>('Girl');
  const [age, setAge] = useState<GiftAgeRange>('3-5');
  const [occasion, setOccasion] = useState<GiftOccasion>('Birthday');

  // UI interaction feedback
  const [addedBoxNotice, setAddedBoxNotice] = useState<boolean>(false);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Find the Birthday Gift Box from real catalogue data
  const birthdayGiftBox = useMemo(() => {
    return PRODUCTS.find(p => p.id === 'bb-gft-001');
  }, []);

  // Map product IDs to full Product models from catalogue for instant cart & quick view
  const productMap = useMemo(() => {
    const map = new Map<string, Product>();
    PRODUCTS.forEach(p => map.set(p.id, p));
    return map;
  }, []);

  // Derived recommendation items based on who + age + occasion
  const recommendations = useMemo(() => {
    return getGiftRecommendations(who, age, occasion);
  }, [who, age, occasion]);

  const { title: headlineTitle, subtitle: headlineSubtitle } = useMemo(() => {
    return getRecommendationHeadline(who, age, occasion);
  }, [who, age, occasion]);

  const ageDisplayLabel = useMemo(() => {
    switch (age) {
      case '0-2': return '0–2 years';
      case '3-5': return '3–5 years';
      case '6-9': return '6–9 years';
      case '10-13': return '10–13 years';
    }
  }, [age]);

  const whatsappInquiryUrl = `https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
    `Hello Buubu Bloom, I need help choosing a gift for a ${who} (${ageDisplayLabel}) for ${occasion}. Could you suggest options?`
  )}`;

  // When clicking "Help Me Pick"
  const handleHelpMePick = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 2000);

    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const el = document.getElementById('gift-recommendation-results');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Audience selector handler with smart age-coordination
  const handleSelectAudience = (selectedAudience: GiftAudience) => {
    setWho(selectedAudience);
    if (selectedAudience === 'Baby') {
      setAge('0-2');
    }
  };

  // Age selector handler with smart audience-coordination
  const handleSelectAge = (selectedAge: GiftAgeRange) => {
    setAge(selectedAge);
    // If Baby was selected but user chooses 6-9 or 10-13, gracefully switch to Not Sure
    if (who === 'Baby' && (selectedAge === '6-9' || selectedAge === '10-13')) {
      setWho('Not Sure');
    }
  };

  // Quick gift path handler from the top banner
  const handleSelectGiftPath = (path: 'Birthday' | 'Baby' | 'Girls' | 'Boys') => {
    if (path === 'Birthday') {
      setOccasion('Birthday');
      setWho('Not Sure');
      setAge('3-5');
    } else if (path === 'Baby') {
      setWho('Baby');
      setAge('0-2');
      setOccasion('Baby Gift');
    } else if (path === 'Girls') {
      setWho('Girl');
      setAge('3-5');
      setOccasion('Birthday');
    } else if (path === 'Boys') {
      setWho('Boy');
      setAge('3-5');
      setOccasion('Birthday');
    }

    const finder = document.getElementById('guided-gift-finder');
    if (finder) {
      finder.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddBox = () => {
    if (birthdayGiftBox && onAddToCart) {
      onAddToCart(birthdayGiftBox, birthdayGiftBox.sizes[0] || 'Curated by Age', 'Girls Bloom Theme');
      setAddedBoxNotice(true);
      setTimeout(() => setAddedBoxNotice(false), 3000);
    }
  };

  const handleQuickAdd = (item: GiftRecommendationItem) => {
    if (item.isRealCatalogueProduct && item.productId && onAddToCart) {
      const prod = productMap.get(item.productId);
      if (prod) {
        onAddToCart(prod, prod.sizes[0] || 'Standard', prod.colors[0]?.name || 'Standard');
        setAddedItemNotice(item.id);
        setTimeout(() => setAddedItemNotice(null), 2500);
      }
    }
  };

  const handleOpenProduct = (item: GiftRecommendationItem) => {
    if (item.isRealCatalogueProduct && item.productId && onQuickView) {
      const prod = productMap.get(item.productId);
      if (prod) {
        onQuickView(prod);
      }
    }
  };

  return (
    <section 
      id="gift-concierge-section"
      className="py-16 sm:py-24 bg-[#FFFDF8] border-b border-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header: Clear, human copy */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F58220]/10 text-[#F58220] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Gift Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#173F70] tracking-tight font-display mb-3">
            Need a gift?
          </h2>

          <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed font-medium">
            Let us make the choice easier.
          </p>
        </div>

        {/* 4 Clear Quick Gift Paths */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-14">
          <button
            id="path-birthday-gifts-btn"
            type="button"
            onClick={() => handleSelectGiftPath('Birthday')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#F4F1EA] hover:border-[#F58220]/50 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Cake className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#173F70] mb-0.5">Birthday Gifts</h3>
            <p className="text-xs text-[#172033]/65">Celebration outfits & boxes</p>
          </button>

          <button
            id="path-baby-gifts-btn"
            type="button"
            onClick={() => handleSelectGiftPath('Baby')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#F4F1EA] hover:border-[#27AFA3]/50 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#27AFA3]/10 text-[#27AFA3] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Baby className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#173F70] mb-0.5">Baby Gifts</h3>
            <p className="text-xs text-[#172033]/65">Rompers, sets & essentials</p>
          </button>

          <button
            id="path-girls-gifts-btn"
            type="button"
            onClick={() => handleSelectGiftPath('Girls')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#F4F1EA] hover:border-[#F58220]/50 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#173F70] mb-0.5">Gifts for Girls</h3>
            <p className="text-xs text-[#172033]/65">Dresses, sets & accessories</p>
          </button>

          <button
            id="path-boys-gifts-btn"
            type="button"
            onClick={() => handleSelectGiftPath('Boys')}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#F4F1EA] hover:border-[#2563C7]/50 hover:shadow-md transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2563C7]/10 text-[#2563C7] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#173F70] mb-0.5">Gifts for Boys</h3>
            <p className="text-xs text-[#172033]/65">Casual sets, shoes & shirts</p>
          </button>
        </div>

        {/* Featured Product: Birthday Gift Box */}
        {birthdayGiftBox && (
          <div 
            id="birthday-gift-box-feature"
            className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#F4F1EA] shadow-lg mb-16 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Product Photograph */}
              <div className="md:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-square bg-[#F4F1EA] border border-[#F4F1EA]">
                  <img
                    src={birthdayGiftBox.images[0] || '/images/nigerian_birthday_kids.jpg'}
                    alt="Birthday Gift Box"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/nigerian_birthday_kids.jpg';
                    }}
                  />
                </div>
                <div className="absolute top-3 left-3 bg-[#F58220] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  Ready to Gift
                </div>
              </div>

              {/* Product Details */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#27AFA3]">
                    Curated Gift Box
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display mt-1 mb-2">
                    Birthday Gift Box
                  </h3>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-black text-[#173F70] font-display">
                      ₦{birthdayGiftBox.price.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      Assembled in Lagos
                    </span>
                  </div>

                  <p className="text-sm text-[#172033]/80 leading-relaxed mb-5">
                    {birthdayGiftBox.description}
                  </p>

                  {/* What's Inside Section */}
                  <div className="bg-[#FFFDF8] border border-[#F4F1EA] rounded-2xl p-4 sm:p-5 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs sm:text-sm font-black text-[#173F70] uppercase tracking-wider">
                        What's inside
                      </h4>
                      <span className="text-[11px] font-bold text-[#27AFA3]">
                        Personalized Selection
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#172033]/80 leading-relaxed font-medium">
                      Each gift box is selected according to the child's age, size and preferences. We'll confirm the contents with you before dispatch.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    id="add-birthday-gift-box-btn"
                    type="button"
                    onClick={handleAddBox}
                    className="flex-1 bg-[#173F70] hover:bg-[#2563C7] text-white py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuickView?.(birthdayGiftBox)}
                    className="bg-[#F4F1EA] hover:bg-[#F4F1EA]/80 text-[#173F70] py-3.5 px-5 rounded-2xl font-bold text-sm tracking-wide transition-all active:scale-[0.98] cursor-pointer text-center"
                  >
                    View Details
                  </button>
                </div>

                {addedBoxNotice && (
                  <div className="mt-3 p-2.5 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Birthday Gift Box added to bag!</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Guided "Find a Gift" Engine */}
        <div 
          id="guided-gift-finder"
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#F4F1EA] shadow-md"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#F58220] mb-2">
              <Compass className="w-4 h-4" />
              <span>Interactive Gift Concierge</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#173F70] font-display mb-1.5">
              Find a Gift
            </h3>
            <p className="text-sm text-[#172033]/70">
              Select who you're shopping for, their age, and the occasion. We'll show immediate picks tailored for them.
            </p>
          </div>

          {/* STAGE 1: WHO IS IT FOR? */}
          <div className="mb-7 pb-6 border-b border-[#F4F1EA]">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-[#173F70] flex items-center gap-2">
                <span>1. Who is it for?</span>
                <span className="text-[#F58220] font-normal lowercase">({who})</span>
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['Girl', 'Boy', 'Baby', 'Not Sure'] as GiftAudience[]).map((option) => (
                <button
                  key={option}
                  id={`gift-who-${option.toLowerCase().replace(' ', '-')}`}
                  type="button"
                  onClick={() => handleSelectAudience(option)}
                  className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    who === option
                      ? 'bg-[#173F70] text-white shadow-sm ring-2 ring-[#173F70]/20 scale-[1.02]'
                      : 'bg-[#F4F1EA] text-[#172033]/75 hover:bg-[#EBE7DC]'
                  }`}
                >
                  {option === 'Girl' && <Sparkles className={`w-4 h-4 ${who === 'Girl' ? 'text-[#F58220]' : 'text-[#F58220]'}`} />}
                  {option === 'Boy' && <Shirt className={`w-4 h-4 ${who === 'Boy' ? 'text-[#38BDF8]' : 'text-[#2563C7]'}`} />}
                  {option === 'Baby' && <Baby className={`w-4 h-4 ${who === 'Baby' ? 'text-[#34D399]' : 'text-[#27AFA3]'}`} />}
                  {option === 'Not Sure' && <UserCheck className={`w-4 h-4 ${who === 'Not Sure' ? 'text-amber-300' : 'text-[#173F70]'}`} />}
                  <span>{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* STAGE 2: AGE */}
          <div className="mb-7 pb-6 border-b border-[#F4F1EA]">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-[#173F70] flex items-center gap-2">
                <span>2. Age</span>
                <span className="text-[#2563C7] font-normal lowercase">({ageDisplayLabel})</span>
              </label>
              {who === 'Baby' && (
                <span className="text-[11px] font-bold text-[#27AFA3]">
                  Baby age locked to 0–2 years
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { key: '0-2' as GiftAgeRange, label: '0–2 years', note: 'Baby & Toddler' },
                { key: '3-5' as GiftAgeRange, label: '3–5 years', note: 'Preschool' },
                { key: '6-9' as GiftAgeRange, label: '6–9 years', note: 'School Age' },
                { key: '10-13' as GiftAgeRange, label: '10–13 years', note: 'Pre-Teen' }
              ].map((a) => (
                <button
                  key={a.key}
                  id={`gift-age-${a.key}`}
                  type="button"
                  onClick={() => handleSelectAge(a.key)}
                  className={`py-3 px-3 rounded-xl transition-all text-center cursor-pointer flex flex-col items-center justify-center ${
                    age === a.key
                      ? 'bg-[#2563C7] text-white shadow-sm ring-2 ring-[#2563C7]/20 scale-[1.02]'
                      : 'bg-[#F4F1EA] text-[#172033]/75 hover:bg-[#EBE7DC]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold">{a.label}</span>
                  <span className={`text-[10px] mt-0.5 ${age === a.key ? 'text-white/80' : 'text-[#172033]/50'}`}>
                    {a.note}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* STAGE 3: OCCASION */}
          <div className="mb-8 pb-6 border-b border-[#F4F1EA]">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black uppercase tracking-wider text-[#173F70] flex items-center gap-2">
                <span>3. Occasion</span>
                <span className="text-[#27AFA3] font-normal lowercase">({occasion})</span>
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {(['Birthday', 'Christmas', 'Baby Gift', 'Just Because', 'Something Special'] as GiftOccasion[]).map((option) => (
                <button
                  key={option}
                  id={`gift-occasion-${option.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => setOccasion(option)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center ${
                    occasion === option
                      ? 'bg-[#27AFA3] text-white shadow-sm ring-2 ring-[#27AFA3]/20 scale-[1.02]'
                      : 'bg-[#F4F1EA] text-[#172033]/75 hover:bg-[#EBE7DC]'
                  }`}
                >
                  {option === 'Birthday' && <Cake className="w-3.5 h-3.5 shrink-0" />}
                  {option === 'Christmas' && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
                  {option === 'Baby Gift' && <Baby className="w-3.5 h-3.5 shrink-0" />}
                  {option === 'Just Because' && <Heart className="w-3.5 h-3.5 shrink-0" />}
                  {option === 'Something Special' && <Star className="w-3.5 h-3.5 shrink-0" />}
                  <span className="truncate">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ACTION: "HELP ME PICK" BUTTON */}
          <div className="mb-10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FFFDF8] border border-[#F4F1EA] p-4 sm:p-5 rounded-2xl">
            <div className="text-left">
              <p className="text-xs text-[#172033]/60 uppercase font-bold tracking-wider">
                Selected Criteria
              </p>
              <p className="text-sm sm:text-base font-black text-[#173F70]">
                {who} • {ageDisplayLabel} • {occasion}
              </p>
            </div>

            <button
              id="help-me-pick-btn"
              type="button"
              onClick={handleHelpMePick}
              className="w-full sm:w-auto bg-[#F58220] hover:bg-[#E07316] text-white py-3.5 px-8 rounded-2xl font-black text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>HELP ME PICK</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* RECOMMENDATION RESULTS SECTION */}
          <div 
            ref={resultsRef}
            id="gift-recommendation-results"
            className={`pt-6 border-t border-[#F4F1EA] transition-all duration-500 rounded-2xl ${
              isHighlighted ? 'ring-4 ring-[#F58220]/30 bg-[#FFFDF8] p-4' : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#173F70]/10 text-[#173F70]">
                    {who}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2563C7]/10 text-[#2563C7]">
                    {ageDisplayLabel}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#27AFA3]/10 text-[#27AFA3]">
                    {occasion}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-[#173F70] font-display mt-2 mb-0.5">
                  {headlineTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#172033]/70">
                  {headlineSubtitle}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setWho('Girl');
                    setAge('3-5');
                    setOccasion('Birthday');
                  }}
                  className="text-xs font-bold text-[#172033]/60 hover:text-[#173F70] flex items-center gap-1 cursor-pointer bg-[#F4F1EA] hover:bg-[#EBE7DC] px-3 py-1.5 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('shop', 'gifts')}
                  className="text-xs font-bold text-[#2563C7] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>All gifts in shop</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Dynamic Results Grid (Always 3 to 6 matching items, zero empty states) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {recommendations.map((item) => {
                const prod = item.productId ? productMap.get(item.productId) : undefined;
                const isReal = item.isRealCatalogueProduct && prod !== undefined;

                return (
                  <div
                    key={item.id}
                    id={`gift-card-${item.id}`}
                    className="bg-[#FFFDF8] rounded-2xl p-4 border border-[#F4F1EA] hover:border-[#173F70]/20 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product / Inspiration Image */}
                      <div 
                        className="aspect-[4/5] rounded-xl overflow-hidden mb-3 relative bg-[#F4F1EA] cursor-pointer"
                        onClick={() => {
                          if (isReal && prod) {
                            handleOpenProduct(item);
                          }
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/nigerian_birthday_kids.jpg';
                          }}
                        />

                        {/* Top Badge: Real Catalogue Item */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                          <span className="bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                            {item.highlightTag || 'In Stock'}
                          </span>
                        </div>

                        {/* Category pill */}
                        <span className="absolute bottom-2.5 right-2.5 bg-black/60 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                          {item.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h5 
                        className={`text-sm font-bold text-[#172033] line-clamp-1 mb-1 transition-colors ${
                          isReal ? 'cursor-pointer group-hover:text-[#173F70]' : ''
                        }`}
                        onClick={() => {
                          if (isReal && prod) handleOpenProduct(item);
                        }}
                      >
                        {item.title}
                      </h5>

                      <p className="text-xs text-[#172033]/70 line-clamp-2 mb-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Price / Stock Note */}
                      <div className="flex items-baseline justify-between mb-4">
                        {isReal && item.price ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-base font-black text-[#173F70] font-display">
                              ₦{item.price.toLocaleString()}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                              In Stock
                            </span>
                          </div>
                        ) : (
                          <div className="text-[11px] font-medium text-[#172033]/65 italic">
                            Availability may vary. WhatsApp us to confirm.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-[#F4F1EA] flex items-center gap-2">
                      {isReal && prod ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleQuickAdd(item)}
                            className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              addedItemNotice === item.id
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#173F70] hover:bg-[#2563C7] text-white active:scale-[0.98]'
                            }`}
                          >
                            {addedItemNotice === item.id ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added!</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Add to Bag</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenProduct(item)}
                            className="py-2.5 px-3 rounded-xl font-bold text-xs bg-[#F4F1EA] hover:bg-[#EBE7DC] text-[#173F70] transition-colors cursor-pointer"
                          >
                            View
                          </button>
                        </>
                      ) : (
                        <a
                          href={`https://wa.me/${STORE_CONTACT.phoneRaw}?text=${encodeURIComponent(
                            `Hello Buubu Bloom, I am interested in the ${item.title} (${who}, ${ageDisplayLabel}, for ${occasion}) from your Gift Finder. Do you currently have this or similar styles available in your Lagos store?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-[#27AFA3] hover:bg-[#20968B] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Ask about this style</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Concierge Help Strip */}
            <div className="mt-8 pt-6 border-t border-[#F4F1EA] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FFFDF8] p-4 rounded-2xl border border-[#F4F1EA]">
              <div>
                <p className="text-xs font-bold text-[#173F70]">
                  Looking for custom hampers, corporate gifting or specific sizes?
                </p>
                <p className="text-[11px] text-[#172033]/65 mt-0.5">
                  Our Lagos store team can prepare tailored boxes and deliver nationwide.
                </p>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#27AFA3] hover:bg-[#20968B] text-white py-2.5 px-5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Lagos Store Team</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
