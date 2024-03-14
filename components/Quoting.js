import React from "react";

function Quoting() {
  return (
    <section className="px-4 md:px-20 xl:px-48 pt-12 montserrat leading-[1.5rem]">
      <div className="flex md:flex-row flex-col-reverse  items-center md:space-x-6 text-">
        <div className="text-center mt-8 md:mt-0 flex flex-col flex-1 items-center">
          <h4 className="mb-6 text-[#e2e2e2] leading-6 text-[24px] text-center font-normal break-words">
            Instant Quotes: Quick & Transparent Pricing
          </h4>

          <div className="flex px-5 md:px-0 flex-col space-y-4 lg:space-y-8 items-center">
            <p className="text-[16px] lg:text-[18px] text-[#919191] text-center">
              Get instant peace of mind with our streamlined process which
              delivers accurate quotes right after assessment:
            </p>
            <ul className=" flex flex-col  lg:space-y-0 tracking-normal list-disc text-[16px] lg:text-[18px] px-4 lg:px-16  text-[#919191] text-justify">
              <li className="space-x-0">
                Efficient Assessment: Our team swiftly evaluates your needs.
              </li>
              <li>
                Instant Results: Receive a detailed, no-obligation quote
                immediately.
              </li>
              <li>Transparent Pricing: Clear, concise, and no hidden fees.</li>
              <li>
                Customized Solutions: Tailored to your project's unique
                requirements.
              </li>
            </ul>
            <p className="text-[16px] lg:text-[18px]  text-[#919191] text-center">
              Say goodbye to waiting and hello to efficiency. Contact us today
              for swift, reliable pricing and kickstart your project with
              confidence!
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            style={{
              aspectRatio: 1 / 1,
            }}
            className="h-[500px] lg:h-full w-full object-cover"
            src="quoting.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Quoting;
