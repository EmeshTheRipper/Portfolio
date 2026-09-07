"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const roles = [
  "Cybersecurity Specialist",
  "Penetration Tester",
  "Full-Stack Developer",
  "Ethical Hacker",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Emesh</span>
          <br />
          <span className="text-foreground/90">Lamichhane</span>
        </motion.h1>

        <motion.div
          className="h-10 flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-xl sm:text-2xl text-muted font-mono">
            <span className="text-primary">&gt;</span> {displayText}
            <span className="typing-cursor" />
          </span>
        </motion.div>

        <motion.p
          className="text-muted max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          BSc (Hons) Ethical Hacking &amp; Cybersecurity graduate specializing in
          penetration testing, vulnerability assessment, and building secure
          full-stack applications.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            View Projects
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground/80 font-medium hover:bg-white/5 hover:border-border-glow transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/emesh-lamichhane/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground/80 font-medium hover:bg-white/5 hover:border-[#0077b5]/40 transition-all duration-300"
          >
            <FiLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/EmeshTheRipper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border text-muted hover:text-foreground hover:bg-white/5 hover:border-border-glow transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
