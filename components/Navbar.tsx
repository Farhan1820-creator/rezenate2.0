// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
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
  const [active, setActive] = useState("#home");

  // Lock scroll + block touch when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }

    // cleanup on unmount, just in case
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [open]);

  return (
    <header className="absolute w-full top-0 left-0 z-50 flex items-center justify-center">
      <div className="flex items-center text-center justify-between w-full auto-width pt-5 px-[16px] md:px-0">
        <Link href="#home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:bg-[#9564F4] hover:text-white px-2 lg:px-5 py-1 rounded-3xl font-outfit text-[16px] lg:text-[18px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden lg:inline-block rounded-full border px-5 py-2 lg:px-8 lg:py-3 hover:bg-black hover:text-white transition-colors font-boldonse text-center lg:text-[12px] lg:text-[14px]"
        >
          Contact us
        </Link>

        {!open && (
          <button
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        )}

        {/* Blurred + dimmed backdrop over the whole page */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`fixed top-0 right-0 h-screen w-[85vw] sm:w-[420px] bg-white shadow-2xl z-50 flex flex-col justify-between px-8 py-8 transition-transform duration-300 ease-in-out lg:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex justify-end mb-10">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col text-start">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`py-4 border-b border-[#f1f1f1] text-lg font-medium w-full ${
                    active === link.href ? "text-[#9564F4]" : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full border px-6 py-3 text-center font-semibold hover:bg-black hover:text-white transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}