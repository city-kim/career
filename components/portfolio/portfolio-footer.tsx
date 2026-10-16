import { assetPath } from '@/lib/asset-path'

export function PortfolioFooter({
  projectPage = false,
}: {
  projectPage?: boolean
}) {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-zinc-200 px-5 pt-5 pb-24 font-mono text-xs tracking-wider text-zinc-500 sm:px-8 sm:pb-7 dark:border-zinc-800 dark:text-zinc-400">
      <span>김찬태 · FRONTEND ENGINEER</span>
      <a
        className="inline-flex min-h-11 items-center gap-2 text-zinc-600 dark:text-zinc-400"
        href={projectPage ? assetPath('/#home') : '#home'}
      >
        {projectPage ? '처음으로' : '맨 위로'} <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}
