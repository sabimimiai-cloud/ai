import { CustomerOrder, CartItem, CustomerDetails, OrderItem } from '../types';
import { PRODUCTS } from '../data/products';

export const ORDERS_STORAGE_KEY = 'buubu_bloom_orders';

/**
 * Retrieves customer orders from localStorage.
 * Strictly returns customer-created orders, no fake or placeholder orders.
 */
export function getStoredOrders(): CustomerOrder[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((order): order is CustomerOrder => 
      Boolean(order && order.id && order.orderNumber && Array.isArray(order.items))
    );
  } catch (err) {
    console.warn('[OrderStorage] Failed to read orders from localStorage:', err);
    return [];
  }
}

/**
 * Prepends a newly completed order to the persistent customer order history.
 */
export function saveStoredOrder(order: CustomerOrder): CustomerOrder[] {
  if (typeof window === 'undefined' || !window.localStorage) {
    return [order];
  }

  try {
    const existing = getStoredOrders();
    // Prevent duplicate orders
    const exists = existing.some(o => o.id === order.id);
    const updated = exists ? existing : [order, ...existing];
    window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('[OrderStorage] Failed to save order to localStorage:', err);
    return [order];
  }
}

/**
 * Generates a unique local order ID formatted specifically for Buubu Bloom local orders.
 * Example: ID: "BB-20260912-841", Order Number: "#BB-20260912-841"
 */
export function generateLocalOrderId(): { id: string; orderNumber: string } {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const randomSuffix = Math.floor(100 + Math.random() * 900); // 3-digit random number
  const id = `BB-${year}${month}${day}-${randomSuffix}`;
  return {
    id,
    orderNumber: `#${id}`
  };
}

/**
 * Converts an active cart and customer details into a persistent CustomerOrder record.
 */
export function createCustomerOrderFromCart(
  items: CartItem[],
  customer: CustomerDetails,
  deliveryFee: number
): CustomerOrder {
  const { id, orderNumber } = generateLocalOrderId();
  const now = new Date();

  const formattedDate = now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const sanitizedCustomer: CustomerDetails = {
    fullName: String(customer.fullName || 'Customer').slice(0, 100).trim(),
    phoneNumber: String(customer.phoneNumber || 'Not provided').slice(0, 30).trim(),
    deliveryMethod: customer.deliveryMethod === 'pickup' ? 'pickup' : 'delivery',
    deliveryState: String(customer.deliveryState || '').slice(0, 100).trim(),
    address: String(customer.address || '').slice(0, 300).trim(),
    notes: customer.notes ? String(customer.notes).slice(0, 500).trim() : undefined
  };

  const orderItems: OrderItem[] = items.map(item => {
    // Canonical price from catalog prevents price tampering
    const catalogProduct = PRODUCTS.find(p => p.id === item.product.id);
    const verifiedProduct = catalogProduct || item.product;
    const cleanQty = typeof item.quantity === 'number' && Number.isFinite(item.quantity) && item.quantity > 0
      ? Math.min(99, Math.floor(item.quantity))
      : 1;

    return {
      productId: verifiedProduct.id,
      name: verifiedProduct.name,
      price: verifiedProduct.price,
      quantity: cleanQty,
      selectedSize: String(item.selectedSize || 'Standard').slice(0, 50),
      selectedColor: String(item.selectedColor || 'Standard').slice(0, 50),
      image: verifiedProduct.images?.[0] || ''
    };
  });

  const subtotal = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cleanDeliveryFee = typeof deliveryFee === 'number' && Number.isFinite(deliveryFee) && deliveryFee >= 0
    ? Math.floor(deliveryFee)
    : 0;
  const total = subtotal + cleanDeliveryFee;

  return {
    id,
    orderNumber,
    createdAt: now.toISOString(),
    formattedDate,
    items: orderItems,
    subtotal,
    deliveryFee: cleanDeliveryFee,
    total,
    customer: sanitizedCustomer,
    status: 'Order Received'
  };
}
