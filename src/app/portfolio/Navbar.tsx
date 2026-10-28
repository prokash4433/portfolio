
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
    <nav
      className="absolute left-0 top-0 z-50 w-full border-b"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="#home"
          className="text-[22px] font-bold tracking-tight"
          style={{ color: "var(--accent-color)" }}
        >
          Prokash.Dev
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium transition-colors duration-200"
              style={{ color: "var(--muted-text)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Dynamic Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"
            } mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"
            } mode`}
          aria-pressed={theme === "dark"}
          className="relative flex h-[30px] w-[62px] cursor-pointer items-center rounded-full border px-1 transition-colors duration-300"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--card-bg)",
          }}
        >
          <Sun
            size={18}
            className={`absolute left-[7px] transition-opacity duration-300 ${theme === "light"
                ? "opacity-100"
                : "opacity-50"
              }`}
            style={{
              color: theme === "light" ? "#e5b84d" : "var(--muted-text)",
            }}
          />

          <Moon
            size={18}
            className={`absolute right-[7px] transition-opacity duration-300 ${theme === "dark"
                ? "opacity-100"
                : "opacity-50"
              }`}
            style={{
              color: theme === "dark" ? "#e5b84d" : "var(--muted-text)",
            }}
          />

          <span
            className={`absolute h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${theme === "dark" ? "left-[34px]" : "left-[4px]"
              }`}
          />
        </button>
      </div>
    </nav>
  );
}
