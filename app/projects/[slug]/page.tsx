import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { assetPath } from '@/lib/asset-path'
import { PortfolioNavigation } from '@/components/portfolio/portfolio-navigation'
import { PortfolioFooter } from '@/components/portfolio/portfolio-footer'
import { ProjectScreenshots } from '@/components/portfolio/project-screenshots'
import { ShareProject } from '@/components/portfolio/share-project'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return {}
  const title = `${project.title} | 김찬태`
  const url = assetPath(`/projects/${slug}/`)
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: project.summary,
      url,
      type: 'article',
      images: [assetPath('/og.png')],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.summary,
      images: [assetPath('/og.png')],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  const story = project.caseStudy
  const screenshots =
    project.detail.screenshots ??
    (project.image
      ? [
          {
            image: project.image,
            animation: project.animation,
            blur: project.blur,
            label: `${project.title} 화면`,
            caption: project.detail.caption,
          },
        ]
      : [])
  const otherProjects = projects.filter(
    (item) => item.slug !== slug && item.caseStudy,
  )

  return (
    <main
      id="main-content"
      className="paper-site relative isolate overflow-clip"
    >
      <PortfolioNavigation projectPage />
      <article className="case-page mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            href="/#work"
          >
            <ArrowLeft size={16} aria-hidden="true" /> 프로젝트 목록
          </Link>
          <ShareProject />
        </div>
        <header className="case-header">
          <p className="eyebrow">
            {project.company} · {project.period}
          </p>
          <h1 className="mt-5 text-3xl leading-snug font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          {project.serviceScale && (
            <p className="mt-4 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              서비스 규모 · {project.serviceScale}
            </p>
          )}
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            {project.summary}
          </p>
          {project.detail.role && (
            <p className="mt-6 max-w-3xl border-l-2 border-zinc-400 pl-4 text-sm leading-7">
              <strong>맡은 일</strong>
              <br />
              {project.detail.role}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-2" aria-label="사용 기술">
            {project.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>
        {story && (
          <section className="case-section" aria-labelledby="change-heading">
            <p className="eyebrow">01 / CHANGE</p>
            <h2 id="change-heading">개선 전후</h2>
            <dl className="case-change">
              <div>
                <dt>개선 전</dt>
                <dd>{story.before}</dd>
              </div>
              <div>
                <dt>개선 후</dt>
                <dd>{story.after}</dd>
              </div>
            </dl>
          </section>
        )}
        <section className="case-section" aria-labelledby="context-heading">
          <p className="eyebrow">{story ? '02' : '01'} / CONTEXT</p>
          <h2 id="context-heading">개발 배경</h2>
          <p className="case-prose">{project.detail.background}</p>
        </section>
        {story && (
          <section className="case-section" aria-labelledby="approach-heading">
            <p className="eyebrow">03 / APPROACH</p>
            <h2 id="approach-heading">어떻게 구현했는지</h2>
            <div className="case-decisions">
              {story.decision.map((decision, index) => (
                <div className="case-decision" key={decision.title}>
                  <span className="eyebrow">0{index + 1}</span>
                  <div>
                    <h3>{decision.title}</h3>
                    <p className="case-prose">{decision.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <figure className="case-flow">
              <h3>{story.flow.title}</h3>
              <ol>
                {story.flow.steps.map((step, index) => (
                  <li key={step}>
                    <span className="eyebrow">0{index + 1}</span>
                    <span>{step}</span>
                    {index < story.flow.steps.length - 1 && (
                      <ArrowRight size={16} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
              <figcaption>{story.flow.caption}</figcaption>
            </figure>
          </section>
        )}
        <section
          className="case-section"
          aria-labelledby="implementation-heading"
        >
          <h2 id="implementation-heading">작업 내용</h2>
          <details className="implementation-details" open={!story}>
            <summary>전체 작업 {project.detail.work.length}개 보기</summary>
            <div className="case-decisions">
              {project.detail.work.map((work) => (
                <div key={work.title}>
                  {work.area && <p className="eyebrow mb-2">{work.area}</p>}
                  <h3>{work.title}</h3>
                  <p className="case-prose">{work.description}</p>
                </div>
              ))}
            </div>
          </details>
        </section>
        {screenshots.length > 0 && (
          <section className="case-section" aria-labelledby="screens-heading">
            <h2 id="screens-heading">프로젝트 화면</h2>
            <ProjectScreenshots screenshots={screenshots} />
          </section>
        )}
        <section className="case-section" aria-labelledby="stack-heading">
          <h2 id="stack-heading">기술과 구성</h2>
          <ul className="space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {project.detail.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {!!project.detail.links?.length && (
          <div className="flex flex-wrap gap-3 pb-10">
            {project.detail.links.map((link) => (
              <a
                className="button-secondary"
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only"> (새 탭)</span>
              </a>
            ))}
          </div>
        )}
        <nav className="case-section" aria-label="다른 프로젝트">
          <h2>다른 프로젝트</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {otherProjects.slice(0, 2).map((item) => (
              <Link
                className="button-secondary justify-between"
                key={item.slug}
                href={`/projects/${item.slug}/`}
              >
                {item.title}
                <ArrowUpRight
                  size={17}
                  className="shrink-0"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <PortfolioFooter projectPage />
    </main>
  )
}
