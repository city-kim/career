import Image from "next/image";
import type { Project, ProjectTone } from "@/data/portfolio";

const toneClasses: Record<ProjectTone, string> = { violet: "from-[#261649] to-[#7e42d6]", blue: "from-[#14294a] to-[#3268b6]", mint: "from-[#123b38] to-[#2c8075]" };

export function ProjectCard({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-16">
      <div className={`aspect-[4/3] overflow-hidden rounded-[18px] border border-line bg-gradient-to-br p-[13px] md:rounded-3xl md:p-[22px] ${toneClasses[project.tone]} ${reversed ? "md:order-2" : ""}`}>
        {project.image ? <Image className="h-full w-full rounded-[14px] object-cover" src={project.image} alt={`${project.title} 프로젝트 화면`} width={1600} height={1200} /> : <div className="grid h-full place-content-center place-items-center gap-2.5 rounded-[14px] border border-dashed border-white/30 bg-[#07081038] text-white/80"><span className="font-mono text-[11px] tracking-[.14em]">PROJECT SCREENSHOT</span><strong className="text-[54px] leading-none text-white/90 md:text-[74px]">{project.no}</strong><small className="font-mono text-[11px] tracking-[.14em]">이미지를 이 영역에 추가하세요</small></div>}
      </div>
      <div>
        <div className="flex flex-col gap-2 font-mono text-[11px] tracking-[.08em] text-faint sm:flex-row sm:justify-between sm:gap-[18px]"><span>{project.company}</span><span>{project.period}</span></div>
        <h3 className="mb-[18px] mt-5 text-[clamp(1.75rem,3.3vw,2.625rem)] font-bold leading-[1.28] tracking-[-0.035em]">{project.title}</h3>
        <p className="leading-[1.8] text-muted">{project.summary}</p>
        <ul className="my-6 flex list-none flex-wrap gap-x-[22px] gap-y-2.5 border-y border-line py-[22px] text-[13px]">{project.metrics.map((metric) => <li className="before:mr-[7px] before:text-cyan before:content-['↗']" key={metric}>{metric}</li>)}</ul>
        <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className="rounded-full border border-line bg-surface px-2.5 py-[7px] font-mono text-[11px] text-muted" key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}
