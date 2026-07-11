import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfdfa] dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 flex flex-col relative transition-colors duration-300" id="inicio">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-[50%] h-[20%] bg-gold-400/5 dark:bg-gold-500/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[20%] bg-gold-500/5 dark:bg-gold-400/8 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar />

      <main className="flex-grow flex flex-col">
        <Hero />

        <About />

        <PracticeAreas />

        <Services />

        <FAQ />

        <Contact />
      </main>

      <Footer />

    </div>
  );
}
