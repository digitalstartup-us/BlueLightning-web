"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "Custom Decks", href: "/custom-decks", desc: "Multi-level, covered, rooftop" },
  { label: "Pool Decks", href: "/pool-decks", desc: "Waterfront & pool surrounds" },
  { label: "Patios & Hardscaping", href: "/patios", desc: "Pavers, stone, stamped concrete" },
  { label: "Driveways", href: "/patios", desc: "Premium paver & concrete driveways" },
  { label: "Pergolas & Structures", href: "/pergolas", desc: "Louvered pergolas, pavilions" },
  { label: "Outdoor Kitchens", href: "/outdoor-kitchens", desc: "Full outdoor kitchen systems" },
  { label: "Backyard Transformations", href: "/services", desc: "Complete outdoor living system" },
];

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "mt-3 px-6 py-4 rounded-2xl glass-dark" : "mt-6 py-4"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Blue Lightning Decks & Patios"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-base font-semibold tracking-wide leading-tight" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}>
                    Blue Lightning
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase leading-tight" style={{ color: "#C9A84C", fontSize: "9px" }}>
                    Decks &amp; Patios
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      className="flex items-center gap-1 text-sm tracking-widest uppercase font-medium group cursor-pointer relative"
                      style={{
                        color: isActive(link.href) ? "#F5F0E8" : "#8A8A8A",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                      }}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                      onMouseLeave={(e) => {
                        if (!isActive(link.href)) e.currentTarget.style.color = "#8A8A8A";
                      }}
                    >
                      {link.label}
                      <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={12} />
                      </motion.span>
                      {isActive(link.href) && (
                        <span className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: "#C9A84C" }} />
                      )}
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="absolute top-8 left-1/2 -translate-x-1/2 w-72 rounded-2xl p-2 shadow-2xl"
                          style={{
                            background: "#141414",
                            border: "1px solid rgba(201,168,76,0.2)",
                            backdropFilter: "blur(20px)",
                          }}
                        >
                          {services.map((svc) => (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              className="flex flex-col px-4 py-3 rounded-xl transition-all duration-200 group/svc"
                              style={{ borderBottom: "none" }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                            >
                              <span className="text-sm font-medium" style={{ color: "#F5F0E8", fontSize: "13px" }}>
                                {svc.label}
                              </span>
                              <span className="text-xs mt-0.5" style={{ color: "#8A8A8A", fontSize: "11px" }}>
                                {svc.desc}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative text-sm tracking-widest uppercase font-medium group cursor-pointer"
                    style={{
                      color: isActive(link.href) ? "#F5F0E8" : "#8A8A8A",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) e.currentTarget.style.color = "#8A8A8A";
                    }}
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px transition-all duration-300"
                      style={{
                        background: "#C9A84C",
                        transform: isActive(link.href) ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                      }}
                    />
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+17034239965"
                className="flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#C9A84C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8C96A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A84C")}
              >
                <Phone size={13} />
                <span>(703) 423-9965</span>
              </a>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold px-6 py-3 text-xs rounded-lg cursor-pointer"
                  style={{ fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  Free Consultation
                </motion.div>
              </Link>
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto"
            style={{ background: "#0D0D0D", paddingTop: "80px" }}
          >
            <div className="flex flex-col px-8 py-8 gap-1">
              {/* Services section */}
              <div className="mb-4">
                <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#C9A84C", fontSize: "10px" }}>
                  Services
                </div>
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={svc.href}
                      className="flex items-center justify-between py-3 border-b"
                      style={{ borderColor: "rgba(201,168,76,0.08)" }}
                    >
                      <span className="text-lg font-light" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}>
                        {svc.label}
                      </span>
                      <span className="text-xs" style={{ color: "#8A8A8A" }}>{svc.desc}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Other links */}
              {navLinks.filter(l => !l.hasDropdown).map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-3xl font-light border-b"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#F5F0E8",
                      borderColor: "rgba(201,168,76,0.08)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 space-y-4"
              >
                <a
                  href="tel:+17034239965"
                  className="flex items-center gap-3 text-xl"
                  style={{ color: "#C9A84C" }}
                >
                  <Phone size={20} />
                  <span>(703) 423-9965</span>
                </a>
                <Link href="/contact" className="btn-gold block px-8 py-4 text-sm rounded-xl text-center">
                  Schedule Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
