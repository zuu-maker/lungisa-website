import React from "react";

function Address() {
  return (
    <div className="px-48 pb-16 flex flex-col items-center space-y-10">
      <div className="flex flex-col items-center space-y-6">
        <h6 className="text-[32px] leading-[30px] text-[#e2e2e2]">
          Lungisa Solutions Ltd
        </h6>
        <p className="text-[20px] leading-[27px] text-[#919191]">
          Plot 2303P, Twin Palms Road, Ibex Hill, Lusaka, Zambia
        </p>
        <p className="text-[#8eaad4] text-[20px] leading-[27px]">
          +260772331839 {"  "}+260769365437
        </p>
        <p className="text-[#8eaad4] text-[20px] leading-[27px]">
          info@lungisasolutions.com
        </p>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <h6 className="text-[32px] leading-[30px] text-[#e2e2e2]">
          Opening Hours
        </h6>
        <div className="flex flex-col items-center space-y-1 text-[20px] leading-[27px] text-[#919191]">
          <p>Tuesday - Friday: 9am - 6pm</p>
          <p>Saturday: 8am - 5pm</p>
          <p>Monday: 9am - 1pm</p>
          <p>Sunday & Public Holidays: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Address;
