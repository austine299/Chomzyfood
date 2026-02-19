import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="bg-gray-200 min-h-screen p-8 mt-20">
      <div className="grid gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
