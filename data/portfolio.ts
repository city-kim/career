import { additionalProjects } from './additional-projects'

export type ProjectTone = 'violet' | 'blue' | 'mint'

export type Project = {
  no: string
  period: string
  company: string
  title: string
  summary: string
  scope?: string[]
  metrics: string[]
  tags: string[]
  tone: ProjectTone
  image: string | null
  animation?: string
  blur?: boolean
  detail: {
    category: string
    role?: string
    caption?: string
    screenshots?: {
      image: string
      animation?: string
      blur?: boolean
      label: string
      caption?: string
    }[]
    background: string
    work: { title: string; description: string; area?: string }[]
    architecture: string[]
    links?: { label: string; href: string }[]
  }
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

const projectEntries: Project[] = [
  {
    no: '01',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · PLATFORM',
    title: '보이저 플랫폼 사이트',
    summary:
      '게임 소개와 회원 서비스를 연결하는 보이저 플랫폼 사이트입니다. ETERNA AI 소개 화면과 회원가입·로그인, 계정 찾기, 언어별 이용 안내를 구성했습니다.',
    metrics: [
      'ETERNA AI 게임 소개',
      '회원가입·로그인·계정 찾기',
      '한국어·일본어·영어 경로',
    ],
    tags: ['Next.js', 'TypeScript', 'shadcn/ui', 'TanStack Query'],
    tone: 'violet',
    image: '/projects/platform-site-original.png',
    animation: '/projects/platform-site.apng',
    detail: {
      category: 'GAME PLATFORM WEBSITE',
      role: '프론트엔드 1인 담당으로 웹 화면과 다국어 구조를 개발하고, 백엔드 개발자와 회원 API를 연동했습니다.',
      background:
        '게임을 소개하는 페이지와 회원 서비스를 하나의 플랫폼에서 제공하는 웹사이트입니다. 게임 콘텐츠를 탐색한 뒤 회원가입과 로그인으로 이어질 수 있도록 구성했습니다.',
      work: [
        {
          title: 'ETERNA AI 게임 소개',
          description:
            '영상 배경, Motion 애니메이션과 Swiper를 활용해 게임의 메인 화면과 소개 섹션을 구성했습니다.',
        },
        {
          title: '회원 서비스 화면',
          description:
            '회원가입, 로그인, 비밀번호 찾기를 별도 경로로 구성하고 회원 API와 연결하는 구조를 마련했습니다.',
        },
        {
          title: '언어별 경로와 이용 안내',
          description:
            '한국어·일본어·영어 경로와 사전, 페이지별 메타데이터를 적용하고 약관·개인정보처리방침·게임 이용 안내를 구성했습니다.',
        },
        {
          title: 'Unity 하이브리드 앱과 반응형 화면',
          description:
            'Unity 애플리케이션과 결합되는 하이브리드 앱 구조에 맞춰 웹 화면을 구현했습니다. 주요 해상도별 반응형 화면을 구성하고 사용자 경험을 점검했습니다.',
        },
      ],
      architecture: [
        'Next.js · React · TypeScript',
        'shadcn/ui · Radix UI · Tailwind CSS',
        'TanStack Query · Zod · Motion · Swiper',
        'ESLint · Prettier · Husky',
      ],
    },
  },
  {
    no: '02',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · ETERNA GM TOOL',
    title: '에테르나 GM Tool',
    summary:
      '에테르나 게임 운영을 위한 GM Tool입니다. 유저 검색과 계정 상태 관리, 아이템·재화·결제·멤버십 조회, 공지 편집 기능을 구성했습니다.',
    metrics: ['유저 검색·상태 관리', '아이템·재화·결제 조회', '공지 작성·편집'],
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Tiptap'],
    tone: 'blue',
    image: '/projects/gm-original.png',
    animation: '/projects/gm.apng',
    blur: true,
    detail: {
      category: 'GAME OPERATIONS TOOL',
      background:
        'GM Tool에서는 게임 운영자가 유저 정보를 조회하고 계정 상태와 공지를 관리할 수 있도록 했습니다. 여러 운영 도구를 동시에 개발해야 했기 때문에 공통 기능을 패키지로 분리하는 작업도 함께 진행했습니다.',
      work: [
        {
          title: '조건별 유저 검색',
          description:
            '서버, 계정 ID, 유저 ID, 닉네임, 계정 상태로 검색하고 결과를 페이지 단위로 조회하도록 구성했습니다.',
        },
        {
          title: '유저별 운영 기능',
          description:
            '유저별 아이템·재화·결제·멤버십 조회와 닉네임·상태 변경, 강제 로그아웃 기능을 개별 팝업으로 구성했습니다.',
        },
        {
          title: '공지 콘텐츠 편집',
          description:
            '공지 목록과 작성·편집 화면을 분리하고 Tiptap 기반의 콘텐츠 편집기를 적용했습니다. 클라이언트 측 이미지 업로드 처리도 구현해 운영자가 공지 내용을 직접 작성할 수 있도록 했습니다.',
        },
        {
          title: '운영 도구의 데이터 접근 구조',
          description:
            'Next.js API Route에서 MySQL DB 프로시저를 호출하도록 구성해 게임 서버의 부하를 분리했습니다. 백엔드 개발자와 관리자 화면에 필요한 API와 데이터 구조를 함께 검토했습니다.',
        },
        {
          title: '플랫폼 어드민과 공통 패키지',
          description:
            'shadcn/ui 기반 공통 컴포넌트와 인증·레이아웃을 통합 패키지로 설계해 여러 운영 도구에 적용했습니다. 새 어드민을 만들 때 공통 환경을 반복해서 준비하지 않고 기능 개발을 시작할 수 있도록 했습니다. ESLint와 lint-staged를 적용해 코드 품질 검사를 자동화했습니다.',
        },
      ],
      architecture: [
        'Next.js · React · TypeScript',
        'TanStack Query · React Hook Form · Zod',
        'Radix UI · Tailwind CSS · Tiptap',
      ],
    },
  },
  {
    no: '03',
    period: '2024.05 ~ 2025.06',
    company: 'FRESHEASY · HEO DAK MALL',
    title: '허닭몰 자체 커머스 구축',
    summary:
      '메이크샵으로 운영하던 허닭몰을 자체 플랫폼으로 옮겼습니다. 프론트엔드 3인 팀에서 모노레포와 배포·테스트 환경을 구성하고, 운영자가 홈과 기획전을 직접 편집하고 예약 게시하는 전시 빌더를 개발했습니다.',
    scope: [
      '고객·운영자·판매자 앱의 모노레포와 공통 UI를 설계했습니다.',
      '홈·기획전의 편집, 미리보기와 예약 게시 기능을 개발했습니다.',
      'AWS 배포와 UI·E2E 테스트 환경을 구축하고 API 연동 구조를 정리했습니다.',
    ],
    metrics: [
      '약 20만 사용자',
      '전시 개발 요청 → 직접 편집·예약',
      'UI·E2E 테스트 환경 구축',
    ],
    tags: ['Next.js', 'Turborepo', 'AWS', 'Playwright', 'Storybook'],
    tone: 'blue',
    image: '/projects/heodak-fo-original.png',
    animation: '/projects/heodak-fo.apng',
    detail: {
      category: 'COMMERCE & DISPLAY BUILDER',
      role: '프론트엔드 3인 팀에서 아키텍처와 공통 개발 기반 구축을 주도하고, 전시 빌더를 개발했습니다.',
      screenshots: [
        {
          image: '/projects/heodak-fo-original.png',
          animation: '/projects/heodak-fo.apng',
          label: 'FO · 고객용 쇼핑몰',
        },
        {
          image: '/projects/heodak-original.png',
          animation: '/projects/heodak-bo.apng',
          blur: true,
          label: 'BO · 전시 템플릿 관리',
        },
      ],
      background:
        '메이크샵으로 운영하던 허닭몰을 자체 플랫폼으로 재구축해 정식 오픈했습니다. 기존에는 운영팀이 홈이나 기획전을 바꾸려면 개발팀에 제작을 요청하고 2~3일을 기다린 뒤, 정해진 시간에 수동으로 게시해야 했습니다. 고객용 쇼핑몰과 운영 도구를 함께 구축하면서 이 과정을 운영자가 직접 처리할 수 있도록 바꾸었습니다.',
      work: [
        {
          title: '고객·운영자·판매자 앱을 하나의 저장소로',
          description:
            'Turborepo와 pnpm workspace로 고객용 client, 운영자용 master, 판매자용 seller 앱을 한 저장소에서 관리하도록 구성했습니다. 공통 UI·유틸리티·타입과 설정을 패키지로 분리해 여러 앱에서 함께 사용할 수 있도록 했습니다.',
        },
        {
          title: '템플릿과 모듈 기반의 전시 빌더',
          description:
            '운영자가 템플릿 안에 모듈을 배치해 홈과 기획전을 구성하는 편집 화면을 개발했습니다. 별도 팝업에서 편집한 내용은 BroadcastChannel로 본 화면에 전달해 변경 사항을 확인할 수 있도록 했습니다.',
        },
        {
          title: '전시 유형과 예약 게시 관리',
          description:
            '홈·탭매장·기획전의 전시 유형과 사용 여부, 노출 시작일·종료일을 관리하도록 개발했습니다. 운영자가 미리 화면을 준비하고 게시 시간을 예약할 수 있어, 전시를 바꿀 때마다 개발팀에 요청하고 게시 시간을 기다리던 절차를 줄였습니다.',
        },
        {
          title: '공통 UI와 테스트 환경',
          description:
            'Atomic Design을 기준으로 UI 컴포넌트를 모듈화했습니다. Storybook·Chromatic으로 컴포넌트와 시각적 변경을 확인하고, Vitest·Playwright로 기능과 사용자 시나리오를 검증할 수 있는 환경을 구축했습니다.',
        },
        {
          title: '배포 자동화와 정적 자원 관리',
          description:
            'AWS Elastic Beanstalk 기반 CI/CD 파이프라인을 구축했습니다. 상품 이미지 등 정적 자원은 S3와 CloudFront로 제공하도록 구성하고, API 검수와 비즈니스 로직 분리를 통해 화면과 데이터 연동 구조를 정리했습니다.',
        },
        {
          title: '기존 허닭몰 운영과 협력사 협업',
          area: '메이크샵 허닭몰 · 2023.11 ~ 2025.05',
          description:
            '재구축과 함께 기존 메이크샵 허닭몰의 유지보수도 담당했습니다. 플랫폼의 커스터마이징 제약 안에서 기능을 개선하고, 여러 협력사가 함께 작업할 때 참고할 개발·성능 최적화 가이드와 코드 리뷰 절차를 운영했습니다.',
        },
      ],
      architecture: [
        'Turborepo · pnpm workspace',
        'Next.js · React · TypeScript',
        '공통 UI · 유틸리티 · 타입 패키지',
        'Storybook · Vitest · Playwright · AWS',
      ],
    },
  },
  {
    no: '04',
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
    image: '/projects/bi-original.png',
    animation: '/projects/bi.apng',
    blur: true,
    detail: {
      category: 'GAME BUSINESS INTELLIGENCE',
      role: '프론트엔드를 혼자 맡아 게임 BI, GM Tool과 플랫폼 어드민을 개발했습니다. 백엔드 개발자 2인과 데이터 연동 및 운영 환경을 협의했습니다.',
      background:
        '한국과 일본 운영 인력 10여 명이 게임 지표를 확인하는 BI 대시보드를 개발했습니다. 운영 담당자가 매달 반나절 동안 수동 쿼리로 작성하던 리포트를 서버 데이터로 자동 생성하도록 바꾸었습니다.',
      work: [
        {
          title: '운영 지표를 한곳에서 조회',
          description:
            '기본 지표, 매출 상세, 리텐션, 퍼널, 상위 결제 이용자 등 분석 목적에 따라 조회 화면을 분리했습니다.',
        },
        {
          title: '월간 매출 리포트 자동 생성',
          description:
            '서버 응답을 플랫폼과 항목별로 묶고 ExcelJS로 셀 병합과 서식을 적용한 엑셀 리포트를 생성하도록 구현했습니다.',
        },
        {
          title: '언어와 권한에 맞춘 화면',
          description:
            '한국어·일본어·영어 사전으로 지표와 메뉴를 표시하고, 관리자 권한에 따라 계정 관리 메뉴를 구분했습니다.',
        },
        {
          title: '운영 서버의 배포 환경 개선',
          description:
            '단일 서버에서 서비스를 운영하는 상황을 고려해 Nginx 리버스 프록시 구성을 제안했습니다. 백엔드 개발자와 협업해 배포 환경 개선에 참여했습니다.',
        },
      ],
      architecture: [
        'Next.js · TypeScript · TanStack Query',
        'Google Charts · ExcelJS',
        '언어별 Dictionary · 관리자 권한별 메뉴',
        'Nginx',
      ],
    },
  },
  {
    no: '05',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · CORPORATE WEBSITE',
    title: '보이저 공식 홈페이지',
    summary:
      '게임과 회사 소식을 소개하는 다국어 공식 홈페이지입니다. 영상 중심의 메인 화면과 프로젝트 갤러리, 뉴스·채용 페이지를 연결했습니다.',
    metrics: ['한국어·영어·일본어', '게임 프로젝트 갤러리', '뉴스·채용 콘텐츠'],
    tags: ['Next.js', 'TypeScript', 'Motion', 'Swiper'],
    tone: 'violet',
    image: '/projects/voyager-archive.png',
    animation: '/projects/voyager-archive.apng',
    detail: {
      category: 'BRAND & WEB EXPERIENCE',
      background:
        '공식 홈페이지는 워드프레스 기반 사이트의 성능과 확장성 문제를 개선하기 위해 직접 리뉴얼을 제안했습니다. 기술 선정부터 Next.js 기반 재구축과 배포까지 담당했습니다.',
      work: [
        {
          title: '워드프레스에서 Next.js로 재구축',
          description:
            '기존 템플릿의 제약과 성능 문제를 검토하고 Next.js App Router와 RSC 기반 서버 렌더링 구조로 전환했습니다. 디자이너와 디자인 토큰 기반 컴포넌트 체계를 적용하고, 다국어·반응형·크로스 브라우징에 대응했습니다.',
        },
        {
          title: '영상과 스크롤을 활용한 메인 화면',
          description:
            '배경 영상, 스크롤 위치에 따른 요소 노출, 게임 캐러셀을 조합해 주요 프로젝트를 소개하는 화면을 구성했습니다.',
        },
        {
          title: '다국어 콘텐츠 구조',
          description:
            '언어별 경로와 사전을 사용해 한국어·영어·일본어 콘텐츠를 제공하고, 메타데이터와 사이트맵을 구성했습니다.',
        },
        {
          title: '게임·뉴스·채용 페이지',
          description:
            '자체 IP와 공동 개발 게임을 구분한 갤러리, 보도자료와 IR 자료, 채용 안내를 개별 경로로 구성했습니다.',
        },
      ],
      architecture: [
        'Next.js · React · TypeScript',
        'Motion · Swiper · Tailwind CSS',
        '언어별 경로 · Dictionary · Metadata · Sitemap',
      ],
      links: [
        {
          label: '공식 홈페이지 아카이브',
          href: 'https://web.archive.org/web/20260223175931/https://www.voyagergames.gg/ko',
        },
      ],
    },
  },
  {
    no: '06',
    period: '2017.10 ~ 2023.05',
    company: 'ALIPEOPLE · ALIGO',
    title: '알리고 메시징 서비스',
    summary:
      '5년 8개월 동안 기업용 문자·카카오톡 발송 서비스 ALIGO를 개발하고 운영했습니다. 발송·결제·고객 상담 기능을 개선하고, 기존 PHP·jQuery 환경에 Vue.js를 점진적으로 도입했습니다. ALIGO V2에서는 프론트엔드 개발과 PM 역할을 함께 맡았습니다.',
    scope: [
      '친구톡 발송, 템플릿 생성, 충전 금액 계산과 견적서 발행 기능을 개발했습니다.',
      '문자·카카오톡 API 연동용 npm 패키지를 개발하고 배포했습니다.',
      'V2의 렌더링·업로드·실시간 알림을 구현하고 요구사항과 일정을 관리했습니다.',
    ],
    metrics: [
      '5년 8개월 개발·운영',
      'API 고객 약 10%가 패키지 사용',
      'V2 개발·PM 병행',
    ],
    tags: ['Vue.js', 'TypeScript', 'PHP', 'Node.js', 'Inertia.js'],
    tone: 'mint',
    image: '/projects/aligo.png',
    animation: '/projects/aligo.apng',
    detail: {
      category: 'MESSAGING SERVICE',
      role: '고객용 서비스의 프론트엔드 개발과 운영을 담당했습니다. ALIGO V2에서는 요구사항 분석, 일정 산정과 진행 상황 관리도 맡았습니다.',
      background:
        '기업 고객이 문자와 카카오톡을 발송하는 서비스입니다. 운영 중인 기능을 유지하면서 발송 준비와 결제 과정의 불편을 개선하고, 프론트엔드 개발 환경을 점진적으로 바꾸는 작업을 이어 갔습니다. 기존 서비스 유지보수와 ALIGO V2 개발을 모두 경험했습니다.',
      work: [
        {
          title: '운영 중인 서비스에 Vue.js 도입',
          description:
            'PHP와 jQuery로 구성된 서비스에 팀의 학습 부담을 고려해 Vue.js를 점진적으로 도입했습니다. 기존 기능을 유지하면서 새로운 화면과 기능을 개발할 수 있도록 프론트엔드 환경을 정리했습니다.',
        },
        {
          title: '친구톡 발송과 템플릿 편집',
          description:
            '엑셀에 의존하던 친구톡 발송 작업을 웹 화면에서 처리하도록 바꾸었습니다. 카카오톡 이모티콘 치환 UI와 템플릿 생성기를 개발해 메시지를 준비하고 편집하는 과정을 개선했습니다.',
        },
        {
          title: 'API 연동용 npm 패키지 개발·배포',
          description:
            '문자와 카카오톡 발송 API를 연동하는 npm 패키지를 직접 개발하고 배포했습니다. 전체 API 연동 고객의 약 10%가 사용하는 도구로 운영했습니다.',
        },
        {
          title: '결제와 고객 상담 기능 개선',
          description:
            '예상 발송량으로 필요한 충전 금액을 계산하는 기능과 견적서 자동 발행을 구현했습니다. 채널톡 연동과 고객 정보 제공 API도 개발해 전화·게시판 외에 상담을 받을 수 있는 경로를 추가했습니다.',
        },
        {
          title: 'ALIGO V2의 렌더링·업로드·알림',
          description:
            'Vue 3·TypeScript·Pinia를 사용하고 Laravel Mix·Inertia.js 기반 SSR 환경을 구성했습니다. 대용량 파일 업로드를 백그라운드에서 처리하도록 구현하고, Laravel Broadcast와 연동한 실시간 알림을 개발했습니다.',
        },
        {
          title: '개발과 프로젝트 일정 관리 병행',
          description:
            'ALIGO V2에서 PM 역할을 함께 맡았습니다. 요구사항을 분석해 개발 범위를 정리하고, 작업별 일정을 산정하며 진행 상황을 관리했습니다.',
        },
      ],
      architecture: [
        'Vue.js · Vue 3 · TypeScript · Pinia',
        'PHP · jQuery · Tailwind CSS',
        'Node.js · Express.js · npm',
        'Laravel Mix · Inertia.js · Laravel Broadcast · Jest',
      ],
      links: [
        { label: '알리고 사이트 방문', href: 'https://smartsms.aligo.in' },
      ],
    },
  },
]

function combineProjects(
  primary: Project,
  secondary: Project,
  overrides: Pick<
    Project,
    'no' | 'title' | 'company' | 'summary' | 'metrics' | 'scope'
  >,
  category: string,
): Project {
  return {
    ...primary,
    ...overrides,
    tags: [...new Set([...primary.tags, ...secondary.tags])],
    detail: {
      category,
      role: primary.detail.role,
      screenshots: [primary, secondary].flatMap((project) =>
        project.image
          ? [
              {
                image: project.image,
                animation: project.animation,
                blur: project.blur,
                label: project.title,
              },
            ]
          : [],
      ),
      background: `${primary.detail.background} ${secondary.detail.background}`,
      work: [primary, secondary].flatMap((project) =>
        project.detail.work.map((work) => ({
          ...work,
          area: project.title,
        })),
      ),
      architecture: [
        ...new Set([
          ...primary.detail.architecture,
          ...secondary.detail.architecture,
        ]),
      ],
      links: [
        ...(primary.detail.links ?? []),
        ...(secondary.detail.links ?? []),
      ],
    },
  }
}

export const projects: Project[] = [
  { ...projectEntries[2], no: '01' },
  { ...projectEntries[5], no: '02' },
  combineProjects(
    projectEntries[3],
    projectEntries[1],
    {
      no: '03',
      company: 'VOYAGER · GAME OPERATIONS',
      title: '게임 운영 도구와 리포트 자동화',
      scope: [
        '운영 지표 대시보드와 엑셀 리포트 자동 생성 기능을 개발했습니다.',
        '유저·계정·공지 관리와 GM Tool의 DB 프로시저 호출을 구현했습니다.',
        '플랫폼 어드민의 공통 UI·인증·레이아웃을 패키지로 정리했습니다.',
      ],
      summary:
        '게임 BI와 에테르나 GM Tool을 개발했습니다. 운영 지표 조회와 월간 리포트 자동화부터 유저 검색, 계정 상태 관리, 공지 편집까지 운영팀의 업무를 지원했습니다.',
      metrics: [
        '월간 리포트 자동화',
        '한·일 운영 인력 10여 명',
        '유저·계정·공지 관리',
      ],
    },
    'GAME BI & GM TOOL',
  ),
  combineProjects(
    projectEntries[0],
    projectEntries[4],
    {
      no: '04',
      company: 'VOYAGER · WEB PLATFORM',
      title: '게임 플랫폼과 다국어 웹사이트',
      scope: [
        '워드프레스 홈페이지의 리뉴얼을 제안하고 Next.js 재구축과 배포를 맡았습니다.',
        '게임 소개·회원 서비스와 언어별 콘텐츠·이용 안내를 구현했습니다.',
        '디자인 토큰 기반 UI와 Unity 하이브리드 앱·반응형 화면에 대응했습니다.',
      ],
      summary:
        '게임 소개와 회원 서비스를 제공하는 플랫폼 사이트, 기업 소식과 게임 프로젝트를 소개하는 공식 홈페이지를 개발했습니다. 다국어 콘텐츠와 회원가입·로그인 화면을 구성했습니다.',
      metrics: [
        '게임 소개·프로젝트 갤러리',
        '회원가입·로그인·계정 찾기',
        '한국어·영어·일본어',
      ],
    },
    'GAME PLATFORM & CORPORATE WEBSITE',
  ),
  ...additionalProjects,
]

export const experiences: Experience[] = [
  {
    period: '2025.08 ~ 2026.04',
    company: '주식회사 보이저',
    description:
      '프론트엔드 1인 담당으로 웹사이트·플랫폼·운영 도구 5개를 병행했습니다. 공통 패키지, 다국어 화면과 월간 리포트 자동화를 개발하고 백엔드 개발자 2인과 협업했습니다.',
  },
  {
    period: '2023.11 ~ 2025.08',
    company: '주식회사 프레시지',
    description:
      '허닭몰 재구축과 기존 몰 운영, FRAME MVP, PDP 일정 관리, WMS PDA, HD마켓, 기업 사이트까지 7개 프로젝트를 수행했습니다. 공통 구조·테스트·배포 환경을 구축하고 협력사 개발 가이드와 코드 리뷰를 운영했습니다.',
  },
  {
    period: '2017.10 ~ 2023.05',
    company: '알리는사람들',
    description:
      'ALIGO의 발송·결제 기능과 API 연동 패키지를 개발하고 Vue.js를 점진적으로 도입했습니다. V2 개발에서는 PM을 병행했으며, KPI 대시보드와 Slack 기반 칭찬 플랫폼을 풀스택으로 개발했습니다.',
  },
  {
    period: '2016.09 ~ 2017.06',
    company: '장플레이스랩',
    description:
      'AJ park의 CEO·파트너별 화면과 백오피스, 옥반식품 등 기업 홈페이지를 개발했습니다. CSS로 반응형 화면을 구현하고 IE·Chrome·Safari에서의 표시와 동작을 확인했습니다.',
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
