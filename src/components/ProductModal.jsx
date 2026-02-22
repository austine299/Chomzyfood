import React, { useContext, useState } from "react";
import { ProductModalContext } from "./ProductModalContext";
import { CartContext } from "./CartContext";
import { FaTimes, FaPlus, FaMinus, FaCheck } from "react-icons/fa";

export default function ProductModal() {
  const { selectedProduct, closeProduct } = useContext(ProductModalContext);
  const { cart, addToCart, increaseQty, decreaseQty } = useContext(CartContext);

  const types = ["Plate", "Portion", "Bowl", "Pack"];
  const [selectedType, setSelectedType] = useState(types[0]);

  if (!selectedProduct) return null;

  // Find cart item that matches both id and type
  const cartItem = cart.find(
    (i) => i.id === selectedProduct.id && i.type === selectedType
  );
  const qty = cartItem?.qty || 0;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      {/* Modal Box */}
      <div className="bg-white w-[90%] max-w-4xl rounded-3xl overflow-hidden relative animate-scaleIn">

        {/* Close */}
        <button
          onClick={closeProduct}
          className="absolute right-5 top-5 text-xl"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Image */}
          <img
            src={selectedProduct.image}
            className="w-full h-full object-cover"
            alt={selectedProduct.name}
          />

          {/* Details */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-500 mb-6">{selectedProduct.description}</p>
           
            {/* TYPE SELECTOR */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full mb-4 border rounded-xl p-2 text-sm"
            >
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            {/* CART CONTROLS */}
            {qty === 0 ? (
              <button
                onClick={() => addToCart({ ...selectedProduct, type: selectedType })}
                className="bg-black text-white py-4 rounded-full w-full"
              >
                Add To Cart
              </button>
            ) : (
              <div className="flex justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => decreaseQty(selectedProduct.id, selectedType)}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-xl font-bold">{qty}</span>

                  <button
                    onClick={() => increaseQty(selectedProduct.id, selectedType)}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <FaPlus />
                  </button>
                </div>

                <span className="flex gap-2 items-center font-bold bg-gray-100 p-2 rounded-md">
                  Added <FaCheck className="text-green-500" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
