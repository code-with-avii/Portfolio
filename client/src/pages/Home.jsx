import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Achievements from "../components/Achievements.jsx";
import GitHubSection from "../components/GitHubSection.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-text">
      <Helmet>
        <title>Abhishekh Kumar — Full Stack Developer & MERN Engineer</title>
        <meta name="description" content="Portfolio of Abhishekh Kumar, Full Stack Developer specializing in MERN stack, backend engineering, and AI-powered web applications." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    
      <Achievements />
      <GitHubSection />
      <Contact />
      <Footer />
    </div>
  );
}
