import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, BookMarked, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const pinnedRepos = [
  {
    name: "ai-marketplace",
    description:
      "A premium SaaS Prompt Marketplace platform with credit transactions, OpenAI previews playground, and fine-tuned model sharing.",
    language: "Javascipt",
    langColor: "bg-blue-400",
    stars: "",
    forks: "",
    //  link: 'https://github.com/abhishekh-developer/ai-marketplace'
  },
  {
    name: "SmartTech",
    description:
      "SmartTech is a full-stack e-commerce platform built with the MERN stack, designed to provide a seamless online shopping experience for electronics and gadgets. It features secure authentication, product browsing, shopping cart, wishlist, order management, and a responsive, user-friendly interface.",
    language: "Javascipt",
    langColor: "bg-blue-400",
    stars: "",
    forks: "",
    link: "https://github.com/code-with-avii/SmartTech",
  },
  //  {
  //  name: 'Hostel help',
  //  description: ' HIPAA-aligned EHR patient scheduling and doctor communication microservice portal featuring calendar dragging slots.',
  //  language: 'React',
  //  langColor: 'bg-sky-400',
  //  stars: 62,
  //  forks: 9,
  //  link: 'https://github.com/abhishekh-developer/hospital-suite'
  //  },
  //  {
  //  name: 'analytics-telemetry',
  //  description: ' High-speed tracking ingestion system using Redis buffer streaming and Socket.io for live site user metrics monitoring.',
  //  language: 'Node.js',
  //  langColor: 'bg-green-400',
  //  stars: 55,
  //  forks: 12,
  //  link: 'https://github.com/abhishekh-developer/analytics-telemetry'
  //  }
];

// Generate simulated grid dots (53 weeks * 7 days)
const contributionDots = Array.from({ length: 371 }, (_, idx) => {
  // Randomise density for realistic commit calendar simulation
  const rand = Math.random();
  let color = "bg-surface"; // 0 commits
  let commits = "No";

  if (rand > 0.85) {
    color = "bg-purple-900"; // 1-2 commits
    commits = "1-2";
  } else if (rand > 0.7) {
    color = "bg-purple-700"; // 3-4 commits
    commits = "3-4";
  } else if (rand > 0.55) {
    color = "bg-cyan-500"; // 5-8 commits
    commits = "5-8";
  } else if (rand > 0.45) {
    color = "bg-cyan-400"; // 9+ commits
    commits = "9+";
  }

  return { id: idx, color, commits };
});

export default function GitHubSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 rounded-full bg-primary/5 blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 flex items-center justify-center gap-1.5"
          >
            <FaGithub size={12} /> Live Repository Feed
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-text"
          >
            Open Source Contribution Activity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            Check out real-time commits logging and pinned codes stored in my
            public space.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Stats & Contribution grid */}
          <div className="lg:col-span-8 space-y-6">
            {/* Contribution Calendar Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-border"
            >
              <h3 className="font-heading font-bold text-sm text-text mb-4 flex items-center gap-2">
                <FaGithub size={15} /> @code-with-avii contributions in the
                last year
              </h3>

              {/* <div className="overflow-x-auto no-scrollbar pb-2">
                <div className="flex gap-0.75 w-162.5 flex-wrap h-22.5 overflow-hidden select-none">
                  {contributionDots.map((dot) => (
                    <div
                      key={dot.id}
                      className={`w-2.5 h-2.5 rounded-xs ${dot.color} transition-all hover:scale-125 cursor-pointer`}
                      title={`${dot.commits} commits`}
                    />
                  ))}
                </div>
              </div> */}

              {/* Grid Legend */}
              <div className="flex items-center justify-between text-[10px] text-mutedText font-semibold font-code mt-4">
                <span>Jan 2025</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-xs bg-surface" />
                  <div className="w-2.5 h-2.5 rounded-xs bg-purple-900" />
                  <div className="w-2.5 h-2.5 rounded-xs bg-purple-700" />
                  <div className="w-2.5 h-2.5 rounded-xs bg-cyan-500" />
                  <div className="w-2.5 h-2.5 rounded-xs bg-cyan-400" />
                  <span>More</span>
                </div>
                <span>Dec 2025</span>
              </div>
            </motion.div>

            {/* Pinned Repositories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pinnedRepos.map((repo, idx) => (
                <motion.a
                  key={idx}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl border border-border hover:border-border-hover transition-all card-glow-border cursor-pointer flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <div className="flex items-center gap-2 text-text font-heading font-bold text-sm">
                      <BookMarked size={14} className="text-purple-400" />
                      {repo.name}
                    </div>
                    <p className="text-xs text-mutedText mt-3 font-body leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6 text-xs text-mutedText font-semibold font-code">
                    <div className="flex items-center gap-1">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${repo.langColor} mr-1`}
                      />
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-0.5">
                        <Star size={12} /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork size={12} /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Key Statistics Metrics */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border border-border"
            >
              <h3 className="font-heading font-bold text-sm text-text mb-6 flex items-center gap-2">
                <Code size={15} /> Code Base Metrics
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Most Used Stack", val: "JavaScript / React" },
                  { label: "Total Commits (2026)", val: "158 commits" },
                  { label: "PRs Approved/Merged", val: "24 PRs" },
                  { label: "Code Review Approvals", val: "8 reviews" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between border-b border-border pb-2.5"
                  >
                    <span className="text-xs text-mutedText font-body">
                      {stat.label}
                    </span>
                    <span className="text-xs text-text font-bold font-code">
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Language Distribution chart */}
              <div className="mt-8">
                <h4 className="text-xs text-text font-heading font-bold mb-3">
                  Top Languages Used
                </h4>
                <div className="h-2 rounded-full overflow-hidden flex w-full">
                  <div
                    className="bg-blue-100 h-full"
                    style={{ width: "45%" }}
                    title="TypeScript (0%)"
                  />
                  <div
                    className="bg-sky-400 h-full"
                    style={{ width: "35%" }}
                    title="JavaScript (55%)"
                  />
                  <div
                    className="bg-emerald-400 h-full"
                    style={{ width: "15%" }}
                    title="CSS/HTML (15%)"
                  />
                  <div
                    className="bg-yellow-500 h-full"
                    style={{ width: "5%" }}
                    title="Others (30%)"
                  />
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-[10px] font-code text-mutedText">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" /> TS
                    (0%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" /> JS
                    (55%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> CSS
                    (15%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />{" "}
                    Others (30%)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
