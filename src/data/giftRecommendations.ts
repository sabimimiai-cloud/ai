import { Product } from '../types';
import { PRODUCTS } from './products';

export type GiftAudience = 'Girl' | 'Boy' | 'Baby' | 'Not Sure';
export type GiftAgeRange = '0-2' | '3-5' | '6-9' | '10-13';
export type GiftOccasion = 'Birthday' | 'Christmas' | 'Baby Gift' | 'Just Because' | 'Something Special';

export interface GiftRecommendationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  audiences: GiftAudience[];
  ageRanges: GiftAgeRange[];
  occasions: GiftOccasion[];
  category: 'clothing' | 'shoes' | 'accessories' | 'toys' | 'gifts';
  isRealCatalogueProduct: boolean;
  productId?: string;
  price?: number;
  highlightTag?: string;
  badge?: string;
}

export const GIFT_RECOMMENDATIONS: GiftRecommendationItem[] = [
  // ================= 0-2 YEARS (BABY & TODDLER) =================
  {
    id: 'gift-baby-romper-set',
    title: 'Baby Bow Romper & Bonnet Set',
    description: 'Ultra-soft breathable cotton romper with matching bonnet, gentle on delicate newborn skin.',
    image: '/images/baby_nigerian_romper_1787489085642.jpg',
    audiences: ['Girl', 'Baby', 'Not Sure'],
    ageRanges: ['0-2'],
    occasions: ['Baby Gift', 'Just Because', 'Birthday', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-bb-001',
    price: 19500,
    highlightTag: 'Baby Favourite',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-baby-dungaree-set',
    title: 'Baby Dungarees & T-Shirt Set',
    description: 'Comfy everyday cotton dungarees paired with a soft striped inner tee for playtime & crawling.',
    image: '/images/baby_nigerian_dungaree_1787489143271.jpg',
    audiences: ['Boy', 'Baby', 'Not Sure'],
    ageRanges: ['0-2'],
    occasions: ['Baby Gift', 'Just Because', 'Birthday'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-bb-002',
    price: 18500,
    highlightTag: 'Top Baby Pick',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-baby-red-bow-dress',
    title: 'Baby Red Bow Dress & Headband Set',
    description: 'Festive crimson celebration dress with statement bow details, perfect for holiday photos and milestone celebrations.',
    image: '/images/baby_red_bow_dress.jpg',
    audiences: ['Girl', 'Baby'],
    ageRanges: ['0-2'],
    occasions: ['Christmas', 'Birthday', 'Something Special', 'Baby Gift'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-022',
    price: 21000,
    highlightTag: 'Festive Favourite',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-baby-burgundy-velvet',
    title: 'Baby Burgundy Party Dress Set',
    description: 'Rich burgundy party dress with delicate ruffled hem and matching floral headband.',
    image: '/images/baby_burgundy_dress.jpg',
    audiences: ['Girl', 'Baby'],
    ageRanges: ['0-2'],
    occasions: ['Christmas', 'Something Special', 'Birthday'],
    category: 'clothing',
    isRealCatalogueProduct: false,
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-baby-activity-cube',
    title: 'Wooden Activity Cube',
    description: 'Multi-sided sensory wooden activity cube designed to stimulate motor skills and early curiosity.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    audiences: ['Girl', 'Boy', 'Baby', 'Not Sure'],
    ageRanges: ['0-2'],
    occasions: ['Baby Gift', 'Birthday', 'Christmas', 'Just Because', 'Something Special'],
    category: 'toys',
    isRealCatalogueProduct: true,
    productId: 'bb-t-002',
    price: 26500,
    highlightTag: 'Sensory Toy',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-baby-safari-linen',
    title: 'Linen Shirt & Shorts Set',
    description: 'Lightweight, breathable safari-toned shirt and shorts set for sunny weekend outings.',
    image: '/images/boys_nigerian_safari_1787489099338.jpg',
    audiences: ['Boy', 'Baby'],
    ageRanges: ['0-2'],
    occasions: ['Birthday', 'Something Special', 'Baby Gift', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-b-002',
    price: 24500,
    highlightTag: 'Breathable Linen',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-baby-mary-jane',
    title: 'Glitter Soft-Sole Mary Jane Shoes',
    description: 'Sparkling party shoes with comfortable non-slip sole and secure instep strap.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    audiences: ['Girl', 'Baby'],
    ageRanges: ['0-2'],
    occasions: ['Birthday', 'Christmas', 'Something Special'],
    category: 'shoes',
    isRealCatalogueProduct: true,
    productId: 'bb-s-002',
    price: 18000,
    badge: 'In Stock Catalogue Item'
  },

  // ================= 3-5 YEARS (PRESCHOOLERS) =================
  {
    id: 'gift-girl-pink-bow-dress',
    title: 'Pink Bow Party Dress',
    description: 'Signature layered twirl dress in soft blush pink with satin waist bow. A guaranteed birthday hit.',
    image: '/images/hero_nigerian_girl_1787489055452.jpg',
    audiences: ['Girl'],
    ageRanges: ['3-5'],
    occasions: ['Birthday', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-g-001',
    price: 34500,
    highlightTag: 'Bestseller',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-yellow-tiered',
    title: 'Yellow Tiered Sun Dress',
    description: 'Vibrant sunshine yellow twirl dress crafted from lightweight cotton for lively party twirls.',
    image: '/images/girls_nigerian_yellow_1787489114238.jpg',
    audiences: ['Girl'],
    ageRanges: ['3-5'],
    occasions: ['Birthday', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-g-002',
    price: 29500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-red-floral-christmas',
    title: 'Girls Red Floral Ruffle Dress',
    description: 'Festive red holiday party dress with sculpted floral chest appliqué and layered pleated skirt.',
    image: '/images/girls_floral_dress.jpg',
    audiences: ['Girl'],
    ageRanges: ['3-5', '6-9'],
    occasions: ['Christmas', 'Something Special', 'Birthday'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-014',
    price: 32000,
    highlightTag: 'Holiday Essential',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-pearl-crossbody',
    title: 'Girls Pearl Crossbody Bag',
    description: 'Chic mini structured handbag with faux-pearl beaded top handle and gold shoulder chain.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    audiences: ['Girl'],
    ageRanges: ['3-5', '6-9'],
    occasions: ['Birthday', 'Christmas', 'Something Special', 'Just Because'],
    category: 'accessories',
    isRealCatalogueProduct: true,
    productId: 'bb-a-001',
    price: 12500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-plush-handbag',
    title: 'Small Pastel Plush Handbag',
    description: 'Soft textured mini handbag with pearl handle. A sweet companion for little girls.',
    image: '/images/small_girls_handbag.jpg',
    audiences: ['Girl'],
    ageRanges: ['3-5'],
    occasions: ['Christmas', 'Just Because', 'Birthday'],
    category: 'accessories',
    isRealCatalogueProduct: true,
    productId: 'bb-na-018',
    price: 15500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-denim-two-piece',
    title: 'Boys Denim Two-Piece Set',
    description: 'Classic light-wash denim jacket and matching relaxed jeans set tailored for energetic boys.',
    image: '/images/boys_nigerian_denim_1787489068562.jpg',
    audiences: ['Boy'],
    ageRanges: ['3-5'],
    occasions: ['Birthday', 'Just Because', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-b-001',
    price: 28000,
    highlightTag: 'Store Favourite',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-striped-knit-sweater',
    title: 'Striped Knit Polo Sweater',
    description: 'Cozy deep navy and forest green striped knit sweater with ribbed collar for holiday family gatherings.',
    image: '/images/striped_knit_sweater.jpg',
    audiences: ['Boy', 'Not Sure'],
    ageRanges: ['3-5', '6-9'],
    occasions: ['Christmas', 'Something Special', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-013',
    price: 24500,
    highlightTag: 'Festive Knit',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-red-track-jacket',
    title: 'Kids Red Track Jacket',
    description: 'Bright red zip-up hooded athletic jacket with clean white racing side panels.',
    image: '/images/red_track_jacket_1788991035954.jpg',
    audiences: ['Boy', 'Not Sure'],
    ageRanges: ['3-5', '6-9'],
    occasions: ['Christmas', 'Birthday', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-008',
    price: 29500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-kids-ride-on-car',
    title: 'Kids Electric Ride-On Car',
    description: 'Exciting electric ride-on toy car with working headlights and realistic sound effects.',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80',
    audiences: ['Boy', 'Girl', 'Not Sure'],
    ageRanges: ['3-5'],
    occasions: ['Birthday', 'Christmas', 'Something Special'],
    category: 'toys',
    isRealCatalogueProduct: true,
    productId: 'bb-t-001',
    price: 145000,
    highlightTag: 'Showstopper Gift',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-colorblock-sneakers',
    title: 'Colorblock Kids Sneakers',
    description: 'Durable lightweight trainers with secure velcro straps, cushioned arch support and rubber grip.',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    audiences: ['Boy', 'Girl', 'Not Sure'],
    ageRanges: ['3-5', '6-9'],
    occasions: ['Birthday', 'Christmas', 'Just Because'],
    category: 'shoes',
    isRealCatalogueProduct: true,
    productId: 'bb-s-001',
    price: 22500,
    badge: 'In Stock Catalogue Item'
  },

  // ================= 6-9 YEARS (SCHOOL-AGED KIDS) =================
  {
    id: 'gift-girl-blue-tulle-dress',
    title: 'Blue Floral Tulle Celebration Dress',
    description: 'Sky blue formal party dress with delicate 3D floral embroidery, butterfly sleeves and twirl tulle skirt.',
    image: '/images/blue_flower_dress_1788990935334.jpg',
    audiences: ['Girl'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Something Special', 'Christmas'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-001',
    price: 38500,
    highlightTag: 'Celebration Look',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-peach-ruffle-dress',
    title: 'Peach Floral Ruffle Party Dress',
    description: 'Chic peach floral tier dress with sheer ruffle sleeves and satin sash for festive gatherings.',
    image: '/images/peach_floral_dress.jpg',
    audiences: ['Girl'],
    ageRanges: ['6-9'],
    occasions: ['Christmas', 'Birthday', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-017',
    price: 33500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-denim-vest-set',
    title: 'Denim Vest & Jeans Set',
    description: 'Trendy double-denim set featuring a collared sleeveless vest with matching wide-leg jeans.',
    image: '/images/denim_vest_jeans_set.jpg',
    audiences: ['Girl'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Just Because', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-016',
    price: 33000,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-girl-pink-utility-set',
    title: 'Pink Utility Vest & Cargo Skirt Set',
    description: 'Sporty pink vest with utility flap pockets and matching cargo mini skirt for trendy girls.',
    image: '/images/pink_utility_set.jpg',
    audiences: ['Girl'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-015',
    price: 29500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-pastel-school-backpack',
    title: 'Pastel Kids Backpack',
    description: 'Spacious ergonomic backpack with padded shoulder straps and water-resistant fabric.',
    image: '/images/pink_school_backpack_1788990964231.jpg',
    audiences: ['Girl', 'Not Sure'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Christmas', 'Something Special', 'Just Because'],
    category: 'accessories',
    isRealCatalogueProduct: true,
    productId: 'bb-na-003',
    price: 26000,
    highlightTag: 'Practical & Fun',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-striped-cargo-set',
    title: 'Striped Shirt & Cargo Pants Set',
    description: 'Smart button-down vertical striped shirt paired with tailored tan utility cargo trousers.',
    image: '/images/striped_shirt_cargo_set.jpg',
    audiences: ['Boy'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Christmas', 'Something Special'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-021',
    price: 29000,
    highlightTag: 'Sharp & Stylish',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-suit-set',
    title: 'Boys Waistcoat & Chinos Set',
    description: 'Polished party outfit featuring a tailored waistcoat, collared dress shirt, and smart chinos.',
    image: '/images/boys_nigerian_suit_1787489130668.jpg',
    audiences: ['Boy'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Something Special', 'Christmas'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-b-003',
    price: 36000,
    highlightTag: 'Gentleman Style',
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-tracksuit',
    title: 'Athletic Tracksuit Set',
    description: 'Sleek black training tracksuit with high collar zip jacket and tapered training pants.',
    image: '/images/black_athletic_trackset.jpg',
    audiences: ['Boy', 'Not Sure'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Just Because', 'Christmas'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-020',
    price: 27500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-tan-pocket-tee',
    title: 'Tan Buckle Pocket T-Shirt',
    description: 'Heavyweight cotton t-shirt with tactical buckle chest pocket, easy to mix and match.',
    image: '/images/tan_buckle_tshirt.jpg',
    audiences: ['Boy'],
    ageRanges: ['6-9'],
    occasions: ['Just Because', 'Birthday'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-012',
    price: 16500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-boy-denim-shorts',
    title: 'Denim Cargo Shorts',
    description: 'Durable denim shorts with dual cargo pockets and comfortable adjustable elastic waistband.',
    image: '/images/denim_cargo_shorts.jpg',
    audiences: ['Boy'],
    ageRanges: ['6-9'],
    occasions: ['Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-011',
    price: 18500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-white-fisherman-sandals',
    title: 'White Fisherman Chunky Sandals',
    description: 'Breathable closed-toe summer sandals with flexible cushioned soles for active days.',
    image: '/images/white_chunky_sandals_1788991065781.jpg',
    audiences: ['Girl', 'Boy', 'Not Sure'],
    ageRanges: ['6-9'],
    occasions: ['Birthday', 'Just Because'],
    category: 'shoes',
    isRealCatalogueProduct: true,
    productId: 'bb-na-010',
    price: 24000,
    badge: 'In Stock Catalogue Item'
  },

  // ================= 10-13 YEARS (PRE-TEENS & OLDER KIDS) =================
  {
    id: 'gift-teen-girl-varsity',
    title: 'Pre-Teen Oversized Varsity Jacket & Denim Set',
    description: 'On-trend sage and cream wool-blend varsity bomber jacket paired with relaxed wide-leg light wash jeans.',
    image: '/images/teen_girl_varsity_set.jpg',
    audiences: ['Girl'],
    ageRanges: ['10-13'],
    occasions: ['Something Special', 'Birthday', 'Christmas', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: false,
    highlightTag: 'Pre-Teen Trend',
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-teen-boy-streetwear',
    title: 'Pre-Teen Heavyweight Hoodie & Utility Cargo Set',
    description: 'Streetwear-inspired sand beige drop-shoulder hoodie paired with black tactical cargo joggers.',
    image: '/images/teen_boy_streetwear_set.jpg',
    audiences: ['Boy'],
    ageRanges: ['10-13'],
    occasions: ['Something Special', 'Birthday', 'Christmas', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: false,
    highlightTag: 'Streetwear Style',
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-teen-retro-sneakers',
    title: 'Retro High-Top Basketball Court Sneakers',
    description: 'Iconic retro high-top sneakers in clean white, forest green and black leather panels with cushioned ankle collar.',
    image: '/images/teen_retro_sneakers.jpg',
    audiences: ['Boy', 'Girl', 'Not Sure'],
    ageRanges: ['10-13'],
    occasions: ['Something Special', 'Birthday', 'Christmas', 'Just Because'],
    category: 'shoes',
    isRealCatalogueProduct: false,
    highlightTag: 'Statement Kicks',
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-teen-girl-crossbody',
    title: 'Pre-Teen Quilted Dumpling Crossbody Bag',
    description: 'Modern lilac quilted nylon crossbody bag with wide webbing sport strap and detachable mini zip coin pouch.',
    image: '/images/teen_girl_crossbody.jpg',
    audiences: ['Girl'],
    ageRanges: ['10-13'],
    occasions: ['Birthday', 'Christmas', 'Something Special', 'Just Because'],
    category: 'accessories',
    isRealCatalogueProduct: false,
    highlightTag: 'Trending Accessory',
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-teen-boy-snapback',
    title: 'Streetwear Snapback Cap & Wristband Gift Set',
    description: 'Deep navy structured flat-brim snapback cap with embroidered graphic logo, lanyard and paracord wristband.',
    image: '/images/teen_boy_snapback.jpg',
    audiences: ['Boy', 'Not Sure'],
    ageRanges: ['10-13'],
    occasions: ['Birthday', 'Christmas', 'Something Special', 'Just Because'],
    category: 'accessories',
    isRealCatalogueProduct: false,
    highlightTag: 'Cool Accessories',
    badge: 'Gift Inspiration'
  },
  {
    id: 'gift-teen-denim-jacket',
    title: 'Light-Wash Denim Trucker Jacket',
    description: 'A versatile wardrobe staple crafted from durable washed denim, perfect for layering over tees or hoodies.',
    image: '/images/denim_jacket_kids_1788991023527.jpg',
    audiences: ['Boy', 'Girl', 'Not Sure'],
    ageRanges: ['10-13'],
    occasions: ['Birthday', 'Something Special', 'Christmas', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-007',
    price: 32000,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-teen-pearl-jeans',
    title: 'Grey Denim Pearl Embellished Jeans',
    description: 'Fashion-forward grey wash straight-leg jeans accented with subtle pearl rivet detailing.',
    image: '/images/pearl_embellished_jeans_1788991050032.jpg',
    audiences: ['Girl'],
    ageRanges: ['10-13'],
    occasions: ['Birthday', 'Something Special', 'Just Because'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-009',
    price: 28500,
    badge: 'In Stock Catalogue Item'
  },
  {
    id: 'gift-teen-graphic-tee',
    title: 'Urban Graphic Print T-Shirt',
    description: 'Relaxed fit heavyweight cotton tee with minimalist typography for effortless daily wear.',
    image: '/images/white_graphic_tee_1788991009760.jpg',
    audiences: ['Boy', 'Not Sure'],
    ageRanges: ['10-13'],
    occasions: ['Just Because', 'Birthday'],
    category: 'clothing',
    isRealCatalogueProduct: true,
    productId: 'bb-na-006',
    price: 16500,
    badge: 'In Stock Catalogue Item'
  },

  // ================= UNIVERSAL CELEBRATION BOX =================
  {
    id: 'gift-curated-birthday-box',
    title: 'Buubu Bloom Curated Birthday Gift Box',
    description: 'Deluxe gift hamper box assembled in Lagos. Contains hand-picked outfit pieces and treats tailored to age and size.',
    image: '/images/nigerian_birthday_kids.jpg',
    audiences: ['Girl', 'Boy', 'Baby', 'Not Sure'],
    ageRanges: ['0-2', '3-5', '6-9'],
    occasions: ['Birthday', 'Christmas', 'Something Special', 'Baby Gift'],
    category: 'gifts',
    isRealCatalogueProduct: true,
    productId: 'bb-gft-001',
    price: 45000,
    highlightTag: 'Complete Gift',
    badge: 'In Stock Catalogue Item'
  }
];

/**
 * Filter and rank recommendations according to user selections.
 * Guarantees 3 to 6 high-relevance, age-appropriate results for every combination.
 */
export function getGiftRecommendations(
  audience: GiftAudience,
  age: GiftAgeRange,
  occasion: GiftOccasion
): GiftRecommendationItem[] {
  // If age is 10-13 or 6-9 and audience is Baby, promote audience to Not Sure so older kids never get baby rompers
  const effectiveAudience: GiftAudience = 
    audience === 'Baby' && (age === '10-13' || age === '6-9') ? 'Not Sure' : audience;

  // If Baby is selected and age is 0-2 or 3-5, clamp age to 0-2; if age was explicitly 6-9 or 10-13, respect that older age
  const effectiveAge: GiftAgeRange = 
    audience === 'Baby' && (age === '10-13' || age === '6-9') ? age : (audience === 'Baby' ? '0-2' : age);

  // Filter candidate pool strictly matching the target age range
  const ageMatched = GIFT_RECOMMENDATIONS.filter(item => 
    item.ageRanges.includes(effectiveAge)
  );

  // Score candidate items based on audience and occasion relevance
  const scored = ageMatched.map(item => {
    let score = 0;

    // Audience alignment
    if (effectiveAudience === 'Not Sure') {
      score += 15;
      if (item.audiences.includes('Not Sure')) score += 10;
    } else if (item.audiences.includes(effectiveAudience)) {
      score += 25;
      // Bonus if item is specifically dedicated to this audience
      if (item.audiences.length === 1 && item.audiences[0] === effectiveAudience) {
        score += 10;
      }
    } else {
      // Discard items of opposing gender unless audience is Not Sure
      if (effectiveAudience === 'Girl' && item.audiences.includes('Boy') && !item.audiences.includes('Girl')) {
        score -= 100;
      }
      if (effectiveAudience === 'Boy' && item.audiences.includes('Girl') && !item.audiences.includes('Boy')) {
        score -= 100;
      }
      if (effectiveAudience === 'Baby' && !item.audiences.includes('Baby')) {
        score -= 100;
      }
    }

    // Occasion alignment
    if (item.occasions.includes(occasion)) {
      score += 30;
      // Special occasion specific boosts
      if (occasion === 'Christmas' && item.description.toLowerCase().includes('festive')) {
        score += 15;
      }
      if (occasion === 'Birthday' && (item.category === 'gifts' || item.title.toLowerCase().includes('dress') || item.title.toLowerCase().includes('suit'))) {
        score += 10;
      }
      if (occasion === 'Something Special' && (item.highlightTag?.includes('Showstopper') || item.title.includes('Varsity') || item.title.includes('Streetwear') || item.title.includes('Formal') || item.title.includes('Curated'))) {
        score += 15;
      }
    }

    // Prefer real catalogue items when available
    if (item.isRealCatalogueProduct) {
      score += 5;
    }

    return { item, score };
  });

  // Filter out any incompatible candidates
  const filtered = scored.filter(entry => entry.score > 0);

  // Sort descending by relevance score
  filtered.sort((a, b) => b.score - a.score);

  // Pick top 3 to 6 ensuring category variety
  const selected: GiftRecommendationItem[] = [];
  const usedCategories = new Set<string>();

  // Pass 1: pick diverse categories
  for (const entry of filtered) {
    if (selected.length >= 6) break;
    if (!usedCategories.has(entry.item.category) || selected.length < 3) {
      selected.push(entry.item);
      usedCategories.add(entry.item.category);
    }
  }

  // Pass 2: backfill if we have fewer than 3 items
  if (selected.length < 3) {
    for (const entry of filtered) {
      if (selected.length >= 4) break;
      if (!selected.some(s => s.id === entry.item.id)) {
        selected.push(entry.item);
      }
    }
  }

  // Ultimate fallback safety: never empty! If still fewer than 3, grab any age matched item
  if (selected.length < 3) {
    for (const item of ageMatched) {
      if (!selected.some(s => s.id === item.id)) {
        selected.push(item);
        if (selected.length >= 4) break;
      }
    }
  }

  return selected.slice(0, 6);
}

/**
 * Helper to get a human-friendly personalized headline for the recommendations area
 */
export function getRecommendationHeadline(
  audience: GiftAudience,
  age: GiftAgeRange,
  occasion: GiftOccasion
): { title: string; subtitle: string } {
  let recipient = 'Them';
  if (audience === 'Girl') recipient = 'Her';
  else if (audience === 'Boy') recipient = 'Him';
  else if (audience === 'Baby') recipient = 'Baby';

  const ageLabel = age === '0-2' ? '0–2 years' : age === '3-5' ? '3–5 years' : age === '6-9' ? '6–9 years' : '10–13 years';

  if (audience === 'Not Sure') {
    return {
      title: `Easy Gift Ideas for ${ageLabel}`,
      subtitle: `Not sure what they'll love? Here are universally loved picks for ${occasion.toLowerCase()}.`
    };
  }

  return {
    title: `Your Picks for ${recipient}`,
    subtitle: `Curated for ${ageLabel} • ${occasion}`
  };
}
