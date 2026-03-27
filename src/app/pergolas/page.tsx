"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const scenes = [
  {
    title: "Your Backyard.\nYear-Round.",
    subtitle: "Pergolas & Structures",
    body: "A motorized louvered pergola can add 6–8 months of usable outdoor time to your Northern Virginia home. Rain, sun, or a warm October evening — your outdoor space works for you on your schedule.",
    image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-fire-table-sunset_01.jpg",
    accent: "PERGOLAS & COVERED STRUCTURES",
  },
  {
    title: "Engineered for\nFour Seasons.",
    subtitle: "Built for Virginia Climate",
    body: "Northern Virginia winters are real. Our structures use heavy-gauge aluminum framing, powder-coated finishes that resist rust and fading, and roofing systems rated for snow load and high wind — everything the DMV can throw at it.",
    image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-outdoor-kitchen_01.jpg",
    accent: "CLIMATE-ENGINEERED",
  },
  {
    title: "Every Detail,\nCustomized.",
    subtitle: "Design Options",
    body: "Motorized louvers that open with a remote. Cedar rafters with a custom stain. Hidden LED strips that transform the space at night. Integrated outdoor heaters. Retractable screens. Every element is chosen by you, built by us.",
    image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-seating-fire-table_01.jpg",
    accent: "FULLY CUSTOM",
  },
  {
    title: "See It First,\nThen Build It.",
    subtitle: "See If You Qualify for a Free 3D Design",
    body: "Call today to find out if your project qualifies for a complimentary 3D rendering. You'll see exact dimensions, materials, and integrations before a single permit is filed. You approve every detail. Nothing moves forward until you're completely satisfied.",
    image: "/images/03 - Pergolas & Structures/structure_covered-deck-hot-tub-glass-railing_01.jpg",
    accent: "CALL TO QUALIFY FOR 3D DESIGN",
  },
];

const structureTypes = [
  { name: "Motorized Louvered Pergola", desc: "Adjustable louvers open and close with a remote. Integrated rain sensors available. The most popular option in our catalog." },
  { name: "Fixed Pergola & Arbors", desc: "Classic open-beam structures with customizable stain, post bases, and lattice options. Clean architectural lines." },
  { name: "Screened Porch", desc: "Full perimeter screens with a solid or pitched roof. Keeps insects out while keeping the feel of the outdoors." },
  { name: "Covered Porch", desc: "A solid attached or detached roof structure — can be designed to match your home's roofline exactly." },
  { name: "Pavilion", desc: "Free-standing open structure with a full solid roof. Perfect for pool areas, garden focal points, and large entertainment spaces." },
  { name: "Sunroom Addition", desc: "Three- or four-season glass enclosures that extend your interior living space into the outdoors." },
];

export default function PergolasPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <Navigation />
      <main ref={containerRef}>
        {/* Cinematic Hero */}
        <section className="relative h-screen flex items-end overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y }}>
            <img src={scenes[0].image} alt="Pergola Northern Virginia" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.85) 100%)" }} />
          </motion.div>

          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pb-20">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>{scenes[0].accent}</span>
              </div>
              <h1 className="font-light leading-none mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 9rem)", color: "#F5F0E8" }}>
                {scenes[0].title}
              </h1>
              <p className="mb-8 max-w-lg" style={{ color: "#A0A0A0", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                {scenes[0].body}
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

        {/* Scenes */}
        {scenes.slice(1).map((scene, i) => (
          <section key={i} className="relative min-h-screen flex items-center py-32" style={{ background: i % 2 === 0 ? "#0D0D0D" : "#0A0A0A" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }} />
            <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                    <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>{scene.accent}</span>
                  </div>
                  <h2 className="font-light leading-none mb-6 whitespace-pre-line" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}>
                    {scene.title}
                  </h2>
                  <p style={{ color: "#8A8A8A", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85 }}>
                    {scene.body}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 }}
                  className="overflow-hidden rounded-3xl"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img src={scene.image} alt={scene.subtitle} className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Structure types */}
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
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Structure Types</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
                What We Build
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {structureTypes.map((type, i) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="p-6 rounded-2xl"
                  style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.08)" }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={15} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "3px" }} />
                    <div>
                      <h3 style={{ color: "#F5F0E8", fontSize: "1rem", fontWeight: 500, marginBottom: "6px" }}>{type.name}</h3>
                      <p style={{ color: "#8A8A8A", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.7 }}>{type.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 text-center" style={{ background: "#0A0A0A" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-light mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8" }}>
                Ready to Extend Your Season?
              </h2>
              <p className="mb-8" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Schedule your free on-site consultation. Mauricio will walk your space and show you exactly what&apos;s possible.
                Call today to see if your project qualifies for a free 3D design.
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
