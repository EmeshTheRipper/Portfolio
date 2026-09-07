"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiServer, FiTerminal, FiGlobe, FiLock, FiActivity } from "react-icons/fi";

type Status = "Live" | "In Progress" | "Open Source" | "Research";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  status: Status;
  featured?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};

const statusStyles: Record<Status, string> = {
  Live: "bg-secondary/10 border-secondary/30 text-secondary",
  "In Progress": "bg-amber/10 border-amber/30 text-amber",
  "Open Source": "bg-primary/10 border-primary/30 text-primary",
  Research: "bg-purple/10 border-purple/30 text-purple",
};

const projects: Project[] = [
  {
    title: "AI Wi-Fi Threat Detection Centre",
    description:
      "AI-powered real-time security system that detects and mitigates wireless network threats using machine learning. Monitors 802.11 traffic to instantly identify rogue access points, deauthentication attacks, Evil Twins, and unauthorized intrusions with live dashboard visualization.",
    tags: ["Python", "Machine Learning", "Wi-Fi Security", "Threat Detection"],
    github: "https://github.com/EmeshTheRipper/AI-WIFI-threat-detection-centre",
    status: "Open Source",
    featured: true,
    icon: FiActivity,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Secure Auth API",
    description:
      "RESTful authentication service with bcrypt hashing, JWT token rotation, rate limiting, and OWASP-compliant input validation. Designed for secure microservice architectures.",
    tags: ["Python", "REST API", "JWT", "OWASP"],
    github: "https://github.com/EmeshTheRipper",
    status: "Research",
    icon: FiLock,
    gradient: "from-purple/20 via-purple/5 to-transparent",
  },
  {
    title: "Vulnerability Scanner CLI",
    description:
      "Command-line tool for automated network reconnaissance and vulnerability scanning. Integrates Nmap for port discovery and custom scripts for CVE matching.",
    tags: ["Python", "Nmap", "CLI", "Network Security"],
    github: "https://github.com/EmeshTheRipper",
    status: "In Progress",
    icon: FiTerminal,
    gradient: "from-amber/20 via-amber/5 to-transparent",
  },
  {
    title: "Portfolio Platform",
    description:
      "This site — a production-grade Next.js portfolio with dark-mode glassmorphism UI, interactive terminal, and static export for zero-latency deployment.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/EmeshTheRipper/Portfolio",
    demo: "https://www.emeshlamichhane.com.np",
    status: "Live",
    icon: FiGlobe,
    gradient: "from-secondary/20 via-secondary/5 to-transparent",
  },
  {
    title: "Cryptography Coursework",
    description:
      "Hands-on implementations of symmetric/asymmetric encryption, hash functions, and cryptographic attack simulations covering the mathematical foundations of modern security.",
    tags: ["Python", "Cryptography", "Algorithms"],
    github: "https://github.com/EmeshTheRipper/Cryptography",
    status: "Open Source",
    icon: FiLock,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Network Traffic Analyzer",
    description:
      "Packet capture analysis toolkit for inspecting network flows, identifying anomalies, and generating security reports from PCAP data.",
    tags: ["Python", "Wireshark", "Network Analysis"],
    github: "https://github.com/EmeshTheRipper/Networking",
    status: "Open Source",
    icon: FiServer,
    gradient: "from-primary/20 via-primary/5 to-transparent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <span className="text-primary font-mono text-sm">03.</span>
              <span className="text-muted/30 font-mono text-sm">/projects</span>
              Featured Projects
            </h2>
            <p className="text-muted text-sm max-w-md">
              Selected work in security research, tool development, and web engineering.
            </p>
          </div>
          <a
            href="https://github.com/EmeshTheRipper?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-primary hover:border-primary/40 hover:bg-primary-dim transition-all shrink-0"
          >
            <FiGithub className="w-3.5 h-3.5" />
            All Repositories
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass rounded-2xl overflow-hidden flex flex-col card-lift group"
            >
              <div
                className={`relative h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-border overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <Icon className="w-16 h-16 text-foreground" />
                </div>
                <div className="relative w-12 h-12 rounded-xl bg-background/40 backdrop-blur-sm border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span
                  className={`absolute top-2 right-2 px-2 py-0.5 rounded-full border text-[9px] font-mono bg-background/60 backdrop-blur-sm ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <FiFolder className="w-4 h-4 text-primary" />
                  </div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber">
                      <FiStar className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-muted bg-surface border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
                  >
                    <FiGithub className="w-3 h-3" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}