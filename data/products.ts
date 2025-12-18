export interface Product {
  id: string;
  slug: string;
  name: {
    zh: string;
    en?: string;
    fr?: string;
    es?: string;
  };
  description: {
    zh: string;
    en?: string;
    fr?: string;
    es?: string;
  };
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  origin: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  // 风土标签
  terroirTags?: string[];
  // 诗意短句
  poeticLine?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-tongcheng-xiaohua",
    name: {
      zh: "精品桐城小花茶",
    },
    description: {
      zh: "我们精选的桐城小花茶，手工采摘自安徽省高海拔茶园。这款精品茶具有细腻的花香和顺滑清爽的口感。",
    },
    price: 199,
    originalPrice: 269,
    images: [
      "/images/tea-1.jpg",
      "/images/tea-1-2.jpg",
      "/images/tea-1-3.jpg",
    ],
    category: "精品",
    origin: "安徽省桐城市",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    featured: true,
    terroirTags: ["龙眠山", "海拔700m+", "明前头采"],
    poeticLine: "一盏小花，清风自来",
  },
  {
    id: "2",
    slug: "classic-tongcheng-xiaohua",
    name: {
      zh: "经典桐城小花茶",
    },
    description: {
      zh: "经典之选，捕捉桐城小花的正宗风味。适合日常品饮，口感平衡。",
    },
    price: 169,
    images: [
      "/images/tea-2.jpg",
      "/images/tea-2-2.jpg",
    ],
    category: "经典",
    origin: "安徽省桐城市",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    featured: true,
    terroirTags: ["龙眠山", "海拔600m+", "谷雨香茗"],
    poeticLine: "经典传承，岁月留香",
  },
  {
    id: "3",
    slug: "organic-tongcheng-xiaohua",
    name: {
      zh: "有机桐城小花茶",
    },
    description: {
      zh: "认证有机桐城小花茶，无农药无化学添加。纯净自然的风味，既尊重传统也尊重自然。",
    },
    price: 239,
    images: [
      "/images/tea-3.jpg",
      "/images/tea-3-2.jpg",
    ],
    category: "有机",
    origin: "安徽省桐城市",
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    featured: true,
    terroirTags: ["有机认证", "龙眠山", "海拔750m+"],
    poeticLine: "自然本真，茶香如故",
  },
  {
    id: "4",
    slug: "spring-harvest-xiaohua",
    name: {
      zh: "春茶桐城小花",
    },
    description: {
      zh: "限量版春茶，头采时节采摘。最嫩的叶片，带来非凡的新鲜感和层次感。",
    },
    price: 299,
    images: [
      "/images/tea-4.jpg",
    ],
    category: "限量版",
    origin: "安徽省桐城市",
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
    featured: false,
    terroirTags: ["明前特级", "头采", "限量"],
    poeticLine: "春茶一盏，满室生香",
  },
  {
    id: "5",
    slug: "gift-set-xiaohua",
    name: {
      zh: "礼盒装 - 桐城小花精选",
    },
    description: {
      zh: "精美礼盒装，包含三款桐城小花茶，完美分享正宗中国茶体验。",
    },
    price: 539,
    images: [
      "/images/gift-set.jpg",
    ],
    category: "礼盒",
    origin: "安徽省桐城市",
    rating: 4.7,
    reviewCount: 63,
    inStock: true,
    featured: false,
    terroirTags: ["精选组合", "礼盒装"],
    poeticLine: "一份心意，三款好茶",
  },
  {
    id: "6",
    slug: "aged-tongcheng-xiaohua",
    name: {
      zh: "陈年桐城小花茶",
    },
    description: {
      zh: "精心陈化的桐城小花茶，具有深邃复杂的风味。鉴赏家之选，适合特殊场合。",
    },
    price: 369,
    images: [
      "/images/tea-aged.jpg",
    ],
    category: "精品",
    origin: "安徽省桐城市",
    rating: 4.8,
    reviewCount: 28,
    inStock: true,
    featured: false,
    terroirTags: ["陈年", "限量"],
    poeticLine: "时光沉淀，韵味悠长",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
