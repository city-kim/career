'use client'

import {
  BriefcaseBusiness,
  Code2,
  Home,
  Mail,
  Moon,
  Sun,
  UserRound,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: '처음', icon: Home },
  { id: 'about', label: '소개', icon: UserRound },
  { id: 'stack', label: '기술', icon: Code2 },
  { id: 'work', label: '프로젝트', icon: BriefcaseBusiness },
  { id: 'contact', label: '연락', icon: Mail },
]

export function PortfolioNavigation() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [active, setActive] = useState('home')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    let frame = 0
    const update = () => {
      const marker = window.innerHeight * 0.35
      let current = navItems[0].id
      for (const { id } of navItems) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker)
          current = id
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      )
        current = 'contact'
      setActive(current)
      frame = 0
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <nav
        className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border border-zinc-200/60 bg-white/75 p-2 shadow-xl shadow-black/5 backdrop-blur-xl sm:top-8 sm:bottom-auto sm:gap-2 sm:p-3 dark:border-zinc-800/60 dark:bg-zinc-900/75"
        aria-label="페이지 섹션"
      >
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`group relative grid size-10 cursor-pointer place-items-center rounded-2xl transition duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-400/15 hover:text-zinc-500 focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:bg-zinc-400/15 focus-visible:text-zinc-500 motion-reduce:translate-y-0 motion-reduce:scale-100 sm:size-11 dark:hover:text-zinc-400 dark:focus-visible:text-zinc-400 ${active === id ? 'bg-zinc-400/20 text-zinc-500 dark:text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}
            aria-label={`${label} 섹션으로 이동`}
            aria-current={active === id ? 'location' : undefined}
          >
            <Icon size={20} strokeWidth={1.8} />
            {active === id && (
              <span
                className="absolute -bottom-1.5 size-1 rounded-full bg-zinc-400"
                aria-hidden="true"
              />
            )}
            <span
              className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 -translate-y-1 rounded-md bg-white px-2 py-1 text-xs whitespace-nowrap text-zinc-900 opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:top-full sm:bottom-auto sm:mt-3 sm:mb-0 dark:bg-zinc-900 dark:text-zinc-100"
              aria-hidden="true"
            >
              {label}
            </span>
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="group fixed top-4 right-4 z-50 grid size-11 cursor-pointer place-items-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-sm backdrop-blur-lg transition-colors hover:bg-zinc-100 sm:top-8 sm:right-8 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={
          theme === 'dark' ? '밝은 테마로 전환' : '어두운 테마로 전환'
        }
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        <span
          className="pointer-events-none absolute top-full right-0 mt-3 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs whitespace-nowrap text-zinc-900 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          aria-hidden="true"
        >
          {theme === 'dark' ? '밝은 테마' : '어두운 테마'}
        </span>
      </button>
    </>
  )
}
