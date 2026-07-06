import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import confetti from "canvas-confetti";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aviimondal689@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            (data.errors && data.errors[0]?.msg) ||
            "Failed to submit message.",
        );
      }

      // Success
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Trigger canvas-confetti blast
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#7C3AED", "#06B6D4", "#ffffff"],
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 right-0 w-112.5 h-112.5 rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center justify-center gap-1.5"
          >
            <Mail size={12} /> Contact Channel
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white"
          >
            Start a Conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mutedText mt-4 font-body text-base"
          >
            Submit an inquiry below or drop an email to discuss projects,
            collaborations, or intern roles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Details & Links Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-heading">
                    Open to Opportunities
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  Let's build together
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-body leading-relaxed">
                  I am available for freelance contracts, full-time intern
                  positions, or code consulting. Shoot me a message!
                </p>
              </div>

              {/* Direct email display */}
              <div className="flex items-center justify-between bg-zinc-950/60 border border-white/5 rounded-xl p-3 mt-6">
                <div className="flex items-center gap-2 font-code text-xs text-zinc-300">
                  <Mail size={14} className="text-cyan-400" />
                  <span>aviimondal689@gmail.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-surface hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Social channels card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5"
            >
              <h4 className="text-xs text-white font-heading font-bold uppercase tracking-wider mb-4">
                Networks
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaGithub size={18} />,
                    label: "GitHub",
                    href: "https://github.com/code-with-avii",
                  },
                  {
                    icon: <FaLinkedin size={18} />,
                    label: "https://www.linkedin.com/in/abhishekh07/",
                  },
                  {
                    icon: <FaXTwitter size={18} />,
                    label: "Twitter",
                    href: "https://twitter.com",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow flex items-center justify-center gap-2 py-2.5 bg-surface hover:bg-zinc-800 border border-white/5 hover:border-white/10 rounded-xl text-xs text-mutedText hover:text-white font-semibold transition-all"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Message Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm p-3.5 rounded-xl font-body"
                  >
                    <CheckCircle2 size={16} />
                    <span>
                      Your inquiry was logged successfully! Abhishekh will
                      review this shortly.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm p-3.5 rounded-xl font-body"
                  >
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-zinc-400 font-body"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Jane Doe"
                      disabled={loading || status === "success"}
                      className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-all font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-zinc-400 font-body"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="jane.doe@example.com"
                      disabled={loading || status === "success"}
                      className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-all font-body"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-zinc-400 font-body"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Job opening..."
                    disabled={loading || status === "success"}
                    className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-all font-body"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-zinc-400 font-body"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Provide details about your project or role proposal..."
                    disabled={loading || status === "success"}
                    className="w-full bg-zinc-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-primary/50 transition-all font-body resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || status === "success"}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-purple-cyan text-white font-semibold rounded-xl text-xs sm:text-sm hover:opacity-95 transition-all disabled:opacity-50 shadow-glow-primary"
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
