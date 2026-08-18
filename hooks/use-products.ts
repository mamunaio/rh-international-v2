"use client";

import { useQuery } from "@tanstack/react-query";
import { productImageMap } from "@/data/products";

export interface DBProduct {
  _id: string;
  id: string; // compatibility
  title: string;
  description: string | null;
  price: number;
  sku: string | null;
  category: string | null;
  image_url: string | null;
  stock: number;
  status: string;
  created_at: string;
  updated_at: string;
  image: string;
}

const resolveImage = (p: { sku?: string | null; image_url?: string | null }): string => {
  if (p.sku && productImageMap[p.sku]) return productImageMap[p.sku];
  return p.image_url ?? "/placeholder.svg";
};

export const useProducts = () =>
  useQuery<DBProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      const { products } = await res.json();
      return (products ?? []).map((p: any) => ({
        ...p,
        id: p._id, // map Mongo _id to id for compatibility
        price: Number(p.price),
        image: resolveImage(p),
      }));
    },
  });

export const useProduct = (id: string | undefined) =>
  useQuery<DBProduct | null>({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) return null;
      // Since we don't have a single product API yet, just filter the main list
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch product");
      const { products } = await res.json();
      const p = products.find((prod: any) => prod._id === id);
      if (!p) return null;
      return { ...p, id: p._id, price: Number(p.price), image: resolveImage(p) };
    },
    enabled: !!id,
  });
