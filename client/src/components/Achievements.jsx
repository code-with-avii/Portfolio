import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks.js";
import { useGetAchievementsQuery } from "../store/apiSlice.js";
import { Trophy, Code, Award, Flame, ExternalLink } from "lucide-react";

const fallbackAchievements = [
  /*{
 _id: 'mem-ach-0',
 title: 'Smart India Hackathon Winner',
 category: 'Hackathons',
 value: '1st Place',
 description: 'National level winner for presenting an innovative emergency medical dispatch solution using geo-routing.',
 link: 'https://sih.gov.in',
 date: '2025'
 },
 */
  // {
  // _id: 'mem-ach-1',
  // title: 'LeetCode Knight Badge',
  // category: 'Coding Profile',
  // value: '1950+ Rating',
  // description: 'Solved over 1000+ problems across arrays, graphs, dynamic programming, and systems design topics.',
  // link: 'https://leetcode.com',
  // date: '2026'
  // },
  {
    _id: "mem-ach-2",
    title: "100+ Merged Pull Requests",
    category: "Open Source",
    value: "Active Contributor",
    description:
      "Contributed performance patches, accessibility audits, and custom utility features to popular repositories.",
    link: "https://github.com/code-with-avii",
    date: "2024 - Present",
  },
  // {
  // _id: 'mem-ach-3',
  // title: 'AWS Certified Developer',
  // category: 'Certifications',
  // value: 'Associate Level',
  // description: 'Validated expert competency in deploying, scaling, and managing containerised Node applications on AWS Cloud.',
  // link: 'https://aws.amazon.com',
  // date: '2025'
  // },
  // {
  // _id: 'mem-ach-4',
  // title: 'MongoDB Certified Developer',
  // category: 'Certifications',
  // value: 'Associate Developer',
  // description: 'Demonstrated extensive knowledge of aggregation pipelines, schema designs, indexes, and database optimizations.',
  // link: 'https://mongodb.com',
  // date: '2025'
  // },
  // {
  // _id: 'mem-ach-5',
  // title: 'Codeforces Expert',
  // category: 'Coding Profile',
  // value: '1650+ Max Rating',
  // description: 'Ranked in the top percentiles of international algorithms and data structures competitive contests.',
  // link: 'https://codeforces.com',
  // date: '2025'
  // }
];

// Helper component for count-up animations
const AnimatedCounter = ({ value, label, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="text-center p-6 bg-surface/50 border border-border rounded-2xl">
      <div className="text-3xl sm:text-4xl font-extrabold font-heading bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {count}+
      </div>
      <div className="text-xs text-mutedText font-semibold mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const categoryColors = {
  "Open Source": "border-purple-500/20 text-purple-400 bg-purple-500/5",
  Hackathons: "border-yellow-500/20 text-yellow-400 bg-yellow-500/5",
  Certifications: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
  "GitHub Milestones":
    "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  "Coding Profile": "border-pink-500/20 text-pink-400 bg-pink-500/5",
};

const categoryIcons = {
  "Open Source": <Code size={16} />,
  Hackathons: <Trophy size={16} />,
  Certifications: <Award size={16} />,
  "GitHub Milestones": <Code size={16} />,
  "Coding Profile": <Flame size={16} />,
};

export default function Achievements() {
  const { data: reduxAchs } = useGetAchievementsQuery();
  const achievements = reduxAchs && reduxAchs.length > 0 ? reduxAchs : fallbackAchievements;

  return (
    <section
      id="achievements"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 w-100 h-100 rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center justify-center gap-1.5"
          >
            <Trophy size={12} /> Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-text"
          >
            Recognition & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            A validation checklist of certifications, platform ranks, and
            hackathon milestones.
          </motion.p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <AnimatedCounter value={10} label="Projects Built" />
          <AnimatedCounter value={500} label="Github Contributions" />
          <AnimatedCounter value={5} label="Certifications" />
          <AnimatedCounter value={1500} label="Coding Hours" />
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((ach) => (
            <motion.div
              key={ach._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl border border-border flex flex-col justify-between hover:border-border-hover transition-all card-glow-border cursor-default"
            >
              <div>
                {/* Header Category and Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${
                      categoryColors[ach.category] ||
                      "border-zinc-800 text-mutedText bg-surface-hover/10"
                    }`}
                  >
                    {categoryIcons[ach.category]}
                    {ach.category}
                  </span>
                  <span className="text-[10px] text-mutedText font-code font-bold">
                    {ach.date}
                  </span>
                </div>

                {/* Title & Badge Value */}
                <h3 className="text-base sm:text-lg font-heading font-bold text-text leading-snug">
                  {ach.title}
                </h3>
                <div className="text-cyan-400 text-xs font-semibold font-code mt-1">
                  {ach.value}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-mutedText font-body leading-relaxed mt-4">
                  {ach.description}
                </p>
              </div>

              {/* Footer link */}
              {ach.link && (
                <div className="mt-6 pt-4 border-t border-border">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-mutedText hover:text-cyan-400 transition-colors gap-1.5 group"
                  >
                    View Verification
                    <ExternalLink
                      size={12}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
