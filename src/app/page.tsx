import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid-bg">
      <Hero />
      <div className="section-divider max-w-4xl mx-auto" />
      <About />
      <div className="section-divider max-w-4xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-4xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-4xl mx-auto" />
      <Terminal />
      <div className="section-divider max-w-4xl mx-auto" />
      <Contact />
      <Footer />
    </div>
  );
}
