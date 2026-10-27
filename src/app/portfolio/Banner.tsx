import React from "react";
import { Download } from "lucide-react";

const SOCIALS = [
          { label: "GH", href: "#", full: "GitHub" },
          { label: "in", href: "#", full: "LinkedIn" },
          { label: "X", href: "#", full: "X" },
          { label: "f", href: "#", full: "Facebook" },
];

// Constellation / low-poly points scattered around the portrait.
const POINTS = [
          [40, 60],
          [120, 20],
          [210, 70],
          [300, 30],
          [380, 90],
          [440, 40],
          [60, 180],
          [150, 140],
          [250, 190],
          [350, 150],
          [430, 200],
          [30, 300],
          [110, 260],
          [220, 310],
          [320, 270],
          [420, 320],
          [80, 400],
          [180, 430],
          [280, 390],
          [380, 440],
          [450, 380],
          [50, 480],
          [250, 490],
          [400, 500],
];

// Pairs of point indices to connect with lines.
const EDGES = [
          [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
          [0, 6], [1, 7], [2, 7], [2, 8], [3, 9], [4, 9], [4, 10], [5, 10],
          [6, 7], [7, 8], [8, 9], [9, 10],
          [6, 11], [7, 12], [8, 13], [9, 14], [10, 15],
          [11, 12], [12, 13], [13, 14], [14, 15],
          [11, 16], [12, 16], [13, 17], [13, 18], [14, 18], [15, 19], [15, 20],
          [16, 17], [17, 18], [18, 19], [19, 20],
          [16, 21], [18, 22], [20, 23],
          [21, 22], [22, 23],
];

const BannerPage = () => {
          return (
                    <section className="relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-8 md:py-24">
                              {/* ---- Left: intro copy ---- */}
                              <div className="order-2 md:order-1">
                                        <p className="mb-3 text-sm text-slate-400">Hello, I&apos;m</p>
                                        <h1 className="mb-1 text-4xl font-bold tracking-tight text-white md:text-5xl">
                                                  Alex Rahman
                                        </h1>
                                        <h2 className="mb-5 text-xl font-semibold text-[#7c6cf6] md:text-2xl">
                                                  Full Stack Developer
                                        </h2>
                                        <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-400 md:text-[15px]">
                                                  I build fast, accessible and beautiful web applications with React,
                                                  Node.js and modern tooling. Let&apos;s turn your idea into a polished
                                                  product.
                                        </p>

                                        <div className="mb-9 flex flex-wrap items-center gap-4">
                                                  <a
                                                            href="#"
                                                            className="inline-flex items-center gap-2 rounded-lg bg-[#6c5ce7] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#6c5ce7]/25 transition-colors hover:bg-[#5b4bd6]"
                                                  >
                                                            <Download className="h-4 w-4" />
                                                            Download Resume
                                                  </a>
                                                  <a
                                                            href="#contact"
                                                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
                                                  >
                                                            Hire Me
                                                  </a>
                                        </div>

                                        <div className="flex items-center gap-3">
                                                  {SOCIALS.map((s) => (
                                                            <a
                                                                      key={s.label}
                                                                      href={s.href}
                                                                      aria-label={s.full}
                                                                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-slate-300 transition-colors hover:border-[#6c5ce7] hover:text-white"
                                                            >
                                                                      {s.label}
                                                            </a>
                                                  ))}
                                        </div>
                              </div>

                              {/* ---- Right: portrait + constellation ---- */}
                              <div className="order-1 flex items-center justify-center md:order-2">
                                        <div className="relative w-full max-w-[380px]">
                                                  {/* Low-poly network behind the photo */}
                                                  <svg
                                                            className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-[#6c5ce7]"
                                                            viewBox="0 0 480 520"
                                                            fill="none"
                                                            aria-hidden="true"
                                                  >
                                                            {EDGES.map(([a, b], i) => (
                                                                      <line
                                                                                key={`e-${i}`}
                                                                                x1={POINTS[a][0]}
                                                                                y1={POINTS[a][1]}
                                                                                x2={POINTS[b][0]}
                                                                                y2={POINTS[b][1]}
                                                                                stroke="currentColor"
                                                                                strokeOpacity="0.35"
                                                                                strokeWidth="1"
                                                                      />
                                                            ))}
                                                            {POINTS.map(([x, y], i) => (
                                                                      <circle
                                                                                key={`p-${i}`}
                                                                                cx={x}
                                                                                cy={y}
                                                                                r="2"
                                                                                fill="currentColor"
                                                                                fillOpacity="0.7"
                                                                      />
                                                            ))}
                                                  </svg>

                                                  {/* Portrait frame */}
                                                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1b2440] via-[#141c33] to-[#0e1526] shadow-2xl shadow-[#6c5ce7]/10">
                                                            <svg
                                                                      viewBox="0 0 380 475"
                                                                      className="h-full w-full"
                                                                      aria-label="Portrait of Alex Rahman"
                                                                      role="img"
                                                            >
                                                                      <defs>
                                                                                <radialGradient id="portrait-glow" cx="50%" cy="38%" r="60%">
                                                                                          <stop offset="0%" stopColor="#3b3f7a" />
                                                                                          <stop offset="100%" stopColor="#0e1526" />
                                                                                </radialGradient>
                                                                      </defs>
                                                                      <rect width="380" height="475" fill="url(#portrait-glow)" />
                                                                      {/* Simple head + shoulders silhouette */}
                                                                      <g fill="#0a1020" fillOpacity="0.85">
                                                                                <circle cx="190" cy="185" r="78" />
                                                                                <path d="M60 475c0-78 58-140 130-140s130 62 130 140H60z" />
                                                                      </g>
                                                            </svg>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default BannerPage;