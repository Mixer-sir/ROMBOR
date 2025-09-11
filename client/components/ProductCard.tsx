import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();

  return (
    <div className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors">
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full text-left">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-base leading-tight">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
              <p className="mt-2 font-semibold">{product.price.toLocaleString("ru-RU")} ₽</p>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between gap-4">
              {product.name}
              <span className="text-base font-semibold text-primary">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img src={src} alt={`${product.name} фото ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Материалы</p>
                <ul className="mt-2 text-sm space-y-1">
                  {product.materials.map((m) => (
                    <li key={m}>��� {m}</li>
                  ))}
                </ul>
              </div>
              <Button className="mt-6 w-full" disabled={cart.locked} onClick={() => cart.add(product)}>
                {cart.locked ? "Подождите 3 сек" : "В корзину"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="px-4 pb-4">
        <Button variant="secondary" className="w-full" disabled={cart.locked} onClick={() => cart.add(product)}>
          {cart.locked ? "Подождите 3 сек" : "Добавить в корзину"}
        </Button>
      </div>
    </div>
  );
}
