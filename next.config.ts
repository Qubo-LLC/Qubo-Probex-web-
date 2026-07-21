import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence cross-origin dev warning from Three.js canvas
  allowedDevOrigins: [
    "136.119.171.6",
    "qubo-probex.duckdns.org",
  ],

  images: {
    // All images are local public/ assets; add remote domains here if needed
    remotePatterns: [],
    // Disable blur placeholders for canvas/3D heavy pages
    dangerouslyAllowSVG: true,
  },

  // Suppress the "using `style` on motion.div" hydration noise in dev
  reactStrictMode: true,

  experimental: {
    // Needed for Framer Motion AnimatePresence with App Router
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
