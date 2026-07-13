import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Settings,
  Terminal,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layers size={20} />,
    description: "Building interactive user interfaces",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: <Terminal size={20} />,
    description: "Designing robust APIs and logic pipelines",
    skills: ["Node.js", "Express", "JWT", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    description: "Data storage and management",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <Settings size={20} />,
    description: "Workflow and code management",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background visual highlight */}
      <div className="absolute top-1/2 left-0 w-112.5 h-112.5 rounded-full bg-secondary/5 blur-[130px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 flex items-center justify-center gap-1.5"
          >
            <Cpu size={14} /> Technical Capability
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-text"
          >
            My Tech Stack & Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            An organized breakdown of the technologies I use to build scalable products.
          </motion.p>
        </div>

        {/* Categorized Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-border flex flex-col hover:border-border-hover transition-all"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-border/50 pb-5">
                <span className="p-3 rounded-xl bg-surface border border-border-hover text-cyan-400 shadow-sm">
                  {category.icon}
                </span>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-text">
                    {category.title}
                  </h3>
                  <p className="text-sm text-mutedText mt-1 font-body">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-surface/40 border border-border hover:border-zinc-500 hover:bg-surface/80 transition-colors text-sm text-text font-medium font-code"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2.5" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
