"use client";
import { Link } from "@/i18n/navigation";
import { navItems, serviceLinks } from "@/constants/navItems";
import { useState } from "react";
import Dropdown from "./Dropdown";
import LanguageSwitcher from "./LanguageSwitcher";

export default function DesktopNavbar() {
  const [menuState, setMenuState] = useState({
    isScrolled: false,
    isServicesOpen: false,
    isLanguagesOpen: false,
  });

  const toggleDropdown = (key: string, value: boolean) => {
    setMenuState((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div className="hidden lg:flex items-center justify-between container mx-auto">
      {/* Left side (Navigation) */}
      <ul className="flex items-center gap-6 font-inter font-light text-sm w-1/3">
        {navItems.map((item, index) =>
          item.hasServicesInside ? (
            <Dropdown
              key={index}
              title="Services"
              links={serviceLinks}
              isOpen={menuState.isServicesOpen}
              onMouseEnter={() => toggleDropdown("isServicesOpen", true)}
              onMouseLeave={() => toggleDropdown("isServicesOpen", false)}
            />
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
      <div className="flex justify-end w-1/3">
        {/* Language Switcher with Hover Animation */}
        <div className="relative flex items-center justify-center text-textGreen rounded-lg hover:bg-bgGreen transition-all duration-300 ease-in-out">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
