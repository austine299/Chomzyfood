import React, { useContext } from "react";
import { FaMapPin, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cart, setOpenCart } = useContext(CartContext);

  const totalItems = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <nav className="fixed bg-gray-300 top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-50">

      <div className="flex items-center gap-6">
        <div className="font-bold text-lg">🍔 CHOMZY FOOD</div>

        <div className="flex items-center gap-2 text-sm">
          <FaMapPin /> Lagos
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/product">All Products</Link>

        <button className="bg-white px-5 py-2 rounded-full flex gap-2">
          <FaUser /> Login
        </button>

        {/* CART BUTTON */}
        <button
          onClick={() => setOpenCart(true)}
          className="bg-black text-white px-5 py-2 rounded-full flex gap-2"
        >
          <FaShoppingCart />
          Cart {totalItems}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
