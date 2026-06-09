"use client";

import { useEffect, useRef } from "react";

type Mode = "idle" | "bull" | "bear";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
}

const PALETTE: Record<Mode, string> = {
  idle: "0,229,255",
  bull: "0,229,170",
  bear: "255,80,100",
};

export default function GridParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let animId: number;
    let mode: Mode = "idle";

    const init = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
      return { W, H };
    };

    let { W, H } = init();

    const makeParticles = (): Particle[] =>
      Array.from({ length: 70 }, () => ({
        x:       Math.random() * W,
        y:       Math.random() * H,
        vx:      (Math.random() - 0.5) * 0.4,
        vy:      (Math.random() - 0.5) * 0.4,
        targetX: 0,
        targetY: 0,
        size:    1 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5,
      }));

    let particles = makeParticles();

    // Mode cycling
    const modeInterval = setInterval(() => {
      const r = Math.random();
      mode = r < 0.33 ? "bull" : r < 0.66 ? "bear" : "idle";

      if (mode !== "idle") {
        particles.forEach((p, i) => {
          const t = i / particles.length;
          p.targetX = t * W;
          p.targetY = mode === "bull"
            ? H * 0.65 - t * H * 0.3
            : H * 0.35 + t * H * 0.3;
        });
      }
    }, 4000);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const rgb = PALETTE[mode];

      particles.forEach((p) => {
        if (mode === "idle") {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        } else {
          p.x += (p.targetX - p.x) * 0.04;
          p.y += (p.targetY - p.y) * 0.04;
        }

        ctx.shadowBlur   = 6;
        ctx.shadowColor  = `rgba(${rgb},0.5)`;
        ctx.fillStyle    = `rgba(${rgb},${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      ({ W, H } = init());
      particles = makeParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(modeInterval);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
