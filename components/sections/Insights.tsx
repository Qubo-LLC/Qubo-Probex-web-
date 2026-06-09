"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const INSIGHTS = [
  {
    tag: "Consensus Theory",
    title: "Byzantine Fault Tolerance in Prediction Markets",
    excerpt: "How Probex adapts BFT consensus models to handle adversarial validators and conflicting event states at sub-40ms finality.",
    accent: "#00e5ff",
  },
  {
    tag: "Bayesian Methods",
    title: "Hierarchical Priors for Multi-Source Signal Fusion",
    excerpt: "A practical treatment of constructing hierarchical Bayesian priors that remain calibrated under sparse-data regimes.",
    accent: "#8b5cf6",
  },
  {
    tag: "Compliance Engineering",
    title: "In-Band Regulatory Logic Without Latency Penalty",
    excerpt: "Architectural patterns for embedding jurisdiction rules at the execution layer without adding measurable latency overhead.",
    accent: "#00e5ff",
  },
  {
    tag: "Market Microstructure",
    title: "AMM-Based Liquidity for Probabilistic Outcomes",
    excerpt: "Extending constant-function market makers to support binary outcome markets with asymmetric tail risk profiles.",
    accent: "#8b5cf6",
  },
];

export default function Insights() {
  return (
    <section id="research" className="py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="divider-cyan mb-16" />

        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="label-tag mb-4">[ RESEARCH ]</p>
              <h2
                className="text-gradient-white"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                The Thinking<br />Behind Probex
              </h2>
            </div>
            <button
              className="hidden md:block text-xs tracking-widest uppercase pb-0.5 transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
                borderBottom: "1px solid rgba(148,163,184,0.15)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Full library →
            </button>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSIGHTS.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer rounded-xl p-6 gpu transition-colors duration-200 h-full flex flex-col"
                style={{
                  background: "rgba(11,16,32,0.7)",
                  border: "1px solid rgba(148,163,184,0.07)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${item.accent}28`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(148,163,184,0.07)")}
              >
                <span
                  className="text-[9px] tracking-[0.2em] uppercase mb-4 block"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: item.accent }}
                >
                  {item.tag}
                </span>
                <h3
                  className="text-sm font-bold leading-snug mb-3 flex-1"
                  style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3"
                  style={{ fontFamily: "Manrope, sans-serif", color: "var(--text-secondary)" }}
                >
                  {item.excerpt}
                </p>
                <div
                  className="h-px mt-auto"
                  style={{ background: `linear-gradient(to right, ${item.accent}40, transparent)` }}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
