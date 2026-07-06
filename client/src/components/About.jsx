import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Sparkles, BookOpen, Terminal } from 'lucide-react';

const stats = [
 { icon: <Briefcase className="text-purple-400" size={20} />, label: 'Projects Completed', value: '15+' },
 { icon: <Code className="text-cyan-400" size={20} />, label: 'Primary Stack', value: 'MERN Stack' },
 { icon: <Terminal className="text-emerald-400" size={20} />, label: 'Architecture Focus', value: 'Backend/API' },
 { icon: <Award className="text-yellow-400" size={20} />, label: 'Core Philosophy', value: 'Always Learning' },
];

const timelineMilestones = [
 {
 year: '2023',
 title: 'Started Programming',
 description: 'Began with C/C++, HTML/CSS and basic algorithmic problem solving. Discovered a deep passion for computing systems and software building.',
 detail: 'Learned memory structures, pointers, and basic computer science topics.'
 },
 {
 year: '2024',
 title: 'Learned React & Modern Web',
 description: 'Transitioned to modern JavaScript and React. Built interactive dashboards and component libraries, understanding clean state management.',
 detail: 'Mastered Redux Toolkit, Context API, responsive Tailwind styles, and SPA routing.'
 },
 {
 year: '2024',
 title: 'Built MERN Applications',
 description: 'Integrated Express and MongoDB backends. Designed RESTful architectures, database indexing, and user schema relational mappings.',
 detail: 'Created complete CRUD portals, including hospital registries and real-time chat APIs.'
 },
 {
 year: '2025',
 title: 'Advanced Backend Development',
 description: 'Focused on microservices, performance caching via Redis, rate limiters, session protection, JWT security, and file-upload pipelines.',
 detail: 'Worked with security frameworks like Helmet, CORS configurations, and input validators.'
 },
 {
 year: '2025',
 title: 'AI Integrations & LangChain',
 description: 'Explored generative AI pipelines. Integrated OpenAI/Gemini APIs, model completion streams, custom embeddings, and vector databases.',
 detail: 'Built custom playground interfaces for SaaS marketplaces and text analysis bots.'
 },
 {
 year: '2026',
 title: 'Open Source Contributor',
 description: 'Actively contributing to UI component packs and developer tools. Writing accessible, clean code tested extensively under continuous integration.',
 detail: 'Merged 100+ pull requests and won national-level hackathons like SIH 2025.'
 }
];

export default function About() {
 const [activeMilestone, setActiveMilestone] = useState(0);

 return (
 <section id="about" className="py-24 relative overflow-hidden bg-background">
 {/* Background blurs */}
 <div className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-16">
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center justify-center gap-1.5"
 >
 <Sparkles size={12} /> My Story
 </motion.div>
 <motion.h2
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-3xl sm:text-4xl font-bold font-heading text-white"
 >
 A Visual Journey of Engineering
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-mutedText mt-4 font-body text-base"
 >
 I construct performance-driven web products, focusing on robust backend infrastructures and fluid user interfaces.
 </motion.p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
 
 {/* Narrative & Stats - Left column */}
 <div className="lg:col-span-6 space-y-8">
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
 <BookOpen className="text-primary" size={18} /> Who I Am
 </h3>
 <div className="space-y-4 font-body text-mutedText text-sm sm:text-base leading-relaxed">
 <p>
 I'm <strong className="text-white">Abhishekh Kumar</strong>, a full-stack engineer specializing in the MERN ecosystem. My coding journey is fueled by a desire to bridge technical complexity with sleek, intuitive design.
 </p>
 <p>
 I enjoy developing robust server routing systems, implementing advanced database queries, and designing interactive UI micro-animations. Security and loading speed are core targets in every codebase I write.
 </p>
 <p>
 Currently, I'm integrating AI capabilities (like Gemini & OpenAI models) into web workflows to automate data ingestion and deliver smart, tailored solutions for modern SaaS products.
 </p>
 </div>
 </motion.div>

 {/* Statistics Cards */}
 <div className="grid grid-cols-2 gap-4">
 {stats.map((stat, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 className="glass-panel p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all card-glow-border cursor-default"
 >
 <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-3">
 {stat.icon}
 </div>
 <div>
 <div className="text-2xl font-bold font-heading text-white">{stat.value}</div>
 <div className="text-xs text-mutedText mt-0.5">{stat.label}</div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Interactive Timeline - Right column */}
 <div className="lg:col-span-6">
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h3 className="text-xl font-heading font-bold text-white mb-6">Interactive Timeline</h3>
 
 <div className="relative border-l border-white/10 pl-6 space-y-8 pb-4">
 {timelineMilestones.map((milestone, idx) => {
 const isActive = activeMilestone === idx;
 return (
 <div 
 key={idx} 
 className="relative cursor-pointer group"
 onClick={() => setActiveMilestone(idx)}
 >
 {/* Timeline dot */}
 <span className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
 isActive 
 ? 'bg-primary border-primary scale-125 shadow-glow-primary' 
 : 'bg-zinc-900 border-zinc-700 group-hover:border-zinc-500'
 }`} />

 {/* Timeline Item Content */}
 <div className="transition-all duration-300">
 <div className="flex items-center gap-2">
 <span className={`text-xs font-code font-bold px-2 py-0.5 rounded ${
 isActive ? 'bg-primary/20 text-primary' : 'bg-white/5 text-mutedText'
 }`}>
 {milestone.year}
 </span>
 <h4 className={`font-heading font-bold text-sm sm:text-base transition-colors ${
 isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'
 }`}>
 {milestone.title}
 </h4>
 </div>
 
 {isActive && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 className="mt-2 text-xs sm:text-sm text-mutedText space-y-2 pl-1 overflow-hidden"
 >
 <p>{milestone.description}</p>
 <p className="text-[11px] text-cyan-400 font-code font-semibold border-l border-cyan-500/30 pl-2">
 {milestone.detail}
 </p>
 </motion.div>
 )}
 </div>
 </div>
 );
 })}
 </div>
 </motion.div>
 </div>

 </div>
 </div>
 </section>
 );
}
