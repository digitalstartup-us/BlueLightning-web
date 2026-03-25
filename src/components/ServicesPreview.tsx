"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Decks",
    description: "Multi-level, pool, covered, and rooftop decks. Trex & TimberTech certified. Projects that last 25–50 years.",
    href: "/custom-decks",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=700&q=80&auto=format",
    tags: ["Trex", "TimberTech", "AZEK"],
  },
  {
    number: "02",
    title: "Patios & Hardscaping",
    description: "Premium paver patios, natural stone, stamped concrete, and retaining walls engineered for Northern Virginia.",
    href: "/patios",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format",
    tags: ["Techo-Bloc", "Unilock", "Natural Stone"],
  },
  {
    number: "03",
    title: "Pergolas & Structures",
    description: "Louvered pergolas, screened porches, pavilions, and sunrooms that extend your living space year-round.",
    href: "/pergolas",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=700&q=80&auto=format",
    tags: ["Louvered", "Screened", "Pavilions"],
  },
  {
    number: "04",
    title: "Outdoor Kitchens",
    description: "Professional-grade outdoor kitchens with JBL audio, Jandy pool systems, and custom lighting integration.",
    href: "/outdoor-kitchens",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80&auto=format",
    tags: ["JBL Audio", "Outdoor Kitchen", "LED Lighting"],
  },
  {
    number: "05",
    title: "Pool Decks",
    description: "Waterfront and pool surrounds designed for safety, beauty, and durability — fully integrated with your pool.",
    href: "/pool-decks",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80&auto=format",
    tags: ["Anti-Slip", "Integrated Drainage", "LED Perimeter"],
  },
  {
    number: "06",
    title: "Full Outdoor Living",
    description: "Our highest-margin service: complete backyard transformation from concept to installation. One team, one vision.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80&auto=format",
    tags: ["Design + Build", "Permits Included", "3D Preview"],
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #111111 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

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
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                What We Build
              </span>
            </div>
            <h2 className="font-light leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8", maxWidth: "600px" }}>
              Six Ways We Transform
              <br />
              <em style={{ color: "#C9A84C" }}>Your Outdoor Space</em>
            </h2>
          </div>
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              View All Services
              <ArrowRight size={13} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.number} service={svc} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/services">
            <motion.div whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "12px" }}>
              View All Services <ArrowRight size={13} />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={service.href} className="group block h-full">
        <motion.div
          whileHover={{ y: -4 }}
          className="h-full overflow-hidden rounded-2xl relative"
          style={{ border: "1px solid rgba(201,168,76,0.1)", background: "#141414" }}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.75) 100%)" }} />
            <div className="absolute top-4 right-4 text-4xl font-light" style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.25)", lineHeight: 1 }}>
              {service.number}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-light mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "#F5F0E8" }}>
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#8A8A8A", fontWeight: 300, fontSize: "0.85rem" }}>
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md text-xs"
                  style={{ border: "1px solid rgba(201,168,76,0.18)", color: "#C9A84C", background: "rgba(201,168,76,0.04)", fontSize: "10px" }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.18em" }}>
                Explore
              </span>
              <ArrowRight size={12} style={{ color: "#C9A84C" }} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)", transformOrigin: "left" }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
