"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder, FiStar } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI Wi-Fi Threat Detection Centre",
    description:
      "AI-powered real-time security system detecting wireless network threats via machine learning. Monitors 802.11 traffic to identify rogue APs, deauthentication attacks, Evil Twins, and unauthorized intrusions with live dashboard visualization and automated alerting.",
    tags: ["Python", "Machine Learning", "Wi-Fi Security", "Threat Detection"],
    github: "https://github.com/EmeshTheRipper/AI-WIFI-threat-detection-centre",
    featured: true,
  },
  {
    title: "Penetration Testing Toolkit",
    description:
      "Scripted automation for common penetration testing workflows — recon, scanning, and exploitation phases leveraging Nmap, Metasploit, and Burp Suite integration.",
    tags: ["Kali Linux", "Nmap", "Metasploit", "Python"],
    github: "https://github.com/EmeshTheRipper",
  },
  {
    title: "Cryptography Coursework",
    description:
      "Hands-on cryptography implementations covering symmetric/asymmetric encryption, hashing, and attack simulations — the mathematical backbone of modern security protocols.",
    tags: ["Python", "Cryptography", "Algorithms"],
    github: "https://github.com/EmeshTheRipper/Cryptography",
  },
  {
    title: "ML / AI Research",
    description:
      "Machine learning experiments and coursework spanning data analysis, model training, and threat intelligence applications as part of the cybersecurity thesis work.",
    tags: ["Python", "Machine Learning", "Data Science"],
    github: "https://github.com/EmeshTheRipper",
  },
  {
    title: "Network Security Labs",
    description:
      "Packet tracer and network simulation coursework covering routing, segmentation, and security hardening principles for enterprise network architectures.",
    tags: ["Networking", "Packet Tracer", "Security"],
    github: "https://github.com/EmeshTheRipper/Networking",
  },
  {
    title: "Web Application Projects",
    description:
      "Full-stack web development work spanning PHP, HTML5, CSS3, and JavaScript — from PHP class assignments to interactive front-end builds.",
    tags: ["PHP", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/EmeshTheRipper/220274_Emesh_Lamichhane",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <span className="text-primary font-mono text-sm">03.</span>
              <span className="font-mono text-primary/20 text-sm">/projects</span>
              Featured Projects
            </h2>
            <p className="text-muted text-sm">
              Selected work in security research and development
            </p>
          </div>
          <a
            href="https://github.com/EmeshTheRipper?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm"
          >
            <FiGithub className="w-4 h-4" />
            All Repositories
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col transition-all duration-300 group relative overflow-hidden"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono uppercase tracking-wider">
                  Featured
                </div>
              )}
              <div className="w-10 h-10 rounded-xl border border-border bg-white/[0.03] flex items-center justify-center text-primary mb-4 group-hover:border-primary/30 transition-colors">
                <FiFolder className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-muted border border-border bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-primary transition-colors"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
