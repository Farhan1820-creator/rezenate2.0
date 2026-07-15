// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "How We Partner", href: "#how-we-partner" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<header className="absolute w-full  top-0 left-0 z-50 flex items-center justify-center  ">      
<div className=" flex items-center text-center justify-between w-full auto-width pt-5 px-[16px] md:px-0 ">
<Link href="#home">
  <Logo />
</Link>

      <nav className="hidden lg:flex items-center ">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:bg-[#9564F4] hover:text-white px-2 lg:px-5  py-1 rounded-3xl font-outfit text-[16px] lg:text-[18px]">
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="hidden lg:inline-block rounded-full border px-5 py-2 lg:px-8 lg:py-3  hover:bg-black hover:text-white transition-colors font-boldonse text-center lg:text-[12px] lg:text-[14px] "
      >
        Contact us
      </Link>

      <button
        className="lg:hidden"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full h-screen bg-[#FDFDFD] shadow-md flex flex-col items-center justify-center gap-4  lg:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg md:text-xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full border px-5 py-1.5 text-lg md:text-xl font-medium"
          >
            Contact us
          </Link>
        </div>
      )}
      </div>
    </header>
  );
}