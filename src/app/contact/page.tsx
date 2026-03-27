"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Phone, Mail, MapPin, CheckCircle, ArrowRight,
  Star, ChevronRight, Clock, Shield, Award
} from "lucide-react";

/* ─── Field helper ────────────────────────────────────── */
function Field({
  label, required = false, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block mb-2 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>
        {label} {required && <span style={{ color: "#C9A84C" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  background: "#1A1A1A",
  border: "1px solid rgba(201,168,76,0.15)",
  color: "#F5F0E8",
  fontSize: "0.9rem",
};

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3.5 rounded-xl outline-none transition-all duration-300"
      style={inputStyle}
      onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "#1E1A10"; }}
      onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.15)"; e.target.style.background = "#1A1A1A"; }}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <select
      {...props}
      className="w-full px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer transition-all duration-300"
      style={inputStyle}
      onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "#1E1A10"; }}
      onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.15)"; e.target.style.background = "#1A1A1A"; }}
    />
  );
}

/* ─── Step definitions ────────────────────────────────── */
const STEPS = ["Your Info", "Your Project", "Final Details"];

/* ─── Main page ──────────────────────────────────────── */
export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "",
    projectType: "", budget: "", referral: "",
    description: "", callTime: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const advance = () => { setDirection(1); setStep((s) => s + 1); };
  const back = () => { setDirection(-1); setStep((s) => s - 1); };

  const step1Valid = form.name && form.email && form.phone && form.city;
  const step2Valid = form.projectType && form.budget;

  return (
    <>
      <Navigation />
      <main style={{ background: "#090909" }}>

        {/* ── Cinematic top ── */}
        <section className="relative overflow-hidden" style={{ paddingTop: "100px" }}>
          <div className="absolute inset-0">
            <img
              src="/images/DJI_20241106170106_0080_D.JPG"
              className="w-full h-full object-cover"
              alt="Schedule consultation Blue Lightning"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(9,9,9,0.75) 0%, rgba(9,9,9,0.97) 100%)" }} />
          </div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10" style={{ background: "#C9A84C" }} />
                <span className="tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  Free · No Obligation · See if you qualify for a free 3D design
                </span>
              </div>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 7vw, 8rem)", color: "#F5F0E8" }}>
                Start Your
                <br />
                <em style={{ color: "#C9A84C" }}>Transformation.</em>
              </h1>
              <p style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.85, maxWidth: "480px" }}>
                Tell us about your vision. Mauricio personally reviews every inquiry and
                responds within 24 hours — no sales team, no bait-and-switch.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
        </section>

        {/* ── Main two-column ── */}
        <section className="relative py-16 md:py-24" style={{ background: "#090909" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

              {/* ── LEFT: Trust panel ── */}
              <div className="lg:col-span-2 space-y-8">

                {/* Mauricio card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="p-6 rounded-2xl flex gap-4"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(201,168,76,0.3)" }}>
                    <img src="/mauricio.png" alt="Mauricio Caballero" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="font-medium mb-0.5" style={{ color: "#F5F0E8", fontSize: "0.95rem" }}>Mauricio Caballero</div>
                    <div style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                      Owner & Design Consultant
                    </div>
                    <p style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7 }}>
                      I personally read every inquiry and respond within 24 hours.
                      No sales team — just an honest conversation about your project.
                    </p>
                  </div>
                </motion.div>

                {/* What happens next */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="p-6 rounded-2xl"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <div className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "#C9A84C", fontSize: "10px" }}>
                    What Happens Next
                  </div>
                  <div className="space-y-0">
                    {[
                      { step: "01", title: "Mauricio reviews your inquiry", time: "Same day", detail: "He reads every form personally." },
                      { step: "02", title: "We call you", time: "Within 24 hrs", detail: "Brief call to understand your vision." },
                      { step: "03", title: "Free on-site visit", time: "Within 3–5 days", detail: "Mauricio walks your property." },
                      { step: "04", title: "3D Design presented", time: "Within 1–2 weeks", detail: "See your project before we build it." },
                    ].map((item, i, arr) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: "rgba(201,168,76,0.1)",
                              border: "1px solid rgba(201,168,76,0.3)",
                              fontSize: "11px",
                              color: "#C9A84C",
                              fontFamily: "var(--font-display)",
                            }}
                          >
                            {item.step}
                          </div>
                          {i < arr.length - 1 && (
                            <div className="w-px flex-1 my-1" style={{ background: "rgba(201,168,76,0.15)", minHeight: "20px" }} />
                          )}
                        </div>
                        <div className="pb-5">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span style={{ color: "#F5F0E8", fontSize: "0.875rem", fontWeight: 500 }}>{item.title}</span>
                            <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", fontSize: "9px", border: "1px solid rgba(201,168,76,0.2)" }}>
                              {item.time}
                            </span>
                          </div>
                          <p style={{ color: "#8A8A8A", fontSize: "0.78rem", fontWeight: 300 }}>{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial snippet */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="p-6 rounded-2xl"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#C9A84C" stroke="none" />)}
                  </div>
                  <blockquote style={{ color: "#A0A0A0", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "12px" }}>
                    &ldquo;Mauricio met us on-site within 48 hours. The 3D design blew us away.
                    The finished deck exceeded every expectation.&rdquo;
                  </blockquote>
                  <div style={{ color: "#F5F0E8", fontSize: "0.8rem", fontWeight: 500 }}>Jennifer & Michael Torres</div>
                  <div style={{ color: "#C9A84C", fontSize: "10px" }}>Ashburn, VA · Multi-Level Deck + Pergola</div>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {[
                    { icon: <Shield size={14} />, label: "Class A Licensed", sub: "Virginia DPOR" },
                    { icon: <Shield size={14} />, label: "Fully Insured", sub: "GL + Workers Comp" },
                    { icon: <Award size={14} />, label: "Trex Certified", sub: "Installer" },
                    { icon: <Award size={14} />, label: "TimberTech Certified", sub: "Installer" },
                  ].map((b) => (
                    <div key={b.label} className="p-3 rounded-xl flex items-center gap-2"
                      style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <span style={{ color: "#C9A84C" }}>{b.icon}</span>
                      <div>
                        <div style={{ color: "#F5F0E8", fontSize: "11px", fontWeight: 500 }}>{b.label}</div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px" }}>{b.sub}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Direct contact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-3 pt-2"
                >
                  <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#8A8A8A", fontSize: "10px" }}>
                    Prefer to talk now?
                  </div>
                  <a href="tel:+17034239965" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Phone size={15} style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Call Directly</div>
                      <div style={{ color: "#F5F0E8", fontSize: "1rem" }}>(703) 423-9965</div>
                    </div>
                  </a>
                  <a href="mailto:mc@bluelightning.us" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Mail size={15} style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Email Mauricio</div>
                      <div style={{ color: "#F5F0E8", fontSize: "0.875rem" }}>mc@bluelightning.us</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <MapPin size={15} style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Serving</div>
                      <div style={{ color: "#F5F0E8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                        Ashburn · McLean · Loudoun · Fairfax
                        <br />
                        <span style={{ color: "#8A8A8A", fontSize: "12px" }}>& all of Northern Virginia</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ── RIGHT: Multi-step form ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-3"
              >
                {!submitted ? (
                  <div className="rounded-3xl overflow-hidden" style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.12)" }}>

                    {/* Progress bar */}
                    <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                      <div className="flex items-center justify-between mb-4">
                        {STEPS.map((label, i) => (
                          <div key={label} className="flex items-center gap-2">
                            <div
                              className="flex items-center justify-center rounded-full transition-all duration-400"
                              style={{
                                width: i <= step ? "32px" : "28px",
                                height: i <= step ? "32px" : "28px",
                                background: i < step ? "#C9A84C" : i === step ? "rgba(201,168,76,0.15)" : "transparent",
                                border: i === step ? "2px solid #C9A84C" : i < step ? "none" : "1px solid rgba(201,168,76,0.2)",
                                fontSize: "12px",
                                color: i < step ? "#0D0D0D" : i === step ? "#C9A84C" : "#8A8A8A",
                                fontWeight: i <= step ? 600 : 400,
                                flexShrink: 0,
                              }}
                            >
                              {i < step ? <CheckCircle size={14} /> : i + 1}
                            </div>
                            <span style={{ color: i === step ? "#F5F0E8" : i < step ? "#C9A84C" : "#8A8A8A", fontSize: "11px", fontWeight: i === step ? 500 : 300 }}>
                              {label}
                            </span>
                            {i < STEPS.length - 1 && (
                              <ChevronRight size={14} style={{ color: "rgba(201,168,76,0.2)", marginLeft: "4px" }} />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.1)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(to right, #9E7A2E, #C9A84C)" }}
                          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="px-8 py-8 min-h-[420px] flex flex-col">
                      <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                          key={step}
                          custom={direction}
                          initial={{ opacity: 0, x: direction * 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: direction * -40 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="flex-1 flex flex-col"
                        >
                          {/* Step 1 */}
                          {step === 0 && (
                            <div className="space-y-5 flex-1">
                              <div>
                                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>
                                  Tell us who you are.
                                </h2>
                                <p style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300 }}>
                                  Takes 60 seconds. No spam, ever.
                                </p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <Field label="Full Name" required>
                                  <Input type="text" placeholder="John Smith" value={form.name} onChange={set("name")} required />
                                </Field>
                                <Field label="Email" required>
                                  <Input type="email" placeholder="john@gmail.com" value={form.email} onChange={set("email")} required />
                                </Field>
                                <Field label="Best Phone Number" required>
                                  <Input type="tel" placeholder="(703) 000-0000" value={form.phone} onChange={set("phone")} required />
                                </Field>
                                <Field label="City / Zip Code" required>
                                  <Input type="text" placeholder="Ashburn, VA 20147" value={form.city} onChange={set("city")} required />
                                </Field>
                              </div>
                              <div className="flex items-center gap-2 pt-1" style={{ color: "#8A8A8A" }}>
                                <Clock size={12} style={{ color: "#C9A84C" }} />
                                <span style={{ fontSize: "11px", fontWeight: 300 }}>We respond within 24 hours — usually same day.</span>
                              </div>
                            </div>
                          )}

                          {/* Step 2 */}
                          {step === 1 && (
                            <div className="space-y-5 flex-1">
                              <div>
                                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>
                                  Tell us about your project.
                                </h2>
                                <p style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300 }}>
                                  Helps Mauricio prepare for your conversation.
                                </p>
                              </div>
                              <div className="space-y-4 pt-2">
                                <Field label="What are you looking to build?" required>
                                  <Select value={form.projectType} onChange={set("projectType")} required>
                                    <option value="">Select a project type</option>
                                    <option>Custom Deck</option>
                                    <option>Pool Deck</option>
                                    <option>Patio & Hardscaping</option>
                                    <option>Pergola / Covered Structure</option>
                                    <option>Outdoor Kitchen</option>
                                    <option>Full Outdoor Living System</option>
                                    <option>Other / Not Sure Yet</option>
                                  </Select>
                                </Field>
                                <Field label="Investment Range" required>
                                  <Select value={form.budget} onChange={set("budget")} required>
                                    <option value="">Select a budget range</option>
                                    <option>Under $50,000</option>
                                    <option>$50,000 – $100,000</option>
                                    <option>$100,000 – $250,000</option>
                                    <option>$250,000 – $500,000</option>
                                    <option>$500,000+</option>
                                    <option>Not sure yet</option>
                                  </Select>
                                </Field>
                                <Field label="How did you find us?">
                                  <Select value={form.referral} onChange={set("referral")}>
                                    <option value="">Select an option</option>
                                    <option>Google Search</option>
                                    <option>Instagram</option>
                                    <option>Facebook</option>
                                    <option>Referral from a Friend / Neighbor</option>
                                    <option>Houzz</option>
                                    <option>Nextdoor</option>
                                    <option>Drove by a Job Site</option>
                                    <option>Other</option>
                                  </Select>
                                </Field>
                              </div>
                              <div
                                className="p-4 rounded-xl flex items-start gap-3"
                                style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                              >
                                <CheckCircle size={14} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                                <p style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7 }}>
                                  All budgets are welcome at this stage. This helps Mauricio tailor
                                  the conversation — it does not commit you to anything.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Step 3 */}
                          {step === 2 && (
                            <div className="space-y-5 flex-1">
                              <div>
                                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>
                                  Anything else for Mauricio?
                                </h2>
                                <p style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300 }}>
                                  Optional — but the more context, the better his first call.
                                </p>
                              </div>
                              <div className="space-y-4 pt-2">
                                <Field label="Describe your vision (optional)">
                                  <textarea
                                    rows={4}
                                    placeholder="Tell Mauricio what you have in mind — size, style, features you've seen and loved, anything helps. What's the dream?"
                                    value={form.description}
                                    onChange={set("description")}
                                    className="w-full px-4 py-3.5 rounded-xl outline-none resize-none transition-all duration-300"
                                    style={inputStyle}
                                    onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.5)"; e.target.style.background = "#1E1A10"; }}
                                    onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.15)"; e.target.style.background = "#1A1A1A"; }}
                                  />
                                </Field>
                                <Field label="Best time to call">
                                  <Select value={form.callTime} onChange={set("callTime")}>
                                    <option value="">Select a time preference</option>
                                    <option>Morning (8am – 12pm)</option>
                                    <option>Afternoon (12pm – 5pm)</option>
                                    <option>Evening (5pm – 8pm)</option>
                                    <option>Any time is fine</option>
                                  </Select>
                                </Field>
                              </div>

                              {/* Final trust note */}
                              <div
                                className="p-4 rounded-xl flex items-start gap-3"
                                style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                              >
                                <img src="/mauricio.png" alt="Mauricio" className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0" style={{ border: "1px solid rgba(201,168,76,0.3)" }} />
                                <p style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7 }}>
                                  <strong style={{ color: "#F5F0E8", fontWeight: 500 }}>Mauricio personally reads every message.</strong>{" "}
                                  Your information stays private. You will never be added to a list or called by a salesperson.
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation buttons */}
                      <div className="flex items-center justify-between pt-8 mt-auto">
                        {step > 0 ? (
                          <button
                            onClick={back}
                            className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer"
                            style={{ color: "#8A8A8A", border: "1px solid rgba(201,168,76,0.12)", background: "transparent", fontSize: "12px" }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = "#F5F0E8"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = "#8A8A8A"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; }}
                          >
                            ← Back
                          </button>
                        ) : <div />}

                        {step < 2 ? (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={advance}
                            disabled={step === 0 ? !step1Valid : !step2Valid}
                            className="btn-gold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                            style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                          >
                            Continue <ArrowRight size={14} />
                          </motion.button>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSubmitted(true)}
                            className="btn-gold px-8 py-3.5 rounded-xl flex items-center gap-3 cursor-pointer"
                            style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                          >
                            Send to Mauricio
                            <ArrowRight size={14} />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── Confirmation screen ─── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="rounded-3xl overflow-hidden"
                    style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    {/* Gold top bar */}
                    <div className="h-1.5" style={{ background: "linear-gradient(to right, #7A5C1E, #C9A84C, #E8D070, #C9A84C, #7A5C1E)" }} />

                    <div className="px-8 py-12 text-center">
                      {/* Animated check */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: "rgba(201,168,76,0.1)", border: "2px solid rgba(201,168,76,0.4)" }}
                      >
                        <CheckCircle size={36} style={{ color: "#C9A84C" }} />
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F0E8", fontWeight: 300, marginBottom: "12px" }}
                      >
                        You&apos;re on Mauricio&apos;s list.
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.85, maxWidth: "420px", margin: "0 auto 36px" }}
                      >
                        Your inquiry just landed in Mauricio&apos;s inbox.
                        He personally reviews every submission and will contact you within{" "}
                        <strong style={{ color: "#F5F0E8" }}>24 hours</strong> — usually the same day.
                      </motion.p>

                      {/* What to expect timeline */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
                      >
                        {[
                          { emoji: "📋", title: "Inquiry reviewed", sub: "Today" },
                          { emoji: "📞", title: "We call you", sub: "Within 24hrs" },
                          { emoji: "🏡", title: "On-site visit", sub: "3–5 days" },
                          { emoji: "🎨", title: "3D Design", sub: "1–2 weeks" },
                        ].map((item) => (
                          <div key={item.title} className="p-4 rounded-xl flex flex-col items-center gap-1"
                            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.08)" }}>
                            <div className="text-2xl mb-1">{item.emoji}</div>
                            <div style={{ color: "#F5F0E8", fontSize: "11px", fontWeight: 500, textAlign: "center" }}>{item.title}</div>
                            <div style={{ color: "#C9A84C", fontSize: "10px" }}>{item.sub}</div>
                          </div>
                        ))}
                      </motion.div>

                      {/* Direct contact fallback */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="p-5 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-4"
                        style={{ background: "#0D0D0D", border: "1px solid rgba(201,168,76,0.08)" }}
                      >
                        <span style={{ color: "#8A8A8A", fontSize: "13px", fontWeight: 300 }}>
                          Can&apos;t wait? Call Mauricio directly:
                        </span>
                        <a href="tel:+17034239965" className="flex items-center gap-2">
                          <Phone size={15} style={{ color: "#C9A84C" }} />
                          <span style={{ color: "#F5F0E8", fontSize: "1.1rem" }}>(703) 423-9965</span>
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Bottom trust bar ── */}
        <section className="py-12 border-t" style={{ borderColor: "rgba(201,168,76,0.08)", background: "#090909" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "Class A Contractor — Virginia Licensed",
                "850+ Projects Completed",
                "Trex & TimberTech Certified",
                "Fully Insured — GL + Workers Comp",
                "Free 3D Design — Every Project",
                "Response Guaranteed Within 24 Hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
                  <span style={{ color: "#8A8A8A", fontSize: "12px", fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
