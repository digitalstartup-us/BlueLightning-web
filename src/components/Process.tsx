"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your vision, lifestyle, and aspirations for your outdoor space.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our master designers craft a bespoke concept with 3D renderings, material selections, and detailed plans tailored to your property.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Our master craftsmen bring the vision to life with precision, using only premium materials and time-honored techniques.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Reveal",
    description:
      "Experience the transformation as your extraordinary outdoor sanctuary is unveiled — a space designed to be lived in and loved.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #111111 50%, #0D0D0D 100%)",
        }}
      />

      {/* Subtle gold glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
              How We Work
            </span>
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
          </div>
          <h2
            className="font-light"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "#F5F0E8",
            }}
          >
            The Art of{" "}
            <em style={{ color: "#C9A84C" }}>Creation</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-16 left-0 right-0 h-px hidden md:block"
            style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="mb-8" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300 }}>
            Ready to begin your transformation?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-12 py-4 rounded-xl text-sm inline-flex"
            style={{ fontSize: "12px", letterSpacing: "0.18em" }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative text-center md:text-left group"
    >
      {/* Icon circle */}
      <div className="relative inline-flex md:flex w-14 h-14 rounded-full items-center justify-center mb-6 mx-auto md:mx-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))",
          border: "1px solid rgba(201,168,76,0.3)",
          color: "#C9A84C",
        }}
      >
        {step.icon}

        {/* Number badge */}
        <div
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{
            background: "linear-gradient(135deg, #9E7A2E, #C9A84C)",
            color: "#0D0D0D",
            fontSize: "9px",
          }}
        >
          {index + 1}
        </div>
      </div>

      <h3
        className="text-xl font-light mb-3"
        style={{ fontFamily: "var(--font-display)", color: "#F5F0E8", fontSize: "1.6rem" }}
      >
        {step.title}
      </h3>
      <p style={{ color: "#8A8A8A", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>
        {step.description}
      </p>
    </motion.div>
  );
}
