import React, { createContext, useState } from "react";

export const ProductModalContext = createContext();

export const ProductModalProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <ProductModalContext.Provider
      value={{ selectedProduct, openProduct, closeProduct }}
    >
      {children}
    </ProductModalContext.Provider>
  );
};
