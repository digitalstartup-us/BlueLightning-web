"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play, Phone } from "lucide-react";
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
    name: "Blue Lightning — Our Story",
    location: "Herndon, VA",
    label: "Company Overview",
    poster: "/images/DJI_20241106170106_0080_D.JPG",
    video: "/video/blue-lightning-brand.mp4",
    available: true,
  },
  {
    id: 2,
    name: "Mauricio Caballero",
    location: "CEO & Design Consultant",
    label: "Meet the Team",
    poster: "/mauricio.png",
    video: "/video/mauricio-intro.mp4",
    available: true,
  },
  {
    id: 3,
    name: "Client Testimonial",
    location: "Northern Virginia",
    label: "Video Review",
    poster: "/images/DJI_20241106165447_0068_D.JPG",
    video: "",
    available: false,
  },
  {
    id: 4,
    name: "Project Walkthrough",
    location: "Ashburn, VA",
    label: "Project Story",
    poster: "/images/DSC01228.jpg",
    video: "",
    available: false,
  },
];

function VideoCard({ item, index }: { item: typeof videoTestimonials[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!item.available) return;
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: "#141414",
        border: "1px solid rgba(201,168,76,0.1)",
        aspectRatio: "16/11",
      }}
      onClick={handlePlay}
    >
      {/* Poster image */}
      <img
        src={item.poster}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(9,9,9,0.92) 0%, rgba(9,9,9,0.15) 60%)" }}
      />

      {/* Video (hidden until play) */}
      {item.available && (
        <video
          ref={videoRef}
          src={item.video}
          controls={playing}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? "opacity-100 z-10" : "opacity-0"}`}
          onEnded={() => setPlaying(false)}
          playsInline
        />
      )}

      {/* Play button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: item.available ? "rgba(201,168,76,0.9)" : "rgba(100,100,100,0.5)",
              backdropFilter: "blur(8px)",
              border: `2px solid ${item.available ? "rgba(201,168,76,0.8)" : "rgba(100,100,100,0.3)"}`,
            }}
          >
            <Play
              size={22}
              fill={item.available ? "#0D0D0D" : "#666"}
              stroke="none"
              style={{ marginLeft: "3px" }}
            />
          </motion.div>
        </div>
      )}

      {/* Label badge */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: item.available ? "rgba(201,168,76,0.15)" : "rgba(100,100,100,0.2)",
            border: `1px solid ${item.available ? "rgba(201,168,76,0.3)" : "rgba(100,100,100,0.3)"}`,
            color: item.available ? "#C9A84C" : "#666",
            fontSize: "10px",
            letterSpacing: "0.1em",
          }}
        >
          {item.label}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <div
          className="font-medium text-sm"
          style={{ color: "#F5F0E8", fontSize: "0.9rem" }}
        >
          {item.name}
        </div>
        <div
          className="text-xs mt-0.5"
          style={{ color: item.available ? "#C9A84C" : "#666", fontSize: "11px" }}
        >
          {item.location}
        </div>
        {!item.available && (
          <div className="text-xs mt-1" style={{ color: "#555", fontSize: "10px", letterSpacing: "0.08em" }}>
            COMING SOON
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
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

  return (
    <>
      {/* Written Testimonials */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0D0D0D" }} />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
        />

        <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                Client Stories
              </span>
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            </div>
            <h2
              className="font-light"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#F5F0E8",
              }}
            >
              Northern Virginia Homeowners{" "}
              <em style={{ color: "#C9A84C" }}>Trust Us</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute -top-8 left-0 text-9xl font-light leading-none select-none pointer-events-none"
              style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.08)", lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
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

                <blockquote
                  className="text-xl md:text-2xl font-light leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-display)", color: "#F5F0E8", fontStyle: "italic" }}
                >
                  {testimonials[current].quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                    style={{ border: "2px solid rgba(201,168,76,0.4)" }}
                  />
                  <div>
                    <div className="font-medium text-sm" style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}>
                      {testimonials[current].name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#C9A84C", fontSize: "11px" }}>
                      {testimonials[current].project}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                      {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      background: i === current ? "#C9A84C" : "rgba(201,168,76,0.25)",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {[{ dir: -1, Icon: ChevronLeft }, { dir: 1, Icon: ChevronRight }].map(({ dir, Icon }) => (
                  <motion.button
                    key={dir}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate(dir)}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", background: "transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                  >
                    <Icon size={16} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials / References */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#080808" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }}
        />
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                Video References
              </span>
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            </div>
            <h2
              className="font-light mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#F5F0E8" }}
            >
              See the Results.{" "}
              <em style={{ color: "#C9A84C" }}>Hear the Stories.</em>
            </h2>
            <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
              Real homeowners, real projects, real experiences — in their own words.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {videoTestimonials.map((item, index) => (
              <VideoCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* CTA under videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-6" style={{ color: "#8A8A8A", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}>
              Ready to start your project? Call today and see if you qualify for a free 3D design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+17034239965">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl cursor-pointer"
                  style={{ background: "#C9A84C", color: "#0D0D0D", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}
                >
                  <Phone size={15} strokeWidth={2.5} />
                  Call Now — (703) 423-9965
                </motion.div>
              </a>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="btn-outline-gold px-8 py-4 rounded-xl cursor-pointer"
                  style={{ fontSize: "12px", letterSpacing: "0.12em" }}
                >
                  Free Consultation
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
