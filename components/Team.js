import React from "react";

function Team() {
  return (
    <div className="text-center pt-10 pb-8 px-48 ">
      <h4 className="text-[#becbde] uppercase text-[42px] leading-[59px]">
        our Team
      </h4>
      <div className="flex items-center space-x-6">
        <div className="flex-1 py-8">
          <img className="aspect-video object-cover" src="maambwe.jpg" alt="" />
          <div className="mt-3 flex flex-col justify-center space-y-6">
            <h6 className="font-bold text-[20px] text-[#919191]">Maambwe</h6>
            <p className="text-[20px] text-[#919191] leading-[27px]">
              Chief Executive
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img className="aspect-video object-cover" src="mweemba.jpg" alt="" />
          <div className="mt-3 flex flex-col justify-center space-y-6">
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
          <div className="mt-3 flex flex-col justify-center space-y-6">
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
