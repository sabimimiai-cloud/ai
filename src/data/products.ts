import { Product } from '../types';

const RAW_PRODUCTS: Product[] = [

  {
    "id": "bb-g-001",
    "name": "Pink Bow Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 34500,
    "originalPrice": 38000,
    "images": [
      "/images/hero_nigerian_girl_1787489055452.jpg",
      "/images/editorial_nigerian_twirl_1787489158292.jpg",
      "/images/nigerian_birthday_kids_1787489171127.jpg"
    ],
    "description": "Easy, cute and ready for compliments. Featuring an oversized statement back bow, layered tulle flare, and breathable cotton inner lining so she can twirl all day without itching.",
    "highlightTag": "Birthday Favourite",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Bloom Pink",
        "hex": "#F5A6C8"
      },
      {
        "name": "Warm Cream",
        "hex": "#FFF4E6"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Premium cotton lining with soft layered organza tulle",
      "fit": "True to size with comfortable elasticated back waist",
      "care": "Hand wash gently in cold water or dry clean. Hang dry away from direct sun.",
      "inStoreAvailability": "Available on display at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-b-001",
    "name": "Boys Denim Two-Piece Set",
    "category": "boys",
    "subCategory": "Sets",
    "price": 28000,
    "images": [
      "/images/boys_nigerian_denim_1787489068562.jpg",
      "/images/boys_nigerian_safari_1787489099338.jpg"
    ],
    "description": "Something about this one just says main character. A washed soft-denim overshirt paired with tailored elasticated shorts. Soft on the skin, rugged for real play.",
    "highlightTag": "Trending Now",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Vintage Indigo",
        "hex": "#2563C7"
      },
      {
        "name": "Sand Washed",
        "hex": "#D7C4B7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% Breathable Washed Cotton Denim (Pre-softened)",
      "fit": "Relaxed modern fit for active boys",
      "care": "Machine wash cool with like colors. Iron on medium.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-b-002",
    "name": "Linen Shirt & Shorts Set",
    "category": "boys",
    "subCategory": "Sets",
    "price": 24500,
    "images": [
      "/images/boys_nigerian_safari_1787489099338.jpg",
      "/images/boys_nigerian_denim_1787489068562.jpg"
    ],
    "description": "For little guys who never sit in one place. Lightweight linen-blend shirt with wooden button detailing paired with versatile safari cargo shorts with real pockets for their mini treasures.",
    "highlightTag": "Staff Pick",
    "sizes": [
      "1-2Y",
      "2-3Y",
      "4-5Y",
      "6-7Y"
    ],
    "colors": [
      {
        "name": "Safari Olive",
        "hex": "#27AFA3"
      },
      {
        "name": "Warm Ochre",
        "hex": "#F58220"
      },
      {
        "name": "Linen Sand",
        "hex": "#EBE3D5"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "70% Linen, 30% Fine Cotton",
      "fit": "Tailored casual cut",
      "care": "Gentle cycle, line dry in shade for long lasting softness",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-bb-001",
    "name": "Baby Bow Romper & Bonnet Set",
    "category": "baby",
    "subCategory": "Rompers",
    "price": 19500,
    "originalPrice": 22000,
    "images": [
      "/images/baby_nigerian_romper_1787489085642.jpg",
      "/images/baby_nigerian_dungaree_1787489143271.jpg"
    ],
    "description": "Visiting a newborn or prepping for milestone photos? This pure ribbed cotton heirloom set comes with snap closures at the crotch for quick diaper changes without messing up the look.",
    "highlightTag": "Newborn Gift Must-Have",
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M",
      "12-18M"
    ],
    "colors": [
      {
        "name": "Sunflower Gold",
        "hex": "#F4C430"
      },
      {
        "name": "Dusty Rose",
        "hex": "#F5A6C8"
      },
      {
        "name": "Soft Cream",
        "hex": "#FDFBF7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "gifting",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "100% GOTS Certified Organic Ribbed Cotton",
      "fit": "Stretchy, ultra-gentle on sensitive baby skin",
      "care": "Machine wash delicate, cool tumble dry",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "baby-essentials"
  },
  {
    "id": "bb-s-001",
    "name": "Colorblock Kids Sneakers",
    "category": "shoes",
    "subCategory": "Sneakers",
    "price": 22500,
    "images": [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Because kids sneakers need to survive school, parties and playground sprints while still looking fresh in photos. Cushioned anti-slip soles and easy velcro straps they can put on themselves.",
    "highlightTag": "Best Comfort",
    "sizes": [
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Buubu Multi-Color",
        "hex": "#2563C7"
      },
      {
        "name": "Orange Burst",
        "hex": "#F58220"
      },
      {
        "name": "Pure White & Teal",
        "hex": "#27AFA3"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Breathable mesh upper with reinforced rubber bumper and EVA sole",
      "fit": "Wide toe-box design for growing feet",
      "care": "Wipe clean with a damp cloth and mild soap",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-a-001",
    "name": "Girls Pearl Crossbody Bag",
    "category": "accessories",
    "subCategory": "Bags",
    "price": 12500,
    "images": [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The instant outfit finisher. Sized perfectly for little hands to carry lip balm, hair clips, and their little essentials. Features an adjustable pearl-accent strap.",
    "highlightTag": "Cute Accessory",
    "sizes": [
      "One Size"
    ],
    "colors": [
      {
        "name": "Bloom Yellow",
        "hex": "#F4C430"
      },
      {
        "name": "Petal Pink",
        "hex": "#F5A6C8"
      },
      {
        "name": "Ocean Teal",
        "hex": "#27AFA3"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Soft textured vegan leather with magnetic snap closure",
      "fit": "Compact & lightweight (14cm x 11cm)",
      "care": "Wipe clean with dry or slightly damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "bags"
  },
  {
    "id": "bb-t-001",
    "name": "Kids Electric Ride-On Car",
    "category": "toys",
    "subCategory": "Ride-On Toys",
    "price": 145000,
    "originalPrice": 160000,
    "images": [
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "The showstopper gift that makes everyone gasp when it gets unveiled. Powered by a rechargeable 12V motor, working LED headlights, parent remote control override, and MP3 music connector.",
    "highlightTag": "Grand Birthday Gift",
    "sizes": [
      "Ages 2-6 (Up to 35kg)"
    ],
    "colors": [
      {
        "name": "Signature Navy",
        "hex": "#123B68"
      },
      {
        "name": "Vintage Coral",
        "hex": "#F58220"
      },
      {
        "name": "Pure Pearl",
        "hex": "#FDFBF7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Reinforced non-toxic ABS polymer body with steel frame chassis",
      "fit": "Single rider seat with adjustable seatbelt",
      "care": "Charge 6-8 hours before first ride. Wipe clean after outdoor use.",
      "inStoreAvailability": "Display unit available to test at Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide shipping."
    },
    "audience": "unisex",
    "productType": "ride-ons"
  },
  {
    "id": "bb-t-003",
    "name": "Mercedes-Benz AMG Ride-On Car",
    "category": "toys",
    "subCategory": "Ride-On Toys",
    "price": 223600,
    "images": [
      "/images/mercedes_benz_amg_ride_on_car.jpg"
    ],
    "description": "Big wheels, bold presence, pure luxury. This Mercedes-Benz AMG ride is ready to turn heads wherever it goes.",
    "highlightTag": "Luxury Ride-On",
    "sizes": [
      "Single Rider (Ages 2-6)"
    ],
    "colors": [
      {
        "name": "Gloss Black",
        "hex": "#1A1A1A"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Reinforced polymer body with authentic Mercedes-Benz AMG styling and detailing",
      "fit": "Single rider seat with safety seatbelt",
      "care": "Wipe clean with a damp cloth after outdoor use. Store indoors.",
      "inStoreAvailability": "Available at Buubu Bloom, Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide delivery."
    },
    "audience": "unisex",
    "productType": "ride-ons"
  },
  {
    "id": "bb-t-004",
    "name": "Pink Mini Sports Ride-On Car",
    "category": "toys",
    "subCategory": "Ride-On Toys",
    "price": 360340,
    "images": [
      "/images/pink_mini_sports_ride_on_car.jpg"
    ],
    "description": "Luxury looks better in PINK. Make every ride a statement with this gorgeous mini sports car.",
    "highlightTag": "Statement Ride",
    "sizes": [
      "Single Rider (Ages 2-6)"
    ],
    "colors": [
      {
        "name": "Pastel Pink",
        "hex": "#F7A8C4"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Glossy sculpted sports body with authentic aerodynamic styling",
      "fit": "Single rider seat with safety seatbelt",
      "care": "Wipe clean with a damp cloth after outdoor use. Store indoors.",
      "inStoreAvailability": "Available at Buubu Bloom, Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide delivery."
    },
    "audience": "unisex",
    "productType": "ride-ons"
  },
  {
    "id": "bb-t-005",
    "name": "Lime Green & White Electric Kids Bike",
    "category": "toys",
    "subCategory": "Ride-On Toys",
    "price": 400000,
    "images": [
      "/images/lime_green_white_electric_bike.jpg",
      "/images/lime_green_bike_1789721375029.jpg"
    ],
    "description": "Clean, powerful, and ready to turn heads. This lime green and white electric dirt bike is engineered for safe outdoor adventure with authentic motocross styling, real throttle response, and durable knobby all-terrain tires.",
    "highlightTag": "Head-Turner",
    "sizes": [
      "Single Rider (Ages 4-10)"
    ],
    "colors": [
      {
        "name": "Lime Green & White",
        "hex": "#78C800"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-tensile steel frame with impact-resistant lime green and white motocross body fairings and rugged spoked wheels",
      "fit": "Comfortable motocross saddle with twist-grip throttle and dual lever handbrakes",
      "care": "Rechargeable electric battery. Wipe down after outdoor rides. Store in a dry indoor area.",
      "inStoreAvailability": "Available at Buubu Bloom, Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide delivery."
    },
    "audience": "unisex",
    "productType": "ride-ons"
  },
  {
    "id": "bb-t-006",
    "name": "Pink & White Electric Kids Bike",
    "category": "toys",
    "subCategory": "Ride-On Toys",
    "price": 400000,
    "images": [
      "/images/pink_white_electric_bike.jpg",
      "/images/pink_white_bike_1789721386933.jpg"
    ],
    "description": "Ride in style, stand out effortlessly. The perfect blend of electric power, sports styling, and high-speed fun in a chic pink and white motocross build.",
    "highlightTag": "Statement Ride",
    "sizes": [
      "Single Rider (Ages 4-10)"
    ],
    "colors": [
      {
        "name": "Pastel Pink & White",
        "hex": "#F7A8C4"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-tensile steel frame with impact-resistant pastel pink and white motocross body fairings and rugged spoked wheels",
      "fit": "Comfortable motocross saddle with twist-grip throttle and dual lever handbrakes",
      "care": "Rechargeable electric battery. Wipe down after outdoor rides. Store in a dry indoor area.",
      "inStoreAvailability": "Available at Buubu Bloom, Galleria Mall, Orchid, Lagos. Boxed units ready for Lagos & Nationwide delivery."
    },
    "audience": "unisex",
    "productType": "ride-ons"
  },
  {
    "id": "bb-bag-001",
    "name": "Burgundy School Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 24500,
    "images": [
      "/images/burgundy_school_backpack.jpg",
      "/images/burgundy_backpack_1789721398358.jpg"
    ],
    "description": "A structured wide-frame school backpack crafted with water-resistant burgundy canvas, top grab handles with snap clasp, front gold zipper pocket, and side water bottle compartments.",
    "highlightTag": "School Favourite",
    "sizes": [
      "Standard (Ages 5-12)"
    ],
    "colors": [
      {
        "name": "Burgundy",
        "hex": "#722F37"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable water-repellent burgundy canvas with brass zip hardware and structured doctor-mouth frame opening",
      "fit": "Wide easy-access opening with reinforced top grab handles and padded ergonomic shoulder straps",
      "care": "Spot clean with a damp cloth or soft sponge. Air dry away from direct heat.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-002",
    "name": "Grey School Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 24500,
    "images": [
      "/images/grey_school_backpack.jpg",
      "/images/grey_backpack_1789721413333.jpg"
    ],
    "description": "A modern structured frame backpack in heather grey canvas. Features wide-mouth easy-access opening, gold-tone hardware, secure top carry handles, and side bottle holders.",
    "highlightTag": "School Favourite",
    "sizes": [
      "Standard (Ages 5-12)"
    ],
    "colors": [
      {
        "name": "Heather Grey",
        "hex": "#9CA3AF"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Textured woven heather grey canvas with brass zip hardware and structured doctor-mouth frame opening",
      "fit": "Doctor-frame structured opening with snap handle clasp and cushioned shoulder straps",
      "care": "Spot clean with a damp cloth or soft sponge. Air dry away from direct heat.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-003",
    "name": "White & Black School Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 22000,
    "images": [
      "/images/white_black_school_backpack.jpg",
      "/images/white_black_bag_1789721425322.jpg"
    ],
    "description": "Contemporary multi-compartment student backpack featuring black contrast cord netting, clear front window compartment, padded handle, and high-capacity book storage.",
    "highlightTag": "Back to School",
    "sizes": [
      "Standard (Ages 6-14)"
    ],
    "colors": [
      {
        "name": "White & Black",
        "hex": "#FFFFFF"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-density water-resistant nylon shell with reinforced seams and black contrast hardware",
      "fit": "Spacious multi-pocket layout with padded air-mesh straps and chest stabilization",
      "care": "Wipe clean with a damp cloth. Do not bleach or tumble dry.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-004",
    "name": "White & Black Multi-Pocket Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 26000,
    "images": [
      "/images/white_black_multi_pocket_backpack.jpg",
      "/images/black_white_buckle_1789721438099.jpg"
    ],
    "description": "High-capacity school backpack with dual front quick-release buckle clasps, transparent upper zipper pouch, breathable mesh pockets, and water-repellent white shell.",
    "highlightTag": "Back to School",
    "sizes": [
      "Standard (Ages 6-14)"
    ],
    "colors": [
      {
        "name": "White & Black",
        "hex": "#F3F4F6"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Water-resistant coated poly-canvas with dual buckle fasteners and reinforced base",
      "fit": "Multi-pocket organized interior with cushioned back padding and ergonomic straps",
      "care": "Wipe clean with a damp cloth. Air dry in shade.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-005",
    "name": "Pastel Tie-Dye School Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 19500,
    "images": [
      "/images/pastel_tiedyed_school_backpack.jpg",
      "/images/tiedyed_backpack_1789721447250.jpg"
    ],
    "description": "Vibrant pastel swirl tie-dye school backpack featuring cheerful colors, front organizer pocket, dual side bottle pouches, and durable cushioned straps.",
    "highlightTag": "Trending Now",
    "sizes": [
      "Standard (Ages 5-12)"
    ],
    "colors": [
      {
        "name": "Pastel Swirl",
        "hex": "#A7F3D0"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Tear-resistant lightweight canvas with smooth dual zippers and water-resistant lining",
      "fit": "Ergonomic curved shoulder straps with breathable mesh backing",
      "care": "Spot clean or hand wipe with mild detergent. Air dry.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-006",
    "name": "Pastel Multi-Pocket School Backpack",
    "category": "bags",
    "subCategory": "School Bags",
    "price": 23500,
    "images": [
      "/images/pastel_multipocket_school_backpack.jpg",
      "/images/multi_pocket_bag_1789721459927.jpg"
    ],
    "description": "Multi-pocket pastel school backpack with dual buckle flap closure, safety reflective striping, front organizer compartments, and water-resistant finish.",
    "highlightTag": "New Arrival",
    "sizes": [
      "Standard (Ages 5-12)"
    ],
    "colors": [
      {
        "name": "Pastel Pink & Lilac",
        "hex": "#FBCFE8"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Water-repellent poly canvas with safety reflective accents and sturdy buckles",
      "fit": "Comfortable air-cushioned straps with chest support",
      "care": "Wipe clean with a damp cloth. Air dry naturally.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Send a DM or WhatsApp to order."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-gft-001",
    "name": "Birthday Gift Box",
    "category": "gifts",
    "subCategory": "Gift Sets",
    "price": 45000,
    "images": [
      "/images/deluxe_birthday_gift_hamper.jpg",
      "/images/nigerian_birthday_kids.jpg"
    ],
    "description": "Each gift box is selected according to the child's age, size and preferences. We'll confirm the contents with you before dispatch.",
    "highlightTag": "Birthday Box",
    "sizes": [
      "Selected by Age (Select on order)"
    ],
    "colors": [
      {
        "name": "Girls Bloom Theme",
        "hex": "#F5A6C8"
      },
      {
        "name": "Boys Explorer Theme",
        "hex": "#2563C7"
      },
      {
        "name": "Neutral Joy Theme",
        "hex": "#F4C430"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isDemonstration": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "all-ages",
    "ageGroups": [
      "0-12M",
      "1-3Y",
      "4-7Y",
      "8-12Y",
      "all-ages"
    ],
    "details": {
      "material": "Gift box packaging with presentation wrap",
      "fit": "Customized based on age and sizing preferences",
      "care": "Ready to present upon delivery",
      "inStoreAvailability": "Assembled in-store at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "gifts"
  },
  {
    "id": "bb-g-002",
    "name": "Yellow Tiered Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 29500,
    "images": [
      "/images/girls_nigerian_yellow_1787489114238.jpg",
      "/images/editorial_nigerian_twirl_1787489158292.jpg"
    ],
    "description": "Bright, bold and impossible to miss. Tiered ruffle skirts that flare beautifully when spinning, made from breathable organic poplin cotton that stays crisp throughout the event.",
    "highlightTag": "Sunny Vibe",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "colors": [
      {
        "name": "Bloom Yellow",
        "hex": "#F4C430"
      },
      {
        "name": "Royal Navy",
        "hex": "#123B68"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isDemonstration": true,
    "occasions": [
      "special-occasion",
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% Poplin Cotton with soft lining",
      "fit": "A-line flare with gentle boat neck",
      "care": "Machine wash cold inside out, warm iron",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-b-003",
    "name": "Boys Waistcoat & Chinos Set",
    "category": "boys",
    "subCategory": "Sets",
    "price": 36000,
    "originalPrice": 40000,
    "images": [
      "/images/boys_nigerian_suit_1787489130668.jpg",
      "/images/boys_nigerian_safari_1787489099338.jpg"
    ],
    "description": "Because church, weddings and Thanksgiving services need a young man looking dapper. Comes with tailored waistcoat, crisp collared short-sleeve shirt, adjustable chinos and matching bowtie.",
    "highlightTag": "Wedding & Sunday Ready",
    "sizes": [
      "1-2Y",
      "3-4Y",
      "5-6Y",
      "7-8Y"
    ],
    "colors": [
      {
        "name": "Deep Navy & Sand",
        "hex": "#123B68"
      },
      {
        "name": "Sage & Cream",
        "hex": "#27AFA3"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isDemonstration": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Linen-cotton blend tailored for tropical weather",
      "fit": "Classic tailored fit with elastic inner waist adjusters",
      "care": "Dry clean recommended or hand wash with mild detergent",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-bb-002",
    "name": "Baby Dungarees & T-Shirt Set",
    "category": "baby",
    "subCategory": "Sets",
    "price": 18500,
    "images": [
      "/images/baby_nigerian_dungaree_1787489143271.jpg",
      "/images/baby_nigerian_romper_1787489085642.jpg"
    ],
    "description": "Stretchy canvas overalls featuring wooden button straps paired with an ultra-soft striped inner tee. Built for crawling, tummy time, and receiving endless compliments from family members.",
    "highlightTag": "Sweet Everyday",
    "sizes": [
      "3-6M",
      "6-12M",
      "12-18M",
      "18-24M"
    ],
    "colors": [
      {
        "name": "Warm Terracotta",
        "hex": "#F58220"
      },
      {
        "name": "Soft Sage",
        "hex": "#27AFA3"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "95% Organic Cotton, 5% Elastane for crawling comfort",
      "fit": "Relaxed room-to-grow fit",
      "care": "Machine wash 30\u00b0C, tumble dry low",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "baby-essentials"
  },
  {
    "id": "bb-s-003",
    "name": "Black Woven Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 22500,
    "images": [
      "/images/black_woven_sandals.jpg"
    ],
    "description": "Woven criss-cross front straps with cushioned footbeds, non-slip rubber soles, and an adjustable ankle buckle designed for all-day comfort and play.",
    "highlightTag": "Store Favourite",
    "sizes": [
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Classic Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable faux-leather woven straps with flexible cushioned rubber outsole",
      "fit": "Comfortable regular fit with adjustable buckle ankle strap",
      "care": "Wipe clean with a damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-004",
    "name": "Blue Fashion Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 21000,
    "images": [
      "/images/blue_fashion_sandals.jpg"
    ],
    "description": "Vibrant royal blue and teal dual-strap sandals with secure velcro closures and flexible shock-absorbing soles for active toddlers and kids.",
    "highlightTag": "Everyday Essential",
    "sizes": [
      "EU 22",
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30"
    ],
    "colors": [
      {
        "name": "Royal Blue & Teal",
        "hex": "#2563C7"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Padded synthetic straps with quick hook-and-loop velcro and supportive EVA footbed",
      "fit": "Adjustable velcro closure for secure fit on active little feet",
      "care": "Rinse with clean water or wipe with damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-005",
    "name": "Black Lace-Up School Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 26500,
    "images": [
      "/images/black_lace_up_school_shoes.jpg"
    ],
    "description": "Classic black derby lace-up school shoes with durable smooth finish, cushioned insoles, and hard-wearing non-marking outsoles for school and formal occasions.",
    "highlightTag": "Occasion Ready",
    "sizes": [
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Classic Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable black faux leather upper with cushioned insole and non-marking dress sole",
      "fit": "Smart lace-up closure with cushioned heel collar",
      "care": "Wipe clean with a soft dry cloth and buff lightly",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-006",
    "name": "Teen Retro Colorblock Sneakers",
    "category": "shoes",
    "subCategory": "Sneakers",
    "price": 28000,
    "images": [
      "/images/teen_retro_sneakers.jpg"
    ],
    "description": "Streetwear-inspired colorblock high-traction sneakers with breathable perforated toe box, padded collar, and durable rubber cupsole for older kids and pre-teens.",
    "highlightTag": "Trending Style",
    "sizes": [
      "EU 32",
      "EU 34",
      "EU 36",
      "EU 38"
    ],
    "colors": [
      {
        "name": "Multi-Color Retro",
        "hex": "#DC2626"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": false,
    "occasions": [
      "everyday",
      "birthday",
      "special-occasion"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "8-12Y"
    ],
    "details": {
      "material": "Premium synthetic leather panels with breathable mesh lining and rubber traction outsole",
      "fit": "Cushioned high-top athletic fit with lace-up front",
      "care": "Wipe clean with sneaker foam or damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-007",
    "name": "Purple Character Sneakers",
    "category": "shoes",
    "subCategory": "Sneakers",
    "price": 26000,
    "images": [
      "/images/purple_character_sneakers.jpg"
    ],
    "description": "Playful lavender high-top sneakers with cute character tongue patch, protective white rubber toe bumper, branded laces, and flexible rubber cupsole.",
    "highlightTag": "Trending Kicks",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 35"
    ],
    "colors": [
      {
        "name": "Lavender Purple",
        "hex": "#9333EA"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable canvas upper with padded ankle collar and non-slip rubber cupsole",
      "fit": "Secure high-top lace-up fit with cushioned inner lining",
      "care": "Spot clean with mild soap and soft damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-008",
    "name": "Pastel Strap Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 23500,
    "images": [
      "/images/pastel_strap_sandals.jpg"
    ],
    "description": "Charming multi-color pastel crossover strap sandals featuring a cushioned white platform footbed, ankle support, and anti-slip traction sole.",
    "highlightTag": "Summer Favourite",
    "sizes": [
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32"
    ],
    "colors": [
      {
        "name": "Pastel Multi",
        "hex": "#FECDD3"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Soft faux-leather pastel straps with lightweight molded EVA midsole and rubber outsole",
      "fit": "Easy slip-on with adjustable ankle buckle strap",
      "care": "Wipe clean with a damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-009",
    "name": "Gold Strappy Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 24500,
    "images": [
      "/images/gold_strappy_sandals.jpg"
    ],
    "description": "Radiant metallic champagne gold strappy sandals designed with elegant criss-cross front bands, secure ankle wrap buckle, and cushioned footbed.",
    "highlightTag": "Occasion Ready",
    "sizes": [
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#CA8A04"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Shimmering metallic vegan leather with cushioned footbed and flexible resin sole",
      "fit": "Regular fit with adjustable ankle strap closure",
      "care": "Wipe gently with dry or slightly damp soft cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-010",
    "name": "White DOIT Sport Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 24000,
    "images": [
      "/images/white_doit_sport_sandals.jpg"
    ],
    "description": "Rugged yet lightweight off-white sport sandals featuring dual quick-adjust velcro straps, red DOiT brand accent, and high-traction deep-lug rubber sole.",
    "highlightTag": "Active Comfort",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Off-White & Red",
        "hex": "#F8FAFC"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Water-resistant webbing fabric with soft neoprene lining and molded shock-absorbing footbed",
      "fit": "Dual velcro straps for a fully customizable, slip-proof fit",
      "care": "Rinse with clean water or wipe with damp sponge",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-011",
    "name": "Black Combat Boots",
    "category": "shoes",
    "subCategory": "Boots",
    "price": 28500,
    "images": [
      "/images/black_combat_boots.jpg"
    ],
    "description": "High-shine black patent combat boots detailed with sparkling crystal rhinestones along the collar, front lace closure with inner zipper, and a chunky lug sole.",
    "highlightTag": "Statement Style",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Glossy Black",
        "hex": "#0F172A"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "everyday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-gloss faux patent leather with sparkling crystal rhinestone embellishments and durable TPR lug outsole",
      "fit": "Side-zip entry with front laces for secure adjustability",
      "care": "Wipe clean with a soft microfiber cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-012",
    "name": "Black Buckle School Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 24500,
    "images": [
      "/images/black_buckle_school_shoes.jpg"
    ],
    "description": "Durable high-shine black patent leather school shoes featuring a classic single Mary Jane strap with buckle closure, cushioned arch support, and anti-scuff sole.",
    "highlightTag": "School Essential",
    "sizes": [
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Patent Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-grade scratch-resistant faux patent leather with padded insole and hardwearing rubber sole",
      "fit": "Secure strap closure with reinforced heel counter",
      "care": "Wipe with damp cloth and dry polish with clean cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-013",
    "name": "Kids Active Neon Sport Sneakers",
    "category": "shoes",
    "subCategory": "Sneakers",
    "price": 25000,
    "images": [
      "/images/teen_retro_sneakers.jpg"
    ],
    "description": "Ultra-light athletic sneakers crafted from breathable white mesh with energetic volt neon overlays, cushioned phylon midsole, and flexible traction pods.",
    "highlightTag": "Active Play",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "White & Neon Volt",
        "hex": "#84CC16"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": false,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Engineered mesh knit with synthetic reinforcements and shock-absorbing EVA foam sole",
      "fit": "Bungee lace and top velcro strap for swift on-and-off",
      "care": "Surface wipe or gentle hand wash",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-014",
    "name": "Black Patent Mary Janes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 24500,
    "images": [
      "/images/black_patent_mary_janes.jpg"
    ],
    "description": "High-shine black patent Mary Jane dress shoes with secure strap buckle, cushioned footbed, and scuff-resistant outsole for school and formal occasions.",
    "highlightTag": "School Ready",
    "sizes": [
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Patent Black",
        "hex": "#0F172A"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-gloss vegan patent leather with soft leatherette lining and durable TPR sole",
      "fit": "Single buckle strap with elastic gusset for easy wear",
      "care": "Wipe clean with a damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-015",
    "name": "Black Formal Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 26000,
    "images": [
      "/images/black_formal_shoes.jpg"
    ],
    "description": "Smart tailored black dress shoes featuring clean silhouette, breathable inner lining, and flexible non-marking dress sole.",
    "highlightTag": "Occasion Ready",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Classic Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "everyday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Smooth faux leather upper with padded collar and textured slip-resistant sole",
      "fit": "Standard formal fit with secure closure",
      "care": "Wipe clean and buff with soft dry cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-016",
    "name": "Black School Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 24000,
    "images": [
      "/images/black_school_shoes.jpg"
    ],
    "description": "Hard-wearing everyday black school shoes designed for active school days with reinforced heel counter and cushioned insole.",
    "highlightTag": "Back to School",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#1E293B"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable scuff-resistant synthetic leather with supportive footbed",
      "fit": "Comfort fit with secure adjustable strap",
      "care": "Wipe with damp sponge and air dry",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-017",
    "name": "Cream & Pink Slides",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 18500,
    "images": [
      "/images/cream_pink_slides.jpg"
    ],
    "description": "Lightweight slip-on slides featuring a soft cream contoured footbed with playful blush pink accents and slip-resistant sole.",
    "highlightTag": "Casual Comfort",
    "sizes": [
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32"
    ],
    "colors": [
      {
        "name": "Cream & Blush Pink",
        "hex": "#FBCFE8"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Molded lightweight EVA foam with soft strap lining",
      "fit": "Easy slip-on comfort fit",
      "care": "Rinse clean with water and dry in shade",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-018",
    "name": "Brown Bow Loafers",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 25500,
    "images": [
      "/images/brown_bow_loafers.jpg"
    ],
    "description": "Rich chestnut brown slip-on loafers accented with delicate bow detail, flexible moccasin stitching, and cushioned arch support.",
    "highlightTag": "Boutique Pick",
    "sizes": [
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Chestnut Brown",
        "hex": "#78350F"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Soft faux nubuck leather with decorative front bow and flexible rubber driver sole",
      "fit": "Slip-on with gentle elasticized collar for a snug stay-on fit",
      "care": "Brush lightly or wipe clean with dry cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-019",
    "name": "Beige Chunky Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 23500,
    "images": [
      "/images/beige_chunky_sandals.jpg"
    ],
    "description": "Modern neutral beige multi-strap chunky platform sandals with lightweight grooved sole, adjustable buckles, and all-day cushioned footbed.",
    "highlightTag": "Trending Neutral",
    "sizes": [
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34",
      "EU 36"
    ],
    "colors": [
      {
        "name": "Warm Beige",
        "hex": "#D6D3D1"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Supple neutral faux leather straps with molded lightweight platform sole",
      "fit": "Multi-strap adjustability with secure backstrap closure",
      "care": "Wipe with damp cloth and dry naturally",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-t-002",
    "name": "Wooden Activity Cube",
    "category": "toys",
    "subCategory": "Educational Toys",
    "price": 26500,
    "images": [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
    ],
    "description": "Keeps busy hands happily occupied without screens. Features 5 interactive sides: shape sorter, gear cog spin, bead maze, clock dial and abacus counter.",
    "highlightTag": "Screen-Free Play",
    "sizes": [
      "Ages 1-4 Years"
    ],
    "colors": [
      {
        "name": "Pastel Garden",
        "hex": "#27AFA3"
      },
      {
        "name": "Bright Bloom",
        "hex": "#F58220"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isDemonstration": true,
    "occasions": [
      "birthday",
      "gifting",
      "everyday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Natural sustainably harvested beechwood with water-based non-toxic paint",
      "fit": "Smooth rounded bevelled edges for maximum toddler safety",
      "care": "Wipe with dry cloth or lightly damp cloth. Keep away from direct water.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-a-002",
    "name": "Straw Sunhat & Sunglasses Set",
    "category": "accessories",
    "subCategory": "Hats & Sunnies",
    "price": 14000,
    "images": [
      "/images/editorial_nigerian_twirl_1787489158292.jpg",
      "/images/pink_school_backpack_1788990964231.jpg"
    ],
    "description": "Sunshine ready in seconds. Foldable breathable straw hat with cute pom-pom trim paired with UV400 protective retro cat-eye sunglasses.",
    "highlightTag": "Vacation & Outing",
    "sizes": [
      "Ages 2-8 Years"
    ],
    "colors": [
      {
        "name": "Natural Honey",
        "hex": "#F4C430"
      },
      {
        "name": "Soft Blush",
        "hex": "#F5A6C8"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Flexible paper straw weave hat with shatterproof polycarbonate UV400 lenses",
      "fit": "Hat circumference 52cm with elastic wind chin strap",
      "care": "Store flat, reshape easily with light steam if compressed",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-na-001",
    "name": "Blue Floral Tulle Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 38500,
    "originalPrice": 42000,
    "images": [
      "/images/blue_flower_dress_1788990935334.jpg"
    ],
    "description": "Pretty, playful and easy to love. This one is for the little girl who likes to stand out, with dimensional 3D flower petals on a sky-blue bodice and a dreamy layered tutu flare.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "3-4Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Sky Blossom & Pink Tutu",
        "hex": "#68BBE3"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "3D textile floral applique with soft cotton inner lining and layered organza tutu",
      "fit": "True to size with gentle elastic back for easy fit",
      "care": "Hand wash gently or dry clean. Hang dry away from direct heat.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-002",
    "name": "Black Floral Ruffle Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 39000,
    "images": [
      "/images/black_flower_dress_1788990950564.jpg"
    ],
    "description": "Bold, modern and unmistakably chic. A sculpted black flower petal top meets a crisp cloud-white ruffle skirt for high-contrast celebrations.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "colors": [
      {
        "name": "Monochrome Blossom",
        "hex": "#1C1C1C"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Sculpted 3D floral petals with breathable cotton bodice lining and multi-tier tulle",
      "fit": "Tailored bodice with flared skirt",
      "care": "Dry clean recommended or gentle cold hand wash",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-003",
    "name": "Pastel School Backpack",
    "category": "accessories",
    "subCategory": "Bags",
    "price": 26000,
    "images": [
      "/images/pink_school_backpack_1788990964231.jpg"
    ],
    "description": "School runs just got easier. Spacious enough for the things they actually need, with durable buckled front pockets and cushioned shoulder straps.",
    "highlightTag": "New In",
    "sizes": [
      "One Size (School / Outing)"
    ],
    "colors": [
      {
        "name": "Pastel Blush Pink",
        "hex": "#F7C6D0"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Water-resistant coated nylon canvas with reinforced zippers and buckles",
      "fit": "Padded ergonomic breathable mesh straps with chest clip",
      "care": "Wipe clean with a damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-na-004",
    "name": "Soft Ribbed Bow Cami Top",
    "category": "girls",
    "subCategory": "Tops",
    "price": 12500,
    "images": [
      "/images/pink_sleeveless_top_1788990976043.jpg"
    ],
    "description": "Ultra-soft cotton ribbed tank top finished with neat white contrast picot piping and a dainty front bow. Cool, light, and perfect for hot afternoons.",
    "highlightTag": "New In",
    "sizes": [
      "1-2Y",
      "2-3Y",
      "4-5Y",
      "6-7Y"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#F7C0D0"
      },
      {
        "name": "Milk White",
        "hex": "#FFFDF8"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "95% combed breathable ribbed cotton with 5% elastane",
      "fit": "Comfortable relaxed fit with gentle stretch",
      "care": "Machine wash warm, tumble dry low",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-005",
    "name": "Purple Graphic Jersey Tank",
    "category": "boys",
    "subCategory": "Tops",
    "price": 18500,
    "images": [
      "/images/purple_six_seven_top_1788990994312.jpg"
    ],
    "description": "Six Seven is having a moment. Your little one can rock it too. Vibrant purple jersey with bold cartoon characters, gold chain graphics, and cool summer energy.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-11Y"
    ],
    "colors": [
      {
        "name": "Grape Purple",
        "hex": "#7C3AED"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Breathable sports mesh jersey with durable high-density screen print",
      "fit": "Boxy streetwear fit for active play",
      "care": "Machine wash cold inside out. Iron reverse side.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-006",
    "name": "White Graphic T-Shirt",
    "category": "boys",
    "subCategory": "T-Shirts",
    "price": 16500,
    "images": [
      "/images/white_graphic_tee_1788991009760.jpg"
    ],
    "description": "A clean white heavy cotton tee with tactile 3D embossed red graphics. Feels super soft on active boys and looks effortlessly sharp.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Optic White & Scarlet",
        "hex": "#FFFFFF"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% 240gsm premium heavyweight combed cotton",
      "fit": "Relaxed drop-shoulder cut",
      "care": "Hand or gentle machine wash. Do not iron directly on 3D print.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-007",
    "name": "Light-Wash Denim Jacket",
    "category": "boys",
    "subCategory": "Jackets",
    "price": 32000,
    "images": [
      "/images/denim_jacket_kids_1788991023527.jpg"
    ],
    "description": "A wardrobe staple that goes over literally everything. Soft vintage wash denim, durable brass buttons, and deep pockets for their little treasures.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y",
      "11-12Y"
    ],
    "colors": [
      {
        "name": "Vintage Stone Blue",
        "hex": "#8EADC7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% washed cotton denim with antique brass hardware",
      "fit": "Classic trucker fit with room for layering",
      "care": "Machine wash cold with similar colours",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-008",
    "name": "Red Hooded Jacket",
    "category": "boys",
    "subCategory": "Jackets",
    "price": 29500,
    "images": [
      "/images/red_track_jacket_1788991035954.jpg"
    ],
    "description": "Vibrant red with clean white racing stripes and a front zip pouch. Light enough for the afternoon breeze, bold enough for every outing.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "colors": [
      {
        "name": "Crimson Red",
        "hex": "#DC2626"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Lightweight ripstop wind-resistant nylon with breathable soft mesh lining",
      "fit": "Athletic cut with elasticated cuffs and hem",
      "care": "Gentle wash cycle, hang dry quickly",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-009",
    "name": "Grey Denim Jeans",
    "category": "girls",
    "subCategory": "Jeans",
    "price": 28500,
    "images": [
      "/images/pearl_embellished_jeans_1788991050032.jpg"
    ],
    "description": "Dark washed grey denim with relaxed flare fit and sparkling rhinestone starburst crystal embellishments along the hem.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-11Y"
    ],
    "colors": [
      {
        "name": "Washed Grey Denim",
        "hex": "#4B5563"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "birthday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Soft durable washed cotton denim with rivet-secured crystal rhinestones",
      "fit": "Comfortable flare fit with adjustable inner waistband",
      "care": "Hand wash inside out to protect embellishments",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-010",
    "name": "White Fisherman Sandals",
    "category": "shoes",
    "subCategory": "Sandals",
    "price": 24000,
    "images": [
      "/images/white_chunky_sandals_1788991065781.jpg"
    ],
    "description": "Modern, grippy, and built for active feet. Padded crossover straps with a lightweight chunky lug sole that pairs with dresses or shorts alike.",
    "highlightTag": "New In",
    "sizes": [
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32",
      "EU 34"
    ],
    "colors": [
      {
        "name": "Cloud White",
        "hex": "#F8F9FA"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": false,
    "isDemonstration": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Premium wipe-clean faux leather upper with cushioned EVA lug outsole",
      "fit": "Adjustable hook-and-loop velcro ankle strap",
      "care": "Wipe clean with a damp cloth or shoe sponge",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-na-011",
    "name": "Denim Cargo Shorts",
    "category": "boys",
    "subCategory": "Shorts",
    "price": 18500,
    "images": [
      "/images/denim_cargo_shorts.jpg",
      "/images/denim_cargo_shorts_1789206962535.jpg"
    ],
    "description": "Light wash relaxed denim shorts crafted with durable utility cargo flap pockets and an elasticated comfort drawstring waistband.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Light Wash Denim",
        "hex": "#7CA1C9"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% soft pre-washed cotton denim",
      "fit": "Relaxed cargo fit with elasticated inner waist tab",
      "care": "Machine wash cold with like colors, tumble dry low",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-012",
    "name": "Tan Buckle Pocket T-Shirt",
    "category": "boys",
    "subCategory": "T-Shirts",
    "price": 16500,
    "images": [
      "/images/tan_buckle_tshirt.jpg",
      "/images/khaki_cargo_tshirt.jpg"
    ],
    "description": "Modern tan crewneck tee with a functional front utility cargo buckle pocket and signature streetwear graphic typography.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Warm Khaki Tan",
        "hex": "#C2A37E"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% breathable heavy combed cotton jersey",
      "fit": "Modern boxy streetwear cut",
      "care": "Machine wash cool inside out, warm iron",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-013",
    "name": "Striped Knit Sweater",
    "category": "boys",
    "subCategory": "Sweaters",
    "price": 24500,
    "images": [
      "/images/striped_knit_sweater.jpg",
      "/images/striped_knit_sweater_1789207006442.jpg"
    ],
    "description": "Classic knit collared polo sweater patterned with bold horizontal stripes in cream, royal blue, and forest green.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Cream, Blue & Green",
        "hex": "#1E40AF"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Soft cotton-blend premium textured cable knit",
      "fit": "Tailored knit fit with ribbed cuffs and polo collar",
      "care": "Gentle hand wash cold, dry flat to maintain shape",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-014",
    "name": "Girls Red Floral Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 32000,
    "images": [
      "/images/girls_floral_dress.jpg",
      "/images/red_floral_dress.jpg"
    ],
    "description": "Statement occasion dress set featuring a clean white top with a sculptural 3D red rosette applique paired with a tiered crimson red pleated skirt.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Crimson Red & White",
        "hex": "#DC2626"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Cotton bodice lining with soft structured organza floral petals",
      "fit": "Comfortable fit with elasticated flare skirt",
      "care": "Gentle hand wash cold or dry clean, line dry in shade",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-015",
    "name": "Pink Utility Set",
    "category": "girls",
    "subCategory": "Sets",
    "price": 29500,
    "images": [
      "/images/pink_utility_set.jpg",
      "/images/pink_utility_set_1789207030879.jpg"
    ],
    "description": "Trendy two-piece set including a pastel pink sleeveless utility denim vest with flap pockets and frayed raw hem, paired with a matching pink cargo skirt.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Pastel Pink",
        "hex": "#F472B6"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% garment-dyed pink cotton denim",
      "fit": "Relaxed crop vest with an elasticated waistband skirt",
      "care": "Machine wash cold with like colors, hang dry",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-016",
    "name": "Denim Vest & Jeans Set",
    "category": "girls",
    "subCategory": "Sets",
    "price": 33000,
    "images": [
      "/images/denim_vest_jeans_set.jpg",
      "/images/heart_denim_set.jpg"
    ],
    "description": "Two-piece denim outfit featuring a light blue washed sleeveless denim vest with front brass buttons and wide-leg jeans with metallic star knee cutouts.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "colors": [
      {
        "name": "Vintage Blue & Gold",
        "hex": "#60A5FA"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Premium soft washed denim with reinforced metallic star applique",
      "fit": "Relaxed straight-leg cut with button-front vest",
      "care": "Wash inside out in cold water, line dry",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-017",
    "name": "Peach Floral Ruffle Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 33500,
    "images": [
      "/images/peach_floral_dress.jpg"
    ],
    "description": "Boutique party dress designed with a soft peach coral bodice layered in 3D flower petals and a full tiered ivory organza skirt.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Peach Coral & Ivory",
        "hex": "#FB923C"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "gifting",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Handcrafted floral rosettes with breathable cotton lining",
      "fit": "Flared A-line silhouette with comfortable stretch back",
      "care": "Dry clean or gentle spot clean only",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-na-018",
    "name": "Small Girls Handbag",
    "category": "accessories",
    "subCategory": "Bags",
    "price": 15500,
    "images": [
      "/images/small_girls_handbag.jpg",
      "/images/plush_girls_handbag.jpg"
    ],
    "description": "Fluffy pastel mint plush mini purse detailed with soft faux-fur, floral accents, and an elegant faux-pearl beaded carry handle.",
    "highlightTag": "New In",
    "sizes": [
      "One Size (16cm x 12cm)"
    ],
    "colors": [
      {
        "name": "Mint & Pearl",
        "hex": "#A7F3D0"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Ultra-soft plush faux fur with faux-pearl beaded handle",
      "fit": "Mini handheld styling for girls",
      "care": "Spot clean with a damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "bags"
  },
  {
    "id": "bb-na-019",
    "name": "Camouflage Shorts",
    "category": "boys",
    "subCategory": "Shorts",
    "price": 17500,
    "images": [
      "/images/camouflage_shorts.jpg",
      "/images/camo_cargo_shorts.jpg"
    ],
    "description": "Durable cotton canvas cargo shorts in an all-over grey and olive camouflage print with side utility flap pockets and elastic waistband.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Urban Camo",
        "hex": "#4B5563"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% hard-wearing cotton twill",
      "fit": "Relaxed knee-length fit with drawstring elastic waist",
      "care": "Machine wash warm, tumble dry medium",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-020",
    "name": "Black Sports Tracksuit",
    "category": "boys",
    "subCategory": "Sets",
    "price": 27500,
    "images": [
      "/images/black_athletic_trackset.jpg"
    ],
    "description": "Sporty two-piece athletic set featuring a black graphic soccer jersey with white double sleeve stripes paired with side-striped black track pants.",
    "highlightTag": "New In",
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "colors": [
      {
        "name": "Black & White",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Performance stretch cotton-poly blend",
      "fit": "Athletic tailored fit with tapered ankle cuffs",
      "care": "Machine wash cool, line dry away from direct heat",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-021",
    "name": "Striped Shirt & Cargo Pants Set",
    "category": "boys",
    "subCategory": "Sets",
    "price": 29000,
    "images": [
      "/images/striped_shirt_cargo_set.jpg",
      "/images/striped_utility_set.jpg"
    ],
    "description": "Contemporary two-piece set featuring a vertical striped collared shirt with tan twill chest panel, matched with caramel brown utility cargo trousers.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "colors": [
      {
        "name": "Stripe & Caramel Tan",
        "hex": "#B45309"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Fine cotton stripe weave with sturdy cotton twill pants",
      "fit": "Smart casual button-up with elasticated cargo trousers",
      "care": "Machine wash cool, medium iron",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-022",
    "name": "Baby Red Bow Dress Set",
    "category": "baby",
    "subCategory": "Dresses",
    "price": 21000,
    "images": [
      "/images/baby_red_bow_dress.jpg",
      "/images/baby_burgundy_dress.jpg"
    ],
    "description": "Baby girl deep crimson red ribbed knit dress with delicate puff sleeves, layered lace skirt overlay, and a matching oversized bow headband.",
    "highlightTag": "New In",
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M",
      "12-18M"
    ],
    "colors": [
      {
        "name": "Crimson Red",
        "hex": "#991B1B"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "gifting",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "100% soft organic ribbed cotton with lace skirt overlay",
      "fit": "Gentle on delicate skin with snap back closure",
      "care": "Hand wash cold or delicate cycle, lay flat to dry",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "girls",
    "productType": "baby-essentials"
  },
  {
    "id": "bb-na-023",
    "name": "Black Sparkle Graphic T-Shirt",
    "category": "boys",
    "subCategory": "T-Shirts",
    "price": 16500,
    "images": [
      "/images/black_sparkle_tshirt.jpg",
      "/images/black_sparkle_graphic_tshirt.jpg"
    ],
    "description": "Black combed cotton crewneck tee detailed with fine micro-rhinestone crystal starburst galaxy pattern across the chest.",
    "highlightTag": "New In",
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-10Y"
    ],
    "colors": [
      {
        "name": "Black & Crystal Star",
        "hex": "#18181B"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% combed cotton jersey with heat-bonded metallic studs",
      "fit": "Regular unisex crewneck cut",
      "care": "Wash inside out in cold water, hang dry away from direct heat",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-na-024",
    "name": "Teen Boys Streetwear Hoodie & Cargo Set",
    "category": "boys",
    "audience": "boys",
    "productType": "clothing",
    "subCategory": "Sets",
    "price": 34500,
    "images": [
      "/images/teen_boy_streetwear_set.jpg",
      "/images/teen_boy_streetwear_set_1789207448289.jpg"
    ],
    "description": "Premium heavyweight cotton two-piece streetwear set crafted for older boys and pre-teens. Includes an oversized drop-shoulder hoodie and matching utility cargo joggers.",
    "highlightTag": "New In",
    "sizes": [
      "8-9Y",
      "10-11Y",
      "12-13Y",
      "14Y"
    ],
    "colors": [
      {
        "name": "Heather Charcoal & Slate",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "special-occasion"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "8-12Y"
    ],
    "details": {
      "material": "100% 320gsm brushed French terry cotton",
      "fit": "Relaxed streetwear fit with elasticated drawstring cargo waist",
      "care": "Machine wash cool, tumble dry low",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    }
  },
  {
    "id": "bb-na-025",
    "name": "Teen Girls Varsity Bomber & Skirt Set",
    "category": "girls",
    "audience": "girls",
    "productType": "clothing",
    "subCategory": "Sets",
    "price": 35000,
    "images": [
      "/images/teen_girl_varsity_set.jpg",
      "/images/teen_girl_varsity_set_1789207437792.jpg"
    ],
    "description": "Chic pre-teen two-piece set pairing a cropped collegiate varsity jacket with a pleated active tennis skirt. Contemporary boutique look for older girls.",
    "highlightTag": "New In",
    "sizes": [
      "7-8Y",
      "9-10Y",
      "11-12Y",
      "13Y"
    ],
    "colors": [
      {
        "name": "Navy & Cream",
        "hex": "#1E3A8A"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "8-12Y"
    ],
    "details": {
      "material": "Cotton-poly blend knit with snap buttons and pleated twill skirt",
      "fit": "Cropped boxy jacket with high-waist elasticated skirt",
      "care": "Hand wash or gentle cycle in laundry mesh bag",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    }
  },
  {
    "id": "bb-na-026",
    "name": "Kids & Teens Street Snapback Cap",
    "category": "accessories",
    "audience": "unisex",
    "productType": "accessories",
    "subCategory": "Hats",
    "price": 11500,
    "images": [
      "/images/teen_boy_snapback.jpg",
      "/images/teen_boy_snapback_1789207483812.jpg"
    ],
    "description": "Structured flat-brim snapback cap featuring 3D embroidered branding, breathable eyelets, and an adjustable back strap for kids and pre-teens.",
    "highlightTag": "New In",
    "sizes": [
      "One Size (Ages 4-14)"
    ],
    "colors": [
      {
        "name": "Classic Black & White",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% durable cotton twill with reinforced buckram crown",
      "fit": "Adjustable plastic snapback strap fitting 52cm - 58cm",
      "care": "Spot clean with damp cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    }
  },
  {
    "id": "bb-na-027",
    "name": "Quilted Chain Mini Crossbody Bag",
    "category": "accessories",
    "audience": "girls",
    "productType": "bags",
    "subCategory": "Bags",
    "price": 16000,
    "images": [
      "/images/teen_girl_crossbody.jpg",
      "/images/teen_girl_crossbody_1789207471857.jpg"
    ],
    "description": "Elegant diamond-quilted pastel mini crossbody bag with polished gold chain shoulder strap and turn-lock closure for junior girls and pre-teens.",
    "highlightTag": "New In",
    "sizes": [
      "One Size (18cm x 13cm)"
    ],
    "colors": [
      {
        "name": "Pastel Lilac",
        "hex": "#C084FC"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Smooth vegan faux leather with polished gold hardware",
      "fit": "Crossbody or shoulder carry with 105cm chain strap",
      "care": "Wipe clean with a soft microfiber cloth",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    }
  },
  {
    "id": "bb-na-028",
    "name": "Baby Boy Dungarees & Striped Polo Set",
    "category": "baby",
    "audience": "boys",
    "productType": "baby-essentials",
    "subCategory": "Sets",
    "price": 19500,
    "images": [
      "/images/baby_nigerian_dungaree.jpg",
      "/images/baby_nigerian_dungaree_1787489143271.jpg"
    ],
    "description": "Adorable soft navy cotton twill dungarees with adjustable shoulder buckles, paired with a breathable striped cotton polo onesie. Snap-button gusset for quick diaper changes.",
    "highlightTag": "New In",
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M",
      "12-18M"
    ],
    "colors": [
      {
        "name": "Navy & Stripe",
        "hex": "#1E3A8A"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday",
      "special-occasion"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "100% combed baby-soft cotton twill and interlock jersey",
      "fit": "Relaxed baby fit with adjustable buttons and diaper snaps",
      "care": "Machine wash warm, tumble dry gentle",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos"
    }
  },
  {
    "id": "bb-g-003",
    "name": "Girls Pink Tulle Party Dress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 38500,
    "originalPrice": 45000,
    "images": [
      "/images/girls_tulle_party_dress.jpg"
    ],
    "description": "Layered tulle party dress with satin sash and soft inner cotton lining. Features a sleeveless bodice and back zipper closure for birthdays and special occasions.",
    "highlightTag": "Party Favourite",
    "sizes": [
      "2-3 Years",
      "4-5 Years",
      "6-7 Years",
      "8-9 Years"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#F7C6D0"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Multi-tiered soft nylon tulle overlay with 100% breathable pure cotton inner lining",
      "fit": "True to size with flared twirl skirt and concealed back zip",
      "care": "Hand wash in cold water. Hang to steam and dry.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Ready for Lagos & Nationwide delivery."
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-g-004",
    "name": "Girls Floral Cotton Sundress",
    "category": "girls",
    "subCategory": "Dresses",
    "price": 18500,
    "images": [
      "/images/girls_floral_sundress.jpg"
    ],
    "description": "Sleeveless breathable cotton sundress with yellow floral print and tiered skirt. Easy pull-on fit for warm weather and casual play.",
    "sizes": [
      "3-4 Years",
      "4-5 Years",
      "6-7 Years"
    ],
    "colors": [
      {
        "name": "Sunshine Yellow",
        "hex": "#FCD34D"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "100% lightweight organic combed cotton lawn",
      "fit": "Relaxed A-line fit with gathered empire waist",
      "care": "Machine wash cold with similar colours. Tumble dry low.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-g-005",
    "name": "Girls Denim Pleated Skirt",
    "category": "girls",
    "subCategory": "Skirts",
    "price": 16500,
    "images": [
      "/images/girls_denim_skirt.jpg"
    ],
    "description": "Pleated washed denim skirt featuring an elasticated back waistband, front belt loops, and matching belt. Durable and versatile for everyday wear.",
    "sizes": [
      "4-5 Years",
      "6-7 Years",
      "8-9 Years",
      "10-12 Years"
    ],
    "colors": [
      {
        "name": "Mid Denim Blue",
        "hex": "#3B82F6"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable cotton denim twill with soft stone wash finish",
      "fit": "Flared pleated silhouette with adjustable inner button-hole elastic waistband",
      "care": "Machine wash inside out in cold water. Iron on medium.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-g-006",
    "name": "Girls Wide-Leg Jumpsuit",
    "category": "girls",
    "subCategory": "Jumpsuits",
    "price": 24000,
    "images": [
      "/images/girls_linen_jumpsuit.jpg"
    ],
    "description": "Lightweight pastel lilac sleeveless jumpsuit with square neckline and wide-leg cut. Soft breathable cotton blend fabric for casual outings.",
    "sizes": [
      "4-5 Years",
      "6-7 Years",
      "8-9 Years",
      "10-12 Years"
    ],
    "colors": [
      {
        "name": "Pastel Lilac",
        "hex": "#C4B5FD"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "everyday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Pre-washed breathable linen-cotton blend",
      "fit": "Wide leg cut with elasticated back waist for ease of movement",
      "care": "Gentle cycle wash cold. Warm iron while slightly damp.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "clothing"
  },
  {
    "id": "bb-b-004",
    "name": "Boys Navy Formal Suit (2-Piece)",
    "category": "boys",
    "subCategory": "Suits",
    "price": 45000,
    "originalPrice": 52000,
    "images": [
      "/images/navy_boys_occasion_suit.jpg"
    ],
    "description": "Tailored two-piece boys suit including single-breasted blazer and matching flat-front trousers. Poly-viscose blend with smooth lining for church, weddings, and celebrations.",
    "highlightTag": "Special Event",
    "sizes": [
      "3-4 Years",
      "5-6 Years",
      "7-8 Years",
      "9-10 Years",
      "11-12 Years"
    ],
    "colors": [
      {
        "name": "Midnight Navy",
        "hex": "#1E293B"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Smooth poly-viscose suiting fabric with satin lapel lining",
      "fit": "Tailored slim-regular cut with adjustable internal trouser waistband",
      "care": "Dry clean only. Cool iron under press cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Ready for immediate dispatch."
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-b-005",
    "name": "Boys Cotton Pique Polo Shirt",
    "category": "boys",
    "subCategory": "T-Shirts & Polos",
    "price": 14000,
    "images": [
      "/images/boys_cotton_polo.jpg"
    ],
    "description": "100% combed cotton pique polo shirt with ribbed collar, two-button placket, and embroidered chest detail. Pre-shrunk and machine washable.",
    "sizes": [
      "3-4 Years",
      "5-6 Years",
      "7-8 Years",
      "9-10 Years"
    ],
    "colors": [
      {
        "name": "Forest Green",
        "hex": "#15803D"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% long-staple combed cotton pique",
      "fit": "Standard classic polo fit with side seam vents",
      "care": "Machine wash cold inside out. Reshape collar while damp.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-b-006",
    "name": "Boys Colour-Block Zip Hoodie",
    "category": "boys",
    "subCategory": "Hoodies & Sweaters",
    "price": 18500,
    "images": [
      "/images/boys_colourblock_hoodie.jpg"
    ],
    "description": "Fleece-lined full-zip hooded sweatshirt with contrasting colour-block panels, front split pouch pockets, and ribbed cuffs.",
    "sizes": [
      "4-5 Years",
      "6-7 Years",
      "8-9 Years",
      "10-12 Years"
    ],
    "colors": [
      {
        "name": "Navy & Heather Grey",
        "hex": "#334155"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Heavyweight 320gsm brushed-back cotton polyester fleece",
      "fit": "Relaxed athletic hoodie fit with heavy-duty nylon zipper",
      "care": "Machine wash cold. Do not tumble dry high.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-b-007",
    "name": "Boys Fleece Cargo Joggers",
    "category": "boys",
    "subCategory": "Joggers",
    "price": 15000,
    "images": [
      "/images/boys_fleece_joggers.jpg"
    ],
    "description": "Warm cotton-blend fleece jogger pants with elastic drawstring waistband, ribbed ankles, and dual utility cargo side pockets.",
    "sizes": [
      "4-5 Years",
      "6-7 Years",
      "8-9 Years",
      "10-12 Years"
    ],
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#475569"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Cotton-rich fleece with reinforced knee stitching",
      "fit": "Tapered leg with elasticated ankle cuffs and functional drawcord waist",
      "care": "Machine wash warm with similar darks.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-b-008",
    "name": "Boys Linen Shirt & Shorts Set",
    "category": "boys",
    "subCategory": "Sets",
    "price": 28000,
    "images": [
      "/images/boys_linen_shirt_shorts.jpg"
    ],
    "description": "Two-piece warm weather outfit featuring a short-sleeve linen-blend button-down shirt and matching tailored shorts with detachable elastic suspenders.",
    "sizes": [
      "1-2 Years",
      "2-3 Years",
      "3-4 Years",
      "5-6 Years"
    ],
    "colors": [
      {
        "name": "White & Khaki",
        "hex": "#D4B996"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Cool pure linen woven fabric with faux-leather trim details",
      "fit": "Tailored comfort fit with removable button-on Y-suspenders",
      "care": "Gentle wash cycle. Hang dry in shade.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "clothing"
  },
  {
    "id": "bb-bb-003",
    "name": "Baby Waffle Knit Romper",
    "category": "baby",
    "subCategory": "Rompers & Bodysuits",
    "price": 12500,
    "images": [
      "/images/baby_waffle_romper.jpg"
    ],
    "description": "Soft sage green waffle textured cotton romper with functional wooden front buttons and bottom snap closures for easy diaper changes.",
    "sizes": [
      "0-3 Months",
      "3-6 Months",
      "6-12 Months",
      "12-18 Months"
    ],
    "colors": [
      {
        "name": "Sage Green",
        "hex": "#84A98C"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "100% GOTS certified organic waffle knit cotton",
      "fit": "Stretchy relaxed baby fit with tagless collar for gentle skin protection",
      "care": "Machine wash cold on delicate cycle. Air dry flat.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "baby",
    "productType": "baby-essentials"
  },
  {
    "id": "bb-bb-004",
    "name": "Baby Leather Soft-Sole Crib Shoes",
    "category": "baby",
    "subCategory": "Baby Shoes",
    "price": 11500,
    "images": [
      "/images/kids_soft_crib_shoes.jpg"
    ],
    "description": "Soft tan leather pre-walker crib shoes with flexible non-slip suede soles and elasticized ankle opening for gentle stay-on support.",
    "sizes": [
      "0-6 Months",
      "6-12 Months",
      "12-18 Months"
    ],
    "colors": [
      {
        "name": "Warm Tan",
        "hex": "#C2884A"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "Buttery soft non-toxic vegetable tanned cowhide leather with suede sole",
      "fit": "Easy stay-on elastic ankle casing that keeps shoes securely on tiny feet",
      "care": "Wipe clean with a damp cloth. Leather conditioner recommended.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "baby",
    "productType": "shoes"
  },
  {
    "id": "bb-bb-005",
    "name": "Organic Cotton Bandana Bibs (Pack of 3)",
    "category": "baby",
    "subCategory": "Baby Accessories",
    "price": 8500,
    "images": [
      "/images/baby_bandana_bibs.jpg"
    ],
    "description": "Set of 3 absorbent cotton bandana drool bibs with soft fleece backing and dual nickel-free snap button fasteners to adjust neck size.",
    "sizes": [
      "0-24 Months"
    ],
    "colors": [
      {
        "name": "Neutral Earth Tones",
        "hex": "#D1C7BD"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "100% organic cotton front with plush absorbent micro-fleece backing",
      "fit": "Dual snap fastenings providing 3 adjustable neck size settings",
      "care": "Machine wash cold. Tumble dry gentle.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "baby",
    "productType": "accessories"
  },
  {
    "id": "bb-bb-006",
    "name": "Newborn Baby Gift Hamper",
    "category": "baby",
    "subCategory": "Gift Sets",
    "price": 42000,
    "images": [
      "/images/baby_welcome_hamper.jpg"
    ],
    "description": "Woven nursery storage basket containing a soft cotton receiving blanket, knitted plush rattle, soft-sole baby booties, and pure cotton baby onesie finished with a satin gift ribbon.",
    "highlightTag": "Baby Shower Pick",
    "sizes": [
      "0-6 Months"
    ],
    "colors": [
      {
        "name": "Cream & Gold",
        "hex": "#FDFBF7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "0-12M",
    "ageGroups": [
      "0-12M"
    ],
    "details": {
      "material": "Presented in a signature rigid Buubu Bloom gift box with grosgrain ribbon",
      "fit": "Standard newborn infant gift assortment",
      "care": "Garments are machine washable. Keepsake box can be preserved.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Custom message cards available."
    },
    "audience": "baby",
    "productType": "gifts"
  },
  {
    "id": "bb-s-020",
    "name": "Girls Glitter Ballerina Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 22500,
    "images": [
      "/images/girls_glitter_shoes.jpg"
    ],
    "description": "Rose gold shimmer ballerina flat shoes with cushioned insoles, flexible rubber outsole, and secure elastic instep strap.",
    "sizes": [
      "EU 24",
      "EU 26",
      "EU 28",
      "EU 30",
      "EU 32"
    ],
    "colors": [
      {
        "name": "Rose Gold",
        "hex": "#B76E79"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Non-shedding fine metallic glitter upper with supple faux-leather collar",
      "fit": "Standard medium width with adjustable velcro instep strap for firm grip",
      "care": "Wipe clean with a soft dry brush.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "shoes"
  },
  {
    "id": "bb-s-021",
    "name": "Boys Leather Brogue Shoes",
    "category": "shoes",
    "subCategory": "Formal Shoes",
    "price": 26500,
    "images": [
      "/images/boys_leather_brogues.jpg"
    ],
    "description": "Classic tan leather lace-up brogues with decorative wingtip perforations, cushioned footbed, and durable non-slip rubber grip sole.",
    "sizes": [
      "EU 27",
      "EU 29",
      "EU 31",
      "EU 33",
      "EU 35"
    ],
    "colors": [
      {
        "name": "Tan Brown",
        "hex": "#8B4513"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "special-occasion"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Full-grain smooth genuine leather upper with breathable leather insole lining",
      "fit": "Lace-up closure with reinforced eyelets and padded heel collar",
      "care": "Buff gently with clear or tan shoe wax polish.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "shoes"
  },
  {
    "id": "bb-s-022",
    "name": "Kids White Cushioned Sneakers",
    "category": "shoes",
    "subCategory": "Sneakers",
    "price": 24000,
    "images": [
      "/images/kids_white_sneakers.jpg"
    ],
    "description": "All-white everyday kids trainers with faux leather upper, dual velcro strap closure, padded collar, and shock-absorbing rubber outsole.",
    "sizes": [
      "EU 25",
      "EU 27",
      "EU 29",
      "EU 31",
      "EU 33",
      "EU 35"
    ],
    "colors": [
      {
        "name": "Triple White",
        "hex": "#FFFFFF"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Wipe-clean premium vegan leather with perforated toe box for breathability",
      "fit": "Double hook-and-loop velcro straps for fast independent wear",
      "care": "Wipe clean with a damp sneaker cleaner cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-s-023",
    "name": "Kids Foam Slip-On Slides",
    "category": "shoes",
    "subCategory": "Slides",
    "price": 9500,
    "images": [
      "/images/kids_pastel_slides.jpg"
    ],
    "description": "Moulded EVA foam slip-on pool and casual slides with contoured footbed and grooved anti-slip traction sole.",
    "sizes": [
      "EU 26-27",
      "EU 28-29",
      "EU 30-31",
      "EU 32-33"
    ],
    "colors": [
      {
        "name": "Pastel Lilac",
        "hex": "#D8B4E2"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Single-moulded high-density hypoallergenic EVA foam",
      "fit": "Contoured footbed with cup heel and broad arch support",
      "care": "Rinse clean under running water. Dry away from direct sun.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "shoes"
  },
  {
    "id": "bb-bag-007",
    "name": "Kids Insulated Lunch Bag",
    "category": "bags",
    "subCategory": "Lunch Bags",
    "price": 12500,
    "images": [
      "/images/kids_insulated_lunchbag.jpg"
    ],
    "description": "Thermal insulated kids lunch tote with wipe-clean food-grade interior lining, zippered mesh bottle pocket, and adjustable shoulder strap.",
    "sizes": [
      "Standard (4L Capacity)"
    ],
    "colors": [
      {
        "name": "Navy & Stone",
        "hex": "#1E3A8A"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable 600D poly exterior with seamless heat-welded PEVA thermal insulation",
      "fit": "Compact spacious volume easily holding a bento box, fruit snack, and water bottle",
      "care": "Wipe clean interior with mild soapy water.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-bag-008",
    "name": "Girls Quilted Mini Crossbody Bag",
    "category": "bags",
    "subCategory": "Mini Bags",
    "price": 14000,
    "images": [
      "/images/girls_quilted_minibag.jpg"
    ],
    "description": "Pastel quilted mini crossbody bag with gold-tone chain shoulder strap and turn-lock flap closure for keys and small treasures.",
    "sizes": [
      "Mini (14cm x 11cm)"
    ],
    "colors": [
      {
        "name": "Blush Pink",
        "hex": "#FBCFE8"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Supple quilted PU leather with polished gold-tone hardware and faux-pearl beads",
      "fit": "Lightweight miniature proportions suited for small treasures and lip balm",
      "care": "Wipe gently with a dry microfiber cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "bags"
  },
  {
    "id": "bb-bag-009",
    "name": "Kids Hard-Shell Rolling Suitcase",
    "category": "bags",
    "subCategory": "Travel/Trolley Bags",
    "price": 42000,
    "originalPrice": 48000,
    "images": [
      "/images/kids_rolling_luggage.jpg"
    ],
    "description": "Durable ABS hard-shell cabin size luggage with 360-degree dual spinner wheels, telescoping trolley handle, and fully lined interior compartments.",
    "highlightTag": "Travel Ready",
    "sizes": [
      "18 Inch Cabin Size"
    ],
    "colors": [
      {
        "name": "Buttercup Yellow",
        "hex": "#FDE047"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Scratch-resistant ABS/polycarbonate composite shell with zippered fabric divider",
      "fit": "Airline-approved international carry-on luggage dimensions",
      "care": "Wipe clean exterior shell with a damp cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-t-007",
    "name": "Wooden Rainbow Building Blocks (80-Piece)",
    "category": "toys",
    "subCategory": "Building & Construction",
    "price": 18500,
    "images": [
      "/images/wooden_rainbow_blocks.jpg"
    ],
    "description": "80-piece solid beechwood geometric block set in vibrant rainbow colours with smooth rounded edges, stored in a sturdy wooden storage tray.",
    "sizes": [
      "80 Pieces with Storage Tub"
    ],
    "colors": [
      {
        "name": "Multi-Colour",
        "hex": "#3B82F6"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting",
      "birthday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "all-ages"
    ],
    "details": {
      "material": "Smooth sanded FSC-certified natural beech wood with rounded child-safe edges",
      "fit": "80 assorted cylinders, arches, cubes, and triangular prisms in sorting tub",
      "care": "Wipe clean with a dry or lightly dampened cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-008",
    "name": "Kids Wooden Kitchen Play Set",
    "category": "toys",
    "subCategory": "Pretend Play",
    "price": 28000,
    "images": [
      "/images/kids_play_kitchen.jpg"
    ],
    "description": "Compact wooden play kitchen featuring turnable clicking stove knobs, sink with faucet, microwave, oven door, and wooden cookware accessories.",
    "sizes": [
      "Compact Tabletop Size"
    ],
    "colors": [
      {
        "name": "Pastel Mint & Natural Wood",
        "hex": "#A7F3D0"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "gifting",
      "birthday",
      "everyday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Solid pine wood and child-safe engineered wood with food-grade mini steel pans",
      "fit": "Compact tabletop unit that sits easily on any low table or playroom shelf",
      "care": "Wipe clean with a damp sponge.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-009",
    "name": "Classic Plush Teddy Bear",
    "category": "toys",
    "subCategory": "Plush Toys",
    "price": 12000,
    "images": [
      "/images/classic_teddy_bear.jpg"
    ],
    "description": "Soft golden plush teddy bear with embroidered facial features, stitched paw pads, and satin neck ribbon. Surface washable.",
    "sizes": [
      "32cm Height"
    ],
    "colors": [
      {
        "name": "Golden Caramel",
        "hex": "#C2884A"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "gifting",
      "birthday",
      "everyday"
    ],
    "ageGroup": "all-ages",
    "ageGroups": [
      "0-12M",
      "1-3Y",
      "4-7Y",
      "all-ages"
    ],
    "details": {
      "material": "Hypoallergenic plush microfiber fur with 100% recycled poly-fill stuffing",
      "fit": "Huggable seated posture with lock-stitched seams",
      "care": "Surface washable with mild baby soap.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-010",
    "name": "Kids All-Terrain RC Stunt Truck",
    "category": "toys",
    "subCategory": "Remote-Control Toys",
    "price": 32000,
    "images": [
      "/images/rc_stunt_truck.jpg"
    ],
    "description": "Rechargeable 2.4GHz remote-control 4WD stunt vehicle capable of 360-degree spins, flips, and rough surface driving. Includes USB charger.",
    "sizes": [
      "1:16 Scale"
    ],
    "colors": [
      {
        "name": "Racing Red & Black",
        "hex": "#DC2626"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-impact ABS chassis with anti-collision bumper and rubber crawler tires",
      "fit": "Includes USB charging cable and rechargeable lithium battery pack for truck",
      "care": "Wipe dirt off wheels after outdoor driving. Keep battery stored in cool dry area.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-011",
    "name": "Plush Soft Cloth Doll",
    "category": "toys",
    "subCategory": "Dolls",
    "price": 14500,
    "images": [
      "/images/plush_companion_doll.jpg"
    ],
    "description": "Soft fabric rag doll with yarn hair, embroidered smile, and removable floral cotton dress. Gentle and lightweight for young children.",
    "sizes": [
      "38cm Standing"
    ],
    "colors": [
      {
        "name": "Floral Peach",
        "hex": "#FDBA74"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "gifting",
      "birthday"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "100% natural cotton canvas body with yarn hair and embroidered facial details",
      "fit": "Lightweight soft body safe for cuddling from early toddlerhood",
      "care": "Gentle hand wash in lukewarm water. Air dry.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "toys"
  },
  {
    "id": "bb-t-012",
    "name": "Kids Wooden 8-Note Xylophone",
    "category": "toys",
    "subCategory": "Musical Toys",
    "price": 11000,
    "images": [
      "/images/wooden_xylophone.jpg"
    ],
    "description": "Wooden melodic percussion instrument with 8 tuned rainbow-coloured metal keys and two smooth wooden mallets. Sturdy solid wood base.",
    "sizes": [
      "Standard 8 Keys"
    ],
    "colors": [
      {
        "name": "Rainbow Tone",
        "hex": "#EC4899"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y"
    ],
    "details": {
      "material": "Solid beech base with tuned metal bars and two smooth wooden mallets",
      "fit": "Tabletop placement with non-slip silicone feet pads",
      "care": "Wipe clean with a soft dry cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-013",
    "name": "Wooden Shape Sorter Cube",
    "category": "toys",
    "subCategory": "Educational Toys",
    "price": 15000,
    "images": [
      "/images/wooden_shape_sorter.jpg"
    ],
    "description": "Solid wood activity cube featuring 12 geometric shape cutouts and 12 matching colourful wooden blocks with sliding removable lid.",
    "sizes": [
      "15cm x 15cm Cube"
    ],
    "colors": [
      {
        "name": "Natural Wood & Rainbow",
        "hex": "#F59E0B"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "1-3Y",
    "ageGroups": [
      "0-12M",
      "1-3Y"
    ],
    "details": {
      "material": "Solid hardwood cube box with sliding top lid and non-toxic water-based paints",
      "fit": "12 chunky shape blocks designed for small hands to grasp safely",
      "care": "Wipe clean with a damp cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-t-014",
    "name": "World Map Floor Puzzle (48-Piece)",
    "category": "toys",
    "subCategory": "Games & Puzzles",
    "price": 9500,
    "images": [
      "/images/world_map_puzzle.jpg"
    ],
    "description": "48 extra-thick cardboard jigsaw puzzle pieces forming a vibrant illustrated world map showing continents and native animals.",
    "sizes": [
      "48 Giant Pieces (60cm x 40cm)"
    ],
    "colors": [
      {
        "name": "Multi-Colour Illustrated",
        "hex": "#0284C7"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Extra-thick 2.5mm recycled greyboard with glare-free matte lamination",
      "fit": "Large easy-to-handle puzzle pieces suitable for floor building",
      "care": "Store pieces in the original handled box when not in use.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "toys"
  },
  {
    "id": "bb-acc-003",
    "name": "Girls Hair Bow Clips (Pack of 5)",
    "category": "accessories",
    "subCategory": "Hair Accessories",
    "price": 6500,
    "images": [
      "/images/girls_bow_clips_set.jpg"
    ],
    "description": "Set of 5 pastel ribbed grosgrain ribbon hair bows secured to fully lined alligator pinch clips. Non-slip grip suitable for fine or thick hair.",
    "sizes": [
      "Set of 5 (8cm Bows)"
    ],
    "colors": [
      {
        "name": "Pastel Assorted",
        "hex": "#F472B6"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-density ribbed grosgrain polyester ribbon on pinch crocodile metal clips",
      "fit": "Pinch clip mechanism holds securely in fine or thick hair without snagging",
      "care": "Spot clean with mild damp cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "accessories"
  },
  {
    "id": "bb-acc-004",
    "name": "Kids Polarized UV Sunglasses",
    "category": "accessories",
    "subCategory": "Sunglasses",
    "price": 8500,
    "images": [
      "/images/kids_sunglasses.jpg"
    ],
    "description": "Flexible silicone frame children sunglasses with UV400 polarized shatterproof lenses and comfortable non-pinch temples.",
    "sizes": [
      "Ages 3-10 Years"
    ],
    "colors": [
      {
        "name": "Olive Green",
        "hex": "#65A30D"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Bendable shatterproof TPEE rubber frame with TAC polarized UV400 lenses",
      "fit": "Flexible arms that gently hug temples without uncomfortable pressure",
      "care": "Rinse in fresh water and wipe clean with provided microfiber pouch.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-acc-005",
    "name": "Kids Digital Sports Watch",
    "category": "accessories",
    "subCategory": "Watches",
    "price": 11000,
    "images": [
      "/images/kids_digital_watch.jpg"
    ],
    "description": "Water-resistant digital wristwatch with backlit LCD display, stopwatch, alarm, daily date display, and flexible resin strap.",
    "sizes": [
      "Adjustable Strap (Ages 5-14)"
    ],
    "colors": [
      {
        "name": "Cobalt Blue",
        "hex": "#2563EB"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday",
      "birthday",
      "gifting"
    ],
    "ageGroup": "8-12Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Skin-friendly soft silicone band with stainless steel back and acrylic dial",
      "fit": "Multi-hole buckle strap comfortably fitting wrists from 13cm to 19cm",
      "care": "Wipe clean after outdoor play. Water resistant for splashes and hand washing.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-acc-006",
    "name": "Girls Cotton Ankle Socks (Pack of 5)",
    "category": "accessories",
    "subCategory": "Socks",
    "price": 7000,
    "images": [
      "/images/girls_cotton_ankle_socks.jpg"
    ],
    "description": "Pack of 5 pairs of soft combed cotton ankle socks with comfortable ribbed cuffs and flat toe seams for everyday play and school.",
    "sizes": [
      "2-4 Years",
      "5-7 Years",
      "8-10 Years"
    ],
    "colors": [
      {
        "name": "Pastel & White Pack",
        "hex": "#FDF2F8"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "80% combed cotton, 17% polyamide, 3% elastane",
      "fit": "Gentle elastic ribbed cuff that stays up comfortably without marking skin",
      "care": "Machine wash warm with similar light colours.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "accessories"
  },
  {
    "id": "bb-acc-007",
    "name": "Boys Satin Bow Tie",
    "category": "accessories",
    "subCategory": "Bow Ties",
    "price": 9000,
    "images": [
      "/images/boys_satin_bow_tie.jpg"
    ],
    "description": "Pre-tied children's satin bow tie with adjustable neckband and hook fastener for formal events, church, and celebrations.",
    "sizes": [
      "Adjustable (Ages 2-12)"
    ],
    "colors": [
      {
        "name": "Classic Navy",
        "hex": "#1E3A8A"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "special-occasion",
      "birthday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "High-sheen woven satin polyester with heavy-duty stretch elastic webbing",
      "fit": "Adjustable sliding buckles on suspenders and bow tie neckband",
      "care": "Spot clean only.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "accessories"
  },
  {
    "id": "bb-acc-008",
    "name": "Girls Rainbow Bead Necklace",
    "category": "accessories",
    "subCategory": "Children's Jewellery",
    "price": 7000,
    "images": [
      "/images/girls_charm_jewellery.jpg"
    ],
    "description": "Colourful wooden bead necklace strung on durable elastic cord with rainbow beads and central charm, sized safely for children.",
    "sizes": [
      "One Size (Stretch Fit)"
    ],
    "colors": [
      {
        "name": "Pastel Blossom",
        "hex": "#F9A8D4"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting",
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Child-safe smooth painted wooden beads strung on durable elastic cord",
      "fit": "Stretches easily over small hands and heads for safe independent dressing",
      "care": "Wipe clean with a dry cloth. Do not submerge in water.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "accessories"
  },
  {
    "id": "bb-sch-001",
    "name": "Kids Bento Lunch Box",
    "category": "bags",
    "subCategory": "Lunch Boxes",
    "price": 14500,
    "images": [
      "/images/kids_bento_lunchbox.jpg"
    ],
    "description": "4-compartment portioned bento lunch container with silicone leakproof seal ring and kid-friendly snap locking latches. BPA-free.",
    "sizes": [
      "1000ml Capacity"
    ],
    "colors": [
      {
        "name": "Mint & Vanilla",
        "hex": "#6EE7B7"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% food-grade BPA-free and phthalate-free PP with silicone seal",
      "fit": "4 custom compartments keeping fruits, proteins, and snacks separated",
      "care": "Top-rack dishwasher safe. Microwave safe with lid removed.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "bags"
  },
  {
    "id": "bb-sch-002",
    "name": "Kids Insulated Stainless Water Bottle",
    "category": "accessories",
    "subCategory": "Water Bottles",
    "price": 11500,
    "images": [
      "/images/insulated_water_bottle.jpg"
    ],
    "description": "500ml double-wall vacuum insulated stainless steel water bottle with flip straw spout and integrated carry loop. Keeps drinks cold for 12 hours.",
    "sizes": [
      "500ml"
    ],
    "colors": [
      {
        "name": "Blush Cream",
        "hex": "#FDE68A"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Double-wall 18/8 food-grade stainless steel with sweat-proof powder coating",
      "fit": "Leakproof flip straw lid with wide mouth for easy ice filling",
      "care": "Hand wash bottle. Straw and lid are dishwasher safe.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-sch-003",
    "name": "Kids Food Flask Thermos Jar",
    "category": "accessories",
    "subCategory": "Food Flasks",
    "price": 15500,
    "images": [
      "/images/food_flask_thermos.jpg"
    ],
    "description": "Wide-mouth stainless steel insulated food jar with folding stainless spoon and airtight lid. Keeps porridge, soups, and rice warm for school lunch.",
    "sizes": [
      "450ml"
    ],
    "colors": [
      {
        "name": "Pastel Ocean Blue",
        "hex": "#93C5FD"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "18/8 kitchen-grade stainless steel vacuum chamber with copper lining",
      "fit": "Wide-mouth opening with screw lid and folding compact spoon included",
      "care": "Hand wash with warm soapy water.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-sch-004",
    "name": "Kids Hardtop Pencil Case",
    "category": "accessories",
    "subCategory": "Pencil Cases",
    "price": 8500,
    "images": [
      "/images/hardtop_pencil_case.jpg"
    ],
    "description": "Moulded EVA hardtop zippered pencil case featuring interior mesh pocket and pen holder slots. Impact resistant and spacious for school stationery.",
    "sizes": [
      "22cm x 15cm"
    ],
    "colors": [
      {
        "name": "Space Explorer Navy",
        "hex": "#1E293B"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Durable molded EVA hardtop with water-resistant exterior finish",
      "fit": "High capacity interior holding up to 50 pens, pencils, and geometric rulers",
      "care": "Wipe clean with a damp sponge.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "unisex",
    "productType": "accessories"
  },
  {
    "id": "bb-gft-002",
    "name": "Kids Plush Teddy Bear Gift Box",
    "category": "gifts",
    "subCategory": "Birthday Gifts",
    "price": 48000,
    "originalPrice": 55000,
    "images": [
      "/images/classic_teddy_bear.jpg"
    ],
    "description": "Gift presentation box featuring our classic golden plush teddy bear with ribbon bow, ready for birthdays and celebrations.",
    "highlightTag": "Birthday Best Seller",
    "sizes": [
      "Deluxe Hamper Box"
    ],
    "colors": [
      {
        "name": "Gold & Ivory Celebration",
        "hex": "#FBBF24"
      }
    ],
    "inStock": true,
    "isFeatured": true,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Presented in a keepsake magnetic-closure gift box with premium tissue wrap",
      "fit": "Generous multi-gift presentation ready for gifting directly to recipient",
      "care": "Gift items come individually packaged inside the keepsake box.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos. Custom handwritten card included on request."
    },
    "audience": "unisex",
    "productType": "gifts"
  },
  {
    "id": "bb-gft-003",
    "name": "Girls Hair Accessories Gift Set",
    "category": "gifts",
    "subCategory": "Gifts for Girls",
    "price": 25000,
    "images": [
      "/images/girls_bow_clips_set.jpg"
    ],
    "description": "5-piece hair accessories gift set featuring ribbon bows and snap clips mounted on a gift presentation card for birthdays and special occasions.",
    "sizes": [
      "Standard Gift Box"
    ],
    "colors": [
      {
        "name": "Blush & Gold",
        "hex": "#F472B6"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting",
      "special-occasion"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "Handcrafted children jewelry presented in an embossed pastel pink keepsake drawer box",
      "fit": "Sized for young girls aged 3 to 10 years",
      "care": "Keep jewelry inside pouch when not in use.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "girls",
    "productType": "gifts"
  },
  {
    "id": "bb-gft-004",
    "name": "Boys RC Stunt Truck Gift Box",
    "category": "gifts",
    "subCategory": "Gifts for Boys",
    "price": 24000,
    "images": [
      "/images/rc_stunt_truck.jpg"
    ],
    "description": "All-terrain remote control stunt truck in presentation gift packaging with remote control, rechargeable battery, and USB charging cable.",
    "sizes": [
      "Standard Gift Box"
    ],
    "colors": [
      {
        "name": "Khaki & Forest",
        "hex": "#4D7C0F"
      }
    ],
    "inStock": true,
    "isFeatured": false,
    "isNewArrival": true,
    "occasions": [
      "birthday",
      "gifting"
    ],
    "ageGroup": "4-7Y",
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "details": {
      "material": "100% cotton cap, shockproof rubber-armoured binoculars, and BPA-free flask",
      "fit": "Delivered in an adventure-themed gift presentation box",
      "care": "Binoculars wipe clean with soft lens cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    },
    "audience": "boys",
    "productType": "gifts"
  },
  {
    "id": "bb-b-010",
    "name": "Boys Cotton Singlets (Pack of 3)",
    "category": "boys",
    "subCategory": "Singlets",
    "price": 14500,
    "originalPrice": 16500,
    "images": [
      "/images/boys_cotton_singlets.jpg"
    ],
    "description": "Value 3-pack of pure combed cotton sleeveless singlets for boys. Soft, breathable, and pre-shrunk for school and daily home wear.",
    "audience": "boys",
    "ageGroup": "4-7Y",
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 24,
    "sizes": [
      "2-3Y",
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y",
      "11-12Y"
    ],
    "colors": [
      {
        "name": "White",
        "hex": "#FFFFFF"
      }
    ],
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroups": [
      "1-3Y",
      "4-7Y",
      "8-12Y"
    ],
    "productType": "clothing",
    "isFeatured": false,
    "details": {
      "material": "100% premium combed cotton, pack of 3 white singlets",
      "fit": "Standard comfortable base-layer fit",
      "care": "Machine wash warm, tumble dry low.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    }
  },
  {
    "id": "bb-b-011",
    "name": "Boys Classic Baseball Cap",
    "category": "accessories",
    "subCategory": "Hats & Caps",
    "price": 8500,
    "images": [
      "/images/kids_baseball_cap.jpg"
    ],
    "description": "Durable cotton twill baseball cap with curved visor and adjustable back strap. Embroidered eyelets provide ventilation for sunny days.",
    "audience": "boys",
    "ageGroup": "4-7Y",
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 14,
    "sizes": [
      "One Size (Adjustable)"
    ],
    "colors": [
      {
        "name": "Royal Blue",
        "hex": "#1E3A8A"
      }
    ],
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "productType": "accessories",
    "isFeatured": false,
    "details": {
      "material": "100% washed cotton twill with embroidered eyelets",
      "fit": "Adjustable back strap for growing children",
      "care": "Spot clean with damp cloth.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    }
  },
  {
    "id": "bb-b-012",
    "name": "Boys Cotton Crew Socks (Pack of 5)",
    "category": "accessories",
    "subCategory": "Socks",
    "price": 7500,
    "images": [
      "/images/boys_crew_socks_clean.jpg"
    ],
    "description": "Pack of 5 pairs of cushioned cotton crew socks with ribbed cuffs and reinforced heels for school shoes and sneakers.",
    "audience": "boys",
    "ageGroup": "4-7Y",
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 22,
    "sizes": [
      "2-4Y",
      "5-7Y",
      "8-11Y"
    ],
    "colors": [
      {
        "name": "Multi Pack",
        "hex": "#CBD5E1"
      }
    ],
    "isNewArrival": true,
    "occasions": [
      "everyday"
    ],
    "ageGroups": [
      "4-7Y",
      "8-12Y"
    ],
    "productType": "accessories",
    "isFeatured": false,
    "details": {
      "material": "75% combed cotton, 22% polyester, 3% elastane",
      "fit": "Ribbed elastic cuff with reinforced heel and toe",
      "care": "Machine wash cold.",
      "inStoreAvailability": "In Stock at Galleria Mall, Orchid, Lagos."
    }
  }

];

// Helper to determine fine-grained retail product type for intelligent visual merchandising
export function getProductMerchandisingType(p: Product): string {
  const sub = (p.subCategory || '').toLowerCase();
  const name = (p.name || '').toLowerCase();
  const cat = (p.category || '').toLowerCase();
  const pt = (p.productType || '').toLowerCase();

  if (sub.includes('sock') || name.includes('sock')) return 'socks';
  if (sub.includes('bow tie') || name.includes('bow tie')) return 'bow_tie';
  if (sub.includes('pencil') || name.includes('pencil')) return 'pencil_case';
  if (name.includes('backpack') || sub.includes('school bag')) return 'school_bag';
  if (sub.includes('ride-on') || pt === 'ride-ons' || name.includes('electric')) return 'ride_on';
  if (cat === 'shoes' || pt === 'shoes') return 'shoes';
  if (cat === 'gifts' || pt === 'gifts' || name.includes('gift')) return 'gifts';
  if (cat === 'baby' || pt === 'baby-essentials' || name.includes('romper') || name.includes('bib')) return 'baby';
  if (cat === 'toys' || pt === 'toys') return 'toys';
  if (sub.includes('bag') || cat === 'bags' || pt === 'bags') return 'bags';
  if (cat === 'girls' || (pt === 'clothing' && p.audience === 'girls')) return 'girls_clothing';
  if (cat === 'boys' || (pt === 'clothing' && p.audience === 'boys')) return 'boys_clothing';
  return 'accessories';
}

// Balances catalogue sequences to avoid displaying adjacent products from the same immediate type
// (e.g. prevents consecutive school bags, shoes, socks, ride-ons, or dresses side by side).
export function interleaveProductVariety(items: Product[]): Product[] {
  if (items.length <= 2) return items;

  const remaining = [...items];
  const result: Product[] = [];

  // Start with a high-affinity hero pick (e.g. Pink Bow Dress or Girls clothing)
  const firstIdx = remaining.findIndex(p => p.isFeatured && (p.category === 'girls' || p.category === 'boys'));
  const first = firstIdx >= 0 ? remaining.splice(firstIdx, 1)[0] : remaining.shift()!;
  result.push(first);

  const minSpacing: Record<string, number> = {
    socks: 20,
    bow_tie: 25,
    pencil_case: 25,
    school_bag: 8,
    ride_on: 10,
    gifts: 8,
    baby: 6,
    toys: 5,
    bags: 4,
    shoes: 2,
    girls_clothing: 3,
    boys_clothing: 2,
    accessories: 3
  };

  while (remaining.length > 0) {
    let bestIdx = 0;
    let minPenalty = Number.MAX_SAFE_INTEGER;

    const last1 = result[result.length - 1];
    const last1Ft = getProductMerchandisingType(last1);
    const last2 = result.length > 1 ? result[result.length - 2] : null;

    for (let i = 0; i < remaining.length; i++) {
      const candidate = remaining[i];
      const ft = getProductMerchandisingType(candidate);
      let pen = 0;

      // Heavy penalty for identical fine type, category, or subCategory immediately adjacent
      if (ft === last1Ft) pen += 10000;
      if (candidate.category === last1.category) pen += 5000;
      if (candidate.productType === last1.productType) pen += 3000;
      if (candidate.subCategory && candidate.subCategory === last1.subCategory) pen += 8000;

      // Spacing penalty based on distance from recent occurrences
      for (let d = 0; d < Math.min(25, result.length); d++) {
        const prev = result[result.length - 1 - d];
        if (getProductMerchandisingType(prev) === ft) {
          const req = minSpacing[ft] || 3;
          if (d < req) {
            pen += (req - d) * 1500;
          }
          break;
        }
      }

      // Row-mate penalty for 2-column mobile cards
      if (last2) {
        if (ft === getProductMerchandisingType(last2)) pen += 800;
        if (candidate.category === last2.category) pen += 400;
      }

      if (pen < minPenalty) {
        minPenalty = pen;
        bestIdx = i;
        if (pen === 0) break;
      }
    }

    const chosen = remaining.splice(bestIdx, 1)[0];
    result.push(chosen);
  }

  // Post-pass to eliminate any residual adjacent fine-type or category collisions
  for (let i = 1; i < result.length; i++) {
    const tCurrent = getProductMerchandisingType(result[i]);
    const tPrev = getProductMerchandisingType(result[i - 1]);
    if (tCurrent === tPrev || result[i].category === result[i - 1].category) {
      for (let j = 1; j < result.length - 1; j++) {
        if (
          j !== i &&
          j !== i - 1 &&
          getProductMerchandisingType(result[j - 1]) !== tCurrent &&
          getProductMerchandisingType(result[j]) !== tCurrent &&
          result[j - 1].category !== result[i].category &&
          result[j].category !== result[i].category
        ) {
          const [item] = result.splice(i, 1);
          result.splice(j, 0, item);
          break;
        }
      }
    }
  }

  return result;
}

export const PRODUCTS: Product[] = interleaveProductVariety(RAW_PRODUCTS);

export const NEW_ARRIVALS_PRODUCTS: Product[] = interleaveProductVariety(
  RAW_PRODUCTS.filter(p => p.isNewArrival)
);
