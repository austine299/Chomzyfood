import React from "react";
import {ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={`${process.env.PUBLIC_URL}/images/chef1.avif`}   // 👈 place your image in public folder
        alt="burger"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        
        {/* Affiliate Badge */}
        <div className="mb-6 flex items-center gap-3 bg-white text-black px-5 py-2 rounded-full shadow-lg">
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            New
          </span>
          <span className="font-medium">Become an Affiliate</span>
          <ArrowRight size={18} />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          The <span className="font-extrabold italic">CHOMZY</span> is in every bite
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
          Savor the flavor! Explore our delicious menu and
          order now for a taste sensation!
        </p>
 
        {/* CTA Button */}
        <button className="mt-10 border border-white px-8 py-4 rounded-full text-lg backdrop-blur-md hover:bg-white hover:text-black transition">
          📱 Download the Jazzy Burger App
        </button>
      </div>
    </div>
  );
}
