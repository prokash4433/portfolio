import Image from "next/image";
import Link from "next/link";

import { projects } from "@/lib/projects";

export default function Projects(): React.JSX.Element {
          return (
                    <section
                              id="projects"
                              className="mx-auto w-full max-w-[1250px] px-7 pt-20 md:px-10"
                    >
                              {/* Section Heading */}
                              <h2
                                        className="text-3xl font-extrabold md:text-4xl"
                                        style={{ color: "var(--heading-color)" }}
                              >
                                        Projects
                              </h2>

                              <p className="mt-3 text-md" style={{ color: "var(--muted-text)" }}>
                                        Some of my best work
                              </p>

                              {/* Project Cards */}
                              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {projects.map((project) => (
                                                  <article
                                                            key={project.slug}
                                                            className="group flex flex-col overflow-hidden rounded-2xl border transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-[#7766e8] motion-reduce:transform-none motion-reduce:transition-none shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
                                                            style={{
                                                                      backgroundColor: "var(--card-bg)",
                                                                      borderColor: "var(--border-color)",
                                                            }}
                                                  >
                                                            {/* Thumbnail */}
                                                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                                                      <Image
                                                                                src={project.image}
                                                                                alt={project.imageAlt}
                                                                                fill
                                                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                                                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
                                                                      />
                                                            </div>

                                                            {/* Project Content */}
                                                            <div className="flex flex-1 flex-col p-6">
                                                                      {/* Title */}
                                                                      <h3
                                                                                className="text-lg font-bold leading-snug transition-colors duration-200 group-hover:text-[#927cf5]"
                                                                                style={{ color: "var(--heading-color)" }}
                                                                      >
                                                                                {project.title}
                                                                      </h3>

                                                                      {/* Tech Chips */}
                                                                      <div className="mt-4 flex flex-wrap gap-2">
                                                                                {project.tags.map((tag) => (
                                                                                          <span
                                                                                                    key={tag}
                                                                                                    className="rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 group-hover:border-[#7766e8]/60"
                                                                                                    style={{
                                                                                                              borderColor: "var(--border-color)",
                                                                                                              backgroundColor: "var(--chip-bg)",
                                                                                                              color: "var(--muted-text)",
                                                                                                    }}
                                                                                          >
                                                                                                    {tag}
                                                                                          </span>
                                                                                ))}
                                                                      </div>

                                                                      {/* Action Buttons */}
                                                                      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                                                                                <Link
                                                                                          href={`/projects/${project.slug}`}
                                                                                          className="rounded-md bg-gradient-to-r from-[#6254d9] to-[#8244d7] px-5 py-2.5 text-xs font-semibold text-white transition-[transform,filter] duration-200 ease-out hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
                                                                                >
                                                                                          View Details
                                                                                </Link>

                                                                                <a
                                                                                          href={project.repoUrl}
                                                                                          target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                          className="rounded-md border border-[#7766e8] px-5 py-2.5 text-xs font-semibold transition-[transform,background-color] duration-200 ease-out hover:scale-[1.02] hover:bg-[#7766e8]/15 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
                                                                                          style={{ color: "var(--accent-hover)" }}
                                                                                >
                                                                                          Git Details
                                                                                </a>
                                                                      </div>
                                                            </div>
                                                  </article>
                                        ))}
                              </div>
                    </section>
          );
}