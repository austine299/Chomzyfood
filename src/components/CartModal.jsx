import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartModal() {
  const { cart, openCart, setOpenCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const navigate = useNavigate();

  if (!openCart) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-[400px] bg-white h-full p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {/* Items */}
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-xs"><strong>Quantity {item.qty}:</strong> {item.type}</p>

              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => decreaseQty(item.id)}>
                  <FaMinus />
                </button>

                {item.qty}

                <button onClick={() => increaseQty(item.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="mt-6 border-t pt-4 font-bold">
          <span className="text-lg">Total: </span><span className="text-xs">Price will be discuss on WhatsApp</span>
        </div>

        <button
          onClick={() => {
            setOpenCart(false); // close modal
            navigate("/checkout"); // go to checkout page
          }}
          className="w-full mt-4 bg-black text-white py-3 rounded-xl"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
