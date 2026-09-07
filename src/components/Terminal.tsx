"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiTerminal, FiCopy, FiRefreshCw } from "react-icons/fi";

type Line = {
  type: "input" | "output" | "error" | "success" | "system";
  text: string;
};

const initialLines: Line[] = [
  {
    type: "system",
    text: "Welcome to emesh@portfolio — interactive CLI. Type 'help' to get started.",
  },
];

const commands: Record<string, () => string[]> = {
  help: () => [
    "Available commands:",
    "  help      - Show this help message",
    "  skills    - View my technical skills",
    "  education - View my academic background",
    "  experience- View hands-on lab experience",
    "  projects  - View featured projects",
    "  contact   - View contact information",
    "  about     - Learn about me",
    "  clear     - Clear the terminal",
    "  whoami    - Who am I",
    "  sudo      - Try your luck",
  ],
  skills: () => [
    "[+] Cybersecurity",
    "  - Penetration Testing (Web & Network)",
    "  - OWASP Top 10, Kali Linux, Nmap, Metasploit",
    "  - Burp Suite, Wireshark, Digital Forensics",
    "  - Vulnerability Management",
    "",
    "[+] Full-Stack Development",
    "  - Python scripting & automation",
    "  - HTML5 / CSS3 / JavaScript, REST APIs",
    "  - Web application development & backend fundamentals",
  ],
  education: () => [
    "[+] BSc (Hons) Ethical Hacking & Cybersecurity",
    "  Institution: Coventry University",
    "  Partner College: Softwarica College of IT & E-Commerce",
    "  Grade: Upper Second-Class Honours (2:1)",
    "  Focus: Offensive security, defensive security, forensics",
  ],
  experience: () => [
    "[+] Hands-on Lab Experience",
    "  - Hack The Box - Offensive security challenges",
    "  - TryHackMe - Structured security rooms",
    "  - VulnHub - Boot-to-root vulnerable VMs",
    "  - PortSwigger Web Security Academy - Web exploitation",
  ],
  projects: () => [
    "[+] Featured Projects",
    "  - AI Wi-Fi Threat Detection Centre (Python/ML)",
    "  - Penetration Testing Toolkit",
    "  - Cryptography implementations (Python)",
    "  - More on GitHub: https://github.com/EmeshTheRipper",
  ],
  contact: () => [
    "[+] Contact Information",
    "  Email   : emesh.lamichhane123@gmail.com",
    "  GitHub  : https://github.com/EmeshTheRipper",
    "  LinkedIn: https://www.linkedin.com/in/emesh-lamichhane/",
    "  Website : https://www.emeshlamichhane.com.np",
  ],
  about: () => [
    "[+] About",
    "  Emesh Lamichhane is a cybersecurity specialist and full-stack developer.",
    "  He combines offensive security expertise with secure development",
    "  practices to build and protect modern web applications.",
  ],
  whoami: () => [
    "emesh",
    "role: cybersecurity-specialist | full-stack-developer",
    "clearance: ethical",
    "status: actively-learning",
  ],
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const execute = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLines: Line[] = [
      ...lines,
      { type: "input", text: raw },
    ];

    if (!cmd) {
      setLines([...newLines, { type: "output", text: "" }]);
      return;
    }

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "sudo") {
      setLines([...newLines, { type: "success", text: "Access granted. Welcome, root." }]);
      return;
    }

    const output = commands[cmd];
    if (output) {
      setLines([...newLines, ...output().map((t) => ({ type: "output" as const, text: t }))]);
      return;
    }

    setLines([
      ...newLines,
      { type: "error", text: `command not found: ${cmd}. Try 'help'.` },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "Emesh Lamichhane | Cybersecurity Specialist & Full-Stack Developer | emesh.lamichhane123@gmail.com"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  const resetTerminal = () => {
    setLines(initialLines);
    setInput("");
  };

  return (
    <section id="terminal" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">04.</span>
            <span className="font-mono text-primary/20 text-sm">/terminal</span>
            Interactive Terminal
          </h2>
          <p className="text-muted text-sm mb-8">
            A hacker-style CLI. Try <span className="text-primary font-mono">help</span>,{" "}
            <span className="text-primary font-mono">skills</span>,{" "}
            <span className="text-primary font-mono">education</span>, or{" "}
            <span className="text-primary font-mono">contact</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-[#0d1117] shadow-2xl shadow-black/50 overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-muted font-mono text-xs">
              <FiTerminal className="w-3.5 h-3.5 text-primary" />
              emesh@portfolio — bash
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded text-muted hover:text-primary transition-colors"
                aria-label="Copy contact info"
                title="Copy contact info"
              >
                {copied ? (
                  <span className="text-success text-xs font-mono">copied!</span>
                ) : (
                  <FiCopy className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={resetTerminal}
                className="p-1.5 rounded text-muted hover:text-primary transition-colors"
                aria-label="Reset terminal"
                title="Reset terminal"
              >
                <FiRefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div
            ref={bodyRef}
            className="p-4 h-96 overflow-y-auto font-mono text-sm space-y-1"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "input"
                    ? "text-foreground"
                    : line.type === "error"
                    ? "text-[#f85149]"
                    : line.type === "success"
                    ? "text-success"
                    : line.type === "system"
                    ? "text-primary"
                    : "text-foreground/70"
                }
              >
                {line.type === "input" ? (
                  <span>
                    <span className="text-success">emesh</span>
                    <span className="text-muted">@</span>
                    <span className="text-primary">portfolio</span>
                    <span className="text-muted">:~$</span> {line.text}
                  </span>
                ) : (
                  <span className="whitespace-pre-wrap">{line.text}</span>
                )}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-success">emesh</span>
              <span className="text-muted">@</span>
              <span className="text-primary">portfolio</span>
              <span className="text-muted">:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
              <FiChevronRight className="w-3.5 h-3.5 text-primary animate-pulse" />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
