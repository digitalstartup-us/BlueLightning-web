"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, Phone } from "lucide-react";

const faqCategories = [
  {
    category: "Cost & Investment",
    questions: [
      {
        q: "How much does a custom deck cost in Northern Virginia?",
        a: "Our projects typically start at $100,000 and range up to $500,000+, with estate transformations reaching $1M+. Pricing depends on size, materials, complexity, and scope. We never give vague estimates — after our free consultation and 3D design session, you'll receive a detailed, transparent proposal with no hidden costs.",
      },
      {
        q: "Is it worth investing in a high-end deck or patio?",
        a: "Yes. A professionally built outdoor living space typically adds 10–15% to your home's resale value. Premium composite and PVC materials (AZEK, Trex, TimberTech) last 25–50 years — compared to 10–15 for wood. The real cost is hiring a cheap contractor and paying twice.",
      },
      {
        q: "Do you offer payment plans or financing?",
        a: "We can discuss payment schedules as part of the contract agreement. We do not offer in-house financing, but can provide documentation to support third-party financing applications. Contact us to discuss your project.",
      },
      {
        q: "Why are your projects more expensive than other contractors?",
        a: "Because we are a Class A licensed, fully insured, Trex and TimberTech certified Design + Build firm. We handle everything — design, permits, HOA, engineering, installation. We don't subcontract the work. You pay for one integrated team and a result that lasts decades, not years.",
      },
    ],
  },
  {
    category: "Timeline & Process",
    questions: [
      {
        q: "How long does a deck or patio project take?",
        a: "Every project timeline is unique. Most medium-sized deck projects (1,500–2,000 sq ft) are completed in 4–8 weeks from permit approval. Full outdoor living systems may take 10–16 weeks. We provide a detailed timeline in every proposal, and we don't leave a job until it's complete.",
      },
      {
        q: "What is your design process?",
        a: "We follow a proven 4-step process: (1) Free on-site meeting to understand your vision, (2) 3D concept design and material selection, (3) Agreement review — you approve everything before we start, and (4) Professional installation with updates throughout. Nothing moves forward without your sign-off.",
      },
      {
        q: "When can you start my project?",
        a: "Our schedule fills quickly, especially spring through fall. We recommend reaching out as early as possible. Contact us to discuss our current availability and plan your project start date.",
      },
      {
        q: "Will I get updates during construction?",
        a: "Yes. You receive regular project updates with photos and progress reports. Mauricio personally stays in contact throughout the build. You'll never wonder what's happening on your property.",
      },
    ],
  },
  {
    category: "Permits & HOA",
    questions: [
      {
        q: "Do you handle permits?",
        a: "Yes — completely. We manage all building permits, HOA approvals, and final inspections in Loudoun County, Fairfax County, Prince William County, Arlington, and throughout Northern Virginia. You don't have to deal with any government office or HOA board. We handle it all.",
      },
      {
        q: "What if my HOA has strict design guidelines?",
        a: "We are experienced with HOA requirements across Northern Virginia. Our design team knows the common restrictions and submits compliant plans from the start. We've successfully completed projects in some of the most restrictive HOA communities in Ashburn, McLean, and Fairfax.",
      },
      {
        q: "Do I need a permit for a deck in Virginia?",
        a: "Almost always yes — decks over 200 square feet, attached to the home, or elevated off the ground require building permits in Virginia. We handle all permit applications, structural drawings, and inspection coordination as part of every project.",
      },
    ],
  },
  {
    category: "Materials",
    questions: [
      {
        q: "What decking materials do you recommend?",
        a: "We recommend PVC (AZEK) as our top choice for longevity and appearance, followed by composite (Trex, TimberTech). We are certified installers for both Trex and TimberTech. Wood is available but only recommended when specifically requested — it requires ongoing maintenance and has a much shorter lifespan.",
      },
      {
        q: "What is the difference between composite and PVC decking?",
        a: "Composite decking (Trex, TimberTech) is made from wood fiber and plastic, offering a wood-like appearance with low maintenance. PVC decking (AZEK) is 100% plastic — completely impervious to moisture, stains, and insects. Both last 25–50 years and come with manufacturer warranties. PVC is our top recommendation for pool decks and high-traffic areas.",
      },
      {
        q: "What paver brands do you use for patios?",
        a: "We primarily use Techo-Bloc and Unilock — two of the leading premium paver brands. We also install natural stone (bluestone, granite, travertine) and porcelain outdoor tile. Our material selection is based on your design preferences, budget, and the specific conditions of your property.",
      },
      {
        q: "Do you install outdoor kitchens?",
        a: "Yes. We design and install complete outdoor kitchens as part of our full outdoor living systems. This includes JBL outdoor audio, refrigerators, grill stations, prep areas, bar seating, and countertop materials. We also integrate Jandy pool equipment for pool-adjacent projects.",
      },
    ],
  },
  {
    category: "Licensing & Insurance",
    questions: [
      {
        q: "Are you licensed in Virginia?",
        a: "Yes. Blue Lightning Custom Decks LLC holds a Class A Contractor license in Virginia — the highest classification available. We are registered with the Virginia Department of Professional and Occupational Regulation (DPOR).",
      },
      {
        q: "Are you insured?",
        a: "Yes. We carry full General Liability insurance and Workers' Compensation insurance. We can provide certificates of insurance upon request before any work begins.",
      },
      {
        q: "Are you certified by Trex and TimberTech?",
        a: "Yes. We are certified installers for both Trex and TimberTech, two of the leading composite decking brands. Certification means our crew has been trained and tested on proper installation techniques — which is required to qualify for the full manufacturer warranty.",
      },
    ],
  },
  {
    category: "Working With Us",
    questions: [
      {
        q: "Do you subcontract your work?",
        a: "No. We are a true Design + Build firm — one integrated team handles design, engineering, permits, and installation. We never outsource the core work. This is how we maintain quality and accountability throughout every project.",
      },
      {
        q: "Do you serve my area?",
        a: "We serve the entire Northern Virginia / Washington DC metro area, including Ashburn, McLean, Herndon, Sterling, Reston, Falls Church, Fairfax, Burke, Centreville, Manassas, Arlington, Alexandria, and the surrounding DMV region.",
      },
      {
        q: "Is your team bilingual?",
        a: "Yes. Our team is fully bilingual in English and Spanish. Mauricio Caballero personally communicates with every client throughout the project.",
      },
      {
        q: "What happens if I'm not satisfied with the result?",
        a: "We don't leave until the job is done right. Before final payment, we do a complete walkthrough with you. If anything doesn't meet the agreed design and quality standard, we fix it. Our reputation is built on clients who refer us to their neighbors — and that only happens when every project is delivered right.",
      },
      {
        q: "How do I get started?",
        a: "Call us at (703) 423-9965 or fill out the consultation form on our website. Mauricio personally responds to every inquiry within 24 hours to schedule a free on-site meeting. There's no obligation — just an honest conversation about your vision.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh" }}>
      {/* Navigation */}
      <div className="px-6 md:px-12 lg:px-20 py-6">
        <Link href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
          style={{ color: "#8A8A8A", fontSize: "10px", letterSpacing: "0.18em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
        >
          <ArrowLeft size={13} />
          Blue Lightning Custom Decks
        </Link>
      </div>

      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 py-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>
              Frequently Asked Questions
            </span>
          </div>
          <h1
            className="font-light leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 6rem)", color: "#F5F0E8" }}
          >
            Questions About
            <br />
            <em style={{ color: "#C9A84C" }}>Your Project</em>
          </h1>
          <p style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.7, maxWidth: "560px" }}>
            We believe in complete transparency. Here are honest answers to the questions
            homeowners ask most before starting a deck or patio project in Northern Virginia.
          </p>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="px-6 md:px-12 lg:px-20 pb-32 max-w-4xl mx-auto">
        {faqCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: catIndex * 0.05 }}
            className="mb-16"
          >
            <h2
              className="text-xs tracking-[0.3em] uppercase mb-8 pb-4"
              style={{
                color: "#C9A84C",
                fontSize: "11px",
                letterSpacing: "0.22em",
                borderBottom: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.questions.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-3xl text-center"
          style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <h3
            className="font-light mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#F5F0E8" }}
          >
            Still Have Questions?
            <br />
            <em style={{ color: "#C9A84C" }}>Let&apos;s Talk.</em>
          </h3>
          <p style={{ color: "#8A8A8A", fontWeight: 300, maxWidth: "420px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Every project is unique. The best way to get accurate answers is to schedule
            a free on-site consultation — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17034239965"
              className="flex items-center gap-2 px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#C9A84C",
                fontSize: "12px",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <Phone size={14} />
              (703) 423-9965
            </a>
            <Link
              href="/contact"
              className="btn-gold px-8 py-4 rounded-xl text-xs"
              style={{ fontSize: "12px", letterSpacing: "0.15em" }}
            >
              Schedule Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: open ? "#141414" : "rgba(255,255,255,0.02)",
        border: open ? "1px solid rgba(201,168,76,0.2)" : "1px solid rgba(201,168,76,0.08)",
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 p-6">
        <h3
          className="text-sm font-medium leading-relaxed flex-1"
          style={{ color: open ? "#F5F0E8" : "#A89060", fontWeight: 400 }}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
          style={{ color: "#C9A84C" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="px-6 pb-6"
              style={{
                color: "#8A8A8A",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
                borderTop: "1px solid rgba(201,168,76,0.1)",
                paddingTop: "1rem",
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
