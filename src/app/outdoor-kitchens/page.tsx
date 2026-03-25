"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const kitchenFeatures = [
  { name: "Professional Grill Stations", desc: "Built-in gas or kamado grills, rotisserie options, dual-zone cooking surfaces." },
  { name: "Custom Cabinetry & Countertops", desc: "Weatherproof HDPE or stainless cabinetry with granite or porcelain countertops." },
  { name: "Outdoor Refrigeration & Bar", desc: "Under-counter refrigerators, wine coolers, built-in kegerators, and full bar setups." },
  { name: "JBL Outdoor Audio", desc: "Professional-grade JBL speaker systems integrated into your structure for immersive outdoor sound." },
  { name: "Sink & Plumbing Integration", desc: "Full running water, hot and cold, with proper drainage and freeze protection for Virginia winters." },
  { name: "Custom LED Lighting", desc: "Under-counter, overhead, and accent lighting that transforms the space from afternoon to evening." },
  { name: "Pizza Ovens & Specialty Stations", desc: "Wood-fired or gas pizza ovens, flat tops, smokers, and specialty cooking stations." },
  { name: "Outdoor TV & Entertainment", desc: "Weatherproof outdoor TV mounting, cable management, and full AV integration." },
];

export default function OutdoorKitchensPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Navigation />
      <main ref={containerRef}>
        {/* Hero */}
        <section className="relative h-screen flex items-end overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y }}>
            <img src="/images/DJI_20241106165447_0068_D.JPG" alt="Outdoor kitchen Northern Virginia — Blue Lightning" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.88) 100%)" }} />
          </motion.div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>OUTDOOR KITCHENS</span>
              </div>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 9rem)", color: "#F5F0E8" }}>
                Your Best Room
                <br />
                <em style={{ color: "#C9A84C" }}>Is Outside.</em>
              </h1>
              <p className="mb-8 max-w-lg" style={{ color: "#A0A0A0", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                A fully equipped outdoor kitchen is the single highest-ROI outdoor investment a Northern Virginia homeowner can make. We design and build them from scratch — no kits, no shortcuts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.03 }} className="btn-gold px-8 py-4 rounded-xl cursor-pointer flex items-center gap-3" style={{ fontSize: "12px", letterSpacing: "0.15em" }}>
                    Schedule Free Consultation <ArrowRight size={14} />
                  </motion.div>
                </Link>
                <a href="tel:+17034239965">
                  <motion.div whileHover={{ scale: 1.03 }} className="btn-outline-gold px-8 py-4 rounded-xl flex items-center gap-3" style={{ fontSize: "12px" }}>
                    <Phone size={14} /> (703) 423-9965
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why outdoor kitchen */}
        <section className="py-24 md:py-32" style={{ background: "#0A0A0A" }}>
          <div className="absolute top-0 h-px left-0 right-0" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                  <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Why It Matters</span>
                </div>
                <h2 className="font-light mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 4rem)", color: "#F5F0E8" }}>
                  The Anchor of Every
                  <br />Great Outdoor Space
                </h2>
                <div className="space-y-4" style={{ color: "#8A8A8A", fontWeight: 300, lineHeight: 1.9 }}>
                  <p>
                    An outdoor kitchen turns a backyard into a destination. It&apos;s the reason guests stay until midnight.
                    It&apos;s the reason families move dinner outside in April and keep it there through October.
                  </p>
                  <p>
                    In Northern Virginia&apos;s high-end real estate market, a fully equipped outdoor kitchen adds
                    <strong style={{ color: "#F5F0E8", fontWeight: 500 }}> measurable appraised value</strong> to your property —
                    not just lifestyle value, real market value.
                  </p>
                  <p>
                    We design every kitchen around how you actually cook and entertain — not around a catalogue.
                    Your layout, your appliances, your countertop material, your lighting. Our expertise.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="overflow-hidden rounded-3xl"
                style={{ aspectRatio: "4/3" }}
              >
                <img src="/images/DJI_20241106170106_0080_D.JPG" alt="Outdoor kitchen design — Blue Lightning" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-24 md:py-32" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 h-px left-0 right-0" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>What We Include</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                Built Complete. Zero Compromises.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kitchenFeatures.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  className="p-5 rounded-xl"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle size={13} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "3px" }} />
                    <h3 style={{ color: "#F5F0E8", fontSize: "0.9rem", fontWeight: 500 }}>{feature.name}</h3>
                  </div>
                  <p style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300, lineHeight: 1.7 }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated systems */}
        <section className="py-24 md:py-32" style={{ background: "#0A0A0A" }}>
          <div className="absolute top-0 h-px left-0 right-0" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="overflow-hidden rounded-3xl order-2 lg:order-1"
                style={{ aspectRatio: "4/3" }}
              >
                <img src="/images/IMG_0969.jpg" alt="Outdoor living integration — Blue Lightning" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                  <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Technology Integration</span>
                </div>
                <h2 className="font-light mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 4rem)", color: "#F5F0E8" }}>
                  Sound. Light. Control.
                </h2>
                <p className="mb-6" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.85 }}>
                  Every outdoor kitchen we build can be integrated with JBL professional outdoor audio systems,
                  custom LED lighting zones, weatherproof TV mounting, and smart controls — all managed from
                  your phone or a built-in control panel.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["JBL Pro Outdoor Audio", "Jandy Pool/Spa Integration", "Smart LED Zones", "Weatherproof AV", "Custom Control Panels"].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg" style={{ border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C", background: "rgba(201,168,76,0.04)", fontSize: "11px" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 text-center" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 h-px left-0 right-0" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-light mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}>
                Let&apos;s Design Your Outdoor Kitchen.
              </h2>
              <p className="mb-8" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Free on-site consultation. 3D design visualization included. Outdoor kitchens start at $120,000
                for a fully equipped installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.04 }} className="btn-gold px-10 py-4 rounded-xl cursor-pointer flex items-center gap-3" style={{ fontSize: "12px", letterSpacing: "0.15em" }}>
                    Schedule Free Consultation <ArrowRight size={14} />
                  </motion.div>
                </Link>
                <a href="tel:+17034239965">
                  <motion.div whileHover={{ scale: 1.04 }} className="btn-outline-gold px-8 py-4 rounded-xl flex items-center gap-2" style={{ fontSize: "12px" }}>
                    <Phone size={14} /> (703) 423-9965
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
