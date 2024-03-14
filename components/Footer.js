import React from "react";

function Footer() {
  return (
    <div
      style={{ height: "55vh" }}
      className="px-2 py-10 md:p-14 flex flex-col items-center  bg-neutral-950"
    >
      <h4
        style={{ fontFamily: "sans-serif" }}
        className="uppercase text-[24px] sm:text-[28px] md:text-[42px] mb-5 sm:mb-10 font-bold text-[#f7f7f7] leading-[53px]"
      >
        Subscribe for updates!
      </h4>

      <p className="text-[16px] md:text-[18px] leading-[27px] text-center text-[#919191] mb-6">
        Sign up to receive maintenance tips and hear about our latest projects
      </p>
      <form action="">
        <div className="flex flex-col lg:flex-row md:space-y-6 w-[360px] md:w-[760px] lg:w-[1000px] md:space-x-4 items-center">
          <input
            className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-black  focus:outline-none"
            type="text"
            placeholder="Email Address"
          />
          <button className="block w-full uppercase text-md font-semibold lg:w-28 text-gray-900 h-10 lg:h-14 bg-[#bebecb]">
            {" "}
            Sign up
          </button>
        </div>
      </form>

      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center mt-8 md:mt-20 lg:mt-36 pb-20 w-full justify-between bg-neutral-950">
        <p className="text-[16px] md:text-[18px] leading-[27px] text-center text-[#919191]">
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

export default Footer;
