import React from "react";
import { Link } from "@/i18n/navigation";

interface ActionLinkProps {
  variant: "primary" | "secondary";
  label: string;
  href: string;
  className?: string;
}

const ActionButton: React.FC<ActionLinkProps> = ({
  variant,
  label,
  href,
  className,
}) => {
  return (
    <Link href={href} className={`btn btn-hover ${variant} ${className}`}>
      {label}
    </Link>
  );
};

export default ActionButton;
