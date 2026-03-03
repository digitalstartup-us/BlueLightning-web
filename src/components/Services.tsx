"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Signature Decks",
    subtitle: "Masterfully Crafted",
    description:
      "Custom-designed decks built with exotic hardwoods, composite materials, and precision joinery that elevate your outdoor experience to new heights.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format",
    features: ["Exotic Hardwoods", "Custom Design", "Premium Hardware"],
    href: "/pool-decks",
    cta: "Explore Pool Decks",
  },
  {
    number: "02",
    title: "Pergolas & Pavilions",
    subtitle: "Architectural Elegance",
    description:
      "Stunning overhead structures that create defined outdoor rooms — from intimate pergolas to grand pavilions with integrated lighting and fans.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80&auto=format",
    features: ["Integrated Lighting", "Climate Control", "Custom Roofing"],
  },
  {
    number: "03",
    title: "Outdoor Kitchens",
    subtitle: "Culinary Excellence",
    description:
      "Professional-grade outdoor kitchens with premium appliances, natural stone countertops, and custom cabinetry for the ultimate alfresco dining.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format",
    features: ["Pro Appliances", "Stone Countertops", "Custom Cabinetry"],
  },
  {
    number: "04",
    title: "Fire & Water Features",
    subtitle: "Sensory Luxury",
    description:
      "Custom fire pits, fireplaces, fountains, and water walls that transform your outdoor space into a multi-sensory luxury retreat.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80&auto=format",
    features: ["Fire Features", "Water Elements", "Ambient Lighting"],
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
              What We Create
            </span>
          </div>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "#F5F0E8",
              maxWidth: "600px",
            }}
          >
            Spaces That
            <br />
            <em style={{ color: "#C9A84C" }}>Inspire</em>
          </h2>
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
        {/* Number */}
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
      <div
        className="p-8"
        style={{ background: "#141414" }}
      >
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

        {/* CTA Link for Pool Decks */}
        {service.href && (
          <Link href={service.href}
            className="mt-6 inline-flex items-center gap-2 group/cta"
          >
            <span className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.18em" }}>
              {service.cta}
            </span>
            <ArrowRight size={12} style={{ color: "#C9A84C" }}
              className="transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        )}

        {/* Hover line */}
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
