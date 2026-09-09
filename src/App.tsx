import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryDiscovery } from './components/CategoryDiscovery';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { ShopByMoment } from './components/ShopByMoment';
import { FeaturedProducts } from './components/FeaturedProducts';
import { TheBloomEdit } from './components/TheBloomEdit';
import { CompleteTheLook } from './components/CompleteTheLook';
import { GiftingSection } from './components/GiftingSection';
import { SpottedInBuubuBloom } from './components/SpottedInBuubuBloom';
import { BrandStory } from './components/BrandStory';
import { PhysicalStoreSection } from './components/PhysicalStoreSection';
import { DeliveryTrustStrip } from './components/DeliveryTrustStrip';
import { InstagramGrid } from './components/InstagramGrid';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ShopView } from './views/ShopView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { Product, CartItem, ActiveView, ProductCategory } from './types';
import { STORE_CONTACT } from './data/storeData';
import { MessageSquare, Check, X } from 'lucide-react';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  
  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart State with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('buubu_bloom_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State with localStorage
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('buubu_bloom_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('buubu_bloom_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('buubu_bloom_wishlist', JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlistItems]);

  // Scroll to top on view change
  const handleNavigate = (view: ActiveView, category?: ProductCategory) => {
    setActiveView(view);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product, 
    selectedSize: string = product.sizes[0] || 'Standard', 
    selectedColor: string = product.colors[0]?.name || 'Standard', 
    quantity: number = 1
  ) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSize, selectedColor, quantity }];
      }
    });

    showToast(`Added "${product.name}" to shopping bag`);
  };

  const handleUpdateCartQuantity = (productId: string, size: string, color: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId, size, color);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        (item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string, size: string, color: string) => {
    setCartItems(prev => 
      prev.filter(item => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color))
    );
    showToast("Item removed from bag");
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved to wishlist`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistIds = wishlistItems.map(item => item.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#172033] font-sans antialiased selection:bg-[#F58220] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          id="global-toast"
          className="fixed bottom-6 left-6 z-50 bg-[#173F70] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="w-6 h-6 rounded-full bg-[#27AFA5] flex items-center justify-center text-white shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeView={activeView}
        selectedCategory={selectedCategory}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        wishlistCount={wishlistItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Main Views */}
      <main className="flex-1">
        {activeView === 'home' && (
          <div id="homepage-view">
            {/* 1. Hero */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Shop By Who You're Shopping For */}
            <CategoryDiscovery 
              onSelectCategory={(cat) => handleNavigate('shop', cat)} 
              onNavigate={handleNavigate}
            />

            {/* 3. NEW ARRIVALS: Just In at Buubu Bloom */}
            <NewArrivalsSection
              onQuickView={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onNavigate={handleNavigate}
            />

            {/* 4. Shop By Occasion / Need */}
            <ShopByMoment 
              onSelectMoment={(momentKey) => handleNavigate('shop')} 
              onNavigate={handleNavigate}
            />

            {/* 4. New Arrivals (Just Bloomed 🌸) */}
            <FeaturedProducts
              onQuickView={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onNavigate={handleNavigate}
            />

            {/* 5. The Bloom Edit */}
            <TheBloomEdit
              onQuickView={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onNavigate={handleNavigate}
            />

            {/* 6. Complete The Look */}
            <CompleteTheLook
              onQuickView={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onOpenCart={() => setIsCartOpen(true)}
            />

            {/* 7. Gift Concierge */}
            <GiftingSection 
              onNavigate={handleNavigate} 
              onQuickView={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />

            {/* 8. Spotted in Buubu Bloom */}
            <SpottedInBuubuBloom
              onQuickView={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
            />

            {/* 9. Why Buubu Bloom */}
            <BrandStory onNavigate={handleNavigate} />

            {/* 10. Store / Location (Come see us in Lagos) */}
            <PhysicalStoreSection />

            {/* Fast Dispatch Strip */}
            <DeliveryTrustStrip onNavigate={handleNavigate} />

            {/* 11. Instagram / Social (More Buubu Bloom moments) */}
            <InstagramGrid />

            {/* Common Questions */}
            <FAQSection onNavigate={handleNavigate} />

            {/* 12. Final CTA (Let's get them dressed.) */}
            <FinalCTA onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'shop' && (
          <ShopView
            initialCategory={selectedCategory}
            initialSearchQuery={searchQuery}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickView={(p) => setSelectedProduct(p)}
            onQuickAdd={(p) => handleAddToCart(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Floating WhatsApp Quick Concierge */}
      <a
        id="floating-whatsapp-concierge-btn"
        href={STORE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#27AFA5] hover:bg-[#209086] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group border-2 border-white"
        title="Chat with Buubu Bloom Stylist on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Styling (0806 014 3654)
        </span>
      </a>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onNavigateToShop={() => {
          setIsCartOpen(false);
          handleNavigate('shop', 'all');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={handleRemoveWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCartDirect={(p) => handleAddToCart(p)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={handleClearCart}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

    </div>
  );
}

export default App;
