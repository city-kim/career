import { projects } from '@/data/portfolio'
import { ProjectCard } from './project-card'
import { SectionCue, SectionHeading } from './shared'

export function ProjectsSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-6 sm:pt-28"
      id="work"
    >
      <SectionHeading description="커머스와 사내 운영 도구를 개발하며 맡았던 작업을 소개합니다.">
        Featured Projects
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            featured={index === 0}
            key={project.no}
          />
        ))}
      </div>
      <SectionCue href="#contact" label="연락 섹션으로 이동" />
    </section>
  )
}
