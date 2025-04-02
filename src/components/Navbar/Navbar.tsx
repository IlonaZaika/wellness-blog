"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
  const [menuState, setMenuState] = useState({
    isScrolled: false,
    isServicesOpen: false,
    isLanguagesOpen: false,
  });

  const pathname = usePathname();
  const isHome =
    pathname === "/en" ||
    pathname === "/ua" ||
    pathname === "/pl" ||
    pathname === "/ru";

  useEffect(() => {
    const checkScroll = () => {
      setMenuState((prev) => ({ ...prev, isScrolled: window.scrollY > 50 }));
    };

    checkScroll();

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full max-w-screen px-4 py-2 z-50 lg:px-12 transition-colors duration-300 ${
        isHome && !menuState.isScrolled
          ? "bg-transparent"
          : "bg-white border border-b-accent"
      }`}
    >
      <DesktopNavbar />
      <Sidebar />
    </nav>
  );
}
