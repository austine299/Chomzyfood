import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const categories = [
    "All",
    "Rice",
    "Soup",
    "Stew",
    "Drinks",
    "Salad",
    "Side"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-200 min-h-screen p-6 mt-20">

      {/* ================= CATEGORY BAR ================= */}
      <div className="flex gap-3 overflow-x-auto mb-8 pb-2">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-5 py-2 rounded-full whitespace-nowrap transition font-medium
              ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white shadow"
              }
            `}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div
        className="grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
