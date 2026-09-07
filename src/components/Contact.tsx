"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ready" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:emesh.lamichhane123@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all";

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">05.</span>
            <span className="font-mono text-primary/20 text-sm">/contact</span>
            Let&apos;s Connect
          </h2>
          <p className="text-muted text-sm mb-8">
            Have a security project, a pentest engagement, or a dev role? Reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 mt-8">
          <motion.div
            className="md:col-span-2 glass rounded-2xl p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
              <FiMail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email Me</h3>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Prefer email? I typically respond within 24 hours.
            </p>
            <a
              href="mailto:emesh.lamichhane123@gmail.com"
              className="text-sm font-mono text-primary hover:text-foreground transition-colors mb-8 break-all"
            >
              emesh.lamichhane123@gmail.com
            </a>

            <div className="mt-auto pt-4 border-t border-border">
              <p className="text-xs text-muted font-mono mb-4">find me elsewhere</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/EmeshTheRipper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-border-glow hover:bg-white/5 transition-all"
                >
                  <FiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/emesh-lamichhane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-[#0077b5]/40 hover:bg-white/5 transition-all"
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-mono text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {status === "sent" ? "Opening your email client..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="mt-3 text-xs text-success font-mono">
                ✓ Your email client should open — finish sending there.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}