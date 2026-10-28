
const AboutMePage = () => {
          return (
                    <section
                              id="about"
                              className="mt-10 w-full px-5 pt-6 pb-6 transition-colors duration-300 sm:px-8 lg:px-10"
                              style={{ color: "var(--text-color)" }}
                    >
          <div className="mx-auto w-full max-w-[1200px]">
                   {/* Section Heading */}
          <div className="mb-8 text-center">
          <h1
          className="text-[30px] font-bold leading-tight"
          style={{ color: "var(--heading-color)" }}
          >
          About Me
          </h1>

          <p
          className="mt-3 text-[15px]"
          style={{ color: "var(--muted-text)" }}
          >
          A little about my journey and who I am
          </p>
          </div>

                    {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
                    {/* About Me Card */}
          <div
          className="rounded-2xl border p-10 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
          style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--card-bg)",
          }}
          >
          <p
           className="mb-5 text-[15px] leading-[26px]"
                                                                      style={{ color: "var(--text-color)" }}
                                                            >
                                                                      <strong
                                                                                className="text-md font-bold"
                                                                                style={{ color: "var(--heading-color)" }}
                                                                      >
                                                                                My journey-
                                                                      </strong>{" "}
                                                                      My coding journey started with a curiosity about how websites
                                                                      work. I began learning web development through Programming Hero,
                                                                      where I started building my skills in JavaScript, TypeScript,
                                                                      React, Next.js, MongoDB, Express.js and modern web technologies.
                                                                      Through consistent practice, hands-on projects, and solving
                                                                      coding challenges, I’m working toward my goal of becoming a
                                                                      professional full-stack developer.
                                                            </p>

                                                            <p
                                                                      className="mb-5 text-[15px] leading-[26px]"
                                                                      style={{ color: "var(--text-color)" }}
                                                            >
                                                                      <strong
                                                                                className="font-bold"
                                                                                style={{ color: "var(--heading-color)" }}
                                                                      >
                                                                                What I enjoy.
                                                                      </strong>{" "}
                                                                      I love turning messy problems into clean, intuitive interfaces,
                                                                      and designing APIs that are simple to use. I thrive in teams
                                                                      where people share ideas openly.
                                                            </p>

                                                            <p
                                                                      className="text-[15px] leading-[26px]"
                                                                      style={{ color: "var(--text-color)" }}
                                                            >
                                                                      <strong
                                                                                className="font-bold"
                                                                                style={{ color: "var(--heading-color)" }}
                                                                      >
                                                                                Outside coding.
                                                                      </strong>{" "}
                                                                      I enjoy cricket, movies, football, traveling, and exploring ship
                                                                      design as a Naval Architecture enthusiast. I love learning new
                                                                      things and having a good conversation over coffee.
                                                            </p>
                                                  </div>

{/* Quick Facts Card */}
                                                  <div
                                                            className="rounded-2xl border gap-4 p-10 shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
                                                            style={{
                                                                      borderColor: "var(--border-color)",
                                                                      backgroundColor: "var(--card-bg)",
                                                            }}
                                                  >
                                                            <h2
                                                                      className="mb-6 text-[18px] font-bold"
                                                                      style={{ color: "var(--heading-color)" }}
                                                            >
                                                                      Quick facts
                                                            </h2>

                                                            {/* Hobby Tags */}
                                                            <div className="flex flex-wrap gap-1.5">
                                                                      {[
                                                                                "🏏 Cricket",
                                                                                "🎬 Movie",
                                                                                "⚽ Football",
                                                                                "✈️ Travel",
                                                                                "🍵 Coffee lover",
                                                                                "🚢 Ship Design",
                                                                      ].map((hobby) => (
                                                                                <span
                                                                                          key={hobby}
                                                                                          className="rounded-full border px-4 py-1.5 text-[13px] transition-colors duration-300"
                                                                                          style={{
                                                                                                    borderColor: "var(--border-color)",
                                                                                                    backgroundColor: "var(--chip-bg)",
                                                                                                    color: "var(--text-color)",
                                                                                          }}
                                                                                >
                                                                                          {hobby}
                                                                                </span>
                                                                      ))}
                                                            </div>

                                                            {/* Location */}
                                                            <p
                                                                      className="mt-5 text-[15px] leading-6"
                                                                      style={{ color: "var(--muted-text)" }}
                                                            >
                                                                      Available Worldwide · Open to Remote Opportunities
                                                            </p>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default AboutMePage;
