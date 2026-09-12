export type ProductCategory = 
  | 'all' 
  | 'girls' 
  | 'boys' 
  | 'baby' 
  | 'shoes' 
  | 'accessories' 
  | 'toys' 
  | 'gifts';

export type OccasionMoment = 
  | 'everyday' 
  | 'birthday' 
  | 'special-occasion' 
  | 'gifting';

export type AgeGroup = 
  | '0-12M' 
  | '1-3Y' 
  | '4-7Y' 
  | '8-12Y' 
  | 'all-ages';

export interface BundleItem {
  name: string;
  image?: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  price: number; // in NGN
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  images: string[];
  description: string;
  highlightTag?: string; // e.g. "Trending", "New In", "Birthday Favourite", "Staff Pick"
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isDemonstration?: boolean;
  occasions: OccasionMoment[];
  ageGroup: AgeGroup;
  whatsInside?: BundleItem[];
  details: {
    material: string;
    fit: string;
    care: string;
    inStoreAvailability: string;
  };
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface FilterState {
  category: ProductCategory;
  occasion: string;
  ageGroup: string;
  searchQuery: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'newest';
}

export type ActiveView = 'home' | 'shop' | 'about' | 'contact' | 'gifting' | 'orders';

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  image: string;
}

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  deliveryMethod: 'delivery' | 'pickup';
  deliveryState: string;
  address: string;
  notes?: string;
}

export interface CustomerOrder {
  id: string; // Unique local order ID (e.g. BB-20260912-001)
  orderNumber: string; // Formatted Order Number (#BB-20260912-001)
  createdAt: string; // ISO date string
  formattedDate: string; // e.g. "12 September 2026"
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customer: CustomerDetails;
  status: 'Order Received' | 'Confirmed' | 'Dispatched' | 'Delivered';
}

export interface AppNavigationState {
  view: ActiveView;
  category?: ProductCategory;
  productId?: string | null;
  cartOpen?: boolean;
  checkoutOpen?: boolean;
  _depth?: number;
}
