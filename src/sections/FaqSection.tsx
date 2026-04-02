import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

type FaqItem = {
  question: string;
  answer: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O que o VIDA faz no dia a dia?",
    answer:
      "O VIDA ajuda você a tomar melhores microdecisões quando surge dúvida entre opções, trazendo clareza no momento em que decidir sozinho fica mais difícil.",
  },
  {
    question: "O app substitui minha decisão?",
    answer:
      "Não. O VIDA funciona como um copiloto: ele sugere caminhos, organiza contexto e apoia sua escolha, mas a decisão final continua sendo sua.",
  },
  {
    question: "Como o VIDA aprende o meu jeito de decidir?",
    answer:
      "O app observa padrões das suas escolhas, horários, preferências e contexto para oferecer sugestões cada vez mais relevantes ao longo do uso.",
  },
  {
    question: "Em que tipo de situação o VIDA pode ajudar?",
    answer:
      "Desde decisões simples do cotidiano até momentos em que você trava entre prioridades, próximos passos, rotina, bem-estar ou organização pessoal.",
  },
  {
    question: "Preciso configurar tudo antes de começar?",
    answer:
      "Não. A experiência foi pensada para começar de forma simples, evoluindo conforme você usa o app e interage com as sugestões.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 md:py-28" aria-labelledby="faq-title">
      <Container size="xl" className="flex flex-col items-center">
        <motion.div
          custom={0.08}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionTitle id="faq-title" color="#050414">
            Perguntas Frequentes
          </SectionTitle>
        </motion.div>

        <motion.div
          className="mt-[52px] w-full max-w-[920px] space-y-4"
          custom={0.08}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white/85 backdrop-blur-[10px]"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.92), 0 14px 34px rgba(17,70,183,0.05)",
                }}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => {
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/70 md:px-7 md:py-6"
                >
                  <span className="text-[17px] font-semibold leading-7 tracking-[-0.03em] text-[#111827] md:text-[18px]">
                    {item.question}
                  </span>

                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7E4FF] bg-[#F6FAFF] text-[#1146B7] transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 md:px-7 md:pb-7">
                        <div className="h-px w-full bg-[#EEF2F7]" />
                        <p className="pt-5 text-[15px] leading-7 text-[#5F6472] md:text-[16px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
