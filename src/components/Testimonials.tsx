"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Victoria & James Hartwell",
    location: "Beverly Hills, CA",
    project: "Signature Deck + Pergola",
    quote:
      "BlueLightning transformed our backyard into something from a magazine. Every single detail was executed with such precision and care. Our friends and family are absolutely speechless every time they visit.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Malibu, CA",
    project: "Outdoor Kitchen & Fire Feature",
    quote:
      "Worth every penny. The craftsmanship is extraordinary — the kind of quality you can only find from true artisans who are passionate about what they do. Our outdoor kitchen is a masterpiece.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia & Robert Whitfield",
    location: "Aspen, CO",
    project: "Grand Pavilion & Deck",
    quote:
      "The process from consultation to completion was seamless and genuinely enjoyable. They listened to our vision and elevated it beyond what we imagined. This is now our favorite place in the world.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "#0D0D0D" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      {/* Ambient decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        {/* Header */}
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
            Words From Our{" "}
            <em style={{ color: "#C9A84C" }}>Clients</em>
          </h2>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Large quote mark */}
          <div
            className="absolute -top-8 left-0 text-9xl font-light leading-none select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "rgba(201,168,76,0.08)",
              lineHeight: 1,
            }}
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
              style={{
                background: "#141414",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#C9A84C" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl md:text-2xl font-light leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#F5F0E8",
                  fontStyle: "italic",
                }}
              >
                {testimonials[current].quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                  style={{ border: "2px solid rgba(201,168,76,0.4)" }}
                />
                <div>
                  <div
                    className="font-medium text-sm"
                    style={{ color: "#F5F0E8", letterSpacing: "0.05em" }}
                  >
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

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
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

            {/* Arrows */}
            <div className="flex gap-2">
              {[{ dir: -1, Icon: ChevronLeft }, { dir: 1, Icon: ChevronRight }].map(({ dir, Icon }) => (
                <motion.button
                  key={dir}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate(dir)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "#C9A84C",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
