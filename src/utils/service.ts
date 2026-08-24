import { Order, Product, User } from "@/types";

// api url — served by this app's own /api routes (see src/app/api), backed
// by db.json, so the deployed site doesn't depend on a separate json-server
// process being reachable. Relative URLs resolve fine in the browser, but
// Node's fetch (used when these run in Server Components/Server Actions)
// requires an absolute one. VERCEL_PROJECT_PRODUCTION_URL (the stable
// aliased domain) is used over VERCEL_URL — once a production deployment
// is aliased, its own raw per-deployment URL 302-redirects to the alias,
// which broke self-fetches here (fetch followed the redirect to an HTML
// page and .json() failed parsing it). VERCEL_URL is still right for
// preview deployments, which have no separate alias to redirect to.
function resolveServerBaseUrl(): string {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (host) return `https://${host}/api`;
  return "http://localhost:3000/api";
}

const BASE_URL = typeof window !== "undefined" ? "/api" : resolveServerBaseUrl();

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BASE_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  return res.json();
};

// bir ürün getir
export const getOneProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  return res.json();
};

// bir ürünü kaldır
export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: "Delete" });

  return res.json();
};

// yeni bir ürün oluştur
export const createProduct = async (
  productData: Omit<Product, "id">,
): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// bir ürünü düzenle
export const updateProduct = async (
  id: string,
  productData: Omit<Product, "id">,
): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// bütün kullanıcları getir
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);

  return res.json();
};

// bir kullanıcı getir
export const getOneUser = async (id: string): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${id}`);

  return res.json();
};

// kullanıcıyı sil
export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/users/${id}`, { method: "DELETE" });

  return res.json();
};
