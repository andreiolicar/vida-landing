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

import { Container } from "../components/Container";

type Capability = {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
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
    title: "Enxergam sua clínica",
    body: "Entendem agenda, pacientes, prontuários e finanças em tempo real.",
    icon: Eye,
    preview: "perception",
  },
  {
    id: "audio",
    label: "Áudio e contexto",
    title: "Escutam atendimentos",
    body: "Transcrevem consultas e estruturam as informações no prontuário.",
    icon: Headphones,
    preview: "audio",
  },
  {
    id: "intelligence",
    label: "Inteligência",
    title: "Pensam com você",
    body: "Analisam dados e geram relatórios, alertas e automações úteis.",
    icon: Brain,
    preview: "intelligence",
  },
];

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: "privacy",
    title: "Privacidade total dos dados",
    body: "Os dados da clínica permanecem protegidos dentro da plataforma.",
    graphic: "privacy",
  },
  {
    id: "thinking",
    title: "Refletir, Decidir e Aprender",
    body: "Os assistentes analisam dados da clínica e executam ações automaticamente.",
    graphic: "thinking",
  },
  {
    id: "execution",
    title: "Execução automática",
    body: "Assistentes executam tarefas da clínica automaticamente.",
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

const LIQUID_GLASS_CARD_STYLE: CSSProperties = {
  WebkitBackdropFilter: "blur(18px)",
  backdropFilter: "blur(18px)",
  backgroundColor: "rgba(255,255,255,0.10)",
  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.30), 0 18px 44px rgba(0,41,125,0.16)",
  border: "1px solid rgba(255,255,255,0.22)",
};

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

export function AssistantsSection() {
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveCapability((current) => (current + 1) % CAPABILITIES.length);
    }, 4800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container size="2xl">
        <div className="relative overflow-hidden rounded-[34px] bg-[#0052E2] shadow-[0_32px_120px_rgba(0,82,226,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_24%)]" />

          <div className="relative overflow-hidden rounded-[28px] bg-[#0052E2] px-5 py-10 md:px-10 md:py-14 xl:px-[60px] xl:py-[72px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.10),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.08),transparent_20%)]" />

            <div className="relative">
              <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
                <div>
                  <h2 className="max-w-[420px] text-[clamp(34px,5vw,56px)] font-semibold leading-[0.96] tracking-[-0.04em] text-white">
                    IA que trabalha junto com sua clínica.
                  </h2>
                </div>

                <p className="max-w-[340px] text-[15px] leading-7 text-white lg:justify-self-end">
                  Assistentes que acompanham a operação da clínica, analisam
                  dados e executam tarefas automaticamente.
                </p>
              </div>

              <div className="mt-14 grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)]">
                <div
                  className="relative overflow-hidden rounded-[28px] p-8"
                  style={LIQUID_GLASS_CARD_STYLE}
                >
                  <CardGlow />

                  <p className="text-sm leading-5 text-white/52">Capacidades</p>

                  <div className="mt-14 flex flex-col gap-4">
                    {CAPABILITIES.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = index === activeCapability;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveCapability(index)}
                          className="group flex items-center gap-4 rounded-full bg-transparent p-0 text-left"
                        >
                          <span
                            className={cn(
                              "relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                              isActive
                                ? "border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.18))] text-[#0052E2] shadow-[0_0_30px_rgba(14,122,255,0.16)]"
                                : "border-white/15 bg-white/[0.08] text-white/75 group-hover:border-white/28 group-hover:bg-white/[0.12] group-hover:text-white",
                            )}
                          >
                            {isActive && (
                              <span className="absolute inset-[6px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(222,238,255,0.78))] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]" />
                            )}
                            <span
                              className={cn(
                                "absolute inset-[5px] rounded-full border border-white/65 opacity-0",
                                isActive && "vida-assistants-pulse opacity-100",
                              )}
                            />
                            <Icon
                              className="relative z-10 h-6 w-6"
                              strokeWidth={1.85}
                              absoluteStrokeWidth
                            />
                          </span>

                          <span
                            className={cn(
                              "text-[19px] font-semibold leading-7 tracking-[-0.02em] transition-colors duration-300",
                              isActive
                                ? "text-white"
                                : "text-white/48 group-hover:text-white/72",
                            )}
                          >
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="relative overflow-hidden rounded-[28px]"
                  style={LIQUID_GLASS_CARD_STYLE}
                >
                  <CardGlow />

                  <div className="grid min-h-[385px] md:grid-cols-[minmax(280px,430px)_minmax(0,1fr)]">
                    <div
                      className="relative min-h-[280px] overflow-hidden border-b border-white/6 md:border-b-0 md:border-r md:border-r-white/6"
                      style={LIQUID_GLASS_STAGE_STYLE}
                    >
                      <div
                        className="absolute inset-0"
                        style={GRAPHIC_FADE_MASK_STYLE}
                      >
                        {CAPABILITIES.map((item, index) => (
                          <div
                            key={`preview-${item.id}`}
                            className={cn(
                              "absolute inset-0",
                              STATE_LAYER_CLASS,
                              index === activeCapability
                                ? "translate-y-0 opacity-100 blur-0"
                                : "pointer-events-none translate-y-3 opacity-0 blur-[2px]",
                            )}
                          >
                            <CapabilityPreview preview={item.preview} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative min-h-[190px] px-6 py-6 md:px-10 md:py-10">
                      {CAPABILITIES.map((item, index) => (
                        <div
                          key={`text-${item.id}`}
                          className={cn(
                            "absolute inset-0 flex items-end px-6 py-6 md:px-10 md:py-10",
                            STATE_LAYER_CLASS,
                            index === activeCapability
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
                </div>
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
          52%,
          72%,
          100% {
            stroke-dashoffset: 86;
            opacity: 0;
          }
          20%,
          34%,
          74%,
          86% {
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
          36%,
          72%,
          88%,
          100% {
            transform: scale(0.92);
            opacity: 0;
          }
          24%,
          32%,
          78%,
          84% {
            transform: scale(1.16);
            opacity: 0.95;
          }
        }

        @keyframes vida-privacy-core-ring {
          0%,
          18%,
          36%,
          72%,
          88%,
          100% {
            opacity: 0.18;
            transform: scale(0.96);
          }
          24%,
          32%,
          78%,
          84% {
            opacity: 0.95;
            transform: scale(1.04);
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
          animation: vida-shield-half 2.6s ease-in-out infinite;
        }

        .vida-shield-fill-ccw {
          animation-delay: 0.08s;
        }

        .vida-privacy-core-charge {
          animation: vida-privacy-core-charge 5.6s ease-in-out infinite;
        }

        .vida-privacy-core-ring {
          animation: vida-privacy-core-ring 5.6s ease-in-out infinite;
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

function HighlightCardView({ card }: { card: HighlightCard }) {
  return (
    <div
      className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[28px] px-8 py-10"
      style={LIQUID_GLASS_CARD_STYLE}
    >
      <CardGlow />

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
    </div>
  );
}

function CardGlow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_center_top,rgba(62,149,255,0.38),rgba(62,149,255,0)_72%)] opacity-80 blur-[56px]" />
  );
}

function CapabilityPreview({ preview }: { preview: Capability["preview"] }) {
  if (preview === "perception") {
    return <PerceptionPreview />;
  }

  if (preview === "audio") {
    return <AudioPreview />;
  }

  return <IntelligencePreview />;
}

function PerceptionPreview() {
  return (
    <div className="absolute inset-0">
      <div className="vida-assistants-float absolute left-[17%] top-[18%] h-[220px] w-[220px] rounded-full border border-[#3E95FF]/22 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),rgba(62,149,255,0.16)_36%,rgba(255,255,255,0)_72%)] shadow-[0_0_56px_rgba(14,122,255,0.12)]" />
      <div className="vida-assistants-float absolute left-[26%] top-[27%] h-[140px] w-[140px] rounded-full border border-[#8EC0FF]/55 shadow-[0_0_40px_rgba(62,149,255,0.24)]">
        <div className="absolute inset-[18px] rounded-full border border-[#B4D7FF]/60" />
        <div className="absolute inset-[42px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(180,218,255,0.78)_42%,rgba(255,255,255,0.20)_74%)] shadow-[0_0_30px_rgba(62,149,255,0.24)]" />
      </div>

      <div className="absolute left-[28%] top-[29%] flex h-[132px] w-[132px] items-center justify-center text-[#0052E2]">
        <Eye className="h-14 w-14" strokeWidth={1.85} absoluteStrokeWidth />
      </div>

      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="vida-assistants-scan absolute h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#59A7FF] to-transparent"
          style={{
            left: `${53 + index * 4}%`,
            top: `${26 + index * 7}%`,
            width: "160px",
            animationDelay: `${index * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function AudioPreview() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[18%] top-[18%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),rgba(62,149,255,0.14)_42%,rgba(255,255,255,0)_72%)] blur-[6px]" />

      {[0, 1, 2].map((ring) => (
        <span
          key={ring}
          className="vida-assistants-radar absolute left-[31%] top-[31%] h-[120px] w-[120px] rounded-full border border-[#4A9FFF]/50"
          style={{ animationDelay: `${ring * 0.75}s` }}
        />
      ))}

      <div className="absolute left-[29.5%] top-[29.5%] flex h-[126px] w-[126px] items-center justify-center rounded-full border border-[#4A9FFF]/60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.94),rgba(190,224,255,0.64)_34%,rgba(255,255,255,0.18)_76%)] shadow-[0_0_32px_rgba(62,149,255,0.18)]">
        <Headphones
          className="h-14 w-14 text-[#0052E2]"
          strokeWidth={1.85}
          absoluteStrokeWidth
        />
      </div>

      <div className="absolute right-[14%] top-[33%] flex items-end gap-2">
        {[18, 28, 38, 28, 18].map((height, index) => (
          <span
            key={height + index}
            className="vida-assistants-float block w-[8px] rounded-full bg-[linear-gradient(180deg,#7DBCFF,#1B6DFF)]"
            style={{
              height: `${height}px`,
              animationDelay: `${index * 0.16}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function IntelligencePreview() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[18%] top-[10%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.30),rgba(36,108,255,0.12)_48%,rgba(255,255,255,0)_72%)] blur-[8px]" />

      <div className="absolute left-[31%] top-[29%] flex h-[118px] w-[118px] items-center justify-center rounded-full border border-[#499EFF]/60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96),rgba(178,217,255,0.64)_32%,rgba(255,255,255,0.18)_74%)] shadow-[0_0_28px_rgba(62,149,255,0.20)]">
        <Brain
          className="h-10 w-10 text-[#0E7AFF]"
          strokeWidth={1.85}
          absoluteStrokeWidth
        />
      </div>

      {[
        { left: "24%", top: "26%" },
        { left: "56%", top: "22%" },
        { left: "62%", top: "52%" },
        { left: "25%", top: "58%" },
      ].map((node, index) => (
        <span
          key={`${node.left}-${node.top}`}
          className="vida-assistants-float absolute h-4 w-4 rounded-full border border-[#59A7FF]/60 bg-white/85 shadow-[0_0_18px_rgba(62,149,255,0.35)]"
          style={{
            left: node.left,
            top: node.top,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}

      <ConnectionStroke
        className="left-[34%] top-[36%] h-[96px] w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(73,158,255,0.34), rgba(73,158,255,0.16), rgba(73,158,255,0.30))",
        }}
      />
      <ConnectionStroke className="left-[33.4%] top-[36.6%] w-[84px] rotate-[24deg]" />
      <ConnectionStroke className="left-[33.4%] top-[65.5%] w-[86px] -rotate-[24deg]" />
      <ConnectionStroke className="left-[50.4%] top-[48.4%] w-[96px] -rotate-[35deg]" />
      <ConnectionStroke className="left-[49.7%] top-[51.8%] w-[92px] rotate-[18deg]" />
    </div>
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

        <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-[linear-gradient(180deg,rgba(54,124,255,0.95),rgba(0,82,226,0.78))] shadow-[0_0_30px_rgba(255,255,255,0.12)]">
          <div className="vida-privacy-core-charge absolute inset-[-14px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.46),rgba(255,255,255,0.12)_48%,rgba(255,255,255,0)_72%)]" />
          <svg
            className="vida-privacy-core-ring absolute"
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

function ConnectionStroke({
  className,
  style,
}: {
  className: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={cn(
        "absolute block h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(73,158,255,0),rgba(73,158,255,0.68)_18%,rgba(73,158,255,0.68)_82%,rgba(73,158,255,0))]",
        className,
      )}
      style={style}
    />
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

      <div className="absolute left-1/2 top-[74px] h-[108px] w-px -translate-x-1/2 bg-gradient-to-b from-white/20 to-white/5" />
      <div className="absolute left-1/2 top-[178px] h-[108px] w-px -translate-x-1/2 bg-gradient-to-b from-white/20 to-white/5" />
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
