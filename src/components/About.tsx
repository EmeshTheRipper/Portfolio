"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiShield,
  FiServer,
  FiCpu,
} from "react-icons/fi";

const labs = [
  { name: "Hack The Box", desc: "Active offsec labs, exploit research" },
  { name: "TryHackMe", desc: "Structured rooms, defensive blue-teaming" },
  { name: "PortSwigger Academy", desc: "Web security labs, OWASP Top 10" },
  { name: "VulnHub", desc: "Boot-to-root vulnerable VMs" },
];

const highlights = [
  "Penetration testing across web & network attacks",
  "Hands-on with Kali Linux penetration toolkit",
  "Real-world vulnerability assessment & management",
  "Full-stack development with security-first mindset",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01.</span>
            <span className="font-mono text-primary/20 text-sm">/about</span>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="glass glass-hover rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <FiBookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="mb-6">
              <p className="font-semibold">
                BSc (Hons) Ethical Hacking &amp; Cybersecurity
              </p>
              <p className="text-muted text-sm mt-1">
                Coventry University · Softwarica College of IT &amp; E-Commerce
              </p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-success/10 border border-success/30 text-success text-xs font-mono">
                Upper Second-Class Honours (2:1)
              </span>
            </div>

            <div className="space-y-2">
              {highlights.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-success mt-0.5">▸</span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass glass-hover rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <FiShield className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold">Hands-on Lab Experience</h3>
            </div>

            <div className="space-y-4">
              {labs.map((lab) => (
                <div
                  key={lab.name}
                  className="flex items-start gap-3 p-3 rounded-xl border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <FiServer className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{lab.name}</p>
                    <p className="text-xs text-muted mt-0.5">{lab.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6 mb-3">
              <FiCpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Continuous Learning</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Actively sharpening offensive and defensive security skills through
              daily hands-on practice in realistic vulnerable environments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
