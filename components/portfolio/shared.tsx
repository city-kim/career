import type { ReactNode } from "react";

export const sectionShell = "mx-auto w-[min(100%-1.75rem,1120px)] sm:w-[min(100%-2rem,680px)] md:w-[min(100%-3rem,1120px)]";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-mono text-xs leading-6 tracking-[0.14em] text-muted ${className}`}>{children}</p>;
}

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="block bg-gradient-to-r from-[#745cff] via-[#c059ff] to-[#f780c2] bg-clip-text text-transparent">{children}</span>;
}

export function SectionHeading({ eyebrow, children, aside }: { eyebrow: ReactNode; children: ReactNode; aside?: ReactNode }) {
  return (
    <header className={`mb-11 md:mb-16 ${aside ? "md:flex md:items-end md:justify-between md:gap-10" : ""}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.16] tracking-[-0.045em]">{children}</h2>
      </div>
      {aside ? <div className="mt-6 max-w-[410px] text-[15px] leading-7 text-muted md:mb-2 md:mt-0">{aside}</div> : null}
    </header>
  );
}
