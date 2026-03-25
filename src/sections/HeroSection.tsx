import { motion } from "framer-motion";

import { Container } from "../components/Container";
import { LiquidGlassBadge } from "../components/LiquidGlassBadge";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export function HeroSection() {
  return (
    <section className="relative w-full overflow-visible">
      <Container
        size="lg"
        className="relative z-10 flex flex-col items-center pt-[120px] text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "28px" }}
        >
          <LiquidGlassBadge>100% Custom No-Code Feeds</LiquidGlassBadge>
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-[700px] font-extrabold leading-tight tracking-[-0.03em]"
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            lineHeight: 1.1,
            marginBottom: "20px",
            backgroundImage: "linear-gradient(#ffffff, rgba(255,255,255,0.80))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          The workspace your
          <br />
          team actually uses
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-[520px] font-normal leading-relaxed"
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "36px",
          }}
        >
          Bring your projects, people, and processes into one calm, focused
          space built for modern teams that move fast.
        </motion.p>
      </Container>
    </section>
  );
}
