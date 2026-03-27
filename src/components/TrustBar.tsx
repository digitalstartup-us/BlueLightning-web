"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Users } from "lucide-react";

const credentials = [
  { icon: <Shield size={14} />, text: "Class A Contractor — Virginia Licensed" },
  { icon: <CheckCircle size={14} />, text: "Fully Insured — GL + Workers Comp" },
  { icon: <Award size={14} />, text: "Trex Certified Installer" },
  { icon: <Award size={14} />, text: "TimberTech Certified Installer" },
  { icon: <CheckCircle size={14} />, text: "20+ Years Combined Experience" },
  { icon: <CheckCircle size={14} />, text: "850+ Projects Completed" },
  { icon: <CheckCircle size={14} />, text: "Permits & HOA Handled" },
  { icon: <Users size={14} />, text: "Bilingual Team — EN / ES" },
];

export default function TrustBar() {
  return (
    <div
      className="relative py-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0F1E 0%, #0D1525 100%)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Scrolling marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...credentials, ...credentials].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0"
              style={{ color: "#C9A84C" }}
            >
              <span className="opacity-80">{item.icon}</span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#A89060" }}
              >
                {item.text}
              </span>
              <span
                className="ml-6 text-xs"
                style={{ color: "rgba(201,168,76,0.3)", fontSize: "16px" }}
              >
                ·
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
