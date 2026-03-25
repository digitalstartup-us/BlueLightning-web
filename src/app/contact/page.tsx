"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "#0D0D0D" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

          <div ref={heroRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Free Consultation</span>
              </div>
              <h1 className="font-light leading-none mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 8rem)", color: "#F5F0E8" }}>
                Let&apos;s Talk.
              </h1>
              <p className="max-w-xl" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Mauricio personally meets with every prospective client — on-site, at your property.
                Fill out the form and we&apos;ll respond within 24 hours to schedule your visit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-20" style={{ background: "#0A0A0A" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* Left: Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-10"
              >
                <div>
                  <h2 className="font-light mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "#F5F0E8" }}>
                    Contact Info
                  </h2>
                  <div className="space-y-5">
                    <a href="tel:+17034239965" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <Phone size={18} style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>Phone</div>
                        <div style={{ color: "#F5F0E8", fontSize: "1.1rem" }}>(703) 423-9965</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <Mail size={18} style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>Email</div>
                        <a href="mailto:mc@bluelightning.us" style={{ color: "#F5F0E8", fontSize: "0.9rem", display: "block" }}>mc@bluelightning.us</a>
                        <a href="mailto:info@bluelightning.us" style={{ color: "#8A8A8A", fontSize: "0.8rem", display: "block", marginTop: "2px" }}>info@bluelightning.us</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <MapPin size={18} style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>Office</div>
                        <div style={{ color: "#F5F0E8", fontSize: "0.9rem", lineHeight: 1.6 }}>
                          13800 Coppermine Rd, 3rd Floor<br />
                          Herndon, VA 20171
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <Clock size={18} style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>Response Time</div>
                        <div style={{ color: "#F5F0E8", fontSize: "0.9rem" }}>Within 24 hours, guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service areas */}
                <div className="p-6 rounded-2xl" style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}>
                  <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#C9A84C", fontSize: "10px" }}>We Serve</div>
                  <div className="flex flex-wrap gap-2">
                    {["Ashburn", "McLean", "Herndon", "Loudoun County", "Fairfax County", "Sterling", "Great Falls", "Reston", "Arlington", "Vienna", "Prince William"].map((area) => (
                      <span key={area} className="px-2.5 py-1 rounded-md text-xs" style={{ border: "1px solid rgba(201,168,76,0.15)", color: "#A89060", fontSize: "11px" }}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust */}
                <div className="space-y-3">
                  {[
                    "Class A Contractor — Virginia Licensed",
                    "Fully Insured — GL + Workers Comp",
                    "Free 3D Design Visualization",
                    "No obligation, no sales pressure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={14} style={{ color: "#C9A84C", flexShrink: 0 }} />
                      <span style={{ color: "#8A8A8A", fontSize: "13px", fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-3"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Full Name *</label>
                        <input required type="text" placeholder="John Smith" className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-1"
                          style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }} />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Email *</label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }} />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Phone *</label>
                        <input required type="tel" placeholder="(703) 000-0000" className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }} />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>City / Zip Code *</label>
                        <input required type="text" placeholder="Ashburn, VA 20147" className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Project Type *</label>
                      <select required className="w-full px-4 py-3.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                        style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }}>
                        <option value="">Select a project type</option>
                        <option>Custom Deck</option>
                        <option>Pool Deck</option>
                        <option>Patio & Hardscaping</option>
                        <option>Pergola / Covered Structure</option>
                        <option>Outdoor Kitchen</option>
                        <option>Full Outdoor Living System</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Estimated Budget *</label>
                      <select required className="w-full px-4 py-3.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                        style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }}>
                        <option value="">Select a budget range</option>
                        <option>Under $50,000</option>
                        <option>$50,000 – $100,000</option>
                        <option>$100,000 – $250,000</option>
                        <option>$250,000 – $500,000</option>
                        <option>$500,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>How Did You Find Us?</label>
                      <select className="w-full px-4 py-3.5 rounded-xl text-sm outline-none appearance-none cursor-pointer"
                        style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }}>
                        <option value="">Select an option</option>
                        <option>Google Search</option>
                        <option>Instagram</option>
                        <option>Referral from Friend / Neighbor</option>
                        <option>Houzz</option>
                        <option>Nextdoor</option>
                        <option>Drive by / Job Site Sign</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#8A8A8A", fontSize: "10px" }}>Tell Us About Your Project</label>
                      <textarea rows={4} placeholder="Describe your vision, any ideas you have, approximate square footage if known, and the best times for Mauricio to call you..."
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none"
                        style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)", color: "#F5F0E8", fontSize: "0.9rem" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.4)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,168,76,0.12)"; }} />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-gold py-4 rounded-xl flex items-center justify-center gap-3 cursor-pointer"
                      style={{ fontSize: "12px", letterSpacing: "0.18em" }}
                    >
                      Send Consultation Request
                      <ArrowRight size={15} />
                    </motion.button>

                    <p className="text-center" style={{ color: "#8A8A8A", fontSize: "11px", fontWeight: 300 }}>
                      We respond within 24 hours. No spam, no sales team — Mauricio reads every inquiry personally.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl"
                    style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                      <CheckCircle size={28} style={{ color: "#C9A84C" }} />
                    </div>
                    <h3 className="font-light mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "#F5F0E8" }}>
                      Message Sent.
                    </h3>
                    <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, maxWidth: "380px" }}>
                      Thank you for reaching out. Mauricio will personally review your inquiry and get back to you within 24 hours.
                    </p>
                    <div className="mt-8 flex flex-col gap-2">
                      <div style={{ color: "#C9A84C", fontSize: "12px" }}>Or reach us directly:</div>
                      <a href="tel:+17034239965" style={{ color: "#F5F0E8", fontSize: "1.1rem" }}>(703) 423-9965</a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
