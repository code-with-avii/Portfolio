import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Cpu, HardDrive, Database, Terminal, Zap, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { initialProjectsData } from '../data/initialProjectsData.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function ProjectDetail() {
 const { id } = useParams();
 const navigate = useNavigate();
 const [project, setProject] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 // Scroll to top on mount
 window.scrollTo({ top: 0 });

 const fetchProjectDetails = async () => {
 try {
 const res = await fetch(`${API_URL}/projects/${id}`);
 if (!res.ok) throw new Error('API failed');
 const data = await res.json();
 setProject(data);
 } catch (err) {
 // API fallback to local data
 const localProject = initialProjectsData.find((p) => p._id === id);
 if (localProject) {
 setProject(localProject);
 }
 } finally {
 setLoading(false);
 }
 };

 fetchProjectDetails();
 }, [id]);

 if (loading) {
 return (
 <div className="min-h-screen bg-background flex items-center justify-center">
 <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
 </div>
 );
 }

 if (!project) {
 return (
 <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 text-center px-4">
 <h2 className="text-2xl font-bold font-heading text-white">Project Not Found</h2>
 <p className="text-zinc-400 text-sm max-w-sm">The case study you are trying to view does not exist or has been removed.</p>
 <button
 onClick={() => navigate('/')}
 className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface text-white border border-white/10 rounded-xl text-sm hover:bg-zinc-800"
 >
 <ArrowLeft size={16} /> Back to Home
 </button>
 </div>
 );
 }

 return (
 <div className="min-h-screen bg-background pb-24 pt-24 font-body relative overflow-hidden">
 {/* Background blurs */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px] pointer-events-none" />

 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
 {/* Back Link */}
 <button
 onClick={() => navigate('/')}
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 text-sm font-semibold"
 >
 <ArrowLeft size={16} /> Back to Portfolio
 </button>

 {/* Hero Header Banner */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="relative rounded-3xl overflow-hidden mb-12 bg-zinc-950 border border-white/5 shadow-2xl h-[280px] sm:h-[400px]"
 >
 <img
 src={project.image}
 alt={project.title}
 className="w-full h-full object-cover opacity-50"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
 <div className="absolute bottom-8 left-6 sm:left-10 right-6">
 <span className="px-2.5 py-0.5 rounded-md bg-cyan-400/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
 Case Study
 </span>
 <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-3 leading-tight">
 {project.title}
 </h1>
 <p className="text-zinc-300 text-sm sm:text-base mt-2 font-medium max-w-2xl leading-relaxed">
 {project.subtitle}
 </p>
 </div>
 </motion.div>

 {/* Core Specs Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl">
 {[
 { label: 'Role', val: project.role || 'Lead Developer', icon: <Cpu className="text-purple-400" size={16} /> },
 { label: 'Duration', val: project.duration || '2 Months', icon: <Zap className="text-cyan-400" size={16} /> },
 { label: 'Platform', val: 'Web Application', icon: <HardDrive className="text-emerald-400" size={16} /> },
 { label: 'Database', val: project.tags.includes('MongoDB') ? 'MongoDB' : 'PostgreSQL', icon: <Database className="text-pink-400" size={16} /> }
 ].map((item, idx) => (
 <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
 {item.icon}
 </div>
 <div>
 <div className="text-[10px] uppercase font-bold text-zinc-500">{item.label}</div>
 <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{item.val}</div>
 </div>
 </div>
 ))}
 </div>

 {/* Details Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
 
 {/* Left Column: Tech overview & specs */}
 <div className="lg:col-span-7 space-y-8">
 
 {/* Overview */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h2 className="text-xl font-heading font-bold text-white mb-4">Project Overview</h2>
 <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-body">
 {project.longDescription || project.description}
 </p>
 </motion.div>

 {/* Architecture Diagram */}
 {project.architectureDiagram && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h2 className="text-xl font-heading font-bold text-white mb-4">System Architecture</h2>
 <div className="bg-zinc-950/60 border border-white/5 rounded-xl p-4 font-code text-xs text-zinc-300 leading-relaxed overflow-x-auto">
 {project.architectureDiagram}
 </div>
 </motion.div>
 )}

 {/* API Endpoints Flow */}
 {project.apiFlow && project.apiFlow.length > 0 && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h2 className="text-xl font-heading font-bold text-white mb-4">API Route Blueprint</h2>
 <div className="space-y-3 font-code text-xs sm:text-sm">
 {project.apiFlow.map((flow, idx) => (
 <div key={idx} className="flex gap-3 bg-zinc-950/60 border border-white/5 rounded-lg p-3">
 <span className="text-cyan-400 font-bold shrink-0">{flow.split(' ')[0]}</span>
 <span className="text-zinc-300">{flow.substring(flow.split(' ')[0].length)}</span>
 </div>
 ))}
 </div>
 </motion.div>
 )}

 {/* Database schema design */}
 {project.databaseDesign && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
 >
 <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
 <Database size={18} className="text-pink-400" /> Database Design & Schemas
 </h2>
 <p className="text-zinc-400 text-sm leading-relaxed font-body">
 {project.databaseDesign}
 </p>
 </motion.div>
 )}

 </div>

 {/* Right Column: Features, Challenges, Actions */}
 <div className="lg:col-span-5 space-y-8">
 
 {/* CTA action buttons */}
 <div className="flex gap-4">
 <a
 href={project.githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-surface hover:bg-zinc-800 border border-white/10 rounded-xl text-sm text-white font-semibold transition-colors shadow-md"
 >
 <FaGithub size={16} />
 <span>GitHub Source</span>
 </a>
 <a
 href={project.liveUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-purple-cyan text-white font-semibold rounded-xl text-sm hover:opacity-95 transition-all shadow-glow-primary"
 >
 <ExternalLink size={16} />
 <span>Launch Live App</span>
 </a>
 </div>

 {/* Core Features */}
 <div className="glass-panel p-6 rounded-2xl border border-white/5">
 <h2 className="text-lg font-heading font-bold text-white mb-4">Core Specifications</h2>
 <ul className="space-y-3 text-zinc-300 text-xs sm:text-sm font-body">
 {project.features.map((feature, idx) => (
 <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
 <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 </div>

 {/* Challenges solved */}
 {project.challengesSolved && (
 <div className="glass-panel p-6 rounded-2xl border border-white/5">
 <h2 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
 <ShieldCheck size={18} className="text-emerald-400" /> Engineering Obstacles
 </h2>
 <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-body">
 {project.challengesSolved}
 </p>
 </div>
 )}

 {/* Performance Optimizations */}
 {project.performanceOptimizations && (
 <div className="glass-panel p-6 rounded-2xl border border-white/5">
 <h2 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
 <Zap size={18} className="text-yellow-400" /> Performance Tuning
 </h2>
 <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-body">
 {project.performanceOptimizations}
 </p>
 </div>
 )}

 {/* Future Improvements Roadmap */}
 {project.futureImprovements && project.futureImprovements.length > 0 && (
 <div className="glass-panel p-6 rounded-2xl border border-white/5">
 <h2 className="text-lg font-heading font-bold text-white mb-4">Developer Roadmap</h2>
 <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-body">
 {project.futureImprovements.map((roadmap, idx) => (
 <div key={idx} className="flex items-center gap-2.5">
 <span className="font-code font-bold text-[10px] px-1.5 py-0.5 bg-zinc-900 border border-white/5 rounded text-cyan-400">
 Roadmap #{idx + 1}
 </span>
 <span>{roadmap}</span>
 </div>
 ))}
 </div>
 </div>
 )}

 </div>

 </div>
 </div>
 </div>
 );
}
