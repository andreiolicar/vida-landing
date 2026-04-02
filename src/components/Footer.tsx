import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import fullBlueLogo from "../assets/logo/complete/full-blue.svg";
import { Container } from "./Container";
import {
  FaArrowUp,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1] as const;
const MUTED_TEXT_COLOR = "#595967";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "#",
    icon: FaTiktok,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
] as const;

const LEGAL_LINKS = [
  { label: "Termos", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "LGPD", href: "#" },
] as const;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function SocialBadge({
  href,
  ariaLabel,
  icon: Icon,
  label,
}: {
  href: string;
  ariaLabel: string;
  icon: IconType;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold tracking-[-0.02em] text-[#1146B7] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E67D8]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.68)",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.58))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.82)",
        border: "1px solid rgba(17,70,183,0.10)",
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
        filter: "brightness(1.03)",
      }}
      transition={{ duration: 0.28, ease: EASE }}
    >
      <Icon className="h-[15px] w-[15px]" aria-hidden="true" />
      <span>{label}</span>
    </motion.a>
  );
}

function TopCircleButton() {
  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1146B7] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E67D8]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.68)",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.58))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.82), 0 8px 24px rgba(16,79,200,0.10)",
        border: "1px solid rgba(17,70,183,0.10)",
      }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.8)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.92), 0 10px 24px rgba(16,79,200,0.14)",
        filter: "brightness(1.03)",
      }}
      transition={{ duration: 0.28, ease: EASE }}
    >
      <FaArrowUp className="h-[15px] w-[15px]" aria-hidden="true" />
    </motion.button>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 pt-8 md:pb-12 md:pt-10" aria-label="Site footer">
      <Container size="xl">
        <div className="flex flex-col items-center">
          <motion.div
            className="relative flex w-full items-center justify-center"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <img
              src={fullBlueLogo}
              alt="VIDA"
              className="h-[30px] w-auto md:h-[34px]"
            />

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <TopCircleButton />
            </div>
          </motion.div>

          <motion.div
            className="mt-10 w-full"
            custom={0.08}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.nav
              className="flex flex-wrap items-center justify-center gap-3"
              aria-label="Social media links"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.14,
                  },
                },
              }}
            >
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <motion.div key={label} variants={fadeUp} custom={0}>
                  <SocialBadge
                    href={href}
                    ariaLabel={label}
                    icon={icon}
                    label={label}
                  />
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          <motion.nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-11 gap-y-4 text-[14px] font-medium tracking-[-0.02em]"
            aria-label="Legal links"
            custom={0.16}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {LEGAL_LINKS.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                className="transition-colors duration-200"
                style={{ color: MUTED_TEXT_COLOR, opacity: 1 }}
                whileHover={{ color: "#1146B7" }}
                transition={{ duration: 0.15, ease: EASE }}
              >
                {label}
              </motion.a>
            ))}
          </motion.nav>

          <div
            className="relative z-[2] mt-7 text-center text-[14px] font-semibold tracking-[-0.02em]"
            style={{
              color: MUTED_TEXT_COLOR,
              textShadow: "none",
              opacity: 1,
            }}
          >
            VIDA {"\u00A9"} {year}. Feito para decisões mais leves no dia a dia.
          </div>
        </div>
      </Container>
    </footer>
  );
}
