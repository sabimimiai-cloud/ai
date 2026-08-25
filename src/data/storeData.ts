export interface CategoryInfo {
  id: string;
  name: string;
  categoryKey: string;
  description: string;
  image: string;
  accentColor: string;
  badgeText: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'cat-girls',
    name: 'GIRLS',
    categoryKey: 'girls',
    description: 'Pretty, playful & made to be noticed.',
    image: '/src/assets/images/hero_nigerian_girl_1787489055452.jpg',
    accentColor: '#D93F92',
    badgeText: 'Dresses & Sparkle'
  },
  {
    id: 'cat-boys',
    name: 'BOYS',
    categoryKey: 'boys',
    description: 'Cool looks for little trendsetters.',
    image: '/src/assets/images/boys_nigerian_denim_1787489068562.jpg',
    accentColor: '#173F70',
    badgeText: 'Sets, Linen & Denim'
  },
  {
    id: 'cat-baby',
    name: 'BABY',
    categoryKey: 'baby',
    description: 'Sweet pieces for their biggest little moments.',
    image: '/src/assets/images/baby_nigerian_romper_1787489085642.jpg',
    accentColor: '#F9C928',
    badgeText: 'Rompers & Soft Sets'
  },
  {
    id: 'cat-shoes',
    name: 'SHOES',
    categoryKey: 'shoes',
    description: 'Complete the look from head to toe.',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80',
    accentColor: '#27AFA5',
    badgeText: 'Sneakers, Flats & Kicks'
  },
  {
    id: 'cat-toys',
    name: 'TOYS & GIFTS',
    categoryKey: 'toys',
    description: 'For birthdays, surprises and everything in between.',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80',
    accentColor: '#F58220',
    badgeText: 'Ride-ons, Toys & Boxes'
  }
];

export interface MomentInfo {
  id: string;
  title: string;
  momentKey: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
}

export const MOMENTS_DATA: MomentInfo[] = [
  {
    id: 'mom-everyday',
    title: 'EVERYDAY STYLE',
    momentKey: 'everyday',
    tagline: 'Casual & Comfortable',
    description: 'For school runs, play dates and days that need a little extra style.',
    image: '/src/assets/images/boys_nigerian_safari_1787489099338.jpg',
    color: '#2563C7'
  },
  {
    id: 'mom-birthday',
    title: 'BIRTHDAY MOMENTS',
    momentKey: 'birthday',
    tagline: 'Main Character Energy',
    description: 'Because birthday pictures deserve a good outfit.',
    image: '/src/assets/images/nigerian_birthday_kids_1787489171127.jpg',
    color: '#F58220'
  },
  {
    id: 'mom-special',
    title: 'SPECIAL OCCASIONS',
    momentKey: 'special-occasion',
    tagline: 'Weddings & Celebrations',
    description: 'Little looks for the moments everyone remembers.',
    image: '/src/assets/images/boys_nigerian_suit_1787489130668.jpg',
    color: '#123B68'
  },
  {
    id: 'mom-gifting',
    title: 'GIFTING',
    momentKey: 'gifting',
    tagline: 'Wrapped With Love',
    description: 'Something beautiful for the little one you love.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    color: '#27AFA3'
  }
];

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  type: 'look' | 'store' | 'product' | 'reel';
  likes: string;
}

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: 'ig-1',
    image: '/src/assets/images/hero_nigerian_girl_1787489055452.jpg',
    caption: 'Birthday twirls in our Petal Pink Bow Dress ✨ She understood the assignment!',
    type: 'look',
    likes: '482'
  },
  {
    id: 'ig-2',
    image: '/src/assets/images/boys_nigerian_denim_1787489068562.jpg',
    caption: 'Boys denim drop now live in store and online 💙 Match your vibe!',
    type: 'look',
    likes: '390'
  },
  {
    id: 'ig-3',
    image: '/src/assets/images/editorial_nigerian_twirl_1787489158292.jpg',
    caption: 'Walking into Galleria Mall, Orchid like... ✨ Come visit us today!',
    type: 'store',
    likes: '612'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80',
    caption: 'New kicks alert 👟 Lightweight, flexible and easy for little hands to strap on.',
    type: 'product',
    likes: '320'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80',
    caption: 'When the birthday boy takes delivery of his new ride 🚗💨 Nationwide delivery across Nigeria!',
    type: 'reel',
    likes: '840'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    caption: 'Curated gift hampers headed out this morning 🎁 Let us handle the gift stress!',
    type: 'product',
    likes: '455'
  }
];

export const STORE_CONTACT = {
  name: 'BUUBU BLOOM',
  tagline: 'Match your vibe, Bloom your style!',
  address: 'Galleria Mall, Orchid, Lagos, Nigeria',
  phoneDisplay: '0806 014 3654',
  phoneRaw: '2348060143654',
  instagramHandle: '@buububloom_',
  instagramUrl: 'https://instagram.com/buububloom_',
  whatsappUrl: 'https://wa.me/2348060143654',
  deliveryText: 'Nationwide delivery across all 36 Nigerian states & FCT Abuja'
};

export const FAQ_ITEMS = [
  {
    question: 'Where is Buubu Bloom physically located?',
    answer: 'We are located at Galleria Mall, Orchid, Lagos, Nigeria. You are welcome to walk in, feel the fabrics, test ride-ons, and pick up your favourite pieces in person!'
  },
  {
    question: 'Do you deliver outside Lagos?',
    answer: 'Yes! We offer reliable nationwide doorstep delivery across all states in Nigeria. Lagos orders are dispatched within 24 hours, and interstate deliveries arrive securely via trusted logistics partners.'
  },
  {
    question: 'Can I order directly on WhatsApp?',
    answer: 'Absolutely. You can click any product or your shopping bag to send us a pre-filled WhatsApp message. Our styling team will confirm your order, sizing, and dispatch details immediately.'
  },
  {
    question: 'How do I choose the correct size for my child?',
    answer: 'Our clothes generally fit true to age. If your child is between sizes or taller than average for their age, we recommend sizing up for comfortable growing room. You can also chat with us on WhatsApp for exact garment measurements.'
  },
  {
    question: 'Can you curate and gift-wrap a birthday hamper for me?',
    answer: 'Yes! We specialize in custom birthday and newborn gift curation. Select our Gift Hampers or add a gift note at checkout, and we will package it in our luxury Bloom gift box with ribbon and a personalized card.'
  }
];

export const FAQS = FAQ_ITEMS;

export const CATEGORIES = [
  { id: 'all' as const, name: 'All Collection', count: 12 },
  { id: 'girls' as const, name: "Girls' Style", count: 4 },
  { id: 'boys' as const, name: "Boys' Outfits", count: 3 },
  { id: 'baby' as const, name: 'Baby & Newborn', count: 2 },
  { id: 'shoes' as const, name: 'Shoes & Footwear', count: 2 },
  { id: 'accessories' as const, name: 'Accessories', count: 2 },
  { id: 'toys' as const, name: 'Ride-ons & Toys', count: 2 },
  { id: 'gifts' as const, name: 'Gift Hampers', count: 2 },
];

