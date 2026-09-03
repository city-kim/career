import { Download, Mail } from "lucide-react";
import { Eyebrow, GradientText, sectionShell } from "./shared";

export function ContactSection() {
  return <section className={`${sectionShell} flex min-h-[78svh] flex-col items-center justify-center pb-[140px] pt-[150px] text-center sm:pb-[110px]`} id="contact"><Eyebrow>04 · LET&apos;S WORK TOGETHER</Eyebrow><h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.16] tracking-[-0.045em]">지속 가능한 제품을<br /><GradientText>함께 만들고 싶습니다.</GradientText></h2><p className="mt-7 max-w-[620px] text-[17px] leading-[1.85] text-muted">서비스의 목적을 이해하고, 사용자와 동료가 실제로 체감하는 개선을 만듭니다. 새로운 팀과 제품에 관해 편하게 이야기를 나누고 싶습니다.</p><div className="mt-[38px] flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"><button className="button-primary disabled-button" type="button" disabled><Mail size={17} /> 이메일 주소 추가 예정</button><button className="button-ghost disabled-button" type="button" disabled><Download size={17} /> 이력서 파일 추가 예정</button></div><p className="mt-4 text-xs text-faint">* 이메일 주소와 이력서 파일은 배포 전에 실제 정보로 교체해 주세요.</p></section>;
}
