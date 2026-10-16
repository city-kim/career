import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import { assetPath } from '@/lib/asset-path'
import { Reveal } from './reveal'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="portfolio-surface project-card group relative flex h-full flex-col overflow-hidden rounded-2xl">
        {project.image && (
          <div className={`project-cover project-cover-${project.tone}`}>
            <span className="project-cover-label">
              {project.detail.category}
            </span>
            <div className="project-browser-frame">
              <div className="project-browser-bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{project.company.split(' · ')[0]}</span>
              </div>
              <Image
                unoptimized
                className={`w-full object-cover object-top ${project.blur ? 'blur-[5px]' : ''}`}
                src={assetPath(project.image)}
                alt={`${project.title} 프로젝트 화면`}
                width={1600}
                height={1000}
                sizes="(min-width: 1152px) 472px, (min-width: 768px) calc((100vw - 152px) / 2), calc(100vw - 80px)"
              />
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <div className="project-meta">
            <span className="project-number">{project.no}</span>
            <span className="project-company">{project.company}</span>
            <span className="project-period">{project.period}</span>
          </div>
          <h3 className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-balance">
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
          {project.scope && (
            <div className="mt-5">
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                담당한 작업
              </h4>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.scope.map((item) => (
                  <li className="flex gap-2.5" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-auto pt-6">
            <ul
              className="flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-200 pt-4 text-xs leading-5 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              aria-label="주요 작업 요약"
            >
              {project.metrics.map((metric) => (
                <li className="flex items-start gap-2" key={metric}>
                  <Check
                    size={13}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  {metric}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5" aria-label="사용 기술">
              {project.tags.map((tag) => (
                <span className="tech-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.slug}/`}
              aria-label={`${project.title} 상세 보기`}
              className="project-open mt-5 flex min-h-11 items-center justify-between border-t border-zinc-200 pt-4 text-sm font-medium dark:border-zinc-800"
            >
              프로젝트 자세히 보기{' '}
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
