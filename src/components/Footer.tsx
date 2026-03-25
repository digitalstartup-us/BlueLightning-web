"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Custom Decks", href: "/custom-decks" },
    { label: "Pool Decks", href: "/pool-decks" },
    { label: "Patios & Hardscaping", href: "/patios" },
    { label: "Pergolas & Structures", href: "/pergolas" },
    { label: "Outdoor Kitchens", href: "/outdoor-kitchens" },
    { label: "Full Outdoor Living", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "All Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  "Service Areas": [
    { label: "Ashburn, VA", href: "/contact" },
    { label: "McLean, VA", href: "/contact" },
    { label: "Loudoun County", href: "/contact" },
    { label: "Fairfax County", href: "/contact" },
    { label: "Herndon & Sterling, VA", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ background: "#080808" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }}
      />

      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1A3A6B, #2563EB)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="#F5F0E8" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}>
                  Blue Lightning Custom Decks
                </div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#C9A84C", fontSize: "9px" }}>
                  Northern Virginia · LLC · Est. 2019
                </div>
              </div>
            </div>

            <p className="leading-relaxed mb-4" style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300, maxWidth: "320px" }}>
              Design + build firm serving high-income homeowners across Northern Virginia.
              Trex Certified · TimberTech Certified · Class A Contractor.
            </p>

            <p className="leading-relaxed mb-8" style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300, maxWidth: "320px", fontStyle: "italic" }}>
              &ldquo;Built Fast. Built Right. Built to Impress.&rdquo;
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a href="tel:+17034239965" className="flex items-center gap-3 group">
                <Phone size={13} style={{ color: "#C9A84C" }} />
                <span
                  className="transition-colors duration-300"
                  style={{ color: "#8A8A8A", fontSize: "0.8rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                >
                  (703) 423-9965
                </span>
              </a>
              <a href="mailto:contact@bluelightningcustomdecks.com" className="flex items-center gap-3">
                <Mail size={13} style={{ color: "#C9A84C" }} />
                <span style={{ color: "#8A8A8A", fontSize: "0.75rem" }}>
                  contact@bluelightningcustomdecks.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={13} style={{ color: "#C9A84C", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#8A8A8A", fontSize: "0.75rem", lineHeight: 1.5 }}>
                  13800 Coppermine Rd, 3rd Floor, Unit 351<br />
                  Herndon, VA 20171
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/bluelightningcustomdecks"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#8A8A8A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C9A84C";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8A8A8A";
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Instagram size={15} />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-xs tracking-[0.25em] uppercase mb-6 font-medium"
                style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.22em" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300"
                      style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-8"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: "#8A8A8A", fontSize: "12px" }}>
            © 2026 Blue Lightning Custom Decks LLC · Virginia Entity ID: S8535819 · All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Class A License", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ color: "#8A8A8A", fontSize: "12px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                className="transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
