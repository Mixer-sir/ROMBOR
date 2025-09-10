import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/store/cart";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? "bg-secondary text-foreground" : "text-foreground/80 hover:text-foreground hover:bg-secondary"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export function Header() {
  const cart = useCart();

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold tracking-[0.2em] text-xl">
          <span className="text-primary">ROM</span>BOR
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/assortment">Ассортимент</NavItem>
          <NavItem to="/about">О нас</NavItem>
          <NavItem to="/order">Заказ</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="relative" aria-label="Корзина">
                <ShoppingCart className="h-5 w-5" />
                {cart.count > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full bg-primary text-primary-foreground text-xs px-1 grid place-items-center">
                    {cart.count}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[92vw] sm:w-[420px]">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {cart.items.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Ваша корзина пуста</p>
                ) : (
                  <div className="space-y-4">
                    {cart.items.map((item) => (
                      <div key={item.product.id} className="flex items-start gap-3">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-16 w-16 object-cover rounded"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium leading-none">{item.product.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{item.product.price.toLocaleString("ru-RU")} ₽</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => cart.remove(item.product.id)}>
                              Удалить
                            </Button>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Button variant="secondary" size="sm" onClick={() => cart.setQty(item.product.id, item.quantity - 1)}>-</Button>
                            <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                            <Button variant="secondary" size="sm" onClick={() => cart.setQty(item.product.id, item.quantity + 1)}>+</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Итого</span>
                      <span className="text-lg font-semibold">{cart.total.toLocaleString("ru-RU")} ₽</span>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/order" className="flex-1">
                        <Button className="w-full">Оформить</Button>
                      </Link>
                      <Button variant="secondary" onClick={cart.clear}>Очистить</Button>
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
