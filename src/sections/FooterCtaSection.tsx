import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useState } from "react";

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

const SHELL_PADDING_X = "clamp(24px, 6vw, 64px)";
const SHELL_PADDING_TOP = "64px";
const IMAGE_MAX_WIDTH = "940px";
const IMAGE_FRAME_OFFSET_Y = "clamp(40px, 5vw, 58px)";
const IMAGE_FRAME_REST_Y = 20;
const IMAGE_FRAME_HOVER_Y = 0;
const BOTTOM_OVERLAY_HEIGHT = "clamp(150px, 24vw, 196px)";
const BOTTOM_TEXT_OFFSET = "clamp(29px, 5.4vw, 51px)";

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

function GlowingButton({
  onHoverStart,
  onHoverEnd,
}: {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}) {
  return (
    <motion.a
      href="#get-started"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.19)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.42), 0 8px 22px rgba(16,79,200,0.16)",
        filter: "brightness(1.02)",
      }}
      transition={{ duration: 0.3, ease: EASE }}
      className="inline-flex min-w-[156px] items-center justify-center gap-2 rounded-full px-6 py-2 text-center"
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
      <span className="text-[14px] font-semibold leading-none tracking-[-0.02em]">
        Get Started
      </span>
      <ArrowRightIcon />
    </motion.a>
  );
}

function CtaLines({
  onButtonHoverStart,
  onButtonHoverEnd,
}: {
  onButtonHoverStart?: () => void;
  onButtonHoverEnd?: () => void;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <GlowingButton
        onHoverStart={onButtonHoverStart}
        onHoverEnd={onButtonHoverEnd}
      />
    </div>
  );
}

export function FooterCtaSection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="relative w-full pb-24 pt-8 md:pb-32 md:pt-12">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden min-h-[760px] md:min-h-0 md:aspect-[1060/688]"
          style={{
            ...CTA_MASK_STYLE,
            background:
              "linear-gradient(180deg, #93CBEA 0%, #76B7E9 34%, #669DDF 68%, #3468D5 100%)",
            boxShadow: "0 18px 48px rgba(34,84,185,0.14)",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: SHELL_PADDING_TOP,
              paddingRight: SHELL_PADDING_X,
              paddingLeft: SHELL_PADDING_X,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <LiquidGlassBadge
                style={{
                  marginBottom: "26px",
                  backgroundColor: "rgba(255,255,255,0.16)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.36), 0 2px 8px rgba(40,94,187,0.12)",
                }}
              >
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
                <CtaLines
                  onButtonHoverStart={() => setIsButtonHovered(true)}
                  onButtonHoverEnd={() => setIsButtonHovered(false)}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.14 }}
            style={{
              position: "absolute",
              right: 0,
              bottom: `calc(-1 * ${IMAGE_FRAME_OFFSET_Y})`,
              left: 0,
              zIndex: 2,
              paddingRight: SHELL_PADDING_X,
              paddingLeft: SHELL_PADDING_X,
            }}
          >
            <motion.div
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                maxWidth: IMAGE_MAX_WIDTH,
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
              animate={{
                y: isButtonHovered ? IMAGE_FRAME_HOVER_Y : IMAGE_FRAME_REST_Y,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 24,
                mass: 0.9,
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
                    transform: "translateY(10px) scale(1.02)",
                    transformOrigin: "top center",
                  }}
                  />
                </div>
            </motion.div>
          </motion.div>

          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              left: 0,
              height: BOTTOM_OVERLAY_HEIGHT,
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(112,157,232,0.10) 30%, rgba(112,157,232,0.28) 56%, rgba(53,102,211,0.96) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: SHELL_PADDING_X,
                bottom: BOTTOM_TEXT_OFFSET,
                left: SHELL_PADDING_X,
                textAlign: "center",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                textShadow: "0 1px 4px rgba(35,73,153,0.22)",
              }}
            >
              Feeds made with {"\u2665"} for all your websites.
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
