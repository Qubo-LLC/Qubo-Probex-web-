"use client";

import { useEffect, useRef } from "react";

interface SignalLine {
  points: { x: number; y: number }[];
  type: "bull" | "bear" | "neutral";
  phase: number;
  speed: number;
}

export default function TradeSignals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const setSize = () => {
      const parent = canvas.parentElement!;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    setSize();

    const buildSignals = (): SignalLine[] => {
      const W = canvas.width;
      const H = canvas.height;
      const COLS = 24;

      return [
        {
          type: "bull",
          phase: 0,
          speed: 0.4,
          points: Array.from({ length: COLS }, (_, i) => ({
            x: (i / (COLS - 1)) * W,
            y: H * 0.55 - (i / COLS) * H * 0.35,
          })),
        },
        {
          type: "bear",
          phase: Math.PI * 0.6,
          speed: 0.35,
          points: Array.from({ length: COLS }, (_, i) => ({
            x: (i / (COLS - 1)) * W,
            y: H * 0.45 + (i / COLS) * H * 0.3,
          })),
        },
        {
          type: "neutral",
          phase: Math.PI * 1.2,
          speed: 0.55,
          points: Array.from({ length: COLS }, (_, i) => ({
            x: (i / (COLS - 1)) * W,
            y: H * 0.5 + Math.sin((i / COLS) * Math.PI * 2) * H * 0.12,
          })),
        },
      ];
    };

    let signals = buildSignals();
    let t = 0;

    const COLORS = {
      bull:    { stroke: "rgba(0,229,170,0.55)",  glow: "rgba(0,229,170,0.2)" },
      bear:    { stroke: "rgba(255,80,100,0.55)",  glow: "rgba(255,80,100,0.2)" },
      neutral: { stroke: "rgba(0,229,255,0.45)",  glow: "rgba(0,229,255,0.15)" },
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      signals.forEach((signal) => {
        const col = COLORS[signal.type];

        // Glow pass
        ctx.save();
        ctx.filter = "blur(4px)";
        ctx.beginPath();
        signal.points.forEach((p, i) => {
          const y = p.y + Math.sin(t * signal.speed + signal.phase + i * 0.28) * (H * 0.06);
          i === 0 ? ctx.moveTo(p.x, y) : ctx.lineTo(p.x, y);
        });
        ctx.strokeStyle = col.glow;
        ctx.lineWidth = 3;
        ctx.setLineDash([]);
        ctx.stroke();
        ctx.restore();

        // Crisp line pass
        ctx.beginPath();
        signal.points.forEach((p, i) => {
          const y = p.y + Math.sin(t * signal.speed + signal.phase + i * 0.28) * (H * 0.06);
          i === 0 ? ctx.moveTo(p.x, y) : ctx.lineTo(p.x, y);
        });
        ctx.strokeStyle = col.stroke;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([5, 8]);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      setSize();
      signals = buildSignals();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}
