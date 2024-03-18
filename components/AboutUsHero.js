import React from "react";
import { Archivo_Black } from "next/font/google";

const archivo_black = Archivo_Black({ subsets: ["latin"], weight: "400" });

function AboutUsHero() {
  return (
    <div
      style={{ height: "" }}
      className="flex justify-center py-4 lg:py-12 xl:py-16 bg-neutral-950"
    >
      <div className="lg:966 xl:w-[1280px] flex items-center flex-col justify-center">
        <h4 className="text-[#becbde] px-6 font-sans text-center uppercase text-[28px] lg:text-[38px] xl:text-[42px] leading-[59px] mb-6 md:mb-10">
          <span className={archivo_black.className}>LUNGISA SOLUTIONS LTD</span>
        </h4>
        <div className="w-full flex justify-center">
          <img className="w-10/12" src="Transparent.png" alt="" />
        </div>
        <div className="lg:text-[22px] xl:text-[24px] px-4 lg:px-14 pt-10 md:pt-20 leading-[30px] text-[#f7f7f7] text-center">
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
