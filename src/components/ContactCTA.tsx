"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";

const inputCls = "w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-sm";
const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(201,168,76,0.2)",
  color: "#F5F0E8",
  fontSize: "0.875rem",
};

export default function ContactCTA() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");

  const canSubmit = name.trim() && phone.trim() && project;

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=60&auto=format"
          alt="Blue Lightning Custom Decks consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(9,9,9,0.92)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10" style={{ background: "#C9A84C" }} />
              <span className="tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>
                Free · No Obligation · 3D Design Included
              </span>
            </div>

            <h2 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 6.5rem)", color: "#F5F0E8" }}>
              Your Vision
              <br />
              <em style={{ color: "#C9A84C" }}>Starts Here.</em>
            </h2>

            <p className="mb-10" style={{ color: "#8A8A8A", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, maxWidth: "420px" }}>
              Schedule a free on-site consultation. Mauricio personally meets with
              every homeowner — walks the property, listens to the vision, and tells
              you honestly what&apos;s possible. No pressure, no sales pitch.
            </p>

            {/* What you get */}
            <div className="space-y-3 mb-10">
              {[
                "Free on-site visit — Mauricio meets you at your home",
                "3D design visualization at no cost",
                "Full project scope & honest investment estimate",
                "Permits, HOA, inspections — all handled",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={14} style={{ color: "#C9A84C", flexShrink: 0 }} />
                  <span style={{ color: "#A0A0A0", fontSize: "0.875rem", fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="p-5 rounded-2xl flex gap-4 items-center"
              style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80",
                ].map((src, i) => (
                  <img key={i} src={src} alt="Client" className="w-9 h-9 rounded-full object-cover" style={{ border: "2px solid #111" }} />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#C9A84C" stroke="none" />)}
                </div>
                <div style={{ color: "#A0A0A0", fontSize: "12px", fontWeight: 300 }}>
                  Trusted by 100+ Northern Virginia homeowners
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Quick form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl p-8 md:p-10"
                  style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <div className="mb-7">
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "6px" }}>
                      Start the Conversation
                    </h3>
                    <p style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300 }}>
                      Takes 30 seconds. Mauricio responds within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1.5 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "9px" }}>Your Name *</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputCls}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "rgba(201,168,76,0.05)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "9px" }}>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="(703) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={inputCls}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "rgba(201,168,76,0.05)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "9px" }}>I&apos;m looking to build... *</label>
                      <select
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className={`${inputCls} appearance-none cursor-pointer`}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "rgba(201,168,76,0.05)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.2)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
                      >
                        <option value="">Select project type</option>
                        <option>A Custom Deck</option>
                        <option>A Pool Deck</option>
                        <option>A Patio</option>
                        <option>A Pergola or Structure</option>
                        <option>An Outdoor Kitchen</option>
                        <option>A Full Outdoor System</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={canSubmit ? { scale: 1.03 } : {}}
                      whileTap={canSubmit ? { scale: 0.97 } : {}}
                      onClick={() => { if (canSubmit) setSent(true); }}
                      disabled={!canSubmit}
                      className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                      style={{
                        background: canSubmit ? "linear-gradient(135deg, #9E7A2E, #C9A84C)" : "rgba(201,168,76,0.15)",
                        color: canSubmit ? "#0D0D0D" : "#8A8A8A",
                        fontSize: "12px",
                        letterSpacing: "0.18em",
                        fontWeight: 600,
                        border: "none",
                        cursor: canSubmit ? "pointer" : "not-allowed",
                      }}
                    >
                      Request My Free Consultation
                      <ArrowRight size={14} />
                    </motion.button>

                    <p className="text-center" style={{ color: "#666", fontSize: "11px", fontWeight: 300 }}>
                      No spam. No sales team. Just Mauricio.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 flex items-center justify-center gap-2" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                    <span style={{ color: "#666", fontSize: "12px" }}>Or call directly:</span>
                    <a href="tel:+17034239965" className="flex items-center gap-1.5 transition-colors duration-200"
                      style={{ color: "#C9A84C", fontSize: "13px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#E8C96A")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    >
                      <Phone size={13} />
                      (703) 423-9965
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="rounded-3xl p-8 md:p-10 text-center"
                  style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  {/* Animated check */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.15 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(201,168,76,0.1)", border: "2px solid rgba(201,168,76,0.4)" }}
                  >
                    <CheckCircle size={30} style={{ color: "#C9A84C" }} />
                  </motion.div>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "12px" }}>
                    You&apos;re on the list, {name.split(" ")[0]}.
                  </h3>
                  <p style={{ color: "#8A8A8A", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, marginBottom: "24px" }}>
                    Mauricio will call you at <strong style={{ color: "#F5F0E8" }}>{phone}</strong> within
                    24 hours to schedule your free on-site visit.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-7">
                    {[
                      { label: "Call within", value: "24hrs" },
                      { label: "On-site visit", value: "Free" },
                      { label: "3D Design", value: "Included" },
                    ].map((s) => (
                      <div key={s.label} className="p-3 rounded-xl" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.08)" }}>
                        <div style={{ color: "#C9A84C", fontSize: "1.1rem", fontFamily: "var(--font-display)", fontWeight: 300 }}>{s.value}</div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer"
                      style={{ border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.12em" }}
                    >
                      Add more details to your request <ArrowRight size={12} />
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
