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
    name: 'Girls',
    categoryKey: 'girls',
    description: 'Cute, fun and full of personality.',
    image: '/images/girls_nigerian_yellow_1787489114238.jpg',
    accentColor: '#173F70',
    badgeText: 'Dresses & Twirl Sets'
  },
  {
    id: 'cat-boys',
    name: 'Boys',
    categoryKey: 'boys',
    description: 'Cool looks for every little adventure.',
    image: '/images/boys_nigerian_safari_1787489099338.jpg',
    accentColor: '#2563C7',
    badgeText: 'Cool Sets & Denim'
  },
  {
    id: 'cat-baby',
    name: 'Baby',
    categoryKey: 'baby',
    description: 'Tiny outfits with plenty of charm.',
    image: '/images/baby_nigerian_romper_1787489085642.jpg',
    accentColor: '#F4C430',
    badgeText: 'Soft Rompers & Sets'
  },
  {
    id: 'cat-shoes',
    name: 'Shoes',
    categoryKey: 'shoes',
    description: 'Comfy kicks for playing and shiny pairs for parties.',
    image: '/images/white_chunky_sandals_1788991065781.jpg',
    accentColor: '#27AFA5',
    badgeText: 'Sneakers & Sandals'
  },
  {
    id: 'cat-accessories',
    name: 'Accessories',
    categoryKey: 'accessories',
    description: 'Mini bags, backpacks, and little touches.',
    image: '/images/pink_school_backpack_1788990964231.jpg',
    accentColor: '#D93F92',
    badgeText: 'Bags & Hats'
  },
  {
    id: 'cat-gifts',
    name: 'Toys & Gifts',
    categoryKey: 'gifts',
    description: 'Thoughtful surprises that get the happiest smiles.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80',
    accentColor: '#F58220',
    badgeText: 'Hampers & Toys'
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
    id: 'mom-birthday',
    title: 'Birthday Coming Up?',
    momentKey: 'birthday',
    tagline: 'Their Big Day',
    description: 'Find something they’ll be excited to unwrap.',
    image: '/images/nigerian_birthday_kids_1787489171127.jpg',
    color: '#F58220'
  },
  {
    id: 'mom-everyday',
    title: 'A New Outfit?',
    momentKey: 'everyday',
    tagline: 'Fresh Fits',
    description: 'Let’s get them looking good.',
    image: '/images/boys_nigerian_safari_1787489099338.jpg',
    color: '#2563C7'
  },
  {
    id: 'mom-gifting',
    title: 'Need a Gift?',
    momentKey: 'gifting',
    tagline: 'Stress-Free Picking',
    description: 'We’ve got ideas for the little one.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    color: '#27AFA5'
  },
  {
    id: 'mom-special',
    title: 'Just Because?',
    momentKey: 'special-occasion',
    tagline: 'Spoil Them A Little',
    description: 'Honestly, they deserve it. 😂',
    image: '/images/editorial_nigerian_twirl_1787489158292.jpg',
    color: '#173F70'
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
    image: '/images/hero_nigerian_girl_1787489055452.jpg',
    caption: 'Birthday twirls in our Petal Pink Bow Dress ✨ She understood the assignment!',
    type: 'look',
    likes: '482'
  },
  {
    id: 'ig-2',
    image: '/images/boys_nigerian_denim_1787489068562.jpg',
    caption: 'Boys denim drop now live in store and online 💙 Match your vibe!',
    type: 'look',
    likes: '390'
  },
  {
    id: 'ig-3',
    image: '/images/editorial_nigerian_twirl_1787489158292.jpg',
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
  tagline: 'Match your vibe, Bloom your style',
  address: 'Galleria Mall, Orchid, Lagos, Nigeria',
  phoneDisplay: '0806 014 3654',
  phoneRaw: '2348060143654',
  instagramHandle: '@buububloom_',
  instagramUrl: 'https://instagram.com/buububloom_',
  whatsappUrl: 'https://wa.me/2348060143654?text=Hi%20Buubu%20Bloom%2C%20I%20need%20help%20choosing%20something%20for%20a%20child.',
  deliveryText: 'Nationwide delivery across all 36 Nigerian states & FCT Abuja'
};

export const FAQ_ITEMS = [
  {
    question: 'Where is Buubu Bloom located?',
    answer: "We're at Galleria Mall, Orchid, Lagos. You're always welcome to walk in, browse the racks, and check sizes in person."
  },
  {
    question: 'Do you deliver outside Lagos?',
    answer: 'Yes! We deliver nationwide across Nigeria. We package your items carefully and dispatch them quickly to your doorstep.'
  },
  {
    question: 'What do you sell at Buubu Bloom?',
    answer: "We stock children's outfits, shoes, accessories, toys, ride-ons and ready-to-go gift boxes for babies up to early teens."
  },
  {
    question: 'How do I place an order?',
    answer: 'You can add items to your bag and checkout directly on this site, or send us a WhatsApp message on 0806 014 3654 if you want quick advice or have questions.'
  },
  {
    question: 'Can I pick up my order in person?',
    answer: 'Yes, absolutely. You can place your order online and collect it directly at our store at Galleria Mall, Orchid.'
  },
  {
    question: 'How do I know what size to pick?',
    answer: "Most of our pieces fit true to age. If you're unsure or between sizes, send us a quick WhatsApp message and we'll gladly recommend the right fit for your child."
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

