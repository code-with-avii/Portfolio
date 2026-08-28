import React from "react";
import { motion } from "framer-motion";
import { useGetExperiencesQuery } from "../store/apiSlice.js";
import { GitCommit, GitBranch } from "lucide-react";

const fallbackExperiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Open Source",
    duration: "2025 – Present",
    type: "Freelance",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "OpenAI API"],
    achievements: [
      "Architected custom e-commerce APIs and automated dashboard integrations.",
      "Developed AI-assisted workflows reducing client support response times by 40%.",
    ],
    hash: "a7f9d2e",
  },
  {
    role: "Undergraduate Engineer",
    company: "B.Tech — Computer Science",
    duration: "2024 – Present",
    type: "Academic",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
    achievements: [
      "Developed and deployed a hostel management portal that automated administrative tasks and improved operational efficiency.",
    ],
    hash: "8f3d1a4",
  },
];

export default function Experience() {
  const { data: reduxExps } = useGetExperiencesQuery();
  // Ensure data has hashes if coming from API
  const experiences = (reduxExps?.length > 0 ? reduxExps : fallbackExperiences).map((exp, i) => ({
    ...exp,
    hash: exp.hash || Math.random().toString(16).slice(2, 9),
  }));

  return (
    <section
      id="experience"
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
          <div className="section-num">[ 04 ]</div>
          <h2 className="section-title">Experience.log</h2>
        </motion.div>

        {/* Git History Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingLeft: 8 }}>

          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted)", marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
            <GitBranch size={16} />
            <span>branch: <strong>main</strong></span>
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              style={{
                position: "relative",
                paddingLeft: 40,
                paddingBottom: 48,
                borderLeft: idx === experiences.length - 1 ? "2px solid transparent" : "2px solid var(--border-strong)",
              }}
            >
              {/* Git Commit Node */}
              <div style={{
                position: "absolute", left: -9, top: 0,
                width: 16, height: 16, borderRadius: "50%",
                background: "var(--canvas)", border: "3px solid var(--accent)",
              }} />

              {/* Commit Hash & Date */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12, marginBottom: 12,
                fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              }}>
                <span style={{ color: "var(--accent)" }}>commit {exp.hash}</span>
                <span style={{ color: "var(--muted)" }}>{exp.duration}</span>
              </div>

              {/* Commit Message (Role & Company) */}
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem",
                  color: "var(--ink)", letterSpacing: "-0.02em", margin: "0 0 4px 0",
                }}>
                  {exp.role}
                </h3>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.8rem",
                  color: "var(--muted)", marginBottom: 16,
                }}>
                  @ {exp.company}
                </div>

                {/* Achievements block resembling file diffs */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {exp.achievements.map((bullet, bi) => (
                    <p key={bi} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.85rem",
                      color: "var(--muted)", lineHeight: 1.6, margin: 0,
                      display: "flex", gap: 12
                    }}>
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>+</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>

                {/* Tags */}
                {exp.technologies?.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16, paddingTop: 16, borderTop: "1px dashed var(--border)" }}>
                    {exp.technologies.map(t => (
                      <span key={t} className="tag" style={{ background: "transparent", borderColor: "var(--border-strong)", color: "var(--muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
