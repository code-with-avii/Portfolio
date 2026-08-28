import React from "react";
import { ArrowUp, TerminalSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/code-with-avii", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishekh07/", icon: FaLinkedin },
  { label: "Twitter", href: "https://x.com/MondalAvii94420", icon: FaXTwitter },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#000000",
        borderTop: "1px solid var(--border)",
        padding: "48px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Brand - System Info */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontWeight: 700,
              fontSize: "1.1rem", color: "#58a6ff",
              marginBottom: 12,
            }}>
              <TerminalSquare size={18} />
              ABHISHEKH // SYS
            </div>

            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              color: "#8b949e", lineHeight: 1.65, margin: 0,
              display: "flex", flexDirection: "column", gap: 4
            }}>
              <div><span style={{ color: "#7dd3fc" }}>OS:</span> Portfolio v1.0.0</div>
              <div><span style={{ color: "#7dd3fc" }}>Status:</span> <span style={{ color: "#22c55e" }}>Online</span></div>
              <div><span style={{ color: "#7dd3fc" }}>Uptime:</span> 99.9%</div>
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "0.65rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#484f58", marginBottom: 14,
            }}>
              // Navigate
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={e => navTo(e, l.href)}
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.85rem",
                      color: "#8b949e", textDecoration: "none",
                      transition: "color 0.15s",
                      display: "flex", alignItems: "center", gap: 8
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#c9d1d9";
                      e.currentTarget.firstChild.style.opacity = 1;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#8b949e";
                      e.currentTarget.firstChild.style.opacity = 0;
                    }}
                  >
                    <span style={{ color: "#58a6ff", opacity: 0, transition: "opacity 0.15s" }}>&gt;</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: "0.65rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#484f58", marginBottom: 14,
            }}>
              // Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 9,
                    fontFamily: "var(--font-mono)", fontSize: "0.85rem",
                    color: "#8b949e", textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c9d1d9"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8b949e"}
                >
                  <s.icon size={14} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px dashed #30363d", marginBottom: 24 }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.7rem",
            color: "#484f58", margin: 0,
          }}>
            <span style={{ color: "#22c55e" }}>root@abhishekh:~$</span> exit
            <br />
            © {new Date().getFullYear()} Abhishekh Kumar.
          </p>

          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            style={{
              display: "flex", alignItems: "center", gap: 7,
              fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              textTransform: "uppercase", color: "#8b949e",
              background: "transparent", border: "1px solid #30363d",
              borderRadius: "4px", padding: "6px 12px", cursor: "pointer",
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#c9d1d9"; e.currentTarget.style.borderColor = "#8b949e"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#8b949e"; e.currentTarget.style.borderColor = "#30363d"; }}
          >
            <ArrowUp size={13} /> SYS.TOP()
          </button>
        </div>
      </div>
    </footer>
  );
}
