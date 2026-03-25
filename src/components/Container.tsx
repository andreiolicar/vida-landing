import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size" | "className" | "children">;

/**
 * Container sizes align 1:1 with layout tokens:
 *   sm  → 640px
 *   md  → 768px
 *   lg  → 1024px
 *   xl  → 1128px  ← matches header max-width for visual consistency
 *   2xl → 1440px
 */
const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1128px]",
  "2xl": "max-w-[1440px]",
} as const;

export function Container<T extends ElementType = "div">({
  as,
  size = "xl",
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";

  return (
    <Tag
      className={[
        "w-full mx-auto",
        "px-5 md:px-10 xl:px-6",
        sizeClasses[size],
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
