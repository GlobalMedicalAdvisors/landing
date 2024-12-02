import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 max-h-20 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Image
          src="/logo.jpeg"
          alt="GMA Logo"
          width={70}
          height={70}
          className="mix-blend-multiply"
        />
        <span className="sr-only">MediTravel</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#how-it-works"
        >
          How It Works
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#partners"
        >
          Partners
        </Link>
      </nav>
    </header>
  );
};
