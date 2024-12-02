import { NAVLINKS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:underline underline-offset-4"
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 max-h-20 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Image src="/logo.png" alt="GMA Logo" width={70} height={70} />
        <span className="sr-only">MediTravel</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {NAVLINKS.map((link) => (
          <NavLink key={link.url} href={link.url}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
