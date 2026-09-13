import re

with open('src/data/products.ts', 'r') as f:
    text = f.read()

# Replacement footwear block for bb-s-002
new_shoes = '''  {
    id: 'bb-s-003',
    name: 'Classic Black Woven Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 22500,
    rating: 4.8,
    reviewCount: 16,
    images: ['/images/classic_black_sandals.jpg'],
    description: 'Woven criss-cross front straps with cushioned footbeds, non-slip rubber soles, and an adjustable ankle buckle designed for all-day comfort and play.',
    highlightTag: 'Store Favourite',
    sizes: ['EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    colors: [{ name: 'Classic Black', hex: '#111827' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    ageGroups: ['4-7Y', '8-12Y'],
    details: {
      material: 'Durable faux-leather woven straps with flexible cushioned rubber outsole',
      fit: 'Comfortable regular fit with adjustable buckle ankle strap',
      care: 'Wipe clean with a damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-s-004',
    name: 'Blue Strap Comfort Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 21000,
    rating: 4.9,
    reviewCount: 19,
    images: ['/images/blue_strap_sandals.jpg'],
    description: 'Vibrant royal blue and teal dual-strap sandals with secure velcro closures and flexible shock-absorbing soles for active toddlers and kids.',
    highlightTag: 'Everyday Essential',
    sizes: ['EU 22', 'EU 24', 'EU 26', 'EU 28', 'EU 30'],
    colors: [{ name: 'Royal Blue & Teal', hex: '#2563C7' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: false,
    occasions: ['everyday', 'gifting'],
    ageGroup: '1-3Y',
    ageGroups: ['1-3Y', '4-7Y'],
    details: {
      material: 'Padded synthetic straps with quick hook-and-loop velcro and supportive EVA footbed',
      fit: 'Adjustable velcro closure for secure fit on active little feet',
      care: 'Rinse with clean water or wipe with damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-s-005',
    name: 'Junior Formal Lace-Up Shoes',
    category: 'shoes',
    subCategory: 'Formal Shoes',
    price: 26500,
    rating: 4.9,
    reviewCount: 15,
    images: ['/images/junior_formal_shoes.jpg'],
    description: 'Classic cognac derby lace-up dress shoes with premium burnished finish, cushioned memory foam insoles, and durable non-marking soles for weddings and celebrations.',
    highlightTag: 'Occasion Ready',
    sizes: ['EU 30', 'EU 32', 'EU 34', 'EU 36'],
    colors: [{ name: 'Cognac Brown', hex: '#78350F' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    occasions: ['special-occasion', 'birthday', 'gifting'],
    ageGroup: '8-12Y',
    ageGroups: ['4-7Y', '8-12Y'],
    details: {
      material: 'Smooth burnished faux leather upper with memory foam insole and rubber dress sole',
      fit: 'Smart lace-up closure with cushioned heel collar',
      care: 'Wipe clean with a soft dry cloth and buff lightly',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-s-006',
    name: 'Teen Retro Colorblock Sneakers',
    category: 'shoes',
    subCategory: 'Sneakers',
    price: 28000,
    rating: 5.0,
    reviewCount: 18,
    images: ['/images/teen_retro_sneakers.jpg'],
    description: 'Streetwear-inspired colorblock high-traction sneakers with breathable perforated toe box, padded collar, and durable rubber cupsole for older kids and pre-teens.',
    highlightTag: 'Trending Style',
    sizes: ['EU 32', 'EU 34', 'EU 36', 'EU 38'],
    colors: [{ name: 'Multi-Color Retro', hex: '#DC2626' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: false,
    occasions: ['everyday', 'birthday', 'special-occasion'],
    ageGroup: '8-12Y',
    ageGroups: ['8-12Y'],
    details: {
      material: 'Premium synthetic leather panels with breathable mesh lining and rubber traction outsole',
      fit: 'Cushioned high-top athletic fit with lace-up front',
      care: 'Wipe clean with sneaker foam or damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  }'''

# Replace bb-s-002 object with new_shoes
pattern = r"  \{\s*id:\s*'bb-s-002',.*?inStoreAvailability:\s*'In Stock at Galleria Mall, Orchid, Lagos'\s*\}\s*\}"
match = re.search(pattern, text, re.DOTALL)
if match:
    text = text[:match.start()] + new_shoes + text[match.end():]
    print("Replaced bb-s-002 with bb-s-003, bb-s-004, bb-s-005, bb-s-006")
else:
    print("WARNING: Could not find bb-s-002 pattern")

with open('src/data/products.ts', 'w') as f:
    f.write(text)

print("Saved updated src/data/products.ts")
