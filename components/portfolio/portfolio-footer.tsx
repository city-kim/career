import { sectionShell } from "./shared";

export function PortfolioFooter() {
  return <footer className={`${sectionShell} flex justify-between border-t border-line pb-24 pt-7 font-mono text-[11px] tracking-[.08em] text-faint sm:pb-9`}><span>FRONTEND ENGINEER · PORTFOLIO</span><a className="text-muted" href="#home">맨 위로 <span aria-hidden="true">↑</span></a></footer>;
}
