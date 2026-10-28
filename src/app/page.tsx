import React from "react";
import Banner from "./portfolio/Banner";
 
import AboutMe from "./portfolio/AboutMe";

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen p-4 transition-colors duration-300 md:p-8"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div
        className="mx-auto mt-20 max-w-7xl rounded-[2.5rem] border px-5 py-5 shadow-2xl transition-colors duration-300 md:px-10 md:py-8"
        style={{
         
          borderColor: "var(--border-color)",
        }}
      >
        <Banner />
        
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}