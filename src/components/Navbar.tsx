"use client";
import Link from "next/link";
import { navItems, serviceLinks, languageLinks } from "../constants/navItems";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full max-w-screen px-6 py-4 z-50 lg:px-12 ${
        isScrolled ? "bg-white" : "bg-transparent border border-b-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between ">
        {/* Left side (Navigation) */}
        <ul className="hidden lg:flex items-center gap-6 font-inter font-light text-sm">
          {navItems.map((item, index) =>
            item.hasServicesInside ? (
              <li
                key={index}
                className="relative text-textGreen hover:text-accent cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services ↓
                {isServicesOpen && (
                  <ul
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {serviceLinks.map((service, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-textGreen hover:text-accent"
                      >
                        <Link href={service.href}>{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={index}
                className="text-textGreen hover:text-accent cursor-pointer"
              >
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Center (Logo) */}
        <Link
          href="/"
          className="text-2xl font-light font-heading text-textGreen tracking-wide"
        >
          WELLNESS STUDIO
        </Link>

        {/* Right side (Buttons) */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="border border-textGreen font-light text-sm px-4 py-2 rounded-lg hover:text-accent hover:border-accent">
            Book now
          </button>
          <button
            className="relative text-textGreen font-light text-sm hover:text-accent cursor-pointer"
            onMouseEnter={() => setIsLanguagesOpen(true)}
          >
            <svg
              width="30"
              height="30"
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
            {isLanguagesOpen && (
              <ul
                className="absolute left-0 mt-2 w-16 bg-white shadow-lg rounded-md"
                onMouseEnter={() => setIsLanguagesOpen(true)}
                onMouseLeave={() => setIsLanguagesOpen(false)}
              >
                {languageLinks.map((lang, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-textGreen hover:text-accent"
                  >
                    <Link href={lang.href}>{lang.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
