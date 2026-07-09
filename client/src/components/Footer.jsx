import React from "react";
import { ArrowUp, Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-lg bg-gradient-purple-cyan flex items-center justify-center p-2 text-white font-bold text-base mr-3 shadow-glow-primary">
              <Code2 size={16} />
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-text">
              Abhishekh Kumar
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-mutedText">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Achievements", href: "#achievements" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-text transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4 text-mutedText">
            <a
              href="https://github.com/code-with-avii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekh07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/MondalAvii94420"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="mailto:aviimondal689@gmail.com"
              className="hover:text-text transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* System info / bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <div className="text-[10px] sm:text-xs text-mutedText font-semibold font-code text-center sm:text-left">
            Built with <span className="text-purple-400">React 19</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>,{" "}
            <span className="text-emerald-400">Express.js</span>, &{" "}
            <span className="text-text">MongoDB</span>.
          </div>
          <div className="text-[10px] sm:text-xs text-mutedText font-body text-center sm:text-right">
            &copy; {new Date().getFullYear()} Abhishekh Kumar. All rights
            reserved.
          </div>

          {/* Back to top float action button */}
          <button
            onClick={handleScrollToTop}
            className="sm:absolute sm:right-8 sm:bottom-12 p-3 bg-surface hover:bg-surface-hover border border-border hover:border-border-hover rounded-xl text-mutedText hover:text-text transition-all shadow-md group"
            title="Back to Top"
          >
            <ArrowUp
              size={15}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
