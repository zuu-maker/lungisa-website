import React from "react";

function SmallFooter() {
  return (
    <div className="bg-neutral-950 pt-16 pb-20 px-48 w-full">
      <div className="flex items-center   w-[1300px] justify-between ">
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

export default SmallFooter;
