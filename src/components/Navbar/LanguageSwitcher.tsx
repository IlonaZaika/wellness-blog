import { useState } from "react";

interface LanguageLink {
  name: string;
  href: string;
  flag: string;
}

const languageLinks: LanguageLink[] = [
  { name: "EN", href: "/?lang=en", flag: "🇬🇧" },
  { name: "UA", href: "/?lang=ua", flag: "🇺🇦" },
  { name: "PL", href: "/?lang=pl", flag: "🇵🇱" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageLink>(
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
        onClick={() => toggleDropdown(true)}
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
            <li key={lang.name} className="py-2 nav-link md:px-4">
              <button
                className="flex items-center gap-2 w-full text-left"
                onClick={() => handleLanguageChange(lang)}
              >
                <span className="text-lg">{lang.flag}</span> {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
