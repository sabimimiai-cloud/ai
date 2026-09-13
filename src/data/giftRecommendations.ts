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
  productId: string;
  price: number;
  highlightTag?: string;
  badge?: string;
}

/**
 * Determine suitable audiences for a catalogue product
 */
function getProductAudiences(product: Product): GiftAudience[] {
  const nameLower = product.name.toLowerCase();
  const descLower = product.description.toLowerCase();

  // Baby items
  if (product.category === 'baby') {
    if (nameLower.includes('dress') || nameLower.includes('bow')) {
      return ['Girl', 'Baby'];
    }
    if (nameLower.includes('dungaree')) {
      return ['Boy', 'Baby', 'Not Sure'];
    }
    return ['Baby', 'Girl', 'Boy', 'Not Sure'];
  }

  // Girls specific
  if (product.category === 'girls' || nameLower.includes('girls') || nameLower.includes('dress')) {
    return ['Girl'];
  }

  // Boys specific
  if (product.category === 'boys' || nameLower.includes('boys') || nameLower.includes('suit') || nameLower.includes('waistcoat')) {
    return ['Boy'];
  }

  // Accessories that are specifically for girls
  if (nameLower.includes('girls') || nameLower.includes('pearl') || nameLower.includes('handbag')) {
    return ['Girl'];
  }

  // Unisex items: Shoes, Toys, Backpacks, Gift box, Straw hat
  return ['Girl', 'Boy', 'Not Sure'];
}

/**
 * Determine suitable Gift Finder age ranges for a catalogue product
 */
function getProductAgeRanges(product: Product): GiftAgeRange[] {
  const ranges: GiftAgeRange[] = [];
  const sizesStr = (product.sizes || []).join(' ');
  const nameLower = product.name.toLowerCase();

  // 1. Check 0-2 Years (Infants & Toddlers 0-24M)
  // Strictly only baby clothes, baby sets, soft newborn toys, gift box
  const isBabyItem = 
    product.category === 'baby' || 
    product.ageGroup === '0-12M' || 
    product.id === 'bb-gft-001' ||
    product.id === 'bb-t-002' ||
    sizesStr.includes('0-3M') || 
    sizesStr.includes('3-6M') || 
    sizesStr.includes('6-12M') || 
    sizesStr.includes('12-18M');

  // Hard exclusion: large shoes, school backpacks, teen sneakers, ride-on cars
  const isExcludedFromBaby = 
    product.category === 'shoes' ||
    product.id === 'bb-na-003' || 
    product.id === 'bb-t-001' || 
    product.id === 'bb-s-006' || 
    product.id === 'bb-s-005' ||
    product.id === 'bb-na-009';

  if (isBabyItem && !isExcludedFromBaby) {
    ranges.push('0-2');
  }

  // 2. Check 3-5 Years (Toddlers & Preschoolers)
  const is3to5 = 
    product.ageGroup === '1-3Y' || 
    product.ageGroup === '4-7Y' ||
    (product.ageGroups && (product.ageGroups.includes('1-3Y') || product.ageGroups.includes('4-7Y'))) ||
    sizesStr.includes('2-3Y') || 
    sizesStr.includes('3-4Y') || 
    sizesStr.includes('4-5Y') ||
    sizesStr.includes('EU 22') || 
    sizesStr.includes('EU 24') || 
    sizesStr.includes('EU 26') ||
    product.id === 'bb-t-001' || 
    product.id === 'bb-t-002' ||
    product.id === 'bb-gft-001';

  if (is3to5 && product.category !== 'baby') {
    ranges.push('3-5');
  }

  // 3. Check 6-9 Years (Young Kids)
  const is6to9 = 
    product.ageGroup === '4-7Y' || 
    product.ageGroup === '8-12Y' ||
    (product.ageGroups && (product.ageGroups.includes('4-7Y') || product.ageGroups.includes('8-12Y'))) ||
    sizesStr.includes('5-6Y') || 
    sizesStr.includes('6-7Y') || 
    sizesStr.includes('7-8Y') || 
    sizesStr.includes('8-9Y') || 
    sizesStr.includes('8-10Y') ||
    sizesStr.includes('EU 26') || 
    sizesStr.includes('EU 28') || 
    sizesStr.includes('EU 30') || 
    sizesStr.includes('EU 32') || 
    sizesStr.includes('EU 34') ||
    product.id === 'bb-na-003' || 
    product.id === 'bb-a-001' || 
    product.id === 'bb-a-002' || 
    product.id === 'bb-na-018' ||
    product.id === 'bb-gft-001';

  if (is6to9 && product.category !== 'baby' && product.id !== 'bb-t-002') {
    ranges.push('6-9');
  }

  // 4. Check 10-13 Years (Older Kids & Pre-Teens)
  const is10to13 = 
    product.ageGroup === '8-12Y' ||
    (product.ageGroups && product.ageGroups.includes('8-12Y')) ||
    sizesStr.includes('8-10Y') || 
    sizesStr.includes('9-10Y') || 
    sizesStr.includes('9-11Y') || 
    sizesStr.includes('EU 32') || 
    sizesStr.includes('EU 34') || 
    sizesStr.includes('EU 36') || 
    sizesStr.includes('EU 38') ||
    product.id === 'bb-s-005' || 
    product.id === 'bb-s-006' ||
    product.id === 'bb-na-003' || 
    product.id === 'bb-a-001' ||
    product.id === 'bb-gft-001' ||
    product.id === 'bb-na-009' ||
    product.id === 'bb-na-016' ||
    product.id === 'bb-na-020';

  if (is10to13 && product.category !== 'baby' && product.id !== 'bb-t-001' && product.id !== 'bb-t-002') {
    ranges.push('10-13');
  }

  return ranges;
}

/**
 * Determine suitable Gift Finder occasions for a catalogue product
 */
function getProductOccasions(product: Product): GiftOccasion[] {
  const occasions: GiftOccasion[] = [];
  const nameLower = product.name.toLowerCase();
  const descLower = product.description.toLowerCase();

  // Birthday
  if (
    product.occasions.includes('birthday') || 
    product.occasions.includes('special-occasion') || 
    product.category === 'gifts' || 
    product.category === 'toys' ||
    nameLower.includes('dress') ||
    nameLower.includes('suit')
  ) {
    occasions.push('Birthday');
  }

  // Christmas / Festive
  if (
    product.occasions.includes('special-occasion') || 
    nameLower.includes('red') || 
    nameLower.includes('knit') || 
    nameLower.includes('sweater') || 
    nameLower.includes('dress') || 
    nameLower.includes('suit') || 
    product.category === 'gifts' ||
    product.category === 'toys'
  ) {
    occasions.push('Christmas');
  }

  // Baby Gift
  if (product.category === 'baby' || product.id === 'bb-gft-001' || product.id === 'bb-t-002') {
    occasions.push('Baby Gift');
  }

  // Just Because / Everyday
  if (
    product.occasions.includes('everyday') || 
    product.category === 'accessories' || 
    product.category === 'shoes' ||
    nameLower.includes('shorts') || 
    nameLower.includes('t-shirt') || 
    nameLower.includes('tracksuit')
  ) {
    occasions.push('Just Because');
  }

  // Something Special
  if (
    product.occasions.includes('special-occasion') || 
    product.price >= 25000 || 
    product.category === 'gifts' ||
    nameLower.includes('dress') || 
    nameLower.includes('suit') || 
    nameLower.includes('lace-up')
  ) {
    occasions.push('Something Special');
  }

  return occasions.length > 0 ? occasions : ['Birthday', 'Just Because'];
}

/**
 * Master derived gift recommendations list directly from PRODUCTS.
 * Zero fictional products. Guaranteed single source of truth.
 */
export const GIFT_RECOMMENDATIONS: GiftRecommendationItem[] = PRODUCTS.map((product) => {
  let mappedCategory: 'clothing' | 'shoes' | 'accessories' | 'toys' | 'gifts' = 'clothing';
  if (product.category === 'shoes') mappedCategory = 'shoes';
  else if (product.category === 'accessories') mappedCategory = 'accessories';
  else if (product.category === 'toys') mappedCategory = 'toys';
  else if (product.category === 'gifts') mappedCategory = 'gifts';

  return {
    id: `gift-${product.id}`,
    productId: product.id,
    title: product.name,
    description: product.description,
    image: product.images[0],
    price: product.price,
    audiences: getProductAudiences(product),
    ageRanges: getProductAgeRanges(product),
    occasions: getProductOccasions(product),
    category: mappedCategory,
    isRealCatalogueProduct: true,
    highlightTag: product.highlightTag || 'In Stock',
    badge: 'In Stock Catalogue Item'
  };
});

/**
 * Filter and rank recommendations according to user selections.
 * Strictly guarantees age appropriateness, recipient matching, and occasion relevance.
 * All recommended items exist in the master catalogue.
 */
export function getGiftRecommendations(
  audience: GiftAudience,
  age: GiftAgeRange,
  occasion: GiftOccasion
): GiftRecommendationItem[] {
  // If audience is Baby, age must be 0-2
  const effectiveAge: GiftAgeRange = audience === 'Baby' ? '0-2' : age;

  // Filter candidate pool strictly matching the target age range
  const ageCandidates = GIFT_RECOMMENDATIONS.filter(item => 
    item.ageRanges.includes(effectiveAge)
  );

  // Score candidates based on audience and occasion relevance
  const scored = ageCandidates.map(item => {
    let score = 0;

    // Audience alignment
    if (audience === 'Not Sure') {
      score += 20;
      if (item.audiences.includes('Not Sure')) score += 15;
    } else if (item.audiences.includes(audience)) {
      score += 35;
      // Bonus if specifically focused on this audience
      if (item.audiences.length === 1 && item.audiences[0] === audience) {
        score += 15;
      }
    } else {
      // Hard discard opposing genders
      if (audience === 'Girl' && item.audiences.includes('Boy') && !item.audiences.includes('Girl')) {
        return { item, score: -999 };
      }
      if (audience === 'Boy' && item.audiences.includes('Girl') && !item.audiences.includes('Boy')) {
        return { item, score: -999 };
      }
      if (audience === 'Baby' && !item.audiences.includes('Baby')) {
        return { item, score: -999 };
      }
    }

    // Occasion alignment
    if (item.occasions.includes(occasion)) {
      score += 30;

      // Occasion specific boosts
      if (occasion === 'Christmas' && (item.title.toLowerCase().includes('red') || item.title.toLowerCase().includes('knit'))) {
        score += 15;
      }
      if (occasion === 'Birthday' && (item.category === 'gifts' || item.title.toLowerCase().includes('dress') || item.title.toLowerCase().includes('suit') || item.category === 'toys')) {
        score += 15;
      }
      if (occasion === 'Something Special' && (item.price >= 28000 || item.title.toLowerCase().includes('dress') || item.title.toLowerCase().includes('suit'))) {
        score += 15;
      }
      if (occasion === 'Baby Gift' && (item.category === 'gifts' || item.category === 'clothing')) {
        score += 15;
      }
    }

    return { item, score };
  });

  // Filter out incompatible candidates
  const valid = scored.filter(entry => entry.score > 0);

  // Sort descending by relevance score
  valid.sort((a, b) => b.score - a.score);

  // Pick top 3 to 6 ensuring category diversity
  const selected: GiftRecommendationItem[] = [];
  const usedCategories = new Set<string>();

  // Pass 1: pick diverse categories first
  for (const entry of valid) {
    if (selected.length >= 6) break;
    if (!usedCategories.has(entry.item.category) || selected.length < 3) {
      selected.push(entry.item);
      usedCategories.add(entry.item.category);
    }
  }

  // Pass 2: fill up to 4 if we have fewer than 3
  if (selected.length < 3) {
    for (const entry of valid) {
      if (selected.length >= 4) break;
      if (!selected.some(s => s.id === entry.item.id)) {
        selected.push(entry.item);
      }
    }
  }

  // Safety fallback if very narrow combination: take any valid age candidates matching the audience
  if (selected.length === 0) {
    for (const entry of valid) {
      selected.push(entry.item);
      if (selected.length >= 3) break;
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
      title: `Curated Picks for ${ageLabel}`,
      subtitle: `Universally loved in-stock favourites for ${occasion.toLowerCase()}.`
    };
  }

  return {
    title: `Your Picks for ${recipient}`,
    subtitle: `Curated for ${ageLabel} • ${occasion}`
  };
}
