import React, { useContext, useState } from "react";
import { FaHeart, FaStar, FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { ProductModalContext } from "./ProductModalContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);
  const { openProduct } = useContext(ProductModalContext);

  const [selectedType, setSelectedType] = useState("Plate");
  const types = ["Plate", "Portion", "Bowl", "Pack"];

  const cartItem = cart.find((item) => item.id === product.id && item.type === selectedType);
  const qty = cartItem?.qty || 0;

  return (
    <div className="bg-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition flex flex-col w-full">

      {/* IMAGE CONTAINER with fixed aspect ratio and object-cover */}
      <div
        onClick={() => openProduct(product)}
        className="relative rounded-2xl overflow-hidden cursor-pointer w-full aspect-[1/1] bg-gray-100 flex items-center justify-center"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 bg-black/40 p-2 rounded-full text-white z-10">
          <FaHeart />
        </button>
      </div>

      {/* TITLE & TIME */}
      <div className="flex justify-between mt-4 items-center flex-wrap">
        <h3 className="font-semibold text-lg truncate w-2/3">{product.name}</h3>
        <span className="text-sm text-gray-500">{product.time}</span>
      </div>

      {/* RATING */}
      <div className="flex justify-start items-center mt-2 gap-2 text-sm">
        <FaStar className="text-yellow-500" /> {product.rating} ({product.reviews})
      </div>

      {/* TYPE SELECTOR */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full mt-3 border rounded-xl p-2 text-sm"
      >
        {types.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>

      {/* CART BUTTONS */}
      <div className="mt-4 flex flex-col gap-3">
        {qty === 0 ? (
          <button
            onClick={() => addToCart({ ...product, type: selectedType })}
            className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow w-full justify-center"
          >
            <FaPlus className="text-red-500" /> Add to cart
          </button>
        ) : (
          <div className="flex flex-wrap items-center gap-3 w-full">
            <button
              onClick={() => decreaseQty(product.id, selectedType)}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <FaMinus />
            </button>

            <span className="font-semibold">{qty}</span>

            <button
              onClick={() => increaseQty(product.id, selectedType)}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <FaPlus className="text-red-500" />
            </button>

            <button className="flex-1 sm:flex-none flex items-center gap-2 font-bold bg-white px-4 py-2 rounded-full shadow min-w-[100px]">
              Added <FaCheck className="text-green-500" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}