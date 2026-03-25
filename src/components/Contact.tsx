"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  project: string;
  budget: string;
  source: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    project: "",
    budget: "",
    source: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (field: keyof FormData) => (v: string) =>
    setFormData((prev) => ({ ...prev, [field]: v }));

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c349ac1?w=1920&q=75&auto=format"
          alt="Contact Blue Lightning Custom Decks Northern Virginia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.92)" }} />
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
              Schedule Your
              <br />
              <em style={{ color: "#C9A84C" }}>Free Consultation</em>
            </h2>

            <p
              className="leading-relaxed mb-12"
              style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, maxWidth: "420px" }}
            >
              Every extraordinary outdoor space begins with a conversation. Tell us your
              vision and we&apos;ll show you exactly what&apos;s possible — with a 3D design before
              any work begins.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+17034239965"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                  }}
                >
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#8A8A8A", fontSize: "10px" }}>
                    Call Us
                  </div>
                  <div className="text-sm group-hover:text-amber-400 transition-colors duration-300" style={{ color: "#F5F0E8" }}>
                    (703) 423-9965
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@bluelightning.us"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#8A8A8A", fontSize: "10px" }}>
                    Email Us
                  </div>
                  <div className="text-sm group-hover:text-amber-400 transition-colors duration-300" style={{ color: "#F5F0E8", wordBreak: "break-all" }}>
                    info@bluelightning.us
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#C9A84C",
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#8A8A8A", fontSize: "10px" }}>
                    Service Area
                  </div>
                  <div className="text-sm" style={{ color: "#F5F0E8" }}>
                    Herndon, VA · Ashburn · McLean · Loudoun · Fairfax
                  </div>
                </div>
              </div>
            </div>

            {/* Response time + promise */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <Clock size={16} style={{ color: "#C9A84C", flexShrink: 0 }} />
                <div>
                  <div className="text-sm font-medium" style={{ color: "#F5F0E8" }}>We respond within 24 hours</div>
                  <div className="text-xs" style={{ color: "#8A8A8A", fontWeight: 300 }}>
                    Mauricio personally follows up on every inquiry
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="p-5 rounded-2xl"
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
                      Free 3D design consultation · No obligation · You approve everything before we start
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                    We&apos;ll Be in Touch!
                  </h3>
                  <p style={{ color: "#8A8A8A", fontWeight: 300, lineHeight: 1.7 }}>
                    Thank you for reaching out. Mauricio will personally contact you
                    within 24 hours to schedule your free design consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3
                    className="text-2xl font-light mb-6"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                  >
                    Free Consultation Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Full Name *" placeholder="Your full name" value={formData.name} onChange={set("name")} required />
                    <InputField label="Email Address *" type="email" placeholder="your@email.com" value={formData.email} onChange={set("email")} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Phone Number *" type="tel" placeholder="(703) 000-0000" value={formData.phone} onChange={set("phone")} required />
                    <InputField label="City / Zip Code" placeholder="Ashburn, VA 20147" value={formData.city} onChange={set("city")} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SelectField
                      label="Project Type *"
                      value={formData.project}
                      onChange={set("project")}
                      options={[
                        "Custom Deck",
                        "Patio / Hardscaping",
                        "Pergola / Pavilion",
                        "Outdoor Kitchen",
                        "Full Outdoor Living System",
                        "Other",
                      ]}
                    />
                    <SelectField
                      label="Estimated Budget *"
                      value={formData.budget}
                      onChange={set("budget")}
                      options={[
                        "Under $50,000",
                        "$50,000 – $100,000",
                        "$100,000 – $250,000",
                        "$250,000+",
                        "Not sure yet",
                      ]}
                    />
                  </div>

                  <SelectField
                    label="How Did You Find Us?"
                    value={formData.source}
                    onChange={set("source")}
                    options={[
                      "Google Search",
                      "Instagram",
                      "Referral from a Friend",
                      "Houzz",
                      "Nextdoor",
                      "Other",
                    ]}
                  />

                  <TextareaField
                    label="Tell Us About Your Project"
                    placeholder="Describe your vision, property size, current situation, ideal timeline..."
                    value={formData.message}
                    onChange={set("message")}
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm mt-2"
                    style={{ fontSize: "12px", letterSpacing: "0.18em" }}
                  >
                    <Send size={15} />
                    Schedule My Free Consultation
                  </motion.button>

                  <p className="text-center text-xs" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                    No obligation · Free 3D design included · Response within 24 hours
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
  label, placeholder, value, onChange, type = "text", required = false,
}: {
  label: string; placeholder: string; value: string;
  onChange: (v: string) => void; type?: string; required?: boolean;
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
        required={required}
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
        <option value="" disabled style={{ background: "#141414" }}>Select...</option>
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
