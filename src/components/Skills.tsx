"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiEye,
  FiTerminal,
  FiCode,
  FiDatabase,
  FiGlobe,
} from "react-icons/fi";

type IconType = React.ComponentType<{ className?: string }>;

type SkillCategory = {
  id: string;
  title: string;
  icon: IconType;
  color: string;
  accent: string;
  items: string[];
};

const categories: SkillCategory[] = [
  {
    id: "offensive",
    title: "Offensive Security",
    icon: FiShield,
    color: "bg-[#ef4444]/10 border-[#ef4444]/30",
    accent: "text-[#ef4444]",
    items: [
      "Penetration Testing",
      "Web Exploitation",
      "Network Attacks",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "OWASP Top 10",
      "Social Engineering",
    ],
  },
  {
    id: "defensive",
    title: "Defensive Security",
    icon: FiEye,
    color: "bg-[#22c55e]/10 border-[#22c55e]/30",
    accent: "text-[#22c55e]",
    items: [
      "Wireshark Analysis",
      "Digital Forensics",
      "Vulnerability Management",
      "Incident Response",
      "Traffic Analysis",
      "Log Hunting",
      "Risk Assessment",
      "Security Auditing",
    ],
  },
  {
    id: "tools",
    title: "Security Tools",
    icon: FiTerminal,
    color: "bg-[#00f0ff]/10 border-[#00f0ff]/30",
    accent: "text-[#00f0ff]",
    items: [
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "John the Ripper",
      "SQLMap",
      "Hydra",
    ],
  },
  {
    id: "frontend",
    title: "Front-End Development",
    icon: FiCode,
    color: "bg-[#a855f7]/10 border-[#a855f7]/30",
    accent: "text-[#a855f7]",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "React",
    ],
  },
  {
    id: "backend",
    title: "Back-End Development",
    icon: FiDatabase,
    color: "bg-[#f59e0b]/10 border-[#f59e0b]/30",
    accent: "text-[#f59e0b]",
    items: ["Python", "REST APIs", "Node.js", "Databases", "Authentication", "Security"],
  },
  {
    id: "platforms",
    title: "Lab Platforms",
    icon: FiGlobe,
    color: "bg-[#3b82f6]/10 border-[#3b82f6]/30",
    accent: "text-[#3b82f6]",
    items: [
      "TryHackMe",
      "Hack The Box",
      "VulnHub",
      "PortSwigger",
      "Kali Environments",
    ],
  },
];

export default function Skills() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">02.</span>
            <span className="font-mono text-primary/20 text-sm">/skills</span>
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selected === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelected(isSelected ? null : cat.id)}
                className={`glass glass-hover rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isSelected ? "ring-1 ring-[#00f0ff]/20" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${cat.color}`}
                  >
                    <Icon className={`w-5 h-5 ${cat.accent}`} />
                  </div>
                  <span className="font-mono text-xs text-muted">
                    [{cat.items.length}]
                  </span>
                </div>
                <h3 className="font-semibold mb-4">{cat.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {(isSelected ? cat.items : cat.items.slice(0, 4)).map(
                    (item) => (
                      <span
                        key={item}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border border-border bg-white/[0.03] text-foreground/70 transition-colors`}
                      >
                        {item}
                      </span>
                    )
                  )}
                  {!isSelected && cat.items.length > 4 && (
                    <button
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border border-dashed border-primary/30 text-primary/70 hover:text-primary hover:border-primary/60 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(cat.id);
                      }}
                    >
                      +{cat.items.length - 4} more
                    </button>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <span className="font-mono">{isSelected ? "▾ expanded" : "▸ click to expand"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
