"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "/faq", isPage: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage?: boolean) => {
    setMenuOpen(false);
    if (isPage) {
      router.push(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20"
      >
        <div
          className="mx-auto max-w-7xl"
          style={{ transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "mt-3 px-6 py-4 rounded-2xl glass-dark" : "mt-6 py-4"
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "linear-gradient(135deg, #1A3A6B, #2563EB)" }}
                />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10">
                  <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="#F5F0E8" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div
                  className="text-base font-semibold tracking-wide leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                >
                  Blue Lightning
                </div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#C9A84C", fontSize: "9px" }}>
                  Custom Decks · Northern Virginia
                </div>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.isPage); }}
                  className="relative text-sm tracking-widest uppercase font-medium group cursor-pointer"
                  style={{ color: "#8A8A8A", fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  <span
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "#C9A84C" }}
                  />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+17034239965"
                className="flex items-center gap-2 text-xs tracking-widest uppercase"
                style={{ color: "#C9A84C" }}
              >
                <Phone size={13} />
                <span>(703) 423-9965</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick("#contact")}
                className="btn-gold px-6 py-3 text-xs rounded-lg"
                style={{ fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Free Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6"
            style={{ background: "rgba(13,13,13,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, link.isPage); }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-4xl font-light cursor-pointer"
                  style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 space-y-3"
              >
                <a
                  href="tel:+17034239965"
                  className="flex items-center gap-3 text-lg"
                  style={{ color: "#C9A84C" }}
                >
                  <Phone size={18} />
                  <span>(703) 423-9965</span>
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-gold px-8 py-4 text-sm rounded-xl w-full text-left"
                >
                  Schedule Free Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
