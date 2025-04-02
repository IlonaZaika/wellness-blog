"use client";
import { Link } from "@/i18n/navigation";
import { navItems, serviceLinks } from "@/constants/navItems";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const t = useTranslations("NavBar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  return (
    <>
      <div className="lg:hidden">
        <div className="flex justify-between items-center w-full">
          <button
            className="relative h-10 w-10 rounded-full text-textGreen hover:bg-bgGreen"
            onClick={toggleMobileMenu}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="text-xl font-light text-textGreen tracking-wide"
          >
            WELLNESS STUDIO
          </Link>
          <button className="relative w-9 h-9 p-2 flex items-center justify-center rounded-full text-textGreen hover:bg-bgGreen">
            <FaPhoneAlt size={20} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-80 min-h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      >
        <div className="flex items-center p-4 h-14">
          <Link
            href="/"
            className="cursor-pointer text-accent font-light text-xl"
            onClick={toggleMobileMenu}
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

        <div className="p-4">
          {isServicesOpen ? (
            <ul className="flex flex-col gap-4">
              <li
                className="flex cursor-pointer text-base font-inter font-medium text-textGreen hover:text-accent border-b border-accent pb-4"
                onClick={() => setIsServicesOpen(false)}
              >
                {t("services")} <FiChevronLeft className="ml-auto" />
              </li>
              {serviceLinks.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="flex p-1 text-base font-inter text-textGreen hover:text-accent"
                >
                  <Link
                    href={subItem.href}
                    className="flex items-center"
                    onClick={toggleMobileMenu}
                  >
                    {t(subItem.name)}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between p-1 text-base font-inter text-textGreen hover:text-accent"
                >
                  {item.name === "services" ? (
                    <button
                      className="flex w-full text-left text-textGreen hover:text-accent"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsServicesOpen(true);
                      }}
                    >
                      {t(item.name)} <FiChevronRight className="ml-auto" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex w-full"
                      onClick={toggleMobileMenu}
                    >
                      {t(item.name)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 pt-4 border-t border-accent">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-transparent"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}
