import React from "react";
import { ArrowRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Home() {

  // 👇 Get only first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/chef1.avif`}
          alt="food"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          
          <div className="mb-6 flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full shadow-lg">
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>
            <span className="font-medium">Become an Affiliate</span>
            <ArrowRight size={18} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The <span className="font-extrabold italic">CHI_KITCHEN</span> is in every bite
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
            Savor the flavor! Explore our delicious menu and
            order now for a taste sensation!
          </p>

          <Link to="/product">
            <button className="mt-10 border border-white px-8 py-4 rounded-full text-lg backdrop-blur-md hover:bg-white hover:text-black transition">
              🍔 Explore Menu
            </button>
          </Link>
        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <div className="bg-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🔥 Featured Dishes
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/product"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              View All Products
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}