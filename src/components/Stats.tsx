"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed", description: "Across Northern Virginia" },
  { value: 20, suffix: "yr", label: "Combined Experience", description: "Structural & outdoor living experts" },
  { value: 100, suffix: "%", label: "Turnkey Service", description: "Permits, HOA, inspections handled" },
  { value: 3, suffix: "D", label: "Design Preview", description: "See your project before we build" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80&auto=format"
          alt="Blue Lightning Custom Decks — Northern Virginia"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,13,13,0.88)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(13,13,13,0.6) 0%, transparent 50%, rgba(13,13,13,0.6) 100%)",
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <blockquote
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              color: "#F5F0E8",
              fontStyle: "italic",
            }}
          >
            &ldquo;We transform your outdoor space with a seamless experience —
            on time, within budget,{" "}
            <span style={{ color: "#C9A84C" }}>exactly as you imagined.&rdquo;</span>
          </blockquote>
          <p
            className="mt-6 text-sm tracking-widest uppercase"
            style={{ color: "#8A8A8A", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            — Mauricio Caballero, Owner · Blue Lightning Custom Decks LLC
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="text-center group"
            >
              <div
                className="text-5xl md:text-6xl font-light mb-3 transition-all duration-300 group-hover:scale-105"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, #9E7A2E, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div
                className="font-medium mb-2 text-sm tracking-wide"
                style={{ color: "#F5F0E8", letterSpacing: "0.08em" }}
              >
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
