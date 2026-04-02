import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  Brain,
  Check,
  Eye,
  FileText,
  Headphones,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";

import celular1Img from "../assets/img/celular-1.png";
import celular2Img from "../assets/img/celular-2.png";
import celular3Img from "../assets/img/celular-3.png";
import { Container } from "../components/Container";
import { GlassCard } from "../components/GlassCard";

type Capability = {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  phoneImage: string;
  preview: "perception" | "audio" | "intelligence";
};

type HighlightCard = {
  id: string;
  title: string;
  body: string;
  graphic: "privacy" | "thinking" | "execution";
};

const CAPABILITIES: Capability[] = [
  {
    id: "perception",
    label: "Percepção",
    title: "Percebe o seu momento",
    body: "Entende sinais do seu dia, contexto e rotina para sugerir decisões mais úteis.",
    icon: Eye,
    phoneImage: celular1Img,
    preview: "perception",
  },
  {
    id: "audio",
    label: "Áudio e contexto",
    title: "Escuta e organiza o contexto",
    body: "Transforma pensamentos, dúvidas e informações soltas em um cenário mais claro para decidir.",
    icon: Headphones,
    phoneImage: celular2Img,
    preview: "audio",
  },
  {
    id: "intelligence",
    label: "Inteligência",
    title: "Aprende com você",
    body: "Reconhece padrões de escolha e ajusta as sugestões ao seu jeito de agir.",
    icon: Brain,
    phoneImage: celular3Img,
    preview: "intelligence",
  },
];

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: "privacy",
    title: "Privacidade total dos dados",
    body: "Seus dados permanecem protegidos e são usados para personalizar a ajuda sem expor sua rotina.",
    graphic: "privacy",
  },
  {
    id: "thinking",
    title: "Refletir, Decidir e Aprender",
    body: "O VIDA conecta o seu contexto, intenção e histórico para apoiar decisões com mais clareza, evitando sobrecarga.",
    graphic: "thinking",
  },
  {
    id: "execution",
    title: "Execução automática",
    body: "Quando fizer sentido, o app antecipa lembretes e próximos passos para reduzir atrito no dia a dia.",
    graphic: "execution",
  },
];

const THINKING_STEPS = [
  { label: "Refletir", icon: FileText },
  { label: "Decidir", icon: Check },
  { label: "Aprender", icon: Brain },
  { label: "Refletir", icon: FileText },
  { label: "Decidir", icon: Check },
  { label: "Aprender", icon: Brain },
];

const LIQUID_GLASS_STAGE_STYLE: CSSProperties = {
  WebkitBackdropFilter: "none",
  backdropFilter: "none",
  backgroundColor: "transparent",
  backgroundImage: "none",
  boxShadow: "none",
  border: "none",
};

const LIQUID_GLASS_CHIP_STYLE: CSSProperties = {
  WebkitBackdropFilter: "blur(14px)",
  backdropFilter: "blur(14px)",
  backgroundColor: "rgba(255,255,255,0.12)",
  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08))",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.34), 0 8px 20px rgba(0,42,128,0.10)",
  border: "1px solid rgba(255,255,255,0.22)",
};

const GRAPHIC_FADE_MASK_STYLE: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const STATE_LAYER_CLASS =
  "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

const CAPABILITY_ITEM_TRANSITION_CLASS =
  "transition-[opacity,transform,color,background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

const CAPABILITY_HOLD_MS = 5000;
const CAPABILITY_EXIT_MS = 500;
const CAPABILITY_ENTER_MS = 500;

type PhonePhase = "idle" | "exiting" | "entering";

export function AssistantsSection() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [queuedCapability, setQueuedCapability] = useState<number | null>(null);
  const [phonePhase, setPhonePhase] = useState<PhonePhase>("idle");

  useEffect(() => {
    if (phonePhase !== "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      startCapabilityTransition((activeCapability + 1) % CAPABILITIES.length);
    }, CAPABILITY_HOLD_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeCapability, phonePhase]);

  useEffect(() => {
    if (phonePhase !== "exiting" || queuedCapability === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveCapability(queuedCapability);
      setPhonePhase("entering");
    }, CAPABILITY_EXIT_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [phonePhase, queuedCapability]);

  useEffect(() => {
    if (phonePhase !== "entering") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setQueuedCapability(null);
      setPhonePhase("idle");
    }, CAPABILITY_ENTER_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [phonePhase]);

  function startCapabilityTransition(nextIndex: number) {
    if (phonePhase !== "idle" || nextIndex === activeCapability) {
      return;
    }

    setQueuedCapability(nextIndex);
    setPhonePhase("exiting");
  }

  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container size="2xl">
        <div className="relative overflow-hidden rounded-[34px] bg-[#0052E2]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_24%)]" />

          <div className="relative overflow-hidden rounded-[28px] bg-[#0052E2] px-5 py-10 md:px-10 md:py-14 xl:px-[60px] xl:py-[72px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.10),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.08),transparent_20%)]" />

            <div className="relative">
              <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
                <div>
                  <h2 className="max-w-[420px] text-[clamp(34px,5vw,56px)] font-semibold leading-[0.96] tracking-[-0.04em] text-white">
                    IA que ajuda você a decidir melhor.
                  </h2>
                </div>

                <p className="max-w-[340px] text-[15px] leading-7 text-white lg:justify-self-end">
                  O VIDA acompanha seu contexto, aprende padrões de
                  comportamento e sugere próximos passos quando você fica em
                  dúvida.
                </p>
              </div>

              <div className="mt-14 grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
                <GlassCard variant="assistants" glow className="p-8">
                  <p className="text-sm leading-5 text-white">Capacidades</p>

                  <div className="mt-14 flex flex-col gap-4">
                    {CAPABILITIES.map((item, index) => {
                      const Icon = item.icon;
                      const isVisibleActive =
                        phonePhase === "idle" && index === activeCapability;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => startCapabilityTransition(index)}
                          className={cn(
                            "group flex items-center gap-4 rounded-full bg-transparent p-0 text-left",
                            CAPABILITY_ITEM_TRANSITION_CLASS,
                            isVisibleActive
                              ? "translate-x-0 scale-100 opacity-100"
                              : "translate-x-0 scale-[0.985] opacity-88",
                          )}
                        >
                          <span
                            className={cn(
                              "relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border",
                              CAPABILITY_ITEM_TRANSITION_CLASS,
                              isVisibleActive
                                ? "scale-100 border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.18))] text-[#0052E2] shadow-[0_0_30px_rgba(14,122,255,0.16)]"
                                : "scale-[0.965] border-white/15 bg-white/[0.08] text-[#0F3F95] shadow-none group-hover:scale-[0.985] group-hover:border-white/28 group-hover:bg-white/[0.12] group-hover:text-[#0B2F73]",
                            )}
                          >
                            {isVisibleActive && (
                              <span
                                className={cn(
                                  "absolute inset-[6px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(222,238,255,0.78))] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]",
                                  CAPABILITY_ITEM_TRANSITION_CLASS,
                                )}
                              />
                            )}
                            <span
                              className={cn(
                                "absolute inset-[5px] rounded-full border border-white/65",
                                CAPABILITY_ITEM_TRANSITION_CLASS,
                                isVisibleActive &&
                                  "vida-assistants-pulse opacity-100",
                                !isVisibleActive && "scale-[0.9] opacity-0",
                              )}
                            />
                            <Icon
                              className={cn(
                                "relative z-10 h-6 w-6",
                                CAPABILITY_ITEM_TRANSITION_CLASS,
                                isVisibleActive
                                  ? "scale-100 opacity-100"
                                  : "scale-[0.92] opacity-82 group-hover:scale-[0.96] group-hover:opacity-100",
                              )}
                              strokeWidth={1.85}
                              absoluteStrokeWidth
                            />
                          </span>

                          <span
                            className={cn(
                              "text-[19px] font-semibold leading-7 tracking-[-0.02em]",
                              CAPABILITY_ITEM_TRANSITION_CLASS,
                              isVisibleActive
                                ? "translate-x-0 scale-100 text-white opacity-100"
                                : "translate-x-0 scale-[0.985] text-white/48 opacity-90 group-hover:scale-100 group-hover:text-white/72 group-hover:opacity-100",
                            )}
                          >
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </GlassCard>

                <GlassCard variant="assistants" glow>
                  <div className="grid min-h-[385px] md:grid-cols-[minmax(280px,430px)_minmax(0,1fr)]">
                    <div
                      className="relative min-h-[280px] overflow-hidden border-b border-white/6 md:border-b-0 md:border-r md:border-r-white/6"
                      style={LIQUID_GLASS_STAGE_STYLE}
                    >
                      <CapabilityPhonePreview
                        capabilities={CAPABILITIES}
                        activeCapability={activeCapability}
                        phonePhase={phonePhase}
                      />
                    </div>

                    <div className="relative min-h-[190px] px-6 py-6 md:px-10 md:py-10">
                      {CAPABILITIES.map((item, index) => (
                        <div
                          key={`text-${item.id}`}
                          className={cn(
                            "absolute inset-0 flex items-end px-6 py-6 md:px-10 md:py-10",
                            STATE_LAYER_CLASS,
                            phonePhase === "idle" && index === activeCapability
                              ? "translate-y-0 opacity-100 blur-0"
                              : "pointer-events-none translate-y-4 opacity-0 blur-[2px]",
                          )}
                        >
                          <div className="max-w-[300px]">
                            <span className="text-xs font-medium leading-[18px] text-white">
                              {item.label}
                            </span>
                            <h3 className="mt-4 text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[36px]">
                              {item.title}
                            </h3>
                            <p className="mt-4 text-sm leading-6 text-white">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {HIGHLIGHT_CARDS.map((card) => (
                  <HighlightCardView key={card.id} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes vida-assistants-pulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.9;
          }
        }

        @keyframes vida-assistants-scan {
          0% {
            transform: translateX(-18px);
            opacity: 0;
          }
          18%,
          78% {
            opacity: 1;
          }
          100% {
            transform: translateX(24px);
            opacity: 0;
          }
        }

        @keyframes vida-assistants-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes vida-assistants-radar {
          0% {
            transform: scale(0.28);
            opacity: 0.82;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }

        @keyframes vida-assistants-carousel {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-180px);
          }
        }

        @keyframes vida-assistants-spin-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes vida-assistants-spin-ccw {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes vida-shield-half {
          0%,
          18%,
          34%,
          52%,
          72%,
          86%,
          100% {
            stroke-dashoffset: 86;
            opacity: 0;
          }
          20%,
          30%,
          74%,
          82% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }

        @keyframes vida-energy-in-a {
          0% {
            stroke-dashoffset: 1;
            opacity: 0;
          }
          6% {
            opacity: 1;
          }
          16% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          18%,
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes vida-energy-out-a {
          0%,
          36% {
            stroke-dashoffset: -1;
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 0.95;
          }
          52%,
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes vida-energy-in-b {
          0%,
          54% {
            stroke-dashoffset: 1;
            opacity: 0;
          }
          58% {
            opacity: 1;
          }
          70% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          72%,
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes vida-energy-out-b {
          0%,
          88% {
            stroke-dashoffset: -1;
            opacity: 0;
          }
          92% {
            opacity: 1;
          }
          98% {
            stroke-dashoffset: 0;
            opacity: 0.95;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes vida-privacy-core-charge {
          0%,
          18%,
          34%,
          36%,
          72%,
          86%,
          88%,
          100% {
            transform: scale(0.92);
            opacity: 0;
          }
          22%,
          30%,
          76%,
          82% {
            transform: scale(1.16);
            opacity: 0.95;
          }
        }

        .vida-assistants-pulse {
          animation: vida-assistants-pulse 2.8s ease-in-out infinite;
        }

        .vida-assistants-scan {
          animation: vida-assistants-scan 3.2s linear infinite;
        }

        .vida-assistants-float {
          animation: vida-assistants-float 5.4s ease-in-out infinite;
        }

        .vida-assistants-radar {
          animation: vida-assistants-radar 2.4s linear infinite;
        }

        .vida-assistants-carousel {
          animation: vida-assistants-carousel 8.8s linear infinite;
        }

        .vida-assistants-spin-cw {
          animation: vida-assistants-spin-cw 16s linear infinite;
        }

        .vida-assistants-spin-ccw {
          animation: vida-assistants-spin-ccw 12s linear infinite;
        }

        .vida-shield-fill-cw,
        .vida-shield-fill-ccw {
          stroke-dasharray: 86;
          stroke-dashoffset: 86;
          animation: vida-shield-half 5.6s ease-in-out infinite;
        }

        .vida-shield-fill-ccw {
          animation-delay: 0s;
        }

        .vida-privacy-core-charge {
          animation: vida-privacy-core-charge 5.6s ease-in-out infinite;
        }

        .vida-energy-in-a,
        .vida-energy-in-b,
        .vida-energy-out-a,
        .vida-energy-out-b {
          stroke-dasharray: 1;
        }

        .vida-energy-in-a {
          stroke-dashoffset: 1;
          animation: vida-energy-in-a 5.6s linear infinite;
        }

        .vida-energy-out-a {
          stroke-dashoffset: -1;
          animation: vida-energy-out-a 5.6s linear infinite;
        }

        .vida-energy-in-b {
          stroke-dashoffset: 1;
          animation: vida-energy-in-b 5.6s linear infinite;
        }

        .vida-energy-out-b {
          stroke-dashoffset: -1;
          animation: vida-energy-out-b 5.6s linear infinite;
        }

        .vida-assistants-counter-outer {
          animation: vida-assistants-spin-cw 12s linear infinite;
        }

        .vida-assistants-counter-inner {
          animation: vida-assistants-spin-ccw 16s linear infinite;
        }
      `}</style>
    </section>
  );
}

function CapabilityPhonePreview({
  capabilities,
  activeCapability,
  phonePhase,
}: {
  capabilities: Capability[];
  activeCapability: number;
  phonePhase: PhonePhase;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.14),transparent_44%)]" />

      {capabilities.map((item, index) => {
        const isActive = index === activeCapability;

        return (
          <img
            key={item.id}
            src={item.phoneImage}
            alt={`Tela do VIDA para ${item.id}`}
            className={cn(
              "pointer-events-none absolute left-1/2 bottom-0 z-10 w-[clamp(260px,60%,322px)] -translate-x-1/2 object-contain drop-shadow-[0_32px_44px_rgba(1,18,66,0.18)] transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
              phonePhase === "exiting" &&
                isActive &&
                "duration-[500ms] translate-y-[68%] opacity-0 blur-[1px]",
              phonePhase === "entering" &&
                isActive &&
                "duration-[500ms] translate-y-[38%] opacity-100 blur-0",
              phonePhase === "idle" &&
                isActive &&
                "duration-[500ms] translate-y-[38%] opacity-100 blur-0",
              (!isActive || phonePhase === "exiting") &&
                !(phonePhase === "idle" && isActive) &&
                "translate-y-[68%] opacity-0 blur-[1px]",
            )}
          />
        );
      })}
    </div>
  );
}

function HighlightCardView({ card }: { card: HighlightCard }) {
  return (
    <GlassCard
      variant="assistants"
      glow
      className="flex min-h-[340px] flex-col justify-between px-8 py-10"
    >
      <div
        className="relative h-[210px] overflow-hidden rounded-[20px]"
        style={LIQUID_GLASS_STAGE_STYLE}
      >
        <div className="absolute inset-0" style={GRAPHIC_FADE_MASK_STYLE}>
          <div
            className="absolute inset-0 opacity-38"
            style={{
              backgroundImage:
                "radial-gradient(rgba(62,149,255,0.18) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "radial-gradient(circle at center, black 38%, transparent 86%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 38%, transparent 86%)",
            }}
          />

          {card.graphic === "privacy" && <PrivacyGraphic />}
          {card.graphic === "thinking" && <ThinkingGraphic />}
          {card.graphic === "execution" && <ExecutionGraphic />}
        </div>
      </div>

      <div className="relative mt-8 text-center">
        <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.02em] text-white sm:text-[22px]">
          {card.title}
        </h3>
        <p className="mx-auto mt-4 max-w-[320px] text-[15px] leading-7 text-white">
          {card.body}
        </p>
      </div>
    </GlassCard>
  );
}

function PrivacyGraphic() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[243px] w-[317px] -translate-x-1/2 -translate-y-1/2 scale-[0.82] overflow-hidden rounded-[20px] sm:scale-[0.88]">
        <div
          className="absolute left-[14px] top-4 h-[212px] w-[288px] opacity-55"
          style={{
            backgroundImage:
              "radial-gradient(rgba(62,149,255,0.26) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3C7AE9] shadow-[0_0_30px_rgba(255,255,255,0.12)]">
          <div className="vida-privacy-core-charge absolute inset-[-14px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.46),rgba(255,255,255,0.12)_48%,rgba(255,255,255,0)_72%)]" />
          <svg
            className="absolute"
            style={{ left: "-1px", top: "-1px", width: "58px", height: "58px" }}
            viewBox="0 0 58 58"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="29"
              cy="29"
              r="27"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              className="vida-shield-fill-cw"
              cx="29"
              cy="29"
              r="27"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              transform="rotate(-90 29 29)"
            />
            <circle
              className="vida-shield-fill-ccw"
              cx="29"
              cy="29"
              r="27"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              transform="translate(58 0) scale(-1 1) rotate(-90 29 29)"
            />
          </svg>
          <ShieldCheck
            className="relative z-10 h-6 w-6 text-white"
            strokeWidth={1.9}
            absoluteStrokeWidth
          />
        </div>

        <svg
          className="absolute"
          style={{
            left: "158.96px",
            top: "17px",
            width: "95.5px",
            height: "77px",
          }}
          viewBox="0 0 97.48 77"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M96.48 0V32.5C96.48 41.34 89.31 48.5 80.48 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="2"
          />
          <path
            className="vida-energy-in-b"
            d="M96.48 0V32.5C96.48 41.34 89.31 48.5 80.48 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>

        <svg
          className="absolute -scale-x-100"
          style={{ left: "63.5px", top: "17px", width: "95px", height: "77px" }}
          viewBox="0 0 96.98 77"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M95.98 0V32.5C95.98 41.34 88.81 48.5 79.98 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="2"
          />
          <path
            className="vida-energy-in-a"
            d="M95.98 0V32.5C95.98 41.34 88.81 48.5 79.98 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>

        <svg
          className="absolute rotate-180"
          style={{
            left: "63.5px",
            top: "149px",
            width: "95.5px",
            height: "77px",
          }}
          viewBox="0 0 97.48 77"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M96.48 0V32.5C96.48 41.34 89.31 48.5 80.48 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="2"
          />
          <path
            className="vida-energy-out-b"
            d="M96.48 0V32.5C96.48 41.34 89.31 48.5 80.48 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>

        <svg
          className="absolute -scale-x-100 rotate-180"
          style={{
            left: "159.46px",
            top: "149px",
            width: "95px",
            height: "77px",
          }}
          viewBox="0 0 96.98 77"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M95.98 0V32.5C95.98 41.34 88.81 48.5 79.98 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="2"
          />
          <path
            className="vida-energy-out-a"
            d="M95.98 0V32.5C95.98 41.34 88.81 48.5 79.98 48.5H17C8.15 48.5 0.99 55.68 1 64.52L1.02 77"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1}
          />
        </svg>
      </div>
    </div>
  );
}

function ThinkingGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-4 h-[240px] w-[220px] -translate-x-1/2 overflow-hidden"
        style={GRAPHIC_FADE_MASK_STYLE}
      >
        <div className="vida-assistants-carousel flex flex-col items-center gap-4">
          {THINKING_STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={`${step.label}-${index}`}
                className="flex h-11 w-[152px] items-center justify-center gap-2 rounded-full px-4 text-white"
                style={LIQUID_GLASS_CHIP_STYLE}
              >
                <Icon
                  className="h-5 w-5 text-white"
                  strokeWidth={1.9}
                  absoluteStrokeWidth
                />
                <span className="text-base font-semibold leading-6">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExecutionGraphic() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="vida-assistants-spin-ccw relative h-[217px] w-[217px] rounded-full border-2 border-[#2B75FF]/34 shadow-[0_0_36px_rgba(14,122,255,0.14)]">
          <span className="absolute -left-[15px] top-1/2 flex h-[31px] w-[31px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/48 bg-[#3878E9] shadow-[0_0_10px_rgba(255,255,255,0.06)]">
            <span className="vida-assistants-counter-outer flex h-full w-full items-center justify-center">
              <X
                className="h-[11px] w-[11px] text-white"
                strokeWidth={2.1}
                absoluteStrokeWidth
              />
            </span>
          </span>
          <span className="absolute -right-[15px] top-1/2 flex h-[31px] w-[31px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(232,243,255,0.92))] shadow-[0_0_16px_rgba(14,122,255,0.18)]">
            <span className="vida-assistants-counter-outer flex h-full w-full items-center justify-center rounded-full bg-white/86">
              <Check
                className="h-[13px] w-[13px] text-[#0E7AFF]"
                strokeWidth={2.1}
                absoluteStrokeWidth
              />
            </span>
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="vida-assistants-spin-cw relative h-[135px] w-[135px] rounded-full border-2 border-[#3E95FF]/60 shadow-[0_0_30px_rgba(14,122,255,0.22)]">
          <span className="absolute left-1/2 -top-[15px] flex h-[31px] w-[31px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/48 bg-[#3878E9] shadow-[0_0_10px_rgba(255,255,255,0.06)]">
            <span className="vida-assistants-counter-inner flex h-full w-full items-center justify-center">
              <X
                className="h-[11px] w-[11px] text-white"
                strokeWidth={2.1}
                absoluteStrokeWidth
              />
            </span>
          </span>
          <span className="absolute left-1/2 -bottom-[15px] flex h-[31px] w-[31px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(232,243,255,0.92))] shadow-[0_0_16px_rgba(14,122,255,0.18)]">
            <span className="vida-assistants-counter-inner flex h-full w-full items-center justify-center rounded-full bg-white/86">
              <Check
                className="h-[13px] w-[13px] text-[#0E7AFF]"
                strokeWidth={2.1}
                absoluteStrokeWidth
              />
            </span>
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.68))] shadow-[0_0_22px_rgba(14,122,255,0.22)]">
        <Brain
          className="h-6 w-6 text-[#3E95FF]"
          strokeWidth={1.9}
          absoluteStrokeWidth
        />
      </div>
    </div>
  );
}
