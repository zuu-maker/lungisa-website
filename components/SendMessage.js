import React from "react";

function SendMessage() {
  return (
    <div className="px-6 md:px-20 xl:px-96 py-8 lg:py-12  text-center">
      <h4 className="text-[22px] xl:text-[32px] leading-[28px] xl:leading-[30px] text-[#e2e2e2]">
        {" "}
        Send Message
      </h4>
      <form
        action=""
        className="flex flex-col items-center space-y-6 pt-4 xl:pt-8"
      >
        <input
          className="block w-full h-10 lg:h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="block w-full h-10 lg:h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="email"
          name="email"
          placeholder="Email*"
        />
        <input
          className="block w-full h-10 lg:h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <input
          className="block w-full h-10 lg:h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="address"
          placeholder="Address (Street, City, Zip Code)"
        />
        <textarea
          rows={8}
          className="block w-full p-2 text-sm text-gray-50 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="message"
          placeholder="Message"
        />
        <button className="block uppercase text-xs lg:text-base font-semibold lg:w-28 text-gray-900 w-full h-10 lg:h-14 bg-[#becbde]">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
