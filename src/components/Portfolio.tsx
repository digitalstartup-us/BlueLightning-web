"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Custom Decks", "Patios", "Pergolas", "Outdoor Kitchens", "Full Outdoor"];

const projects = [
  {
    id: 1,
    title: "The Ashburn Estate",
    category: "Full Outdoor",
    location: "Ashburn, VA",
    size: "2,800 sq ft",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=85&auto=format",
    span: "col-span-1 md:col-span-2",
    detail: "Multi-level Trex composite deck + paver patio + pergola + outdoor kitchen",
  },
  {
    id: 2,
    title: "McLean Poolside Retreat",
    category: "Custom Decks",
    location: "McLean, VA",
    size: "1,600 sq ft",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=85&auto=format",
    span: "col-span-1",
    detail: "TimberTech pool deck with integrated cable railings and LED lighting",
  },
  {
    id: 3,
    title: "Loudoun County Farmhouse",
    category: "Patios",
    location: "Loudoun County, VA",
    size: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format",
    span: "col-span-1",
    detail: "Techo-Bloc paver patio with natural stone retaining walls and fire pit",
  },
  {
    id: 4,
    title: "Fairfax Outdoor Kitchen",
    category: "Outdoor Kitchens",
    location: "Fairfax, VA",
    size: "800 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85&auto=format",
    span: "col-span-1",
    detail: "Full outdoor kitchen with JBL audio, refrigerator, grill station, and bar seating",
  },
  {
    id: 5,
    title: "Sterling Covered Pergola",
    category: "Pergolas",
    location: "Sterling, VA",
    size: "1,100 sq ft",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=85&auto=format",
    span: "col-span-1",
    detail: "Louvered aluminum pergola with automated louvers, LED downlights, and outdoor heaters",
  },
  {
    id: 6,
    title: "Herndon Backyard Transformation",
    category: "Full Outdoor",
    location: "Herndon, VA",
    size: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85&auto=format",
    span: "col-span-1 md:col-span-2",
    detail: "AZEK deck + Unilock patio + pavilion + full outdoor kitchen — complete backyard redesign",
  },
];

type Project = typeof projects[number];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }}
      />

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
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                Our Portfolio
              </span>
            </div>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "#F5F0E8",
              }}
            >
              Real Projects.
              <br />
              <em style={{ color: "#C9A84C" }}>Northern Virginia Homes.</em>
            </h2>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all duration-300"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  background: activeCategory === cat ? "linear-gradient(135deg, #9E7A2E, #C9A84C)" : "transparent",
                  color: activeCategory === cat ? "#0D0D0D" : "#8A8A8A",
                  border: activeCategory === cat ? "1px solid transparent" : "1px solid rgba(201,168,76,0.2)",
                  fontWeight: activeCategory === cat ? 600 : 400,
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${project.span}`}
                style={{ aspectRatio: project.span.includes("col-span-2") ? "16/7" : "4/5" }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: "rgba(13,13,13,0.3)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.9)", color: "#0D0D0D" }}
                  >
                    <ZoomIn size={20} />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="text-xs tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: "#C9A84C", fontSize: "10px" }}
                  >
                    {project.category} · {project.location}
                  </div>
                  <h3
                    className="font-light text-xl"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                  >
                    {project.title}
                  </h3>
                  <div className="text-xs mt-1" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                    {project.size}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover"
                style={{ maxHeight: "65vh" }}
              />
              <div
                className="p-6 flex items-start justify-between gap-4"
                style={{ background: "#141414", borderTop: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div>
                  <h3
                    className="text-2xl font-light"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "#C9A84C", fontSize: "11px" }}>
                    {selectedProject.location} · {selectedProject.size}
                  </p>
                  <p className="text-sm mt-2" style={{ color: "#8A8A8A", fontSize: "13px", fontWeight: 300 }}>
                    {selectedProject.detail}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
