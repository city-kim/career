import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'

export function SectionHeading({
  children,
  description,
}: {
  children: ReactNode
  description?: string
}) {
  return (
    <Reveal>
      <header className="mb-10 text-center sm:mb-16">
        <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {children}
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-24 scale-x-[0.01] rounded bg-zinc-900 transition-transform delay-200 duration-700 group-data-visible/reveal:scale-x-100 motion-reduce:scale-x-100 dark:bg-zinc-100"
          aria-hidden="true"
        />
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </header>
    </Reveal>
  )
}

export function SectionCue({
  href,
  label,
  hero = false,
}: {
  href: string
  label: string
  hero?: boolean
}) {
  return (
    <a
      className={`flex size-11 items-center justify-center text-zinc-500 transition-colors duration-200 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-400 ${hero ? 'absolute bottom-26 left-1/2 -translate-x-1/2 sm:bottom-7' : 'mx-auto mt-16'}`}
      href={href}
      aria-label={label}
    >
      <ChevronDown
        className="animate-scroll-cue motion-reduce:animate-none"
        size={24}
      />
    </a>
  )
}
