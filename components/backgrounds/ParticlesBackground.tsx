"use client";

/**
 * ParticlesBackground — lightweight self-contained canvas particle system.
 * Drop-in for any section that needs local ambient particles.
 * No external dependencies. Fills parent element.
 */
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  opacity: number;
}

const COUNT     = 55;
const LINK_DIST = 110;

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let animId: number;
    let W = 0;
    let H = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement ?? document.body;
      W = parent.offsetWidth;
      H = parent.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
      // Rebuild particles on resize so they spread the new dimensions
      particles = Array.from({ length: COUNT }, () => ({
        x:       Math.random() * W,
        y:       Math.random() * H,
        vx:      (Math.random() - 0.5) * 0.3,
        vy:      (Math.random() - 0.5) * 0.3,
        r:       0.8 + Math.random(),
        opacity: 0.25 + Math.random() * 0.35,
      }));
    };

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(0,229,255,${(1 - dist / LINK_DIST) * 0.12})`;
            ctx.lineWidth   = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.fillStyle = `rgba(0,229,255,${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
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
