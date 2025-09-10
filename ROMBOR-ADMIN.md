# Руководство администратора ROMBOR

Добро пожаловать! Ниже — как быстро изменять сайт: добавлять товары, править палитру, навигацию и т.д.

## Структура
- Товары: `client/data/products.ts`
- Главная: `client/pages/Index.tsx`
- Ассортимент: `client/pages/Assortment.tsx`
- О нас: `client/pages/About.tsx`
- Заказ: `client/pages/Order.tsx`
- Общий макет (шапка/подвал): `client/components/layout/*`
- Корзина (логика): `client/store/cart.tsx`
- Тема/цвета: `client/global.css` (HSL переменные), `tailwind.config.ts`

## Товары
Файл: `client/data/products.ts`

1. Добавьте новый объект в массив `products`:
```ts
{
  id: "tbl-new-006",
  name: "Название",
  slug: "slug-dlya-ssylki",
  price: 19900,
  category: "Столы", // или из списка категорий
  materials: ["Материал 1", "Материал 2"],
  description: "Краткое описание",
  images: ["URL_картинки_1", "URL_картинки_2"],
  tags: ["опц-тег1", "опц-тег2"],
  featured: true // опционально — для блока «Популярное»
}
```
2. Категории управляются в `categories` в том же файле. Добавьте новую пару `{ key, label }` и используйте её в `category` товаров.

## Сортировка и поиск
На странице `Assortment.tsx` есть:
- Строка поиска `query` (ищет по названию, описанию, тегам, материалам)
- Категория `cat` (фильтр)
- Поле `sort` со значениями: `popular`, `price-asc`, `price-desc`, `name`

Чтобы добавить новую сортировку, расширьте тип `sort` и добавьте соответствующую ветку в вычисление `items`.

## Корзина
Логика корзины в `client/store/cart.tsx` (контекст + localStorage). Функции:
- `add(product, qty?)` — добавить позицию
- `remove(productId)` — удалить позицию
- `setQty(productId, qty)` — изменить количество
- `clear()` — очистить

Индикатор и панель корзины встроены в шапку (`Header.tsx`).

## Палитра и стиль
Темные «лофт» тона заданы в `client/global.css` через HSL переменные (раздел `.dark`).
- Основные: `--background`, `--foreground`, `--primary`, `--accent`, и т.д.
- Для изменений отредактируйте значения HSL (формат важен для Tailwind).

## Навигация
Меню находится в `client/components/layout/Header.tsx`. Добавляйте пункты `<NavLink to="/route">Текст</NavLink>` и зарегистрируйте маршрут в `client/App.tsx`.

## Изображения
В примерах используются ссылки Unsplash. Можно заменить на локальные — добавляйте файлы в `public/` и указывайте путь, например: `/images/my-photo.jpg`.

## SEO
`index.html`: язык `ru`, `theme-color`, `description`, `title`.

## Развертывание
- Рекомендуем Netlify или Vercel. Подключите MCP и запустите деплой.

Если нужны дополнительные разделы (портфолио проектов, отзывы, калькулятор стоимости) — напишите, добавим.
