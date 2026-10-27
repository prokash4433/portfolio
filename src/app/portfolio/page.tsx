import React from "react";
import NavbarPage from "./Navbar";
import BannerPage from "./Banner";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#05070d] p-4 md:p-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/5 bg-[#0b1120] px-6 py-6 shadow-2xl md:px-10 md:py-8">
        <NavbarPage />
        <BannerPage />
      </div>
    </div>
  );
}
