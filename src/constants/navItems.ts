export interface NavItem {
  name: string;
  href: string;
  hasServicesInside?: boolean;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasServicesInside: true },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { name: "Massage Therapy", href: "/services?category=Massage" },
  { name: "Anti-Aging Treatments", href: "/services?category=Facial" },
  { name: "Posture Correction", href: "/services/posture" },
  { name: "Nordic Walking Groups", href: "/services/nordic-walking" },
];

export const languageLinks = [
  { name: "EN", href: "/en", flag: "🇬🇧" },
  { name: "UA", href: "/ua", flag: "🇺🇦" },
  { name: "PL", href: "/pl", flag: "🇵🇱" },
];
