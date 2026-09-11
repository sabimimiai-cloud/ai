import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bb-g-001',
    name: 'Pink Bow Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 34500,
    originalPrice: 38000,
    rating: 4.9,
    reviewCount: 24,
    images: [
      '/images/hero_nigerian_girl_1787489055452.jpg',
      '/images/editorial_nigerian_twirl_1787489158292.jpg',
      '/images/nigerian_birthday_kids_1787489171127.jpg'
    ],
    description: 'Easy, cute and ready for compliments. Featuring an oversized statement back bow, layered tulle flare, and breathable cotton inner lining so she can twirl all day without itching.',
    highlightTag: 'Birthday Favourite',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [
      { name: 'Bloom Pink', hex: '#F5A6C8' },
      { name: 'Warm Cream', hex: '#FFF4E6' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Premium cotton lining with soft layered organza tulle',
      fit: 'True to size with comfortable elasticated back waist',
      care: 'Hand wash gently in cold water or dry clean. Hang dry away from direct sun.',
      inStoreAvailability: 'Available on display at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-b-001',
    name: 'Boys Denim Two-Piece Set',
    category: 'boys',
    subCategory: 'Sets',
    price: 28000,
    rating: 4.8,
    reviewCount: 19,
    images: [
      '/images/boys_nigerian_denim_1787489068562.jpg',
      '/images/boys_nigerian_safari_1787489099338.jpg'
    ],
    description: 'Something about this one just says main character. A washed soft-denim overshirt paired with tailored elasticated shorts. Soft on the skin, rugged for real play.',
    highlightTag: 'Trending Now',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'],
    colors: [
      { name: 'Vintage Indigo', hex: '#2563C7' },
      { name: 'Sand Washed', hex: '#D7C4B7' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: '100% Breathable Washed Cotton Denim (Pre-softened)',
      fit: 'Relaxed modern fit for active boys',
      care: 'Machine wash cool with like colors. Iron on medium.',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-b-002',
    name: 'Linen Shirt & Shorts Set',
    category: 'boys',
    subCategory: 'Sets',
    price: 24500,
    rating: 5.0,
    reviewCount: 31,
    images: [
      '/images/boys_nigerian_safari_1787489099338.jpg',
      '/images/boys_nigerian_denim_1787489068562.jpg'
    ],
    description: 'For little guys who never sit in one place. Lightweight linen-blend shirt with wooden button detailing paired with versatile safari cargo shorts with real pockets for their mini treasures.',
    highlightTag: 'Staff Pick',
    sizes: ['1-2Y', '2-3Y', '4-5Y', '6-7Y'],
    colors: [
      { name: 'Safari Olive', hex: '#27AFA3' },
      { name: 'Warm Ochre', hex: '#F58220' },
      { name: 'Linen Sand', hex: '#EBE3D5' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '1-3Y',
    details: {
      material: '70% Linen, 30% Fine Cotton',
      fit: 'Tailored casual cut',
      care: 'Gentle cycle, line dry in shade for long lasting softness',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-bb-001',
    name: 'Baby Bow Romper & Bonnet Set',
    category: 'baby',
    subCategory: 'Rompers',
    price: 19500,
    originalPrice: 22000,
    rating: 4.9,
    reviewCount: 42,
    images: [
      '/images/baby_nigerian_romper_1787489085642.jpg',
      '/images/baby_nigerian_dungaree_1787489143271.jpg'
    ],
    description: 'Visiting a newborn or prepping for milestone photos? This pure ribbed cotton heirloom set comes with snap closures at the crotch for quick diaper changes without messing up the look.',
    highlightTag: 'Newborn Gift Must-Have',
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
    colors: [
      { name: 'Sunflower Gold', hex: '#F4C430' },
      { name: 'Dusty Rose', hex: '#F5A6C8' },
      { name: 'Soft Cream', hex: '#FDFBF7' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['gifting', 'special-occasion'],
    ageGroup: '0-12M',
    details: {
      material: '100% GOTS Certified Organic Ribbed Cotton',
      fit: 'Stretchy, ultra-gentle on sensitive baby skin',
      care: 'Machine wash delicate, cool tumble dry',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-s-001',
    name: 'Colorblock Kids Sneakers',
    category: 'shoes',
    subCategory: 'Sneakers',
    price: 22500,
    rating: 4.8,
    reviewCount: 28,
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Because kids sneakers need to survive school, parties and playground sprints while still looking fresh in photos. Cushioned anti-slip soles and easy velcro straps they can put on themselves.',
    highlightTag: 'Best Comfort',
    sizes: ['EU 24', 'EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    colors: [
      { name: 'Buubu Multi-Color', hex: '#2563C7' },
      { name: 'Orange Burst', hex: '#F58220' },
      { name: 'Pure White & Teal', hex: '#27AFA3' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Breathable mesh upper with reinforced rubber bumper and EVA sole',
      fit: 'Wide toe-box design for growing feet',
      care: 'Wipe clean with a damp cloth and mild soap',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-a-001',
    name: 'Girls Pearl Crossbody Bag',
    category: 'accessories',
    subCategory: 'Bags',
    price: 12500,
    rating: 4.9,
    reviewCount: 37,
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The instant outfit finisher. Sized perfectly for little hands to carry lip balm, hair clips, and their little essentials. Features an adjustable pearl-accent strap.',
    highlightTag: 'Cute Accessory',
    sizes: ['One Size'],
    colors: [
      { name: 'Bloom Yellow', hex: '#F4C430' },
      { name: 'Petal Pink', hex: '#F5A6C8' },
      { name: 'Ocean Teal', hex: '#27AFA3' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Soft textured vegan leather with magnetic snap closure',
      fit: 'Compact & lightweight (14cm x 11cm)',
      care: 'Wipe clean with dry or slightly damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-t-001',
    name: 'Kids Electric Ride-On Car',
    category: 'toys',
    subCategory: 'Ride-On Toys',
    price: 145000,
    originalPrice: 160000,
    rating: 5.0,
    reviewCount: 15,
    images: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The showstopper gift that makes everyone gasp when it gets unveiled. Powered by a rechargeable 12V motor, working LED headlights, parent remote control override, and MP3 music connector.',
    highlightTag: 'Grand Birthday Gift',
    sizes: ['Ages 2-6 (Up to 35kg)'],
    colors: [
      { name: 'Signature Navy', hex: '#123B68' },
      { name: 'Vintage Coral', hex: '#F58220' },
      { name: 'Pure Pearl', hex: '#FDFBF7' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['birthday', 'gifting'],
    ageGroup: '1-3Y',
    details: {
      material: 'Reinforced non-toxic ABS polymer body with steel frame chassis',
      fit: 'Single rider seat with adjustable seatbelt',
      care: 'Charge 6-8 hours before first ride. Wipe clean after outdoor use.',
      inStoreAvailability: 'Display unit available to test at Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide shipping.'
    }
  },
  {
    id: 'bb-gft-001',
    name: 'Birthday Gift Hamper',
    category: 'gifts',
    subCategory: 'Gift Sets',
    price: 45000,
    rating: 5.0,
    reviewCount: 48,
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Stop stressing about what to buy. We curated this bestselling box with a statement party outfit, matching accessory, age-appropriate toy, and personalized handwritten birthday card in our gold-embossed Bloom gift box.',
    highlightTag: 'Ready-to-Gift',
    sizes: ['Curated by Age (Select on order)'],
    colors: [
      { name: 'Girls Bloom Theme', hex: '#F5A6C8' },
      { name: 'Boys Explorer Theme', hex: '#2563C7' },
      { name: 'Neutral Joy Theme', hex: '#F4C430' }
    ],
    inStock: true,
    isFeatured: true,
    isDemonstration: true,
    occasions: ['birthday', 'gifting'],
    ageGroup: 'all-ages',
    details: {
      material: 'Luxury rigid keepsake gift box with satin ribbon wrap',
      fit: 'Customizable with child name and sizing',
      care: 'Ready to present upon delivery',
      inStoreAvailability: 'Assembled fresh in-store at Galleria Mall, Orchid'
    }
  },
  {
    id: 'bb-g-002',
    name: 'Yellow Tiered Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 29500,
    rating: 4.8,
    reviewCount: 16,
    images: [
      '/images/girls_nigerian_yellow_1787489114238.jpg',
      '/images/editorial_nigerian_twirl_1787489158292.jpg'
    ],
    description: 'Bright, bold and impossible to miss. Tiered ruffle skirts that flare beautifully when spinning, made from breathable organic poplin cotton that stays crisp throughout the event.',
    highlightTag: 'Sunny Vibe',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [
      { name: 'Bloom Yellow', hex: '#F4C430' },
      { name: 'Royal Navy', hex: '#123B68' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['special-occasion', 'everyday'],
    ageGroup: '4-7Y',
    details: {
      material: '100% Poplin Cotton with soft lining',
      fit: 'A-line flare with gentle boat neck',
      care: 'Machine wash cold inside out, warm iron',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-b-003',
    name: 'Boys Waistcoat & Chinos Set',
    category: 'boys',
    subCategory: 'Sets',
    price: 36000,
    originalPrice: 40000,
    rating: 4.9,
    reviewCount: 22,
    images: [
      '/images/boys_nigerian_suit_1787489130668.jpg',
      '/images/boys_nigerian_safari_1787489099338.jpg'
    ],
    description: 'Because church, weddings and Thanksgiving services need a young man looking dapper. Comes with tailored waistcoat, crisp collared short-sleeve shirt, adjustable chinos and matching bowtie.',
    highlightTag: 'Wedding & Sunday Ready',
    sizes: ['1-2Y', '3-4Y', '5-6Y', '7-8Y'],
    colors: [
      { name: 'Deep Navy & Sand', hex: '#123B68' },
      { name: 'Sage & Cream', hex: '#27AFA3' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Linen-cotton blend tailored for tropical weather',
      fit: 'Classic tailored fit with elastic inner waist adjusters',
      care: 'Dry clean recommended or hand wash with mild detergent',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-bb-002',
    name: 'Baby Dungarees & T-Shirt Set',
    category: 'baby',
    subCategory: 'Sets',
    price: 18500,
    rating: 4.9,
    reviewCount: 27,
    images: [
      '/images/baby_nigerian_dungaree_1787489143271.jpg',
      '/images/baby_nigerian_romper_1787489085642.jpg'
    ],
    description: 'Stretchy canvas overalls featuring wooden button straps paired with an ultra-soft striped inner tee. Built for crawling, tummy time, and receiving endless compliments from family members.',
    highlightTag: 'Sweet Everyday',
    sizes: ['3-6M', '6-12M', '12-18M', '18-24M'],
    colors: [
      { name: 'Warm Terracotta', hex: '#F58220' },
      { name: 'Soft Sage', hex: '#27AFA3' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['everyday', 'gifting'],
    ageGroup: '0-12M',
    details: {
      material: '95% Organic Cotton, 5% Elastane for crawling comfort',
      fit: 'Relaxed room-to-grow fit',
      care: 'Machine wash 30°C, tumble dry low',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-s-002',
    name: 'Glitter Mary Jane Shoes',
    category: 'shoes',
    subCategory: 'Party Shoes',
    price: 18000,
    rating: 4.8,
    reviewCount: 14,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The party shoes that do not pinch. Made with soft padded heel collars, flexible non-slip soles, and secure velcro mary-jane straps that keep the shoes snug during every party dance.',
    highlightTag: 'Party Must',
    sizes: ['EU 22', 'EU 24', 'EU 26', 'EU 28', 'EU 30'],
    colors: [
      { name: 'Champagne Gold', hex: '#F4C430' },
      { name: 'Rose Blossom', hex: '#F5A6C8' },
      { name: 'Midnight Navy', hex: '#123B68' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['special-occasion'],
    ageGroup: '1-3Y',
    details: {
      material: 'Fine glitter coated textile with memory foam padded insole',
      fit: 'Regular to wide fit with adjustable strap',
      care: 'Spot clean with soft dry brush',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-t-002',
    name: 'Wooden Activity Cube',
    category: 'toys',
    subCategory: 'Educational Toys',
    price: 26500,
    rating: 5.0,
    reviewCount: 35,
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Keeps busy hands happily occupied without screens. Features 5 interactive sides: shape sorter, gear cog spin, bead maze, clock dial and abacus counter.',
    highlightTag: 'Screen-Free Play',
    sizes: ['Ages 1-4 Years'],
    colors: [
      { name: 'Pastel Garden', hex: '#27AFA3' },
      { name: 'Bright Bloom', hex: '#F58220' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['birthday', 'gifting'],
    ageGroup: '1-3Y',
    details: {
      material: 'Natural sustainably harvested beechwood with water-based non-toxic paint',
      fit: 'Smooth rounded bevelled edges for maximum toddler safety',
      care: 'Wipe with dry cloth or lightly damp cloth. Keep away from direct water.',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-a-002',
    name: 'Straw Sunhat & Sunglasses Set',
    category: 'accessories',
    subCategory: 'Hats & Sunnies',
    price: 14000,
    rating: 4.9,
    reviewCount: 21,
    images: [
      '/images/editorial_nigerian_twirl_1787489158292.jpg',
      '/images/pink_school_backpack_1788990964231.jpg'
    ],
    description: 'Sunshine ready in seconds. Foldable breathable straw hat with cute pom-pom trim paired with UV400 protective retro cat-eye sunglasses.',
    highlightTag: 'Vacation & Outing',
    sizes: ['Ages 2-8 Years'],
    colors: [
      { name: 'Natural Honey', hex: '#F4C430' },
      { name: 'Soft Blush', hex: '#F5A6C8' }
    ],
    inStock: true,
    isFeatured: false,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Flexible paper straw weave hat with shatterproof polycarbonate UV400 lenses',
      fit: 'Hat circumference 52cm with elastic wind chin strap',
      care: 'Store flat, reshape easily with light steam if compressed',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-001',
    name: 'Blue Floral Tulle Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 38500,
    originalPrice: 42000,
    rating: 5.0,
    reviewCount: 14,
    images: ['/images/blue_flower_dress_1788990935334.jpg'],
    description: 'Pretty, playful and easy to love. This one is for the little girl who likes to stand out, with dimensional 3D flower petals on a sky-blue bodice and a dreamy layered tutu flare.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [{ name: 'Sky Blossom & Pink Tutu', hex: '#68BBE3' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: '3D textile floral applique with soft cotton inner lining and layered organza tutu',
      fit: 'True to size with gentle elastic back for easy fit',
      care: 'Hand wash gently or dry clean. Hang dry away from direct heat.',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-002',
    name: 'Black Floral Ruffle Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 39000,
    rating: 4.9,
    reviewCount: 12,
    images: ['/images/black_flower_dress_1788990950564.jpg'],
    description: 'Bold, modern and unmistakably chic. A sculpted black flower petal top meets a crisp cloud-white ruffle skirt for high-contrast celebrations.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [{ name: 'Monochrome Blossom', hex: '#1C1C1C' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Sculpted 3D floral petals with breathable cotton bodice lining and multi-tier tulle',
      fit: 'Tailored bodice with flared skirt',
      care: 'Dry clean recommended or gentle cold hand wash',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-003',
    name: 'Pastel School Backpack',
    category: 'accessories',
    subCategory: 'Bags',
    price: 26000,
    rating: 5.0,
    reviewCount: 18,
    images: ['/images/pink_school_backpack_1788990964231.jpg'],
    description: 'School runs just got easier. Spacious enough for the things they actually need, with durable buckled front pockets and cushioned shoulder straps.',
    highlightTag: 'New In',
    sizes: ['One Size (School / Outing)'],
    colors: [{ name: 'Pastel Blush Pink', hex: '#F7C6D0' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'gifting'],
    ageGroup: '4-7Y',
    details: {
      material: 'Water-resistant coated nylon canvas with reinforced zippers and buckles',
      fit: 'Padded ergonomic breathable mesh straps with chest clip',
      care: 'Wipe clean with a damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-004',
    name: 'Soft Ribbed Bow Cami Top',
    category: 'girls',
    subCategory: 'Tops',
    price: 12500,
    rating: 4.8,
    reviewCount: 9,
    images: ['/images/pink_sleeveless_top_1788990976043.jpg'],
    description: 'Ultra-soft cotton ribbed tank top finished with neat white contrast picot piping and a dainty front bow. Cool, light, and perfect for hot afternoons.',
    highlightTag: 'New In',
    sizes: ['1-2Y', '2-3Y', '4-5Y', '6-7Y'],
    colors: [
      { name: 'Blush Pink', hex: '#F7C0D0' },
      { name: 'Milk White', hex: '#FFFDF8' }
    ],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '1-3Y',
    details: {
      material: '95% combed breathable ribbed cotton with 5% elastane',
      fit: 'Comfortable relaxed fit with gentle stretch',
      care: 'Machine wash warm, tumble dry low',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-005',
    name: 'Purple Graphic Jersey Tank',
    category: 'boys',
    subCategory: 'Tops',
    price: 18500,
    rating: 5.0,
    reviewCount: 16,
    images: ['/images/purple_six_seven_top_1788990994312.jpg'],
    description: 'Six Seven is having a moment. Your little one can rock it too. Vibrant purple jersey with bold cartoon characters, gold chain graphics, and cool summer energy.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-11Y'],
    colors: [{ name: 'Grape Purple', hex: '#7C3AED' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Breathable sports mesh jersey with durable high-density screen print',
      fit: 'Boxy streetwear fit for active play',
      care: 'Machine wash cold inside out. Iron reverse side.',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-006',
    name: 'White Graphic T-Shirt',
    category: 'boys',
    subCategory: 'T-Shirts',
    price: 16500,
    rating: 4.9,
    reviewCount: 11,
    images: ['/images/white_graphic_tee_1788991009760.jpg'],
    description: 'A clean white heavy cotton tee with tactile 3D embossed red graphics. Feels super soft on active boys and looks effortlessly sharp.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'],
    colors: [{ name: 'Optic White & Scarlet', hex: '#FFFFFF' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: '100% 240gsm premium heavyweight combed cotton',
      fit: 'Relaxed drop-shoulder cut',
      care: 'Hand or gentle machine wash. Do not iron directly on 3D print.',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-007',
    name: 'Light-Wash Denim Jacket',
    category: 'boys',
    subCategory: 'Jackets',
    price: 32000,
    rating: 5.0,
    reviewCount: 15,
    images: ['/images/denim_jacket_kids_1788991023527.jpg'],
    description: 'A wardrobe staple that goes over literally everything. Soft vintage wash denim, durable brass buttons, and deep pockets for their little treasures.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y', '11-12Y'],
    colors: [{ name: 'Vintage Stone Blue', hex: '#8EADC7' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: '100% washed cotton denim with antique brass hardware',
      fit: 'Classic trucker fit with room for layering',
      care: 'Machine wash cold with similar colours',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-008',
    name: 'Red Hooded Jacket',
    category: 'boys',
    subCategory: 'Jackets',
    price: 29500,
    rating: 4.8,
    reviewCount: 13,
    images: ['/images/red_track_jacket_1788991035954.jpg'],
    description: 'Vibrant red with clean white racing stripes and a front zip pouch. Light enough for the afternoon breeze, bold enough for every outing.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [{ name: 'Crimson Red', hex: '#DC2626' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Lightweight ripstop wind-resistant nylon with breathable soft mesh lining',
      fit: 'Athletic cut with elasticated cuffs and hem',
      care: 'Gentle wash cycle, hang dry quickly',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-009',
    name: 'Grey Denim Jeans',
    category: 'girls',
    subCategory: 'Jeans',
    price: 28500,
    rating: 5.0,
    reviewCount: 17,
    images: ['/images/pearl_embellished_jeans_1788991050032.jpg'],
    description: 'Dark washed grey denim with relaxed flare fit and sparkling rhinestone starburst crystal embellishments along the hem.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-11Y'],
    colors: [{ name: 'Washed Grey Denim', hex: '#4B5563' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Soft durable washed cotton denim with rivet-secured crystal rhinestones',
      fit: 'Comfortable flare fit with adjustable inner waistband',
      care: 'Hand wash inside out to protect embellishments',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-010',
    name: 'White Fisherman Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 24000,
    rating: 4.9,
    reviewCount: 22,
    images: ['/images/white_chunky_sandals_1788991065781.jpg'],
    description: 'Modern, grippy, and built for active feet. Padded crossover straps with a lightweight chunky lug sole that pairs with dresses or shorts alike.',
    highlightTag: 'New In',
    sizes: ['EU 24', 'EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    colors: [{ name: 'Cloud White', hex: '#F8F9FA' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Premium wipe-clean faux leather upper with cushioned EVA lug outsole',
      fit: 'Adjustable hook-and-loop velcro ankle strap',
      care: 'Wipe clean with a damp cloth or shoe sponge',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-011',
    name: 'Purple Kids Sneakers',
    category: 'shoes',
    subCategory: 'Sneakers',
    price: 26500,
    rating: 4.9,
    reviewCount: 19,
    images: ['/images/purple_kids_sneakers.jpg'],
    description: 'Lilac purple and crisp white high-top sneakers with cushioned ankle collar, purple laces, and cartoon bunny character tongue badge.',
    highlightTag: 'New In',
    sizes: ['EU 25', 'EU 27', 'EU 29', 'EU 31', 'EU 33'],
    colors: [{ name: 'Lilac & White', hex: '#A78BFA' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Breathable canvas and PU overlays with durable rubber cupsole',
      fit: 'Secure lace-up with padded tongue and collar',
      care: 'Wipe clean with a damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-012',
    name: 'Gold Strap Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 22000,
    rating: 4.8,
    reviewCount: 15,
    images: ['/images/gold_strap_sandals.jpg'],
    description: 'Metallic gold multi-strap gladiator sandals with cushioned footbed, secure ankle buckle fastening, and lightweight white walking sole.',
    highlightTag: 'New In',
    sizes: ['EU 24', 'EU 26', 'EU 28', 'EU 30', 'EU 32'],
    colors: [{ name: 'Metallic Gold', hex: '#D4AF37' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Shimmering metallic gold faux leather with flexible anti-slip rubber outsole',
      fit: 'Adjustable ankle strap with metal buckle',
      care: 'Gently wipe with a soft dry cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-013',
    name: 'Black Kids Boots',
    category: 'shoes',
    subCategory: 'Boots',
    price: 31000,
    rating: 5.0,
    reviewCount: 24,
    images: ['/images/black_kids_boots.jpg'],
    description: 'High-shine black patent combat boots featuring lace-up front, silver star stud embellishments, easy side-zip closure, and rugged lug sole.',
    highlightTag: 'New In',
    sizes: ['EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    colors: [{ name: 'Glossy Black', hex: '#18181B' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Glossy patent polyurethane with silver-tone metal star rivets and cleated lug sole',
      fit: 'Front lace-up with inside zipper for quick on and off',
      care: 'Wipe clean with a damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-014',
    name: 'Black Fisherman Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 19500,
    rating: 4.7,
    reviewCount: 11,
    images: ['/images/black_fisherman_sandals.jpg'],
    description: 'Glossy black woven caged fisherman sandals with adjustable ankle strap, metal buckle, and durable traction outsole.',
    highlightTag: 'New In',
    sizes: ['EU 24', 'EU 26', 'EU 28', 'EU 30', 'EU 32'],
    colors: [{ name: 'Glossy Black', hex: '#0F172A' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Water-resistant durable molded jelly material with cushioned footbed',
      fit: 'Adjustable metal buckle ankle strap',
      care: 'Rinse with clean water and dry in the shade',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-015',
    name: 'Navy Sport Strap Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 21500,
    rating: 4.8,
    reviewCount: 14,
    images: ['/images/navy_sport_strap_sandals.jpg'],
    description: 'Navy blue and white active sports sandals with dual hook-and-loop velcro straps, sporty Fashion badge, and lightweight shock-absorbing sole.',
    highlightTag: 'New In',
    sizes: ['EU 25', 'EU 27', 'EU 29', 'EU 31', 'EU 33'],
    colors: [{ name: 'Navy & White', hex: '#1E3A8A' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Durable nylon webbing straps with padded neoprene lining and EVA foam sole',
      fit: 'Dual adjustable velcro straps across toe and ankle',
      care: 'Hand wash with mild soap and air dry',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-016',
    name: 'White DO IT Slide Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 18000,
    rating: 4.6,
    reviewCount: 12,
    images: ['/images/white_doit_slide_sandals.jpg'],
    description: 'Slip-on white slide sandals with contoured caramel brown footbed and bold red DO IT graphic lettering on the wide strap.',
    highlightTag: 'New In',
    sizes: ['EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    colors: [{ name: 'White & Brown', hex: '#F9FAFB' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Molded EVA foam sole with soft padded synthetic leather footbed strap',
      fit: 'Standard slip-on fit',
      care: 'Wipe clean with a damp cloth',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-017',
    name: 'Red & White Sports Jersey',
    category: 'boys',
    subCategory: 'Tops',
    price: 19500,
    rating: 4.9,
    reviewCount: 18,
    images: ['/images/red_white_sports_jersey.jpg'],
    description: 'Breathable athletic mesh sports jersey with ribbed V-neck, red, white, and navy contrast panels, and New City Vanguard 10 graphic numbering.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y', '11-12Y'],
    colors: [{ name: 'Red & White', hex: '#DC2626' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: '100% moisture-wicking athletic polyester mesh',
      fit: 'Relaxed athletic jersey cut',
      care: 'Machine wash warm, tumble dry low',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-018',
    name: 'Canvas Mommy Bag & Pouch Set',
    category: 'accessories',
    subCategory: 'Bags',
    price: 42000,
    rating: 5.0,
    reviewCount: 28,
    images: ['/images/canvas_mommy_bag_set.jpg'],
    description: 'Spacious cream canvas tote bag with tan faux-leather handles, navy MOMMY BAG and BABY NECESSITIES typography, and matching zipper essentials pouch.',
    highlightTag: 'New In',
    sizes: ['One Size'],
    colors: [{ name: 'Cream Canvas & Tan', hex: '#FEFCE8' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['everyday', 'gifting'],
    ageGroup: 'all-ages',
    details: {
      material: 'Heavy-duty 16oz cotton canvas with reinforced faux-leather handles and base studs',
      fit: 'Generous multi-pocket interior with zip closure and matching pouch',
      care: 'Spot clean canvas with mild detergent',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-019',
    name: 'Black Rhinestone Collar Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 33000,
    rating: 4.9,
    reviewCount: 16,
    images: ['/images/black_rhinestone_collar_dress.jpg'],
    description: 'Chic black party dress featuring modern cold-shoulder cutout sleeves and a dazzling crystal rhinestone-embellished collar for evening celebrations.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [{ name: 'Black & Crystal', hex: '#09090B' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['special-occasion', 'birthday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Smooth crepe fabric with soft cotton lining and heat-set rhinestone crystals',
      fit: 'A-line silhouette with cold-shoulder sleeve cutouts and rear invisible zipper',
      care: 'Hand wash cold inside out, dry flat',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-020',
    name: 'Light Blue Peplum Shirt',
    category: 'girls',
    subCategory: 'Shirts',
    price: 21500,
    rating: 4.8,
    reviewCount: 14,
    images: ['/images/light_blue_peplum_shirt.jpg'],
    description: 'Sky blue long-sleeve collared button-down shirt designed with clean front button placket and a flared peplum flounce hem.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [{ name: 'Sky Blue', hex: '#BAE6FD' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: '100% breathable poplin cotton',
      fit: 'Tailored fit through the body with a flared ruffled peplum waist',
      care: 'Machine wash warm, iron on medium setting',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-021',
    name: 'Jordan 23 T-Shirt',
    category: 'boys',
    subCategory: 'T-Shirts',
    price: 17500,
    rating: 5.0,
    reviewCount: 25,
    images: ['/images/jordan_23_tshirt.jpg'],
    description: 'Heather sky-blue combed cotton crewneck tee featuring vintage collegiate Jordan 23 lettering and Jumpman silhouette graphic.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    colors: [{ name: 'Heather Sky Blue', hex: '#93C5FD' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: '100% premium combed cotton jersey',
      fit: 'Standard relaxed crewneck fit',
      care: 'Machine wash cold inside out, tumble dry low',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-022',
    name: 'Pink Ruffle Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 36000,
    rating: 5.0,
    reviewCount: 31,
    images: ['/images/pink_ruffle_dress.jpg'],
    description: 'Soft blush pink dress styled with cascading horizontal tiers of airy tulle ruffles designed for twirl-ready birthday celebrations.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '3-4Y', '5-6Y', '7-8Y'],
    colors: [{ name: 'Blush Pink', hex: '#FBCFE8' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['special-occasion', 'birthday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Layered soft organza tulle with 100% breathable cotton inner lining',
      fit: 'Tiered silhouette with back zip closure',
      care: 'Gentle hand wash in cold water, hang dry',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-023',
    name: 'Blue Toile Print Shirt',
    category: 'boys',
    subCategory: 'Shirts',
    price: 22500,
    rating: 4.8,
    reviewCount: 16,
    images: ['/images/blue_toile_print_shirt.jpg'],
    description: 'Crisp short-sleeve resort collar button-down shirt patterned with detailed blue and white architectural toile illustrations.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'],
    colors: [{ name: 'Blue & White Toile', hex: '#60A5FA' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: 'Lightweight viscose-cotton blend with subtle natural sheen',
      fit: 'Resort open camp collar with relaxed straight hem',
      care: 'Machine wash cold on gentle cycle, cool iron',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-024',
    name: 'Baby Heart Romper & Headband Set',
    category: 'baby',
    subCategory: 'Rompers',
    price: 18500,
    rating: 5.0,
    reviewCount: 21,
    images: ['/images/baby_heart_romper_set.jpg'],
    description: 'Sweet cream ribbed cotton short-sleeve baby romper patterned with all-over red hearts, dual waist bows, and matching red bow headband.',
    highlightTag: 'New In',
    sizes: ['0-3M', '3-6M', '6-12M', '12-18M'],
    colors: [{ name: 'Cream & Red', hex: '#FFFBEB' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    occasions: ['everyday', 'gifting'],
    ageGroup: '0-12M',
    details: {
      material: '95% soft ribbed cotton, 5% elastane with nickel-free snaps along inner leg',
      fit: 'Stretchy romper fit with elasticated leg openings',
      care: 'Machine wash warm with baby-safe detergent',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-025',
    name: 'Baby Floral Ruffle Two-Piece Set',
    category: 'baby',
    subCategory: 'Sets',
    price: 24000,
    rating: 4.9,
    reviewCount: 19,
    images: ['/images/baby_floral_ruffle_set.jpg'],
    description: 'Two-piece baby outfit with cream ribbed flutter-sleeve top reading I got it from my mama, paired with floral layered ruffle bloomer skirt with center bow.',
    highlightTag: 'New In',
    sizes: ['3-6M', '6-12M', '12-18M', '18-24M'],
    colors: [{ name: 'Cream & Floral Green', hex: '#FEF3C7' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'gifting'],
    ageGroup: '0-12M',
    details: {
      material: 'Ribbed cotton jersey top with woven cotton floral bloomer skirt and elastic waistband',
      fit: 'Comfortable two-piece set with snap shoulder for easy dressing',
      care: 'Machine wash gentle, tumble dry low',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-026',
    name: 'Green Floral Tulle Two-Piece Set',
    category: 'baby',
    subCategory: 'Sets',
    price: 26000,
    rating: 4.9,
    reviewCount: 17,
    images: ['/images/green_floral_tulle_set.jpg'],
    description: 'Rich forest green ribbed long-sleeve top with I got it from my mama graphic, paired with a floral print tiered tulle skirt and satin waist ribbon.',
    highlightTag: 'New In',
    sizes: ['6-12M', '1-2Y', '2-3Y', '3-4Y'],
    colors: [{ name: 'Forest Green & Floral', hex: '#15803D' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '1-3Y',
    details: {
      material: 'Ribbed modal-cotton top with layered floral tulle skirt lined in soft cotton',
      fit: 'Long-sleeve top and elastic waistband skirt',
      care: 'Hand wash recommended or gentle machine cycle in mesh wash bag',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-027',
    name: 'Black Sparkle Graphic T-Shirt',
    category: 'boys',
    subCategory: 'T-Shirts',
    price: 16500,
    rating: 4.8,
    reviewCount: 13,
    images: ['/images/black_sparkle_graphic_tshirt.jpg'],
    description: 'Black combed cotton crewneck tee detailed with fine micro-rhinestone gold and silver galaxy star spray across the chest.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'],
    colors: [{ name: 'Black & Gold Star', hex: '#18181B' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday', 'special-occasion'],
    ageGroup: '4-7Y',
    details: {
      material: '100% combed cotton jersey with heat-bonded metallic studs',
      fit: 'Regular unisex crewneck cut',
      care: 'Wash inside out in cold water, hang dry away from direct heat',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-028',
    name: 'Bear Ears Bucket Hat',
    category: 'accessories',
    subCategory: 'Hats',
    price: 12500,
    rating: 5.0,
    reviewCount: 22,
    images: ['/images/bear_ears_bucket_hat.jpg'],
    description: 'Soft cotton sun bucket hat accented with 3D teddy bear ears and cheerful embroidered bear face for everyday sun protection.',
    highlightTag: 'New In',
    sizes: ['One Size (48-52cm)'],
    colors: [{ name: 'Sky Blue', hex: '#BAE6FD' }, { name: 'Warm Beige', hex: '#E7D8C9' }, { name: 'Soft Butter', hex: '#FEF08A' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '1-3Y',
    details: {
      material: '100% soft breathable cotton twill with lightweight cotton lining',
      fit: 'Comfortable pull-on bucket hat with UPF 30+ sun protection',
      care: 'Spot clean or gentle hand wash',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-029',
    name: 'Pink Bunny Baseball Cap',
    category: 'accessories',
    subCategory: 'Hats',
    price: 13500,
    rating: 4.9,
    reviewCount: 18,
    images: ['/images/pink_bunny_baseball_cap.jpg'],
    description: 'Pastel pink structured baseball cap with attached 3D plush bunny mascot and illustrated cheerful character designs on the curved brim.',
    highlightTag: 'New In',
    sizes: ['One Size (Adjustable)'],
    colors: [{ name: 'Pastel Pink', hex: '#FBCFE8' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    occasions: ['everyday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Durable cotton canvas with plush 3D bunny applique and curved visor',
      fit: 'Adjustable velcro back strap fits head circumference 50-54cm',
      care: 'Spot clean with damp sponge',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  }
];

export const NEW_ARRIVALS_PRODUCTS: Product[] = PRODUCTS.filter(p => p.isNewArrival);

