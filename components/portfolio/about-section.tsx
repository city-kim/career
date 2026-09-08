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
                프론트엔드 개발 10년차입니다.
              </strong>{' '}
              웹 에이전시에서 시작해 메시징 서비스, 커머스, 게임 플랫폼을
              개발했습니다.
            </p>
            <p>
              최근에는 보이저에서 프론트엔드를 혼자 맡아 다섯 개 프로젝트를
              병행했습니다. 여러 운영 도구에서 함께 쓰는 컴포넌트와 인증,
              레이아웃을 공통 패키지로 만들었습니다.
            </p>
            <p>
              프레시지에서는 프론트엔드 3인 팀에서 허닭몰을 자체 플랫폼으로
              재구축했습니다. 공통 모듈과 배포·테스트 환경을 구성하고, 운영자가
              기획전을 직접 만들고 예약할 수 있는 전시 빌더를 개발했습니다.
            </p>
            <p className="border-l-4 border-zinc-400 pl-5 text-zinc-900 dark:text-zinc-100">
              같은 작업이 반복되면 줄일 방법을 찾습니다. 수동으로 만들던
              리포트를 자동화하거나, 여러 서비스에서 쓰는 기능을 공통으로
              정리하는 일을 해 왔습니다.
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
              <article className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:border-zinc-400 hover:ring-2 hover:ring-zinc-400/25 hover:ring-offset-2 hover:ring-offset-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-400 dark:hover:ring-offset-zinc-950">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-zinc-400/10 text-zinc-500 dark:text-zinc-400">
                  <BriefcaseBusiness size={22} />
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
