import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  HardDrive,
  Database,
  Terminal,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { initialProjectsData } from "../data/initialProjectsData.js";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/projects/${id}`);
        if (!res.ok) throw new Error("API failed");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        const localProject = initialProjectsData.find((p) => p._id === id);
        if (localProject) setProject(localProject);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--canvas)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 40, height: 40, border: "3px solid var(--border)", borderTopColor: "var(--accent)", borderRadius: "50%" }} className="animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--canvas)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2rem", color: "var(--ink)" }}>Project Not Found</h2>
        <button className="btn-secondary" onClick={() => navigate("/")}><ArrowLeft size={16} /> Back Home</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--canvas)", paddingBottom: 96, paddingTop: 96, position: "relative" }}>
      <Helmet>
        <title>{project.title} — Case Study</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Back Link */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            color: "var(--muted)", background: "transparent",
            border: "none", cursor: "pointer", marginBottom: 32,
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </button>

        {/* Hero Banner (Grayscale style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
          style={{ position: "relative", height: "clamp(300px, 40vh, 500px)", overflow: "hidden", marginBottom: 48 }}
        >
          <img
            src={project.image.includes("unsplash.com") ? project.image.replace(/w=\d+/, "w=1200").replace(/q=\d+/, "q=85") + "&fm=webp" : project.image}
            alt={project.title}
            className="img-grayscale"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--canvas) 0%, transparent 100%)" }} />
          
          <div style={{ position: "absolute", bottom: 40, left: 40, right: 40 }}>
            <span className="tag" style={{ marginBottom: 16 }}>Case Study</span>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em",
              color: "var(--ink)", margin: "0 0 8px 0",
            }}>
              {project.title}
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: "1.1rem",
              color: "var(--muted)", maxWidth: 600, margin: 0,
            }}>
              {project.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Core Specs Grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16, marginBottom: 64,
        }}>
          {[
            { label: "Role", val: project.role || "Lead Developer" },
            { label: "Duration", val: project.duration || "2 Months" },
            { label: "Platform", val: "Web Application" },
            { label: "Database", val: project.tags.includes("MongoDB") ? "MongoDB" : "PostgreSQL" },
          ].map((item, idx) => (
            <div key={idx} className="card" style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                // {item.label}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--ink)" }}>
                {item.val}
              </div>
            </div>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Overview */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <section>
              <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: 24 }}>Project Overview</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8 }}>
                {project.longDescription || project.description}
              </p>
            </section>

            {project.architectureDiagram && (
              <section>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: 24 }}>System Architecture</h2>
                <div className="card no-scrollbar" style={{ padding: 24, overflowX: "auto" }}>
                  <pre style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>
                    {project.architectureDiagram}
                  </pre>
                </div>
              </section>
            )}

            {project.apiFlow && project.apiFlow.length > 0 && (
              <section>
                <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: 24 }}>API Blueprint</h2>
                <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  {project.apiFlow.map((flow, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 16, fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 600 }}>{flow.split(" ")[0]}</span>
                      <span style={{ color: "var(--muted)" }}>{flow.substring(flow.split(" ")[0].length)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right: Actions & Meta */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                <FaGithub /> GitHub Source
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <ExternalLink size={16} /> Launch Live App
                </a>
              )}
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", color: "var(--ink)", marginBottom: 16 }}>
                Core Features
              </h3>
              <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {project.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>›</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {project.challengesSolved && (
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", color: "var(--ink)", marginBottom: 16 }}>
                  Engineering Challenges
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                  {project.challengesSolved}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
