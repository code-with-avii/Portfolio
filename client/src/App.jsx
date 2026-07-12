import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Lazy loaded page components
const Home = lazy(() => import("./pages/Home.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.jsx"));

function RouteLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text" aria-live="polite" aria-busy="true">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <div className="absolute w-8 h-8 rounded-full border-2 border-secondary/20 border-b-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<RouteLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
          <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function BackgroundBlobs() {
  return (
    <>
      {/* Subtle dotted grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] grid-bg" />
      
      {/* Animated glowing orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>
    </>
  );
}

function App() {
  return (
      <ErrorBoundary>
          <BackgroundBlobs />
          <AnimatedRoutes />
      </ErrorBoundary>
  );
}

export default App;
