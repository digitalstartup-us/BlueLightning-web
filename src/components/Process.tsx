"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "First Meeting",
    subtitle: "Getting to know you and your vision.",
    description:
      "We meet at your property, listen to your goals, walk the space, and share current design trends. No pressure, no sales pitch — just an honest conversation about what's possible.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Concept Discussion",
    subtitle: "Turning your ideas into a real plan.",
    description:
      "We develop custom design concepts with full 3D renderings so you can see your project before a single board is cut. We make recommendations based on your lifestyle, space, and budget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Agreement Confirmation",
    subtitle: "You're 100% in control.",
    description:
      "We review every detail together until you're completely satisfied. Nothing moves forward until you've approved the design, materials, timeline, and investment. No surprises, ever.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Design & Installation",
    subtitle: "Expert execution by a specialized team.",
    description:
      "Our certified crews build your project with precision. We handle all permits, HOA approvals, and inspections — completely. You receive regular updates throughout. We don't leave until the job is done right.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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
            Your Project.{" "}
            <em style={{ color: "#C9A84C" }}>Our System.</em>
          </h2>
          <p
            className="mt-6 max-w-xl mx-auto"
            style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            A proven 4-step process that keeps you in control from the first conversation
            to the final walkthrough. No subcontractors. No surprises.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
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

        {/* Trust callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          {[
            { label: "Fully Licensed", detail: "Class A Contractor — Virginia" },
            { label: "Fully Insured", detail: "General Liability + Workers Comp" },
            { label: "Permits Included", detail: "HOA approvals & inspections handled" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-sm font-medium mb-1" style={{ color: "#C9A84C" }}>
                {item.label}
              </div>
              <div className="text-xs" style={{ color: "#8A8A8A", fontWeight: 300 }}>
                {item.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="mb-8" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300 }}>
            Ready to start your transformation?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-12 py-4 rounded-xl text-sm inline-flex"
            style={{ fontSize: "12px", letterSpacing: "0.18em" }}
          >
            Schedule Your Free Consultation
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
      <div
        className="relative inline-flex md:flex w-14 h-14 rounded-full items-center justify-center mb-6 mx-auto md:mx-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))",
          border: "1px solid rgba(201,168,76,0.3)",
          color: "#C9A84C",
        }}
      >
        {step.icon}
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

      <div
        className="text-xs tracking-widest uppercase mb-2"
        style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.15em" }}
      >
        {step.subtitle}
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
