import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";

export default function Order() {
  const cart = useCart();

  return (
    <section className="py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Заказ</h1>
      <p className="mt-2 text-muted-foreground">Ниже — текущие позиции вашей корзины. Оформление можно продолжить позже.</p>
      <div className="mt-6 space-y-4">
        {cart.items.length === 0 ? (
          <p className="text-muted-foreground">Корзина пуста. Перейдите в раздел «Ассортимент», чтобы добавить товары.</p>
        ) : (
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.product.id} className="flex items-center justify-between gap-4 border border-border rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <img src={item.product.images[0]} alt={item.product.name} className="h-16 w-16 object-cover rounded" />
                  <div>
                    <p className="font-medium leading-none">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.product.price.toLocaleString("ru-RU")} ₽ × {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{(item.product.price * item.quantity).toLocaleString("ru-RU")} ₽</p>
                  <Button variant="ghost" size="sm" className="mt-1" onClick={() => cart.remove(item.product.id)}>Удалить</Button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">Итого</span>
              <span className="text-xl font-bold">{cart.total.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="flex gap-2">
              <Button className="">Отправить заявку</Button>
              <Button variant="secondary" onClick={cart.clear}>Очистить</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
