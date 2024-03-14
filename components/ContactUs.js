import React from "react";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

function ContactUs() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full w-full z-10  bg-gradient-to-r from-[#000000] flex items-center justify-center to-black opacity-20"></div>
      <h4 className="text-[#ffffff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center z-20 opacity-100 font-sans uppercase text-[42px] leading-[59px] ">
        <span className={archivo_black.className}>Contact us today</span>
      </h4>
      <img className="object-cover " src="contact.png" alt="" />
    </div>
  );
}

export default ContactUs;