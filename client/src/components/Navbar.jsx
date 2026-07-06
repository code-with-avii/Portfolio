import React, { useState, useEffect } from 'react';
import { Menu, X, Code, FileText, Moon, Sun } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
 { name: 'About', href: '#about' },
 { name: 'Skills', href: '#skills' },
 { name: 'Experience', href: '#experience' },
 { name: 'Projects', href: '#projects' },
 { name: 'Achievements', href: '#achievements' },
 { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [activeSection, setActiveSection] = useState('home');
 const [scrolled, setScrolled] = useState(false);
 const [isDark, setIsDark] = useState(true);
 const location = useLocation();
 const navigate = useNavigate();

 // Scrollspy & Glassmorphism triggers
 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 20);

 // Active section highlighting
 if (location.pathname !== '/') return;

 const scrollPosition = window.scrollY + 200;
 const elements = navLinks.map(link => document.querySelector(link.href));
 
 let current = '';
 for (const el of elements) {
 if (!el) continue;
 const rect = el.getBoundingClientRect();
 const top = rect.top + window.scrollY;
 if (scrollPosition >= top) {
 current = el.id;
 }
 }
 if (current) setActiveSection(current);
 };

 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, [location]);

 const handleNavClick = (e, href) => {
 e.preventDefault();
 setIsOpen(false);

 if (location.pathname !== '/') {
 navigate('/');
 setTimeout(() => {
 const el = document.querySelector(href);
 if (el) el.scrollIntoView({ behavior: 'smooth' });
 }, 100);
 } else {
 const el = document.querySelector(href);
 if (el) el.scrollIntoView({ behavior: 'smooth' });
 }
 };

 return (
 <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
 scrolled 
 ? 'glass-panel py-3 shadow-lg border-b border-white/5' 
 : 'bg-transparent py-5'
 }`}>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-12">
 
 {/* Logo */}
 <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
 <div className="w-10 h-10 rounded-xl bg-gradient-purple-cyan flex items-center justify-between p-2 text-white font-bold text-lg mr-2 shadow-glow-primary">
 <Code size={22} className="mx-auto" />
 </div>
 <span className="font-heading font-bold text-lg tracking-tight text-white hover:text-cyan-400 transition-colors">
 Abhishekh<span className="text-secondary text-xs ml-1 bg-white/10 px-1.5 py-0.5 rounded font-code">DEV</span>
 </span>
 </div>

 {/* Desktop Nav Links */}
 <div className="hidden md:flex items-center space-x-6">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => handleNavClick(e, link.href)}
 className={`relative font-body font-medium text-sm transition-colors py-2 ${
 activeSection === link.href.substring(1) && location.pathname === '/'
 ? 'text-white'
 : 'text-mutedText hover:text-white'
 }`}
 >
 {link.name}
 {activeSection === link.href.substring(1) && location.pathname === '/' && (
 <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-purple-cyan rounded-full transition-transform" />
 )}
 </a>
 ))}
 </div>

 {/* Action Tools (Resume & Mode) */}
 <div className="hidden md:flex items-center space-x-4">
 <button 
 onClick={() => setIsDark(!isDark)}
 className="p-2 rounded-lg border border-white/10 bg-surface/50 text-mutedText hover:text-white hover:border-white/20 transition-all"
 aria-label="Toggle Theme"
 >
 {isDark ? <Sun size={18} /> : <Moon size={18} />}
 </button>
 
 <a
 href="#resume"
 onClick={(e) => {
 e.preventDefault();
 alert("Resume download triggered (Mock PDF)");
 }}
 className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-surface hover:bg-zinc-800 border border-white/10 rounded-lg transition-all shadow-md group gap-1.5"
 >
 <FileText size={14} className="group-hover:text-primary transition-colors" />
 Resume
 </a>
 </div>

 {/* Mobile Menu Buttons */}
 <div className="md:hidden flex items-center space-x-3">
 <button 
 onClick={() => setIsDark(!isDark)}
 className="p-2 rounded-lg border border-white/10 bg-surface/50 text-mutedText hover:text-white transition-all"
 >
 {isDark ? <Sun size={16} /> : <Moon size={16} />}
 </button>
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="p-2 rounded-lg border border-white/10 bg-surface/50 text-mutedText hover:text-white transition-all"
 aria-label="Toggle Menu"
 >
 {isOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>

 </div>
 </div>

 {/* Mobile Drawer */}
 <div className={`md:hidden fixed inset-0 top-[60px] w-full bg-background/95 backdrop-blur-xl z-40 transition-all duration-300 ${
 isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
 }`}>
 <div className="px-4 py-6 space-y-3">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => handleNavClick(e, link.href)}
 className="block px-4 py-3 rounded-lg bg-surface/40 border border-white/5 text-base font-medium text-mutedText hover:text-white hover:bg-surface/80 transition-all"
 >
 {link.name}
 </a>
 ))}
 <div className="pt-4 border-t border-white/5">
 <button
 onClick={() => alert("Resume download triggered (Mock PDF)")}
 className="w-full flex items-center justify-center py-3 bg-gradient-purple-cyan text-white font-medium rounded-lg text-sm transition-all"
 >
 <FileText size={16} className="mr-2" /> Download Resume
 </button>
 </div>
 </div>
 </div>
 </nav>
 );
}
