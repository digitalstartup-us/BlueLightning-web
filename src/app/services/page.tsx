"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Decks",
    tagline: "Highest Revenue Driver — ~40% of Business",
    href: "/custom-decks",
    image: "/images/01 - Custom Decks/deck_composite-gray-black-railing-wide-view_01.jpg",
    description: "From multi-level masterpieces to intimate covered retreats — we engineer and build custom decks that become the centerpiece of your home's outdoor experience.",
    includes: [
      "Multi-level decks",
      "Covered & screened decks",
      "Pool decks",
      "Rooftop decks",
      "Under-deck dry space systems",
      "Custom stair systems",
      "Cable, glass & metal railings",
      "IRC code compliant structural engineering",
    ],
    materials: ["AZEK PVC (preferred)", "Trex Composite", "TimberTech Composite", "Wood (by request only)"],
  },
  {
    number: "02",
    title: "Patios & Hardscaping",
    tagline: "~30% of Business",
    href: "/patios",
    image: "/images/02 - Patios & Hardscaping/patio_porcelain-gray-fire-table-outdoor-kitchen_01.jpg",
    description: "Ground-level transformation through precision hardscaping — pavers, natural stone, and engineered systems built for Northern Virginia's demanding climate.",
    includes: [
      "Paver patios",
      "Stamped concrete",
      "Natural stone & porcelain",
      "Retaining walls",
      "Built-in fire pits",
      "Outdoor kitchens on patios",
      "Step systems & transitions",
      "Drainage engineering",
    ],
    materials: ["Techo-Bloc pavers", "Unilock pavers", "Natural stone", "Outdoor porcelain tile"],
  },
  {
    number: "03",
    title: "Pool Decks",
    tagline: "Specialty Service",
    href: "/pool-decks",
    image: "/images/05 - Pool Decks Full Outdoor Living/pool-deck_aerial-pool-house-afternoon_01.jpg",
    description: "Waterfront precision. Pool decks require specialist knowledge of drainage, anti-slip treatment, and material compatibility with pool chemistry — we've built over 30.",
    includes: [
      "Pool surrounds & coping",
      "Anti-slip surface treatments",
      "Integrated drainage systems",
      "Perimeter LED lighting",
      "Built-in seating & lounge areas",
      "Spa & hot tub integration",
      "Jandy pool equipment",
      "Custom fencing systems",
    ],
    materials: ["AZEK PVC", "Outdoor porcelain", "Natural stone", "TimberTech composite"],
  },
  {
    number: "04",
    title: "Pergolas & Structures",
    tagline: "High-Margin Add-On",
    href: "/pergolas",
    image: "/images/03 - Pergolas & Structures/pergola_louvered-dark-gray-fire-table-sunset_01.jpg",
    description: "Extend your outdoor living season by months with a structure built to handle Virginia's winters, summers, and everything in between. Fully customizable and integrated.",
    includes: [
      "Motorized louvered pergolas",
      "Fixed pergolas & arbors",
      "Screened porches",
      "Covered porches",
      "Pavilions",
      "Sunrooms",
      "Outdoor heaters & fans",
      "Integrated LED systems",
    ],
    materials: ["Aluminum framing", "Western red cedar", "Polycarbonate roofing", "Custom powder-coat finishes"],
  },
  {
    number: "05",
    title: "Outdoor Kitchens",
    tagline: "Premium Bundled Service",
    href: "/outdoor-kitchens",
    image: "/images/04 - Outdoor Kitchens/outdoor-kitchen_white-cabinets-marble-island-grill_01.jpg",
    description: "A complete outdoor kitchen is the ultimate ROI project — it anchors the entire outdoor living system and adds immediate measurable value to your property.",
    includes: [
      "Professional grill stations",
      "Custom cabinetry & countertops",
      "Outdoor refrigeration",
      "Sink & plumbing integration",
      "JBL outdoor audio systems",
      "Custom LED lighting",
      "Bar & seating areas",
      "Pizza ovens & specialty appliances",
    ],
    materials: ["AZEK & masonry", "Granite & porcelain countertops", "JBL pro audio", "Stainless steel appliances"],
  },
  {
    number: "06",
    title: "Full Outdoor Living Systems",
    tagline: "Highest Margin — Bundled Projects",
    href: "/services",
    image: "/images/04 - Outdoor Kitchens/outdoor-kitchen_white-cabinets-marble-island-grill_01.jpg",
    description: "The complete transformation: Deck + patio + pergola + kitchen + lighting = a backyard that becomes the most-used room in your home. These are our signature projects.",
    includes: [
      "Full scope design + build",
      "Multi-element coordination",
      "JBL outdoor audio integration",
      "Jandy pool equipment",
      "Custom LED & landscape lighting",
      "Outdoor TV & entertainment",
      "Outdoor heaters & fans",
      "Complete permit management",
    ],
    materials: ["Premium composite & PVC", "Techo-Bloc / Unilock hardscaping", "JBL & Jandy systems", "Custom stone & steel"],
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />

          <div ref={heroRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Design + Build</span>
              </div>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 8rem)", color: "#F5F0E8" }}>
                Our Services.
              </h1>
              <p className="max-w-2xl" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Every service includes full design, permitting, HOA approval, installation, and final inspection.
                One team, one contract, zero handoffs to subcontractors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services list */}
        <section style={{ background: "#0A0A0A" }}>
          {services.map((svc, i) => (
            <ServiceRow key={svc.number} service={svc} index={i} />
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32" style={{ background: "#0D0D0D" }}>
          <div className="absolute top-0 h-px left-0 right-0" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
          <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#F5F0E8" }}>
                Not Sure Where to Start?
                <br />
                <em style={{ color: "#C9A84C" }}>That&apos;s What We&apos;re Here For.</em>
              </h2>
              <p className="mb-8 max-w-lg mx-auto" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Mauricio will walk your property, listen to your vision, and help you design the right solution within your budget.
                Free consultation, no obligation, 3D design included.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="border-b"
      style={{ borderColor: "rgba(201,168,76,0.06)" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-20">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
          style={{ direction: !isEven ? "rtl" : "ltr" }}>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-2xl"
            style={{ aspectRatio: "16/10", direction: "ltr" }}
          >
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, transparent 60%, rgba(13,13,13,0.7) 100%)" }} />
            <div className="absolute top-4 left-4 text-6xl font-light" style={{ fontFamily: "var(--font-display)", color: "rgba(201,168,76,0.2)", lineHeight: 1 }}>
              {service.number}
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg" style={{ background: "rgba(13,13,13,0.85)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span style={{ color: "#C9A84C", fontSize: "11px" }}>Custom Quote Available</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{ direction: "ltr" }}
          >
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#C9A84C", fontSize: "10px" }}>
              {service.tagline}
            </div>
            <h2 className="font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}>
              {service.title}
            </h2>
            <p className="mb-6" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}>
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {service.includes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={13} style={{ color: "#C9A84C", flexShrink: 0 }} />
                  <span style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-7">
              {service.materials.map((mat) => (
                <span key={mat} className="px-2.5 py-1 rounded-md" style={{ border: "1px solid rgba(201,168,76,0.18)", color: "#C9A84C", background: "rgba(201,168,76,0.04)", fontSize: "10px" }}>
                  {mat}
                </span>
              ))}
            </div>

            <Link href={service.href}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                Explore {service.title} <ArrowRight size={12} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
