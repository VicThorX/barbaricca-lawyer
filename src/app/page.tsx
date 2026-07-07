import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfdfa] text-slate-900 flex flex-col relative" id="inicio">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-[50%] h-[20%] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[50%] h-[20%] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar />

      <Hero />

      <About />

      <PracticeAreas />

      <Services />

      <Contact />

      <Footer />

    </div>
  );
}
