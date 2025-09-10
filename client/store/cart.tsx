import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

const STORAGE_KEY = "rombor_cart_v1";

function loadInitial(): CartState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as CartState;
  } catch {}
  return { items: [] };
}

function saveState(state: CartState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export type CartContextValue = {
  items: CartItem[];
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>(() => loadInitial());

  useEffect(() => {
    saveState(state);
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const add = (product: Product, qty = 1) => {
      setState((s) => {
        const existing = s.items.find((i) => i.product.id === product.id);
        if (existing) {
          return {
            items: s.items.map((i) =>
              i.product.id === product.id
                ? { ...i, quantity: Math.min(99, i.quantity + qty) }
                : i,
            ),
          };
        }
        return { items: [...s.items, { product, quantity: qty }] };
      });
    };

    const remove = (productId: string) => {
      setState((s) => ({ items: s.items.filter((i) => i.product.id !== productId) }));
    };

    const setQty = (productId: string, qty: number) => {
      setState((s) => ({
        items: s.items
          .map((i) => (i.product.id === productId ? { ...i, quantity: Math.max(0, Math.min(99, qty)) } : i))
          .filter((i) => i.quantity > 0),
      }));
    };

    const clear = () => setState({ items: [] });

    const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const total = state.items.reduce((sum, i) => sum + i.quantity * i.product.price, 0);

    return { items: state.items, add, remove, setQty, clear, count, total };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
