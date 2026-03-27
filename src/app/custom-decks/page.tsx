"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

function useVisible(p: MotionValue<number>, a: number, b: number, c: number, d: number) {
  return useTransform(p, [a, b, c, d], [0, 1, 1, 0]);
}
function useRise(p: MotionValue<number>, a: number, b: number, c: number, d: number, enter = 50, exit = -30) {
  return useTransform(p, [a, b, c, d], [enter, 0, 0, exit]);
}
function useZoom(p: MotionValue<number>, a: number, b: number, c: number, d: number, from = 1.12, to = 1.0) {
  return useTransform(p, [a, b, c, d], [from, to, to, from * 0.97]);
}

const T = {
  s1:  [0.00, 0.03, 0.12, 0.16] as const,
  s2:  [0.14, 0.19, 0.28, 0.32] as const,
  s3:  [0.30, 0.35, 0.44, 0.48] as const,
  s4:  [0.46, 0.51, 0.60, 0.64] as const,
  s5:  [0.62, 0.67, 0.76, 0.80] as const,
  s6:  [0.78, 0.83, 0.91, 0.95] as const,
  s7:  [0.93, 0.97, 1.00, 1.00] as const,
  bg2: [0.12, 0.20, 0.30, 0.34] as const,
  bg3: [0.28, 0.36, 0.46, 0.50] as const,
  bg4: [0.44, 0.52, 0.62, 0.66] as const,
  bg5: [0.60, 0.68, 0.78, 0.82] as const,
  bg6: [0.76, 0.84, 0.93, 0.97] as const,
  bg7: [0.91, 0.96, 1.00, 1.00] as const,
};

const IMGS = {
  hero:     "/images/01 - Custom Decks/deck_composite-gray-black-railing-wide-view_01.jpg",
  multilevel: "/images/01 - Custom Decks/deck_white-black-railing-multi-level_01.jpg",
  covered:  "/images/01 - Custom Decks/deck_composite-gray-black-covered-structure_04.jpg",
  railing:  "/images/01 - Custom Decks/deck_black-white-railing-detail_01.jpg",
  lifestyle:"/images/01 - Custom Decks/deck_white-pergola-fireplace-lounge_01.jpg",
  night:    "/images/01 - Custom Decks/deck_white-stairs-black-railing-wide_01.jpg",
};

function ScrollProgress({ p }: { p: MotionValue<number> }) {
  const smooth = useSpring(p, { stiffness: 120, damping: 25 });
  const w = useTransform(smooth, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px]" style={{ background: "rgba(201,168,76,0.15)" }}>
      <motion.div className="h-full" style={{ width: w, background: "linear-gradient(to right, #9E7A2E, #E8C96A)" }} />
    </div>
  );
}

function SectionDot({ p, pos, label, scrollTo }: { p: MotionValue<number>; pos: number; label: string; scrollTo: () => void }) {
  const active = useTransform(p, [pos - 0.08, pos, pos + 0.12], [0, 1, 0]);
  const scale = useTransform(active, [0, 1], [1, 1.4]);
  const bg = useTransform(active, [0, 1], ["rgba(201,168,76,0.3)", "#C9A84C"]);
  return (
    <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollTo}>
      <motion.span style={{ opacity: active }} className="text-xs tracking-widest uppercase hidden md:block">
        <span style={{ color: "#C9A84C", fontSize: "9px", letterSpacing: "0.2em" }}>{label}</span>
      </motion.span>
      <motion.div style={{ scale, background: bg }} className="w-1.5 h-1.5 rounded-full" />
    </div>
  );
}

const DOT_DATA = [
  { pos: 0.05, label: "Intro" },
  { pos: 0.21, label: "Vision" },
  { pos: 0.38, label: "Materials" },
  { pos: 0.54, label: "Design" },
  { pos: 0.70, label: "Features" },
  { pos: 0.86, label: "Why Us" },
  { pos: 0.96, label: "Begin" },
];

function SectionDots({ p }: { p: MotionValue<number> }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-end">
      {DOT_DATA.map(({ pos, label }) => (
        <SectionDot key={label} p={p} pos={pos} label={label}
          scrollTo={() => {
            const el = document.documentElement;
            window.scrollTo({ top: pos * (el.scrollHeight - el.clientHeight), behavior: "smooth" });
          }}
        />
      ))}
    </div>
  );
}

function BgImage({ src, p, timing, overlay = 0.55 }: { src: string; p: MotionValue<number>; timing: readonly [number, number, number, number]; overlay?: number }) {
  const opacity = useVisible(p, ...timing);
  const scale = useZoom(p, ...timing, 1.1, 1.0);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img src={src} alt="" style={{ scale }} className="absolute inset-0 w-full h-full object-cover origin-center" />
      <div className="absolute inset-0" style={{ background: `rgba(13,13,13,${overlay})` }} />
    </motion.div>
  );
}

export default function CustomDecksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div style={{ background: "#0D0D0D" }}>
      <ScrollProgress p={scrollYProgress} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: "rgba(13,13,13,0.7)", border: "1px solid rgba(201,168,76,0.25)", backdropFilter: "blur(12px)" }}
        >
          <ArrowLeft size={13} style={{ color: "#C9A84C" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.18em" }}>Back</span>
        </Link>
      </motion.div>

      <SectionDots p={scrollYProgress} />

      <div ref={containerRef} style={{ height: "700vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }} className="relative">
          <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />

          <BgImage src={IMGS.hero}       p={scrollYProgress} timing={T.bg2} overlay={0.45} />
          <BgImage src={IMGS.multilevel} p={scrollYProgress} timing={T.bg3} overlay={0.5} />
          <BgImage src={IMGS.covered}    p={scrollYProgress} timing={T.bg4} overlay={0.5} />
          <BgImage src={IMGS.railing}    p={scrollYProgress} timing={T.bg5} overlay={0.55} />
          <BgImage src={IMGS.lifestyle}  p={scrollYProgress} timing={T.bg6} overlay={0.35} />
          <BgImage src={IMGS.night}      p={scrollYProgress} timing={T.bg7} overlay={0.82} />

          <Scene1 p={scrollYProgress} />
          <Scene2 p={scrollYProgress} />
          <Scene3 p={scrollYProgress} />
          <Scene4 p={scrollYProgress} />
          <Scene5 p={scrollYProgress} />
          <Scene6 p={scrollYProgress} />
          <Scene7 p={scrollYProgress} />

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          >
            <span style={{ color: "#8A8A8A", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
          </motion.div>
        </div>
      </div>

      <PostScrollSection />
    </div>
  );
}

function Scene1({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s1);
  const y       = useRise(p, ...T.s1, 60, -40);
  const subOp   = useVisible(p, T.s1[0]+0.02, T.s1[1]+0.02, T.s1[2], T.s1[3]);
  const subY    = useRise(p,   T.s1[0]+0.02, T.s1[1]+0.02, T.s1[2], T.s1[3], 40, -30);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
      <motion.div style={{ y }} className="text-center px-6">
        <motion.div style={{ opacity: subOp, y: subY, border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.05)" }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "10px" }}>
            Trex & TimberTech Certified · Class A Contractor
          </span>
        </motion.div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 14vw, 12rem)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 0.9, color: "#F5F0E8" }}>
          Custom
          <br />
          <em style={{ background: "linear-gradient(135deg, #9E7A2E, #E8C96A, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Decks</em>
        </h1>
        <motion.p style={{ opacity: subOp, y: subY }} className="text-center mt-8">
          <span style={{ color: "#8A8A8A", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontWeight: 300, letterSpacing: "0.06em" }}>
            Multi-level decks engineered for Northern Virginia homes.
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function Scene2({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s2);
  const y1 = useRise(p, ...T.s2, 80, -50);
  const op2 = useVisible(p, T.s2[0]+0.03, T.s2[1]+0.01, T.s2[2], T.s2[3]);
  const y2  = useRise(p,   T.s2[0]+0.03, T.s2[1]+0.01, T.s2[2], T.s2[3], 60, -35);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
      <motion.div style={{ y: y1 }} className="text-center">
        <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#C9A84C", fontSize: "10px" }}>The Vision</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
          Your Backyard.
          <br />
          <em style={{ color: "#C9A84C" }}>Reimagined.</em>
        </h2>
      </motion.div>
      <motion.div style={{ opacity: op2, y: y2 }} className="text-center mt-8 max-w-xl">
        <p style={{ color: "rgba(245,240,232,0.65)", fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 300, lineHeight: 1.8 }}>
          A custom deck is an investment in how you live. We design and build
          multi-level structures that maximize your space, work with your home&apos;s architecture,
          and are built to last decades — not years.
        </p>
      </motion.div>
    </motion.div>
  );
}

const MATERIALS = [
  { name: "AZEK",        origin: "Premium PVC — Top Choice",  props: ["25–50 year lifespan", "No maintenance needed", "Fade & scratch resistant"] },
  { name: "Trex",        origin: "Composite Decking",          props: ["Trex Certified Installer", "25-year fade warranty", "Made from recycled materials"] },
  { name: "TimberTech",  origin: "Composite & PVC",            props: ["TimberTech Certified", "Realistic wood aesthetics", "Industry-leading warranty"] },
];

function MaterialCard({ mat, p, delay }: { mat: typeof MATERIALS[0]; p: MotionValue<number>; delay: number }) {
  const op = useVisible(p, T.s3[0]+delay, T.s3[1]+delay*0.4, T.s3[2], T.s3[3]);
  const y  = useRise(p,   T.s3[0]+delay, T.s3[1]+delay*0.4, T.s3[2], T.s3[3], 40, -20);
  return (
    <motion.div style={{ opacity: op, y, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.18)", backdropFilter: "blur(10px)" }} className="p-6 rounded-2xl">
      <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>{mat.name}</div>
      <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C", fontSize: "9px" }}>{mat.origin}</div>
      <div className="space-y-2">
        {mat.props.map((prop) => (
          <div key={prop} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
            <span style={{ color: "#8A8A8A", fontSize: "12px", fontWeight: 300 }}>{prop}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Scene3({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s3);
  const y       = useRise(p, ...T.s3, 70, -40);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex items-center px-8 md:px-20 lg:px-32">
      <motion.div style={{ y }} className="max-w-6xl w-full mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#C9A84C", fontSize: "10px" }}>Premium Materials</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "3rem" }}>
          Built to last
          <br />
          <em style={{ color: "#C9A84C" }}>decades.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MATERIALS.map((mat, i) => <MaterialCard key={mat.name} mat={mat} p={p} delay={i * 0.025} />)}
        </div>
      </motion.div>
    </motion.div>
  );
}

const DECK_SPECS = [
  "Multi-Level & Split-Level Designs",
  "Pool & Waterfront Decks",
  "Covered & Screened Decks",
  "Rooftop & Elevated Decks",
  "Underdeck Dry Space Systems",
  "IRC Code Compliant Engineering",
  "3D Design Preview Before Build",
  "Permit & HOA Handling Included",
];

function SpecItem({ spec, p, i }: { spec: string; p: MotionValue<number>; i: number }) {
  const delay = i * 0.018;
  const op = useVisible(p, T.s4[0]+0.04+delay, T.s4[1]+delay, T.s4[2], T.s4[3]);
  const x  = useTransform(p, [T.s4[0]+0.04+delay, T.s4[1]+delay], [30, 0]);
  return (
    <motion.div style={{ opacity: op, x }} className="flex items-center gap-3 justify-end">
      <span style={{ color: "#8A8A8A", fontSize: "13px", fontWeight: 300 }}>{spec}</span>
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
      </div>
    </motion.div>
  );
}

function Scene4({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s4);
  const y       = useRise(p, ...T.s4, 60, -40);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex items-center justify-end px-8 md:px-20 lg:px-32">
      <motion.div style={{ y }} className="max-w-2xl text-right">
        <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#C9A84C", fontSize: "10px" }}>What We Build</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
          Every Detail.
          <br />
          <em style={{ color: "#C9A84C" }}>Considered.</em>
        </h2>
        <div className="space-y-3">
          {DECK_SPECS.map((spec, i) => <SpecItem key={spec} spec={spec} p={p} i={i} />)}
        </div>
      </motion.div>
    </motion.div>
  );
}

const RAILING_OPTIONS = [
  { icon: "◈", title: "Cable Railing", desc: "Stainless steel cable for unobstructed views — sleek, modern, and maintenance-free." },
  { icon: "◻", title: "Glass Railing", desc: "Tempered glass panels that open up the view while meeting all safety codes." },
  { icon: "❖", title: "Metal / Aluminum", desc: "Powder-coated aluminum frames in custom colors — durable and low-maintenance." },
  { icon: "✦", title: "Composite Pickets", desc: "Matching composite materials for a seamless, coordinated deck aesthetic." },
  { icon: "◎", title: "Custom Stair Systems", desc: "Engineered stair systems with custom risers, treads, and landing configurations." },
  { icon: "✿", title: "LED Lighting Integration", desc: "Post cap lights, under-rail LEDs, and step lighting for safety and ambiance." },
];

function FeatureCard({ feat, p, i }: { feat: typeof RAILING_OPTIONS[0]; p: MotionValue<number>; i: number }) {
  const delay = i * 0.018;
  const op = useVisible(p, T.s5[0]+delay, T.s5[1]+delay*0.3, T.s5[2], T.s5[3]);
  const y  = useRise(p,   T.s5[0]+delay, T.s5[1]+delay*0.3, T.s5[2], T.s5[3], 35, -20);
  return (
    <motion.div style={{ opacity: op, y, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.12)", backdropFilter: "blur(8px)" }} className="p-5 rounded-xl">
      <div className="text-xl mb-3" style={{ color: "#C9A84C" }}>{feat.icon}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "8px" }}>{feat.title}</div>
      <p style={{ color: "#8A8A8A", fontSize: "11px", lineHeight: 1.65, fontWeight: 300 }}>{feat.desc}</p>
    </motion.div>
  );
}

function Scene5({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s5);
  const titleY  = useRise(p, ...T.s5, 60, -40);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div style={{ y: titleY }}>
          <span className="text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: "#C9A84C", fontSize: "10px" }}>Railing & Finishing</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "3rem" }}>
            Six ways to
            <br />
            <em style={{ color: "#C9A84C" }}>finish in style.</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RAILING_OPTIONS.map((feat, i) => <FeatureCard key={feat.title} feat={feat} p={p} i={i} />)}
        </div>
      </div>
    </motion.div>
  );
}

function Scene6({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, ...T.s6);
  const y       = useRise(p, ...T.s6, 70, -50);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex items-center justify-center px-6">
      <motion.div style={{ y }} className="text-center max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase block mb-8" style={{ color: "#C9A84C", fontSize: "10px" }}>Why Blue Lightning</span>
        <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.1, letterSpacing: "-0.02em", fontStyle: "italic" }}>
          &ldquo;This is where your
          <br />
          <span style={{ background: "linear-gradient(135deg, #9E7A2E, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            family gathers.
          </span>
          <br />
          Build it right.&rdquo;
        </blockquote>
        <div className="mt-10 flex items-center justify-center flex-wrap gap-0">
          {[
            { value: "850+", label: "Decks Built" },
            { value: "20yr", label: "Experience" },
            { value: "5★", label: "Client Rating" },
          ].map((s, i) => (
            <div key={s.label} className="text-center px-8 py-4" style={{ borderRight: i < 2 ? "1px solid rgba(201,168,76,0.2)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#C9A84C", fontWeight: 300 }}>{s.value}</div>
              <div style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Scene7({ p }: { p: MotionValue<number> }) {
  const opacity = useVisible(p, T.s7[0], T.s7[1], T.s7[2], T.s7[3]);
  const y       = useRise(p,   T.s7[0], T.s7[1], T.s7[2], T.s7[3], 60, 0);
  return (
    <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
      <motion.div style={{ y }} className="text-center">
        <span className="text-xs tracking-[0.3em] uppercase block mb-8" style={{ color: "#C9A84C", fontSize: "10px" }}>Begin Your Journey</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
          Your Custom Deck.
          <br />
          <em style={{ background: "linear-gradient(135deg, #9E7A2E, #E8C96A, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Let&apos;s Begin.
          </em>
        </h2>
        <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, maxWidth: "380px", margin: "2rem auto 2.5rem", lineHeight: 1.7 }}>
          Free design consultation with 3D rendering. No obligation.
          Serving Ashburn, McLean, Loudoun County, and all of Northern Virginia.
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("post-scroll")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-xl cursor-pointer"
          style={{ fontSize: "12px", letterSpacing: "0.18em" }}
        >
          Get My Free Design Consultation
          <ArrowRight size={15} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function PostScrollSection() {
  return (
    <div id="post-scroll" style={{ background: "#0D0D0D" }}>
      <section className="py-28 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#C9A84C", fontSize: "10px" }}>Why Blue Lightning Decks & Patios</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "2rem" }}>
              Built with
              <br />
              <em style={{ color: "#C9A84C" }}>obsessive precision</em>
            </h3>
            <p style={{ color: "#8A8A8A", fontWeight: 300, lineHeight: 1.8, marginBottom: "2rem" }}>
              We are a full Design + Build firm — one team handles everything from the 3D design to
              the final inspection. Trex and TimberTech certified. Class A licensed. Fully insured.
              We handle all permits, HOA approvals, and inspections so you don&apos;t have to.
            </p>
            <div className="space-y-4">
              {[
                "3D design visualization before any material is ordered",
                "Class A Contractor license — Virginia",
                "Trex & TimberTech certified installation crew",
                "All permits, HOA, and inspections handled",
                "Bilingual team — English & Spanish",
                "We&apos;ve never left a project unfinished",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#8A8A8A", fontSize: "14px", fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src="/images/01 - Custom Decks/deck_composite-gray-black-railing-wide-view_01.jpg" alt="Custom deck Northern Virginia — Blue Lightning Decks & Patios" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl" style={{ background: "rgba(13,13,13,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>Featured Project</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#F5F0E8", fontWeight: 300 }}>The Ashburn Estate</div>
                <div style={{ color: "#8A8A8A", fontSize: "12px", marginTop: "4px" }}>Ashburn, VA · 2,400 sq ft · TimberTech Composite</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-px mx-6 md:mx-20" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />

      <ContactForm />

      <div className="py-10 text-center" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <Link href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
          style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.18em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
        >
          <ArrowLeft size={12} />
          Back to Blue Lightning Decks & Patios
        </Link>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <section className="py-28 px-6 md:px-20 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
        <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: "#C9A84C", fontSize: "10px" }}>Free Consultation</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.1 }}>
          Tell us about your deck project.
          <br />
          <em style={{ color: "#C9A84C" }}>We&apos;ll handle everything else.</em>
        </h3>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={(e) => e.preventDefault()} className="space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "Full Name", placeholder: "Your full name" },
            { label: "Email Address", placeholder: "your@email.com", type: "email" },
            { label: "Phone Number", placeholder: "(703) 000-0000", type: "tel" },
            { label: "City / Zip Code", placeholder: "Ashburn, VA 20147" },
          ].map(({ label, placeholder, type = "text" }) => (
            <div key={label}>
              <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>{label}</label>
              <input type={type} placeholder={placeholder} className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", color: "#F5F0E8", fontSize: "14px" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
                onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>Estimated Budget</label>
          <select className="w-full px-4 py-3.5 rounded-xl text-sm outline-none" defaultValue=""
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", color: "#8A8A8A", fontSize: "14px", appearance: "none" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
            onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
          >
            <option value="" disabled>Select budget range</option>
            {["Under $50,000", "$50,000 – $100,000", "$100,000 – $250,000", "$250,000+", "Not sure yet"].map((opt) => (
              <option key={opt} value={opt} style={{ background: "#141414" }}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs mb-2 tracking-widest uppercase" style={{ color: "#8A8A8A", fontSize: "10px" }}>Tell us about your project</label>
          <textarea rows={4} placeholder="Deck type, size, current situation, timeline, anything else..."
            className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.15)", color: "#F5F0E8", fontSize: "14px" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
            onBlur={(e)  => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
          <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="btn-gold px-12 py-4 rounded-xl flex items-center gap-3 w-full sm:w-auto justify-center"
            style={{ fontSize: "12px", letterSpacing: "0.18em" }}
          >
            Request Free Consultation
            <ArrowRight size={14} />
          </motion.button>
          <p style={{ color: "#8A8A8A", fontSize: "11px" }}>Responds within 24 hours · (703) 423-9965</p>
        </div>
      </motion.form>
    </section>
  );
}
