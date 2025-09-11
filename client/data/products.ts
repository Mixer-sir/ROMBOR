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

import { expandedProducts } from "./products-expanded";

// Легко редактируемый список товаров. Просто добавьте новый объект Product.
export const products: Product[] = expandedProducts;

export const categories: { key: Category; label: string }[] = [
  { key: "Столы", label: "Столы" },
  { key: "Стулья", label: "Стулья" },
  { key: "Стеллажи", label: "Стеллажи" },
  { key: "Декор", label: "Декор" },
  { key: "Прочее", label: "Прочее" },
];
