"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[5] rounded-full will-change-transform"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 420,
        height: 420,
        background:
          "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,229,255,0.04) 35%, transparent 70%)",
        filter: "blur(28px)",
      }}
    />
  );
}