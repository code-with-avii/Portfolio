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
    subtitle: "Full-stack MERN e-commerce platform for electronics",
    description:
      "Built with 25+ reusable React components, Redux Toolkit state management, JWT + Google OAuth authentication, Razorpay payment gateway, and an admin dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    githubUrl: "https://github.com/code-with-avii/SmartTech",
    liveUrl: "https://smart-tech-gold.vercel.app",
    featured: true,
  },
  {
    _id: "mem-project-1",
    title: "Authentication-Microservice",
    subtitle: "JWT, MFA, RBAC, and session management microservice",
    description:
      "HTTPOnly secure cookies with double-hashed refresh tokens, Google Authenticator TOTP MFA, Role-Based Access Control, and CSRF/XSS protection layers.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Helmet"],
    githubUrl: "https://github.com/code-with-avii/Authentication",
    liveUrl: "https://auth-service-abhishekh.vercel.app",
    featured: false,
  },
  {
    _id: "mem-project-3",
    title: "Weather_app",
    subtitle: "Real-time weather portal with Chart.js visualizations",
    description:
      "OpenWeather API integration with geocoding, interactive Chart.js histograms, and localStorage caching reducing API calls by 50%.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/code-with-avii/Weather_app",
    liveUrl: "https://weather-app-theta-two-15.vercel.app/",
    featured: false,
  },
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
          <h2 className="section-title">Repositories</h2>
        </motion.div>

        {/* Filter pills */}
        <div 
          className="no-scrollbar"
          style={{ 
            display: "flex", flexWrap: "nowrap", overflowX: "auto", 
            gap: 8, marginBottom: 36, paddingBottom: 4 
          }}
        >
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 500,
                padding: "4px 12px", borderRadius: "2em", cursor: "pointer",
                background: filter === tag ? "#21262d" : "transparent",
                color: filter === tag ? "#c9d1d9" : "#8b949e",
                border: `1px solid ${filter === tag ? "#f0f6fc1a" : "transparent"}`,
                transition: "all 0.15s ease",
              }}
              onMouseEnter={e => {
                if (filter !== tag) e.currentTarget.style.background = "#161b22";
              }}
              onMouseLeave={e => {
                if (filter !== tag) e.currentTarget.style.background = "transparent";
              }}
            >
              {tag}
            </button>
          ))}
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
                  background: "#0d1117",
                  border: "1px solid #30363d",
                  borderRadius: 6,
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease"
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#8b949e"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#30363d"}
                onClick={() => navigate(`/project/${p._id}`)}
              >
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <BookMarked size={16} color="#8b949e" />
                    <span style={{ 
                      fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", 
                      color: "var(--ink)", wordBreak: "break-all"
                    }}>
                      code-with-avii / {p.title}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 500,
                    color: "#8b949e", border: "1px solid #30363d", borderRadius: "2em",
                    padding: "1px 7px"
                  }}>
                    Public
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#8b949e",
                  lineHeight: 1.5, marginBottom: 16, flexGrow: 1
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
