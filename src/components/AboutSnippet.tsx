"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Shield, Users } from "lucide-react";

export default function AboutSnippet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />

      <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>About Us</span>
            </div>

            <h2 className="font-light leading-tight mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F0E8" }}>
              Family-Owned.
              <br />
              <em style={{ color: "#C9A84C" }}>Northern Virginia Built.</em>
            </h2>

            <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.85, marginBottom: "1.5rem" }}>
              Blue Lightning Decks &amp; Patios is a family-owned Design + Build firm founded in 2011 in Herndon, VA.
              With 20+ years of combined experience and 850+ projects completed, we are the Northern Virginia team trusted for complex, high-end outdoor transformations.
              One team, from concept to completion — never subcontracted.
            </p>

            <p style={{ color: "#8A8A8A", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.85, marginBottom: "2rem" }}>
              Bilingual (EN/ES) · Class A Licensed · Trex & TimberTech Certified · 850+ projects delivered across
              Ashburn, McLean, Loudoun, Fairfax, and the entire Northern Virginia metro area.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Shield size={14} />, label: "Class A Contractor" },
                { icon: <Award size={14} />, label: "Trex Certified" },
                { icon: <Award size={14} />, label: "TimberTech Certified" },
                { icon: <Users size={14} />, label: "Bilingual Team" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)", color: "#C9A84C" }}
                >
                  {badge.icon}
                  <span style={{ fontSize: "11px", color: "#A89060" }}>{badge.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 cursor-pointer"
              >
                <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.18em" }}>
                  Meet Our Team
                </span>
                <ArrowRight size={13} style={{ color: "#C9A84C" }} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right: image + overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="/images/DJI_20241106165447_0068_D.JPG"
                alt="Blue Lightning Decks & Patios — Loudoun County VA project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.85) 100%)" }} />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-3 gap-4">
                {[
                  { value: "850+", label: "Projects" },
                  { value: "20yr", label: "Experience" },
                  { value: "14yr", label: "In Business" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#C9A84C", fontWeight: 300 }}>
                      {s.value}
                    </div>
                    <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
