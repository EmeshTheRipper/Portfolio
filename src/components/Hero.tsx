"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiShield,
} from "react-icons/fi";

const roles = [
  "Cybersecurity Specialist",
  "Penetration Tester",
  "Full-Stack Developer",
  "Ethical Hacker",
  "Secure Application Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 30 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-30 blur-md" />
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-background overflow-hidden ring-2 ring-primary/40">
              <Image
                src="/profile.jpeg"
                alt="Emesh Lamichhane"
                width={144}
                height={144}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-secondary border-4 border-background animate-pulse-dot" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-dot" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Emesh</span>
          <br />
          Lamichhane
        </motion.h1>

        <motion.div
          className="h-10 flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-surface border border-border">
            <FiShield className="w-4 h-4 text-primary" />
            <span className="text-lg sm:text-xl text-foreground/80 font-mono">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-muted max-w-xl mx-auto mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Building secure, high-performance web applications with a
          security-first mindset. From penetration testing to full-stack
          development — I harden systems and ship reliable code.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-primary text-[#090d16] font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            View Projects
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl border border-border text-foreground/80 font-medium hover:border-primary/40 hover:bg-surface transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/EmeshTheRipper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/30 hover:bg-surface transition-all"
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/emesh-lamichhane-127a74384/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-[#0077b5]/30 hover:bg-surface transition-all"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:emesh.lamichhane123@gmail.com"
            className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/30 hover:bg-surface transition-all"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}