import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Sparkles,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveView, ProductCategory, Product } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { PRODUCTS } from '../data/products';
import { BuubuBloomLogo } from './BuubuBloomLogo';

interface NavbarProps {
  activeView: ActiveView;
  selectedCategory?: ProductCategory;
  onNavigate: (view: ActiveView, category?: ProductCategory) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct: (product: Product) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  selectedCategory = 'all',
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleNavClick = (view: ActiveView, category?: ProductCategory) => {
    onNavigate(view, category);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement Bar */}
      <div 
        id="top-announcement-bar"
        className="bg-[#173F70] text-white text-xs sm:text-sm font-medium py-2 px-4 transition-all"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center justify-center bg-[#F58220] text-white rounded-full p-0.5 px-2 text-[11px] font-bold uppercase tracking-wider">
              DELIVERING ACROSS NIGERIA
            </span>
            <span className="text-[#FFFDF8]/90 font-normal">
              Nationwide delivery to your doorstep • Visit us at Galleria Mall, Orchid, Lagos
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#F9C928]">
            <a 
              href={`tel:${STORE_CONTACT.phoneRaw}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#27AFA5]" />
              <span>0806 014 3654</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/85 font-normal">
              <MapPin className="w-3.5 h-3.5 text-[#D93F92]" />
              <span>Galleria Mall, Orchid, Lagos</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#F4F1EA] transition-all duration-200 ${
        scrolled ? 'shadow-sm py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#173F70] hover:bg-[#F4F1EA] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Official Buubu Bloom Logo - Stable & Unanimated */}
          <div 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center py-1 select-none"
            aria-label="Buubu Bloom Home"
          >
            <BuubuBloomLogo 
              height={46}
              className="h-10 sm:h-11 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'home'
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]/70'
              }`}
            >
              HOME
            </button>

            <button
              id="nav-link-new-arrivals"
              onClick={() => {
                if (activeView === 'home') {
                  const el = document.getElementById('new-arrivals-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else handleNavClick('shop', 'all');
                } else {
                  handleNavClick('home');
                  setTimeout(() => {
                    const el = document.getElementById('new-arrivals-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 120);
                }
              }}
              className="relative px-3 py-1.5 rounded-full text-xs font-black tracking-wider transition-colors duration-200 cursor-pointer text-[#F58220] hover:bg-[#F58220]/10 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]"></span>
              <span>NEW IN</span>
            </button>

            <button
              id="nav-link-shop-all"
              onClick={() => handleNavClick('shop', 'all')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'shop' && selectedCategory === 'all'
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]/70'
              }`}
            >
              SHOP
            </button>

            <button
              id="nav-link-girls"
              onClick={() => handleNavClick('shop', 'girls')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'shop' && selectedCategory === 'girls'
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]/70'
              }`}
            >
              GIRLS
            </button>

            <button
              id="nav-link-boys"
              onClick={() => handleNavClick('shop', 'boys')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'shop' && selectedCategory === 'boys'
                  ? 'bg-[#2563C7] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#2563C7] hover:bg-[#F4F1EA]/70'
              }`}
            >
              BOYS
            </button>

            <button
              id="nav-link-baby"
              onClick={() => handleNavClick('shop', 'baby')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'shop' && selectedCategory === 'baby'
                  ? 'bg-[#F4C430] text-[#173F70] font-bold shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]/70'
              }`}
            >
              BABY
            </button>

            <button
              id="nav-link-gifts"
              onClick={() => handleNavClick('shop', 'gifts')}
              className={`relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeView === 'shop' && (selectedCategory === 'gifts' || selectedCategory === 'toys')
                  ? 'bg-[#F58220] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#F58220] hover:bg-[#F4F1EA]/70'
              }`}
            >
              GIFTS
            </button>

            <button
              id="nav-link-new-in"
              onClick={() => handleNavClick('shop', 'all')}
              className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#27AFA5] hover:bg-[#27AFA5]/10 transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <span>EXPLORE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#27AFA5]" />
            </button>
          </nav>

          {/* Right Utility Actions: Search, Wishlist, Cart, WhatsApp */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Trigger */}
            <button
              id="header-search-toggle-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative cursor-pointer active:scale-95"
              aria-label="Search products"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              id="header-wishlist-toggle-btn"
              onClick={onOpenWishlist}
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative cursor-pointer active:scale-95"
              aria-label="View saved wishlist"
              title="Saved wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F58220] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              id="header-cart-toggle-btn"
              onClick={onOpenCart}
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative cursor-pointer active:scale-95"
              aria-label="View shopping bag"
              title="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#2563C7] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Utility Action */}
            <a
              id="header-whatsapp-btn"
              href={STORE_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#27AFA5] hover:bg-[#209086] text-white px-3 sm:px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-xs active:scale-95 hover:shadow-sm"
              title="Chat with Buubu Bloom on WhatsApp"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Live Search Expandable Drawer / Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              id="search-overlay-bar"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="border-t border-[#F4F1EA] bg-[#FFFDF8] px-4 sm:px-6 py-4 overflow-hidden"
            >
            <div className="max-w-3xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#123B68]/60 absolute left-4" />
                <input
                  type="text"
                  placeholder="Search dresses, two-piece sets, shoes, birthday gifts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[#F4F1EA] text-[#172033] placeholder:text-[#172033]/40 pl-11 pr-12 py-3 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#123B68]/20"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs font-bold text-gray-500 hover:text-gray-900"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              {/* Instant Search Results */}
              {searchQuery.trim() !== '' && (
                <div className="mt-3 bg-white rounded-2xl p-3 shadow-lg border border-[#F4F1EA]">
                  {searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => {
                            onSelectProduct(product);
                            setSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-[#F4F1EA] rounded-xl cursor-pointer transition-colors"
                        >
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-12 h-12 rounded-lg object-cover" 
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#123B68] uppercase tracking-wider">{product.category}</p>
                            <p className="text-sm font-bold text-[#172033] truncate">{product.name}</p>
                            <p className="text-xs font-semibold text-[#F58220]">₦{product.price.toLocaleString()}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                      <div className="pt-2 text-center">
                        <button
                          onClick={() => {
                            handleNavClick('shop', 'all');
                            setSearchOpen(false);
                          }}
                          className="text-xs font-bold text-[#2563C7] hover:underline"
                        >
                          View all results in shop →
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 text-center text-sm text-gray-500">
                      No matching products found for "{searchQuery}". Try "dress", "denim", "shoes" or "gift".
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:hidden bg-[#FFFDF8] border-b border-[#F4F1EA] shadow-xl p-5 overflow-hidden"
          >
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F4F1EA]">
            <BuubuBloomLogo height={38} className="h-9 w-auto" />
            <span className="text-[11px] font-bold text-[#27AFA5]">
              Match your vibe, Bloom your style!
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3 text-left rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                activeView === 'home' ? 'bg-[#173F70] text-white' : 'bg-[#F4F1EA] text-[#172033]'
              }`}
            >
              <span>HOME</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
            <button
              onClick={() => handleNavClick('shop', 'all')}
              className={`p-3 text-left rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                activeView === 'shop' && selectedCategory === 'all' ? 'bg-[#173F70] text-white' : 'bg-[#F4F1EA] text-[#172033]'
              }`}
            >
              <span>SHOP ALL</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (activeView === 'home') {
                const el = document.getElementById('new-arrivals-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleNavClick('home');
                setTimeout(() => {
                  const el = document.getElementById('new-arrivals-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 120);
              }
            }}
            className="w-full mb-4 p-3 rounded-xl bg-[#F58220]/10 text-[#F58220] border border-[#F58220]/20 font-bold text-sm flex items-center justify-between transition-colors active:scale-[0.98]"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F58220]"></span>
              <span>JUST IN: NEW ARRIVALS</span>
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#173F70]/60 mb-2 px-1">
              Shop Categories
            </p>
            <div className="space-y-1.5">
              <button
                onClick={() => handleNavClick('shop', 'girls')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-white border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA] transition-colors"
              >
                <span>Girls</span>
                <ChevronRight className="w-4 h-4 text-[#173F70]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'boys')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-white border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA] transition-colors"
              >
                <span>Boys</span>
                <ChevronRight className="w-4 h-4 text-[#2563C7]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'baby')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-white border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA] transition-colors"
              >
                <span>Baby</span>
                <ChevronRight className="w-4 h-4 text-[#F4C430]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'shoes')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-white border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA] transition-colors"
              >
                <span>Shoes & Accessories</span>
                <ChevronRight className="w-4 h-4 text-[#27AFA5]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'toys')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-white border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA] transition-colors"
              >
                <span>Toys & Gifts</span>
                <ChevronRight className="w-4 h-4 text-[#F58220]" />
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F4F1EA] flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavClick('about')}
                className="p-2.5 text-center text-xs font-bold rounded-lg border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA]"
              >
                About Buubu Bloom
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="p-2.5 text-center text-xs font-bold rounded-lg border border-[#F4F1EA] text-[#173F70] hover:bg-[#F4F1EA]"
              >
                Store & Directions
              </button>
            </div>
            <a
              href={`tel:${STORE_CONTACT.phoneRaw}`}
              className="w-full py-3 bg-[#173F70] text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: 0806 014 3654</span>
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};
