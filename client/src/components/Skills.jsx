import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../store/hooks.js";
import { useGetSkillsQuery } from "../store/apiSlice.js";
import {
  Sparkles,
  Brain,
  Cpu,
  Database,
  Cloud,
  Settings,
  Terminal,
  Layers,
  ChevronRight,
} from "lucide-react";

// Hardcoded fallback list in case Redux is not populated yet
const fallbackSkills = [
  {
    name: "React",
    category: "Frontend",
    icon: "React",
    currentlyLearning: false,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "Nextjs",
    currentlyLearning: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Tailwind",
    currentlyLearning: false,
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    icon: "Redux",
    currentlyLearning: false,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "Javascript",
    currentlyLearning: false,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "Typescript",
    currentlyLearning: true,
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: "Framer",
    currentlyLearning: false,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "Nodejs",
    currentlyLearning: false,
  },
  {
    name: "Express",
    category: "Backend",
    icon: "Express",
    currentlyLearning: false,
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: "RestApi",
    currentlyLearning: false,
  },
  { name: "JWT", category: "Backend", icon: "Jwt", currentlyLearning: false },
  {
    name: "MongoDB",
    category: "Databases",
    icon: "Mongodb",
    currentlyLearning: false,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: "Postgres",
    currentlyLearning: false,
  },
  {
    name: "GitHub Actions",
    category: "Tools",
    icon: "GithubActions",
    currentlyLearning: false,
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "Vercel",
    currentlyLearning: false,
  },
  {
    name: "Render",
    category: "Tools",
    icon: "Render",
    currentlyLearning: false,
  },
  { name: "Git", category: "Tools", icon: "Git", currentlyLearning: false },
  {
    name: "GitHub",
    category: "Tools",
    icon: "Github",
    currentlyLearning: false,
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "Vscode",
    currentlyLearning: false,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "Postman",
    currentlyLearning: false,
  },
  {
    name: "OpenAI API",
    category: "AI",
    icon: "Openai",
    currentlyLearning: false,
  },
  {
    name: "Gemini API",
    category: "AI",
    icon: "Gemini",
    currentlyLearning: false,
  },
];

const categoryIcons = {
  Frontend: <Layers size={18} />,
  Backend: <Terminal size={18} />,
  Databases: <Database size={18} />,
  Tools: <Settings size={18} />,
  AI: <Brain size={18} />,
};

const categoryDescriptions = {
  Frontend: "Building interactive, accessible, and fast user interfaces.",
  Backend: "Designing robust APIs, server microservices, and logic pipelines.",
  Databases: "Structuring schema mappings, indexes, and fast caching layers.",
  Tools: "Workflow instruments, code management, and sandbox testers.",
  AI: "Integrating custom models, agent pipelines, and language wrappers.",
};

const getSkillProficiency = (name) => {
  const ratings = {
    "React": { percent: 92, label: "Expert" },
    "Next.js": { percent: 80, label: "Advanced" },
    "Tailwind CSS": { percent: 95, label: "Expert" },
    "Redux Toolkit": { percent: 85, label: "Advanced" },
    "JavaScript": { percent: 90, label: "Expert" },
    "TypeScript": { percent: 78, label: "Advanced" },
    "Framer Motion": { percent: 82, label: "Advanced" },
    "Node.js": { percent: 88, label: "Advanced" },
    "Express": { percent: 90, label: "Expert" },
    "REST APIs": { percent: 92, label: "Expert" },
    "JWT": { percent: 88, label: "Advanced" },
    "MongoDB": { percent: 85, label: "Advanced" },
    "PostgreSQL": { percent: 75, label: "Advanced" },
    "GitHub Actions": { percent: 80, label: "Advanced" },
    "Vercel": { percent: 85, label: "Advanced" },
    "Render": { percent: 80, label: "Advanced" },
    "Git": { percent: 90, label: "Expert" },
    "GitHub": { percent: 90, label: "Expert" },
    "VS Code": { percent: 95, label: "Expert" },
    "Postman": { percent: 88, label: "Advanced" },
    "OpenAI API": { percent: 82, label: "Advanced" },
    "Gemini API": { percent: 85, label: "Advanced" },
  };
  return ratings[name] || { percent: 80, label: "Advanced" };
};

export default function Skills() {
  const { data: reduxSkills } = useGetSkillsQuery();
  const skills = reduxSkills && reduxSkills.length > 0 ? reduxSkills : fallbackSkills;

  const categories = ["Frontend", "Backend", "Databases", "Tools", "AI"];
  const [activeCategory, setActiveCategory] = useState("Frontend");

  // Group skills by category (exclude currently learning from main grid)
  const groupedSkills = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat && !s.currentlyLearning);
    return acc;
  }, {});

  const currentlyLearningSkills = skills.filter((s) => s.currentlyLearning);
  const activeSkillsList = groupedSkills[activeCategory] || [];

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
            <Cpu size={12} /> Technical Capability
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
            An interactive breakdown of frameworks, databases, and environments I use to build scalable products.
          </motion.p>
        </div>

        {/* Categorized Skills Layout */}
        <div className="flex flex-col gap-12 mb-16 max-w-6xl mx-auto">
          {categories.map((category) => {
            const categorySkills = groupedSkills[category] || [];
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="glass-panel p-6 sm:p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                  <span className="p-2.5 rounded-xl bg-surface border border-border-hover text-cyan-400">
                    {categoryIcons[category]}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-text">
                      {category}
                    </h3>
                    <p className="text-xs text-mutedText mt-0.5 font-body">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                  {categorySkills.map((skill) => {
                    const prof = getSkillProficiency(skill.name);
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="p-3 sm:p-4 rounded-xl bg-surface/40 border border-border/60 hover:border-zinc-700 hover:bg-surface/60 transition-all flex flex-col justify-between"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3 gap-1">
                          <span className="font-code font-bold text-xs sm:text-sm text-text flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span className="truncate">{skill.name}</span>
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-mutedText font-code bg-border/40 px-1.5 py-0.5 rounded w-fit">
                            {prof.label}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-border/40 h-1 sm:h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${prof.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-cyan-500/80 h-full rounded-full"
                          />
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-code text-mutedText mt-1.5 sm:mt-2 text-right block font-semibold">
                          {prof.percent}%
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        {currentlyLearningSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-border max-w-4xl mx-auto card-glow-border"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-text">
                    Currently Deep Diving
                  </h3>
                  <p className="text-xs text-mutedText mt-0.5">
                    Exploring next-gen technologies to expand portfolio capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentlyLearningSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs text-purple-300 font-code font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
