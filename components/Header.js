"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollAnimation = () => {
    const currentScroll = window.scrollY;
    if (currentScroll >= 80) {
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
    <nav className="top-0 left-0 z-50 w-full sticky px-4 lg:px-20 xl:px-48 bg-neutral-950 ">
      <div className="flex w-full h-full items-center justify-between">
        <div
          className={`${
            animate ? "h-[48px] my-4 " : "h-[80px] md:h-[100px] m-2"
          } duration-500`}
        >
          <img src="Transparent.png" className="h-full " />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="sm:-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="text-[20px] flex leading-6 uppercase font-medium items-center space-x-6 text-gray-200 ">
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
