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
                시니어 프론트엔드 개발자 김찬태입니다.
              </strong>{' '}
              웹 에이전시에서 시작해 메시징 서비스, 커머스, 게임 플랫폼과 SaaS를
              개발했습니다. 고객용 서비스와 사내 운영 도구를 함께 다루며, 신규
              개발과 기존 서비스 개선을 병행해 왔습니다.
            </p>
            <p>
              프레시지에서는 프론트엔드 3인 팀에서 허닭몰의 아키텍처와 공통 개발
              기반 구축을 주도했습니다. 운영자가 템플릿과 모듈을 조합해 다양한
              전시 화면을 만들고 게시 시각을 예약할 수 있도록 개발했습니다. 사내
              일정 관리, 물류 화면과 기존 커머스 운영을 포함한 7개 프로젝트를
              수행했습니다.
            </p>
            <p>
              현재는 티모웍스에서 한국과 일본 기업용 근태관리 SaaS TEMPO의 웹,
              앱, 백엔드와 출시를 담당하고 있습니다. Claude Code와 Codex를
              활용하는 개발 하네스를 구성하고, 생성된 코드를 직접 검토하며
              테스트로 업무 규칙과 예외 상황을 확인합니다.
            </p>
            <p className="border-l-4 border-zinc-400 pl-5 text-zinc-900 dark:text-zinc-100">
              반복되는 업무를 줄이고, 기존 환경에서 개선할 범위와 검증 방법을
              함께 정합니다. 다른 직군의 동료가 겪는 문제에도 관심을 갖고 목적과
              제약을 살펴보며, 제가 도울 수 있는 부분과 가능한 대안을
              제안합니다.
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
