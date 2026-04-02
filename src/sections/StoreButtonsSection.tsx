import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

import googleSvgMarkup from "../assets/img/google-svg.svg?raw";
import { Container } from "../components/Container";

const EASE = [0.22, 1, 0.36, 1] as const;
const ICON_BOX_SIZE = 36;

const BUTTON_STYLE: CSSProperties = {
  WebkitBackdropFilter: "blur(12px)",
  backdropFilter: "blur(12px)",
  backgroundColor: "rgba(255,255,255,0.12)",
  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,0.20), rgba(255,255,255,0.08))",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.30), 0 1px 3px rgba(0,0,0,0.12)",
  border: "1px solid rgba(255,255,255,0.18)",
};

function StoreButton({
  href,
  label,
  store,
  icon,
  delay,
}: {
  href: string;
  label: string;
  store: string;
  icon: ReactNode;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.6, ease: EASE, delay },
        y: { duration: 0.6, ease: EASE, delay },
        default: { duration: 0.32, ease: EASE },
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.145)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.36), 0 6px 18px rgba(16,79,200,0.15)",
        borderColor: "rgba(255,255,255,0.22)",
        filter: "brightness(1.015)",
      }}
      className="inline-flex w-auto items-center justify-center gap-[14px] rounded-[22px] px-[15px] py-[12px] text-white"
      style={BUTTON_STYLE}
    >
      <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col justify-center text-left">
        <span className="text-[12px] font-semibold leading-[1.1] tracking-[0.08em] text-white/80">
          {label}
        </span>
        <span className="mt-[2px] whitespace-nowrap text-[22px] font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-[23px]">
          {store}
        </span>
      </span>
    </motion.a>
  );
}

export function StoreButtonsSection() {
  return (
    <section className="relative w-full py-12 md:py-16">
      <Container size="md">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-5">
          <StoreButton
            href="#app-store"
            label="Baixe na"
            store="App Store"
            delay={0.1}
            icon={<AppleIcon />}
          />
          <StoreButton
            href="#play-store"
            label="Disponível no"
            store="Play Store"
            delay={0.1}
            icon={<GooglePlayIcon />}
          />
        </div>
      </Container>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg
      width={ICON_BOX_SIZE}
      height={ICON_BOX_SIZE}
      viewBox="0 0 512 512"
      fill="#FFFFFF"
      aria-hidden="true"
    >
      <title>Apple</title>
      <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z" />
      <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        width: `${ICON_BOX_SIZE}px`,
        height: `${ICON_BOX_SIZE}px`,
        alignItems: "center",
        justifyContent: "center",
        transform: "scale(0.92)",
        transformOrigin: "center",
      }}
      dangerouslySetInnerHTML={{
        __html: googleSvgMarkup
          .replace(/fill="#EA4335"/g, 'fill="#FFFFFF"')
          .replace(/fill="#FBBC04"/g, 'fill="#F2F4FF"')
          .replace(/fill="#34A853"/g, 'fill="#DDE3F5"')
          .replace(/fill="#4285F4"/g, 'fill="#EEF2FF"')
          .replace(
            /<svg /,
            `<svg width="${ICON_BOX_SIZE}" height="${ICON_BOX_SIZE}" preserveAspectRatio="xMidYMid meet" `,
          ),
      }}
    />
  );
}
