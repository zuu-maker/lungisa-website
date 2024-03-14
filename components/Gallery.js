import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

const images = [
  {
    original: "/maambwe.jpg",
    thumbnail: "maambwe.jpg",
  },
  {
    original: "mweemba.jpg",
    thumbnail: "mweemba.jpg",
  },
  {
    original: "precious.jpg",
    thumbnail: "precious.jpg",
  },
];

function Gallery() {
  return (
    <div className="px-48 pt-8 flex flex-col items-center justify-center space-y-10 text-center bg-neutral-950">
      <h4 className="text-[#becbde] font-sans uppercase text-[42px] leading-[59px] ">
        <span className={archivo_black.className}> Photo Gallery</span>
      </h4>

      <ImageGallery
        style={{ innerHeight: 900 }}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        items={images}
        slideDuration={800}
      />
      <div className="flex items-center pt-16 pb-20 w-[1300px] justify-between">
        <p className="text-[18px] leading-[27px] text-center text-[#919191]">
          Copyright © 2024 Lungisa Solutions Ltd - All Rights Reserved.
        </p>
        <div className="flex items-center space-x-3">
          <img src="facebook.png" className="h-7" alt="" />
          <img src="insta.png" className="h-7" alt="" />
          <img src="twitter.png" className="h-7" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
