import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "About",          href: "#about"          },
  { name: "Skills",         href: "#skills"         },
  { name: "Projects",       href: "#projects"       },
  { name: "Experience",     href: "#experience"     },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact",        href: "#contact"        },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [active, setActive]     = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate  = useNavigate();

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* body lock when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Escape key */
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* scrollspy */
  useEffect(() => {
    if (location.pathname !== "/") { setActive(""); return; }
    const ids = ["home", ...NAV_LINKS.map(l => l.href.slice(1))];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [location]);

  const navTo = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const go = () => {
      const el = document.querySelector(href);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    };
    if (location.pathname !== "/") { navigate("/"); setTimeout(go, 120); } else go();
  }, [location, navigate]);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "#000000" : "transparent",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
        aria-label="Main navigation"
      >
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 56,
        }}>

          {/* Logo — Terminal Prompt Style */}
          <button
            onClick={() => navigate("/")}
            aria-label="Go to top"
            style={{
              background: "none", border: "none", padding: 0, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 0,
            }}
          >
            <span style={{
              fontFamily: "var(--font-mono)", fontWeight: 700,
              fontSize: "0.9rem", color: "#22c55e",
            }}>
              ~
            </span>
            <span style={{
              fontFamily: "var(--font-mono)", fontWeight: 700,
              fontSize: "0.9rem", color: "var(--muted)",
            }}>
              /
            </span>
            <span style={{
              fontFamily: "var(--font-mono)", fontWeight: 700,
              fontSize: "0.9rem", color: "var(--ink)",
            }}>
              abhishekh
            </span>
            <span className="animate-blink" style={{
              fontFamily: "var(--font-mono)", fontWeight: 700,
              fontSize: "0.9rem", color: "var(--ink)", marginLeft: 2,
            }}>
              _
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 0 }}>
            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.href.slice(1) && location.pathname === "/";
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => navTo(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 500,
                    color: isActive ? "var(--ink)" : "#6b7280",
                    textDecoration: "none", padding: "6px 16px",
                    transition: "color 0.15s ease",
                    position: "relative",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--ink)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#6b7280"; }}
                >
                  <span style={{
                    color: isActive ? "#22c55e" : "transparent",
                    marginRight: 4,
                    transition: "color 0.15s",
                  }}>
                    &gt;
                  </span>
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            style={{
              background: "none", border: "1px solid #1a1a1a", cursor: "pointer",
              color: "var(--muted)", display: "flex", alignItems: "center",
              justifyContent: "center",
              padding: 6, borderRadius: 4, width: 36, height: 36,
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "#333"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "#1a1a1a"; }}
          >
            {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Terminal Menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "#000000", zIndex: 49, padding: "72px 24px 40px",
          display: "flex", flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1), visibility 0.28s",
          visibility: isOpen ? "visible" : "hidden",
          overflowY: "auto",
        }}
      >
        {/* Terminal Header */}
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#22c55e",
          marginBottom: 32, paddingBottom: 16, borderBottom: "1px dashed #1a1a1a",
        }}>
          root@abhishekh:~$ ls -la ./pages
        </div>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={e => navTo(e, link.href)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "20px 0",
              fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 600,
              color: "var(--ink)", textDecoration: "none",
              borderBottom: "1px solid #111",
              transition: "color 0.15s",
            }}
          >
            <span style={{ color: "#22c55e", fontSize: "0.85rem" }}>{`0${i + 1}`}</span>
            <span>{link.name}</span>
          </a>
        ))}

        <div style={{ marginTop: "auto", paddingTop: 32, borderTop: "1px dashed #1a1a1a" }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)",
          }}>
            <span style={{ color: "#22c55e" }}>abhishekh@portfolio:~$</span> exit
          </div>
        </div>
      </div>
    </>
  );
}
