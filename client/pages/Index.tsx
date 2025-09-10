import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Index() {
  const featured = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-xl mt-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493666438817-791f3cb63aff?q=80&w=1920&auto=format&fit=crop"
            alt="ROMBOR Loft Furniture"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" />
        </div>
        <div className="relative container mx-auto py-24 md:py-36">
          <p className="uppercase tracking-[0.35em] text-sm text-muted-foreground">Дерево • Металл • Ручная работа</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
            ROMBOR — мебель и изделия в стиле лофт
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            Темные, благородные оттенки масла и прочная сталь. Минимализм формы, максимум характера.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/assortment"><Button size="lg">Перейти в ассортимент</Button></Link>
            <Link to="/about"><Button size="lg" variant="secondary">О компании</Button></Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Популярное</h2>
            <p className="mt-2 text-muted-foreground">Выбор наших клиентов — готово к заказу.</p>
          </div>
          <Link to="/assortment" className="hidden md:inline-block"><Button variant="ghost">Смотреть всё →</Button></Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="rounded-xl border border-border bg-secondary/30 p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Философия ROMBOR</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Мы создаём мебель и предметы интерьера в стиле лофт из массива древесины и металла.
              В каждом изделии — честность материалов, функциональность и долговечность. Цвета —
              темные, как масло на дереве, и благородная патина стали.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/assortment"><Button>Ассортимент</Button></Link>
              <Link to="/order"><Button variant="secondary">Заказ</Button></Link>
            </div>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
              alt="Loft materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
