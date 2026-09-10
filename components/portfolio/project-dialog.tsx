'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import { assetPath } from '@/lib/asset-path'

export function ProjectDialog({
  project,
  onClose,
  animate,
}: {
  project: Project
  onClose: () => void
  animate: boolean
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      opener?.focus({ preventScroll: true })
    }
  }, [])

  if (typeof document === 'undefined') return null

  return createPortal(
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={`project-title-${project.no}`}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const box = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose()
        }
      }}
    >
      <div className="project-dialog-top">
        <span>
          SELECTED WORK <span>/ {project.no}</span>
        </span>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          aria-label="프로젝트 설명 닫기"
        >
          <X size={20} />
        </button>
      </div>
      <div className="project-dialog-intro">
        <p className="project-dialog-category">{project.detail.category}</p>
        <h2 id={`project-title-${project.no}`}>{project.title}</h2>
        <p className="project-dialog-summary">{project.summary}</p>
        {project.detail.role && (
          <div className="mt-6 border-l-2 border-zinc-400 pl-4">
            <p className="text-sm font-medium">담당 역할</p>
            <p className="project-dialog-summary mt-2">{project.detail.role}</p>
          </div>
        )}
        <div className="project-dialog-meta">
          <span>{project.company}</span>
          <span>{project.period}</span>
        </div>
      </div>
      {(
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
      ).map((screenshot) => (
        <figure className="project-dialog-figure" key={screenshot.image}>
          {project.detail.screenshots && (
            <h3 className="project-screenshot-label">{screenshot.label}</h3>
          )}
          <Image
            unoptimized
            className={screenshot.blur ? 'blur-[5px]' : undefined}
            src={assetPath(
              animate && screenshot.animation
                ? screenshot.animation
                : screenshot.image,
            )}
            width={1440}
            height={1000}
            alt={screenshot.label}
            sizes="(max-width: 768px) 100vw, 960px"
          />
          {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
        </figure>
      ))}
      <div className="project-dialog-body">
        <section>
          <p className="project-dialog-kicker">01 / CONTEXT</p>
          <h3>프로젝트 배경</h3>
          <p>{project.detail.background}</p>
        </section>
        <section>
          <p className="project-dialog-kicker">02 / CONTRIBUTION</p>
          <h3>담당 작업과 구현 내용</h3>
          <div className="project-contributions">
            {project.detail.work.map((work, index) => (
              <div key={work.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  {work.area && (
                    <p className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
                      {work.area}
                    </p>
                  )}
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="project-architecture">
          <div>
            <p className="project-dialog-kicker">03 / STACK</p>
            <h3>기술과 구성</h3>
          </div>
          <ul>
            {project.detail.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.detail.links && (
          <div className="project-source-links">
            {project.detail.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight size={17} />
                <span className="sr-only"> (새 탭)</span>
              </a>
            ))}
          </div>
        )}
        <button type="button" onClick={onClose} className="project-dialog-done">
          목록으로 돌아가기
        </button>
      </div>
    </dialog>,
    document.body,
  )
}
