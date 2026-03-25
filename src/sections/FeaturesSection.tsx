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
    imageAlt: "Dashboard card for interaction review",
    tint: "#EAF3FF",
    headline: "Review 100% of interactions in seconds.",
    body: "See the full picture of your users' daily activities across schedule, medication, and support at a glance.",
  },
  {
    id: "training",
    imageSrc: card2Img,
    imageAlt: "Daily plan card for personalized care",
    tint: "#DDEEFF",
    headline: "Generate custom daily plans for each user.",
    body: "Guide your users with AI-powered routines that adapt to their real needs, habits, and goals.",
  },
  {
    id: "satisfaction",
    imageSrc: card3Img,
    imageAlt: "Engagement card with reminders and activity tracking",
    tint: "#D3E6FF",
    headline: "Watch user engagement increase.",
    body: "Activity tracking and smart reminders work together to improve every interaction, day after day.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full pt-6 pb-24 md:pb-28">
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
            em um só lugar
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
