"use client";

import { motion } from "framer-motion";
import { FiShield, FiTerminal, FiZap, FiLock } from "react-icons/fi";

const metrics = [
  { icon: FiShield, label: "Focus", value: "Offensive & AppSec", color: "text-primary" },
  { icon: FiTerminal, label: "Mindset", value: "Zero Trust Security", color: "text-secondary" },
  { icon: FiZap, label: "Approach", value: "Secure-by-Design", color: "text-amber" },
  { icon: FiLock, label: "Philosophy", value: "Defense in Depth", color: "text-purple" },
];

const highlights = [
  "Penetration testing across web applications & networks",
  "OWASP Top 10 vulnerability identification and remediation",
  "Hands-on exploit development in Kali Linux environments",
  "Full-stack development with security-first architecture",
  "Digital forensics and incident response fundamentals",
  "Network traffic analysis with Wireshark and packet inspection",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">01.</span>
            <span className="text-muted/30 font-mono text-sm">/about</span>
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          <motion.div
            className="lg:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground/80 leading-relaxed mb-4">
              I&apos;m a cybersecurity specialist and full-stack developer who believes
              that{" "}
              <span className="text-primary font-medium">
                security should be built into every layer of an application
              </span>
              , not bolted on as an afterthought. With a BSc (Hons) in Ethical
              Hacking &amp; Cybersecurity from Coventry University, I combine
              offensive security expertise with clean, maintainable code.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              My workflow spans the entire attack surface — from reconnaissance
              and vulnerability scanning to exploitation and secure remediation.
              On the development side, I build full-stack web applications with
              hardened authentication, input validation, and robust API design.
            </p>

            <div className="space-y-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <span className="text-primary mt-0.5 font-mono text-xs">▹</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <motion.div
              className="glass rounded-2xl p-6 flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-sm font-mono text-muted mb-4">{"// education"}</p>
              <h3 className="font-semibold text-base mb-1">
                BSc (Hons) Ethical Hacking &amp; Cybersecurity
              </h3>
              <p className="text-muted text-sm">
                Coventry University
              </p>
              <p className="text-muted text-xs mt-0.5">
                Softwarica College of IT &amp; E-Commerce
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-secondary text-xs font-mono">
                  Upper Second-Class Honours (2:1)
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.label}
                    className="glass rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                  >
                    <Icon className={`w-4 h-4 ${m.color} mx-auto mb-2`} />
                    <p className="text-[11px] text-muted font-mono uppercase tracking-wider mb-0.5">
                      {m.label}
                    </p>
                    <p className="text-xs font-medium text-foreground/80">{m.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}