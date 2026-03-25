"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Award, Shield, Users } from "lucide-react";

const credentials = [
  { icon: <Shield size={15} />, text: "Class A Contractor — Virginia Licensed" },
  { icon: <Shield size={15} />, text: "Fully Insured — General Liability + Workers Comp" },
  { icon: <Award size={15} />, text: "Trex Certified Installer" },
  { icon: <Award size={15} />, text: "TimberTech Certified Installer" },
  { icon: <CheckCircle2 size={15} />, text: "AZEK Approved Installer" },
  { icon: <CheckCircle2 size={15} />, text: "IRC Code Compliant — Structural Expertise" },
  { icon: <CheckCircle2 size={15} />, text: "Permits & HOA Approvals Handled" },
  { icon: <Users size={15} />, text: "Bilingual Team — English & Spanish" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      <div ref={ref} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
                About Us
              </span>
            </div>

            <h2
              className="font-light leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "#F5F0E8",
              }}
            >
              Family-Owned.
              <br />
              <em style={{ color: "#C9A84C" }}>Northern Virginia Built.</em>
            </h2>

            <div className="space-y-5" style={{ color: "#8A8A8A", fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}>
              <p>
                Blue Lightning Custom Decks is a family-owned design + build firm founded by
                <strong style={{ color: "#F5F0E8", fontWeight: 500 }}> Mauricio Caballero</strong> in Herndon, Virginia.
                With over 20 years of combined field experience in structural construction and outdoor
                living, we specialize in complex, multi-level projects that other contractors turn down.
              </p>
              <p>
                We are a <strong style={{ color: "#F5F0E8", fontWeight: 500 }}>full Design + Build firm</strong> —
                meaning one team handles everything from concept to completion. We never subcontract
                the work that matters. You deal with us from the first meeting to the final walkthrough.
              </p>
              <p>
                Our bilingual team (English and Spanish) serves high-income homeowners across Ashburn,
                McLean, Loudoun County, Fairfax County, and the entire Northern Virginia / Washington DC metro area.
              </p>
            </div>

            {/* Why choose us */}
            <div className="mt-10 space-y-3">
              {[
                "3D design visualization before any work begins",
                "Projects start at $100K — we specialize in complex builds",
                "We've never left a project unfinished",
                "Branded trucks and uniformed crews on every job site",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "#8A8A8A", fontSize: "0.875rem", fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: credentials + image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            {/* Credentials grid */}
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "#141414",
                border: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <div
                className="text-xs tracking-[0.25em] uppercase mb-6"
                style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.22em" }}
              >
                Credentials & Certifications
              </div>
              <div className="grid grid-cols-1 gap-3">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div style={{ color: "#C9A84C", flexShrink: 0 }}>{cred.icon}</div>
                    <span style={{ color: "#8A8A8A", fontSize: "0.8rem", fontWeight: 300 }}>{cred.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              <div
                className="text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "#C9A84C", fontSize: "10px" }}
              >
                Premium Materials We Install
              </div>
              <div className="flex flex-wrap gap-2">
                {["Trex", "TimberTech", "AZEK", "Techo-Bloc", "Unilock", "JBL Audio", "Jandy Pool Equip."].map((mat) => (
                  <span
                    key={mat}
                    className="px-3 py-1.5 rounded-lg text-xs"
                    style={{
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.04)",
                      fontSize: "10px",
                    }}
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* ROI callout */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(13,13,13,0.9), rgba(20,20,20,0.9))",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <p
                className="text-lg font-light leading-relaxed"
                style={{ fontFamily: "var(--font-display)", color: "#F5F0E8", fontStyle: "italic" }}
              >
                &ldquo;Premium composite and PVC materials last{" "}
                <span style={{ color: "#C9A84C" }}>25–50 years</span> vs. 10–15 for wood.
                No painting, staining, or sealing. Manufacturer warranties included.&rdquo;
              </p>
              <p className="mt-3 text-xs" style={{ color: "#8A8A8A" }}>
                A quality outdoor space adds 10–15% to your home&apos;s value. The real cost is doing it twice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
