import React from "react";

function Footer() {
  return (
    <div
      style={{ height: "55vh" }}
      className="p-14 flex flex-col items-center  text center bg-neutral-950"
    >
      <h4
        style={{ fontFamily: "sans-serif" }}
        className="uppercase text-[42px] mb-10 font-bold text-[#f7f7f7] leading-[53px]"
      >
        Subscribe for updates!
      </h4>

      <p className="text-[18px] leading-[27px] text-center text-[#919191] mb-6">
        Sign up to receive maintenance tips and hear about our latest projects
      </p>
      <form action="">
        <div className="flex w-[1000px] space-x-4 items-center">
          <input
            className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-black  focus:outline-none"
            type="text"
            placeholder="Email Address"
          />
          <button className="block uppercase text-md font-semibold w-28 text-gray-900 h-14 bg-[#bebecb]">
            {" "}
            Sign up
          </button>
        </div>
      </form>

      <div className="flex items-center mt-36 w-[1300px] justify-between">
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

export default Footer;
