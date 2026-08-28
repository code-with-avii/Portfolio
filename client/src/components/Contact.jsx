import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import confetti from "canvas-confetti";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/* ── Shared input style ──────────────────────────────────────────────────── */
const inputStyle = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  color: "var(--ink)",
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "10px 14px",
  outline: "none",
  transition: "border-color 0.15s",
  resize: "none",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.68rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ink-muted)",
  marginBottom: 6,
};

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/code-with-avii", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishekh07/", icon: FaLinkedin },
  { label: "Twitter", href: "https://x.com/MondalAvii94420", icon: FaXTwitter },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aviimondal689@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || data.errors?.[0]?.msg || "Submission failed.");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 }, colors: ["#F59E0B", "#ffffff", "#111111"] });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--canvas)",
        padding: "clamp(64px, 10vw, 120px) 0",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: 80,
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
          <div className="section-num">[ 07 ]</div>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        {/* 2-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}>

          {/* ── Left: info ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Availability card */}
            <div className="bento-card" style={{ padding: "26px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#22C55E",
                  boxShadow: "0 0 0 2px rgba(34,197,94,0.25)", flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "#22C55E",
                }}>
                  Open to opportunities
                </span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem",
                color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.02em",
              }}>
                Open to Software Engineering opportunities
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.85rem",
                color: "var(--ink-muted)", lineHeight: 1.65, margin: 0,
              }}>
                Currently looking for SDE Intern or Junior Software Engineer roles. Feel free to shoot me a message or connect via LinkedIn!
              </p>

              {/* Email copy */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "var(--surface-2)", border: "1px solid var(--border)",
                borderRadius: 9, padding: "10px 14px", marginTop: 18,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Mail size={13} style={{ color: "var(--ink-muted)" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--ink-muted)" }}>
                    aviimondal689@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: copied ? "#22C55E" : "var(--ink-muted)",
                    display: "flex", alignItems: "center",
                    transition: "color 0.15s",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="bento-card" style={{ padding: "22px 26px" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 14,
              }}>
                Networks
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--ink-muted)",
                      background: "var(--surface-2)", border: "1px solid var(--border)",
                      borderRadius: 9, padding: "10px", textDecoration: "none",
                      transition: "color 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--ink-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                  >
                    <s.icon size={15} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card"
            style={{ padding: "28px 30px" }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                    color: "#22C55E", borderRadius: 10, padding: "12px 14px",
                    fontFamily: "var(--font-body)", fontSize: "0.85rem",
                  }}
                >
                  <CheckCircle2 size={15} />
                  Your message was sent! Abhishekh will respond shortly.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)",
                    color: "#EF4444", borderRadius: 10, padding: "12px 14px",
                    fontFamily: "var(--font-body)", fontSize: "0.85rem",
                  }}
                >
                  <AlertCircle size={15} />
                  {errorMsg}
                </motion.div>
              )}

              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Name</label>
                  <input
                    type="text" id="contact-name" name="name"
                    value={formData.name} onChange={handleChange}
                    required placeholder="Jack Reacher"
                    disabled={loading || status === "success"}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(255,255,255,0.2)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email</label>
                  <input
                    type="email" id="contact-email" name="email"
                    value={formData.email} onChange={handleChange}
                    required placeholder="reacher@example.com"
                    disabled={loading || status === "success"}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(255,255,255,0.2)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                <input
                  type="text" id="contact-subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  required placeholder="Project inquiry / Internship role…"
                  disabled={loading || status === "success"}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "rgba(255,255,255,0.2)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>Message</label>
                <textarea
                  id="contact-message" name="message" rows={5}
                  value={formData.message} onChange={handleChange}
                  required placeholder="Tell me about your project or role…"
                  disabled={loading || status === "success"}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => e.target.style.borderColor = "rgba(255,255,255,0.2)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || status === "success"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "var(--ink)", color: "var(--canvas)",
                  fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9rem",
                  padding: "12px", borderRadius: 10, border: "none", cursor: loading || status === "success" ? "not-allowed" : "pointer",
                  opacity: loading || status === "success" ? 0.6 : 1,
                  transition: "opacity 0.15s",
                }}
              >
                {loading ? (
                  <span style={{
                    width: 18, height: 18, borderRadius: "50%",
                    border: "2px solid rgba(8,8,8,0.3)",
                    borderTopColor: "#080808",
                    animation: "spin 0.7s linear infinite",
                    display: "inline-block",
                  }} />
                ) : (
                  <><Send size={14} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
