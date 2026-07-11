import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Download, Zap, GitPullRequest, Briefcase, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const roles = [
  "Full Stack MERN Developer",
  "Frontend Specialist",
  "GSSoC Contributor",
  "Backend Engineer",
];

const credibilityCards = [
  {
    icon: <Briefcase className="text-purple-400" size={24} />,
    title: "Internship Availability",
    value: "Ready to Join",
    description: "Available immediately for full-time or internship MERN roles (40 hrs/wk).",
  },
  {
    icon: <GitPullRequest className="text-cyan-400" size={24} />,
    title: "Open Source Contributions",
    value: "100+ Merged PRs",
    description: "Active contributor to GirlScript Summer of Code (GSSoC) and modern web tools.",
  },
  {
    icon: <Layers className="text-emerald-400" size={24} />,
    title: "Production Projects",
    value: "10+ Apps Built",
    description: "Developed end-to-end MERN portals, real-time engines, and custom AI integrations.",
  },
  {
    icon: <Zap className="text-yellow-400" size={24} />,
    title: "Engineering Impact",
    value: "40% Latency Cut",
    description: "Optimized REST API structures, database index mappings, and secure caching.",
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Cycle role titles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Spotlight mouse track
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-16"
      style={{
        "--x": `${mousePos.x}px`,
        "--y": `${mousePos.y}px`,
      }}
    >
      {/* Background radial spotlight & grid */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none z-10" />
      <div className="absolute inset-0 grid-bg opacity-45 pointer-events-none z-0" />

      {/* Floating abstract particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left ">
            {/* Animated Greeting Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 border border-border-hover bg-border backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit mb-6 text-sm text-cyan-400 font-semibold"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Internship & Full-time Roles</span>
            </motion.div>

            {/* Hi, I'm Abhishekh Kumar */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold font-heading text-text leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Abhishekh Kumar
              </span>
            </motion.h1>

            {/* Roles Cycler */}
            <div className="h-14 sm:h-16 mb-6 gap-3 flex items-center">
              <span className="text-xl sm:text-3xl font-heading text-mutedText font-medium whitespace-nowrap">
                I am a
              </span>
              <div className="relative flex items-center h-full min-w-90">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 15, opacity: 0,filter:"blur(8px)" }}
                    animate={{ y: 0, opacity: 1,filter:"blur(0px)" }}
                    exit={{ y: -15, opacity: 0,filter:"blur(8px)"}}
                    transition={{ duration: 0.4, ease:[0.22,1,0.36,1] }}
                    className="absolute inset-y-0 left-0 flex items-center text-2xl sm:text-3xl font-heading font-bold bg-linear-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-mutedText font-body max-w-xl mb-8 leading-relaxed"
            >
              MERN Specialist & Open Source Contributor. Engineered 10+ web apps,
              merged 100+ PRs (including GSSoC), and optimized backend latency by 40%.
              Available for immediate internship roles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-purple-cyan text-white font-semibold rounded-xl text-sm transition-all shadow-glow-primary hover:opacity-95 group gap-2 cursor-pointer"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-surface text-text font-semibold rounded-xl text-sm transition-all border border-border-hover hover:bg-surface-hover hover:border-white/20 cursor-pointer"
              >
                Contact Me
              </button>

              <button
                onClick={() => alert("Resume download triggered (Mock PDF)")}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-surface/50 text-mutedText hover:text-text font-semibold rounded-xl text-sm transition-all border border-border hover:border-border-hover gap-2 cursor-pointer"
              >
                <Download size={15} /> Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center space-x-5"
            >
              {[
                {
                  icon: <FaGithub size={20} />,
                  href: "https://github.com/code-with-avii",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  href: "https://www.linkedin.com/in/abhishekh07/",
                },
                { icon: <FaXTwitter size={20} />, href: "https://x.com/MondalAvii94420" },
                {
                  icon: <Mail size={20} />,
                  href: "mailto:aviimondal689@gmail.com",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface/50 hover:bg-surface-hover border border-border hover:border-border-hover text-mutedText hover:text-text flex items-center justify-center transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Interactive Floating Tech Stack visual */}
          <div className="lg:col-span-5 relative h-95 sm:h-112.5 w-full flex items-center justify-center select-none">
            {/* Visual Canvas Orbit circle */}
            <div className="absolute w-70 h-70 sm:w-87.5 sm:h-87.5 rounded-full border border-border border-dashed animate-[spin_60s_linear_infinite]" />

            {/* Center Core node */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-24 h-24 rounded-3xl bg-surface/85 border border-border-hover flex items-center justify-center shadow-glow-primary z-20"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-purple-cyan flex items-center justify-center text-white font-bold text-xl">
                AK
              </div>
            </motion.div>

            {/* Orbiting Icons */}
            {[
              {
                name: "React",
                color: "text-sky-400",
                delay: 0,
                x: -120,
                y: -70,
              },
              {
                name: "Node.js",
                color: "text-green-400",
                delay: 1,
                x: 120,
                y: -70,
              },
              {
                name: "MongoDB",
                color: "text-emerald-500",
                delay: 2,
                x: 110,
                y: 90,
              },
              {
                name: "Tailwind",
                color: "text-cyan-400",
                delay: 3,
                x: -110,
                y: 90,
              },
              {
                name: "Redux",
                color: "text-purple-500",
                delay: 4,
                x: 0,
                y: -130,
              },
              {
                name: "Express",
                color: "text-mutedText",
                delay: 5,
                x: 0,
                y: 130,
              },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [tech.y, tech.y - 12, tech.y],
                  x: [tech.x, tech.x + 8, tech.x],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay * 0.8,
                }}
                className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface/90 border border-border-hover hover:border-white/20 flex items-center justify-center text-sm font-semibold shadow-md ${tech.color} z-10 cursor-pointer`}
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <span className="text-[10px] sm:text-xs font-code font-bold uppercase">
                  {tech.name.split(".")[0]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credibility Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {credibilityCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-border flex flex-col justify-between hover:border-border-hover transition-all card-glow-border cursor-default bg-surface/50"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-border/40 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xs text-mutedText font-semibold uppercase tracking-wider">
                  {card.title}
                </h3>
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-text mt-1">
                  {card.value}
                </div>
                <p className="text-xs sm:text-sm text-mutedText font-body mt-2 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
