import { CustomerOrder, CartItem, CustomerDetails, OrderItem } from '../types';

export const ORDERS_STORAGE_KEY = 'buubu_bloom_orders';

/**
 * Retrieves customer orders from localStorage.
 * Strictly returns customer-created orders — no fake or placeholder orders.
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

  const orderItems: OrderItem[] = items.map(item => ({
    productId: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
    selectedSize: item.selectedSize,
    selectedColor: item.selectedColor,
    image: item.product.images?.[0] || ''
  }));

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const total = subtotal + deliveryFee;

  return {
    id,
    orderNumber,
    createdAt: now.toISOString(),
    formattedDate,
    items: orderItems,
    subtotal,
    deliveryFee,
    total,
    customer,
    status: 'Order Received'
  };
}
