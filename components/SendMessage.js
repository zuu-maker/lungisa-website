import React from "react";

function SendMessage() {
  return (
    <div className="px-96 py-12 text-center">
      <h4 className="text-[32px] leading-[30px] text-[#e2e2e2]">
        {" "}
        Send Message
      </h4>
      <form action="" className="flex flex-col items-center space-y-6 pt-8">
        <input
          className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="email"
          name="email"
          placeholder="Email*"
        />
        <input
          className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <input
          className="block w-full h-14 text-sm text-gray-50  px-2 cursor-pointer bg-neutral-900  focus:outline-none"
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
        <button className="block uppercase text-md font-semibold w-28 text-gray-900 h-14 bg-[#bebecb]">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
