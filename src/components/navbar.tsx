"use client";
import { NAVLINKS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MobileDrawer } from "./mobile-drawer";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const IS_HOMEPAGE = pathname === "/";

  return (
    <header className="px-4 lg:px-6 max-h-20 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="#">
        <Image src="/logo.png" alt="GMA Logo" width={70} height={70} />
        <span className="sr-only">MediTravel</span>
      </Link>
      {IS_HOMEPAGE && (
        <>
          <nav className="ml-auto gap-4 sm:gap-6 sm:flex hidden">
            {NAVLINKS.map((link) => (
              <NavLink key={link.url} href={link.url}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="sm:hidden">
            <MobileDrawer />
          </div>
        </>
      )}
    </header>
  );
};
