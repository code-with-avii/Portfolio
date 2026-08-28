import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProjectsQuery } from "../store/apiSlice.js";
import { BookMarked, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ── Fallback data ────────────────────────────────────────────────────────── */
const FALLBACK = [
  {
    _id: "mem-project-5",
    title: "SmartTech",
    subtitle: "Full-Stack E-Commerce Platform",
    description: `• Product browsing & Cart management
• Google OAuth & JWT authentication
• Admin dashboard for product/user management
• Razorpay payment integration
• REST APIs with MongoDB & Redux`,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Razorpay"],
    githubUrl: "https://github.com/code-with-avii/SmartTech",
    liveUrl: "https://smart-tech-gold.vercel.app",
    featured: true,
  },
  {
    _id: "mem-project-4",
    title: "Hostel Help",
    subtitle: "Smart Hostel Management & Student Assistance Platform",
    description: `• Complaint management system
• JWT Authentication
• Role-based access control (Student/Admin)
• REST Backend APIs
• MongoDB Database integration`,
    tags: ["MERN", "JWT", "MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/code-with-avii/Hostel-Help",
    liveUrl: "https://hostel-help-pi.vercel.app/",
    featured: true,
  }
];

const ALL_TAGS = ["All", "React", "Node.js", "MongoDB", "Express", "TypeScript"];

/* ── Helper for GitHub Language Colors ────────────────────────────────────── */
const getLangColor = (tag) => {
  const colors = {
    "React": "#61dafb",
    "Node.js": "#339933",
    "MongoDB": "#47A248",
    "Express": "#ffffff",
    "TypeScript": "#3178c6",
    "JavaScript": "#f1e05a",
    "Tailwind CSS": "#38bdf8"
  };
  return colors[tag] || "#8b949e";
};

/* ── Component ──────────────────────────────────────────────────────────── */
export default function Projects() {
  const { data: reduxProjects } = useGetProjectsQuery();
  const projects = reduxProjects?.length > 0 ? reduxProjects : FALLBACK;
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter(p =>
    filter === "All" || p.tags.some(t => t.toLowerCase() === filter.toLowerCase())
  );

  return (
    <section
      id="projects"
      style={{
        background: "var(--canvas)",
        padding: "clamp(64px, 10vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 03 ]</div>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Filter pills */}
        <div style={{ position: "relative", marginBottom: 36 }}>
          <div 
            className="no-scrollbar"
            style={{ 
              display: "flex", flexWrap: "nowrap", overflowX: "auto", 
              gap: 8, paddingBottom: 4,
              maskImage: "linear-gradient(to right, white 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, white 85%, transparent 100%)"
            }}
          >
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 500,
                  padding: "4px 12px", borderRadius: "2em", cursor: "pointer",
                  background: filter === tag ? "var(--surface2)" : "transparent",
                  color: filter === tag ? "var(--ink)" : "var(--muted)",
                  border: `1px solid ${filter === tag ? "var(--border-strong)" : "transparent"}`,
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  if (filter !== tag) e.currentTarget.style.background = "var(--surface)";
                }}
                onMouseLeave={e => {
                  if (filter !== tag) e.currentTarget.style.background = "transparent";
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project list — GitHub Repo Style */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: 16,
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p._id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease",
                  outline: "none"
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${p.title}`}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-strong)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                onClick={() => navigate(`/project/${p._id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/project/${p._id}`);
                  }
                }}
              >
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <BookMarked size={16} color="var(--muted)" />
                    <span style={{ 
                      fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", 
                      color: "var(--ink)", wordBreak: "break-all"
                    }}>
                      code-with-avii / {p.title}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                    color: "var(--muted)", border: "1px solid var(--border-strong)", borderRadius: "2em",
                    padding: "1px 7px"
                  }}>
                    Public
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted)",
                  lineHeight: 1.6, marginBottom: 16, flexGrow: 1, whiteSpace: "pre-wrap"
                }}>
                  {p.description}
                </p>

                {/* Tags mapping to GitHub tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                      color: "var(--ink)", background: "var(--surface2)", padding: "0 7px",
                      borderRadius: "2em", border: "1px solid var(--border)"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Meta Row */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: getLangColor(p.tags[0]) }} />
                    <span>{p.tags[0] || "JavaScript"}</span>
                  </div>

                  {p.liveUrl && (
                    <a 
                      href={p.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={e => e.stopPropagation()}
                      style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--muted)", textDecoration: "none", marginLeft: "auto" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#8b949e", padding: "48px 0", fontFamily: "var(--font-body)" }}>
            0 repositories matched your search.
          </p>
        )}
      </div>
    </section>
  );
}
