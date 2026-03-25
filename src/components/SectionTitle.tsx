import type { CSSProperties, ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  align?: "left" | "center";
  maxWidth?: string;
  margin?: string;
  color?: string;
  style?: CSSProperties;
};

const BASE_STYLE: CSSProperties = {
  fontFamily: "Nunito, sans-serif",
  fontWeight: 800,
  fontSize: "clamp(32px, 4.5vw, 48px)",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
};

export function SectionTitle({
  children,
  align = "center",
  maxWidth = "680px",
  margin = "0 auto 18px",
  color = "#050414",
  style,
}: SectionTitleProps) {
  return (
    <h2
      style={{
        ...BASE_STYLE,
        margin,
        maxWidth,
        textAlign: align,
        color,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
