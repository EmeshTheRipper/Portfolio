import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-7">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm mb-1">
              <span className="text-primary">emesh</span>
              <span className="text-muted">theripper</span>
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
              className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/30 hover:bg-surface transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/emesh-lamichhane-127a74384/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-[#0077b5]/30 hover:bg-surface transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:emesh.lamichhane123@gmail.com"
              className="p-2.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/30 hover:bg-surface transition-all"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-mono text-muted hover:text-primary hover:border-primary/30 transition-all"
          >
            Back to top
            <FiArrowUp className="w-3 h-3" />
          </a>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} Emesh Lamichhane
          </p>
          <p className="text-muted text-xs font-mono">
            Built with React &amp; Next.js
          </p>
          <a
            href="https://www.emeshlamichhane.com.np"
            className="text-muted text-xs font-mono hover:text-primary transition-colors"
          >
            emeshlamichhane.com.np
          </a>
        </div>
      </div>
    </footer>
  );
}