import Link from "next/link";
import React from "react";

const items = [
  {
    name: "home",
    link: "/",
    page: "/",
  },
  {
    name: "about us",
    link: "/about-us",
    page: "about-us",
  },
  {
    name: "gallery",
    link: "/gallery",
    page: "gallery",
  },
  {
    name: "contact us",
    link: "/contact-us",
    page: "contact-us",
  },
];

function Header() {
  return (
    <nav className=" bg-neutral-950 z-10 top-0 left-0 w-full sticky px-48">
      <div className="flex w-full h-full items-center justify-between">
        <div className="h-24 p-2">
          <img src="Transparent.png" className="h-full" />
        </div>
        <div>
          <ul className="text-[20px] leading-6 uppercase font-medium flex items-center space-x-6 text-gray-200 ">
            {items.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer hover:text-[#becbde] ${
                  item.page === "/" && "border-b-2 text-[#becbde] "
                } `}
              >
                <Link className="" href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
