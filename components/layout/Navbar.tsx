"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { name: "Pipeline",      id: "pipeline"      },
  { name: "Architecture",  id: "architecture"  },
  { name: "Core",          id: "supercore"     },
  { name: "Research",      id: "research"      },
];

const SPY_IDS = ["home", ...NAV_LINKS.map((l) => l.id)];

const PROBEX_URL = process.env.NEXT_PUBLIC_PROBEX_URL ?? "#";

function NavLink({ name, active, onClick }: { name: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`relative group text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-200 gpu ${
        active ? "text-[var(--cyan)]" : "text-[var(--text-secondary)] hover:text-white"
      }`}
      style={{ fontFamily: "var(--font-mono-stack)" }}
    >
      {name}
      <span
        className={`absolute left-0 -bottom-1.5 h-px transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
        style={{ background: "var(--cyan)" }}
      />
    </button>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const bgOpacity   = useTransform(scrollY, [0, 100], [0, 0.96]);
  const borderAlpha = useTransform(scrollY, [0, 100], [0.05, 0.13]);
  const blur        = useTransform(scrollY, [0, 100], [0, 18]);

  const backgroundColor = useMotionTemplate`rgba(6,11,24,${bgOpacity})`;
  const backdropFilter  = useMotionTemplate`blur(${blur}px)`;
  const borderBottom    = useMotionTemplate`1px solid rgba(148,163,184,${borderAlpha})`;

  // Scrollspy — highlight the nav item whose section owns the viewport band
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    SPY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter, borderBottom }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-[3.75rem] flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 group"
          >
            <span
              className="text-sm font-bold tracking-[0.16em] transition-colors duration-200 group-hover:text-[var(--cyan)]"
              style={{ color: "var(--text-primary)", fontFamily: "Manrope, sans-serif" }}
            >
              QUBO
            </span>
            <span
              className="text-[9px] tracking-[0.25em] font-medium px-1.5 py-0.5 rounded border"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--cyan-dim)",
                borderColor: "rgba(0,229,255,0.18)",
                background: "rgba(0,229,255,0.06)",
              }}
            >
              PROBEX
            </span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.id}
                name={item.name}
                active={activeId === item.id}
                onClick={() => scrollTo(item.id)}
              />
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Platform access CTA */}
            <a href={PROBEX_URL} target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(0,229,255,0.32)" }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs tracking-widest uppercase gpu"
              >
                Access Probex
                <ExternalLink size={11} />
              </motion.span>
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-1"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.26, ease: "easeInOut" }}
        className="fixed top-[3.75rem] left-0 w-full z-40 overflow-hidden md:hidden"
        style={{
          background: "rgba(6,11,24,0.98)",
          borderBottom: "1px solid rgba(148,163,184,0.08)",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-0.5">
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={activeId === item.id ? "true" : undefined}
              className={`text-left text-[11px] uppercase tracking-[0.18em] py-3 transition-colors duration-200 ${
                activeId === item.id ? "text-[var(--cyan)]" : "text-[var(--text-secondary)] hover:text-white"
              }`}
              style={{
                borderBottom: "1px solid rgba(148,163,184,0.05)",
                fontFamily: "var(--font-mono-stack)",
              }}
            >
              {item.name}
            </button>
          ))}
          <a href={PROBEX_URL} target="_blank" rel="noopener noreferrer">
            <span className="btn-primary flex items-center justify-center gap-2 mt-3 py-3 rounded-lg text-xs tracking-widest uppercase">
              Access Probex <ExternalLink size={11} />
            </span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
