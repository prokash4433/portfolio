"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeProvider";

type NavLink = {
  name: string;
  href: `/${string}` | `#${string}`;
};

 
const navLinks: NavLink[] = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
  { name: "Footer", href: "/#footer" },
];
 

export default function Navbar(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === "dark";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--card-bg)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight sm:text-[22px]"
          style={{ color: "var(--accent-color)" }}
        >
          Prokash.Dev
        </Link>

        {/* Desktop and Tablet Navigation */}
        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--muted-text)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="relative flex h-[32px] w-[62px] shrink-0 cursor-pointer items-center rounded-full border px-1 transition-colors duration-300"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <Sun
              size={17}
              className="absolute left-[7px] transition-opacity duration-300"
              style={{
                color: !isDark ? "#e5b84d" : "var(--muted-text)",
                opacity: !isDark ? 1 : 0.5,
              }}
            />

            <Moon
              size={17}
              className="absolute right-[7px] transition-opacity duration-300"
              style={{
                color: isDark ? "#e5b84d" : "var(--muted-text)",
                opacity: isDark ? 1 : 0.5,
              }}
            />

            <span
              className={`absolute h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${isDark ? "left-[34px]" : "left-[4px]"
                }`}
            />
          </button>

          {/* Hamburger: Mobile Only */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:opacity-70 lg:hidden"
            style={{
              color: "var(--muted-text)",
              borderColor: "var(--border-color)",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t px-4 py-3 shadow-lg lg:hidden sm:px-6"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "var(--card-bg)",
          }}
        >
          <div className="mx-auto flex max-h-[calc(100dvh-80px)] max-w-[1120px] flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--muted-text)" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}