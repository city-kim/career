import { skillGroups } from '@/data/portfolio'
import { SectionCue, SectionHeading } from './shared'
import { Reveal } from './reveal'

export function SkillsSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-6 sm:pt-28"
      id="stack"
    >
      <SectionHeading description="실제 프로젝트에서 사용한 기술과 도구입니다.">
        Skills &amp; Technologies
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ group, items }, index) => (
          <Reveal
            delay={
              (
                [
                  'delay-0',
                  'delay-100',
                  'delay-200',
                  'delay-300',
                  'delay-500',
                ] as const
              )[index]
            }
            key={group}
          >
            <div className="h-full p-6 rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:border-zinc-400 hover:ring-2 hover:ring-zinc-400/25 hover:ring-offset-2 hover:ring-offset-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-400 dark:hover:ring-offset-zinc-950">
              <h3 className="mb-5 font-mono text-lg font-semibold text-zinc-600 dark:text-zinc-400">
                {'{ '}
                {group}
                {' }'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    className="rounded-full border border-transparent bg-zinc-100 px-2 py-1 font-mono text-sm leading-normal text-zinc-800 transition-colors duration-200 hover:border-zinc-400 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-400/25"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <SectionCue href="#work" label="프로젝트 섹션으로 이동" />
    </section>
  )
}
