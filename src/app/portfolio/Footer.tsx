"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
          Mail,
          Phone,
          MapPin,
          MessageCircle,
          ArrowUp,
          Heart,
} from "lucide-react";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

type QuickLink = {
          name: string;
          href: string;
};

type SocialLink = {
          name: string;
          href: string;
          icon: React.ReactNode;
};

const Footer = (): React.JSX.Element => {
          const { theme } = useTheme();
          const isDark = theme === "dark";

          const [year, setYear] = useState<number | null>(null);

          useEffect(() => {
                    setYear(new Date().getFullYear());
          }, []);

          const quickLinks: QuickLink[] = [
                    { name: "About", href: "/#about" },
                    { name: "Skills", href: "/#skills" },
                    { name: "Education", href: "/#education" },
                    { name: "Experience", href: "/#experience" },
                    { name: "Projects", href: "#/projects" },
                    { name: "Contact", href: "#/contact" },
          ];

          const socialLinks: SocialLink[] = [
                    {
                              name: "GitHub",
                              href: "https://github.com/prokash4433",
                              icon: <FaGithub size={15} />,
                    },
                    {
                              name: "LinkedIn",
                              href: "https://linkedin.com/in/prokash-das-230946260/",
                              icon: <FaLinkedinIn size={15} />,
                    },
                    {
                              name: "WhatsApp",
                              href: "https://wa.me/8801572910506",
                              icon: <FaWhatsapp size={15} />,
                    },
          ];

          return (
                    <footer
                              id="footer"
                              className={`relative border-t transition-colors duration-300 ${isDark
                                                  ? "border-violet-500/30 text-gray-300"
                                                  : "border-violet-200 bg-gradient-to-r from-violet-50 via-white to-indigo-50 text-gray-600"
                                        }`}
                    >
                              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                                        {/* Main Footer */}
                                        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                                                  {/* Brand */}
                                                  <div>
                                                            <Link
                                                                      href="#home"
                                                                      className="inline-block text-3xl font-bold text-violet-500 transition hover:text-violet-400"
                                                            >
                                                                      Prokash.dev
                                                            </Link>

                                                            <p
                                                                      className={`mt-3 max-w-sm text-sm leading-6 ${isDark ? "text-gray-300" : "text-gray-600"
                                                                                }`}
                                                            >
                                                                      Full Stack Developer who loves building fast, clean, and useful
                                                                      web applications. Let&apos;s create something great together.
                                                            </p>

                                                            {/* Social Links */}
                                                            <div className="mt-4 flex items-center gap-3">
                                                                      {socialLinks.map((social) => (
                                                                                <a
                                                                                          key={social.name}
                                                                                          href={social.href}
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                          aria-label={social.name}
                                                                                          title={social.name}
                                                                                          className={`flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/70 transition duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:text-white ${isDark
                                                                                                              ? "text-white"
                                                                                                              : "text-violet-700 hover:border-violet-600"
                                                                                                    }`}
                                                                                >
                                                                                          {social.icon}
                                                                                </a>
                                                                      ))}
                                                            </div>
                                                  </div>

                                                  {/* Quick Links */}
                                                  <div>
                                                            <h3
                                                                      className={`mb-4 text-xl font-bold ${isDark ? "text-white" : "text-gray-900"
                                                                                }`}
                                                            >
                                                                      Quick Links
                                                            </h3>

                                                            <ul className="space-y-2">
                                                                      {quickLinks.map((link) => (
                                                                                <li key={link.name}>
                                                                                          <Link
                                                                                                    href={link.href}
                                                                                                    className={`text-sm transition-colors duration-200 hover:text-violet-500 ${isDark ? "text-gray-300" : "text-gray-600"
                                                                                                              }`}
                                                                                          >
                                                                                                    {link.name}
                                                                                          </Link>
                                                                                </li>
                                                                      ))}
                                                            </ul>
                                                  </div>

                                                  {/* Contact */}
                                                  <div>
                                                            <h3
                                                                      className={`mb-4 text-xl font-bold ${isDark ? "text-white" : "text-gray-900"
                                                                                }`}
                                                            >
                                                                      Get In Touch
                                                            </h3>

                                                            <ul className="space-y-2.5">
                                                                      <li>
                                                                                <a
                                                                                          href="mailto:prokashdas734@gmail.com"
                                                                                          className="flex items-center gap-2 text-sm transition hover:text-violet-500"
                                                                                >
                                                                                          <Mail size={14} className="shrink-0" />
                                                                                          <span>prokashdas734@gmail.com</span>
                                                                                </a>
                                                                      </li>

                                                                      <li>
                                                                                <a
                                                                                          href="tel:+8801572910506"
                                                                                          className="flex items-center gap-2 text-sm transition hover:text-violet-500"
                                                                                >
                                                                                          <Phone size={14} className="shrink-0" />
                                                                                          <span>+8801572910506</span>
                                                                                </a>
                                                                      </li>

                                                                      <li>
                                                                                <a
                                                                                          href="https://wa.me/8801572910506"
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                          className="flex items-center gap-2 text-sm transition hover:text-violet-500"
                                                                                >
                                                                                          <MessageCircle size={14} className="shrink-0" />
                                                                                          <span>WhatsApp me</span>
                                                                                </a>
                                                                      </li>

                                                                      <li
                                                                                className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-600"
                                                                                          }`}
                                                                      >
                                                                                <MapPin size={14} className="shrink-0 text-pink-500" />
                                                                                <span>Dhaka, Bangladesh</span>
                                                                      </li>
                                                            </ul>
                                                  </div>
                                        </div>

                                        {/* Bottom Footer */}
                                        <div
                                                  className={`flex flex-col items-center justify-between gap-4 border-t py-5 text-center text-xs sm:flex-row sm:text-left ${isDark ? "border-white/10" : "border-gray-200"
                                                            }`}
                                        >
                                                  <p>© {year ?? 2026} Prokash Das. All rights reserved.</p>

                                                  <p className="flex items-center gap-1">
                                                            Designed &amp; built Prokash
                                                            <Heart
                                                                      size={13}
                                                                      className="fill-pink-500 text-pink-500"
                                                            />
                                                  </p>

                                                  <a
                                                            href="#home"
                                                            className="inline-flex items-center gap-1 rounded-lg border border-violet-500 px-3 py-1.5 font-medium text-violet-500 transition duration-300 hover:bg-violet-600 hover:text-white"
                                                  >
                                                            <ArrowUp size={13} />
                                                            Back to top
                                                  </a>
                                        </div>
                              </div>
                    </footer>
          );
};

export default Footer;