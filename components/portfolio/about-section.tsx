import { Sparkles } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { GradientText, SectionHeading, sectionShell } from "./shared";

export function AboutSection() {
  return (
    <section className={`${sectionShell} pb-[90px] pt-[110px] md:pt-[150px]`} id="about">
      <SectionHeading eyebrow="01 · ABOUT">문제를 발견하면<br /><GradientText>해결까지 책임집니다.</GradientText></SectionHeading>
      <div className="mb-16 grid gap-8 md:mb-[90px] md:grid-cols-[.9fr_1.1fr] md:gap-[72px]">
        <div className="rounded-[18px] border border-line bg-[linear-gradient(145deg,rgba(126,76,255,.11),var(--surface))] p-[30px]"><Sparkles className="text-primary" size={22} /><p className="mt-[22px] text-[clamp(1.375rem,3vw,1.875rem)] leading-[1.55] tracking-[-0.025em]">“기술을 위한 기술보다, 사용자와 동료의 시간을 실제로 줄여 주는 기술을 선택합니다.”</p></div>
        <div className="flex flex-col gap-5 text-[17px] leading-[1.9] text-muted"><p>웹 에이전시, 메시징 서비스, 커머스, 게임 플랫폼을 거치며 제품의 기획과 설계부터 프론트엔드 구현, API 협업, 배포 환경까지 폭넓게 다뤘습니다.</p><p>한 명이 다섯 개 서비스를 맡거나, 20만 사용자의 커머스를 다시 만드는 상황에서도 공통 구조와 자동화를 먼저 설계하여 팀이 안정적으로 기능을 반복 개발할 수 있게 했습니다.</p></div>
      </div>
      <div className="border-t border-line">
        {experiences.map((experience) => <article className="grid gap-2 border-b border-line py-7 md:grid-cols-[150px_260px_1fr] md:gap-8" key={experience.company}><span className="font-mono text-xs text-faint">{experience.period}</span><h3 className="text-lg font-semibold">{experience.company}</h3><p className="leading-[1.7] text-muted">{experience.description}</p></article>)}
      </div>
    </section>
  );
}
