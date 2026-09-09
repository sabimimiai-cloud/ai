import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bb-g-001',
    name: 'Petal Pink Bow Party Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 34500,
    originalPrice: 38000,
    rating: 4.9,
    reviewCount: 24,
    images: [
      '/src/assets/images/hero_nigerian_girl_1787489055452.jpg',
      '/src/assets/images/editorial_nigerian_twirl_1787489158292.jpg',
      '/src/assets/images/nigerian_birthday_kids_1787489171127.jpg'
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
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Mini Denim Two-Piece Street Set',
    category: 'boys',
    subCategory: 'Sets',
    price: 28000,
    rating: 4.8,
    reviewCount: 19,
    images: [
      '/src/assets/images/boys_nigerian_denim_1787489068562.jpg',
      '/src/assets/images/boys_nigerian_safari_1787489099338.jpg'
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
    occasions: ['everyday', 'birthday'],
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
    name: 'Little Explorer Safari Two-Piece',
    category: 'boys',
    subCategory: 'Sets',
    price: 24500,
    rating: 5.0,
    reviewCount: 31,
    images: [
      '/src/assets/images/boys_nigerian_safari_1787489099338.jpg',
      '/src/assets/images/boys_nigerian_denim_1787489068562.jpg'
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
    name: 'Classic Baby Bow Romper & Bonnet Set',
    category: 'baby',
    subCategory: 'Rompers',
    price: 19500,
    originalPrice: 22000,
    rating: 4.9,
    reviewCount: 42,
    images: [
      '/src/assets/images/baby_nigerian_romper_1787489085642.jpg',
      '/src/assets/images/baby_nigerian_dungaree_1787489143271.jpg'
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
    name: 'Colorblock Street-Cool Kids Sneakers',
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
    occasions: ['everyday', 'birthday'],
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
    name: 'Mini Fashionista Crossbody Bag',
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
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Bloom Mini Vintage Electric Ride-On Cruiser',
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
    name: 'The Ultimate Birthday Celebration Hamper',
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
    name: 'Sunshine Yellow Tiered Twirl Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 29500,
    rating: 4.8,
    reviewCount: 16,
    images: [
      '/src/assets/images/girls_nigerian_yellow_1787489114238.jpg',
      '/src/assets/images/editorial_nigerian_twirl_1787489158292.jpg'
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
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Little Gentleman Linen Waistcoat & Chino Set',
    category: 'boys',
    subCategory: 'Sets',
    price: 36000,
    originalPrice: 40000,
    rating: 4.9,
    reviewCount: 22,
    images: [
      '/src/assets/images/boys_nigerian_suit_1787489130668.jpg',
      '/src/assets/images/boys_nigerian_safari_1787489099338.jpg'
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
    name: 'Safari Explorer Baby Dungaree & Tee Duo',
    category: 'baby',
    subCategory: 'Sets',
    price: 18500,
    rating: 4.9,
    reviewCount: 27,
    images: [
      '/src/assets/images/baby_nigerian_dungaree_1787489143271.jpg',
      '/src/assets/images/baby_nigerian_romper_1787489085642.jpg'
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
    name: 'Glitter Shimmer Ballerina Party Shoes',
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
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Montessori Wooden Sensory Discovery Cube',
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
    name: 'Blossom Woven Sunhat & Cat-Eye Glasses Duo',
    category: 'accessories',
    subCategory: 'Hats & Sunnies',
    price: 14000,
    rating: 4.9,
    reviewCount: 21,
    images: [
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80'
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
    name: '3D Blossom Dream Party Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 38500,
    originalPrice: 42000,
    rating: 5.0,
    reviewCount: 14,
    images: ['/src/assets/images/blue_flower_dress_1788990935334.jpg'],
    description: 'Pretty, playful and easy to love. This one is for the little girl who likes to stand out, with dimensional 3D flower petals on a sky-blue bodice and a dreamy layered tutu flare.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '3-4Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: [{ name: 'Sky Blossom & Pink Tutu', hex: '#68BBE3' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Noir Petal & Tulle Ruffle Dress',
    category: 'girls',
    subCategory: 'Dresses',
    price: 39000,
    rating: 4.9,
    reviewCount: 12,
    images: ['/src/assets/images/black_flower_dress_1788990950564.jpg'],
    description: 'Bold, modern and unmistakably chic. A sculpted black flower petal top meets a crisp cloud-white ruffle skirt for high-contrast celebrations.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    colors: [{ name: 'Monochrome Blossom', hex: '#1C1C1C' }],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['birthday', 'special-occasion'],
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
    name: 'Pastel Pocket Explorer Backpack',
    category: 'accessories',
    subCategory: 'Bags',
    price: 26000,
    rating: 5.0,
    reviewCount: 18,
    images: ['/src/assets/images/pink_school_backpack_1788990964231.jpg'],
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
    images: ['/src/assets/images/pink_sleeveless_top_1788990976043.jpg'],
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
    name: 'Six Seven Street Jersey Tank',
    category: 'boys',
    subCategory: 'Tops',
    price: 18500,
    rating: 5.0,
    reviewCount: 16,
    images: ['/src/assets/images/purple_six_seven_top_1788990994312.jpg'],
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
    name: '3D Texture Good Balance Tee',
    category: 'boys',
    subCategory: 'T-Shirts',
    price: 16500,
    rating: 4.9,
    reviewCount: 11,
    images: ['/src/assets/images/white_graphic_tee_1788991009760.jpg'],
    description: 'A clean white heavy cotton tee with tactile 3D embossed red graphics. Feels super soft on active boys and looks effortlessly sharp.',
    highlightTag: 'New In',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-10Y'],
    colors: [{ name: 'Optic White & Scarlet', hex: '#FFFFFF' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'birthday'],
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
    name: 'Vintage Light-Wash Chore Denim Jacket',
    category: 'boys',
    subCategory: 'Jackets',
    price: 32000,
    rating: 5.0,
    reviewCount: 15,
    images: ['/src/assets/images/denim_jacket_kids_1788991023527.jpg'],
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
    name: 'Speedway Hooded Windbreaker Jacket',
    category: 'boys',
    subCategory: 'Jackets',
    price: 29500,
    rating: 4.8,
    reviewCount: 13,
    images: ['/src/assets/images/red_track_jacket_1788991035954.jpg'],
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
    name: 'Pearl & Sparkle Floral Wide-Leg Jeans',
    category: 'girls',
    subCategory: 'Jeans',
    price: 28500,
    rating: 5.0,
    reviewCount: 17,
    images: ['/src/assets/images/pearl_embellished_jeans_1788991050032.jpg'],
    description: 'Because everyday denim doesn’t have to be ordinary. Studded with delicate faux pearls and floral crystals for a little extra shine wherever she goes.',
    highlightTag: 'New In',
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-11Y'],
    colors: [{ name: 'Sky Bleach Denim', hex: '#93B4D8' }],
    inStock: true,
    isFeatured: false,
    isNewArrival: true,
    isDemonstration: true,
    occasions: ['everyday', 'birthday'],
    ageGroup: '4-7Y',
    details: {
      material: 'Soft durable cotton denim with rivet-secured faux pearls and stones',
      fit: 'Comfortable wide-leg fit with adjustable inner waistband',
      care: 'Hand wash inside out to protect embellishments',
      inStoreAvailability: 'In Stock at Galleria Mall, Orchid, Lagos'
    }
  },
  {
    id: 'bb-na-010',
    name: 'Chunky Lug-Sole White Fisherman Sandals',
    category: 'shoes',
    subCategory: 'Sandals',
    price: 24000,
    rating: 4.9,
    reviewCount: 22,
    images: ['/src/assets/images/white_chunky_sandals_1788991065781.jpg'],
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
  }
];

export const NEW_ARRIVALS_PRODUCTS: Product[] = PRODUCTS.filter(p => p.isNewArrival);

