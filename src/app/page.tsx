import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ProjectsSection from "./sections/Project";
import { TapeSection } from "./sections/Tape";

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <ProjectsSection />
        <Experiences />
      </div>
      <TapeSection />
      <Contact />
      <Footer />
    </>
  );
}
