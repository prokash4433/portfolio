 
"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full rounded-t-[32px] border-b border-white/5 bg-[#101735]/90">
      <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[18px] font-bold tracking-tight text-[#7770e9]"
        >
          Alex.dev
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium text-gray-200 transition-colors duration-200 hover:text-[#8b7bff]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Design */}
        <button
          type="button"
          aria-label="Theme toggle"
          className="flex h-[28px] items-center gap-1 rounded-full border border-white/20 bg-[#d9d8ee] px-1.5 shadow-sm"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#e5b84d]">
            <Sun size={13} />
          </span>

          <Moon size={13} className="text-[#555b89]" />
        </button>
      </div>
    </nav>
  );
}
 