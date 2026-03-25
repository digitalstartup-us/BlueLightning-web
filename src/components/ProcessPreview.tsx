"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "First Meeting",
    subtitle: "On-site at your property",
    description: "We meet at your home, listen to your goals, walk the space, and share current design trends. No pressure — just an honest conversation.",
  },
  {
    number: "02",
    title: "Concept & 3D Design",
    subtitle: "See it before it's built",
    description: "We develop custom 3D renderings so you can visualize your project completely before a single board is cut or a permit is filed.",
  },
  {
    number: "03",
    title: "Agreement",
    subtitle: "You approve everything",
    description: "Nothing moves forward until you've signed off on the design, materials, timeline, and investment. No surprises, ever.",
  },
  {
    number: "04",
    title: "Installation",
    subtitle: "Expert crew, permits included",
    description: "Our certified crew builds with precision. We handle all permits, HOA approvals, and inspections. You get updates throughout.",
  },
];

export default function ProcessPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #0F0F0F 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>How We Work</span>
            </div>
            <h2 className="font-light leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}>
              Your Project.
              <br />
              <em style={{ color: "#C9A84C" }}>Our Process.</em>
            </h2>
          </div>
          <p style={{ color: "#8A8A8A", fontSize: "0.9rem", fontWeight: 300, maxWidth: "300px", lineHeight: 1.7 }}>
            One integrated team handles everything — from the first meeting to the final inspection.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{ background: "linear-gradient(to right, rgba(201,168,76,0.3), transparent)", width: "calc(100% - 56px)", transform: "translateX(28px)" }} />
              )}

              <div
                className="p-6 rounded-2xl h-full relative z-10 transition-all duration-300 group"
                style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)"; }}
              >
                {/* Number */}
                <div
                  className="inline-flex w-14 h-14 rounded-full items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.06))",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#C9A84C", fontWeight: 300 }}>
                    {step.number}
                  </span>
                </div>

                <div className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  {step.subtitle}
                </div>
                <h3 className="font-light mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#F5F0E8" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#8A8A8A", fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {[
              "Class A Licensed — Virginia",
              "Fully Insured — GL + Workers Comp",
              "All Permits & HOA Handled",
              "3D Design Visualization",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
                <span style={{ color: "#8A8A8A", fontSize: "12px", fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="btn-gold px-7 py-3 rounded-xl text-xs cursor-pointer"
              style={{ fontSize: "11px", letterSpacing: "0.15em", whiteSpace: "nowrap" }}
            >
              Schedule Free Consultation
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
