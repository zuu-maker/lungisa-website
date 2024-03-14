import React from "react";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

function AboutUsHero() {
  return (
    <div
      style={{ height: "" }}
      className="flex justify-center py-16 bg-neutral-950"
    >
      <div className="w-[1280px] flex items-center flex-col justify-center">
        <h4 className="text-[#becbde] font-sans uppercase text-[42px] leading-[59px] mb-10">
          <span className={archivo_black.className}>LUNGISA SOLUTIONS LTD</span>
        </h4>
        <div>
          <img className="w-full" src="Transparent.png" alt="" />
        </div>
        <div className="text-[24px] pt-20 leading-[30px] text-[#919191] text-center">
          <p>
            We are electrical and plumbing specialists that provide new build
            installations, maintenance and hardware supplies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHero;
