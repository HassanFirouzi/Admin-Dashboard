import "server-only";
import { Order, Product, User } from "@/types";
import data from "../../db.json";

type Db = { products: Product[]; users: User[]; orders: Order[] };

const store: Db = data as unknown as Db;

export function nextId(items: { id: string }[]): string {
  const max = items.reduce((m, item) => Math.max(m, Number(item.id) || 0), 0);
  return String(max + 1);
}

export default store;
