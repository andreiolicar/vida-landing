import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";

type LiquidGlassBadgeProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"span">;

const BASE_STYLE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  padding: "8px 18px",
  lineHeight: 1,
  fontFamily: "Nunito, sans-serif",
  fontSize: "13px",
  fontWeight: 500,
  letterSpacing: "0.01em",
  WebkitBackdropFilter: "blur(12px)",
  backdropFilter: "blur(12px)",
  color: "rgba(255,255,255,0.90)",
  backgroundColor: "rgba(255,255,255,0.12)",
  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.08))",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.30), 0 1px 3px rgba(0,0,0,0.12)",
};

export function LiquidGlassBadge({
  children,
  style,
  ...props
}: LiquidGlassBadgeProps) {
  return (
    <span
      {...props}
      style={{
        ...BASE_STYLE,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
