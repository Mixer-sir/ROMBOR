import { useMemo, useState } from "react";
import { products, categories, type Category } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductCard } from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

export default function Assortment() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | "Все">("Все");
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "name">("popular");

  const items = useMemo(() => {
    let list = products.slice();
    if (cat !== "Все") list = list.filter((p) => p.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        [p.name, p.description, ...(p.tags || []), p.materials.join(" ")].join(" ").toLowerCase().includes(q),
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "popular") list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list;
  }, [query, cat, sort]);

  return (
    <section className="py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ассортимент</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Мебель и изделия в стиле лофт. Сортируйте, изучайте детали и добавляйте в корзину.
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex items-center gap-2 md:gap-3">
          <Input
            placeholder="Поиск..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="col-span-2 md:w-[280px]"
          />
          <Select value={cat} onValueChange={(v) => setCat(v as Category | "Все")}> 
            <SelectTrigger className="w-[160px]"><SelectValue placeholder="Категория" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Все">Все</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.key} value={c.key}>{c.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as any)}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Сортировка" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">По популярности</SelectItem>
              <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
              <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
              <SelectItem value="name">По названию</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator className="my-6" />
      {items.length === 0 ? (
        <p className="text-muted-foreground">Не найдено товаров по заданным параметрам.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
