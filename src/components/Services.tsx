"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Decks",
    subtitle: "Our Highest Revenue Service",
    description:
      "Multi-level decks, pool decks, covered decks, rooftop decks, and underdeck systems — all built with premium composite and PVC materials from Trex, TimberTech, and AZEK. IRC code compliant with structural expertise as a core strength.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format",
    features: ["Multi-Level Decks", "Cable & Glass Railings", "Trex / TimberTech / AZEK", "Underdeck Systems"],
    href: "/custom-decks",
    cta: "Explore Custom Decks",
  },
  {
    number: "02",
    title: "Patios & Hardscaping",
    subtitle: "Transforming Outdoor Spaces",
    description:
      "Paver patios, stamped concrete, natural stone, and porcelain tile that turn your backyard into a living masterpiece. Includes retaining walls, built-in fire pits, and outdoor kitchen integration using premium Techo-Bloc and Unilock pavers.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format",
    features: ["Techo-Bloc & Unilock Pavers", "Natural Stone", "Retaining Walls", "Built-In Fire Pits"],
    href: "/patios",
    cta: "Explore Patios",
  },
  {
    number: "03",
    title: "Structures & Covered Spaces",
    subtitle: "Architectural Elegance",
    description:
      "Covered porches, screened porches, louvered pergolas, pavilions, and sunrooms — fully customizable and integrated with your deck or patio. Every structure is designed to extend your living space year-round.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80&auto=format",
    features: ["Louvered Pergolas", "Screened Porches", "Pavilions", "Sunrooms"],
  },
  {
    number: "04",
    title: "Full Outdoor Living Systems",
    subtitle: "Complete Backyard Transformation",
    description:
      "Our highest-margin service: deck + patio + pergola + outdoor kitchen + integrated lighting + audio — a full backyard transformation from one team. Includes JBL outdoor audio, Jandy pool equipment, custom LED systems, and outdoor entertainment.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format",
    features: ["JBL Outdoor Audio", "Outdoor Kitchens", "Custom LED Lighting", "Jandy Pool Equipment"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D0D0D 0%, #111111 50%, #0D0D0D 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#C9A84C", fontSize: "11px" }}
            >
              What We Build
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "#F5F0E8",
                maxWidth: "600px",
              }}
            >
              Design + Build.
              <br />
              <em style={{ color: "#C9A84C" }}>One Team. One Vision.</em>
            </h2>
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "0.9rem",
                fontWeight: 300,
                maxWidth: "320px",
                lineHeight: 1.7,
              }}
            >
              Every project includes full design, 3D visualization, permits,
              HOA approvals, and expert installation — no subcontracting.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ border: "1px solid rgba(201,168,76,0.1)" }}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.8) 100%)",
          }}
        />
        <div
          className="absolute top-4 right-4 text-5xl font-light"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(201,168,76,0.3)",
            lineHeight: 1,
          }}
        >
          {service.number}
        </div>
      </div>

      {/* Content */}
      <div className="p-8" style={{ background: "#141414" }}>
        <div
          className="text-xs tracking-[0.25em] uppercase mb-2"
          style={{ color: "#C9A84C", fontSize: "10px" }}
        >
          {service.subtitle}
        </div>
        <h3
          className="font-light mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            color: "#F5F0E8",
          }}
        >
          {service.title}
        </h3>
        <p
          className="leading-relaxed mb-6"
          style={{ color: "#8A8A8A", fontSize: "0.9rem", fontWeight: 300 }}
        >
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1.5 rounded-lg text-xs"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#C9A84C",
                background: "rgba(201,168,76,0.04)",
                fontSize: "10px",
                letterSpacing: "0.1em",
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {service.href && (
          <Link
            href={service.href}
            className="mt-6 inline-flex items-center gap-2 group/cta"
          >
            <span
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.18em" }}
            >
              {service.cta}
            </span>
            <ArrowRight
              size={12}
              style={{ color: "#C9A84C" }}
              className="transition-transform duration-300 group-hover/cta:translate-x-1"
            />
          </Link>
        )}

        <motion.div
          className="mt-4 h-px"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          style={{
            background: "linear-gradient(to right, #C9A84C, transparent)",
            transformOrigin: "left",
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
