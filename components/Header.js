"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "home",
    link: "/",
    page: "",
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
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  const scrollAnimation = () => {
    const currentScroll = window.scrollY;
    if (currentScroll >= 150) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, [scrollAnimation]);
  return (
    <nav className="top-0 left-0 z-50 w-full sticky px-48 bg-neutral-950 ">
      <div className="flex w-full h-full items-center justify-between">
        <div
          className={`${
            animate ? "h-[64px] m-4 " : "h-[100px] m-2"
          } duration-500`}
        >
          <img src="Transparent.png" className="h-full " />
        </div>
        <div>
          <ul className="text-[20px] leading-6 uppercase font-medium flex items-center space-x-6 text-gray-200 ">
            {items.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer hover:text-[#becbde] ${
                  item.page === pathname.split("/")[1] &&
                  "border-b-2 text-[#becbde] "
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
