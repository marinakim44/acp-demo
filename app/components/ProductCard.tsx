"use client";

import { Product } from "../globalTypes";

export default function ProductCard({
  product,
  buyProduct,
}: {
  product: Product;
  buyProduct: (product: Product) => void;
}) {
  return (
    <div className="rounded-lg bg-pink-500/20 p-5 flex flex-col h-full">
      <div className="rounded-lg mb-5 w-full h-[300px] overflow-hidden bg-black/10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg font-bold mb-3">{product.title}</p>
      <p className="mb-5 text-sm opacity-90 line-clamp-3">
        {product.description}
      </p>
      <div className="mt-auto">
        <p className="font-bold text-xl mb-3">£{product.price}</p>
        <button
          className="w-full bg-white text-black rounded-lg h-[40px] hover:bg-white/50 cursor-pointer"
          onClick={() => buyProduct(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
