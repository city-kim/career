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
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            featured={false}
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
        />
      )}
      <SectionCue href="#contact" label="연락 섹션으로 이동" />
    </section>
  )
}
