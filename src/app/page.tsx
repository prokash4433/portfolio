import React from "react";
import Banner from "./portfolio/Banner";

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen p-4 transition-colors duration-300 md:p-8"
      style={{ backgroundColor: "var(--page-bg)" }}
    >
      <div
        className="mx-auto mt-20 max-w-6xl rounded-[2.5rem] border px-6 py-6 shadow-2xl transition-colors duration-300 md:px-10 md:py-8"
        style={{
          backgroundColor: "var(--section-bg)",
          borderColor: "var(--border-color)",
        }}
      >
        <Banner />
      </div>
    </div>
  );
}