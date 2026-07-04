"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── PROBEX SUPER-CORE ────────────────────────────────────────────────────
   Original visualization (not a copy of the reference art): concentric rings,
   rotating conic light-sweeps for procedural lighting, orbiting nodes, layered
   radial bloom, and a pulsing core. All motion is CSS/transform-based (no
   per-frame JS) and disabled under prefers-reduced-motion.                    */
export default function SuperCoreVisual() {
  const reduced = useReducedMotion();
  const spin = (dur: number, dir: 1 | -1 = 1) =>
    reduced
      ? {}
      : { animate: { rotate: 360 * dir }, transition: { duration: dur, repeat: Infinity, ease: "linear" as const } };

  const ringMask =
    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden>
      {/* layered ambient bloom */}
      <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,229,255,0.18), transparent 60%)", filter: "blur(44px)" }} />
      <div className="absolute inset-[10%] rounded-full" style={{ background: "radial-gradient(circle at 50% 50%, rgba(23,59,171,0.16), transparent 62%)", filter: "blur(36px)" }} />
      <div className="absolute inset-[26%] rounded-full" style={{ background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.14), transparent 60%)", filter: "blur(30px)" }} />

      {/* concentric static rings — faint, no hard outline */}
      {[0, 11, 22, 33, 44].map((inset, i) => (
        <div key={i} className="absolute rounded-full" style={{ inset: `${inset}%`, border: `1px solid rgba(148,163,184,${0.05 + i * 0.012})` }} />
      ))}

      {/* rotating conic light sweep — cyan, outer */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "3%",
          background: "conic-gradient(from 0deg, transparent 0deg, transparent 215deg, rgba(0,229,255,0.55) 345deg, transparent 360deg)",
          WebkitMask: ringMask, mask: ringMask,
        }}
        {...spin(16)}
      />

      {/* rotating conic sweep — violet, mid, reverse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "19%",
          background: "conic-gradient(from 120deg, transparent 0deg, transparent 235deg, rgba(139,92,246,0.5) 350deg, transparent 360deg)",
          WebkitMask: ringMask, mask: ringMask,
        }}
        {...spin(22, -1)}
      />

      {/* slow dashed ring */}
      <motion.div className="absolute rounded-full" style={{ inset: "30%", border: "1px dashed rgba(0,229,255,0.22)" }} {...spin(46)} />

      {/* orbiting nodes */}
      <motion.div className="absolute inset-0" {...spin(30)}>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const violet = i % 2 === 1;
          const c = violet ? "#8b5cf6" : "#00e5ff";
          const s = violet ? 5 : 7;
          return (
            <div key={i} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${deg}deg) translateX(155px)` }}>
              <div className="rounded-full" style={{ width: s, height: s, marginLeft: -s / 2, marginTop: -s / 2, background: c, boxShadow: `0 0 10px ${c}` }} />
            </div>
          );
        })}
      </motion.div>

      {/* pulsing halo around core */}
      <motion.div
        className="absolute inset-[38%] rounded-full"
        style={{ border: "1px solid rgba(0,229,255,0.4)" }}
        animate={reduced ? {} : { scale: [1, 1.09, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={reduced ? {} : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* bright core with bloom */}
      <div
        className="absolute inset-[43%] rounded-full"
        style={{
          background: "radial-gradient(circle, #eafaff 0%, #00e5ff 42%, rgba(0,229,255,0.25) 100%)",
          boxShadow: "0 0 40px rgba(0,229,255,0.6), 0 0 90px rgba(0,229,255,0.28)",
        }}
      />
    </div>
  );
}
