import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import Script from "next/script"; 

/* ── SELF-HOSTED FONTS (next/font) ──────────────────────────────────────
   Exposed as CSS variables so components consume --font-heading / --font-mono.
   The Google @import in globals.css is retained as a fallback for sections
   not yet migrated to the variables; scheduled for removal in Phase 7. */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUBO LLC — Probex Predictive Infrastructure",
  description:
    "Probex is QUBO's real-time probabilistic consensus and predictive engine — institutional-grade infrastructure for high-density, compliant predictive markets.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#060b18",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HWZ6ZBSWJC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWZ6ZBSWJC');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)]">
        {/* ── AMBIENT RADIAL LAYERS ── */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            background: [
              "radial-gradient(ellipse 68% 44% at 12% -2%,  rgba(0,229,255,0.042) transparent 60%)",
              "radial-gradient(ellipse 52% 40% at 88% 102%, rgba(124,58,237,0.038) transparent 55%)",
              "radial-gradient(ellipse 90% 30% at 50% 50%,  rgba(0,80,160,0.020)  transparent 70%)",
            ].join(", "),
          }}
        />

        {/* ── FINE GRID ── */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            backgroundImage: [
              "linear-gradient(rgba(148,163,184,0.028) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(148,163,184,0.028) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "72px 72px",
          }}
        />

        <Navbar />

        <PageTransition>
          <main className="relative z-10 overflow-x-hidden flex-1 text-[var(--text-primary)]">
            {children}
          </main>
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}
