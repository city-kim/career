import { skillGroups } from '@/data/portfolio'
import { SectionCue, SectionHeading } from './shared'
import { Reveal } from './reveal'

export function SkillsSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-6 sm:pt-28"
      id="stack"
    >
      <SectionHeading>Skills &amp; Technologies</SectionHeading>
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
            <div className="portfolio-surface h-full rounded-2xl p-6">
              <h3 className="mb-5 font-mono text-lg font-semibold text-zinc-600 dark:text-zinc-400">
                {'{ '}
                {group}
                {' }'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span className="tech-tag text-[13px]" key={item}>
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
