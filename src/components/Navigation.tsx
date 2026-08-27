"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";

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

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock the page behind the fullscreen mobile menu and let the floating
  // widgets (chat launcher, CTA) hide themselves via the body class.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    return () => {
      document.body.style.overflow = previous;
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

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
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: "var(--nav-h)" }}
      >
        {/* Scrim keeps the logo legible over the hero video before any scroll. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 pointer-events-none transition-opacity duration-500"
          style={{
            height: "calc(var(--nav-h) + 24px)",
            background: "linear-gradient(to bottom, rgba(9,9,9,0.9) 0%, rgba(9,9,9,0.45) 55%, transparent 100%)",
            opacity: scrolled ? 0 : 1,
          }}
        />

        <div className="relative h-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="mx-auto h-full max-w-7xl">
            <div
              className={`flex h-full items-center justify-between gap-3 transition-all duration-500 ${
                scrolled ? "my-2 h-[calc(100%-16px)] rounded-2xl px-4 md:px-6 glass-dark" : ""
              }`}
            >
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 md:gap-3 group shrink-0 rounded-lg"
                aria-label="Blue Lightning Decks & Patios — home"
              >
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  src="/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                <span className="flex flex-col">
                  <span
                    className="font-semibold leading-tight whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#F5F0E8",
                      fontSize: "clamp(0.9rem, 3.4vw, 1rem)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Blue Lightning
                  </span>
                  <span
                    className="uppercase leading-tight whitespace-nowrap"
                    style={{ color: "#C9A84C", fontSize: "8.5px", letterSpacing: "0.22em" }}
                  >
                    Decks &amp; Patios
                  </span>
                </span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label} ref={dropdownRef} className="relative">
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className="flex items-center gap-1 uppercase font-medium cursor-pointer relative py-2"
                        style={{
                          color: isActive(link.href) || servicesOpen ? "#F5F0E8" : "#8A8A8A",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          transition: "color 0.25s ease",
                        }}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                        onMouseLeave={(e) => {
                          if (!isActive(link.href) && !servicesOpen) e.currentTarget.style.color = "#8A8A8A";
                        }}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="flex"
                        >
                          <ChevronDown size={12} />
                        </motion.span>
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-px transition-transform duration-300"
                          style={{
                            background: "#C9A84C",
                            transform: isActive(link.href) ? "scaleX(1)" : "scaleX(0)",
                            transformOrigin: "left",
                          }}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: EASE }}
                            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 rounded-2xl p-2 shadow-2xl"
                            style={{
                              background: "rgba(18,18,18,0.97)",
                              border: "1px solid rgba(201,168,76,0.2)",
                              backdropFilter: "blur(20px)",
                            }}
                          >
                            {services.map((svc) => (
                              <Link
                                key={svc.label}
                                href={svc.href}
                                className="flex flex-col px-4 py-2.5 rounded-xl transition-colors duration-200"
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                }}
                              >
                                <span style={{ color: "#F5F0E8", fontSize: "13px", fontWeight: 500 }}>
                                  {svc.label}
                                </span>
                                <span style={{ color: "#8A8A8A", fontSize: "11px", marginTop: "2px" }}>
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
                      className="relative uppercase font-medium cursor-pointer py-2"
                      style={{
                        color: isActive(link.href) ? "#F5F0E8" : "#8A8A8A",
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        transition: "color 0.25s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                      onMouseLeave={(e) => {
                        if (!isActive(link.href)) e.currentTarget.style.color = "#8A8A8A";
                      }}
                    >
                      {link.label}
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-px transition-transform duration-300"
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

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-5">
                <a
                  href="tel:+17034239965"
                  className="flex items-center gap-2 uppercase transition-colors duration-300 whitespace-nowrap"
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.12em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8C96A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C9A84C")}
                >
                  <Phone size={13} />
                  <span>(703) 423-9965</span>
                </a>
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-gold block px-5 py-2.5 rounded-lg cursor-pointer whitespace-nowrap"
                    style={{ fontSize: "11px", letterSpacing: "0.14em" }}
                  >
                    Free Consultation
                  </motion.span>
                </Link>
              </div>

              {/* Mobile actions */}
              <div className="flex md:hidden items-center gap-2">
                <a
                  href="tel:+17034239965"
                  aria-label="Call Blue Lightning at (703) 423-9965"
                  className="w-11 h-11 flex items-center justify-center rounded-xl"
                  style={{ color: "#0D0D0D", background: "#C9A84C" }}
                >
                  <Phone size={17} strokeWidth={2.4} />
                </a>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  className="w-11 h-11 flex items-center justify-center rounded-xl"
                  style={{
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(9,9,9,0.5)",
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={menuOpen ? "close" : "open"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="flex"
                    >
                      {menuOpen ? <X size={19} /> : <Menu size={19} />}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden overflow-y-auto overscroll-contain"
            style={{
              background: "#0A0A0A",
              paddingTop: "var(--nav-h)",
              paddingBottom: "max(2rem, env(safe-area-inset-bottom))",
            }}
          >
            <div className="flex flex-col px-6 pb-6">
              <div
                className="uppercase pt-2 pb-3"
                style={{ color: "#C9A84C", fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Services
              </div>

              {services.map((svc, i) => (
                <motion.div
                  key={svc.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.035, duration: 0.3, ease: EASE }}
                >
                  <Link
                    href={svc.href}
                    className="flex items-center justify-between gap-4 py-3 border-b"
                    style={{ borderColor: "rgba(201,168,76,0.08)" }}
                  >
                    <span className="flex flex-col min-w-0">
                      <span
                        className="truncate"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: isActive(svc.href) ? "#C9A84C" : "#F5F0E8",
                          fontSize: "1.05rem",
                          fontWeight: 300,
                        }}
                      >
                        {svc.label}
                      </span>
                      <span style={{ color: "#7A7A7A", fontSize: "11px", marginTop: "2px" }}>
                        {svc.desc}
                      </span>
                    </span>
                    <ArrowRight size={15} style={{ color: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                  </Link>
                </motion.div>
              ))}

              <div
                className="uppercase pt-6 pb-3"
                style={{ color: "#C9A84C", fontSize: "9px", letterSpacing: "0.3em" }}
              >
                Company
              </div>

              {navLinks
                .filter((l) => !l.hasDropdown)
                .map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.3, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3.5 border-b"
                      style={{ borderColor: "rgba(201,168,76,0.08)" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          color: isActive(link.href) ? "#C9A84C" : "#F5F0E8",
                          fontSize: "1.5rem",
                          fontWeight: 300,
                        }}
                      >
                        {link.label}
                      </span>
                      <ArrowRight size={16} style={{ color: "rgba(201,168,76,0.5)" }} />
                    </Link>
                  </motion.div>
                ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35, ease: EASE }}
                className="mt-8 space-y-3"
              >
                <Link
                  href="/contact"
                  className="btn-gold block px-8 py-4 rounded-xl text-center"
                  style={{ fontSize: "12px", letterSpacing: "0.15em" }}
                >
                  Schedule Free Consultation
                </Link>
                <a
                  href="tel:+17034239965"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl"
                  style={{
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.35)",
                    fontSize: "15px",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Phone size={17} />
                  <span>(703) 423-9965</span>
                </a>
                <p className="text-center pt-1" style={{ color: "#6A6A6A", fontSize: "11px" }}>
                  Class A Contractor · Licensed &amp; Insured · Northern Virginia
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
