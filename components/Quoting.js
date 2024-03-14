import React from "react";

function Quoting() {
  return (
    <section className="px-48 pt-12 montserrat leading-[1.5rem]">
      <div className="flex items-center space-x-6 text-">
        <div className=" flex flex-col flex-1 items-center">
          <h4 className="mb-6 text-[#e2e2e2] leading-6 text-[24px] font-normal break-words">
            Instant Quotes: Quick & Transparent Pricing
          </h4>

          <div className="flex flex-col space-y-8 items-center">
            <p className="text-[18px] text-[#919191] text-center">
              Get instant peace of mind with our streamlined process which
              delivers accurate quotes right after assessment:
            </p>
            <ul className=" flex flex-col space-y-0 tracking-normal list-disc text-[18px] px-16  text-[#919191] text-justify">
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
            <p className="text-[18px]  text-[#919191] text-center">
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
            className="h-full w-full object-cover"
            src="quoting.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Quoting;
