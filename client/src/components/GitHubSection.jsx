import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

const PINNED_REPOS = [
  {
    name: "SmartTech",
    description: "Full-stack MERN e-commerce platform with secure auth, Razorpay payments, admin dashboard, and 25+ reusable React components.",
    language: "JavaScript",
    link: "https://github.com/code-with-avii/SmartTech",
  },
  {
    name: "Better Auth",
    description: "Modern authentication application with Next.js 16, TypeScript, Better Auth, Prisma, PostgreSQL, and Resend.",
    language: "TypeScript",
    link: "https://github.com/code-with-avii/Better_auth",
  },
  {
    name: "Hostel Help",
    description: "Smart hostel management platform enabling complaint tracking, issue ticketing, and student-admin communication.",
    language: "JavaScript",
    link: "https://github.com/code-with-avii/Hostel-Help",
  },
];

/* ── Deterministic contribution grid (siddz grayscale style) ────────────── */
const DOTS = Array.from({ length: 371 }, (_, i) => {
  const r = (Math.abs(Math.sin(i * 12.9898 + 78.233)) * 43758.5453) % 1;
  if (r > 0.85) return { id: i, level: 4 };
  if (r > 0.70) return { id: i, level: 3 };
  if (r > 0.55) return { id: i, level: 2 };
  if (r > 0.45) return { id: i, level: 1 };
  return { id: i, level: 0 };
});

const DOT_COLORS = [
  "var(--surface-2)",            // 0
  "rgba(150, 150, 150, 0.25)",   // 1
  "rgba(150, 150, 150, 0.45)",   // 2
  "rgba(150, 150, 150, 0.7)",    // 3
  "rgba(150, 150, 150, 1)",      // 4
];

export default function GitHubSection() {
  return (
    <section
      style={{
        background: "var(--canvas)",
        padding: "96px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 06 ]</div>
          <h2 className="section-title">Open Source</h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {/* ── Contribution heatmap ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card"
            style={{ padding: "28px 26px", overflow: "hidden" }}
          >
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginBottom: 20,
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.95rem", color: "var(--ink)",
              }}>
                Contribution graph
              </span>
              <a
                href="https://github.com/code-with-avii"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-body)", fontSize: "0.78rem",
                  color: "var(--muted)", textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <FaGithub size={14} /> @code-with-avii
              </a>
            </div>

            <div className="no-scrollbar" style={{ overflowX: "auto" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(53, 1fr)",
                gridTemplateRows: "repeat(7, 1fr)",
                gridAutoFlow: "column",
                gap: 3,
                minWidth: 480,
              }}>
                {DOTS.map(dot => (
                  <div
                    key={dot.id}
                    title={`Level ${dot.level}`}
                    style={{
                      width: "100%", aspectRatio: "1",
                      borderRadius: 2,
                      background: DOT_COLORS[dot.level],
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "flex-end",
              gap: 4, marginTop: 12,
              fontFamily: "var(--font-body)", fontSize: "0.62rem",
              color: "var(--faint)", letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              Less
              {DOT_COLORS.map((c, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
              ))}
              More
            </div>
          </motion.div>

          {/* ── Pinned repos ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {PINNED_REPOS.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.07 }}
                className="card"
                style={{
                  padding: "18px 22px", textDecoration: "none",
                  display: "flex", flexDirection: "column", gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "0.95rem", color: "var(--ink)", letterSpacing: "-0.01em",
                  }}>
                    {repo.name}
                  </span>
                  <ExternalLink size={13} style={{ color: "var(--faint)", flexShrink: 0, marginTop: 2 }} />
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.82rem",
                  color: "var(--muted)", lineHeight: 1.6, margin: 0,
                }}>
                  {repo.description}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#e34c26", display: "inline-block", // HTML-like JS color
                  }} />
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.72rem",
                    color: "var(--faint)",
                  }}>
                    {repo.language}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
