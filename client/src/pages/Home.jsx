import React, { useEffect } from "react";
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
import { useAppDispatch } from "../store/hooks.js";
import {
  fetchProjects,
  fetchSkills,
  fetchExperiences,
  fetchAchievements,
} from "../store/slices/portfolioSlice.js";

export default function Home() {
  const dispatch = useAppDispatch();

  // Load portfolio telemetry from API on mount
  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchSkills());
    dispatch(fetchExperiences());
    dispatch(fetchAchievements());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <GitHubSection />
      <Contact />
      <Footer />
    </div>
  );
}
