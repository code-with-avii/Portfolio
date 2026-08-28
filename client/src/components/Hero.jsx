import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, GitMerge, Award, Layers, Clock } from "lucide-react";

const CODE_LINES = [
  { text: 'import { Developer } from "@abhishekh/core";', color: "var(--muted)" },
  { text: '', color: "var(--ink)" },
  { text: 'export const Profile = () => {', color: "var(--ink)" },
  { text: '  return (', color: "var(--ink)" },
  { text: '    <Developer', color: "var(--accent)" },
  { text: '      role="Full Stack Engineer"', color: "var(--muted)" },
  { text: '      stack={["MongoDB", "Express", "React", "Node"]}', color: "var(--muted)" },
  { text: '      available={true}', color: "var(--muted)" },
  { text: '    />', color: "var(--accent)" },
  { text: '  );', color: "var(--ink)" },
  { text: '};', color: "var(--ink)" },
];

export default function Hero() {
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < CODE_LINES.length) {
      const t = setTimeout(() => setLineIdx(i => i + 1), 300 + Math.random() * 400);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setLineIdx(0), 10000); // Loop after 10s
      return () => clearTimeout(t);
    }
  }, [lineIdx]);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#000000",
        padding: "120px 24px 80px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">

          {/* ── Left: Information Architecture ───────────────────────────────────── */}
          <div>
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                color: "var(--ink)", marginBottom: 24,
                border: "1px solid var(--border)",
                padding: "8px 16px", borderRadius: 6,
                textTransform: "uppercase", letterSpacing: "0.05em"
              }}
            >
              <span style={{ width: 8, height: 8, background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
              Open for Software Engineering opportunities
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--ink)",
                margin: "0 0 16px 0",
              }}>
                Abhishekh Kumar
              </h1>
              <h2 style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--accent)",
                margin: "0 0 24px 0",
              }}>
                Software Engineer | Full-Stack Developer
              </h2>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                color: "var(--muted)",
                maxWidth: 540,
                lineHeight: 1.6,
                marginTop: 24,
              }}
            >
              I'm a full-stack engineer focused on building robust backend systems, scaling web applications, and resolving complex data flows. Welcome to my command center where I showcase my projects and technical experiments.
            </motion.p>

            {/* Trust Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12,
                marginTop: 32,
              }}
            >
              {[
                { label: "Full-Stack Apps", value: "5+", icon: Layers },
              ].map((metric, i) => (
                <div key={i} style={{
                  border: "1px solid var(--border)", background: "var(--surface)",
                  padding: "16px", borderRadius: 8,
                }}>
                  <metric.icon size={16} color="var(--accent)" style={{ marginBottom: 12 }} />
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
                    {metric.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)" }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: "flex", gap: 16, marginTop: 40 }}
              className="flex-col sm:flex-row"
            >
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  background: "var(--ink)", color: "#000000",
                  fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600,
                  padding: "14px 28px", border: "none", borderRadius: 6, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}
                className="w-full sm:w-auto hover:bg-gray-200 transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "transparent", color: "var(--ink)",
                  fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600,
                  padding: "14px 28px", border: "1px solid var(--border-strong)", borderRadius: 6, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}
                className="w-full sm:w-auto hover:border-gray-400 transition-colors"
              >
                Contact Me
              </button>
            </motion.div>
          </div>


          {/* ── Right: Interactive Code Editor ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div
              style={{
                background: "#0a0a0a", border: "1px solid var(--border-strong)",
                borderRadius: 12, overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Editor Header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "#050505"
              }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
                  <Code2 size={14} /> Profile.tsx
                </div>
              </div>

              {/* Editor Body */}
              <div style={{ padding: "24px", fontFamily: "var(--font-mono)", fontSize: "0.85rem", lineHeight: 1.6, overflowX: "auto" }}>
                {CODE_LINES.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", opacity: i < lineIdx ? 1 : 0,
                      transition: "opacity 0.2s"
                    }}
                  >
                    <div style={{ width: 24, color: "#333", textAlign: "right", marginRight: 16, userSelect: "none" }}>
                      {i + 1}
                    </div>
                    <div style={{ color: line.color, whiteSpace: "pre" }}>
                      {line.text}
                    </div>
                  </div>
                ))}

                {/* Blinking Cursor at active line */}
                {lineIdx < CODE_LINES.length && (
                  <div style={{ display: "flex" }}>
                    <div style={{ width: 24, marginRight: 16 }} />
                    <div className="animate-blink" style={{ width: 8, height: 16, background: "var(--accent)", marginTop: 4 }} />
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}