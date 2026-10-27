 
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import { FiDownload } from "react-icons/fi";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative mx-auto mt-10 min-h-[420px] w-full max-w-[1440px] overflow-hidden rounded-[40px] bg-[var(--section-bg)] text-[var(--text-color)] transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[20%] top-[25%] h-48 w-48 rounded-full bg-[#6554d9]/10 blur-[90px]" />

      {/* Decorative Geometry */}
      <div className="pointer-events-none absolute right-[25%] top-[22%] hidden h-64 w-44 rotate-[-12deg] border border-[#8b85d7]/25 md:block">
        <div className="absolute -left-8 top-8 h-28 w-28 rotate-45 border border-[#8b85d7]/25" />

        <div className="absolute -right-8 bottom-4 h-24 w-24 rotate-45 border border-[#8b85d7]/25" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid min-h-[420px] max-w-[1120px] grid-cols-1 items-center gap-10 px-7 pb-12 pt-28 md:grid-cols-2 md:px-10 md:pb-8 md:pt-20">
        {/* Left Content */}
        <div className="relative z-20">
          <p className="mb-2 text-sm font-medium text-[#7770e9]">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="bg-gradient-to-r from-[#8278ff] to-[#a34fe3] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Prokash Das
          </h1>

          {/* Designation */}
          <h2 className="mt-3 text-lg font-semibold text-[var(--text-color)]">
            Full Stack Developer
          </h2>

          {/* Introduction */}
          <p className="mt-4 max-w-[440px] text-sm leading-7 text-[var(--muted-text)]">
            I build scalable, responsive, and user-friendly web applications
            using modern technologies like React, Next.js, Node.js, and
            MongoDB. I turn creative ideas into seamless digital experiences
            with clean code and efficient solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#6254d9] to-[#8244d7] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#6554d9]/20 transition hover:brightness-110"
            >
              <FiDownload size={14} />
              Download Resume
            </a>

            {/* Hire Me Button */}
            <Link
              href="#contact"
              className="rounded-md border border-[#7766e8] px-5 py-2.5 text-xs font-semibold text-[#a59aff] transition hover:bg-[#7766e8]/15"
            >
              Hire Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] transition hover:border-[#8278ff] hover:text-[#a59aff]"
            >
              <FaGithub size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] transition hover:border-[#8278ff] hover:text-[#a59aff]"
            >
              <FaLinkedinIn size={15} />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] transition hover:border-[#8278ff] hover:text-[#a59aff]"
            >
              <FaXTwitter size={14} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] transition hover:border-[#8278ff] hover:text-[#a59aff]"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[340px]">
          {/* Image Frame */}
          <div className="absolute h-[260px] w-[220px] rotate-[-5deg] rounded-[28px] border border-[#8d7ce9]/30 bg-[#6554d9]/10 md:h-[310px] md:w-[255px]" />

          {/* Profile Image */}
          <div className="relative h-[250px] w-[205px] overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl shadow-black/30 md:h-[300px] md:w-[240px]">
            <Image
              src="/images/prokash.jpg"
              alt="Prokash Das - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 768px) 205px, 240px"
              className="object-cover object-center"
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute right-[12%] top-[10%] h-3 w-3 rounded-full bg-[#8278ff]/60 blur-[1px]" />

          <div className="absolute bottom-[10%] left-[12%] h-2 w-2 rounded-full bg-[#a34fe3]/70" />
        </div>
      </div>
    </section>
  );
}
 