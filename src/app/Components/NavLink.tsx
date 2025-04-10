"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  label: string | ReactNode;
  className?: string;
}

const NavLink = ({ href, label, className = "" }: NavLinkProps) => {
  return (
    <Link href={href} className={`btn ${className}`}>
      {label}
    </Link>
  );
};

export default NavLink;
