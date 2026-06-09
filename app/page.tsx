import Hero from "@/components/sections/Hero";
import Pipeline from "@/components/sections/Pipeline";
import Architecture from "@/components/sections/Architecture";
import SuperCore from "@/components/sections/SuperCore";
import DashboardPreview from "@/components/sections/DashboardPreview";
import CTABridge from "@/components/sections/CTABridge";
import Insights from "@/components/sections/Insights";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative z-10">
        <Hero />
      </section>

      {/* ── DATA PIPELINE ── */}
      <SectionWrapper delay={0.04}>
        <Pipeline />
      </SectionWrapper>

      {/* ── PROBEX ARCHITECTURE ── */}
      <SectionWrapper delay={0.06}>
        <Architecture />
      </SectionWrapper>

      {/* ── SUPERCORE MATHEMATICS ── */}
      <SectionWrapper delay={0.06}>
        <SuperCore />
      </SectionWrapper>

      {/* ── TERMINAL DASHBOARD PREVIEW ── */}
      <SectionWrapper delay={0.06}>
        <DashboardPreview />
      </SectionWrapper>

      {/* ── INSIGHTS ── */}
      <section className="relative z-10">
        <Insights />
      </section>

      {/* ── CTA BRIDGE TO PLATFORM ── */}
      <CTABridge />
    </>
  );
}
