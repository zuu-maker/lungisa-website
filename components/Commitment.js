import React from "react";

function Commitment() {
  return (
    <section className="px-4 md:px-20 xl:px-48 pt-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <div className="flex-1">
          <img
            className="h-40 w-screen lg:w-full object-cover lg:h-64 "
            src="reliable.jpg"
            alt=""
          />
        </div>
        <div className="text-center mt-8 md:mt-0 flex flex-col flex-1 items-center">
          <h4 className="mb-6 text-[#e2e2e2] text-center leading-6 text-[24px] font-normal break-words">
            Customer Satisfaction: Our Commitment
          </h4>
          <p className="text-[18px] leading-[27px] text-[#919191]">
            At Lungisa, customer satisfaction is paramount. We deliver
            personalized service, transparent communication, and prompt
            responses. Our commitment to quality, flexibility, and continuous
            improvement ensures your needs are not just met, but exceeded. With
            us, you'll experience excellence at every turn. Choose us for
            unparalleled service and satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
