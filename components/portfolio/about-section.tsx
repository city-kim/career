import { BriefcaseBusiness } from 'lucide-react'
import { experiences } from '@/data/portfolio'
import { SectionCue, SectionHeading } from './shared'
import { Reveal } from './reveal'

export function AboutSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-6 sm:pt-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
        <Reveal>
          <div className="flex flex-col gap-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              <strong className="font-medium text-zinc-900 dark:text-zinc-100">
                2016년 웹 에이전시에서 개발을 시작했습니다.
              </strong>{' '}
              알리고에서는 문자·카카오톡 발송 서비스를, 프레시지에서는 쇼핑몰과
              사내 시스템을 개발했습니다. 보이저에서는 프론트엔드를 혼자 맡아
              웹사이트와 게임 운영 도구를 만들었습니다.
            </p>
            <p className="border-l-2 border-zinc-300 pl-5 text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
              같은 작업을 반복하고 있다면 도구로 줄일 수 있는지 살펴봅니다.
              운영팀이 매번 개발팀에 요청하던 전시 작업은 직접 편집할 수 있게
              했고, 손으로 작성하던 엑셀 리포트는 자동으로 만들도록 했습니다.
              구현이 어려운 요청은 이유를 설명하고 가능한 방법을 함께 찾습니다.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5">
          {experiences.map((experience, index) => (
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
              key={experience.company}
            >
              <article className="portfolio-surface flex items-start gap-4 rounded-2xl p-5 sm:p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-zinc-400/10 text-zinc-500 dark:text-zinc-400">
                  <BriefcaseBusiness size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {experience.company}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                    {experience.period}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <SectionCue href="#stack" label="기술 섹션으로 이동" />
    </section>
  )
}
