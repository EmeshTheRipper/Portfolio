"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:emesh.lamichhane123@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm";

  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-sm">05.</span>
            <span className="text-muted/30 font-mono text-sm">/contact</span>
            Let&apos;s Work Together
          </h2>
          <p className="text-muted text-sm mb-10 max-w-lg">
            Have a security engagement, a development project, or just want to
            connect? I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            className="lg:col-span-2 glass rounded-2xl p-7 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-dim border border-primary/20 flex items-center justify-center mb-5">
              <FiMail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:emesh.lamichhane123@gmail.com"
              className="text-sm font-mono text-primary hover:text-foreground transition-colors break-all mb-6"
            >
              emesh.lamichhane123@gmail.com
            </a>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted">
                <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                Kathmandu, Nepal
              </div>
            </div>

            <div className="mt-auto pt-5 border-t border-border">
              <p className="text-[11px] text-muted font-mono uppercase tracking-wider mb-3">
                Find me online
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/EmeshTheRipper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-xs text-muted hover:text-foreground hover:border-primary/30 hover:bg-surface transition-all"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  GitHub
                  <FiArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emesh-lamichhane-127a74384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-xs text-muted hover:text-foreground hover:border-[#0077b5]/30 hover:bg-surface transition-all"
                >
                  <FiLinkedin className="w-3.5 h-3.5" />
                  LinkedIn
                  <FiArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-2"
                >
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
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-2"
              >
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
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-[#090d16] font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {sent ? "Opening email client..." : "Send Message"}
            </button>
            {sent && (
              <p className="mt-3 text-xs text-secondary font-mono">
                ✓ Your email client should open — finish sending there.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}