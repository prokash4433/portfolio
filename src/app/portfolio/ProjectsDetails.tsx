 

import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import type { Project } from "@/lib/projects";

function DetailHeading({ children }: { children: React.ReactNode }) {
          return (
                    <h2
                              className="mt-10 text-base font-bold"
                              style={{ color: "var(--heading-color)" }}
                    >
                              {children}
                    </h2>
          );
}

export default function ProjectsDetails({ project }: { project: Project }) {
          return (
                    <section className="mx-auto w-full max-w-[1100px] px-7 pb-24 pt-28 md:px-10">
                              {/* Back Link */}
                              <Link
                                        href="/#projects"
                                        className="inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-80"
                                        style={{ color: "var(--accent-color)" }}
                              >
                                        &larr; Back to projects
                              </Link>

                              {/* Hero Image */}
                              <div className="relative mt-6 aspect-[16/7] w-full overflow-hidden rounded-2xl border shadow-2xl"
                                        style={{ borderColor: "var(--border-color)" }}
                              >
                                        <Image
                                                  src={project.image}
                                                  alt={project.imageAlt}
                                                  fill
                                                  priority
                                                  sizes="(max-width: 1100px) 100vw, 1100px"
                                                  className="object-cover"
                                        />
                              </div>

                              {/* Title */}
                              <h1
                                        className="mt-8 text-3xl font-extrabold leading-tight md:text-4xl"
                                        style={{ color: "var(--heading-color)" }}
                              >
                                        {project.title}
                              </h1>

                              {/* Action Buttons */}
                              <div className="mt-5 flex flex-wrap items-center gap-3">
                                        <a
                                                  href={project.liveUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#6254d9] to-[#8244d7] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#6554d9]/20 transition hover:brightness-110"
                                        >
                                                  <FiExternalLink size={14} />
                                                  Live Project
                                        </a>

                                        <a
                                                  href={project.repoUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="inline-flex items-center gap-2 rounded-md border border-[#7766e8] px-5 py-2.5 text-xs font-semibold transition hover:bg-[#7766e8]/15"
                                                  style={{ color: "var(--accent-hover)" }}
                                        >
                                                  <FaGithub size={14} />
                                                  GitHub Repository
                                        </a>
                              </div>

                              {/* Technology Stack */}
                              <DetailHeading>Main Technology Stack</DetailHeading>

                              <div className="mt-4 flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                                  <span
                                                            key={tech}
                                                            className="rounded-full border px-3 py-1.5 text-xs font-medium"
                                                            style={{
                                                                      borderColor: "var(--border-color)",
                                                                      backgroundColor: "var(--chip-bg)",
                                                                      color: "var(--muted-text)",
                                                            }}
                                                  >
                                                            {tech}
                                                  </span>
                                        ))}
                              </div>

                              {/* Description */}
                              <DetailHeading>Description</DetailHeading>

                              <p
                                        className="mt-3 text-sm leading-7"
                                        style={{ color: "var(--muted-text)" }}
                              >
                                        {project.description}
                              </p>

                              {/* Key Features */}
                              <DetailHeading>Key Features</DetailHeading>

                              <ul
                                        className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6"
                                        style={{ color: "var(--muted-text)" }}
                              >
                                        {project.features.map((feature) => (
                                                  <li key={feature}>{feature}</li>
                                        ))}
                              </ul>

                              {/* Challenges Faced */}
                              <DetailHeading>Challenges Faced</DetailHeading>

                              <ul
                                        className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6"
                                        style={{ color: "var(--muted-text)" }}
                              >
                                        {project.challenges.map((challenge) => (
                                                  <li key={challenge}>{challenge}</li>
                                        ))}
                              </ul>

                              {/* Future Plans */}
                              <DetailHeading>Future Plans &amp; Improvements</DetailHeading>

                              <ul
                                        className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6"
                                        style={{ color: "var(--muted-text)" }}
                              >
                                        {project.futurePlans.map((plan) => (
                                                  <li key={plan}>{plan}</li>
                                        ))}
                              </ul>
                    </section>
          );
}