 
import type { Metadata } from "next";
import { Josefin_Sans, Lora } from "next/font/google";

import "./globals.css";

import Navbar from "./portfolio/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import Footer from "./portfolio/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Prokash Das | Portfolio",
  description:
    "Personal portfolio of Prokash Das, showcasing skills, projects, and web development journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ josefinSans.className } ${ lora.variable } h - full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <Navbar />

          <main className="flex-1">{children}

          </main>
           <section id="footer"
           className="scroll-mt-20">
            <Footer />
           </section>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
 