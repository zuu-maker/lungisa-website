import React from "react";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

function Team() {
  return (
    <div className="text-center pt-6 lg:pt-10 pb-8 px-4 lg:px-20 xl:px-48 ">
      <h4 className="text-[#becbde] uppercase text-[28px] lg:text-[42px] leading-[59px]">
        <span className={archivo_black.className}>our Team</span>
      </h4>
      <div className="flex flex-col lg:flex-row items-center md:space-y-4 lg: lg:space-x-6">
        <div className="flex-1 ">
          <img className="aspect-video object-cover" src="maambwe.jpg" alt="" />
          <div className="mt-3 flex flex-col justify-center space-y-3 lg:space-y-6">
            <h6 className="font-bold text-[20px] text-[#919191]">Maambwe</h6>
            <p className="text-[20px] text-[#919191] leading-[27px]">
              Chief Executive
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img className="aspect-video object-cover" src="mweemba.jpg" alt="" />
          <div className="mt-3 flex flex-col justify-center space-y-3 lg:space-y-6">
            <h6 className="font-bold text-[20px] text-[#919191]">Mweemba</h6>
            <p className="text-[20px] text-[#919191] leading-[27px]">
              Chief Engineer
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="aspect-video object-cover"
            src="precious.jpg"
            alt=""
          />
          <div className="mt-3 flex flex-col justify-center space-y-3 lg:space-y-6">
            <h6 className="font-bold text-[20px] text-[#919191]">Precious</h6>
            <p className="text-[20px] text-[#919191] leading-[27px]">
              Chief Marketing Officer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
