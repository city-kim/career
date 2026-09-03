import { skillGroups } from "@/data/portfolio";
import { GradientText, SectionHeading, sectionShell } from "./shared";

export function SkillsSection() {
  return <section className={`${sectionShell} pb-[90px] pt-[110px] md:pt-[150px]`} id="stack"><SectionHeading eyebrow="03 · SKILLS & TOOLS">빠르게 만드는 기술과<br /><GradientText>오래 유지하는 기준.</GradientText></SectionHeading><div className="border-t border-line">{skillGroups.map(({ group, items }) => <div className="grid gap-[18px] border-b border-line py-7 md:grid-cols-[170px_1fr]" key={group}><span className="font-mono text-xs tracking-[.1em] text-primary">{group}</span><div className="flex flex-wrap gap-x-7 gap-y-3">{items.map((item) => <strong className="text-[clamp(1.0625rem,2.3vw,1.4375rem)] font-medium" key={item}>{item}</strong>)}</div></div>)}</div></section>;
}
