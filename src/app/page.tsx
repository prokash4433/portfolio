import Banner from "./portfolio/Banner";
import AboutMe from "./portfolio/AboutMe";
import Skills from "./portfolio/Skills";
import Education from "./portfolio/Education";
import SelfEmployed from "./portfolio/SelfEmployed";
import Projects from "./portfolio/Projects";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent p-4 text-[var(--text-color)] transition-colors duration-300 md:p-8">
      {/* Hero Section */}
      <div
        className="mx-auto mt-20 max-w-7xl rounded-[2.5rem] border px-5 py-5 shadow-2xl transition-colors duration-300 md:px-10 md:py-8"
        style={{
          backgroundColor: "var(--section-bg)",
          borderColor: "var(--border-color)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <Banner />
      </div>

      {/* About Section */}
      <section id="about" className="bg-transparent">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-transparent">
        <Skills />
      </section>

        {/* Education Section */}

        <section>
          <Education/>
        </section>

        {/* Self-Employed Section */}

        <section>
           <SelfEmployed/>
        </section>

      {/* Projects Section */}
      <section id="projects" className="bg-transparent">
        <Projects />
      </section>

      {/* Add More Sections Here */}
      {/*
        <section id="contact">
          <Contact />
        </section>
      */}
    </div>
  );
}