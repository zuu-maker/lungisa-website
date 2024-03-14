import React from "react";

function Commitment() {
  return (
    <section className="px-48 pb-12 mt-4">
      <div className="flex items-center space-x-6 text-center">
        <div className="flex-1">
          <img className="h-64 w-full object-cover" src="reliable.jpg" alt="" />
        </div>
        <div className="text-center flex flex-col flex-1 items-center">
          <h4 className="mb-6 text-[#e2e2e2] leading-6 text-[24px] font-normal break-words">
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
