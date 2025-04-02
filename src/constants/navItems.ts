export interface NavItem {
  name: string;
  href: string;
  hasServicesInside?: boolean;
}

export const navItems: NavItem[] = [
  { name: "home", href: "/" },
  { name: "services", href: "/services", hasServicesInside: true },
  { name: "about", href: "/about" },
  { name: "contact", href: "/contact" },
];

export const serviceLinks = [
  { name: "massage_therapy", href: "/services?category=massage_therapy" },
  { name: "facial_treatments", href: "/services?category=facial_treatments" },
  { name: "posture_correction", href: "/services?category=posture_correction" },
  {
    name: "nordic_walking_groups",
    href: "/services?category=nordic_walking_groups",
  },
];

export const languageLinks = [
  { name: "EN", href: "/en", flag: "🇬🇧" },
  { name: "UA", href: "/ua", flag: "🇺🇦" },
  { name: "PL", href: "/pl", flag: "🇵🇱" },
];
