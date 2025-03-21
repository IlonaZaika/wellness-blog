"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
  const [menuState, setMenuState] = useState({
    isScrolled: false,
    isServicesOpen: false,
    isLanguagesOpen: false,
  });
  const pathname = usePathname();

  const isHome = pathname === "/en";

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setMenuState((prev) => ({ ...prev, isScrolled: window.scrollY > 50 }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full max-w-screen px-4 py-2 z-50 lg:px-12 ${
        isHome && !menuState.isScrolled
          ? "bg-transparent border border-b-white"
          : "bg-white border border-b-accent"
      }`}
    >
      <DesktopNavbar />
      <MobileMenu />
    </nav>
  );
}
