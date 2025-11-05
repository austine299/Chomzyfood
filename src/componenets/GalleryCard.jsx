import React from "react";

function GalleryCard({ image, alt, onClick }) {
  return (
    <div className="md:w-[31%] w-[90%]">
      <img
        src={`public/${image}`}
        alt={alt}
        onClick={onClick}
        className="w-full h-[400px] hover:z-10 shadow-md p-5 rounded-lg cursor-pointer"
      />
    </div>
  );
}

export default GalleryCard;
