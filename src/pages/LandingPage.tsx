import type { CSSProperties } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SectionDivider } from "../components/SectionDivider";
import { AppShowcaseSection } from "../sections/AppShowCaseSection";
import { DecisionAISection } from "../sections/DecisionAISection";
import { FaqSection } from "../sections/FaqSection";
import { FooterCtaSection } from "../sections/FooterCtaSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { HeroSection } from "../sections/HeroSection";
import { StoreButtonsSection } from "../sections/StoreButtonsSection";

const GRADIENT_BACKGROUND_STYLE: CSSProperties = {
  position: "absolute",
  inset: "0 0 auto 0",
  height: "2850px",
  backgroundImage:
    "linear-gradient(180deg, #104fc8, #6baee6 20%, #d0ecf5 68%, #ffffff)",
  "--website-blue--darker": "#104fc8",
  "--website-blue--normal": "#6baee6",
  "--website-blue--lighter": "#d0ecf5",
} as CSSProperties;

export function LandingPage() {
  return (
    <>
      <Header />

      <main className="relative">
        <div aria-hidden="true" className="pointer-events-none" style={GRADIENT_BACKGROUND_STYLE} />

        <div className="relative z-10">
          <HeroSection />
          <AppShowcaseSection />
          <StoreButtonsSection />
          <FeaturesSection />
        </div>

        <DecisionAISection />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <FooterCtaSection />
        <Footer />
      </main>
    </>
  );
}
