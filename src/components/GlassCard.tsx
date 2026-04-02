import type { CSSProperties, ReactNode } from "react";

type GlassCardVariant = "decisionAi" | "light";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: GlassCardVariant;
  glow?: boolean;
};

const BASE_CLASS_NAME = "relative overflow-hidden rounded-[28px]";

const CARD_STYLES: Record<GlassCardVariant, CSSProperties> = {
  decisionAi: {
    WebkitBackdropFilter: "blur(18px)",
    backdropFilter: "blur(18px)",
    backgroundColor: "rgba(255,255,255,0.10)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.30), 0 18px 44px rgba(0,41,125,0.16)",
    border: "1px solid rgba(255,255,255,0.22)",
  },
  light: {
    WebkitBackdropFilter: "blur(22px)",
    backdropFilter: "blur(22px)",
    backgroundColor: "rgba(255,255,255,0.55)",
    boxShadow:
      "0 24px 70px rgba(15,23,42,0.10), inset 0 1px 0 rgba(255,255,255,0.72)",
    border: "1px solid rgba(255,255,255,0.60)",
  },
};

const OVERLAY_STYLES: Record<GlassCardVariant, CSSProperties> = {
  decisionAi: {
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
  },
  light: {
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.12))",
  },
};

const GLOW_STYLES: Record<GlassCardVariant, CSSProperties> = {
  decisionAi: {
    background:
      "radial-gradient(circle at center top, rgba(62,149,255,0.38), rgba(62,149,255,0) 72%)",
    opacity: 0.8,
    filter: "blur(56px)",
  },
  light: {
    background:
      "radial-gradient(circle at center top, rgba(255,255,255,0.42), rgba(255,255,255,0) 72%)",
    opacity: 0.72,
    filter: "blur(52px)",
  },
};

export function GlassCard({
  children,
  className = "",
  variant = "light",
  glow = false,
}: GlassCardProps) {
  return (
    <article
      className={[BASE_CLASS_NAME, className].filter(Boolean).join(" ")}
      style={CARD_STYLES[variant]}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={OVERLAY_STYLES[variant]}
      />

      {glow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16"
          style={GLOW_STYLES[variant]}
        />
      ) : null}

      <div className="relative z-10">{children}</div>
    </article>
  );
}
