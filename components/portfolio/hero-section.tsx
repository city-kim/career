import { ArrowDown, ArrowRight } from "lucide-react";
import { Eyebrow, GradientText, sectionShell } from "./shared";

const stats = [["10년차", "프론트엔드 경력"], ["5개", "동시에 운영한 서비스"], ["4개", "경험한 비즈니스 도메인"]];

export function HeroSection() {
  return (
    <section className={`${sectionShell} relative flex min-h-[94svh] flex-col items-center justify-center pb-24 pt-24 text-center sm:min-h-screen sm:justify-start sm:pb-[72px] sm:pt-[170px]`} id="home">
      <div className="pointer-events-none absolute left-1/2 top-[14%] h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(136,58,242,.15),transparent_68%)] blur-[18px]" aria-hidden="true" />
      <Eyebrow className="relative animate-rise"><span className="mr-2 inline-block size-[7px] rounded-full bg-cyan shadow-status" />OPEN TO WORK · FRONTEND ENGINEER</Eyebrow>
      <h1 className="relative mt-6 animate-rise text-[clamp(2.5rem,13vw,3.625rem)] font-extrabold leading-[1.08] tracking-[-0.055em] [animation-delay:80ms] sm:mt-8 sm:text-[clamp(2.875rem,7.3vw,5.75rem)]">반복되는 일을<GradientText>구조로 바꾸는 개발자</GradientText></h1>
      <p className="relative mt-5 max-w-[670px] animate-rise text-base leading-[1.8] text-muted [animation-delay:160ms] sm:text-[clamp(1rem,1.9vw,1.25rem)]">화면을 만드는 데서 멈추지 않습니다. 사용자의 흐름과 동료의 반복 업무를 발견하고, 오래 유지할 수 있는 제품과 개발 기반으로 해결합니다.</p>
      <div className="relative mt-[38px] flex w-full animate-rise flex-col justify-center gap-3 [animation-delay:240ms] sm:w-auto sm:flex-row">
        <a className="button-primary" href="#work">대표 작업 보기 <ArrowDown size={17} /></a>
        <a className="button-ghost" href="#contact">함께 일하기 <ArrowRight size={17} /></a>
      </div>
      <div className="relative mt-[54px] grid w-full max-w-[720px] animate-rise grid-cols-3 overflow-hidden rounded-[18px] border border-line bg-surface [animation-delay:320ms] sm:mt-20" aria-label="주요 경력 지표">
        {stats.map(([figure, label], index) => <div className={`flex flex-col gap-1.5 px-2 py-[18px] sm:p-6 ${index ? "border-l border-line" : ""}`} key={label}><strong className="text-[19px] sm:text-2xl">{figure}</strong><span className="text-[10px] leading-snug text-muted sm:text-[13px]">{label}</span></div>)}
      </div>
      <a className="mt-auto hidden flex-col items-center gap-2 px-4 pt-7 font-mono text-[10px] tracking-[.18em] text-faint sm:flex" href="#about" aria-label="소개 섹션으로 이동">SCROLL <ArrowDown size={18} /></a>
    </section>
  );
}
