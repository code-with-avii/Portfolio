import React from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "JWT Auth", "REST APIs", "WebSocket", "Helmet"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
  },
  {
    label: "Tooling",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render", "Vite"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "var(--canvas)",
        padding: "clamp(64px, 10vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 02 ]</div>
          <h2 className="section-title">Tech Stack</h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card"
          style={{ background: "#050505", overflow: "hidden", border: "1px solid var(--border-strong)" }}
        >
          {/* Traffic Lights Header */}
          <div style={{
            display: "flex", gap: 6, padding: "14px 18px",
            borderBottom: "1px solid var(--border)", background: "var(--surface)",
            alignItems: "center"
          }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ marginLeft: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
              bash — ~ /portfolio
            </span>
          </div>

          {/* Terminal Content */}
          <div style={{
            padding: "clamp(12px, 4vw, 24px)", fontFamily: "var(--font-mono)", fontSize: "clamp(0.72rem, 2vw, 0.85rem)",
            color: "var(--ink)", lineHeight: 1.6, overflowX: "auto"
          }} className="no-scrollbar">
            
            {/* Command */}
            <div style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ color: "#22c55e", fontWeight: 700 }}>abhishekh@portfolio:~$</span>
              <span style={{ color: "var(--ink)" }}>npm list --depth=1</span>
            </div>

            {/* Tree Output */}
            <div>
              <div style={{ color: "var(--muted)", marginBottom: 8, wordBreak: "break-all" }}>
                abhishekh-portfolio@1.0.0
              </div>
              
              {CATEGORIES.map((cat, ci) => {
                const isLastCat = ci === CATEGORIES.length - 1;
                return (
                  <div key={cat.label}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: "var(--muted)" }}>{isLastCat ? "└──" : "├──"}</span>
                      <span style={{ color: "#60a5fa", fontWeight: 600 }}>{cat.label}</span>
                    </div>
                    
                    {cat.skills.map((skill, si) => {
                      const isLastSkill = si === cat.skills.length - 1;
                      return (
                        <div key={skill} style={{ display: "flex", gap: 8 }}>
                          <span style={{ color: "var(--muted)" }}>
                            {isLastCat ? "    " : "│   "}
                            {isLastSkill ? "└──" : "├──"}
                          </span>
                          <span style={{ color: "var(--muted)" }}>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            
            {/* Blinking Prompt */}
            <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
              <span style={{ color: "#22c55e", fontWeight: 700 }}>abhishekh@portfolio:~$</span>
              <span className="animate-blink" style={{ color: "var(--ink)" }}>_</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
