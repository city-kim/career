export type ProjectTone = 'violet' | 'blue' | 'mint'

export type Project = {
  no: string
  period: string
  company: string
  title: string
  summary: string
  metrics: string[]
  tags: string[]
  tone: ProjectTone
  image: string | null
}

export type Experience = {
  period: string
  company: string
  description: string
}

export type SkillGroup = {
  group: string
  items: string[]
}

export const projects: Project[] = [
  {
    no: '01',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · PLATFORM',
    title: '플랫폼 어드민과 공통 패키지',
    summary:
      '여러 게임의 운영 도구에 필요한 컴포넌트, 인증, 레이아웃을 하나의 패키지로 정리했습니다. 새 어드민을 만들 때는 이 패키지를 적용하고 개별 기능부터 개발할 수 있도록 구성했습니다.',
    metrics: [
      '사내 운영 도구에 공통 적용',
      '인증·레이아웃 재사용',
      '코드 품질 검사 자동화',
    ],
    tags: ['Next.js', 'TypeScript', 'shadcn/ui', 'TanStack Query'],
    tone: 'violet',
    image: null,
  },
  {
    no: '02',
    period: '2024.05 ~ 2025.06',
    company: 'FRESHEASY · HEO DAK MALL',
    title: '허닭몰 자체 커머스 구축',
    summary:
      '메이크샵으로 운영하던 허닭몰을 자체 플랫폼으로 옮겼습니다. 프론트엔드 3인 팀에서 모노레포와 배포·테스트 환경을 구성하고, 운영자가 홈과 기획전을 직접 편집하고 예약 게시하는 전시 빌더를 개발했습니다.',
    metrics: [
      '약 20만 사용자',
      '전시 개발 요청 → 직접 편집·예약',
      'UI·E2E 테스트 환경 구축',
    ],
    tags: ['Next.js', 'Turborepo', 'AWS', 'Playwright', 'Storybook'],
    tone: 'blue',
    image: null,
  },
  {
    no: '03',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · GAME BI',
    title: '게임 운영 대시보드와 리포트 자동화',
    summary:
      '한국과 일본 운영팀이 게임 지표를 조회하는 대시보드를 개발했습니다. 담당자가 수동 쿼리로 작성하던 월간 리포트는 서버 데이터를 바탕으로 자동 생성하고 다운로드할 수 있도록 바꿨습니다.',
    metrics: [
      '반나절 → 클릭 한 번',
      '한·일 운영 인력 10여 명',
      '실시간 지표 조회',
    ],
    tags: ['Next.js', 'TypeScript', 'Chart UI', 'Nginx'],
    tone: 'mint',
    image: null,
  },
]

export const experiences: Experience[] = [
  {
    period: '2025.08 ~ 2026.04',
    company: '주식회사 보이저',
    description:
      '게임·플랫폼 서비스와 사내 운영 도구의 프론트엔드를 담당했습니다.',
  },
  {
    period: '2023.11 ~ 2025.08',
    company: '주식회사 프레시지',
    description:
      '허닭몰과 사내 시스템을 개발하고 커머스 재구축에 참여했습니다.',
  },
  {
    period: '2017.10 ~ 2023.05',
    company: '알리는사람들',
    description:
      '문자·카카오톡 발송 서비스 ALIGO와 사내 대시보드를 개발했습니다.',
  },
  {
    period: '2016.09 ~ 2017.06',
    company: '장플레이스랩',
    description:
      '기업 웹사이트와 주차관리 서비스의 화면 및 백오피스를 개발했습니다.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
    ],
  },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Koa.js'] },
  { group: 'Database', items: ['MySQL', 'MongoDB'] },
  {
    group: 'Tools & Platforms',
    items: ['Turborepo', 'AWS', 'S3', 'CloudFront', 'Nginx', 'Vercel'],
  },
  {
    group: 'Testing & UI',
    items: ['Playwright', 'Vitest', 'Storybook', 'Chromatic', 'shadcn/ui'],
  },
]
