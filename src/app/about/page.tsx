"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Shield, Award, CheckCircle, Users, ArrowRight, Phone } from "lucide-react";

const credentials = [
  { icon: <Shield size={16} />, title: "Class A Contractor", sub: "Virginia Licensed (DPOR)" },
  { icon: <Shield size={16} />, title: "Fully Insured", sub: "General Liability + Workers Comp" },
  { icon: <Award size={16} />, title: "Trex Certified Installer", sub: "Authorized & Trained" },
  { icon: <Award size={16} />, title: "TimberTech Certified", sub: "Authorized & Trained" },
  { icon: <CheckCircle size={16} />, title: "3D Design Visualization", sub: "Every project, before we build" },
  { icon: <CheckCircle size={16} />, title: "Permits & HOA", sub: "Fully managed by our team" },
  { icon: <CheckCircle size={16} />, title: "20+ Years Experience", sub: "Combined field expertise" },
  { icon: <Users size={16} />, title: "Bilingual Team", sub: "English & Spanish" },
];

const materials = [
  { brand: "AZEK", type: "PVC Decking", notes: "Top preference — lifetime warranty, no maintenance" },
  { brand: "Trex", type: "Composite Decking", notes: "25-year warranty, Certified Installer" },
  { brand: "TimberTech", type: "Composite Decking", notes: "30-year warranty, Certified Installer" },
  { brand: "Techo-Bloc", type: "Pavers & Hardscaping", notes: "Engineered for Northern VA climate" },
  { brand: "Unilock", type: "Pavers & Hardscaping", notes: "Premium paver systems" },
  { brand: "JBL", type: "Outdoor Audio", notes: "Professional outdoor audio integration" },
  { brand: "Jandy", type: "Pool Equipment", notes: "Pool & spa systems" },
  { brand: "Natural Stone", type: "Masonry", notes: "Blue stone, travertine, granite" },
];

const values = [
  {
    title: "Design + Build. Always.",
    description: "We don't split the project. Our team handles the full scope — from 3D concept design to the final inspection. One contract, one team, one result.",
  },
  {
    title: "You Approve Everything.",
    description: "Nothing moves forward without your sign-off. You review the design, materials, timeline, and total investment before a single permit is pulled.",
  },
  {
    title: "We Never Leave a Job Unfinished.",
    description: "100+ projects. Not one left incomplete. Every job site is cleaned, every detail is checked, and every client gets a final walkthrough before we close.",
  },
  {
    title: "Premium Materials Only.",
    description: "We only install materials we'd use in our own homes. AZEK, Trex, TimberTech, Techo-Bloc — materials that last 25–50 years, not 5–10.",
  },
];

const serviceAreas = [
  "Ashburn, VA", "McLean, VA", "Herndon, VA", "Sterling, VA",
  "Loudoun County", "Fairfax County", "Arlington, VA", "Great Falls, VA",
  "Reston, VA", "Vienna, VA", "Oakton, VA", "Burke, VA",
  "Prince William County", "Washington DC Metro (DMV)",
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden" style={{ paddingTop: "120px" }}>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=75&auto=format"
              alt="Blue Lightning Custom Decks team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.92) 100%)" }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

          <div ref={heroRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                  About Us
                </span>
              </div>
              <h1 className="font-light leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 7rem)", color: "#F5F0E8" }}>
                Family-Owned.
                <br />
                <em style={{ color: "#C9A84C" }}>Northern Virginia Built.</em>
              </h1>
              <p className="mt-6 max-w-xl" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                A Class A licensed contractor serving high-income homeowners across the DMV with
                premium custom outdoor living spaces since 2019.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-24 md:py-32" style={{ background: "#0A0A0A" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                  <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Our Story</span>
                </div>
                <h2 className="font-light mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                  Built on Experience.
                  <br />Driven by Standards.
                </h2>
                <div className="space-y-5" style={{ color: "#8A8A8A", fontWeight: 300, lineHeight: 1.9 }}>
                  <p>
                    Blue Lightning Custom Decks was founded in 2019 by <strong style={{ color: "#F5F0E8", fontWeight: 500 }}>Mauricio Caballero</strong>,
                    a hands-on builder with over two decades of structural construction and outdoor living experience.
                    What started as a personal commitment to quality has grown into one of Northern Virginia&apos;s most trusted
                    premium outdoor living contractors.
                  </p>
                  <p>
                    Headquartered in Herndon, VA, we operate as a true <strong style={{ color: "#F5F0E8", fontWeight: 500 }}>Design + Build firm</strong> —
                    meaning every project is managed by one integrated team from the first sketch to the final nail.
                    No passing the baton to subcontractors on work that matters.
                  </p>
                  <p>
                    Our clients are typically high-income homeowners who have been burned before by contractors who
                    disappeared mid-project or delivered below expectations. We built our entire process around their biggest fears:
                    surprise costs, poor communication, and unfinished work. We&apos;ve never left a project incomplete.
                  </p>
                  <p>
                    Mauricio personally meets with every prospective client. He walks the property, listens to the vision,
                    and gives an honest assessment of what&apos;s possible. Then we build it — exactly as we said we would.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Values */}
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-6 rounded-xl"
                    style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#C9A84C" }} />
                      <div>
                        <h3 className="font-medium mb-1" style={{ color: "#F5F0E8", fontSize: "1rem" }}>{v.title}</h3>
                        <p style={{ color: "#8A8A8A", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.75 }}>{v.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Leadership</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                The People Behind the Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Mauricio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.7 }}
                className="p-8 rounded-2xl"
                style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="w-20 h-20 rounded-full mb-5 overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(201,168,76,0.4)" }}>
                  <img src="/mauricio.png" alt="Mauricio Caballero — Blue Lightning Custom Decks" className="w-full h-full object-cover object-top" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>
                  Mauricio Caballero
                </h3>
                <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  Owner · Sales Lead · Design Consultant
                </div>
                <p style={{ color: "#8A8A8A", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "12px" }}>
                  20+ years of hands-on construction and design experience. Mauricio personally meets every client, designs every project, and oversees every installation. He believes a premium experience begins before the first board is cut.
                </p>
                <a href="mailto:mc@bluelightning.us" style={{ color: "#C9A84C", fontSize: "12px" }}>mc@bluelightning.us</a>
              </motion.div>

              {/* Walter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="p-8 rounded-2xl"
                style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="w-20 h-20 rounded-full mb-5 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.08)", border: "2px solid rgba(201,168,76,0.2)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#C9A84C" }}>W</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>
                  Walter Caballero
                </h3>
                <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  Operations · Registered Agent
                </div>
                <p style={{ color: "#8A8A8A", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "12px" }}>
                  Walter manages the operational backbone of every project — from permitting and scheduling to HOA coordination. His attention to process ensures projects finish on time and exactly as agreed.
                </p>
                <a href="mailto:info@bluelightning.us" style={{ color: "#C9A84C", fontSize: "12px" }}>info@bluelightning.us</a>
              </motion.div>
            </div>

            {/* Crew note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center mt-8 p-6 rounded-2xl max-w-2xl mx-auto"
              style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.08)" }}
            >
              <p style={{ color: "#8A8A8A", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8 }}>
                Our field crews are <strong style={{ color: "#F5F0E8", fontWeight: 500 }}>certified, uniformed, and arrive in branded Blue Lightning trucks</strong> on every job site.
                Every technician is trained to the same high standard that Mauricio demands for his own projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Credentials */}
        <section className="relative py-24 md:py-32" style={{ background: "#0A0A0A" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Credentials</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                Certified. Licensed. Insured.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  className="p-5 rounded-xl flex items-start gap-3"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                >
                  <div style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ color: "#F5F0E8", fontSize: "0.875rem", fontWeight: 500, marginBottom: "2px" }}>{c.title}</div>
                    <div style={{ color: "#8A8A8A", fontSize: "0.75rem", fontWeight: 300 }}>{c.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Premium Materials</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h3 className="font-light mb-10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "#F5F0E8" }}>
                We Only Install What We&apos;d Use in Our Own Homes
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {materials.map((m, i) => (
                <motion.div
                  key={m.brand}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.6 }}
                  className="p-5 rounded-xl"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                >
                  <div style={{ color: "#C9A84C", fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 300, marginBottom: "4px" }}>{m.brand}</div>
                  <div style={{ color: "#F5F0E8", fontSize: "0.8rem", fontWeight: 500, marginBottom: "4px" }}>{m.type}</div>
                  <div style={{ color: "#8A8A8A", fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.6 }}>{m.notes}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="relative py-24 md:py-32" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Where We Build</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                Serving All of Northern Virginia
              </h2>
              <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300 }}>
                Our crews are based in Herndon, VA and travel throughout the Northern Virginia and DC metro area.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="px-4 py-2 rounded-lg"
                  style={{ border: "1px solid rgba(201,168,76,0.18)", color: "#A89060", background: "rgba(201,168,76,0.04)", fontSize: "13px" }}
                >
                  {area}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-3 btn-gold px-10 py-4 rounded-xl cursor-pointer"
                  style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                >
                  Schedule Free Consultation <ArrowRight size={14} />
                </motion.div>
              </Link>
              <a href="tel:+17034239965" className="flex items-center justify-center gap-2 mt-5" style={{ color: "#C9A84C" }}>
                <Phone size={14} />
                <span style={{ fontSize: "13px", letterSpacing: "0.1em" }}>(703) 423-9965</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
