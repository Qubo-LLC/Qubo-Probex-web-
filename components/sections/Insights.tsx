"use client";

import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/* ─── UNIFIED RESEARCH LIBRARY ────────────────────────────────────────────
   Merges Featured Research, Institutional Insights, Publications and
   Whitepapers into one premium auto-scrolling rail.                         */
interface ResearchItem {
  category: "Featured Research" | "Institutional Insights" | "Publication" | "Whitepaper";
  type: string;
  date: string;
  title: string;
  excerpt: string;
  accent: string;
}

const ITEMS: ResearchItem[] = [
  { category: "Featured Research", type: "Whitepaper", date: "2025.11", title: "Byzantine Fault Tolerance in Prediction Markets", excerpt: "Adapting BFT consensus to adversarial validators and conflicting event states at sub-40ms finality.", accent: "#00e5ff" },
  { category: "Institutional Insights", type: "Analysis", date: "2025.09", title: "In-Band Regulatory Logic Without Latency Penalty", excerpt: "Embedding jurisdiction rules at the execution layer with no measurable latency overhead.", accent: "#8b5cf6" },
  { category: "Whitepaper", type: "Method", date: "2025.08", title: "Hierarchical Priors for Multi-Source Signal Fusion", excerpt: "Constructing Bayesian priors that stay calibrated under sparse-data regimes.", accent: "#00e5ff" },
  { category: "Publication", type: "Journal", date: "2025.06", title: "AMM Liquidity for Probabilistic Outcomes", excerpt: "Extending constant-function market makers to binary markets with asymmetric tail risk.", accent: "#8b5cf6" },
  { category: "Featured Research", type: "Whitepaper", date: "2025.05", title: "Adaptive Kelly Sizing Under Capital Constraints", excerpt: "Survival-first position sizing that preserves capital through drawdown regimes.", accent: "#00e5ff" },
  { category: "Whitepaper", type: "Method", date: "2025.03", title: "Brier-Calibrated Consensus for Event Resolution", excerpt: "Continuously scoring validator forecasts and down-weighting persistent miscalibration.", accent: "#8b5cf6" },
  { category: "Institutional Insights", type: "Note", date: "2025.02", title: "Edge Decay in High-Frequency Prediction Feeds", excerpt: "How informational edge erodes across the ingestion-to-execution path, and where to recover it.", accent: "#00e5ff" },
  { category: "Publication", type: "Journal", date: "2024.12", title: "Survival-First Risk Models for Autonomous Trading", excerpt: "A formal treatment of capital-preservation states and recovery dynamics under loss.", accent: "#8b5cf6" },
];

/* ─── CARD ────────────────────────────────────────────────────────────────── */
function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article
      className="glass-card surface-highlight shrink-0 p-6 flex flex-col gpu"
      style={{ width: 320, borderRadius: "0.75rem" }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono-stack)", color: item.accent }}>
          {item.category}
        </span>
        <span className="text-[9px] tracking-[0.14em] uppercase" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>
          {item.type} · {item.date}
        </span>
      </div>

      <h3 className="text-base font-bold leading-snug mb-3" style={{ fontFamily: "var(--font-heading-stack)", color: "var(--text-primary)", letterSpacing: "-0.015em" }}>
        {item.title}
      </h3>

      <p className="text-[13px] leading-relaxed mb-6 flex-1" style={{ fontFamily: "var(--font-heading-stack)", color: "var(--text-secondary)" }}>
        {item.excerpt}
      </p>

      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(148,163,184,0.06)" }}>
        <span className="text-[10px] tracking-[0.16em] uppercase" style={{ fontFamily: "var(--font-mono-stack)", color: "var(--text-muted)" }}>
          Read
        </span>
        <ArrowUpRight size={14} style={{ color: item.accent }} />
      </div>
    </article>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
export default function Insights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);

  const setPause = (v: boolean) => { pausedRef.current = v; setPaused(v); };

  // Continuous infinite auto-scroll (transform mutated outside React each frame)
  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let setW = track.scrollWidth / 2; // width of one (un-duplicated) set
    const onResize = () => { setW = track.scrollWidth / 2; };
    window.addEventListener("resize", onResize);

    const step = () => {
      if (!pausedRef.current) {
        offsetRef.current -= 0.4;
        if (offsetRef.current <= -setW) offsetRef.current += setW;
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [reduced]);

  // Manual nav — jump one card, wrapping within the first set
  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const setW = track.scrollWidth / 2;
    offsetRef.current -= dir * 336; // card width (320) + gap (16)
    if (offsetRef.current <= -setW) offsetRef.current += setW;
    if (offsetRef.current > 0) offsetRef.current -= setW;
    track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  return (
    <section id="research" className="py-28 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="divider-cyan mb-16" />

        <Reveal>
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <p className="label-tag mb-4">[ RESEARCH INTELLIGENCE ]</p>
              <h2
                className="text-gradient-white"
                style={{ fontFamily: "var(--font-heading-stack)", fontWeight: 800, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
              >
                Research<br />Intelligence
              </h2>
            </div>

            {/* Manual navigation */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => nudge(-1)}
                aria-label="Previous research"
                className="btn-glass grid place-items-center w-9 h-9 rounded-lg"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() => nudge(1)}
                aria-label="Next research"
                className="btn-glass grid place-items-center w-9 h-9 rounded-lg"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* CAROUSEL — full-bleed rail */}
      <div
        role="region"
        aria-label="Research library"
        aria-roledescription="carousel"
        className="relative"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
        onFocusCapture={() => setPause(true)}
        onBlurCapture={() => setPause(false)}
      >
        {/* edge fades */}
        <div aria-hidden className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-base), transparent)" }} />
        <div aria-hidden className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-base), transparent)" }} />

        <div ref={trackRef} className="flex gap-4 px-6 will-change-transform">
          {ITEMS.map((item, i) => <ResearchCard key={`a-${i}`} item={item} />)}
          {/* duplicate set for seamless loop — hidden from a11y tree */}
          {ITEMS.map((item, i) => (
            <div key={`b-${i}`} aria-hidden>
              <ResearchCard item={item} />
            </div>
          ))}
        </div>

        <span className="sr-only" aria-live="polite">{paused ? "Carousel paused" : "Carousel auto-scrolling"}</span>
      </div>
    </section>
  );
}
