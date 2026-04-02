import { motion } from "framer-motion";

import card1Img from "../assets/img/vida-card-1.png";
import card2Img from "../assets/img/vida-card-2.png";
import card3Img from "../assets/img/vida-card-3.png";
import { Container } from "../components/Container";
import { FeatureCard, type FeatureCardData } from "../components/FeatureCard";
import { SectionTitle } from "../components/SectionTitle";

const EASE = [0.22, 1, 0.36, 1] as const;
const SOFT_HEADING_COLOR = "#050414";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

const FEATURES: FeatureCardData[] = [
  {
    id: "review",
    imageSrc: card1Img,
    imageAlt: "Tela do VIDA mostrando apoio para decisões do dia",
    tint: "#EAF3FF",
    headline: "Entenda melhor o momento antes de escolher.",
    body: "O VIDA organiza sinais do seu dia, reduz ruído mental e ajuda você a enxergar o que realmente importa antes de decidir.",
  },
  {
    id: "training",
    imageSrc: card2Img,
    imageAlt: "Tela do VIDA sugerindo caminhos possíveis para uma escolha",
    tint: "#DDEEFF",
    headline: "Receba sugestões quando bater a indecisão.",
    body: "Quando você trava entre opções, o app propõe caminhos possíveis com base no seu contexto, nas suas preferências e no que já funcionou antes.",
  },
  {
    id: "satisfaction",
    imageSrc: card3Img,
    imageAlt: "Tela do VIDA mostrando evolução nas decisões e hábitos",
    tint: "#D3E6FF",
    headline: "Aprenda com as escolhas que você já fez.",
    body: "Ao longo do tempo, o VIDA identifica padrões, entende seu estilo de decisão e oferece uma ajuda cada vez mais útil no momento certo.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full py-24 md:py-28">
      <Container size="xl" className="flex flex-col items-center">
        <motion.div
          custom={0.08}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionTitle color={SOFT_HEADING_COLOR}>
            Tudo o que você precisa
            <br />
            para decidir com mais clareza
          </SectionTitle>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            alignItems: "stretch",
            width: "100%",
            marginTop: "52px",
          }}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              delay={0.18 + index * 0.1}
              ease={EASE}
              headingColor={SOFT_HEADING_COLOR}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
