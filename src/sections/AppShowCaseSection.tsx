import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import appHandImg from "../assets/img/hand-app.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const TOP_PCTS = [18, 43, 67] as const;
const LINE_REVEAL_DURATION = 0.55;
const LINE_REVEAL_DELAY = 0.18;
const CIRCLE_REVEAL_DELAY = 0.56;

const BASE_CIRCLE_SIZE = 68;
const CIRCLE_SIZE = Math.round(BASE_CIRCLE_SIZE * 1.4);
const ICON_SCALE = CIRCLE_SIZE / BASE_CIRCLE_SIZE;

const DESKTOP = (() => {
  const containerWidth = 900;
  const phoneWidth = 500;
  const phoneLeft = (containerWidth - phoneWidth) / 2;
  const phoneRight = phoneLeft + phoneWidth;
  const screenInset = 166;
  const circleLeft = 16;
  const circleRight = 16;
  const rightCircleLeft = containerWidth - circleRight - CIRCLE_SIZE;
  const leftLineLeft = circleLeft + CIRCLE_SIZE;
  const rightLineLeft = phoneRight - screenInset;

  return {
    containerWidth,
    phoneWidth,
    phoneLeft,
    phoneRight,
    circleLeft,
    rightCircleLeft,
    leftLineLeft,
    rightLineLeft,
    leftLineWidth: phoneLeft + screenInset - leftLineLeft,
    rightLineWidth: rightCircleLeft - rightLineLeft,
  };
})();

const MOBILE = (() => {
  const phoneWidth = 280;
  const circleOutset = 138;
  const leftCircleLeft = -circleOutset;
  const rightCircleLeft = phoneWidth - CIRCLE_SIZE + circleOutset;
  const screenInset = Math.round(phoneWidth * 0.33);
  const leftLineLeft = leftCircleLeft + CIRCLE_SIZE;
  const rightLineLeft = phoneWidth - screenInset;

  return {
    phoneWidth,
    leftCircleLeft,
    rightCircleLeft,
    leftLineLeft,
    rightLineLeft,
    leftLineWidth: screenInset - leftLineLeft,
    rightLineWidth: rightCircleLeft - rightLineLeft,
  };
})();

const GLASS: CSSProperties = {
  width: `${CIRCLE_SIZE}px`,
  height: `${CIRCLE_SIZE}px`,
  borderRadius: "50%",
  WebkitBackdropFilter: "blur(12px)",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255,255,255,0.12)",
  backgroundImage:
    "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08))",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.32), 0 4px 20px rgba(16,79,200,0.10)",
  border: "1px solid rgba(255,255,255,0.22)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255,255,255,0.90)",
  cursor: "default",
};

const LINE_GRADIENTS = {
  left: "linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.28) 58%, rgba(255,255,255,0) 100%)",
  right:
    "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.28) 42%, rgba(255,255,255,0.72) 100%)",
} as const;

const PHONE_IMAGE_STYLE: CSSProperties = {
  position: "relative",
  display: "block",
  width: "100%",
  height: "auto",
  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
};

type Feature = {
  id: string;
  label: string;
  icon: ReactNode;
};

const LEFT_FEATURES: Feature[] = [
  { id: "calendar", icon: <IconCalendar />, label: "Daily Schedule" },
  { id: "pill", icon: <IconPill />, label: "Medication" },
  { id: "list", icon: <IconList />, label: "Activities" },
];

const RIGHT_FEATURES: Feature[] = [
  { id: "heart", icon: <IconHeart />, label: "Health Tracking" },
  { id: "location", icon: <IconLocation />, label: "Navigation" },
  { id: "bell", icon: <IconBell />, label: "Reminders" },
];

type ConnectorLineProps = {
  left: number;
  topPct: number;
  width: number;
  gradient: string;
  direction: "left" | "right";
  delay: number;
};

function ConnectorLine({
  left,
  topPct,
  width,
  gradient,
  direction,
  delay,
}: ConnectorLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: LINE_REVEAL_DURATION, ease: EASE, delay }}
      style={{
        position: "absolute",
        left: `${left}px`,
        width: `${width}px`,
        top: `calc(${topPct}% - 1px)`,
        height: "2px",
        background: gradient,
        transformOrigin: direction === "left" ? "right center" : "left center",
      }}
    />
  );
}

type PhoneMockupProps = {
  width: number;
  wrapperZIndex: number;
  imageZIndex: number;
  shadow: string;
};

function PhoneMockup({
  width,
  wrapperZIndex,
  imageZIndex,
  shadow,
}: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
      style={{
        position: "relative",
        zIndex: wrapperZIndex,
        width: `${width}px`,
        margin: "0 auto",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "45%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(16,79,200,0.24) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={appHandImg}
        alt="VIDA app running on a phone"
        style={{
          ...PHONE_IMAGE_STYLE,
          zIndex: imageZIndex,
          filter: shadow,
        }}
      />
    </motion.div>
  );
}

type FeatureCircleProps = {
  feature: Feature;
  left: number;
  topPct: number;
  delay: number;
};

function FeatureCircle({ feature, left, topPct, delay }: FeatureCircleProps) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, scale: 0.35 }}
      animate={{ opacity: [0, 1, 1], scale: [0.35, 1.12, 1] }}
      transition={{ duration: 0.62, ease: EASE, delay, times: [0, 0.7, 1] }}
      style={{
        position: "absolute",
        left: `${left}px`,
        top: `calc(${topPct}% - ${CIRCLE_SIZE / 2}px)`,
        pointerEvents: "auto",
      }}
    >
      <motion.div
        style={GLASS}
        whileHover={{
          scale: 1.1,
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.42), 0 6px 28px rgba(16,79,200,0.18)",
        }}
        transition={{ duration: 0.18, ease: EASE }}
        aria-label={feature.label}
        title={feature.label}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${ICON_SCALE})`,
            transformOrigin: "center",
          }}
        >
          {feature.icon}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DesktopShowcase() {
  return (
    <div
      className="hidden md:block relative mx-auto"
      style={{ maxWidth: `${DESKTOP.containerWidth}px`, width: "100%" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {TOP_PCTS.map((pct, i) => (
          <ConnectorLine
            key={`desktop-left-line-${i}`}
            left={DESKTOP.leftLineLeft}
            topPct={pct}
            width={DESKTOP.leftLineWidth}
            gradient={LINE_GRADIENTS.left}
            direction="left"
            delay={LINE_REVEAL_DELAY + i * 0.05}
          />
        ))}

        {TOP_PCTS.map((pct, i) => (
          <ConnectorLine
            key={`desktop-right-line-${i}`}
            left={DESKTOP.rightLineLeft}
            topPct={pct}
            width={DESKTOP.rightLineWidth}
            gradient={LINE_GRADIENTS.right}
            direction="right"
            delay={LINE_REVEAL_DELAY + i * 0.05}
          />
        ))}
      </div>

      <PhoneMockup
        width={DESKTOP.phoneWidth}
        wrapperZIndex={1}
        imageZIndex={2}
        shadow="drop-shadow(0 20px 48px rgba(16,79,200,0.18))"
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        {LEFT_FEATURES.map((feature, i) => (
          <FeatureCircle
            key={`desktop-left-circle-${feature.id}`}
            feature={feature}
            left={DESKTOP.circleLeft}
            topPct={TOP_PCTS[i]}
            delay={CIRCLE_REVEAL_DELAY + i * 0.08}
          />
        ))}

        {RIGHT_FEATURES.map((feature, i) => (
          <FeatureCircle
            key={`desktop-right-circle-${feature.id}`}
            feature={feature}
            left={DESKTOP.rightCircleLeft}
            topPct={TOP_PCTS[i]}
            delay={CIRCLE_REVEAL_DELAY + i * 0.08}
          />
        ))}
      </div>
    </div>
  );
}

function MobileShowcase() {
  return (
    <div className="md:hidden flex justify-center px-6 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
        style={{
          width: `${MOBILE.phoneWidth}px`,
          position: "relative",
          overflow: "visible",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          {TOP_PCTS.map((pct, i) => (
            <ConnectorLine
              key={`mobile-left-line-${i}`}
              left={MOBILE.leftLineLeft}
              topPct={pct}
              width={MOBILE.leftLineWidth}
              gradient={LINE_GRADIENTS.left}
              direction="left"
              delay={LINE_REVEAL_DELAY + i * 0.05}
            />
          ))}

          {TOP_PCTS.map((pct, i) => (
            <ConnectorLine
              key={`mobile-right-line-${i}`}
              left={MOBILE.rightLineLeft}
              topPct={pct}
              width={MOBILE.rightLineWidth}
              gradient={LINE_GRADIENTS.right}
              direction="right"
              delay={LINE_REVEAL_DELAY + i * 0.05}
            />
          ))}
        </div>

        <PhoneMockup
          width={MOBILE.phoneWidth}
          wrapperZIndex={1}
          imageZIndex={1}
          shadow="drop-shadow(0 16px 32px rgba(16,79,200,0.18))"
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {LEFT_FEATURES.map((feature, i) => (
          <FeatureCircle
            key={`mobile-left-circle-${feature.id}`}
            feature={feature}
            left={MOBILE.leftCircleLeft}
            topPct={TOP_PCTS[i]}
            delay={CIRCLE_REVEAL_DELAY + i * 0.08}
          />
        ))}

          {RIGHT_FEATURES.map((feature, i) => (
          <FeatureCircle
            key={`mobile-right-circle-${feature.id}`}
            feature={feature}
            left={MOBILE.rightCircleLeft}
            topPct={TOP_PCTS[i]}
            delay={CIRCLE_REVEAL_DELAY + i * 0.08}
          />
        ))}
        </div>
      </motion.div>
    </div>
  );
}

export function AppShowcaseSection() {
  return (
    <section
      className="relative w-full"
      style={{ paddingTop: "24px", paddingBottom: "0" }}
    >
      <DesktopShowcase />
      <MobileShowcase />
    </section>
  );
}

function IconCalendar() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function IconPill() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 2.5a5 5 0 0 1 7 7l-7.5 7.5a5 5 0 1 1-7-7l7.5-7.5Z" />
      <path d="M8.5 8.5l7 7" />
    </svg>
  );
}

function IconList() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
