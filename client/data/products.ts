export type Category =
  | "Столы"
  | "Стулья"
  | "Стеллажи"
  | "Декор"
  | "Прочее";

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number; // в рублях
  category: Category;
  materials: string[];
  description: string;
  images: string[];
  tags?: string[];
  featured?: boolean;
};

// Легко редактируемый список товаров. Просто добавьте новый объект Product.
export const products: Product[] = [
  {
    id: "tbl-roma-001",
    name: "Обеденный стол ROMA",
    slug: "obedennyj-stol-roma",
    price: 68900,
    category: "Столы",
    materials: ["Массив дуба", "Сталь порошковая окраска"],
    description:
      "Массивный стол в стиле лофт с фактурной столешн��цей из дуба и устойчивой металлической рамой.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["лофт", "дуб", "обеденный"],
    featured: true,
  },
  {
    id: "chr-bor-002",
    name: "Стул BORDO",
    slug: "stul-bordo",
    price: 12900,
    category: "Стулья",
    materials: ["Металл", "Эко-кожа"],
    description:
      "Эргономичный стул с мягкой посадкой и прочным металлическим каркасом.",
    images: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491972690050-ba117db4dc09?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["стул", "эко-кожа"],
    featured: true,
  },
  {
    id: "shf-industrial-003",
    name: "Стеллаж INDUSTRIAL",
    slug: "stellazh-industrial",
    price: 34900,
    category: "Стеллажи",
    materials: ["Сосна морёная", "Сталь"],
    description:
      "��ткрытый стеллаж для гостиной и офиса. Регулируемые опоры, индустриальный стиль.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-32f4b3e04303?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692794403-34d4982c2109?q=80&w=1600&auto=format&fit=crop",
    ],
    tags: ["стеллаж", "индустриальный"],
  },
  {
    id: "tbl-koff-004",
    name: "Журнальный стол KOFF",
    slug: "zhurnalnyj-stol-koff",
    price: 17900,
    category: "Столы",
    materials: ["Орех", "Сталь"],
    description:
      "Компактный журнальный столик с полкой для журналов. Приятная тёплая фактура ореха.",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493666438817-791f3cb63aff?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: "dcr-metal-005",
    name: "Металлическая полка STEEL",
    slug: "metall-polca-steel",
    price: 8900,
    category: "Декор",
    materials: ["Сталь", "Масло"],
    description:
      "Настенная полка из стали. Лаконичная форма и устойчивое покрытие под масло.",
    images: [
      "https://images.unsplash.com/photo-1582582494700-66fe1dc6a3f3?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

export const categories: { key: Category; label: string }[] = [
  { key: "Столы", label: "Столы" },
  { key: "Стулья", label: "Стулья" },
  { key: "Стеллажи", label: "Стеллажи" },
  { key: "Декор", label: "Декор" },
  { key: "Прочее", label: "Прочее" },
];
