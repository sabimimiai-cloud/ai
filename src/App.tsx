import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import { RecentlyViewed } from './components/RecentlyViewed';
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
import { OrdersView } from './views/OrdersView';
import { Product, CartItem, ActiveView, ProductCategory, CustomerOrder, AppNavigationState } from './types';
import { PRODUCTS } from './data/products';
import { STORE_CONTACT } from './data/storeData';
import { getStoredCart, saveStoredCart, clearStoredCart, CART_STORAGE_KEY } from './utils/cartStorage';
import { getStoredOrders, saveStoredOrder, ORDERS_STORAGE_KEY } from './utils/orderStorage';
import { MessageSquare, Check, X } from 'lucide-react';

function buildStateUrl(state: AppNavigationState): string {
  const params = new URLSearchParams();
  if (state.view !== 'home') {
    params.set('view', state.view);
  }
  if (state.category && state.category !== 'all') {
    params.set('category', state.category);
  }
  if (state.productId) {
    params.set('product', state.productId);
  }
  if (state.checkoutOpen) {
    params.set('checkout', 'open');
  } else if (state.cartOpen) {
    params.set('cart', 'open');
  }
  const queryString = params.toString();
  return queryString ? `?${queryString}` : window.location.pathname;
}

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

  // Depth tracking for internal vs external history pop
  const depthRef = useRef<number>(0);

  // 1. Cart State - Persistent across reloads, navigation & sessions via buubu_bloom_cart
  const [cartItems, setCartItems] = useState<CartItem[]>(() => getStoredCart());

  // 2. Orders History State - Persistent across sessions via buubu_bloom_orders
  const [orders, setOrders] = useState<CustomerOrder[]>(() => getStoredOrders());

  // Wishlist State with localStorage and catalog hydration
  const [wishlistItems, setWishlistItems] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('buubu_bloom_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed
            .filter((item): item is Product => Boolean(item && item.id))
            .map(item => PRODUCTS.find(p => p.id === item.id) || item);
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  // Recently Viewed Product IDs with localStorage
  const [recentlyViewedIds, setRecentlyViewedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('buubu_bloom_recently_viewed');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter((id): id is string => typeof id === 'string');
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  // Save cart immediately whenever cartItems changes
  useEffect(() => {
    saveStoredCart(cartItems);
  }, [cartItems]);

  // Cross-tab / Window storage synchronization for cart and orders
  useEffect(() => {
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === CART_STORAGE_KEY) {
        setCartItems(getStoredCart());
      } else if (e.key === ORDERS_STORAGE_KEY) {
        setOrders(getStoredOrders());
      }
    };
    window.addEventListener('storage', handleStorageEvent);
    return () => window.removeEventListener('storage', handleStorageEvent);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('buubu_bloom_wishlist', JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlistItems]);

  useEffect(() => {
    try {
      localStorage.setItem('buubu_bloom_recently_viewed', JSON.stringify(recentlyViewedIds));
    } catch (e) {
      console.error('Failed to save recently viewed:', e);
    }
  }, [recentlyViewedIds]);

  // Support shared cart links (?cart=...)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const cartParam = params.get('cart');
      if (cartParam && cartParam !== 'open') {
        const decoded = JSON.parse(decodeURIComponent(cartParam));
        if (Array.isArray(decoded) && decoded.length > 0) {
          const loadedItems: CartItem[] = [];
          decoded.forEach((entry: { id: string; s?: string; c?: string; q?: number }) => {
            const product = PRODUCTS.find(p => p.id === entry.id);
            if (product) {
              loadedItems.push({
                product,
                selectedSize: entry.s || product.sizes[0] || 'Standard',
                selectedColor: entry.c || product.colors[0]?.name || 'Standard',
                quantity: entry.q && entry.q > 0 ? entry.q : 1
              });
            }
          });
          if (loadedItems.length > 0) {
            setCartItems(loadedItems);
            setIsCartOpen(true);
            showToast('Loaded shared cart items');
          }
        }
      }
    } catch (err) {
      console.error('Failed to load shared cart link', err);
    }
  }, []);

  // Initialize Navigation State on initial page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') as ActiveView;
    const initialView: ActiveView = ['home', 'shop', 'about', 'contact', 'gifting', 'orders'].includes(viewParam) 
      ? viewParam 
      : 'home';
    const categoryParam = (params.get('category') as ProductCategory) || 'all';
    const productParam = params.get('product');
    const cartParam = params.get('cart');
    const checkoutParam = params.get('checkout');

    const initialProduct = productParam ? (PRODUCTS.find(p => p.id === productParam) || null) : null;
    const initialCartOpen = cartParam === 'open';
    const initialCheckoutOpen = checkoutParam === 'open';

    const existingDepth = typeof window.history.state?._depth === 'number' ? window.history.state._depth : 0;
    depthRef.current = existingDepth;

    const initialState: AppNavigationState = {
      view: initialView,
      category: categoryParam,
      productId: initialProduct ? initialProduct.id : null,
      cartOpen: initialCartOpen,
      checkoutOpen: initialCheckoutOpen,
      _depth: existingDepth
    };

    window.history.replaceState(initialState, '', window.location.href);

    setActiveView(initialView);
    setSelectedCategory(categoryParam);
    if (initialProduct) setSelectedProduct(initialProduct);
    if (initialCartOpen) setIsCartOpen(true);
    if (initialCheckoutOpen) setIsCheckoutOpen(true);
  }, []);

  // Listen to native Browser Back & Forward events (popstate)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const state = e.state as AppNavigationState | null;
      if (state) {
        if (typeof state._depth === 'number') {
          depthRef.current = state._depth;
        }

        const nextView: ActiveView = state.view || 'home';
        setActiveView(nextView);

        if (state.category) {
          setSelectedCategory(state.category);
        }

        if (state.productId) {
          const found = PRODUCTS.find(p => p.id === state.productId);
          setSelectedProduct(found || null);
        } else {
          setSelectedProduct(null);
        }

        setIsCartOpen(Boolean(state.cartOpen));
        setIsCheckoutOpen(Boolean(state.checkoutOpen));
      } else {
        const params = new URLSearchParams(window.location.search);
        const viewParam = params.get('view') as ActiveView;
        const v: ActiveView = ['home', 'shop', 'about', 'contact', 'gifting', 'orders'].includes(viewParam) 
          ? viewParam 
          : 'home';
        setActiveView(v);
        const cat = (params.get('category') as ProductCategory) || 'all';
        setSelectedCategory(cat);
        const prodId = params.get('product');
        setSelectedProduct(prodId ? (PRODUCTS.find(p => p.id === prodId) || null) : null);
        setIsCartOpen(params.get('cart') === 'open');
        setIsCheckoutOpen(params.get('checkout') === 'open');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Safe Navigation Handler: pushes browser history so Back button restores prior page
  const handleNavigate = useCallback((view: ActiveView, category?: ProductCategory) => {
    const nextCategory = category || (view === 'shop' ? selectedCategory : 'all');
    const nextDepth = depthRef.current + 1;
    depthRef.current = nextDepth;

    const nextState: AppNavigationState = {
      view,
      category: nextCategory,
      productId: null,
      cartOpen: false,
      checkoutOpen: false,
      _depth: nextDepth
    };

    window.history.pushState(nextState, '', buildStateUrl(nextState));

    setActiveView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setSelectedProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Product Selection / Modal Opener
  const handleSelectProduct = useCallback((product: Product | null) => {
    if (product) {
      const nextDepth = depthRef.current + 1;
      depthRef.current = nextDepth;

      const nextState: AppNavigationState = {
        view: activeView,
        category: selectedCategory,
        productId: product.id,
        cartOpen: false,
        checkoutOpen: false,
        _depth: nextDepth
      };

      window.history.pushState(nextState, '', buildStateUrl(nextState));

      setSelectedProduct(product);
      setIsCartOpen(false);
      setIsCheckoutOpen(false);

      setRecentlyViewedIds(prev => {
        const filtered = prev.filter(id => id !== product.id);
        return [product.id, ...filtered].slice(0, 10);
      });
    } else {
      handleCloseProduct();
    }
  }, [activeView, selectedCategory]);

  // Close Product Detail Modal cleanly respecting history
  const handleCloseProduct = useCallback(() => {
    if (depthRef.current > 0) {
      window.history.back();
    } else {
      const nextState: AppNavigationState = {
        view: activeView,
        category: selectedCategory,
        productId: null,
        cartOpen: false,
        checkoutOpen: false,
        _depth: 0
      };
      window.history.replaceState(nextState, '', buildStateUrl(nextState));
      setSelectedProduct(null);
    }
  }, [activeView, selectedCategory]);

  // Open Cart Drawer
  const handleOpenCart = useCallback(() => {
    const nextDepth = depthRef.current + 1;
    depthRef.current = nextDepth;

    const nextState: AppNavigationState = {
      view: activeView,
      category: selectedCategory,
      productId: selectedProduct ? selectedProduct.id : null,
      cartOpen: true,
      checkoutOpen: false,
      _depth: nextDepth
    };

    window.history.pushState(nextState, '', buildStateUrl(nextState));
    setIsCartOpen(true);
    setIsCheckoutOpen(false);
  }, [activeView, selectedCategory, selectedProduct]);

  // Close Cart Drawer cleanly respecting history
  const handleCloseCart = useCallback(() => {
    if (depthRef.current > 0) {
      window.history.back();
    } else {
      const nextState: AppNavigationState = {
        view: activeView,
        category: selectedCategory,
        productId: selectedProduct ? selectedProduct.id : null,
        cartOpen: false,
        checkoutOpen: false,
        _depth: 0
      };
      window.history.replaceState(nextState, '', buildStateUrl(nextState));
      setIsCartOpen(false);
    }
  }, [activeView, selectedCategory, selectedProduct]);

  // Open Checkout Modal
  const handleOpenCheckout = useCallback(() => {
    const nextDepth = depthRef.current + 1;
    depthRef.current = nextDepth;

    const nextState: AppNavigationState = {
      view: activeView,
      category: selectedCategory,
      productId: selectedProduct ? selectedProduct.id : null,
      cartOpen: false,
      checkoutOpen: true,
      _depth: nextDepth
    };

    window.history.pushState(nextState, '', buildStateUrl(nextState));
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }, [activeView, selectedCategory, selectedProduct]);

  // Close Checkout Modal cleanly respecting history
  const handleCloseCheckout = useCallback(() => {
    if (depthRef.current > 0) {
      window.history.back();
    } else {
      const nextState: AppNavigationState = {
        view: activeView,
        category: selectedCategory,
        productId: selectedProduct ? selectedProduct.id : null,
        cartOpen: false,
        checkoutOpen: false,
        _depth: 0
      };
      window.history.replaceState(nextState, '', buildStateUrl(nextState));
      setIsCheckoutOpen(false);
    }
  }, [activeView, selectedCategory, selectedProduct]);

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
    clearStoredCart();
  };

  // Called when customer successfully submits and places their order
  const handleOrderPlaced = (newOrder: CustomerOrder) => {
    const updated = saveStoredOrder(newOrder);
    setOrders(updated);
    handleClearCart();
    showToast(`Order ${newOrder.orderNumber} confirmed & saved to My Orders!`);
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
        ordersCount={orders.length}
        onOpenCart={handleOpenCart}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectProduct={(p) => handleSelectProduct(p)}
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
              onQuickView={(p) => handleSelectProduct(p)}
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
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onNavigate={handleNavigate}
            />

            {/* 5. The Bloom Edit */}
            <TheBloomEdit
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onNavigate={handleNavigate}
            />

            {/* 6. Complete The Look */}
            <CompleteTheLook
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onOpenCart={() => setIsCartOpen(true)}
            />

            {/* 7. Gift Concierge */}
            <GiftingSection 
              onNavigate={handleNavigate} 
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />

            {/* 8. Spotted in Buubu Bloom */}
            <SpottedInBuubuBloom
              onQuickView={(p) => handleSelectProduct(p)}
              onNavigate={handleNavigate}
            />

            {/* 9. Why Buubu Bloom */}
            <BrandStory onNavigate={handleNavigate} />

            {/* 10. Store / Location (Come say hello in Lagos) */}
            <PhysicalStoreSection />

            {/* Fast Dispatch Strip */}
            <DeliveryTrustStrip onNavigate={handleNavigate} />

            {/* Recently Viewed */}
            <RecentlyViewed
              recentProductIds={recentlyViewedIds}
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onClearRecent={() => setRecentlyViewedIds([])}
            />

            {/* 11. Instagram / Social (More Buubu Bloom moments) */}
            <InstagramGrid />

            {/* Common Questions */}
            <FAQSection onNavigate={handleNavigate} />

            {/* 12. Final CTA (Let's get them dressed.) */}
            <FinalCTA onNavigate={handleNavigate} />
          </div>
        )}

        {activeView === 'shop' && (
          <div id="shop-page-view">
            <ShopView
              initialCategory={selectedCategory}
              initialSearchQuery={searchQuery}
              onSelectProduct={(p) => handleSelectProduct(p)}
              onQuickView={(p) => handleSelectProduct(p)}
              onQuickAdd={(p) => handleAddToCart(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
            />

            {/* Recently Viewed in Shop View */}
            <RecentlyViewed
              recentProductIds={recentlyViewedIds}
              onQuickView={(p) => handleSelectProduct(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onClearRecent={() => setRecentlyViewedIds([])}
            />
          </div>
        )}

        {activeView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}

        {activeView === 'orders' && (
          <OrdersView 
            orders={orders}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      {/* Floating WhatsApp Quick Concierge */}
      <a
        id="floating-whatsapp-concierge-btn"
        href={STORE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#27AFA5] hover:bg-[#209086] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 group border-2 border-white cursor-pointer"
        title="Chat with Buubu Bloom on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Need help choosing?
        </span>
      </a>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProduct}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onSelectProduct={handleSelectProduct}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={handleOpenCheckout}
        onNavigateToShop={() => {
          handleCloseCart();
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
        onClose={handleCloseCheckout}
        items={cartItems}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
        onViewOrders={() => handleNavigate('orders')}
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
