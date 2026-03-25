import { motion } from "framer-motion";
import type { CSSProperties } from "react";

import computerAppImg from "../assets/img/computer-app.png";
import { Container } from "../components/Container";
import { LiquidGlassBadge } from "../components/LiquidGlassBadge";

const EASE = [0.22, 1, 0.36, 1] as const;
const CTA_MASK_URL =
  "https://cdn.prod.website-files.com/62f1a490150fefe030f763b4/66990d749ef5feb67f677ce5_Vector%2021.svg";

const CTA_MASK_STYLE: CSSProperties = {
  WebkitMaskImage: `url(${CTA_MASK_URL})`,
  maskImage: `url(${CTA_MASK_URL})`,
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.33334 13.3333L11.0774 10.5892C11.4029 10.2638 11.4029 9.73614 11.0774 9.4107L8.33334 6.66663"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlowingButton() {
  return (
    <motion.a
      href="#get-started"
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.19)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.42), 0 8px 22px rgba(16,79,200,0.16)",
        filter: "brightness(1.02)",
      }}
      transition={{ duration: 0.3, ease: EASE }}
      className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full px-8 py-4 text-center"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.15)",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.30), 0 2px 10px rgba(16,79,200,0.10)",
        color: "#FFFFFF",
      }}
    >
      <span className="text-[15px] font-semibold tracking-[-0.02em]">
        Get Started
      </span>
      <ArrowRightIcon />
    </motion.a>
  );
}

function CtaLines() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <GlowingButton />
    </div>
  );
}

export function FooterCtaSection() {
  return (
    <section className="relative w-full pb-24 pt-8 md:pb-32 md:pt-12">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden"
          style={{
            ...CTA_MASK_STYLE,
            background:
              "linear-gradient(180deg, #93CBEA 0%, #76B7E9 34%, #669DDF 68%, #3468D5 100%)",
            boxShadow: "0 18px 48px rgba(34,84,185,0.14)",
            paddingTop: "64px",
            paddingRight: "64px",
            paddingBottom: "118px",
            paddingLeft: "64px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="flex flex-col items-center text-center"
            style={{ position: "relative", zIndex: 2 }}
          >
            <LiquidGlassBadge style={{ marginBottom: "26px" }}>
              Your Site. Always Up To Date
            </LiquidGlassBadge>

            <h2
              style={{
                margin: 0,
                maxWidth: "720px",
                fontFamily: "Nunito, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(42px, 6vw, 58px)",
                lineHeight: 1.12,
                letterSpacing: "-0.05em",
                backgroundImage:
                  "linear-gradient(#ffffff, rgba(255,255,255,0.80))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Build beautiful social feeds
              <br />
              for your website
            </h2>

            <div style={{ marginTop: "36px", width: "100%" }}>
              <CtaLines />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.14 }}
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "56px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "min(100%, 940px)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "22px",
                padding: "8px",
                backgroundColor: "rgba(255,255,255,0.18)",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.34), rgba(255,255,255,0.14))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.62), 0 16px 30px rgba(41,86,181,0.16)",
                border: "1px solid rgba(255,255,255,0.34)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "18px",
                  backgroundColor: "#F8FBFF",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.50)",
                }}
              >
                <img
                  src={computerAppImg}
                  alt="VIDA dashboard preview on desktop"
                  style={{
                    display: "block",
                    width: "calc(100% + 24px)",
                    maxWidth: "none",
                    height: "auto",
                    marginLeft: "-12px",
                    transform: "translateY(14px) scale(1.02)",
                    transformOrigin: "top center",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 76%, rgba(0,0,0,0.5) 90%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 76%, rgba(0,0,0,0.5) 90%, transparent 100%)",
                  }}
                />

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 58%, rgba(112,157,232,0.22) 74%, rgba(53,102,211,0.96) 100%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    right: "24px",
                    bottom: "22px",
                    left: "24px",
                    textAlign: "center",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                  }}
                >
                  Feeds made with {"\u2665"} for all your websites.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
