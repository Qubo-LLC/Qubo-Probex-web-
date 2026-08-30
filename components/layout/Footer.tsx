"use client";

import { ExternalLink } from "lucide-react";

const PLATFORM_LINKS = ["Probex Engine", "Architecture", "Compliance", "API Docs"];
const COMPANY_LINKS  = ["About QUBO",   "Careers",      "Press",      "Contact"];
const LEGAL_LINKS    = ["Privacy Policy","Terms of Service","Cookie Policy"];

const PROBEX_URL = process.env.NEXT_PUBLIC_PROBEX_URL ?? "#";

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <p
        className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
        style={{ color: "var(--text-primary)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        {heading}
      </p>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item}>
            <button
              className="text-sm text-left transition-colors duration-200"
              style={{ color: "var(--text-muted)", fontFamily: "Manrope, sans-serif", fontWeight: 400 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    // shrink-0: the footer is a flex item of the body column and overflow-hidden
    // zeroes its automatic minimum size — without this, any fixed body height
    // lets flexbox collapse the footer to its 1px border.
    <footer
      className="relative z-10 overflow-hidden shrink-0"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      {/* Top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 180,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="text-base font-bold tracking-[0.14em]"
                style={{ color: "var(--text-primary)", fontFamily: "Manrope, sans-serif" }}
              >
                QUBO
              </span>
              <span
                className="text-[9px] tracking-[0.22em] px-1.5 py-0.5 rounded border"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--cyan-dim)",
                  borderColor: "rgba(0,229,255,0.16)",
                  background: "rgba(0,229,255,0.05)",
                }}
              >
                PROBEX
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "var(--text-muted)", fontFamily: "Manrope, sans-serif" }}
            >
              Real-time probabilistic consensus infrastructure for compliant predictive markets.
            </p>

            {/* Status indicator */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] tracking-[0.22em] uppercase"
              style={{
                background: "rgba(0,229,255,0.05)",
                border: "1px solid rgba(0,229,255,0.1)",
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 5px #22c55e" }}
              />
              Systems Operational
            </div>

            {/* Platform link */}
            <div className="mt-4">
              <a
                href={PROBEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200 group"
                style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="group-hover:text-[var(--cyan-dim)] transition-colors duration-200">
                  probex.platform
                </span>
                <ExternalLink size={10} className="group-hover:text-[var(--cyan-dim)] transition-colors duration-200" />
              </a>
            </div>
          </div>

          <FooterCol heading="Platform" links={PLATFORM_LINKS} />
          <FooterCol heading="Company"  links={COMPANY_LINKS}  />
          <FooterCol heading="Legal"    links={LEGAL_LINKS}    />
        </div>

        {/* BOTTOM BAR */}
        <div
          className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "Manrope, sans-serif" }}
          >
            © 2026 QUBO LLC. All rights reserved.
          </p>
          <p
            className="text-[10px] tracking-[0.2em]"
            style={{ color: "rgba(0,229,255,0.15)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            PROBEX::CONSENSUS ENGINE
          </p>
        </div>
      </div>
    </footer>
  );
}
