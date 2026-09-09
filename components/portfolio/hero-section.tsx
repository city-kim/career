import { ArrowDown } from 'lucide-react'
import { SectionCue } from './shared'
import { TypingRole } from './typing-role'

export function HeroSection() {
  return (
    <section
      className="relative mx-auto flex min-h-svh w-full max-w-6xl items-center justify-center px-5 pt-22 pb-44 text-center sm:px-8 sm:pt-36 sm:pb-34"
      id="home"
    >
      <div className="w-full">
        <p className="animate-rise text-base text-zinc-800 motion-reduce:animate-none dark:text-zinc-200">
          안녕하세요! 👋
        </p>
        <h1 className="mt-5 animate-rise font-heading text-4xl leading-tight font-bold tracking-tighter motion-reduce:animate-none sm:text-6xl lg:text-7xl [animation-delay:100ms]">
          <span className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-300">
            웹을 개발합니다 :)
          </span>
        </h1>
        <TypingRole />
        <p className="mx-auto mt-6 max-w-2xl animate-rise text-base leading-8 text-zinc-600 motion-reduce:animate-none sm:text-lg dark:text-zinc-400 [animation-delay:200ms]">
          커머스부터 메시징 서비스, 게임 운영 도구까지.
          <br className="hidden sm:block" /> 9년 동안 웹 서비스를 만들고 운영해
          온 프론트엔드 개발자입니다.
        </p>
        <div className="mt-10 flex animate-rise justify-center gap-4 motion-reduce:animate-none [animation-delay:300ms]">
          <a
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-3 rounded-lg border border-transparent bg-zinc-900 px-5 py-2.5 text-sm text-white transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-700 hover:shadow-lg hover:shadow-zinc-500/20 motion-reduce:translate-y-0 motion-reduce:scale-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            href="#work"
          >
            프로젝트 보기 <ArrowDown size={16} />
          </a>
          <a
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white/55 px-5 py-2.5 text-sm backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/80 motion-reduce:translate-y-0 motion-reduce:scale-100 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"
            href="#contact"
          >
            연락하기
          </a>
        </div>
      </div>
      <SectionCue href="#about" label="소개 섹션으로 이동" hero />
    </section>
  )
}
