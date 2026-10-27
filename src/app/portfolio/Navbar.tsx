 
"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-[var(--border-color)]">
      <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[22px] font-bold tracking-tight text-[#7770e9]"
        >
          Prokash.Dev
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[var(--muted-text)] transition-colors duration-200 hover:text-[#8b7bff]"
            >
              {link.name}
            </Link>
          ))}
        </div>


                              {/* Dynamic Theme Toggle */}
          <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    className={`relative flex h-[30px] w-[62px] cursor-pointer items-center rounded-full border px-1 transition-colors duration-300 ${theme === "dark"
                    ? "border-gray-300 bg-[#252b40]"
                    : "border-white/20 bg-[#d9d8ee]"}`}>
          
          
          <Sun
                    size={18}
                    className={`absolute left-[7px] transition-opacity duration-300 ${theme === "light"
                    ? "text-[#e5b84d] opacity-100"
                    : "text-white opacity-50"}`}/>

          <Moon
                    size={18}
                    className={`absolute right-[7px] transition-opacity duration-300 ${theme === "dark"
                    ? "text-[#e5b84d] opacity-100"
                    : "text-[#555b89] opacity-50"}`}/>

          <span
          className={`absolute h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${theme === "dark" ? "left-[34px]" : "left-[4px]"}`}/>
          </button>

      </div>
    </nav>
  );
}
 