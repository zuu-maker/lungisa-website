import React from "react";

function Reliable() {
  return (
    <section className="px-6 md:px-20 xl:px-48 pt-12">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 text-">
        <div className="flex-1">
          <img
            className="h-40 w-screen lg:w-full object-cover lg:h-64 "
            src="reliable.jpg"
            alt=""
          />
        </div>
        <div className="text-center mt-8 md:mt-0 flex flex-col flex-1 items-center">
          <h4 className="mb-2 md:mb-6 text-[#e2e2e2]  leading-6 text-[24px] font-normal break-words">
            Reliable Professionals
          </h4>
          <p className="text-[18px] mt-6 leading-[27px] text-[#919191] text-center">
            Our technicians are the epitome of professionalism and reliability.
            With expert training and extensive experience, they excel in
            problem-solving and adhere to strict schedules. Their dedication to
            excellence, coupled with a commitment to customer satisfaction,
            ensures top-notch service every time. Trust our team to deliver
            results with precision and accountability, making us your go-to
            choice for all your plumbing and electrical needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reliable;
