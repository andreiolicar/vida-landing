import iconBlue from "../assets/logo/icon/icon-blue.png";
import { Container } from "./Container";

type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({
  className = "",
}: SectionDividerProps) {
  return (
    <Container size="xl">
      <div
        className={[
          "section-divider flex items-center gap-[19px] py-8 md:py-10",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="divider-gray-200 h-px flex-1 bg-[#E5E7EB]" />
        <img
          src={iconBlue}
          loading="lazy"
          alt=""
          className="icon-regular relative -translate-y-[10%] h-[22px] w-[22px] shrink-0 object-contain md:h-7 md:w-7"
        />
        <div className="divider-gray-200 h-px flex-1 bg-[#E5E7EB]" />
      </div>
    </Container>
  );
}
