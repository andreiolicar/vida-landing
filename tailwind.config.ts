import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // ─── Breakpoints ──────────────────────────────────────────────────────────
    screens: {
      sm:  "640px",
      md:  "768px",
      lg:  "1024px",
      xl:  "1280px",
      "2xl": "1536px",
    },

    // ─── Container ────────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md:      "40px",
        xl:      "80px",
      },
      screens: {
        sm:    "640px",
        md:    "768px",
        lg:    "1024px",
        xl:    "1280px",
        "2xl": "1440px",
      },
    },

    // ─── Colors ───────────────────────────────────────────────────────────────
    colors: {
      transparent: "transparent",
      current:     "currentColor",

      // Raw palette — blue
      blue: {
        50:  "#EEF3FD",
        100: "#D5E2FA",
        200: "#AABFF5",
        300: "#7099EF",
        400: "#3D72E9",
        500: "#0052E2",
        600: "#0044C0",
        700: "#00339A",
        800: "#002376",
        900: "#001550",
      },

      // Raw palette — warm gray
      gray: {
        0:   "#FFFFFF",
        50:  "#F8F9FB",
        100: "#F0F2F6",
        150: "#E6E9EF",
        200: "#D8DCE6",
        300: "#B8BFCE",
        400: "#8D95A8",
        500: "#636B7E",
        600: "#424857",
        700: "#2C3140",
        800: "#1C2030",
        900: "#10131C",
        950: "#080A10",
      },

      // Semantic — backgrounds
      background: {
        DEFAULT: "#FFFFFF",   // bg-background
        subtle:  "#F8F9FB",   // bg-background-subtle
        muted:   "#F0F2F6",   // bg-background-muted
        inverse: "#10131C",   // bg-background-inverse
      },

      // Semantic — borders
      border: {
        DEFAULT: "#E6E9EF",   // border-border
        strong:  "#D8DCE6",   // border-border-strong
        focus:   "#0052E2",   // border-border-focus
      },

      // Semantic — text
      text: {
        primary:   "#10131C",  // text-text-primary   → or alias below
        secondary: "#636B7E",  // text-text-secondary
        tertiary:  "#8D95A8",  // text-text-tertiary
        disabled:  "#B8BFCE",  // text-text-disabled
        inverse:   "#FFFFFF",  // text-text-inverse
        link:      "#0052E2",  // text-text-link
        "link-hover": "#0044C0",
      },

      // Semantic — accent
      accent: {
        DEFAULT: "#0052E2",   // bg-accent / text-accent
        hover:   "#0044C0",
        active:  "#00339A",
        subtle:  "#EEF3FD",
        muted:   "#D5E2FA",
        on:      "#FFFFFF",   // text on accent bg
      },

      // Semantic — states
      success: {
        DEFAULT: "#12A150",
        subtle:  "#ECFDF5",
        border:  "#A7F3D0",
        text:    "#065F46",
      },
      warning: {
        DEFAULT: "#D97706",
        subtle:  "#FFFBEB",
        border:  "#FDE68A",
        text:    "#92400E",
      },
      error: {
        DEFAULT: "#DC2626",
        subtle:  "#FEF2F2",
        border:  "#FECACA",
        text:    "#991B1B",
      },
      info: {
        DEFAULT: "#0052E2",
        subtle:  "#EEF3FD",
        border:  "#D5E2FA",
        text:    "#002376",
      },

      // Solid white/black aliases
      white: "#FFFFFF",
      black: "#080A10",
    },

    // ─── Typography ───────────────────────────────────────────────────────────
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      mono: ["SF Mono", "Cascadia Code", "Fira Code", "monospace"],
    },

    fontSize: {
      xs:     ["11px", { lineHeight: "1.4",  letterSpacing: "0em" }],
      sm:     ["13px", { lineHeight: "1.55", letterSpacing: "0em" }],
      base:   ["15px", { lineHeight: "1.6",  letterSpacing: "0em" }],
      md:     ["17px", { lineHeight: "1.65", letterSpacing: "0em" }],
      lg:     ["20px", { lineHeight: "1.4",  letterSpacing: "-0.01em" }],
      xl:     ["24px", { lineHeight: "1.35", letterSpacing: "-0.02em" }],
      "2xl":  ["30px", { lineHeight: "1.3",  letterSpacing: "-0.02em" }],
      "3xl":  ["38px", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      "4xl":  ["48px", { lineHeight: "1.2",  letterSpacing: "-0.03em" }],
      "5xl":  ["60px", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
      "6xl":  ["76px", { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
    },

    fontWeight: {
      light:     "300",
      normal:    "400",
      medium:    "500",
      semibold:  "600",
      bold:      "700",
      extrabold: "800",
    },

    lineHeight: {
      none:    "1",
      tight:   "1.2",
      snug:    "1.35",
      normal:  "1.55",
      relaxed: "1.75",
    },

    letterSpacing: {
      tighter: "-0.03em",
      tight:   "-0.02em",
      normal:  "0em",
      wide:    "0.02em",
      wider:   "0.05em",
      caps:    "0.08em",
    },

    // ─── Spacing ──────────────────────────────────────────────────────────────
    spacing: {
      px:    "1px",
      0:     "0px",
      "0.5": "2px",
      1:     "4px",
      2:     "8px",
      3:     "12px",
      4:     "16px",
      5:     "20px",
      6:     "24px",
      7:     "28px",
      8:     "32px",
      9:     "36px",
      10:    "40px",
      11:    "44px",
      12:    "48px",
      14:    "56px",
      16:    "64px",
      20:    "80px",
      24:    "96px",
      28:    "112px",
      32:    "128px",
      36:    "144px",
      40:    "160px",
      48:    "192px",
      56:    "224px",
      64:    "256px",
    },

    // ─── Border Radius ────────────────────────────────────────────────────────
    borderRadius: {
      none: "0px",
      sm:   "6px",
      DEFAULT: "10px",   // rounded → md
      md:   "10px",
      lg:   "14px",
      xl:   "20px",
      "2xl": "28px",
      "3xl": "40px",
      full: "9999px",
    },

    // ─── Box Shadow ───────────────────────────────────────────────────────────
    boxShadow: {
      none:  "none",
      xs:    "0 1px 2px rgba(16, 19, 28, 0.06)",
      sm:    "0 1px 3px rgba(16, 19, 28, 0.08), 0 1px 2px rgba(16, 19, 28, 0.05)",
      DEFAULT: "0 4px 8px rgba(16, 19, 28, 0.07), 0 1px 3px rgba(16, 19, 28, 0.05)",
      md:    "0 4px 8px rgba(16, 19, 28, 0.07), 0 1px 3px rgba(16, 19, 28, 0.05)",
      lg:    "0 8px 24px rgba(16, 19, 28, 0.08), 0 2px 6px rgba(16, 19, 28, 0.05)",
      xl:    "0 20px 48px rgba(16, 19, 28, 0.10), 0 4px 12px rgba(16, 19, 28, 0.06)",
      "2xl": "0 40px 80px rgba(16, 19, 28, 0.13), 0 8px 24px rgba(16, 19, 28, 0.07)",
      inner: "inset 0 2px 4px rgba(16, 19, 28, 0.06)",
      // accent shadows — primary CTA only
      accent:    "0 4px 16px rgba(0, 82, 226, 0.22)",
      "accent-lg": "0 8px 32px rgba(0, 82, 226, 0.28)",
      // semantic aliases
      "focus-ring":       "0 0 0 3px rgba(0, 82, 226, 0.18)",
      "dropdown":         "0 4px 8px rgba(16, 19, 28, 0.07), 0 1px 3px rgba(16, 19, 28, 0.05)",
      "card":             "0 8px 24px rgba(16, 19, 28, 0.08), 0 2px 6px rgba(16, 19, 28, 0.05)",
      "modal":            "0 20px 48px rgba(16, 19, 28, 0.10), 0 4px 12px rgba(16, 19, 28, 0.06)",
      "cta":              "0 4px 16px rgba(0, 82, 226, 0.22)",
      "cta-hover":        "0 8px 32px rgba(0, 82, 226, 0.28)",
    },

    // ─── Z-Index ──────────────────────────────────────────────────────────────
    zIndex: {
      hide:      "-1",
      base:       "0",
      raised:    "10",
      dropdown:  "100",
      sticky:    "200",
      banner:    "300",
      overlay:   "400",
      modal:     "500",
      popover:   "600",
      toast:     "700",
      tooltip:   "800",
      spotlight: "900",
      max:       "999",
    },

    // ─── Animation ────────────────────────────────────────────────────────────
    transitionTimingFunction: {
      linear:    "linear",
      "ease-out":   "cubic-bezier(0.22, 1, 0.36, 1)",
      "ease-in":    "cubic-bezier(0.64, 0, 0.78, 0)",
      "ease-in-out":"cubic-bezier(0.45, 0, 0.55, 1)",
      spring:    "cubic-bezier(0.34, 1.56, 0.64, 1)",
      standard:  "cubic-bezier(0.2, 0, 0, 1)",
      DEFAULT:   "cubic-bezier(0.22, 1, 0.36, 1)",
    },

    transitionDuration: {
      instant: "80ms",
      fast:    "140ms",
      DEFAULT: "220ms",
      normal:  "220ms",
      slow:    "360ms",
      enter:   "500ms",
      page:    "600ms",
    },

    keyframes: {
      // Entrances
      "fade-in": {
        from: { opacity: "0" },
        to:   { opacity: "1" },
      },
      "fade-out": {
        from: { opacity: "1" },
        to:   { opacity: "0" },
      },
      "fade-in-up": {
        from: { opacity: "0", transform: "translateY(12px)" },
        to:   { opacity: "1", transform: "translateY(0)" },
      },
      "fade-in-down": {
        from: { opacity: "0", transform: "translateY(-8px)" },
        to:   { opacity: "1", transform: "translateY(0)" },
      },
      "fade-in-right": {
        from: { opacity: "0", transform: "translateX(-12px)" },
        to:   { opacity: "1", transform: "translateX(0)" },
      },
      "fade-in-left": {
        from: { opacity: "0", transform: "translateX(12px)" },
        to:   { opacity: "1", transform: "translateX(0)" },
      },
      "scale-in": {
        from: { opacity: "0", transform: "scale(0.95)" },
        to:   { opacity: "1", transform: "scale(1)" },
      },
      "scale-in-spring": {
        from: { opacity: "0", transform: "scale(0.92)" },
        to:   { opacity: "1", transform: "scale(1)" },
      },
      // Slide panel animations
      "slide-in-from-right": {
        from: { transform: "translateX(100%)" },
        to:   { transform: "translateX(0)" },
      },
      "slide-in-from-left": {
        from: { transform: "translateX(-100%)" },
        to:   { transform: "translateX(0)" },
      },
      "slide-in-from-bottom": {
        from: { transform: "translateY(100%)" },
        to:   { transform: "translateY(0)" },
      },
      // Overlay
      "overlay-in": {
        from: { opacity: "0" },
        to:   { opacity: "1" },
      },
      // Utility
      "spin-slow": {
        from: { transform: "rotate(0deg)" },
        to:   { transform: "rotate(360deg)" },
      },
      "pulse-subtle": {
        "0%, 100%": { opacity: "1" },
        "50%":      { opacity: "0.5" },
      },
      "shimmer": {
        "0%":   { backgroundPosition: "-200% 0" },
        "100%": { backgroundPosition: "200% 0" },
      },
    },

    animation: {
      none: "none",
      // Entrances — use for component mount
      "fade-in":       "fade-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "fade-out":      "fade-out 140ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "fade-in-up":    "fade-in-up 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "fade-in-down":  "fade-in-down 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "fade-in-right": "fade-in-right 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "fade-in-left":  "fade-in-left 360ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "scale-in":      "scale-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
      "scale-in-spring":"scale-in-spring 360ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
      // Panels / modals
      "slide-right":   "slide-in-from-right 360ms cubic-bezier(0.2, 0, 0, 1) both",
      "slide-left":    "slide-in-from-left 360ms cubic-bezier(0.2, 0, 0, 1) both",
      "slide-bottom":  "slide-in-from-bottom 360ms cubic-bezier(0.2, 0, 0, 1) both",
      // Overlay
      "overlay-in":    "overlay-in 220ms cubic-bezier(0.22, 1, 0.36, 1) both",
      // Page entrance (stagger with delay-* utilities)
      "enter":         "fade-in-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
      // Looping
      "spin-slow":     "spin-slow 2s linear infinite",
      "pulse-subtle":  "pulse-subtle 2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
      "shimmer":       "shimmer 1.8s linear infinite",
    },

    // ─── Extend (additive overrides) ──────────────────────────────────────────
    extend: {},
  },

  plugins: [],
};

export default config;
