"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiShield, FiCode, FiTool } from "react-icons/fi";

type IconType = React.ComponentType<{ className?: string }>;

type SkillCategory = {
  id: string;
  title: string;
  icon: IconType;
  color: string;
  borderColor: string;
  items: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    id: "cyber",
    title: "Cybersecurity & SecOps",
    icon: FiShield,
    color: "text-primary",
    borderColor: "border-primary/20",
    items: [
      { name: "Penetration Testing", level: 90 },
      { name: "OWASP Top 10", level: 88 },
      { name: "Network Security", level: 85 },
      { name: "Vulnerability Assessment", level: 88 },
      { name: "Linux Hardening", level: 82 },
      { name: "Digital Forensics", level: 78 },
    ],
  },
  {
    id: "dev",
    title: "Frontend & Backend",
    icon: FiCode,
    color: "text-secondary",
    borderColor: "border-secondary/20",
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React / Next.js", level: 78 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "REST APIs", level: 82 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    icon: FiTool,
    color: "text-amber",
    borderColor: "border-amber/20",
    items: [
      { name: "Kali Linux", level: 90 },
      { name: "Burp Suite", level: 88 },
      { name: "Nmap / Wireshark", level: 86 },
      { name: "Metasploit", level: 84 },
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
];

export default function Skills() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02.</span>
            <span className="text-muted/30 font-mono text-sm">/skills</span>
            Skills &amp; Expertise
          </h2>
          <p className="text-muted text-sm mb-10 max-w-lg">
            A cross-disciplinary toolkit spanning offensive security, secure
            development, and modern web architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isExpanded = expanded === cat.id;
            const visibleItems = isExpanded ? cat.items : cat.items.slice(0, 4);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`glass rounded-2xl p-6 card-lift cursor-pointer ${cat.borderColor} border`}
                onClick={() => setExpanded(isExpanded ? null : cat.id)}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <h3 className="font-semibold text-sm">{cat.title}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-muted">
                    {cat.items.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {visibleItems.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-foreground/70">{item.name}</span>
                        <span className="text-[10px] font-mono text-muted">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            cat.id === "cyber"
                              ? "bg-primary"
                              : cat.id === "dev"
                              ? "bg-secondary"
                              : "bg-amber"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {cat.items.length > 4 && (
                  <p className="mt-4 text-[11px] font-mono text-muted">
                    {isExpanded
                      ? "▾ collapse"
                      : `▸ +${cat.items.length - 4} more`}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}