"use client";
import { Link } from "@/i18n/navigation";
import { navItems } from "@/constants/navItems";

import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // For Phone Icon
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const t = useTranslations("NavBar");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="lg:hidden">
        <div className="flex justify-between items-center w-full">
          {/* Mobile Menu Button (Left) */}
          <button
            className="relative h-10 w-10 rounded-full text-textGreen transition-all duration-300 ease-in-out hover:bg-btnHoveredGreen"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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

          {/* Logo (Center) */}
          <Link
            href="/"
            className="text-xl font-light text-textGreen tracking-wide"
          >
            WELLNESS STUDIO
          </Link>

          {/* Phone Button (Right) */}
          <button className="relative w-9 h-9 p-2 flex items-center justify-center rounded-full text-textGreen hover:bg-btnHoveredGreen transition-all duration-300 ease-in-out">
            <FaPhoneAlt size={20} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-full bg-bgBase shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="flex flex-row justify-center items-center h-14 border-b ">
          <Link
            href="/"
            className="cursor-pointer text-accent font-light font-heading text-xl"
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
              className="flex justify-center p-1 text-md font-inter gap-x-2 text-textGreen hover:text-accent"
            >
              <Link
                href={item.href}
                className="flex items-center"
                onClick={toggleMobileMenu}
              >
                {t(item.name)}
              </Link>
            </li>
          ))}

          <li className=" flex justify-center pt-4 border-t border-accent">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
}
