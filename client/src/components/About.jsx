import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Code2, Globe, FileDown, Send } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--canvas)",
        padding: "clamp(64px, 10vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 01 ]</div>
          <h2 className="section-title">About</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 mt-12">
          
          {/* Left Column: Big Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--ink)",
              margin: "0 0 24px 0",
              letterSpacing: "-0.03em"
            }}>
              Driven by a passion for <span style={{ color: "var(--accent)" }}>functional logic</span> and scalable system design.
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              I enjoy solving logic puzzles on LeetCode and translating complex database schemas into efficient, production-ready server architectures.
            </p>
          </motion.div>

          {/* Right Column: Real Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--ink)", lineHeight: 1.7 }}>
              <p style={{ margin: 0, fontWeight: 400 }}>
                I'm a <strong>Software Engineer</strong> specializing in <strong>Full-Stack Development</strong> with the <strong>MERN Stack</strong>. I am passionate about system design, building scalable backend architectures, and continuously honing my DSA skills.I'm focused on building production-ready applications with clean architecture, secure authentication, efficient APIs, and scalable database systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 4 }}>
              <a
                href="/Abhishekh_Mondal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.9rem",
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "transform 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <FileDown size={16} />
                Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.9rem",
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "transform 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <Send size={16} />
                Hire Me
              </a>
            </div>

            {/* Quick Facts Bento */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 8 }}>
              <div style={{
                background: "#0a0a0a", border: "1px solid var(--border)", borderRadius: 8, padding: "20px",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <GraduationCap size={20} color="var(--accent)" />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)", fontSize: "1.1rem" }}>Education</div>
                  <div style={{ fontFamily: "var(--font-body)", color: "var(--muted)", fontSize: "0.9rem", marginTop: 4 }}>B.E. Information Technology</div>
                </div>
              </div>

              <div style={{
                background: "#0a0a0a", border: "1px solid var(--border)", borderRadius: 8, padding: "20px",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <Globe size={20} color="var(--accent)" />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--ink)", fontSize: "1.1rem" }}>Location</div>
                  <div style={{ fontFamily: "var(--font-body)", color: "var(--muted)", fontSize: "0.9rem", marginTop: 4 }}>India (Open to Remote)</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
