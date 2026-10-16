'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Maximize2, Pause, Play, X } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import { assetPath } from '@/lib/asset-path'

type Screenshot = NonNullable<Project['detail']['screenshots']>[number]

export function ProjectScreenshots({
  screenshots,
}: {
  screenshots: Screenshot[]
}) {
  const [playing, setPlaying] = useState<string | null>(null)
  const [zoomed, setZoomed] = useState<Screenshot | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    const stop = () => {
      if (motion.matches) setPlaying(null)
    }
    motion.addEventListener('change', stop)
    return () => motion.removeEventListener('change', stop)
  }, [])

  useEffect(() => {
    if (!zoomed) return
    const dialog = dialogRef.current
    const opener = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = overflow
      opener?.focus({ preventScroll: true })
    }
  }, [zoomed])

  return (
    <>
      <div className="grid gap-8">
        {screenshots.map((screenshot) => (
          <figure className="case-screenshot" key={screenshot.image}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3>{screenshot.label}</h3>
              <div className="flex gap-2">
                {screenshot.animation && (
                  <button
                    type="button"
                    className="image-control"
                    aria-pressed={playing === screenshot.image}
                    onClick={() =>
                      setPlaying(
                        playing === screenshot.image ? null : screenshot.image,
                      )
                    }
                  >
                    {playing === screenshot.image ? (
                      <Pause size={14} aria-hidden="true" />
                    ) : (
                      <Play size={14} aria-hidden="true" />
                    )}
                    {playing === screenshot.image ? '멈추기' : '동작 보기'}
                    <span className="sr-only">: {screenshot.label}</span>
                  </button>
                )}
                <button
                  type="button"
                  className="image-control"
                  onClick={() => {
                    setPlaying(null)
                    setZoomed(screenshot)
                  }}
                  aria-haspopup="dialog"
                >
                  <Maximize2 size={14} aria-hidden="true" />
                  크게 보기<span className="sr-only">: {screenshot.label}</span>
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-700">
              <Image
                unoptimized
                width={1100}
                height={619}
                className={`h-auto w-full ${screenshot.blur ? 'blur-[5px]' : ''}`}
                src={assetPath(
                  playing === screenshot.image && screenshot.animation
                    ? screenshot.animation
                    : screenshot.image,
                )}
                alt={screenshot.label}
              />
            </div>
            {screenshot.caption && (
              <figcaption>{screenshot.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="image-dialog"
        aria-labelledby="image-dialog-title"
        onCancel={(event) => {
          event.preventDefault()
          setZoomed(null)
        }}
      >
        <div className="image-dialog-header">
          <h3 id="image-dialog-title">{zoomed?.label}</h3>
          <button
            type="button"
            className="image-control"
            onClick={() => setZoomed(null)}
            aria-label="확대 화면 닫기"
            autoFocus
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <p className="px-5 py-3 text-xs text-zinc-600 dark:text-zinc-400">
          작은 화면에서는 이미지를 좌우로 스크롤할 수 있습니다.
        </p>
        <div className="image-dialog-scroll">
          {zoomed && (
            <Image
              unoptimized
              width={1100}
              height={619}
              className={`h-auto w-[1100px] max-w-none ${zoomed.blur ? 'blur-[5px]' : ''}`}
              src={assetPath(zoomed.image)}
              alt={zoomed.label}
            />
          )}
        </div>
      </dialog>
    </>
  )
}
