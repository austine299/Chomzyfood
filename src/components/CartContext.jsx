import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  // ================= ADD TO CART =================
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id && item.type === product.type
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id && item.type === product.type
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ================= INCREASE QUANTITY =================
  const increaseQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.type === type
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.type === type
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ================= CLEAR CART =================
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
