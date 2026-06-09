"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Terminal, ShieldCheck, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/* ─── Reads from env — set NEXT_PUBLIC_PROBEX_URL in .env.local ─────── */
const PROBEX_URL = process.env.NEXT_PUBLIC_PROBEX_URL ?? "#";

const TRUST_SIGNALS = [
  { icon: ShieldCheck, label: "SOC 2 Type II",         value: "Certified"  },
  { icon: Zap,         label: "Consensus Precision",   value: "99.42%"     },
  { icon: Terminal,    label: "End-to-End Latency",    value: "< 90ms"     },
];

/* ─── TERMINAL PROMPT LINE ───────────────────────────────────────────── */
function PromptLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay }}
      viewport={{ once: true }}
      className="flex items-baseline gap-2"
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(0,229,255,0.5)" }}>
        $
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#4a6680" }}>
        {text}
      </span>
    </motion.div>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────────────────── */
export default function CTABridge() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Top divider */}
      <div className="divider-cyan absolute top-0 inset-x-0" />

      {/* Ambient glow under content */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,229,255,0.04) 0%, rgba(124,58,237,0.025) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-stretch">

          {/* ── LEFT CONTENT ── */}
          <Reveal>
            <div>
              <p className="label-tag mb-6">[ ACCESS THE PLATFORM ]</p>

              <h2
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.4rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                }}
              >
                <span className="text-gradient-white">Ready to trade on</span>
                <br />
                <span className="text-gradient-probex">real-time consensus?</span>
              </h2>

              <p
                className="max-w-lg text-sm leading-relaxed mb-8"
                style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
              >
                Probex is live. Institutional and professional counterparties can access
                the full platform today — live markets, real-time consensus feeds,
                and compliance tooling for 47 jurisdictions.
              </p>

              {/* Trust signals */}
              <div className="flex gap-6 flex-wrap mb-10">
                {TRUST_SIGNALS.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <Icon
                      size={13}
                      style={{ color: i % 2 === 0 ? "var(--cyan-dim)" : "var(--violet-soft)" }}
                    />
                    <div>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "var(--text-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                        {label}
                      </p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Primary — Access Probex Platform */}
                <a
                  href={PROBEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,229,255,0.30), 0 0 80px rgba(124,58,237,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide cursor-pointer gpu"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 50%, #7c3aed 100%)",
                      color: "#060b18",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Access Probex Platform
                    <ArrowRight size={15} />
                  </motion.span>
                </a>

                {/* Secondary — learn more */}
                <motion.button
                  whileHover={{ borderColor: "rgba(0,229,255,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium gpu transition-colors duration-200"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    border: "1px solid rgba(148,163,184,0.14)",
                    color: "var(--text-secondary)",
                    background: "transparent",
                  }}
                >
                  Request institutional access
                  <ExternalLink size={13} />
                </motion.button>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT — TERMINAL CARD ── */}
          <Reveal delay={0.12} direction="right">
            <div
              className="rounded-2xl overflow-hidden gpu"
              style={{
                width: "min(360px, 100%)",
                background: "var(--bg-terminal)",
                border: "1px solid rgba(148,163,184,0.08)",
                boxShadow: "0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              {/* Chrome */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: "1px solid rgba(148,163,184,0.06)", background: "rgba(255,255,255,0.018)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,95,87,0.6)"  }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,189,68,0.6)" }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: "rgba(39,201,63,0.6)"  }} />
                  <span
                    className="ml-2 text-[9px] tracking-[0.16em]"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2a3f55" }}
                  >
                    probex-cli
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-data-blink" style={{ background: "#22c55e" }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "#22c55e", letterSpacing: "0.18em" }}>
                    CONNECTED
                  </span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="px-4 py-4 space-y-2" style={{ minHeight: 220 }}>
                <PromptLine text="probex auth --mode=institutional" delay={0.1} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#22c55e" }}>
                    ✓ Authentication successful
                  </span>
                </motion.div>

                <PromptLine text="probex market list --active" delay={0.5} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="pl-3 space-y-1"
                >
                  {[
                    "PRX-001  Fed rate cut Q3       YES: 67.4%",
                    "PRX-002  BTC > $120k EOM       YES: 44.1%",
                    "PRX-005  NVDA earnings beat    YES: 72.9%",
                    "  ... 837 markets active",
                  ].map((line, i) => (
                    <p key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: i === 3 ? "#2a3f55" : "#4a6680" }}>
                      {line}
                    </p>
                  ))}
                </motion.div>

                <PromptLine text="probex consensus --stream PRX-001" delay={1.1} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  viewport={{ once: true }}
                  className="pl-3"
                >
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "#22d3ee" }}>
                    Streaming consensus · latency 11ms · quorum 98/128
                  </p>
                </motion.div>

                {/* Blinking cursor */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(0,229,255,0.5)" }}>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-1.5 h-3 rounded-[1px]"
                    style={{ background: "rgba(0,229,255,0.6)" }}
                  />
                </div>
              </div>

              {/* URL strip */}
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(148,163,184,0.05)", background: "rgba(255,255,255,0.01)" }}
              >
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", color: "#2a3f55" }}
                >
                  {PROBEX_URL !== "#" ? PROBEX_URL.replace(/^https?:\/\//, "") : "platform.probex.io"}
                </span>
                <a
                  href={PROBEX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-dim)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <ExternalLink size={10} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em" }}>
                    OPEN
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="divider-cyan absolute bottom-0 inset-x-0" />
    </section>
  );
}
