import type { CSSProperties } from "react";

import { Header } from "../components/Header";
import { AppShowcaseSection } from "../sections/AppShowCaseSection";
import { FooterCtaSection } from "../sections/FooterCtaSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { HeroSection } from "../sections/HeroSection";
// import { LogosSection } from "../sections/LogosSection";
import { StoreButtonsSection } from "../sections/StoreButtonsSection";

const GRADIENT_WRAPPER_STYLE: CSSProperties = {
  minHeight: "2850px",
  backgroundImage:
    "linear-gradient(180deg, #104fc8, #6baee6 20%, #d0ecf5 68%, #ffffff)",
  overflow: "hidden",
  "--website-blue--darker": "#104fc8",
  "--website-blue--normal": "#6baee6",
  "--website-blue--lighter": "#d0ecf5",
} as CSSProperties;

export function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <div style={GRADIENT_WRAPPER_STYLE}>
          <HeroSection />
          <AppShowcaseSection />
          <StoreButtonsSection />
          {/* <LogosSection /> */}
          <FeaturesSection />
          <FooterCtaSection />
        </div>
      </main>
    </>
  );
}
