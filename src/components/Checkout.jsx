import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import PaystackPop from "@paystack/inline-js";
import emailjs from "emailjs-com";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryNote: "",
  });

  const payWithPaystack = () => {
    if (!form.email) {
      alert("Please enter email");
      return;
    }

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_442b2b019d9c5c6c0b6dc9ac42b7f52d5a029042", // replace with your public key
      email: form.email,
      amount: total * 100, // Paystack uses kobo
      currency: "NGN",

      onSuccess: (transaction) => {
        sendEmails(); // 🔥 send both emails
        alert("Payment successful!");
      },

      onCancel: () => {
        alert("Payment cancelled");
      },
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const deliveryFee = 1500;
  const total = subtotal + deliveryFee;

 const sendEmails = () => {
  const itemsHTML = cart.map(item => `
    <table width="100%" style="margin-bottom:12px">
      <tr>
        <td width="70">
          <img src="http://localhost:3001${item.image}" width="60" height="60" style="border-radius:8px;object-fit:cover"/>
        </td>
        <td>
          <b>${item.name}</b><br/>
          Qty: ${item.qty}
        </td>
        <td align="right">
          ₦ ${(item.price * item.qty).toLocaleString()}
        </td>
      </tr>
    </table>
  `).join("");

  const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    address: form.address,
    items: itemsHTML,
    total: total.toLocaleString(),

    // MUST be public https URL
    logo: "http://localhost:3001/logo.png"
  };

  emailjs.send("service_jfjaobb", "template_d9mu9kr", templateParams, "GUtTtl2HIbADSrZsx");
  emailjs.send("service_jfjaobb", "template_maw9ksm", templateParams, "GUtTtl2HIbADSrZsx");
};


  return (
    <div className="max-w-7xl mx-auto mt-32 p-6 grid lg:grid-cols-2 gap-10">
      {/* ================= LEFT SIDE ================= */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Recipient & Delivery Details
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Recipient Name"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />
          <input
            name="email"
            placeholder="Recipient Email"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            name="address"
            placeholder="Delivery Address"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            name="deliveryNote"
            placeholder="Delivery Note (Optional)"
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="bg-gray-100 rounded-3xl p-6 h-fit">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 mb-4 items-center">
            <img
              src={item.image}
              className="w-16 h-16 rounded-lg object-cover"
              alt=""
            />

            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">Qty: {item.qty}</p>
            </div>

            <div className="font-semibold">
              ₦ {(item.price * item.qty).toLocaleString()}
            </div>
          </div>
        ))}

        {/* PRICE BREAKDOWN */}
        <div className="border-t pt-4 mt-6 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦ {subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₦ {deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₦ {total.toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={payWithPaystack}
          className="w-full mt-6 bg-black text-white py-4 rounded-xl text-lg"
        >
          Pay & Place Order
        </button>
      </div>
    </div>
  );
}
