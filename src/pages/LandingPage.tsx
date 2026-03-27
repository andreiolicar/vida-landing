import type { CSSProperties } from "react";

import { Header } from "../components/Header";
import { AppShowcaseSection } from "../sections/AppShowCaseSection";
import { AssistantsSection } from "../sections/AssistantsSection";
import { FooterCtaSection } from "../sections/FooterCtaSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { HeroSection } from "../sections/HeroSection";
// import { LogosSection } from "../sections/LogosSection";
import { SiteFooter } from "../sections/SiteFooter";
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

const FOOTER_GRADIENT_WRAPPER_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, #ffffff 0%, #F4FBFF 14%, #D8EEF9 28%, #93C5EC 46%, #4F95EA 68%, #1C63DA 84%, #104fc8 100%)",
  overflow: "hidden",
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
          <AssistantsSection />
        </div>
        <div style={FOOTER_GRADIENT_WRAPPER_STYLE}>
          <FooterCtaSection />
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
