import { CartItem } from '../types';
import { PRODUCTS } from '../data/products';

export const CART_STORAGE_KEY = 'buubu_bloom_cart';

/**
 * Safely retrieves and rehydrates the shopping cart from localStorage.
 * Always validates against the catalogue so all product details, images,
 * and current stock status remain fresh while strictly preserving selected
 * size, color, and quantity.
 */
export function getStoredCart(): CartItem[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const validItems: CartItem[] = [];

    for (const item of parsed) {
      if (!item) continue;

      const productId = item.product?.id || item.productId || (typeof item.id === 'string' ? item.id : null);
      if (!productId) continue;

      // Rehydrate product from canonical catalogue ONLY to prevent price or inventory tampering
      const catalogProduct = PRODUCTS.find(p => p.id === productId);
      if (!catalogProduct) continue;
      const product = catalogProduct;

      const quantity = typeof item.quantity === 'number' && Number.isFinite(item.quantity) && item.quantity > 0 
        ? Math.min(99, Math.floor(item.quantity)) 
        : 1;

      const rawSize = typeof item.selectedSize === 'string' ? item.selectedSize.trim() : '';
      const selectedSize = (rawSize && product.sizes?.includes(rawSize))
        ? rawSize
        : (product.sizes?.[0] || 'Standard');

      const rawColor = typeof item.selectedColor === 'string' ? item.selectedColor.trim() : '';
      const selectedColor = (rawColor && product.colors?.some(c => c.name === rawColor))
        ? rawColor
        : (product.colors?.[0]?.name || 'Standard');

      validItems.push({
        product,
        selectedSize,
        selectedColor,
        quantity
      });
    }

    return validItems;
  } catch (err) {
    console.warn('[CartStorage] Failed to read cart from localStorage:', err);
    return [];
  }
}

/**
 * Immediately saves the updated cart to localStorage.
 */
export function saveStoredCart(items: CartItem[]): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    // Sanitize and re-verify items before serialization
    const sanitized = items
      .filter(item => Boolean(item && item.product && item.product.id))
      .map(item => {
        const canonical = PRODUCTS.find(p => p.id === item.product.id);
        return {
          product: canonical || item.product,
          selectedSize: String(item.selectedSize || 'Standard').slice(0, 50),
          selectedColor: String(item.selectedColor || 'Standard').slice(0, 50),
          quantity: Math.min(99, Math.max(1, Math.floor(item.quantity || 1)))
        };
      });

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(sanitized));
  } catch (err) {
    console.error('[CartStorage] Failed to write cart to localStorage:', err);
  }
}

/**
 * Clears the active cart from localStorage upon successful checkout completion.
 */
export function clearStoredCart(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
  } catch (err) {
    console.error('[CartStorage] Failed to clear cart from localStorage:', err);
  }
}
