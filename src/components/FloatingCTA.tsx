"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mb-4 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(201,168,76,0.2)",
                  width: "280px",
                }}
              >
                <div
                  className="px-5 py-4"
                  style={{ background: "linear-gradient(135deg, #9E7A2E, #C9A84C)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#0D0D0D" }}>
                    Get Your Free Consultation
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(13,13,13,0.7)" }}>
                    No obligation · Responds within 1 hour
                  </p>
                </div>
                <div className="p-4 space-y-2">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    <Phone size={16} style={{ color: "#C9A84C" }} />
                    <div>
                      <div className="text-xs font-medium" style={{ color: "#F5F0E8" }}>Call Now</div>
                      <div className="text-xs" style={{ color: "#8A8A8A" }}>(555) 123-4567</div>
                    </div>
                  </a>
                  <button
                    onClick={() => {
                      setOpen(false);
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl w-full transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
                  >
                    <Calendar size={16} style={{ color: "#C9A84C" }} />
                    <div className="text-left">
                      <div className="text-xs font-medium" style={{ color: "#F5F0E8" }}>Book Consultation</div>
                      <div className="text-xs" style={{ color: "#8A8A8A" }}>Free design session</div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-end gap-3">
            {!open && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-4 py-2 rounded-full text-xs font-medium shadow-lg"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#F5F0E8",
                  whiteSpace: "nowrap",
                }}
              >
                Free Consultation
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #9E7A2E, #C9A84C)",
                boxShadow: "0 8px 32px rgba(201,168,76,0.4)",
              }}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} color="#0D0D0D" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle size={20} color="#0D0D0D" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
