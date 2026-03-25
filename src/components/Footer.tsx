"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["Signature Decks", "Pergolas & Pavilions", "Outdoor Kitchens", "Fire & Water Features", "Full Design-Build"],
  Company: ["Our Story", "Our Process", "Portfolio", "Awards & Press", "Careers"],
  Support: ["Free Consultation", "Project Financing", "Maintenance Plans", "Warranty", "FAQ"],
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
                style={{ background: "linear-gradient(135deg, #9E7A2E, #C9A84C)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="9 22 9 12 15 12 15 22" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold" style={{ fontFamily: "var(--font-display)", color: "#F5F0E8" }}>
                  BlueLightning
                </div>
                <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#C9A84C", fontSize: "9px" }}>
                  Luxury Decks
                </div>
              </div>
            </div>

            <p className="leading-relaxed mb-8" style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300, maxWidth: "300px" }}>
              Building extraordinary luxury decks and outdoor living spaces for discerning homeowners since 2007.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              {[
                { icon: <Phone size={13} />, text: "(555) 900-DECK" },
                { icon: <Mail size={13} />, text: "hello@bluelightning.com" },
                { icon: <MapPin size={13} />, text: "Los Angeles, CA 90001" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: "#C9A84C" }}>{item.icon}</span>
                  <span style={{ color: "#8A8A8A", fontSize: "0.8rem" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
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
                  <Icon size={15} />
                </motion.a>
              ))}
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300 hover:text-cream"
                      style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                    >
                      {link}
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
            © 2026 BlueLightning Luxury Decks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "License #C-27841"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "#8A8A8A", fontSize: "12px" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                className="transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
