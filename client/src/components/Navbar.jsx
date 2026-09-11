import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Mail, FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* body lock when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Escape key */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* scrollspy */
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }
    const ids = ["home", ...NAV_LINKS.map((l) => l.href.slice(1))];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [location]);

  const navTo = useCallback(
    (e, href) => {
      e.preventDefault();
      setIsOpen(false);
      const go = () => {
        const el = document.querySelector(href);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      };
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(go, 120);
      } else go();
    },
    [location, navigate],
  );

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "#000000" : "transparent",
          borderBottom: scrolled
            ? "1px solid #1a1a1a"
            : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          {/* Logo — Terminal Prompt Style */}
          <button
            onClick={() => navigate("/")}
            aria-label="Go to top"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--accent)",
              }}
            >
              ~
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--muted)",
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--ink)",
              }}
            >
              abhishekh
            </span>
            <span
              className="animate-blink"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--ink)",
                marginLeft: 2,
              }}
            >
              _
            </span>
          </button>

          {/* Desktop links & Direct Header Actions */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 4 }}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                active === link.href.slice(1) && location.pathname === "/";
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => navTo(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: isActive ? "var(--ink)" : "#6b7280",
                    textDecoration: "none",
                    padding: "6px 12px",
                    transition: "color 0.15s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#6b7280";
                  }}
                >
                  <span
                    style={{
                      color: isActive ? "var(--accent)" : "transparent",
                      marginRight: 4,
                      transition: "color 0.15s",
                    }}
                  >
                    &gt;
                  </span>
                  {link.name}
                </a>
              );
            })}

            {/* Direct Mailto Link */}
            <a
              href="mailto:aviimondal689@gmail.com"
              title="Send direct email to Abhishekh"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "#d1d5db",
                textDecoration: "none",
                padding: "5px 10px",
                marginLeft: 12,
                borderRadius: "4px",
                border: "1px solid #262626",
                background: "#0a0a0a",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#262626";
                e.currentTarget.style.color = "#d1d5db";
              }}
            >
              <Mail size={13} color="var(--accent)" />
              Email
            </a>

            {/* LinkedIn Badge */}
            <a
              href="https://www.linkedin.com/in/abhishekh07/"
              target="_blank"
              rel="noopener noreferrer"
              title="View LinkedIn Profile"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#38bdf8",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                background: "rgba(56, 189, 248, 0.08)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0284c7";
                e.currentTarget.style.borderColor = "#0284c7";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                e.currentTarget.style.color = "#38bdf8";
              }}
            >
              <FaLinkedin size={13} />
              LinkedIn
            </a>

            {/* Direct ATS Resume Button */}
            <a
              href="/Abhishekh_Mondal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open ATS Resume PDF directly in new tab"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#000000",
                background: "var(--accent)",
                textDecoration: "none",
                padding: "5px 12px",
                marginLeft: 4,
                borderRadius: "4px",
                transition: "opacity 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FileText size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Header 1-Tap Quick Action Buttons (Email, LinkedIn, Menu) */}
          <div className="flex md:hidden" style={{ alignItems: "center", gap: 8 }}>
            <a
              href="mailto:aviimondal689@gmail.com"
              aria-label="Direct Email"
              title="Direct Email"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 6,
                border: "1px solid #262626",
                background: "#0d0d0d",
                color: "var(--accent)",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
            >
              <Mail size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhishekh07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 6,
                border: "1px solid rgba(56, 189, 248, 0.35)",
                background: "rgba(56, 189, 248, 0.08)",
                color: "#38bdf8",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
            >
              <FaLinkedin size={16} />
            </a>

            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{
                background: isOpen ? "rgba(249, 115, 22, 0.15)" : "#141414",
                border: isOpen ? "1px solid var(--accent)" : "1px solid #333333",
                cursor: "pointer",
                color: isOpen ? "var(--accent)" : "var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                width: 36,
                height: 36,
                transition: "all 0.15s ease",
              }}
            >
              {isOpen ? (
                <X size={18} strokeWidth={2} />
              ) : (
                <Menu size={18} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Terminal Menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#000000",
          zIndex: 49,
          padding: "68px 20px 28px",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition:
            "transform 0.28s cubic-bezier(0.4,0,0.2,1), visibility 0.28s",
          visibility: isOpen ? "visible" : "hidden",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: 480, width: "100%", margin: "0 auto", display: "flex", flexDirection: "column" }}>
          {/* Terminal Header */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: "1px dashed #222222",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>root@abhishekh:~$ ls -la ./pages</span>
            <span style={{ color: "#444444", fontSize: "0.7rem" }}>[bash]</span>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {NAV_LINKS.map((link, i) => {
              const isActive = active === link.href.slice(1) && location.pathname === "/";
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => navTo(e, link.href)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "15px 8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: isActive ? "var(--accent)" : "var(--ink)",
                    textDecoration: "none",
                    borderBottom: "1px solid #111111",
                    borderRadius: "4px",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--ink)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    {`0${i + 1}`}
                  </span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Action Buttons Section */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Primary Action: Resume Button */}
            <a
              href="/Abhishekh_Mondal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                height: 54,
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#000000",
                background: "var(--accent)",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.opacity = "0.95";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.opacity = "1";
              }}
            >
              <FileText size={18} />
              Resume
            </a>

            {/* Secondary Actions: Email & LinkedIn */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <a
                href="mailto:aviimondal689@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#e5e7eb",
                  background: "#0d0d0d",
                  border: "1px solid #262626",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "#262626";
                }}
              >
                <Mail size={16} color="var(--accent)" />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/abhishekh07/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#38bdf8",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  textDecoration: "none",
                  borderRadius: "6px",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.borderColor = "#38bdf8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                }}
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Terminal Bottom Prompt */}
          <div
            style={{
              marginTop: 28,
              paddingTop: 16,
              borderTop: "1px dashed #222222",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--muted)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>abhishekh@portfolio:~$</span> exit
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444444" }}>CTRL+C</span>
          </div>
        </div>
      </div>
    </>
  );
}
