"use client";

import { useState } from "react";
import { Product } from "../globalTypes";
import ProductCard from "./ProductCard";
import Checkout from "./Checkout";

export default function ProductList({ products }: { products: Product[] }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBuy = async (product: Product) => {
    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    });

    const data = await res.json();
    setClientSecret(data.clientSecret);
    setLoading(false);
  };

  if (clientSecret) {
    return (
      <div className="max-w-3xl mx-auto">
        <Checkout clientSecret={clientSecret} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((p) => (
        <div key={p.id}>
          <ProductCard product={p} buyProduct={handleBuy} />
        </div>
      ))}

      {loading && (
        <p className="col-span-full text-center mt-10">Preparing checkout…</p>
      )}
    </div>
  );
}
