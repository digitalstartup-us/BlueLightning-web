"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Shield, Award, Clock } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=85&auto=format"
          alt="Luxury custom deck Northern Virginia"
          className="w-full h-full object-cover"
          style={{ height: "130%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.7) 0%, rgba(13,13,13,0.3) 40%, rgba(13,13,13,0.6) 70%, rgba(13,13,13,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(13,13,13,0.5) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Floating ambient orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto"
      >
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full"
          style={{
            border: "1px solid rgba(201,168,76,0.3)",
            background: "rgba(201,168,76,0.06)",
          }}
        >
          <Shield size={11} style={{ color: "#C9A84C" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
          >
            Class A Contractor · Trex & TimberTech Certified · Northern Virginia
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="font-light leading-none mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "#F5F0E8",
              letterSpacing: "-0.02em",
            }}
          >
            Built Fast.
          </h1>
          <h1
            className="leading-none mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            <span className="shimmer">Built Right.</span>
          </h1>
          <h1
            className="font-light leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "#F5F0E8",
              letterSpacing: "-0.02em",
            }}
          >
            Built to Impress.
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto my-10 h-px w-32"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="max-w-xl mx-auto mb-12 leading-relaxed"
          style={{
            color: "#8A8A8A",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          We design and build extraordinary outdoor living spaces for homeowners
          across Northern Virginia — from concept to completion, permits included.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold px-10 py-4 rounded-xl text-sm w-full sm:w-auto cursor-pointer"
              style={{ fontSize: "12px", letterSpacing: "0.18em", minWidth: "240px", textAlign: "center" }}
            >
              Schedule Free Consultation
            </motion.div>
          </Link>
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-gold px-10 py-4 rounded-xl text-sm w-full sm:w-auto cursor-pointer"
              style={{ fontSize: "12px", letterSpacing: "0.18em", minWidth: "200px", textAlign: "center" }}
            >
              See Our Work
            </motion.div>
          </Link>
        </motion.div>

        {/* Social proof numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center justify-center gap-8 mt-16 flex-wrap"
        >
          {[
            { value: "100+", label: "Projects Completed", icon: <Award size={14} /> },
            { value: "20yr", label: "Combined Experience", icon: <Clock size={14} /> },
            { value: "$100K+", label: "Average Project Value", icon: <Shield size={14} /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="flex items-center justify-center gap-1 mb-1"
                style={{ color: "#C9A84C" }}
              >
                {stat.icon}
              </div>
              <div
                className="text-2xl font-light"
                style={{ fontFamily: "var(--font-display)", color: "#C9A84C" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-1"
                style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "#8A8A8A", fontSize: "9px" }}
        >
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "#C9A84C" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
