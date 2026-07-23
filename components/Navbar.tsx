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
  const [scrolled, setScrolled] = useState(false);

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

  // Toggle navbar background after 70vh scroll
  useEffect(() => {
    const threshold = window.innerHeight * 0.7;

    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial state in case page loads mid-scroll
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll (IntersectionObserver)
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 } // detection band at viewport middle
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 flex items-center justify-center transition-all duration-300  ${
        scrolled ? "bg-white shadow-md py-3 duration-300" : "bg-transparent"
      }`}
    >
      <div className="flex items-center text-center justify-between w-full auto-width pt-5 px-[16px] md:px-3  ">
        <Link href="#home">
          <Logo />
        </Link>

<nav className="hidden lg:flex items-center gap-1 rounded-full p-[2px] bg-gradient-to-r from-white via-white via-20% to-[#9564F4]">
  <div className="flex items-center gap-1 bg-gradient-to-r from-[#fdf7ff] via-[#fdf7ff] via-20% to-[#faebfe] rounded-full py-3 px-5 xl:py-4 xl:px-6">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`relative min-w-fit text-center  px-3 py-1 font-outfit text-[16px] lg:text-[16px] transition-colors duration-200
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:bg-[#9564F4]
        after:w-full after:origin-center after:-translate-x-1/2
        after:transition-transform after:duration-300 rounded-3xl
        ${active === link.href
          ? "text-white bg-[#9564F4]  after:scale-x-0 px-6 mr-2 xl:mr-3 duration-300"
          : "after:scale-x-0 hover:after:scale-x-90"}`}
    >
      {link.label}
    </Link>
  ))}
</div>
</nav>
        <Link
          href="#contact"
          className="hidden lg:inline-block rounded-full border px-5 py-2 lg:px-8 lg:py-2 hover:bg-black hover:text-white transition-colors font-outfit text-center lg:text-[18px] xl:text-[20px]"
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
                  onClick={() => setOpen(false)}
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
            className="rounded-full border px-6 py-3 text-center font-outfit hover:bg-black hover:text-white transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}