import React from "react";

function SmallFooter() {
  return (
    <div className="flex flex-col lg:flex-row space-y-8  lg:space-y-0  items-center mt-10 md:mt-10 pb-14  w-full justify-center">
      <div className="flex flex-col lg:w-3/4 lg:flex-row items-center space-y-5 lg:space-y-0 xl:space-y-0 lg:justify-between text-center">
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
