"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play, Phone, X, Volume2, Maximize2 } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Jennifer & Michael Torres",
    location: "Ashburn, VA",
    project: "Multi-Level Deck + Pergola + Outdoor Kitchen",
    quote:
      "Blue Lightning transformed our entire backyard. The team walked us through every decision, the 3D design was spot on, and the crew finished on time. Our neighbors can't believe it's the same house. Worth every penny.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format",
  },
  {
    id: 2,
    name: "David & Patricia Nguyen",
    location: "McLean, VA",
    project: "TimberTech Pool Deck + Louvered Pergola",
    quote:
      "We'd been burned by a contractor before and were nervous. Blue Lightning was completely different — professional, bilingual, and they handled every permit and HOA approval without us lifting a finger. The pool deck is stunning.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format",
  },
  {
    id: 3,
    name: "Robert & Sarah Pemberton",
    location: "Loudoun County, VA",
    project: "Full Backyard Transformation — Deck, Patio, Kitchen & Fire Pit",
    quote:
      "We gave them an ambitious vision: deck, patio, pavilion, outdoor kitchen, fire pit, and integrated audio. They delivered everything flawlessly. True craftsmen. I'd hire them again tomorrow for our vacation property.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format",
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Blue Lightning — Brand Story",
    role: "Company Overview",
    label: "Featured",
    description: "See who we are, what we build, and why Northern Virginia homeowners choose Blue Lightning for their most important outdoor investments.",
    poster: "/images/DJI_20241106170106_0080_D.JPG",
    video: "/video/blue-lightning-brand.mp4",
    featured: true,
  },
  {
    id: 2,
    name: "Mauricio Caballero",
    role: "CEO & Design Consultant",
    label: "Meet the Team",
    description: "Mauricio shares his vision for premium outdoor living and what sets Blue Lightning apart from every other contractor in Northern Virginia.",
    poster: "/mauricio-new.jpg",
    video: "/video/Bluelightning-Commercial_Media_We15OeWTcy4_001_1080p.mp4",
    featured: false,
  },
  {
    id: 3,
    name: "Client Testimonial",
    role: "Northern Virginia Homeowner",
    label: "Video Review",
    description: "A real Blue Lightning client shares their experience from first consultation to project completion.",
    poster: "/images/DJI_20241106165447_0068_D.JPG",
    video: "/video/Bluelightning-Testimonial_Media_zDr6eLoNBkw_001_1080p.mp4",
    featured: false,
  },
  {
    id: 4,
    name: "Customer Story",
    role: "Ashburn, VA",
    label: "Project Story",
    description: "Watch how a complete backyard transformation came to life — from the first design call to the final reveal.",
    poster: "/images/DSC01228.jpg",
    video: "/video/Customer-Testimony_Media_B18zmAztuHU_001_1080p.mp4",
    featured: false,
  },
];

/* ─── Video Modal (Theater Mode) ─────────────────────────── */
function VideoModal({
  item,
  onClose,
}: {
  item: typeof videoTestimonials[0];
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => videoRef.current?.play(), 200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
      style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#F5F0E8" }}
      >
        <X size={18} />
      </motion.button>

      {/* Video container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
        style={{ maxWidth: "1000px", padding: "0 16px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "16/9", background: "#000" }}>
          <video
            ref={videoRef}
            src={item.video}
            poster={item.poster}
            controls
            playsInline
            className="w-full h-full object-contain"
            style={{ background: "#000" }}
          />
        </div>

        {/* Info bar below video */}
        <div className="flex items-start justify-between mt-5 px-1">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs px-2.5 py-0.5 rounded-full"
                style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {item.label}
              </span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#F5F0E8", fontWeight: 300 }}>
              {item.name}
            </h3>
            <p style={{ color: "#8A8A8A", fontSize: "13px", marginTop: "4px" }}>{item.role}</p>
          </div>
          <div className="hidden sm:block max-w-xs">
            <p style={{ color: "#666", fontSize: "12px", lineHeight: 1.65, textAlign: "right" }}>{item.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Escape hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-5"
        style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.12em" }}
      >
        Press ESC to close
      </motion.p>
    </motion.div>
  );
}

/* ─── Featured Video Card ────────────────────────────────── */
function FeaturedVideoCard({ item, onOpen }: { item: typeof videoTestimonials[0]; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.15)" }}
      onClick={onOpen}
    >
      <img
        src={item.poster}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        style={{ transform: "scale(1.01)" }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)" }} />
      <div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Featured badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-xs px-3 py-1.5 rounded-full"
          style={{ background: "rgba(201,168,76,0.9)", color: "#0D0D0D", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          ▶ FEATURED VIDEO
        </span>
      </div>

      {/* Center play button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(201,168,76,0.3)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.7, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(201,168,76,0.15)" }}
          />
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: "rgba(201,168,76,0.92)", backdropFilter: "blur(8px)" }}
          >
            <Play size={28} fill="#0D0D0D" stroke="none" style={{ marginLeft: "4px" }} />
          </motion.div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "#F5F0E8", fontWeight: 300, marginBottom: "6px" }}>
          {item.name}
        </h3>
        <p style={{ color: "#C9A84C", fontSize: "12px", letterSpacing: "0.08em", marginBottom: "6px" }}>{item.role}</p>
        <p style={{ color: "rgba(245,240,232,0.7)", fontSize: "13px", fontWeight: 300, lineHeight: 1.6, maxWidth: "480px" }}>
          {item.description}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Volume2 size={13} style={{ color: "rgba(201,168,76,0.7)" }} />
          <span style={{ color: "rgba(201,168,76,0.7)", fontSize: "10px", letterSpacing: "0.12em" }}>CLICK TO WATCH WITH SOUND</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Small Video Card ────────────────────────────────────── */
function SmallVideoCard({ item, index, onOpen }: { item: typeof videoTestimonials[0]; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      style={{ aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.1)" }}
      onClick={onOpen}
    >
      <img
        src={item.poster}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 transition-colors duration-300"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%)" }} />
      <div className="absolute inset-0 group-hover:bg-black/15 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-xs px-2.5 py-1 rounded-full"
          style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {item.label}
        </span>
      </div>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: "rgba(201,168,76,0.85)", backdropFilter: "blur(8px)", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
        >
          <Play size={16} fill="#0D0D0D" stroke="none" style={{ marginLeft: "2px" }} />
        </motion.div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "#F5F0E8", fontWeight: 300 }}>{item.name}</div>
        <div style={{ color: "#C9A84C", fontSize: "10px", marginTop: "2px", letterSpacing: "0.05em" }}>{item.role}</div>
      </div>

      {/* Expand hint on hover */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <Maximize2 size={11} style={{ color: "rgba(255,255,255,0.7)" }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeVideo, setActiveVideo] = useState<typeof videoTestimonials[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const featured = videoTestimonials[0];
  const secondary = videoTestimonials.slice(1);

  return (
    <>
      {/* ── Written Testimonials ── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0D0D0D" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

        <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Client Stories</span>
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5F0E8" }}>
              Northern Virginia Homeowners{" "}<em style={{ color: "#C9A84C" }}>Trust Us</em>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute -top-8 left-0 text-9xl font-light leading-none select-none pointer-events-none"
              style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.08)", lineHeight: 1 }}>
              &ldquo;
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current} custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
                style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C9A84C" stroke="none" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-display)", color: "#F5F0E8", fontStyle: "italic" }}>
                  {testimonials[current].quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <img src={testimonials[current].avatar} alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover" style={{ border: "2px solid rgba(201,168,76,0.4)" }} />
                  <div>
                    <div className="font-medium text-sm" style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}>{testimonials[current].name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#C9A84C", fontSize: "11px" }}>{testimonials[current].project}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#8A8A8A", fontSize: "11px" }}>{testimonials[current].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i === current ? "24px" : "8px", height: "8px", background: i === current ? "#C9A84C" : "rgba(201,168,76,0.25)" }} />
                ))}
              </div>
              <div className="flex gap-2">
                {[{ dir: -1, Icon: ChevronLeft }, { dir: 1, Icon: ChevronRight }].map(({ dir, Icon }) => (
                  <motion.button key={dir} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => navigate(dir)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", background: "transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
                    <Icon size={16} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Video References</span>
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-light mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#F5F0E8" }}>
              See the Results.{" "}<em style={{ color: "#C9A84C" }}>Hear the Stories.</em>
            </h2>
            <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
              Real homeowners, real projects, real experiences — in their own words.
            </p>
          </motion.div>

          {/* Featured + thumbnails layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
            {/* Featured (left, 3/5) */}
            <div className="lg:col-span-3">
              <FeaturedVideoCard item={featured} onOpen={() => setActiveVideo(featured)} />
            </div>

            {/* Secondary 3 stacked right (2/5) */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-4">
              {secondary.map((item, i) => (
                <SmallVideoCard key={item.id} item={item} index={i} onOpen={() => setActiveVideo(item)} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center">
            <p className="mb-6" style={{ color: "#8A8A8A", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}>
              Ready to start your project? Call today and see if you qualify for a free 3D design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+17034239965">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl cursor-pointer"
                  style={{ background: "#C9A84C", color: "#0D0D0D", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>
                  <Phone size={15} strokeWidth={2.5} />
                  Call Now — (703) 423-9965
                </motion.div>
              </a>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.04 }}
                  className="btn-outline-gold px-8 py-4 rounded-xl cursor-pointer"
                  style={{ fontSize: "12px", letterSpacing: "0.12em" }}>
                  Free Consultation
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
