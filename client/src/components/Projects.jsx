import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../store/hooks.js";
import { useGetProjectsQuery } from "../store/apiSlice.js";

import {
  ExternalLink,
  BookOpen,
  Search,
  Filter,
  FolderGit,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const fallbackProjects = [
  {
    _id: "mem-project-0",
    title: "AI Marketplace",
    subtitle: "SaaS Marketplace for custom AI fine-tunes & prompt models",
    description:
      "A premium marketplace platform supporting custom AI engineering, prompt auctions, model sharing, and credit transactions.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: [
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/abhishekh-developer/ai-marketplace",
    liveUrl: "https://ai-marketplace-abhishekh.vercel.app",
    featured: true,
  },
  {
    _id: "mem-project-1",
    title: "Secure Authentication Suite",
    subtitle: "JWT, Session, MFA, and access control microservice",
    description:
      "An authentication microservice implementing robust access guards, including role-based access, MFA, and active session termination.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/code-with-avii/Authentication",
    liveUrl: "https://auth-service-abhishekh.vercel.app",
    featured: false,
  },
  {
    _id: "mem-project-2",
    title: "Real-Time Chat Application",
    subtitle:
      "Secure chat portal supporting channels, rich text, & read checks",
    description:
      "An interactive messaging application offering channel creation, instant communication, read receipts, and online status indicators.",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/abhishekh-developer/chat-app",
    liveUrl: "https://chat-app-abhishekh.vercel.app",
    featured: false,
  },
  {
    _id: "mem-project-3",
    title: "Weather Dashboard",
    subtitle: "Dynamic weather portal with statistics & charts",
    description:
      "An aesthetic dashboard plotting historical and current weather parameters across global locations, with interactive hourly chart logs.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "ChartJS", "OpenWeather API"],
    githubUrl: "https://github.com/code-with-avii/Weather_app",
    liveUrl: "https://weather-app-theta-two-15.vercel.app/",
    featured: false,
  },
];

const filterTags = [
  "All",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Redis",
];

export default function Projects() {
  const { data: reduxProjects } = useGetProjectsQuery();
  const projects = reduxProjects && reduxProjects.length > 0 ? reduxProjects : fallbackProjects;

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Filter projects by both tag and search input
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesTag =
      selectedTag === "All" ||
      project.tags.some(
        (tag) => tag.toLowerCase() === selectedTag.toLowerCase(),
      );

    return matchesSearch && matchesTag;
  });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background blurs */}
      <div className="absolute bottom-1/3 left-0 w-87.5 h-87.5 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 flex items-center justify-center gap-1.5"
          >
            <FolderGit size={12} /> My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-text"
          >
            Featured Engineering Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            Explore interactive software applications showcasing full-stack
            logic, system integrations, and elegant UI styles.
          </motion.p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch justify-between mb-12 max-w-5xl mx-auto">
          {/* Search bar */}
          <div className="relative grow max-w-md">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mutedText">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search projects by name or technology..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface/50 border border-border-hover rounded-xl text-sm text-text placeholder-zinc-500 focus:outline-none focus:border-primary/50 transition-all font-body"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 items-center overflow-x-auto no-scrollbar py-1">
            <span className="text-xs text-mutedText font-semibold flex items-center gap-1 mr-1">
              <Filter size={12} /> Tags:
            </span>
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-body border transition-all ${
                  selectedTag === tag
                    ? "bg-gradient-purple-cyan text-white border-transparent shadow-glow-primary"
                    : "bg-surface/50 text-mutedText border-border hover:border-border-hover hover:text-text"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl border border-border overflow-hidden flex flex-col justify-between hover:border-border-hover transition-all card-glow-border group cursor-default"
              >
                <div>
                  {/* Preview Image zoom wrapper */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-border bg-surface">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Featured label */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/20 text-primary border border-primary/30 rounded-md backdrop-blur-md">
                        Featured Project
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-text group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-mutedText font-semibold mt-1 font-body leading-relaxed mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-mutedText font-body leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tags & CTA Actions */}
                <div className="px-6 pb-6">
                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-surface border border-border text-[10px] font-code text-mutedText"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-surface border border-border text-[10px] font-code text-mutedText">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">
                    <button
                      onClick={() => navigate(`/project/${project._id}`)}
                      className="inline-flex items-center justify-center py-2 bg-primary/10 border border-primary/20 text-xs font-semibold text-purple-300 rounded-lg hover:bg-primary/20 transition-all gap-1"
                    >
                      <BookOpen size={13} />
                      Case Study
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-2 bg-surface hover:bg-surface-hover border border-border hover:border-border-hover text-xs font-semibold text-mutedText hover:text-text rounded-lg transition-all gap-1"
                    >
                      <FaGithub size={13} />
                      Code
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-2 bg-surface hover:bg-surface-hover border border-border hover:border-border-hover text-xs font-semibold text-mutedText hover:text-text rounded-lg transition-all gap-1"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-mutedText font-body text-sm">
            No projects found matching the criteria. Try adjusting your query or
            filters.
          </div>
        )}
      </div>
    </section>
  );
}
