"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ashburn Pool Estate",
    category: "Full Outdoor Living",
    location: "Ashburn, VA",
    image: "/images/DJI_20241106170106_0080_D.JPG",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "Custom Deck + Hot Tub",
    category: "Custom Deck",
    location: "Northern Virginia",
    image: "/images/DSC01228.jpg",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Porcelain Patio + Fire Pit",
    category: "Patio",
    location: "McLean, VA",
    image: "/images/IMG_0969.jpg",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Pool House + Outdoor Kitchen",
    category: "Full Outdoor",
    location: "Loudoun County, VA",
    image: "/images/DJI_20241106165447_0068_D.JPG",
    span: "col-span-1 md:col-span-2",
  },
];

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Portfolio</span>
            </div>
            <h2 className="font-light leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}>
              Real Homes.
              <br />
              <em style={{ color: "#C9A84C" }}>Northern Virginia.</em>
            </h2>
          </div>
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              View Full Portfolio <ArrowRight size={13} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative group overflow-hidden rounded-2xl ${project.span}`}
              style={{ aspectRatio: project.span.includes("col-span-2") ? "16/7" : "4/5" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 transition-all duration-500" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)" }} />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(13,13,13,0.25)" }} />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  {project.category} · {project.location}
                </div>
                <h3 className="font-light text-xl" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}>
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl cursor-pointer"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "12px", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              View Full Portfolio — 850+ Projects
              <ArrowRight size={14} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
