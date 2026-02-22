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

  const cartItem = cart.find(
    (i) => i.id === selectedProduct.id && i.type === selectedType
  );
  const qty = cartItem?.qty || 0;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-auto">

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">

        {/* Close Button */}
        <button
          onClick={closeProduct}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 text-xl sm:text-2xl bg-white rounded-full p-1 shadow hover:bg-gray-100"
        >
          <FaTimes />
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-500 mb-6">{selectedProduct.description}</p>

            {/* Type Selector */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full mb-4 border rounded-xl p-2 text-sm"
            >
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Cart Controls */}
          <div className="mt-auto">
            {qty === 0 ? (
              <button
                onClick={() => addToCart({ ...selectedProduct, type: selectedType })}
                className="bg-black text-white py-3 md:py-4 rounded-full w-full"
              >
                Add To Cart
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQty(selectedProduct.id, selectedType)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <FaMinus />
                  </button>

                  <span className="text-lg md:text-xl font-bold">{qty}</span>

                  <button
                    onClick={() => increaseQty(selectedProduct.id, selectedType)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <FaPlus className="text-red-500" />
                  </button>
                </div>

                <span className="flex gap-2 items-center font-bold bg-gray-100 p-2 rounded-md mt-2 sm:mt-0">
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