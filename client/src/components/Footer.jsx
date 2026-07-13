import React from "react";
import { ArrowUp, Mail, Code2, MapPin, Briefcase, Zap, Coffee, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const statusItems = [
    {
      icon: (
        <div className="relative">
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Code2 className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" size={18} />
        </div>
      ),
      label: "Currently",
      value: "Building an AI-powered project",
      bgColor: "bg-emerald-500/10",
      borderColor: "hover:border-emerald-500/30",
    },
    {
      icon: <MapPin className="text-rose-400 group-hover:scale-110 transition-transform duration-300" size={18} />,
      label: "Location",
      value: "India",
      bgColor: "bg-rose-500/10",
      borderColor: "hover:border-rose-500/30",
    },
    {
      icon: <Briefcase className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={18} />,
      label: "Open to",
      value: "Internships • Full-time • Freelance",
      bgColor: "bg-amber-500/10",
      borderColor: "hover:border-amber-500/30",
    },
    {
      icon: <Zap className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={18} />,
      label: "Response Time",
      value: "Within 24 hours",
      bgColor: "bg-cyan-500/10",
      borderColor: "hover:border-cyan-500/30",
    },
    {
      icon: <Coffee className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={18} />,
      label: "Fun Fact",
      value: "I enjoy turning complex problems into intuitive interfaces.",
      bgColor: "bg-purple-500/10",
      borderColor: "hover:border-purple-500/30",
    },
    {
      icon: <Calendar className="text-blue-400 group-hover:scale-110 transition-transform duration-300" size={18} />,
      label: "Last Updated",
      value: "July 2026",
      bgColor: "bg-blue-500/10",
      borderColor: "hover:border-blue-500/30",
    },
  ];

  return (
    <footer className="bg-surface border-t border-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-lg bg-gradient-purple-cyan flex items-center justify-center p-2 text-white font-bold text-base mr-3 shadow-glow-primary">
              <Code2 size={16} />
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-text">
              Abhishekh Kumar
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-mutedText">
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "Achievements", href: "#achievements" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-text transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4 text-mutedText">
            <a
              href="https://github.com/code-with-avii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekh07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/MondalAvii94420"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="mailto:aviimondal689@gmail.com"
              className="hover:text-text transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Developer Status Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10 p-6 rounded-2xl bg-surface-hover/10 border border-border/40 backdrop-blur-xs relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-mutedText font-code">
              Developer Status Snapshot
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {statusItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className={`flex gap-4 p-4 rounded-xl bg-surface/40 border border-border/30 ${item.borderColor} hover:bg-surface/70 transition-all duration-300 group shadow-sm hover:shadow-glow-sm`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[10px] font-bold text-mutedText uppercase tracking-wider mb-0.5 font-code">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium text-text font-body leading-relaxed break-words">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System info / bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <div className="text-[10px] sm:text-xs text-mutedText font-semibold font-code text-center sm:text-left">
            Built with <span className="text-purple-400">React 19</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>,{" "}
            <span className="text-emerald-400">Express.js</span>, &{" "}
            <span className="text-text">MongoDB</span>.
          </div>
          <div className="text-[10px] sm:text-xs text-mutedText font-body text-center sm:text-right">
            &copy; {new Date().getFullYear()} Abhishekh Kumar. All rights
            reserved.
          </div>

          {/* Back to top float action button */}
          <button
            onClick={handleScrollToTop}
            className="sm:absolute sm:right-8 sm:bottom-12 p-3 bg-surface hover:bg-surface-hover border border-border hover:border-border-hover rounded-xl text-mutedText hover:text-text transition-all shadow-md group"
            title="Back to Top"
          >
            <ArrowUp
              size={15}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
