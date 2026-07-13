import React, { useState, useEffect } from "react";
import { Menu, X, Code, FileText, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // Default to dark mode
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Sync theme with HTML document
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Performance-optimized Scrollspy using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (location.pathname !== "/") {
      setActiveSection("");
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const sections = ["home", ...navLinks.map((link) => link.href.substring(1))];
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Triggers when section occupies the active middle portion
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [location]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-3 shadow-lg border-b border-border"
          : "bg-transparent py-3 sm:py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            className="shrink-0 flex items-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-lg p-1"
            onClick={() => navigate("/")}
            onKeyDown={handleLogoKeyDown}
            tabIndex={0}
            role="link"
            aria-label="Abhishekh Dev Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-purple-cyan flex items-center justify-between p-2 text-white font-bold text-base sm:text-lg mr-2 shadow-glow-primary">
              <Code size={22} className="mx-auto" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-text hover:text-cyan-400 transition-colors">
              Abhishekh
              <span className="text-secondary text-xs ml-1 bg-white/10 px-1.5 py-0.5 rounded font-code">
                DEV
              </span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-body font-medium text-sm transition-colors py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md ${
                  activeSection === link.href.substring(1) &&
                  location.pathname === "/"
                    ? "text-text"
                    : "text-mutedText hover:text-text"
                }`}
                aria-current={
                  activeSection === link.href.substring(1) &&
                  location.pathname === "/"
                    ? "page"
                    : undefined
                }
              >
                {link.name}
                {activeSection === link.href.substring(1) &&
                  location.pathname === "/" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-purple-cyan rounded-full transition-transform" />
                  )}
              </a>
            ))}
          </div>

          {/* Action Tools (Resume & Mode) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg border border-border-hover bg-surface/50 text-mutedText hover:text-text hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered (Mock PDF)");
              }}
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-text bg-surface hover:bg-surface-hover border border-border-hover rounded-lg transition-all shadow-md group gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              aria-label="Download Resume PDF"
            >
              <FileText
                size={14}
                className="group-hover:text-primary transition-colors"
                aria-hidden="true"
              />
              Resume
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg border border-border-hover bg-surface/50 text-mutedText hover:text-text transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-border-hover bg-surface/50 text-mutedText hover:text-text transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden fixed left-0 right-0 top-16 bg-background overflow-y-auto z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg bg-surface/40 border border-border text-base font-medium text-mutedText hover:text-text hover:bg-surface/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border">
            <button
              onClick={() => alert("Resume download triggered (Mock PDF)")}
              className="w-full flex items-center justify-center py-4 bg-gradient-purple-cyan text-white font-medium rounded-lg text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="Download Resume PDF"
            >
              <FileText size={16} className="mr-2" aria-hidden="true" /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
