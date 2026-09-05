/**
 * 1Fi Marketplace - Clean Mock Data
 */

export const TOP_BRANDS = [
  {
    id: 'brand-air-india',
    name: 'Air India',
    tenureInfo: 'No-cost EMIs upto 18 months',
    bgColor: '#D91C24',
    textColor: '#FFFFFF',
    logoText: 'AIR INDIA'
  },
  {
    id: 'brand-apple',
    name: 'Apple Premium Reseller',
    tenureInfo: 'No-cost EMIs upto 24 months',
    bgColor: '#000000',
    textColor: '#FFFFFF',
    isApple: true
  },
  {
    id: 'brand-caratlane',
    name: 'CaratLane',
    tenureInfo: 'No-cost EMIs upto 6 months',
    bgColor: '#4B207F',
    textColor: '#FFFFFF',
    logoText: 'CARATLANE'
  },
  {
    id: 'brand-cgh-earth',
    name: 'CGH Earth',
    tenureInfo: 'No-cost EMIs upto 24 months',
    bgColor: '#FFFFFF',
    textColor: '#2D3748',
    logoText: 'cghearth',
    border: '1px solid #E2E8F0'
  },
  {
    id: 'brand-croma',
    name: 'Croma',
    tenureInfo: 'No-cost EMIs upto 6 months',
    bgColor: '#00838F',
    textColor: '#FFFFFF',
    logoText: 'croma'
  },
  {
    id: 'brand-easemytrip-holiday',
    name: 'EaseMyTrip Holiday',
    tenureInfo: 'No-cost EMIs upto 24 months',
    bgColor: '#0F62FE',
    textColor: '#FFFFFF',
    logoText: 'EaseMyTrip'
  },
  {
    id: 'brand-easemytrip-hotel',
    name: 'EaseMyTrip Hotel',
    tenureInfo: 'No-cost EMIs upto 24 months',
    bgColor: '#1D4ED8',
    textColor: '#FFFFFF',
    logoText: 'EaseMyTrip'
  }
];

export const NEARBY_STORES = [
  {
    id: 'store-pacholi-hayatpur',
    name: 'Pacholi Suzuki Hayatpur',
    distance: '206 KM',
    address: 'RAKBA 12, KANAL 11, MARLA O, Hayatpur, SARSAI, Gurugram, Haryana, 122001',
    brandType: 'suzuki'
  },
  {
    id: 'store-tripbouquet',
    name: 'TripBouquet',
    distance: '210 KM',
    address: '241, Tower B, Spazedge, near Dmart, Gurugram, Haryana, 122018',
    brandType: 'trip'
  },
  {
    id: 'store-charger-on-wheels',
    name: 'Charger On Wheels',
    distance: '211 KM',
    address: 'Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101',
    brandType: 'charger'
  },
  {
    id: 'store-malwa-honda',
    name: 'Malwa Honda Khandsa Road',
    distance: '211 KM',
    address: '60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001',
    brandType: 'honda'
  },
  {
    id: 'store-ashoka-suzuki',
    name: 'Ashoka Suzuki',
    distance: '211 KM',
    address: 'Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001',
    brandType: 'suzuki'
  },
  {
    id: 'store-pacholi-rajiv-chowk',
    name: 'Pacholi Suzuki Rajiv Chowk',
    distance: '212 KM',
    address: '6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001',
    brandType: 'suzuki'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'laptops', name: 'Laptops' },
  { id: 'audio', name: 'Audio & Wearables' },
  { id: 'tablets', name: 'Tablets' }
];

export const PRODUCTS = [
  {
    id: 'prod-iphone-17-promax',
    title: 'Apple iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    rating: 4.9,
    reviewsCount: 384,
    badge: '0% Interest',
    isPopular: true,
    description: 'Aerospace-grade titanium chassis, A19 Pro Bionic silicon, next-gen periscope optical zoom, and 33-hour battery life.',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 139900,
    mrp: 154900,
    colors: [
      { name: 'Natural Titanium', hex: '#9E978E', imageIndex: 0 },
      { name: 'Desert Titanium', hex: '#C2A383', imageIndex: 1 },
      { name: 'Black Titanium', hex: '#2B2B2C', imageIndex: 2 }
    ],
    variants: [
      { id: 'v-256', name: '256 GB', priceDelta: 0 },
      { id: 'v-512', name: '512 GB', priceDelta: 20000 },
      { id: 'v-1tb', name: '1 TB', priceDelta: 40000 }
    ],
    specs: {
      'Processor': 'Apple A19 Pro (3nm Ultra)',
      'Display': '6.9" Super Retina XDR 120Hz ProMotion',
      'Camera': '48MP Fusion + 48MP Ultra-Wide + 5x Telephoto',
      'Battery': 'Up to 33 hours video playback'
    },
    tenurePlans: [3, 6, 9, 12, 18, 24]
  },
  {
    id: 'prod-pixel-10-pro',
    title: 'Google Pixel 10 Pro 5G',
    brand: 'Google',
    category: 'smartphones',
    rating: 4.8,
    reviewsCount: 219,
    badge: '0% EMI',
    isPopular: true,
    description: 'Built natively for Google Gemini AI. Features Tensor G5 processor, Super Actua display, and pro camera system.',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 109999,
    mrp: 124999,
    colors: [
      { name: 'Obsidian Black', hex: '#1F2421', imageIndex: 0 },
      { name: 'Porcelain White', hex: '#ECEAE4', imageIndex: 1 }
    ],
    variants: [
      { id: 'v-128', name: '128 GB', priceDelta: 0 },
      { id: 'v-256', name: '256 GB', priceDelta: 10000 },
      { id: 'v-512', name: '512 GB', priceDelta: 24000 }
    ],
    specs: {
      'Processor': 'Google Tensor G5 AI Engine',
      'Display': '6.7" LTPO OLED Actua 1-120Hz (3000 nits)',
      'Camera': '50MP Main OIS + 48MP 5x Tele + 48MP Macro'
    },
    tenurePlans: [3, 6, 9, 12, 18]
  },
  {
    id: 'prod-s25-ultra',
    title: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'Samsung',
    category: 'smartphones',
    rating: 4.9,
    reviewsCount: 412,
    badge: '0% Interest',
    isPopular: true,
    description: 'Titanium armor frame, embedded Bluetooth S-Pen stylus, Galaxy AI on-device intelligence, and 200MP camera.',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 129999,
    mrp: 144999,
    colors: [
      { name: 'Titanium Gray', hex: '#63666A', imageIndex: 0 },
      { name: 'Titanium Violet', hex: '#58427C', imageIndex: 1 }
    ],
    variants: [
      { id: 'v-256', name: '256 GB / 12GB RAM', priceDelta: 0 },
      { id: 'v-512', name: '512 GB / 12GB RAM', priceDelta: 15000 },
      { id: 'v-1tb', name: '1 TB / 16GB RAM', priceDelta: 35000 }
    ],
    specs: {
      'Processor': 'Snapdragon 8 Elite for Galaxy',
      'Display': '6.8" Dynamic AMOLED 2X Anti-Reflective',
      'Camera': '200MP OIS + 50MP 5x Periscope + 50MP Ultrawide',
      'Stylus': 'Embedded Bluetooth S-Pen'
    },
    tenurePlans: [3, 6, 9, 12, 18, 24]
  },
  {
    id: 'prod-macbook-pro-m4',
    title: 'Apple MacBook Pro 16" (M4 Max)',
    brand: 'Apple',
    category: 'laptops',
    rating: 5.0,
    reviewsCount: 156,
    badge: '0% EMI',
    isPopular: true,
    description: 'Liquid Retina XDR screen with extreme dynamic range, 22-hour battery life, and high-performance unified memory.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 249900,
    mrp: 269900,
    colors: [
      { name: 'Space Black', hex: '#1F2022', imageIndex: 0 },
      { name: 'Silver', hex: '#E2E4E6', imageIndex: 1 }
    ],
    variants: [
      { id: 'v-36gb', name: '36 GB / 512 GB SSD', priceDelta: 0 },
      { id: 'v-48gb', name: '48 GB / 1 TB SSD', priceDelta: 40000 },
      { id: 'v-128gb', name: '128 GB / 2 TB SSD', priceDelta: 90000 }
    ],
    specs: {
      'CPU': '16-Core Apple M4 Max Silicon',
      'GPU': '40-Core Neural Engine GPU',
      'Display': '16.2" Liquid Retina XDR 120Hz',
      'Battery': 'Up to 22 hours battery life'
    },
    tenurePlans: [6, 12, 18, 24]
  },
  {
    id: 'prod-sony-wh1000xm5',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Sony',
    category: 'audio',
    rating: 4.8,
    reviewsCount: 890,
    badge: '0% Interest',
    isPopular: false,
    description: 'Industry-leading noise cancelation with two processors and 8 microphones, LDAC Hi-Res Audio, 30-hour battery.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 28990,
    mrp: 34990,
    colors: [
      { name: 'Black', hex: '#1C1C1C', imageIndex: 0 },
      { name: 'Silver', hex: '#DCD9CD', imageIndex: 1 }
    ],
    variants: [
      { id: 'v-std', name: 'Standard Edition', priceDelta: 0 }
    ],
    specs: {
      'ANC': 'Auto NC Optimizer with Integrated Processor V1',
      'Battery': '30 Hours with quick charging',
      'Driver': 'Precision engineered 30mm carbon fiber'
    },
    tenurePlans: [3, 6, 9, 12]
  },
  {
    id: 'prod-ipad-pro-m4',
    title: 'Apple iPad Pro 13" (M4 OLED)',
    brand: 'Apple',
    category: 'tablets',
    rating: 4.8,
    reviewsCount: 167,
    badge: '0% Interest',
    isPopular: true,
    description: 'Thinnest Apple device ever made with Tandem OLED Ultra Retina XDR display, M4 chip power, and Apple Pencil Pro support.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80'
    ],
    basePrice: 129900,
    mrp: 139900,
    colors: [
      { name: 'Space Black', hex: '#202020', imageIndex: 0 },
      { name: 'Silver', hex: '#E4E4E4', imageIndex: 0 }
    ],
    variants: [
      { id: 'v-256', name: '256 GB Wi-Fi', priceDelta: 0 },
      { id: 'v-512', name: '512 GB Wi-Fi', priceDelta: 20000 }
    ],
    specs: {
      'Chipset': 'Apple M4 Chip with 10-core GPU',
      'Display': '13.0" Tandem OLED Ultra Retina XDR',
      'Thickness': '5.1 mm Ultra-Thin Profile'
    },
    tenurePlans: [3, 6, 9, 12, 18]
  }
];
