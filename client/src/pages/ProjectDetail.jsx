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
    // Scroll to top on mount
    window.scrollTo({ top: 0 });

    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/projects/${id}`);
        if (!res.ok) throw new Error("API failed");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        // API fallback to local data
        const localProject = initialProjectsData.find((p) => p._id === id);
        if (localProject) {
          setProject(localProject);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-2xl font-bold font-heading text-text">
          Project Not Found
        </h2>
        <p className="text-mutedText text-sm max-w-sm">
          The case study you are trying to view does not exist or has been
          removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-text border border-border-hover rounded-xl text-sm hover:bg-surface-hover"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 pt-24 font-body relative overflow-hidden">
      <Helmet>
        <title>{project.title} — Case Study</title>
        <meta name="description" content={project.subtitle} />
      </Helmet>
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <button
          onClick={() => navigate("/")}
          aria-label="Back to Portfolio Home Page"
          className="inline-flex items-center gap-2 text-mutedText hover:text-text transition-colors mb-8 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-lg px-2 py-1"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Portfolio
        </button>

        {/* Hero Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden mb-12 bg-surface border border-border shadow-2xl h-70 sm:h-100"
        >
          <img
            src={project.image.includes("unsplash.com") ? project.image.replace(/w=\d+/, "w=1200").replace(/q=\d+/, "q=85") + "&fm=webp" : project.image}
            alt={project.title}
            width="1200"
            height="500"
            loading="eager"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-8 left-6 sm:left-10 right-6">
            <span className="px-2.5 py-0.5 rounded-md bg-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Case Study
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-text mt-3 leading-tight">
              {project.title}
            </h1>
            <p className="text-mutedText text-sm sm:text-base mt-2 font-medium max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Core Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl">
          {[
            {
              label: "Role",
              val: project.role || "Lead Developer",
              icon: <Cpu className="text-purple-400" size={16} />,
            },
            {
              label: "Duration",
              val: project.duration || "2 Months",
              icon: <Zap className="text-cyan-400" size={16} />,
            },
            {
              label: "Platform",
              val: "Web Application",
              icon: <HardDrive className="text-emerald-400" size={16} />,
            },
            {
              label: "Database",
              val: project.tags.includes("MongoDB") ? "MongoDB" : "PostgreSQL",
              icon: <Database className="text-pink-400" size={16} />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl border border-border flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-border flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-mutedText">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-text mt-0.5">
                  {item.val}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tech overview & specs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border"
            >
              <h2 className="text-xl font-heading font-bold text-text mb-4">
                Project Overview
              </h2>
              <p className="text-mutedText text-sm sm:text-base leading-relaxed font-body">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            {/* Architecture Diagram */}
            {project.architectureDiagram && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-border"
              >
                <h2 className="text-xl font-heading font-bold text-text mb-4">
                  System Architecture
                </h2>
                <div className="bg-surface/60 border border-border rounded-xl p-4 font-code text-xs text-mutedText leading-relaxed overflow-x-auto">
                  {project.architectureDiagram}
                </div>
              </motion.div>
            )}

            {/* API Endpoints Flow */}
            {project.apiFlow && project.apiFlow.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-border"
              >
                <h2 className="text-xl font-heading font-bold text-text mb-4">
                  API Route Blueprint
                </h2>
                <div className="space-y-3 font-code text-xs sm:text-sm">
                  {project.apiFlow.map((flow, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 bg-surface/60 border border-border rounded-lg p-3"
                    >
                      <span className="text-cyan-400 font-bold shrink-0">
                        {flow.split(" ")[0]}
                      </span>
                      <span className="text-mutedText">
                        {flow.substring(flow.split(" ")[0].length)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Database schema design */}
            {project.databaseDesign && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-border"
              >
                <h2 className="text-xl font-heading font-bold text-text mb-4 flex items-center gap-2">
                  <Database size={18} className="text-pink-400" /> Database
                  Design & Schemas
                </h2>
                <p className="text-mutedText text-sm leading-relaxed font-body">
                  {project.databaseDesign}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column: Features, Challenges, Actions */}
          <div className="lg:col-span-5 space-y-8">
            {/* CTA action buttons */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub source code for ${project.title}`}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-surface hover:bg-surface-hover border border-border-hover rounded-xl text-sm text-text font-semibold transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <FaGithub size={16} aria-hidden="true" />
                <span>GitHub Source</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Launch live web application for ${project.title}`}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-purple-cyan text-white font-semibold rounded-xl text-sm hover:opacity-95 transition-all shadow-glow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <ExternalLink size={16} aria-hidden="true" />
                <span>Launch Live App</span>
              </a>
            </div>

            {/* Core Features */}
            <div className="glass-panel p-6 rounded-2xl border border-border">
              <h2 className="text-lg font-heading font-bold text-text mb-4">
                Core Specifications
              </h2>
              <ul className="space-y-3 text-mutedText text-xs sm:text-sm font-body">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges solved */}
            {project.challengesSolved && (
              <div className="glass-panel p-6 rounded-2xl border border-border">
                <h2 className="text-lg font-heading font-bold text-text mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-400" />{" "}
                  Engineering Obstacles
                </h2>
                <p className="text-mutedText text-xs sm:text-sm leading-relaxed font-body">
                  {project.challengesSolved}
                </p>
              </div>
            )}

            {/* Performance Optimizations */}
            {project.performanceOptimizations && (
              <div className="glass-panel p-6 rounded-2xl border border-border">
                <h2 className="text-lg font-heading font-bold text-text mb-3 flex items-center gap-2">
                  <Zap size={18} className="text-yellow-400" /> Performance
                  Tuning
                </h2>
                <p className="text-mutedText text-xs sm:text-sm leading-relaxed font-body">
                  {project.performanceOptimizations}
                </p>
              </div>
            )}

            {/* Future Improvements Roadmap */}
            {project.futureImprovements &&
              project.futureImprovements.length > 0 && (
                <div className="glass-panel p-6 rounded-2xl border border-border">
                  <h2 className="text-lg font-heading font-bold text-text mb-4">
                    Developer Roadmap
                  </h2>
                  <div className="space-y-2 text-xs sm:text-sm text-mutedText font-body">
                    {project.futureImprovements.map((roadmap, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="font-code font-bold text-[10px] px-1.5 py-0.5 bg-surface border border-border rounded text-cyan-400">
                          Roadmap #{idx + 1}
                        </span>
                        <span>{roadmap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
