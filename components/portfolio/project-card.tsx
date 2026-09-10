import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import { assetPath } from '@/lib/asset-path'
import { Reveal } from './reveal'

export function ProjectCard({
  project,
  featured,
  onOpen,
  animate,
}: {
  project: Project
  featured: boolean
  onOpen: () => void
  animate: boolean
}) {
  return (
    <Reveal className={featured ? 'md:col-span-2' : ''}>
      <article
        className={`project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:border-zinc-400 hover:ring-2 hover:ring-zinc-400/25 hover:ring-offset-2 hover:ring-offset-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-400 dark:hover:ring-offset-zinc-950 `}
      >
        {project.image && (
          <div
            className={`project-cover project-cover-${project.tone} ${featured ? 'project-cover-featured' : ''}`}
          >
            <span className="project-cover-label">
              {project.detail.category}
            </span>
            <div className="project-browser-frame">
              <div className="project-browser-bar">
                <i />
                <i />
                <i />
                <span>{project.company.split(' · ')[0]}</span>
              </div>
              <Image
                unoptimized
                className={`w-full object-cover object-top ${project.blur ? 'blur-[5px]' : ''}`}
                src={assetPath(
                  animate && project.animation
                    ? project.animation
                    : project.image,
                )}
                alt={`${project.title} 프로젝트 화면`}
                width={1600}
                height={1000}
              />
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-600 dark:text-zinc-400">
              {project.no}
            </span>
            <span>{project.company}</span>
            <span className="sm:ml-auto">{project.period}</span>
          </div>
          <h3
            className={`mb-4 font-heading font-semibold leading-snug tracking-tight ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}
          >
            {project.title}
          </h3>
          <p className="max-w-4xl flex-1 leading-7 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
          {project.scope && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                담당한 작업
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {project.scope.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span aria-hidden="true" className="shrink-0">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="my-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-5 text-sm">
            {project.metrics.map((metric) => (
              <li className="flex items-start gap-2" key={metric}>
                <span
                  className="text-zinc-600 dark:text-zinc-400"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {metric}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-full border border-transparent bg-zinc-100 px-2 py-1 font-mono text-xs leading-normal text-zinc-800 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-400/25"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            aria-label={`${project.title} 상세 보기`}
            className="project-open mt-7 flex items-center justify-between border-t border-zinc-200 pt-5 text-sm font-medium dark:border-zinc-800"
          >
            프로젝트 자세히 보기{' '}
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </article>
    </Reveal>
  )
}
