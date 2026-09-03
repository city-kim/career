export type ProjectTone = "violet" | "blue" | "mint";

export type Project = {
  no: string;
  period: string;
  company: string;
  title: string;
  summary: string;
  metrics: string[];
  tags: string[];
  tone: ProjectTone;
  image: string | null;
};

export type Experience = {
  period: string;
  company: string;
  description: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const projects: Project[] = [
  {
    no: "01",
    period: "2025.08 — 2026.03",
    company: "VOYAGER · PLATFORM",
    title: "한 명이 다섯 개 서비스를 감당하는 구조",
    summary:
      "각 화면을 따로 만드는 대신 공통 컴포넌트, 인증, 레이아웃을 통합 패키지로 설계했습니다. 새 운영 도구도 초기 설정 없이 곧바로 개발할 수 있는 기반을 만들었습니다.",
    metrics: ["5개 서비스 동시 운영", "LCP 0.2초 이내", "성능 점수 80점 후반"],
    tags: ["Next.js", "TypeScript", "shadcn/ui", "TanStack Query"],
    tone: "violet",
    image: null,
  },
  {
    no: "02",
    period: "2024.05 — 2025.06",
    company: "FRESHEASY · HEO DAK MALL",
    title: "20만 사용자 커머스를 자체 플랫폼으로",
    summary:
      "Turborepo 아키텍처와 AWS 배포 기반을 구축하고, 운영자가 직접 홈과 기획전을 구성하는 전시 빌더를 만들었습니다.",
    metrics: ["약 20만 사용자", "준비 기간 2~3일 → 즉시", "로딩 0.2~0.5초"],
    tags: ["Next.js", "Turborepo", "AWS", "Playwright", "Storybook"],
    tone: "blue",
    image: null,
  },
  {
    no: "03",
    period: "2025.08 — 2026.03",
    company: "VOYAGER · GAME BI",
    title: "반나절 걸리던 리포트를 클릭 한 번으로",
    summary:
      "운영 담당자가 매달 수동 쿼리로 만들던 리포트를 자동 생성과 다운로드 기능으로 전환했습니다. 한국과 일본 운영 인력이 상시 사용하는 도구가 되었습니다.",
    metrics: ["반나절 → 클릭 한 번", "한·일 운영 인력 10여 명", "실시간 지표 조회"],
    tags: ["Next.js", "TypeScript", "Chart UI", "Nginx"],
    tone: "mint",
    image: null,
  },
];

export const experiences: Experience[] = [
  { period: "2025 — 2026", company: "주식회사 보이저", description: "프론트엔드 개발자 · 1인 프론트엔드로 게임 및 플랫폼 5개 프로젝트를 병행했습니다." },
  { period: "2023 — 2025", company: "주식회사 프레시지", description: "매니저 · 차세대 커머스의 아키텍처, 배포, 테스트 기반 구축을 주도했습니다." },
  { period: "2017 — 2023", company: "알리는사람들", description: "과장 · ALIGO의 성장 과정에서 레거시 현대화와 제품 개발을 담당했습니다." },
  { period: "2016 — 2017", company: "장플레이스랩", description: "사원 · 다양한 웹사이트와 백오피스를 구축하며 프론트엔드의 기초를 다졌습니다." },
];

export const skillGroups: SkillGroup[] = [
  { group: "CORE", items: ["Next.js", "React", "Vue.js", "TypeScript", "JavaScript"] },
  { group: "SYSTEM", items: ["Turborepo", "Storybook", "Chromatic", "Playwright", "Vitest"] },
  { group: "DELIVERY", items: ["AWS", "S3", "CloudFront", "Elastic Beanstalk", "Nginx", "Vercel"] },
  { group: "BACKEND", items: ["Node.js", "Express.js", "Koa.js", "MySQL", "MongoDB"] },
];
