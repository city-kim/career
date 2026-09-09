'use client'

import { useEffect, useState } from 'react'
import type { Project } from '@/data/portfolio'
import { projects } from '@/data/portfolio'
import { ProjectCard } from './project-card'
import { ProjectDialog } from './project-dialog'
import { SectionCue, SectionHeading } from './shared'

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [animate, setAnimate] = useState(true)
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setAnimate(!motion.matches)
    update()
    motion.addEventListener('change', update)
    return () => motion.removeEventListener('change', update)
  }, [])
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-6 sm:pt-28"
      id="work"
    >
      <SectionHeading description="커머스부터 게임 플랫폼, 메시징 서비스까지. 프로젝트를 선택하면 화면과 담당 작업을 자세히 볼 수 있습니다.">
        Featured Projects
      </SectionHeading>
      <button
        type="button"
        aria-pressed={animate}
        onClick={() => setAnimate((value) => !value)}
        className="mb-6 rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
      >
        {animate ? '움직이는 캡처 끄기' : '움직이는 캡처 켜기'}
      </button>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            featured={index === 0}
            key={project.no}
            onOpen={() => setSelectedProject(project)}
            animate={animate}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          animate={animate}
          onToggleAnimation={() => setAnimate((value) => !value)}
        />
      )}
      <SectionCue href="#contact" label="연락 섹션으로 이동" />
    </section>
  )
}
