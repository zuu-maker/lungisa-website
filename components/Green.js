import React from "react";

function Green() {
  return (
    <div className="py-14 h-full px-48  bg-neutral-950">
      <div className="flex flex-col items-center space-y-16 text-center">
        <h4 className="uppercase text-[42px] leading-[59px] text-[#becbde]">
          Our Green commitment
        </h4>
        <div className="flex items-center space-x-6 ">
          <div className="flex-1 flex flex-col  space-y-6">
            <img className="object-cover" src="plant.webp" alt="" />
            <p className="text-[#a4a4a4] break-words text-[18px]  h-24  leading-[27px] text-center">
              Our founders Mambwe and Mweemba are keen nature lovers. Their
              commitment to environmental sustainability has transcended into
              their business ventures which is visible through the Lungisa
              store; a solar-powered repurposed container placed with minimal
              environmental impact.
            </p>
          </div>
          <div className="flex-1 flex flex-col  space-y-6">
            <img className="object-cover" src="member.webp" alt="" />
            <p className="text-[#a4a4a4] break-words text-[18px] h-24 leading-[27px] text-center">
              In line with our commitment to environmentally sustainable
              enterprise we are members of the Green Business Bureau, a trusted
              authority in green business.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[7.8rem] w-[1300px] justify-between">
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

export default Green;
