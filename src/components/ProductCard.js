import React, { useContext, useState } from "react";
import { FaHeart, FaStar, FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { ProductModalContext } from "./ProductModalContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const { openProduct } = useContext(ProductModalContext);

  const [selectedType, setSelectedType] = useState("Plate");

  const cartItem = cart.find((item) => item.id === product.id);
  const qty = cartItem?.qty || 0;

  const types = ["Plate", "Portion", "Bowl", "Pack"];

  return (
    <div className="bg-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition">

      {/* Image */}
      <div
        onClick={() => openProduct(product)}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />

        <button className="absolute top-3 right-3 bg-black/40 p-2 rounded-full text-white">
          <FaHeart />
        </button>
      </div>

      {/* Title */}
      <div className="flex justify-between mt-4">
        <h3 className="font-semibold text-lg truncate w-2/3">
          {product.name}
        </h3>
        <span className="text-sm text-gray-500">{product.time}</span>
      </div>

      {/* Rating */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-500" />
          {product.rating} ({product.reviews})
        </div>

        <div className="font-semibold text-lg">
          ₦ {product.price.toLocaleString()}
        </div>
      </div>

      {/* SIZE SELECTOR */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full mt-3 border rounded-xl p-2 text-sm"
      >
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>

      {/* CART */}
      <div className="mt-4">
        {qty === 0 ? (
          <button
            onClick={() =>
              addToCart({
                ...product,
                type: selectedType, // 🔥 save selected type
              })
            }
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow w-full justify-center"
          >
            <FaPlus className="text-red-500" />
            Add to cart
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => decreaseQty(product.id)}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <FaMinus />
            </button>

            <span className="font-semibold">{qty}</span>

            <button
              onClick={() => increaseQty(product.id)}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <FaPlus className="text-red-500" />
            </button>

            <button className="ml-auto flex items-center gap-2 font-bold bg-white px-6 py-2 rounded-full shadow">
              Added <FaCheck className="text-green-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
