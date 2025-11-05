import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHeadphones,
  FaEnvelope,
  FaClock,
  FaBell,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 bg-white text-black pt-28">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10 px-6">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-center md:text-left">
            Contact Us
          </h2>
          <p className="text-center md:text-left">
            We’re always here for the hustlers. Whether it’s about your order,
            sizing, collaborations, or just connecting with the Richfits
            movement, hit us up through any of the channels below:
          </p>

          <div className="space-y-5 mt-6">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p>Nigeria – Shipping Worldwide 🌍</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <FaHeadphones />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p>+234 (805) 6582214</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p>support@richfitstore.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <FaClock />
              </div>
              <div>
                <h4 className="font-bold text-lg">Customer Support Hours</h4>
                <p>Monday – Saturday: 9:00 AM – 6:00 PM (WAT)</p>
                <p>Sundays & Public Holidays: Closed</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <FaBell />
              </div>
              <div>
                <h4 className="font-bold text-lg">Note</h4>
                <p>
                  For quick updates on your order, please include your Order
                  Number in your message.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 bg-white shadow-md rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black outline-none"
            />

            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-black outline-none"
            >
              <option value="">Products</option>
              <option value="Hoodies">Hoodies</option>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Accessories">Accessories</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:ring-2 focus:ring-black outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
