"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Shield, Award, Clock, Phone, ChevronRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/DJI_20241106170106_0080_D.JPG"
          className="w-full h-full object-cover"
          style={{ height: "100%", width: "100%" }}
        >
          <source src="/video/blue-lightning-brand.mp4" type="video/mp4" />
          <img
            src="/images/DJI_20241106170106_0080_D.JPG"
            alt="Blue Lightning Decks & Patios — Northern Virginia"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,9,9,0.65) 0%, rgba(9,9,9,0.2) 40%, rgba(9,9,9,0.6) 70%, rgba(9,9,9,0.97) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(9,9,9,0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto w-full"
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
            backdropFilter: "blur(10px)",
          }}
        >
          <Shield size={11} style={{ color: "#C9A84C" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#C9A84C", letterSpacing: "0.2em" }}
          >
            Class A Contractor · Est. 2011 · 850+ Projects · Northern Virginia
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

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto my-8 h-px w-32"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="max-w-xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "rgba(245,240,232,0.75)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          We design and build extraordinary outdoor living spaces across Northern Virginia —
          decks, patios, pergolas, and full backyard transformations, permits included.
        </motion.p>

        {/* PRIMARY CTA — Phone (dominant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mb-4"
        >
          <a href="tel:+17034239965" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(201,168,76,0.4)", "0 0 0 14px rgba(201,168,76,0)", "0 0 0 0 rgba(201,168,76,0)"] }}
              transition={{ boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.2 } }}
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl cursor-pointer"
              style={{
                background: "#C9A84C",
                color: "#0D0D0D",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                minWidth: "320px",
              }}
            >
              <Phone size={18} strokeWidth={2.5} />
              Call Now — (703) 423-9965
            </motion.div>
          </a>
          <p className="mt-3 text-xs" style={{ color: "rgba(201,168,76,0.7)", letterSpacing: "0.1em" }}>
            Call today to see if your project qualifies for a free 3D design
          </p>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold px-8 py-3.5 rounded-xl text-sm cursor-pointer flex items-center gap-2"
              style={{ fontSize: "12px", letterSpacing: "0.15em" }}
            >
              Free Consultation <ChevronRight size={13} />
            </motion.div>
          </Link>
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-gold px-8 py-3.5 rounded-xl text-sm cursor-pointer"
              style={{ fontSize: "12px", letterSpacing: "0.15em" }}
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
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            { value: "850+", label: "Projects Completed", icon: <Award size={14} /> },
            { value: "14yr", label: "In Business", icon: <Clock size={14} /> },
            { value: "20yr", label: "Combined Experience", icon: <Shield size={14} /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1" style={{ color: "#C9A84C" }}>
                {stat.icon}
              </div>
              <div className="text-2xl font-light" style={{ fontFamily: "var(--font-display)", color: "#C9A84C" }}>
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(245,240,232,0.5)", fontSize: "10px", letterSpacing: "0.15em" }}>
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
        <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.4)", fontSize: "9px" }}>
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
