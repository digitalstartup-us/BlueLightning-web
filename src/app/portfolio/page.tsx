"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Phone } from "lucide-react";

const categories = ["All", "Custom Decks", "Pool Decks", "Patios", "Pergolas", "Full Outdoor", "Driveways"];

const projects = [
  { id: 1,  title: "Ashburn Pool Estate — Aerial",         location: "Ashburn, VA",         category: "Full Outdoor",    desc: "Complete outdoor transformation: pool surround, fire pit lounge, outdoor kitchen, pavilion, and porcelain hardscape.",              image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_aerial-pool-house-afternoon_01.jpg", material: "Porcelain · Composite · Stone",      cols: 2 },
  { id: 2,  title: "Multi-Level Composite Deck",           location: "Northern Virginia",    category: "Custom Decks",    desc: "Wide-view multi-level composite deck with black cable railing and custom stair system integrated into a sloped backyard.",           image: "/images/01 - Custom Decks/deck_composite-gray-black-railing-wide-view_01.jpg",            material: "Composite · Cable Railing",         cols: 1 },
  { id: 3,  title: "Porcelain Patio + Outdoor Kitchen",   location: "McLean, VA",           category: "Patios",          desc: "Porcelain patio with built-in outdoor kitchen, fire table, and seamless transition between living and dining zones.",               image: "/images/02 - Patios & Hardscaping/patio_porcelain-gray-fire-table-outdoor-kitchen_01.jpg", material: "Porcelain · Stone",                 cols: 1 },
  { id: 4,  title: "Pool at Dusk — Aerial View",          location: "Loudoun County, VA",   category: "Pool Decks",      desc: "Aerial sunset shot of a luxury pool with porcelain deck, fire pit, cabana structure, and landscape lighting.",                    image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_aerial-pool-dusk_01.jpg",             material: "Porcelain · LED Lighting",          cols: 2 },
  { id: 5,  title: "Louvered Pergola + Fire Table",       location: "Ashburn, VA",          category: "Pergolas",        desc: "Motorized louvered pergola in dark gray aluminum with integrated fire table and custom outdoor seating at sunset.",               image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-fire-table-sunset_01.jpg",    material: "Aluminum · Custom Seating",         cols: 1 },
  { id: 6,  title: "Covered Deck + Hot Tub + Glass Rail", location: "Fairfax, VA",          category: "Custom Decks",    desc: "Covered deck with full glass panel railing, built-in hot tub, and sunset views. Structural integration with existing roofline.",  image: "/images/03 - Pergolas & Structures/structure_covered-deck-hot-tub-glass-railing_01.jpg",    material: "Composite · Glass Railing",         cols: 1 },
  { id: 7,  title: "Pool Night Lighting — Aerial",        location: "Northern Virginia",    category: "Pool Decks",      desc: "Drone shot of a luxury pool and patio system at night — perimeter lighting, fire pit, and covered structure all illuminated.",    image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_aerial-pool-night_01.jpg",             material: "Porcelain · LED Systems",           cols: 2 },
  { id: 8,  title: "Outdoor Kitchen + Pergola System",    location: "Herndon, VA",          category: "Patios",          desc: "Dark gray louvered pergola with built-in outdoor kitchen, grill station, and fire pit — perfect for year-round entertaining.",   image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-outdoor-kitchen_01.jpg",       material: "Aluminum · Masonry · Steel",        cols: 1 },
  { id: 9,  title: "Multi-Level Deck + Black Railing",    location: "Northern Virginia",    category: "Custom Decks",    desc: "White PVC deck with black balusters, multi-level stair system, and a clean modern contrast against a wooded Virginia lot.",       image: "/images/01 - Custom Decks/deck_white-black-railing-multi-level_01.jpg",                     material: "PVC · Black Metal Railing",         cols: 1 },
  { id: 10, title: "Porcelain Pool + Blue Water",         location: "McLean, VA",           category: "Pool Decks",      desc: "Modern porcelain pool surround with blue-finish pool, clean geometric lines, and premium drainage integration.",                 image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_porcelain-blue-pool-house_01.jpg",      material: "Outdoor Porcelain",                 cols: 1 },
  { id: 11, title: "Premium Outdoor Kitchen — Marble",    location: "Great Falls, VA",      category: "Full Outdoor",    desc: "White cabinetry, marble island, and professional-grade grill station — an outdoor kitchen that rivals any indoor design.",       image: "/images/04 - Outdoor Kitchens/outdoor-kitchen_white-cabinets-marble-island-grill_01.jpg",    material: "Stone · Marble · Stainless Steel",  cols: 1 },
  { id: 12, title: "Pool Estate — Evening Aerial",        location: "Loudoun County, VA",   category: "Full Outdoor",    desc: "Complete outdoor living system at dusk: pool, fire pit, covered structure, outdoor kitchen, and landscape lighting.",             image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_aerial-pool-firepit-evening_01.jpg",    material: "Porcelain · TimberTech · Aluminum", cols: 2 },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

          <div ref={headerRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>850+ Projects Completed</span>
              </div>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 9rem)", color: "#F5F0E8" }}>
                Our Work.
              </h1>
              <p className="max-w-2xl" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Real projects, real homes, real Northern Virginia. Every image is from an actual Blue Lightning Decks &amp; Patios installation.
                No stock photos, no renders — what you see is exactly what we build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="sticky top-20 z-30 py-4" style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    background: activeCategory === cat ? "#C9A84C" : "transparent",
                    color: activeCategory === cat ? "#0D0D0D" : "#8A8A8A",
                    border: `1px solid ${activeCategory === cat ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
                    fontWeight: activeCategory === cat ? 600 : 400,
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid — larger, more impactful */}
        <section className="py-12 md:py-16" style={{ background: "#0A0A0A" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`group overflow-hidden rounded-2xl relative cursor-pointer ${project.cols === 2 ? "md:col-span-2" : ""}`}
                    style={{ aspectRatio: project.cols === 2 ? "16/8" : "3/4" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient always visible at bottom */}
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(9,9,9,0.92) 0%, rgba(9,9,9,0.3) 50%, rgba(9,9,9,0.05) 100%)" }} />

                    {/* Category badge */}
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full" style={{ background: "rgba(9,9,9,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,168,76,0.3)" }}>
                      <span style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.12em" }}>{project.category}</span>
                    </div>

                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-xs tracking-[0.2em] uppercase mb-1.5" style={{ color: "rgba(201,168,76,0.7)", fontSize: "10px" }}>
                        {project.location} · {project.material}
                      </div>
                      <h3 className="font-light leading-tight mb-2" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8", fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                        {project.title}
                      </h3>
                      <p
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 mb-4"
                        style={{ color: "#A0A0A0", fontWeight: 300, lineHeight: 1.7, fontSize: "0.82rem", maxHeight: "60px", overflow: "hidden" }}
                      >
                        {project.desc}
                      </p>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <Link href="/contact">
                          <span className="text-xs tracking-widest uppercase px-4 py-2 rounded-lg inline-block" style={{ background: "#C9A84C", color: "#0D0D0D", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em" }}>
                            Get a Similar Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase mb-6 inline-block" style={{ color: "#C9A84C", fontSize: "11px" }}>
                Start Your Project
              </span>
              <h2 className="font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#F5F0E8" }}>
                Ready to Add Your Project
                <br />
                <em style={{ color: "#C9A84C" }}>to This List?</em>
              </h2>
              <p className="mb-10 max-w-lg mx-auto" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Call today and find out if your project qualifies for a free 3D design rendering. Mauricio meets personally with every homeowner.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+17034239965">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-gold px-10 py-4 rounded-xl cursor-pointer flex items-center gap-3" style={{ fontSize: "13px", letterSpacing: "0.12em" }}>
                    <Phone size={15} /> Call Now — (703) 423-9965
                  </motion.div>
                </a>
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.04 }} className="btn-outline-gold px-8 py-4 rounded-xl cursor-pointer flex items-center gap-3" style={{ fontSize: "12px", letterSpacing: "0.12em" }}>
                    Free Consultation <ArrowRight size={14} />
                  </motion.div>
                </Link>
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
