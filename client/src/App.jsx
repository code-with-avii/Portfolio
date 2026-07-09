import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
      </Routes>
    </AnimatePresence>
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
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <BackgroundBlobs />
          <AnimatedRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
