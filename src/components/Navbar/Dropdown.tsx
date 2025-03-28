"use client";
import { Link } from "@/i18n/navigation";

interface NavDropdownProps {
  title: string;
  links: { name: string; href: string }[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function NavDropdown({
  title,
  links,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: NavDropdownProps) {
  return (
    <li
      className="relative text-textGreen hover:text-accent cursor-pointer"
      onMouseEnter={onMouseEnter}
    >
      <Link href="#" className="inline-block">
        {title} ▾
      </Link>
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md"
          onMouseLeave={onMouseLeave}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="px-4 py-2 text-textGreen hover:text-accent"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
