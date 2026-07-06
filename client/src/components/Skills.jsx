import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks.js";
import {
  Sparkles,
  Brain,
  Cpu,
  Database,
  Cloud,
  Settings,
  Terminal,
  Layers,
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
  //  { name: 'Redis', category: 'Databases', icon: 'Redis', currentlyLearning: false },
  //  { name: 'Docker', category: 'DevOps', icon: 'Docker', currentlyLearning: false },
  {
    name: "GitHub Actions",
    category: "DevOps",
    icon: "GithubActions",
    currentlyLearning: false,
  },
  {
    name: "Vercel",
    category: "DevOps",
    icon: "Vercel",
    currentlyLearning: false,
  },
  {
    name: "Render",
    category: "DevOps",
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
  //  { name: 'LangChain', category: 'AI', icon: 'Langchain', currentlyLearning: false },
  //  { name: 'GraphQL', category: 'Backend', icon: 'Graphql', currentlyLearning: true },
  //  { name: 'Kubernetes', category: 'DevOps', icon: 'Kubernetes', currentlyLearning: true },
  //  { name: 'Rust', category: 'Backend', icon: 'Rust', currentlyLearning: true }
];

const categoryIcons = {
  Frontend: <Layers className="text-purple-400" size={16} />,
  Backend: <Terminal className="text-cyan-400" size={16} />,
  Databases: <Database className="text-emerald-400" size={16} />,
  //  'DevOps': <Cloud className="text-blue-400" size={16} />,
  Tools: <Settings className="text-zinc-400" size={16} />,
  AI: <Brain className="text-pink-400" size={16} />,
};

export default function Skills() {
  const reduxSkills = useAppSelector((state) => state.portfolio.skills);
  const skills = reduxSkills.length > 0 ? reduxSkills : fallbackSkills;

  // Group skills by category (exclude currently learning from main grid)
  const categories = ["Frontend", "Backend", "Databases", "Tools", "AI"];

  const groupedSkills = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat && !s.currentlyLearning);
    return acc;
  }, {});

  const currentlyLearningSkills = skills.filter((s) => s.currentlyLearning);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

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
            className="text-3xl sm:text-4xl font-bold font-heading text-white"
          >
            My Tech Stack & Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            A curated list of frameworks, database management engines, and cloud
            development practices I leverage.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => {
            const list = groupedSkills[category] || [];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/5">
                    {categoryIcons[category]}
                    <h3 className="font-heading font-bold text-base text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {list.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl bg-surface/85 border border-white/5 text-xs text-zinc-300 font-code transition-all hover:text-white hover:border-zinc-700 cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                        {skill.name}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        {currentlyLearningSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 max-w-4xl mx-auto card-glow-border"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Currently Deep Diving
                  </h3>
                  <p className="text-xs text-mutedText mt-0.5">
                    Exploring next-gen technologies to expand portfolio
                    capabilities.
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
