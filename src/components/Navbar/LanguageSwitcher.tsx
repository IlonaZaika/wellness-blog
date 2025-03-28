"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

interface LanguageLink {
  name: string;
  href: string;
  flag: string;
}

const languageLinks: LanguageLink[] = [
  { name: "EN", href: "en", flag: "🇬🇧" },
  { name: "UA", href: "ua", flag: "🇺🇦" },
  { name: "PL", href: "pl", flag: "🇵🇱" },
  { name: "RU", href: "ru", flag: "🇷🇺" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageLink>(
    languageLinks.find((lang) => lang.href === pathname.split("/")[1]) ||
      languageLinks[0]
  );

  const toggleDropdown = (isOpen: boolean) => setIsOpen(isOpen);

  const handleLanguageChange = (lang: LanguageLink) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block py-2 px-4">
      {/* Button to Open Dropdown */}
      <button
        className="flex items-center gap-2 nav-link text-sm"
        onClick={() => toggleDropdown(!isOpen)}
      >
        <span className="text-lg">{currentLanguage.flag} ▾</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-24 md:bg-white md:shadow-lg md:rounded-md"
          onMouseEnter={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
        >
          {languageLinks.map((lang) => (
            <li key={lang.name} className="py-2 nav-link px-4">
              <Link
                href="/"
                locale={lang.href}
                className="flex items-center gap-2 w-full text-left"
                onClick={() => handleLanguageChange(lang)}
              >
                <span className="text-lg">{lang.flag}</span> {lang.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
