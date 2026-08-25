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
import { ActiveView, ProductCategory, Product } from '../types';
import { STORE_CONTACT } from '../data/storeData';
import { PRODUCTS } from '../data/products';

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
              NATIONWIDE DELIVERY
            </span>
            <span className="text-[#FFFDF8]/90 font-normal">
              ✨ Nationwide Doorstep Delivery Across Nigeria | Store at Galleria Mall, Orchid, Lagos
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

          {/* Logo */}
          <div 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#173F70] via-[#2563C7] to-[#27AFA5] flex items-center justify-center shadow-sm text-white font-black text-xl tracking-tighter group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#F9C928]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-[#173F70] font-display leading-none">
                BUUBU <span className="text-[#F58220]">BLOOM</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#27AFA5] tracking-wide mt-0.5">
                Match your vibe, Bloom your style!
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              id="nav-link-shop-all"
              onClick={() => handleNavClick('shop', 'all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && selectedCategory === 'all'
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]'
              }`}
            >
              SHOP
            </button>

            <button
              id="nav-link-girls"
              onClick={() => handleNavClick('shop', 'girls')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && selectedCategory === 'girls'
                  ? 'bg-[#D93F92] text-white font-bold shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#D93F92] hover:bg-[#F4F1EA]'
              }`}
            >
              GIRLS
            </button>

            <button
              id="nav-link-boys"
              onClick={() => handleNavClick('shop', 'boys')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && selectedCategory === 'boys'
                  ? 'bg-[#2563C7] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#2563C7] hover:bg-[#F4F1EA]'
              }`}
            >
              BOYS
            </button>

            <button
              id="nav-link-baby"
              onClick={() => handleNavClick('shop', 'baby')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && selectedCategory === 'baby'
                  ? 'bg-[#F9C928] text-[#173F70] font-bold shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#173F70] hover:bg-[#F4F1EA]'
              }`}
            >
              BABY
            </button>

            <button
              id="nav-link-shoes"
              onClick={() => handleNavClick('shop', 'shoes')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && (selectedCategory === 'shoes' || selectedCategory === 'accessories')
                  ? 'bg-[#27AFA5] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#27AFA5] hover:bg-[#F4F1EA]'
              }`}
            >
              SHOES
            </button>

            <button
              id="nav-link-toys"
              onClick={() => handleNavClick('shop', 'toys')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'shop' && (selectedCategory === 'toys' || selectedCategory === 'gifts')
                  ? 'bg-[#F58220] text-white shadow-xs' 
                  : 'text-[#172033]/80 hover:text-[#F58220] hover:bg-[#F4F1EA]'
              }`}
            >
              TOYS & GIFTS
            </button>

            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'about' 
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/70 hover:text-[#173F70] hover:bg-[#F4F1EA]'
              }`}
            >
              ABOUT
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${
                activeView === 'contact' 
                  ? 'bg-[#173F70] text-white shadow-xs' 
                  : 'text-[#172033]/70 hover:text-[#173F70] hover:bg-[#F4F1EA]'
              }`}
            >
              VISIT / CONTACT
            </button>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              id="header-search-toggle-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              id="header-wishlist-toggle-btn"
              onClick={onOpenWishlist}
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative"
              aria-label="View saved wishlist"
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
              className="p-2.5 text-[#173F70] hover:bg-[#F4F1EA] rounded-full transition-colors relative"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#2563C7] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Action Button */}
            <button
              id="header-shop-now-cta"
              onClick={() => handleNavClick('shop', 'all')}
              className="hidden sm:inline-flex items-center justify-center bg-[#173F70] hover:bg-[#2563C7] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm active:scale-95"
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Live Search Expandable Drawer / Bar */}
        {searchOpen && (
          <div 
            id="search-overlay-bar"
            className="border-t border-[#F4F1EA] bg-[#FFFDF8] px-4 sm:px-6 py-4 animate-in fade-in duration-150"
          >
            <div className="max-w-3xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#123B68]/60 absolute left-4" />
                <input
                  type="text"
                  placeholder="Search outfits, shoes, toys, birthday gifts, sizes..."
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
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#FFFDF8] border-b border-[#F4F1EA] shadow-xl p-5 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3 text-left rounded-xl text-sm font-bold flex items-center justify-between ${
                activeView === 'home' ? 'bg-[#173F70] text-white' : 'bg-[#F4F1EA] text-[#172033]'
              }`}
            >
              <span>HOME</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
            <button
              onClick={() => handleNavClick('shop', 'all')}
              className={`p-3 text-left rounded-xl text-sm font-bold flex items-center justify-between ${
                activeView === 'shop' && selectedCategory === 'all' ? 'bg-[#173F70] text-white' : 'bg-[#F4F1EA] text-[#172033]'
              }`}
            >
              <span>SHOP ALL</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#173F70]/60 mb-2 px-1">
              Shop Categories
            </p>
            <div className="space-y-1.5">
              <button
                onClick={() => handleNavClick('shop', 'girls')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-pink-50 text-[#173F70] hover:bg-pink-100 transition-colors"
              >
                <span>🌸 Girls</span>
                <ChevronRight className="w-4 h-4 text-[#D93F92]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'boys')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-blue-50 text-[#173F70] hover:bg-blue-100 transition-colors"
              >
                <span>🧢 Boys</span>
                <ChevronRight className="w-4 h-4 text-[#2563C7]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'baby')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-amber-50 text-[#173F70] hover:bg-amber-100 transition-colors"
              >
                <span>🍼 Baby</span>
                <ChevronRight className="w-4 h-4 text-[#F9C928]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'shoes')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-teal-50 text-[#173F70] hover:bg-teal-100 transition-colors"
              >
                <span>👟 Shoes</span>
                <ChevronRight className="w-4 h-4 text-[#27AFA5]" />
              </button>
              <button
                onClick={() => handleNavClick('shop', 'toys')}
                className="w-full p-2.5 px-3 rounded-xl text-sm font-bold text-left flex items-center justify-between bg-orange-50 text-[#173F70] hover:bg-orange-100 transition-colors"
              >
                <span>🎁 Toys & Gifts</span>
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
        </div>
      )}
    </header>
  );
};
