"use client";
import Link from "next/link";
import { navItems, serviceLinks, languageLinks } from "../constants/navItems";

import { useState } from "react";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="lg:hidden">
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={toggleMobileMenu}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-64 bg-bgBase shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-row items-center border-b pb-4">
          <Link
            href="/"
            className="cursor-pointer text-accent font-light font-heading text-xl pt-4 pr-4 ps-4"
          >
            WELLNESS STUDIO
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-textGreen hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-full gap-4 p-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-1 text-md font-inter gap-x-2 text-textGreen hover:text-accent"
            >
              <Link href={item.href} className="flex items-center">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <button className="bg-accent text-bgLight px-8 py-2 font-inter rounded-md hover:bg-btnHoveredGreen">
              Contuct Us
            </button>
          </li>
          <li className="mt-4 border-t border-accent">
            <button className="py-4 text-textGreen font-light text-sm font-inter hover:text-accent flex justify-center items-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 29.25C18.1588 29.2498 21.228 28.2006 23.7258 26.267C26.2236 24.3335 28.0086 21.6251 28.8003 18.5673M15 29.25C11.8413 29.2498 8.77203 28.2006 6.27421 26.267C3.7764 24.3335 1.99147 21.6251 1.19968 18.5673M15 29.25C18.9346 29.25 22.125 22.8692 22.125 15C22.125 7.13083 18.9346 0.75 15 0.75M15 29.25C11.0654 29.25 7.87501 22.8692 7.87501 15C7.87501 7.13083 11.0654 0.75 15 0.75M28.8003 18.5673C29.0933 17.4273 29.25 16.2318 29.25 15C29.2538 12.5492 28.6227 10.1392 27.4181 8.00483M28.8003 18.5673C24.5784 20.9093 19.8281 22.1339 15 22.125C10.172 22.1339 5.42166 20.9093 1.19968 18.5673M1.19968 18.5673C0.899774 17.4019 0.748683 16.2033 0.750009 15C0.750009 12.4588 1.41501 10.0711 2.58193 8.00483M15 0.75C17.5273 0.749439 20.0093 1.42102 22.1914 2.69588C24.3736 3.97074 26.1775 5.80301 27.4181 8.00483M15 0.75C12.4727 0.749439 9.99076 1.42102 7.80859 2.69588C5.62641 3.97074 3.82254 5.80301 2.58193 8.00483M27.4181 8.00483C23.9709 10.9913 19.5609 12.632 15 12.625C10.2532 12.625 5.91168 10.8833 2.58193 8.00483"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="pl-2">Change language</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
