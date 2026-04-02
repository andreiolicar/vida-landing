import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

// ─── Logo assets ──────────────────────────────────────────────────────────────
import fullWhiteLogo from "../assets/logo/complete/full-white.svg";
import iconBlueLogo from "../assets/logo/icon/icon-blue.svg";

// ─── Easing ───────────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Colors ───────────────────────────────────────────────────────────────────
const NAV_COLOR = {
  hero: "rgba(255,255,255,0.90)",
  scrolled: "rgba(4,8,34,0.70)",
} as const;

// ─── HeaderButton ─────────────────────────────────────────────────────────────
type ButtonVariant = "login" | "signup";

function HeaderButton({
  variant,
  href,
  children,
  scrolled,
  onClick,
}: {
  variant: ButtonVariant;
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  onClick?: () => void;
}) {
  const base = scrolled
    ? "inline-flex items-center justify-center gap-1 rounded-full transition-all duration-[200ms] active:duration-[50ms] py-[7px] px-[17px] whitespace-nowrap text-[15px] font-medium leading-[20px] tracking-[-0.14px] cursor-pointer select-none"
    : "inline-flex items-center justify-center gap-1 rounded-full transition-all duration-[200ms] active:duration-[50ms] py-[7px] px-[16px] whitespace-nowrap text-[14px] font-medium leading-[20px] tracking-[-0.14px] cursor-pointer select-none";

  if (variant === "login") {
    if (scrolled) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={[
            base,
            "border border-black/10 text-[#040822] hover:bg-black/5 active:bg-black/10",
          ].join(" ")}
        >
          {children}
        </a>
      );
    }
    // Hero → glass blur-button style
    return (
      <a
        href={href}
        onClick={onClick}
        className={[base, "text-white"].join(" ")}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.02)",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.16), rgba(255,255,255,0.08))",
          boxShadow:
            "inset 0 2px 8px rgba(255,255,255,0.05), " +
            "inset 0 1px 3px rgba(255,255,255,0.12), " +
            "inset 0 0.5px 0.5px rgba(255,255,255,0.16)",
          transition: "filter 200ms",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.filter =
            "brightness(1.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}
      >
        {children}
      </a>
    );
  }

  // signup — only shown when scrolled
  return (
    <a
      href={href}
      onClick={onClick}
      className={[base, "text-white active:opacity-90"].join(" ")}
      style={{
        background: "linear-gradient(180deg, #3b7eff 0%, #0036ff 100%)",
        transition: "filter 200ms, opacity 50ms",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.filter =
          "brightness(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.filter =
          "brightness(0.92)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.filter =
          "brightness(1.08)";
      }}
    >
      {children}
    </a>
  );
}

// ─── NavItem ──────────────────────────────────────────────────────────────────
// Uses AnimatePresence + two keyed elements (same pattern as the logo) so the
// transition between hero and scrolled is a clean fade, not a morph.
// Hover = text color only, no background.
function NavItem({
  href,
  label,
  scrolled,
}: {
  href: string;
  label: string;
  scrolled: boolean;
}) {
  const textClass = scrolled
    ? "text-[15px] px-[11px]"
    : "text-[14px] px-[12px]";

  const color = NAV_COLOR[scrolled ? "scrolled" : "hero"];
  const hoverColor = scrolled ? "rgba(4,8,34,1)" : "rgba(255,255,255,1)";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.a
        key={scrolled ? `${label}-scrolled` : `${label}-hero`}
        href={href}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: EASE }}
        className={[
          "rounded-full whitespace-nowrap font-medium tracking-[-0.14px] py-[6px] leading-[20px] cursor-pointer",
          textClass,
        ].join(" ")}
        style={{ color, transition: "color 150ms ease" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = color;
        }}
      >
        {label}
      </motion.a>
    </AnimatePresence>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navLinks = [
    { href: "#products", label: "Como funciona" },
    { href: "#docs", label: "Para quem é" },
    { href: "#changelog", label: "Recursos" },
    { href: "#blog", label: "Perguntas" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-overlay bg-gray-950/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed top-3 left-3 right-3 z-modal overflow-hidden rounded-2xl border border-border bg-background/96 shadow-xl backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <a href="/" aria-label="VIDA home">
                <img
                  src={fullWhiteLogo}
                  alt="VIDA"
                  height={22}
                  className="h-[22px] w-auto"
                />
              </a>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors duration-[140ms] hover:bg-background-muted hover:text-text-primary"
                aria-label="Fechar menu"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-3 py-3" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.04,
                    duration: 0.22,
                    ease: EASE,
                  }}
                  className="flex items-center rounded-xl px-3 py-3 text-[14px] font-medium tracking-[-0.14px] text-text-secondary transition-colors duration-[140ms] hover:text-text-primary"
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-border px-4 pb-5 pt-2">
              <HeaderButton
                variant="login"
                href="#login"
                scrolled={true}
                onClick={onClose}
              >
                Entrar
              </HeaderButton>
              <HeaderButton
                variant="signup"
                href="#signup"
                scrolled={true}
                onClick={onClose}
              >
                Baixar app
              </HeaderButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const THRESHOLD = 72;

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > THRESHOLD));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#products", label: "Como funciona" },
    { href: "#docs", label: "Para quem é" },
    { href: "#changelog", label: "Recursos" },
    { href: "#blog", label: "Perguntas" },
  ];

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-sticky flex justify-center pointer-events-none">
        <motion.header
          // ── Entrance: fall from above on page load ─────────────────
          initial={{ y: -28, opacity: 0 }}
          animate={scrolled ? "scrolled" : "hero"}
          variants={{
            hero: {
              y: 0,
              opacity: 1,
              width: "100%",
              maxWidth: 1128,
              marginTop: 0,
              borderRadius: 0,
              paddingTop: 22,
              paddingBottom: 22,
              paddingLeft: 24,
              paddingRight: 24,
              backgroundColor: "rgba(255,255,255,0)",
              // ⚠ borderColor fully transparent — this is what kills the flash.
              // The `border: "1px solid"` in style always exists, but with
              // color rgba(0,0,0,0) it is invisible until FM animates it in.
              borderColor: "rgba(0,0,0,0)",
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
            },
            scrolled: {
              y: 0,
              opacity: 1,
              width: "calc(100% - 48px)",
              maxWidth: 800,
              marginTop: 12,
              borderRadius: 9999,
              paddingTop: 9,
              paddingBottom: 9,
              paddingLeft: 16,
              paddingRight: 16,
              backgroundColor: "rgba(255,255,255,0.88)",
              borderColor: "rgba(0,0,0,0.08)",
              boxShadow:
                "0 8px 32px rgba(16,19,28,0.10), 0 2px 8px rgba(16,19,28,0.06)",
            },
          }}
          transition={{
            y: { duration: 0.6, ease: EASE },
            opacity: { duration: 0.5, ease: EASE },
            default: { duration: 0.45, ease: EASE },
          }}
          style={{
            // border shorthand kept here so the 1px width is always present.
            // borderColor is driven by FM variants above — never flashes.
            border: "1px solid",
            pointerEvents: "auto",
            backdropFilter: scrolled
              ? "blur(20px) saturate(180%)"
              : "blur(0px) saturate(100%)",
            WebkitBackdropFilter: scrolled
              ? "blur(20px) saturate(180%)"
              : "blur(0px) saturate(100%)",
            // CSS transition only for backdrop-filter (FM can't interpolate it)
            transition:
              "backdrop-filter 0.45s cubic-bezier(0.22,1,0.36,1), -webkit-backdrop-filter 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center gap-4">
            {/* ── LEFT: Logo (AnimatePresence fade swap) ─────────────── */}
            <div className="shrink-0">
              <a href="/" className="flex items-center" aria-label="VIDA home">
                <AnimatePresence mode="wait" initial={false}>
                  {scrolled ? (
                    <motion.img
                      key="icon-blue"
                      src={iconBlueLogo}
                      alt="VIDA"
                      width={34}
                      height={34}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, ease: EASE }}
                      className="h-[34px] w-auto block"
                    />
                  ) : (
                    <motion.img
                      key="full-white"
                      src={fullWhiteLogo}
                      alt="VIDA"
                      height={30}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18, ease: EASE }}
                      className="h-[30px] w-auto block"
                    />
                  )}
                </AnimatePresence>
              </a>
            </div>

            {/* ── CENTER: Nav (same fade pattern as logo) ────────────── */}
            <nav
              className="hidden md:flex flex-1 items-center justify-center"
              aria-label="Main navigation"
            >
              {navLinks.map(({ href, label }) => (
                <NavItem
                  key={label}
                  href={href}
                  label={label}
                  scrolled={scrolled}
                />
              ))}
            </nav>

            {/* ── RIGHT: Actions ─────────────────────────────────────── */}
            <div className="flex items-center justify-end gap-2 shrink-0">
              <div className="hidden md:flex items-center gap-2">
                <HeaderButton variant="login" href="#login" scrolled={scrolled}>
                  Entrar
                </HeaderButton>
                {scrolled && (
                  <HeaderButton
                    variant="signup"
                    href="#signup"
                    scrolled={scrolled}
                  >
                    Baixar app
                  </HeaderButton>
                )}
              </div>

              {/* Mobile hamburger */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                whileTap={{ scale: 0.93 }}
                animate={{
                  color: scrolled
                    ? "rgba(4,8,34,0.80)"
                    : "rgba(255,255,255,0.80)",
                }}
                transition={{ duration: 0.18, ease: EASE }}
                className="md:hidden flex items-center justify-center rounded-full p-[7px]"
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2.667 6a.833.833 0 0 1 .833-.833h15a.833.833 0 0 1 0 1.666h-15A.833.833 0 0 1 2.667 6Zm0 5a.833.833 0 0 1 .833-.833h15a.833.833 0 0 1 0 1.666h-15A.833.833 0 0 1 2.667 11Zm0 5a.833.833 0 0 1 .833-.833h15a.833.833 0 0 1 0 1.666h-15A.833.833 0 0 1 2.667 16Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.header>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
