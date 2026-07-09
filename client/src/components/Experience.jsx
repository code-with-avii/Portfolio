import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks.js";
import { useGetExperiencesQuery } from "../store/apiSlice.js";
import { Briefcase, Calendar, Star, Milestone } from "lucide-react";

const fallbackExperiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Open Source",
    duration: "2025 - Present",
    type: "Freelance Work",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "OpenAI API"],
    achievements: [
      "Architected custom E-commerce APIs and automated dashboard integrations.",
      "Developed AI-assisted workflows resulting in a 40% reduction in client customer support ticket response times.",
    ],
  },
  // {
  // role: 'Lead Project Developer',
  // company: 'College Hackathons & Open Source',
  // duration: '2024 - 2025',
  // type: 'Team Projects',
  // technologies: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Socket.io'],
  // achievements: [
  // 'Won First Place in SIH (Smart India Hackathon) 2025 for building a real-time disaster resource dispatcher.',
  // 'Mentored a team of 4 junior developers, enforcing clean git practices, unit tests, and continuous delivery.',
  // 'Implemented full authentication flows using httpOnly secure cookies and JSON Web Tokens.'
  // ]
  // },
  {
    role: "Open Source Contributor",
    company: "GitHub Ecosystem",
    duration: "2025 - Present",
    type: "Open Source Contributions",
    technologies: ["Tailwind CSS", "Framer Motion", "Git"],
    achievements: [
      "Merged 100+ pull requests addressing performance bottlenecks and custom utility hook exports in component design files.",
      "Active developer in the developer tooling space, building templates used by over 500+ student developers.",
    ],
  },
  {
    role: "Undergraduate ",
    duration: "2024 - Present",
    type: "College Projects",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
    achievements: [
      "Developed and deployed the hostel management portal managing hostel activitiesCreated a centralized hostel management solution that automated key administrative tasks, enhanced communication between students and wardens, and improved the overall efficiency of hostel operations.",
    //   "Designed highly responsive layouts supporting desktop, mobile, and display panels, with 100% lighthouse compliance.",
    ],
  },
];

export default function Experience() {
  const { data: reduxExps } = useGetExperiencesQuery();
  const experiences = reduxExps && reduxExps.length > 0 ? reduxExps : fallbackExperiences;

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background blurs */}
      <div className="absolute top-1/4 right-0 w-75 h-75 unded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center justify-center gap-1.5"
          >
            <Milestone size={12} /> Career Development
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-text"
          >
            Professional & Project Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            Tracing my experiences across college initiatives, engineering
            teams, and open source ecosystems.
          </motion.p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l border-zinc-800 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-0.5 md:before:bg-surface-hover max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-stretch w-full ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Center Timeline Node Icon */}
                <span className="absolute -left-4.25 md:left-1/2 md:-translate-x-1/2 top-4 w-9 h-9 rounded-full bg-surface border-2 border-zinc-700 flex items-center justify-center text-mutedText z-20 shadow-md group-hover:border-primary transition-all">
                  <Briefcase size={14} className="text-cyan-400" />
                </span>

                {/* Main Card Wrapper */}
                <div
                  className={`w-full md:w-1/2 pl-6 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10"}`}
                >
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border hover:border-border-hover transition-all card-glow-border cursor-default h-full flex flex-col justify-between">
                    <div>
                      {/* Header metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-border border border-border-hover rounded-full text-cyan-400">
                          {exp.type}
                        </span>
                        <div className="flex items-center text-xs text-mutedText font-code">
                          <Calendar size={13} className="mr-1.5" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-heading font-bold text-text leading-snug">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-body text-mutedText font-semibold mb-5">
                        {exp.company}
                      </h4>

                      {/* Achievements bullets */}
                      <ul className="space-y-2.5 text-mutedText text-xs sm:text-sm font-body mb-6">
                        {exp.achievements.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech list tag array */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-surface border border-border text-[10px] sm:text-xs font-code text-mutedText"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty filler block for desktop layout symmetry */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
