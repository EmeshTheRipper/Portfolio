import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Emesh Lamichhane
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/EmeshTheRipper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/emesh-lamichhane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:emesh.lamichhane123@gmail.com"
            className="text-muted hover:text-foreground transition-colors"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
