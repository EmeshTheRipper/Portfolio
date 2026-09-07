"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCpu, FiCode } from "react-icons/fi";

type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "certification" | "project" | "skill";
  icon: React.ComponentType<{ className?: string }>;
};

const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "BSc (Hons) Ethical Hacking & Cybersecurity",
    org: "Coventry University — Softwarica College",
    description:
      "Graduated with Upper Second-Class Honours (2:1). Coursework covered penetration testing, network security, cryptography, digital forensics, and secure software development.",
    type: "education",
    icon: FiBookOpen,
  },
  {
    year: "2024",
    title: "AI Wi-Fi Threat Detection System",
    org: "Academic Research Project",
    description:
      "Developed an ML-powered real-time wireless intrusion detection system monitoring 802.11 traffic for rogue APs, deauth attacks, and Evil Twins with live dashboards.",
    type: "project",
    icon: FiCpu,
  },
  {
    year: "2023–2024",
    title: "Hack The Box & TryHackMe",
    org: "Active Practice",
    description:
      "Completed 100+ challenges across offensive security labs — exploitation, privilege escalation, web attacks, and binary analysis in realistic vulnerable environments.",
    type: "skill",
    icon: FiAward,
  },
  {
    year: "2023",
    title: "PortSwigger Web Security Academy",
    org: "OWASP Top 10 Labs",
    description:
      "Mastered web vulnerability exploitation — SQL injection, XSS, SSRF, authentication bypass, access control flaws, and server-side template injection.",
    type: "certification",
    icon: FiCode,
  },
  {
    year: "2023",
    title: "Cryptography Coursework",
    org: "Coventry University",
    description:
      "Implemented symmetric/asymmetric encryption algorithms, hash functions, and cryptographic attack simulations — the mathematical backbone of modern security.",
    type: "project",
    icon: FiCode,
  },
  {
    year: "2022–2023",
    title: "Full-Stack Development",
    org: "Self-directed Learning",
    description:
      "Built production web applications with React, Next.js, Node.js, Python backends, and REST APIs — always with authentication hardening and input validation.",
    type: "skill",
    icon: FiCode,
  },
];

const typeColors = {
  education: "bg-primary/10 border-primary/30 text-primary",
  certification: "bg-secondary/10 border-secondary/30 text-secondary",
  project: "bg-amber/10 border-amber/30 text-amber",
  skill: "bg-purple/10 border-purple/30 text-purple",
};

const dotColors = {
  education: "bg-primary",
  certification: "bg-secondary",
  project: "bg-amber",
  skill: "bg-purple",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">04.</span>
            <span className="text-muted/30 font-mono text-sm">/experience</span>
            Education &amp; Milestones
          </h2>
          <p className="text-muted text-sm mb-10 max-w-md">
            A timeline of academic achievements, security practice, and technical milestones.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div
                    className={`absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full border-2 border-background ${dotColors[item.type]} ring-4 ring-background`}
                  />

                  <div className="glass rounded-xl p-5 card-lift">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-muted">{item.year}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full border text-[10px] font-mono ${typeColors[item.type]}`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted mb-2">{item.org}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}