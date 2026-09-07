import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid-bg">
      <Hero />
      <div className="section-divider max-w-5xl mx-auto" />
      <About />
      <div className="section-divider max-w-5xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-5xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-5xl mx-auto" />
      <Experience />
      <div className="section-divider max-w-5xl mx-auto" />
      <Contact />
      <Footer />
    </div>
  );
}