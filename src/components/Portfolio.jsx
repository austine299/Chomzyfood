import React, { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("images");

  // Sample data (replace with your real images/videos)
  const images = [
    `${process.env.PUBLIC_URL}/images/f1.jpg`,
    `${process.env.PUBLIC_URL}/images/f2.jpg`,
    `${process.env.PUBLIC_URL}/images/f3.jpg`,
    `${process.env.PUBLIC_URL}/images/f4.jpg`,
    `${process.env.PUBLIC_URL}/images/f5.jpg`,
    `${process.env.PUBLIC_URL}/images/f6.jpeg`,
    `${process.env.PUBLIC_URL}/images/f7.jpeg`,
    `${process.env.PUBLIC_URL}/images/f8.jpeg`,
    `${process.env.PUBLIC_URL}/images/d3.jpg`,
    `${process.env.PUBLIC_URL}/images/d4.jpg`,
    `${process.env.PUBLIC_URL}/images/d5.jpg`,
    `${process.env.PUBLIC_URL}/images/d6.jpg`,
  ];

  const videos = [
    `${process.env.PUBLIC_URL}/videos/vi.mp4`,
    `${process.env.PUBLIC_URL}/videos/v2.mp4`,
    `${process.env.PUBLIC_URL}/videos/v3.mp4`,
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          🎥 Portfolio
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "images"
                ? "bg-black text-white"
                : "bg-white shadow hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("images")}
          >
            Images
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "videos"
                ? "bg-black text-white"
                : "bg-white shadow hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {/* Content */}
        {activeTab === "images" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((vid, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <video
                  src={vid}
                  controls
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}