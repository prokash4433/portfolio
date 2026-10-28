import {
          FaHtml5,
          FaReact,
          FaNodeJs,
          FaDatabase,
          FaLeaf,
          FaLock,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbCode } from "react-icons/tb";

const Skills = () => {
          const frontendSkills = [
                    {
                              name: "HTML5",
                              icon: <FaHtml5 className="text-xl text-[#F04E30]" />,
                    },
                    {
                              name: "Tailwind CSS",
                              icon: <SiTailwindcss className="text-xl text-[#38BDF8]" />,
                    },
                    {
                              name: "JavaScript",
                              icon: (
                                        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-[2px] bg-[#F7DF1E] text-[11px] font-bold text-black">
                                                  JS
                                        </span>
                              ),
                    },
                    {
                              name: "TypeScript",
                              icon: (
                                        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-[2px] bg-[#3178C6] text-[11px] font-bold text-white">
                                                  TS
                                        </span>
                              ),
                    },
                    {
                              name: "React",
                              icon: <FaReact className="text-xl text-[#61DAFB]" />,
                    },
                    {
                              name: "Next.js",
                              icon: (
                                        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                                                  N
                                        </span>
                              ),
                    },
          ];

          const backendSkills = [
                    {
                              name: "Node.js",
                              icon: <FaNodeJs className="text-xl text-[#5FAF4E]" />,
                    },
                    {
                              name: "Express.js",
                              icon: (
                                        <span className="flex h-6 w-6 items-center justify-center rounded bg-[#999999] text-[10px] font-bold text-white">
                                                  ex
                                        </span>
                              ),
                    },
                    {
                              name: "SQL",
                              icon: <FaDatabase className="text-xl text-[#38BDF8]" />,
                    },
                    {
                              name: "MongoDB",
                              icon: <FaLeaf className="text-xl text-[#48A84E]" />,
                    },
                    {
                              name: "REST API",
                              icon: <TbCode className="text-2xl text-[#00D9F5]" />,
                    },
                    {
                              name: "Authentication",
                              icon: <FaLock className="text-xl text-[#FFA500]" />,
                    },
          ];

          return (
                    <section
                              id="skills"
                              className="relative overflow-hidden bg-transparent px-5 py-6 text-[var(--text-color)] sm:px-8 sm:py-8"
                    >
                              <div className="relative mx-auto max-w-[1200px]">
                                        {/* Section Heading */}
                                        <div className="mb-7 text-center">
                                                  <h2 className="mb-3 text-3xl font-bold tracking-tight text-[var(--heading-color)] sm:text-[40px]">
                                                            Skills
                                                  </h2>

                                                  <p className="mx-auto max-w-[570px] text-base leading-[27px] text-[var(--muted-text)] sm:text-lg">
                                                            Here are some of the technologies I’m currently learning and
                                                            practicing as I grow my skills in web development.
                                                  </p>
                                        </div>

                                        {/* Skills Cards */}
                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-9">
                    {/* Frontend Card */}
<div className="rounded-[23px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-5 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]">
                                                            <h3 className="mb-5 text-center text-[28px] font-bold text-[var(--heading-color)]">
                                                                      Frontend
                                                            </h3>

                                                            <div className="mx-auto flex max-w-[410px] flex-wrap justify-center gap-[14px]">
                                                                      {frontendSkills.map((skill) => (
                                                                                <div
                                                                                          key={skill.name}
                                                                                          className="flex min-h-[50px] items-center justify-center gap-3 rounded-[14px] border border-[var(--border-color)] bg-[var(--chip-bg)] px-4 py-3 transition-all duration-300 hover:border-[var(--accent-color)] hover:brightness-95"
                                                                                >
                                                                                          {skill.icon}

                                                                                          <span className="whitespace-nowrap text-[15px] text-[var(--muted-text)] sm:text-base">
                                                                                                    {skill.name}
                                                                                          </span>
                                                                                </div>
                                                                      ))}
                                                            </div>
                                                  </div>

          {/* Backend Card */}
          <div className="rounded-[23px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-5 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] sm:px-8 sm:py-6">
          <h3 className="mb-5 text-center text-[28px] font-bold text-[var(--heading-color)]">
          Backend
          </h3>

          <div className="mx-auto flex max-w-[440px] flex-wrap justify-center gap-[14px]">
          {backendSkills.map((skill) => (
                                                                                <div
                                                                                          key={skill.name}
                                                                                          className="flex min-h-[50px] items-center justify-center gap-3 rounded-[14px] border border-[var(--border-color)] bg-[var(--chip-bg)] px-4 py-3 transition-all duration-300 hover:border-[var(--accent-color)] hover:brightness-95"
                                                                                >
                                                                                          {skill.icon}

                                                                                          <span className="whitespace-nowrap text-[15px] text-[var(--muted-text)] sm:text-base">
                                                                                                    {skill.name}
                                                                                          </span>
                                                                                </div>
                                                                      ))}
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default Skills;