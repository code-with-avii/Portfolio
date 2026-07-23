import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Code2, Globe } from "lucide-react";

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
          <h2 className="section-title">Background</h2>
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
              Driven by a passion for <span style={{ color: "var(--accent)" }}>clean code</span> and scalable architecture.
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
              I believe that great software is built at the intersection of robust backend engineering and seamless user experiences.
            </p>
          </motion.div>

          {/* Right Column: Real Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--ink)", lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>
                I am a <strong>Full Stack Engineer</strong> specializing in the MERN stack (MongoDB, Express, React, Node.js). My journey in software development started with a deep curiosity about how systems communicate, leading me to focus heavily on backend architecture and API design.
              </p>
              <p style={{ margin: 0 }}>
                Currently pursuing my <strong>B.E. in Information Technology</strong>, I bridge the gap between academic theory and production-grade engineering. I am actively involved in the open-source community as a contributor to GSSoC 2026, where I collaborate with developers worldwide to build better tools.
              </p>
              <p style={{ margin: 0 }}>
                Whether it's optimizing database queries for sub-200ms response times or crafting fluid React interfaces, I approach every project with an engineering mindset: <em>measure, optimize, and scale.</em>
              </p>
            </div>

            {/* Quick Facts Bento */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
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
