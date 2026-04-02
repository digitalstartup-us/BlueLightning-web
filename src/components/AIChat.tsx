"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown, Sparkles, Phone, ArrowRight, Loader2 } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
type Role = "user" | "assistant";
type Message = { role: Role; content: string; id: string };

/* ─── Quick-reply chip sets ──────────────────────────────── */
const INITIAL_CHIPS = [
  "I want a new deck",
  "Pool deck transformation",
  "Full backyard makeover",
  "Pergola or shade system",
  "Outdoor kitchen",
  "Patio or driveway",
];

const FOLLOW_UP_CHIPS = [
  "What materials do you recommend?",
  "How long does it take?",
  "Do you handle permits & HOA?",
  "Can I get a 3D design?",
  "What's the process like?",
  "Talk to Gary about pricing",
];

const WELCOME =
  "Hi! I'm Alex, Blue Lightning's design consultant. I help Northern Virginia homeowners create extraordinary outdoor living spaces — decks, pool decks, patios, pergolas, outdoor kitchens, and full backyard transformations.\n\nWhat kind of project are you dreaming about?";

function uid() {
  return Math.random().toString(36).slice(2);
}

/* ─── Lead capture form ──────────────────────────────────── */
function LeadForm({ onSubmit }: { onSubmit: (data: LeadData) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    await onSubmit({ name, email, phone });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="rounded-xl overflow-hidden mt-2"
      style={{ border: "1px solid rgba(201,168,76,0.25)", background: "#161616" }}
    >
      <div className="px-4 py-3" style={{ background: "rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="flex items-center gap-2">
          <Sparkles size={13} style={{ color: "#C9A84C" }} />
          <span style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Connect with our team
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name *"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "13px" }}
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address *"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "13px" }}
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (optional)"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "#1E1E1E", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F0E8", fontSize: "13px" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          disabled={loading}
          className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium"
          style={{ background: "#C9A84C", color: "#0D0D0D", fontSize: "12px", letterSpacing: "0.08em", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} />}
          {loading ? "Sending…" : "Send My Details to the Team"}
        </motion.button>
        <p style={{ color: "#555", fontSize: "10px", textAlign: "center" }}>
          Gary or Mauricio will reach out within 24 hours.
        </p>
      </div>
    </motion.form>
  );
}

/* ─── Typing indicator ────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#C9A84C" }}
        />
      ))}
    </div>
  );
}

/* ─── Message bubble ─────────────────────────────────────── */
function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center text-xs font-bold"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "10px" }}
        >
          BL
        </div>
      )}
      <div
        className="max-w-[82%] px-4 py-3 rounded-2xl"
        style={
          isUser
            ? { background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", color: "#F5F0E8" }
            : { background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.05)", color: "#E8E3DB" }
        }
      >
        <p style={{ fontSize: "13px", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{msg.content}</p>
      </div>
    </motion.div>
  );
}

/* ─── Lead data type ─────────────────────────────────────── */
type LeadData = { name: string; email: string; phone: string };

/* ─── Main AIChat component ──────────────────────────────── */
export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME, id: uid() },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [chips, setChips] = useState(INITIAL_CHIPS);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [unread, setUnread] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: Role; content: string }[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  /* scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText, showLeadForm]);

  /* auto-open with a subtle delay if user hasn't seen it */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hasOpened) setUnread(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  const open = () => {
    setIsOpen(true);
    setHasOpened(true);
    setUnread(false);
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;
      const userMsg: Message = { role: "user", content: text.trim(), id: uid() };
      const newHistory = [...chatHistory, { role: "user" as Role, content: text.trim() }];
      setMessages((prev) => [...prev, userMsg]);
      setChatHistory(newHistory);
      setInput("");
      setChips([]);
      setIsStreaming(true);
      setStreamingText("");

      // Cancel previous stream if any
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory }),
          signal: abortRef.current.signal,
        });

        if (!res.ok || !res.body) throw new Error("Stream failed");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let full = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          full += decoder.decode(value, { stream: true });
          setStreamingText(full);
        }

        // Check for lead collection trigger
        const shouldCollect = full.includes("[COLLECT_LEAD]");
        const cleanText = full.replace("[COLLECT_LEAD]", "").trim();

        const assistantMsg: Message = { role: "assistant", content: cleanText, id: uid() };
        setMessages((prev) => [...prev, assistantMsg]);
        setChatHistory((prev) => [...prev, { role: "assistant", content: cleanText }]);
        setStreamingText("");

        if (shouldCollect && !leadDone) {
          setTimeout(() => setShowLeadForm(true), 400);
        } else {
          // Show follow-up chips after 3 exchanges
          if (newHistory.length >= 4) setChips(FOLLOW_UP_CHIPS.slice(0, 3));
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        const errMsg: Message = {
          role: "assistant",
          content: "I'm having a brief connection issue. Please call us directly at (703) 423-9965 — Gary will be happy to help!",
          id: uid(),
        };
        setMessages((prev) => [...prev, errMsg]);
        setStreamingText("");
      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming, chatHistory, leadDone]
  );

  const handleLeadSubmit = async (data: LeadData) => {
    setShowLeadForm(false);
    setLeadDone(true);

    // Build conversation summary
    const transcript = messages
      .concat(chatHistory.length ? [] : [])
      .map((m) => `${m.role === "user" ? "Homeowner" : "Alex (AI)"}: ${m.content}`)
      .join("\n\n");

    // Send to API (reuse contact route logic via a new endpoint)
    try {
      await fetch("/api/chat-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, transcript }),
      });
    } catch (_) {
      // silent — still show confirmation to user
    }

    const confirm: Message = {
      role: "assistant",
      content: `Perfect, ${data.name}! I've sent your details and our full conversation to Gary and Mauricio. Expect a call or email within 24 hours.\n\nIn the meantime, feel free to explore our portfolio or call directly at (703) 423-9965. We're excited to help bring your outdoor vision to life!`,
      id: uid(),
    };
    setMessages((prev) => [...prev, confirm]);
    setChatHistory((prev) => [...prev, { role: "assistant", content: confirm.content }]);
  };

  return (
    <>
      {/* ── Floating button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-btn"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            onClick={open}
            className="fixed z-[150] flex items-center gap-2.5 pl-3 pr-4 py-3 rounded-full shadow-2xl cursor-pointer"
            style={{
              bottom: "100px",
              right: "24px",
              background: "linear-gradient(135deg, #C9A84C 0%, #A8873C 100%)",
              boxShadow: "0 8px 32px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {/* Pulse ring */}
            {unread && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(201,168,76,0.4)" }}
              />
            )}
            <Sparkles size={16} style={{ color: "#0D0D0D" }} />
            <span style={{ color: "#0D0D0D", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em" }}>
              Ask Our AI
            </span>
            {unread && (
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "#E57373", fontSize: "9px", color: "#fff", fontWeight: 700 }}>1</div>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.92, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed z-[150] flex flex-col overflow-hidden rounded-2xl shadow-2xl"
            style={{
              bottom: "24px",
              right: "24px",
              width: "min(390px, calc(100vw - 32px))",
              height: "min(560px, calc(100dvh - 48px))",
              background: "#0D0D0D",
              border: "1px solid rgba(201,168,76,0.18)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #131313 0%, #0F0F0F 100%)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #A8873C)", boxShadow: "0 2px 8px rgba(201,168,76,0.3)" }}>
                  <Sparkles size={15} style={{ color: "#0D0D0D" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "#F5F0E8", fontWeight: 400, letterSpacing: "0.02em" }}>
                    Blue Lightning AI
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#4CAF50" }}
                    />
                    <span style={{ color: "#8A8A8A", fontSize: "10px" }}>Online · Responds instantly</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a href="tel:+17034239965"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ color: "#C9A84C" }}
                  title="Call us">
                  <Phone size={14} />
                </a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ color: "#8A8A8A", background: "rgba(255,255,255,0.05)" }}
                >
                  <X size={15} />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ scrollbarWidth: "none" }}>
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} msg={msg} />
                ))}
              </AnimatePresence>

              {/* Streaming bubble */}
              {isStreaming && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontSize: "10px" }}>
                    BL
                  </div>
                  <div className="max-w-[82%] px-4 py-3 rounded-2xl"
                    style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.05)", color: "#E8E3DB" }}>
                    {streamingText ? (
                      <p style={{ fontSize: "13px", lineHeight: 1.65, whiteSpace: "pre-wrap" }}>{streamingText}</p>
                    ) : (
                      <TypingDots />
                    )}
                  </div>
                </motion.div>
              )}

              {/* Lead form */}
              {showLeadForm && !leadDone && (
                <LeadForm onSubmit={handleLeadSubmit} />
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick reply chips */}
            <AnimatePresence>
              {chips.length > 0 && !isStreaming && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0"
                >
                  {chips.map((chip) => (
                    <motion.button
                      key={chip}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => sendMessage(chip)}
                      className="px-3 py-1.5 rounded-full text-xs transition-colors duration-200"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", fontSize: "11px" }}
                    >
                      {chip}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="flex-shrink-0 px-3 pb-3 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)" }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
                  placeholder="Ask about decks, patios, pergolas…"
                  disabled={isStreaming}
                  className="flex-1 bg-transparent outline-none"
                  style={{ color: "#F5F0E8", fontSize: "13px", caretColor: "#C9A84C" }}
                />
                <motion.button
                  whileHover={{ scale: isStreaming ? 1 : 1.1 }}
                  whileTap={{ scale: isStreaming ? 1 : 0.9 }}
                  onClick={() => sendMessage(input)}
                  disabled={isStreaming || !input.trim()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: input.trim() && !isStreaming ? "#C9A84C" : "rgba(201,168,76,0.2)", transition: "background 0.2s" }}
                >
                  {isStreaming
                    ? <Loader2 size={14} className="animate-spin" style={{ color: "#C9A84C" }} />
                    : <Send size={14} style={{ color: input.trim() ? "#0D0D0D" : "#C9A84C" }} />
                  }
                </motion.button>
              </div>
              <p className="text-center mt-1.5" style={{ color: "#333", fontSize: "9px", letterSpacing: "0.06em" }}>
                AI by Blue Lightning · Powered by GPT-4o
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
