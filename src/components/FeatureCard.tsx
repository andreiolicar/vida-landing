import { motion } from "framer-motion";

export type FeatureCardData = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  tint: string;
  headline: string;
  body: string;
};

type FeatureCardProps = {
  feature: FeatureCardData;
  delay: number;
  ease: readonly [number, number, number, number];
  headingColor: string;
};

const CARD_IMAGE_RATIO = "657 / 608";

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

export function FeatureCard({
  feature,
  delay,
  ease,
  headingColor,
}: FeatureCardProps) {
  const { r, g, b } = hexToRgb(feature.tint);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
      style={{
        borderRadius: "28px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: feature.tint,
        boxShadow: "0 4px 20px rgba(4,8,34,0.06), 0 24px 60px rgba(4,8,34,0.08)",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: CARD_IMAGE_RATIO,
          backgroundColor: feature.tint,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <img
            src={feature.imageSrc}
            alt={feature.imageAlt}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center top",
            }}
          />
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            left: 0,
            height: "34%",
            background: `linear-gradient(180deg, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 0.64) 64%, ${feature.tint} 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
          padding: "18px 24px 30px",
          backgroundColor: feature.tint,
        }}
      >
        <h4
          style={{
            margin: 0,
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(20px, 2vw, 24px)",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: headingColor,
          }}
        >
          {feature.headline}
        </h4>

        <p
          style={{
            margin: 0,
            fontFamily: "Nunito, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.65,
            color: "rgba(10,15,30,0.62)",
          }}
        >
          {feature.body}
        </p>
      </div>
    </motion.article>
  );
}
