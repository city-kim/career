import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { SectionHeading } from './shared'
import { Reveal } from './reveal'

export function ContactSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 sm:px-8 scroll-mt-2 pt-18 pb-16 sm:pt-28 sm:pb-24"
      id="contact"
    >
      <SectionHeading>Get In Touch</SectionHeading>
      <Reveal>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-700 motion-reduce:translate-y-0 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              href="mailto:nkdevil@naver.com"
            >
              <Mail size={18} aria-hidden="true" /> nkdevil@naver.com
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 motion-reduce:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              href="https://github.com/city-kim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub city-kim 프로필 (새 탭)"
            >
              <Github size={18} aria-hidden="true" /> GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 motion-reduce:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              href="https://www.linkedin.com/in/%EC%B0%AC%ED%83%9C-%EA%B9%80-9469bb274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn 김찬태 프로필 (새 탭)"
            >
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a
            className="mt-10 text-sm text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            href="#home"
          >
            맨 위로 ↑
          </a>
        </div>
      </Reveal>
    </section>
  )
}
