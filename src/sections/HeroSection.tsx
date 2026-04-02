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
          <LiquidGlassBadge>Copiloto para microdecisões</LiquidGlassBadge>
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-[920px] font-extrabold leading-tight tracking-[-0.03em]"
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
          Decida melhor nos momentos
          <br />
          que mais travam você
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
          O VIDA entra em cena quando você está em dúvida entre duas ou mais
          opções, sugere caminhos possíveis e aprende com o seu jeito de decidir.
        </motion.p>
      </Container>
    </section>
  );
}
