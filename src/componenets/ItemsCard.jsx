import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext"

function ItemsCard({ image, name, price }) {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddClick = () => {
    addToCart({ image, name, price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="md:w-[31%] w-[40%] bg-slate-50 hover:bg-slate-200 shadow-md p-5 rounded-md flex flex-col transition-all">
      <div className="pb-3">
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt={name} className="rounded-md h-[200px] w-full object-cover" />
      </div>
      <div className="flex flex-col gap-3 justify-around">
        <h6 className="text-[15px] font-bold">{name}</h6>
        <p className="text-[15px] italic font-bold text-red-500">₦{price}</p>
        <button
          onClick={handleAddClick}
          className={`h-[40px] border border-red-800 rounded-md cursor-pointer font-bold text-white transition-all ${
            added ? "bg-green-600" : "bg-red-800 hover:bg-red-500"
          }`}
        >
          {added ? "ADDED ✅" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

export default ItemsCard;
