import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <p className="font-mono text-sm mb-1">
              <span className="text-primary">~</span>/emesh —{" "}
              <span className="text-foreground/80">Emesh Lamichhane</span>
            </p>
            <p className="text-muted text-xs font-mono">
              emesh.lamichhane123@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/EmeshTheRipper"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:bg-white/5 hover:border-border-glow transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/emesh-lamichhane/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:bg-white/5 hover:border-[#0077b5]/40 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:emesh.lamichhane123@gmail.com"
              className="p-2.5 rounded-xl border border-border text-muted hover:text-foreground hover:bg-white/5 hover:border-border-glow transition-all"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-muted hover:text-primary hover:border-primary/40 transition-all"
          >
            Back to top
            <FiArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} Emesh Lamichhane. All rights reserved.
          </p>
          <p className="text-muted text-xs font-mono flex items-center gap-1.5">
            Built with <FiHeart className="w-3 h-3 text-[#ef4444]" /> React, Next.js
            &amp; Tailwind CSS
          </p>
          <a
            href="https://www.emeshlamichhane.com.np"
            className="text-muted text-xs font-mono hover:text-primary transition-colors"
          >
            www.emeshlamichhane.com.np
          </a>
        </div>
      </div>
    </footer>
  );
}