const AboutMePage = () => {
          return (
          <section className="min-h-screen pt-15 px-6 py-6 text-[#111827] transition-colors duration-300  dark:text-white">
          <div className="mx-auto max-w-[1080px]">
                    {/* Section Heading */}
          <div className="mb-8">
          <h1 className=" text-[30px] font-bold leading-tight text-[#111827] dark:text-[#f5f5ff]">
          About Me
          </h1>

          <p className="mt-3 text-[15px] text-[#64748b] dark:text-[#a5b4fc]">
          A little about my journey and who I am
          </p>
          </div>

                    {/* Main Content */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-[2fr_1fr]">
          {/* About Me Card */}
          <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-[22px] transition-colors duration-300 dark:border-[#2a2d4d] dark:bg-[#191a31]">
          <p className="mb-5 text-[15px] leading-[26px] text-[#334155] dark:text-[#f1f1fa]">
          <strong className="font-bold text-md text-[#111827] dark:text-white">
          My journey-
          </strong>{" "}
                                                                       My coding journey started with a curiosity about how websites work. I began learning web development through Programming Hero, where I started building my skills in JavaScript, TypeScript, React, Next.js, Mongodb, Express.js and modern web technologies. Through consistent practice, hands-on projects, and solving coding challenges, I’m working toward my goal of becoming a professional full-stack developer.

          </p>

          <p className="mb-5 text-[15px] leading-[26px] text-[#334155] dark:text-[#f1f1fa]">
          <strong className="font-bold text-[#111827] dark:text-white">
          What I enjoy.
          </strong>{" "}
          I love turning messy problems into clean, intuitive interfaces,
          and designing APIs that are simple to use. I thrive in teams
          where people share ideas openly.
          </p>

          <p className="text-[15px] leading-[26px] text-[#334155] dark:text-[#f1f1fa]">
          <strong className="font-bold text-[#111827] dark:text-white">
          Outside coding.
          </strong>{" "}
                                                                      Outside coding. I enjoy cricket, movies, football, traveling, and exploring ship design as a Naval Architecture enthusiast. I love learning new things and having a good conversation over coffee.
          </p>
          </div>

                    {/* Quick Facts Card */}
          <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-[22px] transition-colors duration-300 dark:border-[#2a2d4d] dark:bg-[#191a31]">
          <h2 className="mb-6 text-[18px] font-bold text-[#111827] dark:text-[#f5f5ff]">
          Quick facts
          </h2>

          {/* Hobby Tags */}
          <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
          🏏 Cricket
          </span>

          
                                                                      <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
🎬 Movie
</span>

          <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
          ⚽ Football
          </span>

          <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
          ✈️ Travel
          </span>

          <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
          🍵 Coffee lover
          </span>

                                                                      <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 text-[13px] text-[#111827] dark:border-[#292c4b] dark:bg-[#101124] dark:text-white">
🚢 Ship Design
                                                                      </span>
          </div>

          {/* Location */}
          <p className="mt-5 text-[15px] leading-6 text-[#64748b] dark:text-[#a5b4fc]">
                                                                      Available Worldwide · Open to Remote Opportunities        
                              </p>
                    </div>
          </div>
</div></section>
          );
};

export default AboutMePage;