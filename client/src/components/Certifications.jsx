import React from "react";
import { motion } from "framer-motion";
import { useGetAchievementsQuery } from "../store/apiSlice.js";
import { ExternalLink, Award, ShieldCheck } from "lucide-react";

const staticCertificates = [
  {
    _id: "cert-gfg-dsa",
    title: "DSA Training Program",
    issuer: "GeeksforGeeks",
    description:
      "Successfully completed the course on DSA Training Program, showing good understanding of data structures, algorithms, and problem-solving concepts.",
    link: "https://media.geeksforgeeks.org/certificates/1769154376/3a079dee0e65a2af4935a7c41870259f.pdf",
    date: "2026",
  },
  {
    _id: "cert-udemy-fs",
    title: "Full Stack Developer",
    issuer: "Udemy",
    value: "Associate Level",
    description:
      "Comprehensive training covering modern full-stack development, including React, Node.js, Express, databases, and secure authentication flows.",
    link: "https://www.udemy.com/certificate/UC-a4bcf47e-a450-4599-8dad-7b893f53d316/",
    date: "2026",
  },
];

export default function Certifications() {
  const { data: reduxAchs } = useGetAchievementsQuery();

  // Filter achievements for certifications category from database/API
  const dbCertifications = reduxAchs
    ? reduxAchs.filter((ach) => ach.category === "Certifications")
    : [];

  // Combine DB certificates and our static certificates, avoiding duplicates by title/link
  const combined = [...staticCertificates];
  dbCertifications.forEach((dbCert) => {
    if (!combined.some((c) => c.link === dbCert.link || c.title === dbCert.title)) {
      combined.push({
        _id: dbCert._id,
        title: dbCert.title,
        issuer: dbCert.value.includes("Udemy") ? "Udemy" : "Certification",
        description: dbCert.description || "Professional development certificate.",
        link: dbCert.link,
        date: dbCert.date,
      });
    }
  });

  return (
    <section
      id="certifications"
      style={{
        background: "var(--canvas)",
        padding: "clamp(64px, 10vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <div className="section-num">[ 05 ]</div>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        {/* Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
            marginTop: 32,
          }}
        >
          {combined.map((cert, i) => {
            const isGFG = cert.issuer.toLowerCase().includes("geeks");
            const accentColor = isGFG ? "#22c55e" : "var(--accent)";

            return (
              <motion.div
                key={cert._id || i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "28px 30px",
                  background: "var(--surface)",
                  position: "relative",
                  justifyContent: "space-between",
                  minHeight: "220px",
                }}
              >
                <div>
                  {/* Top Metadata Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: accentColor,
                        background: `${accentColor}10`,
                        border: `1px solid ${accentColor}30`,
                        padding: "4px 10px",
                        borderRadius: 6,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Award size={12} />
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--muted)",
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      margin: "0 0 24px 0",
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Footer Link */}
                {cert.link && (
                  <div
                    style={{
                      paddingTop: 16,
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        padding: "8px 16px",
                        border: "1px solid var(--border-strong)",
                        borderRadius: 6,
                        color: "var(--ink)",
                        background: "transparent",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.color = accentColor;
                        e.currentTarget.style.background = `${accentColor}08`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-strong)";
                        e.currentTarget.style.color = "var(--ink)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      Verify Credential
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
