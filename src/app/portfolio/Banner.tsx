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

export default function Banner(): React.JSX.Element {
  return (
    <section
      id="home"
      className="relative mx-auto mt-10 min-h-[320px] w-full max-w-[1400px] overflow-hidden text-[var(--text-color)] transition-colors duration-300"
      style={{
        backgroundColor: "var(--section-bg)",
      }}
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

          <h1 className="bg-gradient-to-r from-[#8278ff] to-[#a34fe3] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Prokash Das
          </h1>

          <h2
            className="mt-3 text-lg font-semibold"
            style={{
              color: "var(--heading-color)",
            }}
          >
            Full Stack Developer
          </h2>

          <p
            className="mt-4 max-w-[440px] text-sm leading-7"
            style={{
              color: "var(--muted-text)",
            }}
          >
            I build scalable, responsive, and user-friendly web applications
            using modern technologies like React, Next.js, Node.js, and
            MongoDB. I turn creative ideas into seamless digital experiences
            with clean code and efficient solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="Prokash-Das-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#6254d9] to-[#8244d7] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#6554d9]/20 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <FiDownload size={14} />
              Download Resume
            </a>

            <Link
              href="#contact"
              className="rounded-md border border-[#7766e8] px-5 py-2.5 text-xs font-semibold transition hover:bg-[#7766e8]/15"
              style={{
                color: "var(--accent-hover)",
              }}
            >
              Hire Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://github.com/prokash4433"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:border-[#8278ff] hover:text-[#a59aff]"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
              }}
            >
              <FaGithub size={15} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:border-[#8278ff] hover:text-[#a59aff]"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
              }}
            >
              <FaLinkedinIn size={15} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:border-[#8278ff] hover:text-[#a59aff]"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
              }}
            >
              <FaXTwitter size={14} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:border-[#8278ff] hover:text-[#a59aff]"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--card-bg)",
                color: "var(--text-color)",
              }}
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[360px]">
          {/* Soft Background Glow */}
          <div className="pointer-events-none absolute h-[280px] w-[240px] rounded-full bg-[#6554d9]/10 blur-[50px] md:h-[320px] md:w-[280px]" />

          {/* Decorative Frame */}
          <div className="absolute h-[270px] w-[220px] rotate-[-6deg] rounded-[28px] border border-[#8278ff]/30 bg-[#8278ff]/5 transition-transform duration-500 hover:rotate-0 md:h-[320px] md:w-[255px]" />

          {/* Profile Image Container */}
          <div
            className="relative h-[260px] w-[210px] overflow-hidden rounded-[24px] border shadow-2xl shadow-black/20 transition-all duration-500 hover:scale-[1.02] md:h-[310px] md:w-[240px]"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--section-bg)",
            }}
          >
            <Image
              src="/images/protfolio.jpg"
              alt="Prokash Das - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 768px) 210px, 240px"
              className="object-cover object-center"
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute right-[12%] top-[10%] h-3 w-3 rounded-full bg-[#8278ff]/60 blur-[1px]" />

          <div className="absolute bottom-[10%] left-[12%] h-2 w-2 rounded-full bg-[#a34fe3]/70" />
        </div>
      </div>
    </section>
  );
}