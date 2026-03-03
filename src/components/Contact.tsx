"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c349ac1?w=1920&q=75&auto=format"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,13,13,0.92)" }}
        />
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                Begin Your Project
              </span>
            </div>

            <h2
              className="font-light leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "#F5F0E8",
              }}
            >
              Let&apos;s Create
              <br />
              <em style={{ color: "#C9A84C" }}>Together</em>
            </h2>

            <p
              className="leading-relaxed mb-12"
              style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, maxWidth: "420px" }}
            >
              Every exceptional outdoor space begins with a conversation. Share your vision
              with us and let&apos;s craft something truly extraordinary.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                { icon: <Phone size={16} />, label: "Call Us", value: "(555) 123-4567" },
                { icon: <Mail size={16} />, label: "Email Us", value: "hello@luxurydecks.com" },
                { icon: <MapPin size={16} />, label: "Visit Us", value: "Beverly Hills, CA 90210" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#C9A84C",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#8A8A8A", fontSize: "10px" }}>
                      {item.label}
                    </div>
                    <div className="text-sm" style={{ color: "#F5F0E8" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 rounded-2xl"
              style={{
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #9E7A2E, #C9A84C)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "#F5F0E8" }}>
                    Our Promise to You
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "#8A8A8A", fontWeight: 300 }}>
                    Free design consultation · 5-year craftsmanship warranty · No surprises, ever
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "rgba(20,20,20,0.8)",
                border: "1px solid rgba(201,168,76,0.12)",
                backdropFilter: "blur(20px)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex w-16 h-16 rounded-full items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #9E7A2E, #C9A84C)", color: "#0D0D0D" }}
                  >
                    <CheckCircle size={32} />
                  </motion.div>
                  <h3
                    className="text-3xl font-light mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                  >
                    We&apos;ll Be in Touch
                  </h3>
                  <p style={{ color: "#8A8A8A", fontWeight: 300 }}>
                    Thank you for reaching out. Our team will contact you within 24 hours
                    to schedule your complimentary design consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3
                    className="text-2xl font-light mb-8"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                  >
                    Free Consultation Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Full Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                    />
                    <InputField
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Phone Number"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                    />
                    <SelectField
                      label="Project Type"
                      value={formData.project}
                      onChange={(v) => setFormData({ ...formData, project: v })}
                      options={[
                        "Signature Deck",
                        "Pergola / Pavilion",
                        "Outdoor Kitchen",
                        "Fire & Water Feature",
                        "Full Outdoor Living",
                      ]}
                    />
                  </div>

                  <TextareaField
                    label="Tell Us About Your Vision"
                    placeholder="Describe your dream outdoor space, property size, style preferences..."
                    value={formData.message}
                    onChange={(v) => setFormData({ ...formData, message: v })}
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm mt-2"
                    style={{ fontSize: "12px", letterSpacing: "0.18em" }}
                  >
                    <Send size={15} />
                    Send My Request
                  </motion.button>

                  <p className="text-center text-xs" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                    No obligation · Free design consultation · Responds within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label, placeholder, value, onChange, type = "text",
}: {
  label: string; placeholder: string; value: string;
  onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label className="block text-xs mb-2 tracking-wider uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(201,168,76,0.15)",
          color: "#F5F0E8",
          fontSize: "0.875rem",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
          e.currentTarget.style.background = "rgba(201,168,76,0.04)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        }}
      />
    </div>
  );
}

function SelectField({
  label, value, onChange, options,
}: {
  label: string; value: string;
  onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="block text-xs mb-2 tracking-wider uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(201,168,76,0.15)",
          color: value ? "#F5F0E8" : "#8A8A8A",
          fontSize: "0.875rem",
          appearance: "none",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
      >
        <option value="" disabled style={{ background: "#141414" }}>Select type</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#141414" }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label, placeholder, value, onChange,
}: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs mb-2 tracking-wider uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(201,168,76,0.15)",
          color: "#F5F0E8",
          fontSize: "0.875rem",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
          e.currentTarget.style.background = "rgba(201,168,76,0.04)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
          e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        }}
      />
    </div>
  );
}
