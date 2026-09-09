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
  animation?: string
  detail: {
    category: string
    caption: string
    screenshots?: {
      image: string
      animation?: string
      label: string
      caption: string
    }[]
    background: string
    work: { title: string; description: string }[]
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

export const projects: Project[] = [
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
      caption:
        '보이저 플랫폼 원본 코드의 ETERNA AI 소개 화면입니다. 원본 UI를 유지했으며, 외부 CDN의 배경 영상과 다운로드 버튼 이미지는 캡처 시 불러오지 못했습니다.',
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
    detail: {
      category: 'GAME OPERATIONS TOOL',
      caption:
        '에테르나 GM Tool 원본의 유저 조회와 관리 팝업을 캡처했습니다. 표시된 유저 정보는 로컬 캡처용 테스트 데이터입니다.',
      background:
        '게임 운영자가 유저 정보를 조회하고 계정 상태와 공지를 관리하는 운영 도구입니다. 제공된 에테르나 GM Tool 소스를 기준으로 구현 내용을 정리했습니다.',
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
            '공지 목록과 작성·편집 화면을 분리하고 Tiptap 기반의 콘텐츠 편집기를 적용했습니다.',
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
    metrics: [
      '약 20만 사용자',
      '전시 개발 요청 → 직접 편집·예약',
      'UI·E2E 테스트 환경 구축',
    ],
    tags: ['Next.js', 'Turborepo', 'AWS', 'Playwright', 'Storybook'],
    tone: 'blue',
    image: '/projects/heodak-original.png',
    animation: '/projects/heodak-bo.apng',
    detail: {
      category: 'COMMERCE & DISPLAY BUILDER',
      caption:
        '허닭몰 원본 코드를 실행해 캡처한 전시 템플릿 관리 화면입니다. 원본 UI와 스타일, 프로젝트에 포함된 테스트 데이터를 그대로 사용했습니다.',
      screenshots: [
        {
          image: '/projects/heodak-fo-original.png',
          animation: '/projects/heodak-fo.apng',
          label: 'FO · 고객용 쇼핑몰',
          caption:
            '원본 client 앱의 홈 화면입니다. 프로젝트에 포함된 테스트 데이터로 배너와 상품 카테고리를 표시했습니다.',
        },
        {
          image: '/projects/heodak-original.png',
          animation: '/projects/heodak-bo.apng',
          label: 'BO · 전시 템플릿 관리',
          caption:
            '원본 master 앱의 전시 편집 화면입니다. 프로젝트에 포함된 테스트 데이터를 사용했습니다.',
        },
      ],
      background:
        '커머스 플랫폼을 자체 구축하면서, 운영자가 개발 요청 없이 홈과 기획전의 구성을 편집하고 노출 일정을 설정할 수 있도록 전시 관리 기능을 개발했습니다.',
      work: [
        {
          title: '고객·운영자·판매자 앱을 하나의 저장소로',
          description:
            'client, master, seller 앱과 공통 UI·유틸리티·타입 패키지를 분리한 모노레포를 구성했습니다.',
        },
        {
          title: '템플릿과 모듈 기반의 전시 빌더',
          description:
            '템플릿 안에 모듈을 배치하고, 별도 편집 팝업과 BroadcastChannel로 변경 내용을 주고받도록 구성했습니다.',
        },
        {
          title: '전시 유형과 예약 게시 관리',
          description:
            '홈·탭매장·기획전 등 전시 유형을 구분하고 사용 여부, 노출 시작일과 종료일을 설정할 수 있도록 개발했습니다.',
        },
        {
          title: 'UI 검증과 배포 환경',
          description:
            'Storybook, Vitest, Playwright 기반의 검증 환경과 AWS 배포 환경을 구성했습니다.',
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
    detail: {
      category: 'GAME BUSINESS INTELLIGENCE',
      caption:
        '게임 BI 원본 코드를 실행해 캡처한 매출 데이터 집계 화면입니다. 원본 차트와 스타일을 유지했으며, 수치는 로컬 실행용 예시 데이터입니다.',
      background:
        '한국과 일본 운영팀이 같은 기준으로 게임 지표를 조회하고, 매달 반복되는 리포트 작성 업무를 줄일 수 있는 분석 도구를 개발했습니다.',
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
      caption:
        '2026년 2월 23일 보이저 공식 홈페이지의 Wayback Machine 아카이브를 2026년 9월 9일에 캡처했습니다.',
      background:
        '보이저의 게임 프로젝트와 기업 정보를 다양한 언어로 소개하는 공식 웹사이트입니다. 제공된 소스와 공개 아카이브를 함께 확인했습니다.',
      work: [
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
      '문자·카카오톡 발송 서비스 ALIGO와 사내 대시보드의 프론트엔드 개발을 담당했습니다. 메시지 발송 서비스를 장기간 개발하고 운영한 경험입니다.',
    metrics: [
      '문자·카카오톡 발송 서비스',
      '사내 대시보드 개발',
      '서비스 개발 및 운영',
    ],
    tags: ['Messaging', 'Frontend', 'Dashboard'],
    tone: 'mint',
    image: '/projects/aligo.png',
    animation: '/projects/aligo.apng',
    detail: {
      category: 'MESSAGING SERVICE',
      caption:
        '2026년 9월 9일 공개 사이트를 캡처했습니다. 현재 화면은 재직 당시 화면과 다를 수 있습니다.',
      background:
        '알리는사람들에서 문자·카카오톡 발송 서비스와 사내 대시보드를 개발했습니다. 공개 사이트에서는 단문·장문·그림문자 발송, 주소록, 발송 결과 확인, API 연동 서비스를 소개하고 있습니다.',
      work: [
        {
          title: '메시징 서비스 프론트엔드',
          description:
            '문자와 카카오톡을 발송하는 ALIGO 서비스의 프론트엔드 개발을 담당했습니다.',
        },
        {
          title: '사내 대시보드 개발',
          description:
            '서비스 운영에 필요한 정보를 조회하는 사내 대시보드를 개발했습니다.',
        },
      ],
      architecture: ['문자·카카오톡 발송 서비스', '운영용 대시보드'],
      links: [
        { label: '알리고 사이트 방문', href: 'https://smartsms.aligo.in' },
      ],
    },
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
