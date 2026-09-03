import { projects } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { GradientText, SectionHeading, sectionShell } from "./shared";

export function ProjectsSection() {
  return <section className={`${sectionShell} pb-[90px] pt-[110px] md:pt-[150px]`} id="work"><SectionHeading eyebrow="02 · SELECTED WORK" aside={<p>대표 프로젝트의 화면은 추후 실제 스크린샷으로 교체할 수 있습니다. 지금은 문제, 선택, 성과가 선명하게 전달되도록 구성했습니다.</p>}>결과보다 먼저,<br /><GradientText>문제를 정확히 봅니다.</GradientText></SectionHeading><div className="flex flex-col gap-[88px] md:gap-[120px]">{projects.map((project, index) => <ProjectCard project={project} reversed={index % 2 === 1} key={project.no} />)}</div></section>;
}
