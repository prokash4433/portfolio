
type EducationItem = {
          period: string;
          degree: string;
          institution: string;
          location: string;
          result?: string;
          focus: string;
};

const educationData: EducationItem[] = [
          {
                    period: "2025 – 2028",
                    degree: "B.Sc. in Naval Architecture and Marine Engineering",
                    institution: "Sonargaon University",
                    location: "Dhaka",
                    focus:
                              "Focused on full-stack web development, building responsive and user-friendly interfaces, integrating REST APIs, and developing reliable backend systems. Interested in creating practical solutions to real-world problems through modern technologies, clean code, efficient database management, secure authentication, and scalable web applications using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and MongoDB.",
          },
];

const Education = () => {
          return (
                    <section
                              id="education"
                              className="w-full bg-transparent px-4 py-12 transition-colors duration-300 sm:px-6 md:px-8 lg:px-10"
                              style={{ color: "var(--text-color)" }}
                    >
                              <div className="mx-auto w-full max-w-[1200px]">
                    {/* Section Heading */}
          <div className="mb-9 text-center">
          <h2
          className="text-2xl font-bold leading-tight sm:text-[30px]"
          style={{ color: "var(--heading-color)" }}
          >
          Education
          </h2>

          <p
          className="mt-3 text-sm sm:text-[15px]"
          style={{ color: "var(--muted-text)" }}>
          My academic background
          </p>
          </div>

          {/* Education Timeline */}
          <div className="ml-1 space-y-5  transition-all duration-300   border-l-[3px] border-[#9147ff] pl-5 sm:ml-2 sm:pl-5">
          {educationData.map((item) => (
                                                            <article
                                                                      key={`${item.period}-${item.degree}`}
                                                                      className="rounded-2xl border border-[#6338a7] !bg-transparent p-4 transition-all duration-300 hover:border-[#9147ff] sm:p-5 md:px-5 md:py-6"
                                                            >
                                                                      {/* Period */}
                                                                      <p className="mb-2 text-[13px] font-semibold text-[#925cff] sm:text-sm">
                                                                                {item.period}
                                                                      </p>

                                                                      {/* Degree */}
                                                                      <h3
                                                                                className="text-base font-bold leading-snug sm:text-lg"
                                                                                style={{ color: "var(--heading-color)" }}
                                                                      >
                                                                                {item.degree}
                                                                      </h3>

                                                                      {/* Institution */}
                                                                      <p
                                                                                className="mt-2 text-sm leading-6 sm:text-[15px]"
                                                                                style={{ color: "var(--muted-text)" }}
                                                                      >
                                                                                {item.institution}, {item.location}
                                                                                {item.result && ` · ${item.result}`}
                                                                      </p>

                                                                      {/* Focus */}
                                                                      <p
                                                                                className="mt-1 text-sm leading-6 sm:text-[15px]"
                                                                                style={{ color: "var(--text-color)" }}
                                                                      >
                                                                                <span
                                                                                          className="font-medium"
                                                                                          style={{ color: "var(--heading-color)" }}
                                                                                >
                                                                                          Focus:
                                                                                </span>{" "}
                                                                                {item.focus}
                                                                      </p>
                                                            </article>
                                                  ))}
                                        </div>
                              </div>
                    </section>
          );
};

export default Education;
