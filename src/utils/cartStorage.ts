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
      if (!item || !item.product || typeof item.product.id !== 'string') {
        continue;
      }

      // Rehydrate product from canonical catalogue or fallback to saved snapshot
      const catalogProduct = PRODUCTS.find(p => p.id === item.product.id);
      const product = catalogProduct || item.product;

      const quantity = typeof item.quantity === 'number' && item.quantity > 0 
        ? Math.floor(item.quantity) 
        : 1;

      const selectedSize = typeof item.selectedSize === 'string' && item.selectedSize.trim() !== ''
        ? item.selectedSize
        : (product.sizes?.[0] || 'Standard');

      const selectedColor = typeof item.selectedColor === 'string' && item.selectedColor.trim() !== ''
        ? item.selectedColor
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
    // Sanitize items before serialization
    const sanitized = items
      .filter(item => Boolean(item && item.product && item.product.id))
      .map(item => ({
        product: item.product,
        selectedSize: item.selectedSize || 'Standard',
        selectedColor: item.selectedColor || 'Standard',
        quantity: Math.max(1, Math.floor(item.quantity || 1))
      }));

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
