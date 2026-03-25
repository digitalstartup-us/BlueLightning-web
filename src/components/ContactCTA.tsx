"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Clock } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=70&auto=format"
          alt="Schedule free consultation Blue Lightning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,13,13,0.93)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, transparent 30%, transparent 70%, rgba(13,13,13,0.5) 100%)" }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
              Get Started
            </span>
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
          </div>

          <h2 className="font-light leading-tight mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 7rem)", color: "#F5F0E8" }}>
            Ready to Transform
            <br />
            <em style={{ color: "#C9A84C" }}>Your Outdoor Space?</em>
          </h2>

          <p className="mb-10 max-w-xl mx-auto" style={{ color: "#8A8A8A", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8 }}>
            Schedule a free on-site consultation. Mauricio personally meets with every
            prospective client — no sales team, no pressure, just an honest conversation
            about what&apos;s possible for your home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold px-10 py-4 rounded-xl cursor-pointer flex items-center gap-3"
                style={{ fontSize: "12px", letterSpacing: "0.18em", minWidth: "240px", justifyContent: "center" }}
              >
                Schedule Free Consultation
                <ArrowRight size={15} />
              </motion.div>
            </Link>
            <a href="tel:+17034239965">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-gold px-10 py-4 rounded-xl flex items-center gap-3"
                style={{ fontSize: "12px", letterSpacing: "0.18em", minWidth: "200px", justifyContent: "center" }}
              >
                <Phone size={15} />
                (703) 423-9965
              </motion.div>
            </a>
          </div>

          {/* Trust details */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2" style={{ color: "#8A8A8A" }}>
              <Clock size={13} style={{ color: "#C9A84C" }} />
              <span style={{ fontSize: "12px", fontWeight: 300 }}>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: "#8A8A8A" }}>
              <Mail size={13} style={{ color: "#C9A84C" }} />
              <a href="mailto:info@bluelightning.us" style={{ fontSize: "12px", fontWeight: 300 }}>
                info@bluelightning.us
              </a>
            </div>
            <div style={{ color: "#8A8A8A", fontSize: "12px", fontWeight: 300 }}>
              Free · No obligation · 3D design included
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
