import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Promise from "@/components/home/Promise";
import About from "@/components/home/About";
import Diamerisma from "@/components/home/Diamerisma";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promise />
        <About />
        <Diamerisma />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
