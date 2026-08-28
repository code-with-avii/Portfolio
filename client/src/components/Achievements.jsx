import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useGetAchievementsQuery } from "../store/apiSlice.js";
import { ExternalLink } from "lucide-react";

/* ── Fallback data ────────────────────────────────────────────────────────── */
const fallbackAchievements = [
  {
    _id: "mem-ach-2",
    title: "100+ Merged Pull Requests",
    category: "Open Source",
    value: "Active Contributor",
    description:
      "Contributed performance patches, accessibility audits, and custom utility features to popular repositories across GSSoC 2026.",
    link: "https://github.com/code-with-avii",
    date: "2024 – Present",
  },
];

/* ── Count-up hook ────────────────────────────────────────────────────────── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return count;
}

/* ── Stat counter card ───────────────────────────────────────────────────── */
function StatCard({ value, suffix = "+", label }) {
  const count = useCountUp(value);
  return (
    <div
      className="bento-card"
      style={{ padding: "24px 20px", textAlign: "center" }}
    >
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.05em",
        color: "var(--ink)",
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em",
        textTransform: "uppercase", color: "var(--ink-muted)", marginTop: 6,
      }}>
        {label}
      </div>
    </div>
  );
}

const CATEGORY_ACCENT = {
  "Open Source": "#A78BFA",
  "Hackathons": "#F59E0B",
  "Certifications": "#60A5FA",
  "GitHub Milestones": "#34D399",
  "Coding Profile": "#F472B6",
};

/* ── Main component ──────────────────────────────────────────────────────── */
export default function Achievements() {
  const { data: reduxAchs } = useGetAchievementsQuery();
  const achievements = reduxAchs?.length > 0 ? reduxAchs : fallbackAchievements;

  return (
    <section
      id="achievements"
      style={{
        background: "var(--canvas)",
        padding: "96px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 05 ]</div>
          <h2 className="section-title">Milestones</h2>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <StatCard value={10} suffix="+" label="Projects Built" />
          <StatCard value={500} suffix="+" label="GitHub Contributions" />
          <StatCard value={100} suffix="+" label="Merged PRs" />
          <StatCard value={1500} suffix="+" label="Coding Hours" />
        </motion.div>

        {/* Achievement cards */}
        {achievements.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}>
            {achievements.map((ach, i) => {
              const accent = CATEGORY_ACCENT[ach.category] || "var(--ink-muted)";
              return (
                <motion.div
                  key={ach._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bento-card"
                  style={{ padding: "24px 26px", display: "flex", flexDirection: "column" }}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.09em",
                      textTransform: "uppercase", color: accent,
                      background: `${accent}14`, border: `1px solid ${accent}33`,
                      padding: "3px 10px", borderRadius: 6,
                    }}>
                      {ach.category}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                      color: "var(--ink-faint)", letterSpacing: "0.04em",
                    }}>
                      {ach.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.98rem",
                    color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 4,
                  }}>
                    {ach.title}
                  </h3>

                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                    color: accent, marginBottom: 12, letterSpacing: "0.04em",
                  }}>
                    {ach.value}
                  </div>

                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.83rem",
                    color: "var(--ink-muted)", lineHeight: 1.65, flex: 1,
                    margin: 0,
                  }}>
                    {ach.description}
                  </p>

                  {ach.link && (
                    <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                      <a
                        href={ach.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          fontFamily: "var(--font-body)", fontSize: "0.78rem",
                          color: "var(--ink-muted)", textDecoration: "none",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--ink-muted)"}
                      >
                        View on GitHub <ExternalLink size={11} />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
