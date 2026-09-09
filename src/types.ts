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

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  price: number; // in NGN
  originalPrice?: number;
  rating: number;
  reviewCount: number;
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

export type ActiveView = 'home' | 'shop' | 'about' | 'contact' | 'gifting';
