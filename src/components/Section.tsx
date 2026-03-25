import type { ComponentPropsWithoutRef, ElementType } from "react";

type SectionBackground = "default" | "subtle" | "muted" | "inverse" | "accent";

type SectionProps<T extends ElementType = "section"> = {
  as?:         T;
  background?: SectionBackground;
  border?:     "top" | "bottom" | "both" | "none";
  spacing?:    "sm" | "md" | "lg" | "xl";
  className?:  string;
  children:    React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

// ─── Background ───────────────────────────────────────────────────────────
const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-background",
  subtle:  "bg-background-subtle",
  muted:   "bg-background-muted",
  inverse: "bg-background-inverse",
  accent:  "bg-accent",
};

// ─── Border ───────────────────────────────────────────────────────────────
const borderClasses: Record<NonNullable<SectionProps["border"]>, string> = {
  none:   "",
  top:    "border-t border-border",
  bottom: "border-b border-border",
  both:   "border-t border-b border-border",
};

// ─── Vertical spacing ─────────────────────────────────────────────────────
const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-16  md:py-20",
  md: "py-20  md:py-24",
  lg: "py-24  md:py-[96px]",
  xl: "py-28  md:py-[128px]",
};

// ─── Component ────────────────────────────────────────────────────────────
export function Section<T extends ElementType = "section">({
  as,
  background = "default",
  border     = "none",
  spacing    = "lg",
  className  = "",
  children,
  ...props
}: SectionProps<T>) {
  const Tag = as ?? "section";

  return (
    <Tag
      className={[
        "w-full",
        backgroundClasses[background],
        borderClasses[border],
        spacingClasses[spacing],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
