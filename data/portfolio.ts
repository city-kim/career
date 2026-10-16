import { additionalProjects } from './additional-projects'
import { caseStudies } from './case-studies'

export type ProjectTone = 'violet' | 'blue' | 'mint'

export type CaseStudy = {
  label: string
  headline: string
  teaser: string
  before: string
  after: string
  focus: string
  imageNote: string
  decision: { title: string; description: string }[]
  flow: { title: string; steps: string[]; caption: string }
}

export type Project = {
  slug: string
  caseStudy?: CaseStudy
  serviceScale?: string
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
    slug: 'voyager-platform',
    no: '01',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · PLATFORM',
    title: '보이저 플랫폼 사이트',
    summary:
      'ETERNA AI를 소개하는 페이지와 회원가입, 로그인, 계정 찾기 화면을 개발했습니다. 한국어·일본어·영어로 게임과 서비스 이용 방법을 안내합니다.',
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
        '원본 코드를 로컬에서 실행한 화면입니다. 외부 CDN에 있던 배경 영상과 일부 버튼 이미지는 불러오지 못했습니다.',
      role: '프론트엔드를 혼자 맡았습니다. 웹 화면과 언어별 경로를 만들고, 백엔드 개발자와 회원 API를 연동했습니다.',
      background:
        '게임을 둘러보고 회원가입이나 로그인을 할 수 있는 사이트입니다. 게임 소개와 회원 서비스를 한 사이트에서 제공하도록 개발했습니다.',
      work: [
        {
          title: 'ETERNA AI 게임 소개',
          description:
            '게임 소개 화면에 배경 영상을 넣고, Motion으로 애니메이션을 적용했습니다. 슬라이드 화면에는 Swiper를 사용했습니다.',
        },
        {
          title: '회원 서비스 화면',
          description:
            '회원가입, 로그인, 비밀번호 찾기 페이지를 각각 만들고 회원 API와 연결했습니다.',
        },
        {
          title: '언어별 경로와 이용 안내',
          description:
            '언어별 경로와 번역 사전으로 한국어·일본어·영어를 지원했습니다. 페이지별 메타데이터를 설정하고 약관, 개인정보처리방침, 게임 이용 안내 페이지도 만들었습니다.',
        },
        {
          title: 'Unity 하이브리드 앱과 반응형 화면',
          description:
            'Unity 애플리케이션과 함께 동작하는 웹 화면을 개발했습니다. 화면 크기에 따라 배치가 달라지도록 만들고, 주요 해상도에서 표시와 동작을 확인했습니다.',
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
    slug: 'eterna-gm',
    no: '02',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · ETERNA GM TOOL',
    title: '에테르나 GM Tool',
    summary:
      '에테르나 운영팀이 쓰는 관리 도구입니다. 유저를 검색하고 계정 상태를 바꾸거나, 아이템·재화·결제 내역을 조회하고 공지를 작성하는 기능을 개발했습니다.',
    metrics: ['유저 검색·상태 관리', '아이템·재화·결제 조회', '공지 작성·편집'],
    tags: ['Next.js', 'TypeScript', 'TanStack Query', 'Tiptap'],
    tone: 'blue',
    image: '/projects/gm-original.png',
    animation: '/projects/gm.apng',
    blur: true,
    detail: {
      category: 'GAME OPERATIONS TOOL',
      caption:
        '원본 화면에 테스트 유저를 넣어 촬영했습니다. 일부 내용은 흐리게 처리했습니다.',
      background:
        'GM Tool은 운영자가 유저 정보와 계정 상태, 공지를 관리하는 도구입니다. 다른 운영 도구도 동시에 개발하고 있어서, 함께 쓰는 기능은 패키지로 분리했습니다.',
      work: [
        {
          title: '조건별 유저 검색',
          description:
            '서버, 계정 ID, 유저 ID, 닉네임, 계정 상태로 유저를 검색할 수 있게 했습니다. 검색 결과에는 페이지네이션을 적용했습니다.',
        },
        {
          title: '유저별 운영 기능',
          description:
            '유저별 아이템, 재화, 결제, 멤버십을 조회하는 팝업을 만들었습니다. 닉네임과 계정 상태 변경, 강제 로그아웃도 각 팝업에서 처리합니다.',
        },
        {
          title: '공지 콘텐츠 편집',
          description:
            '공지 목록과 편집 화면을 만들고, 편집기에는 Tiptap을 사용했습니다. 이미지 업로드도 구현해 운영자가 글과 이미지를 직접 넣을 수 있게 했습니다.',
        },
        {
          title: '운영 도구의 데이터 접근 구조',
          description:
            '운영 도구의 요청은 Next.js API Route에서 MySQL DB 프로시저를 호출해 처리했습니다. 게임 서버와 처리 경로를 나누고, 관리자 화면에 필요한 API와 데이터 구조는 백엔드 개발자와 함께 검토했습니다.',
        },
        {
          title: '플랫폼 어드민과 공통 패키지',
          description:
            '여러 운영 도구에서 쓰는 shadcn/ui 컴포넌트와 인증, 레이아웃을 공통 패키지로 만들었습니다. 새 어드민에서도 이 패키지를 가져다 쓰도록 했습니다. ESLint와 lint-staged로 코드 검사도 자동화했습니다.',
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
    slug: 'heodak-commerce',
    serviceScale: '로그인·구매 등 활동 기준 약 20만 계정',
    no: '03',
    period: '2024.05 ~ 2025.06',
    company: 'FRESHEASY · HEO DAK MALL',
    title: '허닭몰 자체 커머스 구축',
    summary:
      '메이크샵에서 운영하던 허닭몰을 자체 플랫폼으로 다시 만들었습니다. 고객용 쇼핑몰을 개발하면서, 운영팀이 홈과 기획전을 직접 편집하고 예약 게시하는 도구도 만들었습니다.',
    scope: [
      '고객·운영자·판매자 앱을 모노레포로 구성하고 공통 UI를 만들었습니다.',
      '홈과 기획전의 편집, 미리보기, 예약 게시 기능을 개발했습니다.',
      'AWS 배포를 자동화하고 UI·E2E 테스트 환경과 API 연동 방식을 정리했습니다.',
    ],
    metrics: ['전시 개발 요청 → 직접 편집·예약', 'UI·E2E 테스트 환경 구축'],
    tags: ['Next.js', 'Turborepo', 'AWS', 'Playwright', 'Storybook'],
    tone: 'blue',
    image: '/projects/heodak-fo-original.png',
    animation: '/projects/heodak-fo.apng',
    detail: {
      category: 'COMMERCE & DISPLAY BUILDER',
      role: '프론트엔드 3인 팀에서 앱 구조와 공통 패키지 설계를 주도했습니다. 전시 빌더와 배포·테스트 환경도 맡았습니다.',
      screenshots: [
        {
          image: '/projects/heodak-fo-original.png',
          animation: '/projects/heodak-fo.apng',
          label: 'FO · 고객용 쇼핑몰',
          caption: '원본 UI를 기존 MSW 테스트 데이터로 실행한 홈 화면입니다.',
        },
        {
          image: '/projects/heodak-original.png',
          animation: '/projects/heodak-bo.apng',
          blur: true,
          label: 'BO · 전시 템플릿 관리',
          caption:
            '원본 전시 템플릿 편집 UI입니다. 일부 내용을 흐리게 표시했습니다.',
        },
      ],
      background:
        '기존에는 홈이나 기획전을 바꾸려면 개발팀에 요청하고 2~3일을 기다려야 했습니다. 게시할 때도 담당자가 정해진 시간에 직접 작업했습니다. 허닭몰을 자체 플랫폼으로 다시 만들면서, 운영팀이 화면을 편집하고 게시 시간을 예약하는 기능을 함께 개발했습니다. 새 쇼핑몰의 정식 오픈까지 맡았습니다.',
      work: [
        {
          title: '고객·운영자·판매자 앱을 하나의 저장소로',
          description:
            '고객용 client, 운영자용 master, 판매자용 seller 앱을 Turborepo와 pnpm workspace로 한 저장소에서 관리했습니다. 세 앱에서 쓰는 UI, 유틸리티, 타입과 설정은 공통 패키지로 분리했습니다.',
        },
        {
          title: '템플릿과 모듈 기반의 전시 빌더',
          description:
            '운영자가 템플릿에 모듈을 배치해 홈과 기획전을 만드는 편집 화면을 개발했습니다. 팝업에서 편집을 마치면 BroadcastChannel로 수정 결과를 보내 본 화면에 반영합니다. 서버 저장은 본 화면에서 별도로 처리합니다.',
        },
        {
          title: '전시 유형과 예약 게시 관리',
          description:
            '홈, 탭매장, 기획전별로 사용 여부와 노출 시작일·종료일을 설정하는 기능을 만들었습니다. 운영팀이 화면을 미리 준비해 두고 정해진 시간에 게시할 수 있게 했습니다.',
        },
        {
          title: '공통 UI와 테스트 환경',
          description:
            'UI 컴포넌트는 Atomic Design을 기준으로 나눴습니다. Storybook과 Chromatic으로 컴포넌트 모양의 변화를 확인하고, Vitest와 Playwright로 기능과 사용자 시나리오를 테스트할 수 있게 설정했습니다.',
        },
        {
          title: '배포 자동화와 정적 자원 관리',
          description:
            'AWS Elastic Beanstalk으로 CI/CD를 구성하고, 상품 이미지 등 정적 파일은 S3와 CloudFront로 제공했습니다. API를 검수하고 화면에서 비즈니스 로직을 분리하는 작업도 맡았습니다.',
        },
        {
          title: '기존 허닭몰 운영과 협력사 협업',
          area: '메이크샵 허닭몰 · 2023.11 ~ 2025.05',
          description:
            '새 쇼핑몰을 만드는 동안 기존 메이크샵 허닭몰도 유지보수했습니다. 메이크샵에서 수정할 수 있는 범위 안에서 기능을 고쳤고, 협력사에 전달할 개발·성능 가이드를 작성하고 코드를 리뷰했습니다.',
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
    slug: 'game-operations',
    no: '04',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · GAME BI',
    title: '게임 운영 대시보드와 리포트 자동화',
    summary:
      '한국과 일본 운영팀이 게임 지표를 확인하는 대시보드를 만들었습니다. 매달 쿼리를 실행해 작성하던 리포트도 화면에서 엑셀 파일로 내려받을 수 있게 했습니다.',
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
      caption:
        '원본 화면에 테스트 데이터를 넣어 촬영했습니다. 차트에 표시된 수치는 실제 실적이 아닙니다.',
      role: '프론트엔드는 혼자 맡았고, 백엔드 개발자 두 명과 함께 일했습니다. 게임 BI와 GM Tool, 플랫폼 어드민을 개발했습니다.',
      background:
        '한국과 일본의 운영 담당자 10여 명이 쓰는 BI 대시보드입니다. 월간 리포트는 담당자가 직접 쿼리를 실행해 작성하고 있었고, 매달 반나절 정도 걸렸습니다. 서버 데이터를 받아 엑셀 파일을 자동으로 만드는 기능을 개발했습니다.',
      work: [
        {
          title: '운영 지표를 한곳에서 조회',
          description:
            '기본 지표, 매출 상세, 리텐션, 퍼널, 상위 결제 이용자를 각각 조회하는 화면을 만들었습니다.',
        },
        {
          title: '월간 매출 리포트 자동 생성',
          description:
            '서버에서 받은 데이터를 플랫폼과 항목별로 나눈 뒤, ExcelJS로 셀을 병합하고 서식을 적용해 엑셀 파일을 만들었습니다.',
        },
        {
          title: '언어와 권한에 맞춘 화면',
          description:
            '지표와 메뉴에 한국어·일본어·영어 번역 사전을 적용했습니다. 계정 관리 메뉴는 관리자 권한에 따라 다르게 표시했습니다.',
        },
        {
          title: '운영 서버의 배포 환경 개선',
          description:
            '한 서버에서 서비스를 운영하고 있어 Nginx 리버스 프록시 구성을 제안했습니다. 백엔드 개발자와 함께 배포 환경을 정리했습니다.',
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
    slug: 'voyager-website',
    no: '05',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER · CORPORATE WEBSITE',
    title: '보이저 공식 홈페이지',
    summary:
      '게임과 회사 소식을 소개하는 공식 홈페이지를 개발했습니다. 메인 화면과 게임 갤러리, 뉴스·채용 페이지를 한국어·영어·일본어로 제공합니다.',
    metrics: ['한국어·영어·일본어', '게임 프로젝트 갤러리', '뉴스·채용 콘텐츠'],
    tags: ['Next.js', 'TypeScript', 'Motion', 'Swiper'],
    tone: 'violet',
    image: '/projects/voyager-archive.png',
    animation: '/projects/voyager-archive.apng',
    detail: {
      category: 'BRAND & WEB EXPERIENCE',
      caption: '2026년 2월 23일 웹 아카이브에 보존된 실제 홈페이지 화면입니다.',
      background:
        '기존 공식 홈페이지는 워드프레스로 운영하고 있었습니다. 성능 문제와 템플릿 수정의 제약이 있어 리뉴얼을 제안했고, 기술 선정부터 Next.js 개발과 배포까지 맡았습니다.',
      work: [
        {
          title: '워드프레스에서 Next.js로 재구축',
          description:
            '워드프레스 템플릿 대신 Next.js App Router와 RSC로 홈페이지를 다시 만들었습니다. 디자이너와 함께 디자인 토큰을 컴포넌트에 적용하고, 언어와 화면 크기, 브라우저별로 표시를 확인했습니다.',
        },
        {
          title: '영상과 스크롤을 활용한 메인 화면',
          description:
            '메인 화면에 배경 영상과 게임 캐러셀을 넣었습니다. 소개 문구와 이미지는 스크롤 위치에 따라 나타나도록 만들었습니다.',
        },
        {
          title: '다국어 콘텐츠 구조',
          description:
            '한국어·영어·일본어 경로와 번역 사전을 만들고, 각 언어에 맞는 메타데이터와 사이트맵을 설정했습니다.',
        },
        {
          title: '게임·뉴스·채용 페이지',
          description:
            '게임 갤러리에서 자체 IP와 공동 개발 게임을 나눠 보여줬습니다. 보도자료, IR 자료, 채용 안내도 별도 페이지로 만들었습니다.',
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
    slug: 'aligo',
    no: '06',
    period: '2017.10 ~ 2023.05',
    company: 'ALIPEOPLE · ALIGO',
    title: '알리고 메시징 서비스',
    summary:
      '알리고에서 5년 8개월 동안 문자·카카오톡 발송 서비스를 개발하고 운영했습니다. PHP·jQuery 환경에 Vue.js를 도입했고, V2에서는 개발과 PM을 함께 맡았습니다.',
    scope: [
      '친구톡 발송과 템플릿 편집, 충전 금액 계산·견적서 발행 기능을 만들었습니다.',
      '고객이 문자·카카오톡 API를 연동할 수 있도록 npm 패키지를 개발하고 배포했습니다.',
      'V2의 렌더링·업로드·알림을 구현하고, PM으로 개발 일정도 관리했습니다.',
    ],
    metrics: [
      '5년 8개월 개발·운영',
      'API 연동용 npm 패키지 개발·배포',
      'V2 개발·PM 병행',
    ],
    tags: ['Vue.js', 'TypeScript', 'PHP', 'Node.js', 'Inertia.js'],
    tone: 'mint',
    image: '/projects/aligo.png',
    animation: '/projects/aligo.apng',
    detail: {
      category: 'MESSAGING SERVICE',
      caption:
        '2026년 9월 공개 사이트 캡처입니다. 재직 당시 화면과 다를 수 있습니다.',
      role: '고객용 웹 서비스의 프론트엔드 개발과 운영을 맡았습니다. V2에서는 PM도 맡아 요구사항을 정리하고 개발 일정을 관리했습니다.',
      background:
        '알리고는 기업 고객이 문자와 카카오톡을 발송하는 서비스입니다. 기존 서비스를 운영하면서 발송 준비와 결제 과정의 불편을 고쳤고, 프론트엔드 개발 환경도 조금씩 바꿨습니다. 이후 ALIGO V2 개발에 참여했습니다.',
      work: [
        {
          title: '운영 중인 서비스에 Vue.js 도입',
          description:
            '기존 서비스는 PHP와 jQuery로 작성되어 있었습니다. 팀이 새 기술을 익히는 부담을 고려해 Vue.js를 조금씩 도입했고, 기존 기능을 유지보수하면서 새 화면을 개발했습니다.',
        },
        {
          title: '친구톡 발송과 템플릿 편집',
          description:
            '엑셀로 처리하던 친구톡 발송 작업을 웹 화면으로 옮겼습니다. 카카오톡 이모티콘을 치환하는 UI와 메시지 템플릿 생성기도 만들었습니다.',
        },
        {
          title: 'API 연동용 npm 패키지 개발·배포',
          description:
            '고객이 문자·카카오톡 발송 API를 연동할 때 쓸 수 있는 npm 패키지를 개발하고 배포했습니다.',
        },
        {
          title: '결제와 고객 상담 기능 개선',
          description:
            '예상 발송량을 넣으면 필요한 충전 금액을 계산하고 견적서를 발행하는 기능을 만들었습니다. 전화와 게시판 외에 채널톡으로도 상담할 수 있도록 연동하고, 상담에 필요한 고객 정보 API를 개발했습니다.',
        },
        {
          title: 'ALIGO V2의 렌더링·업로드·알림',
          description:
            'V2에서는 Vue 3, TypeScript, Pinia를 사용했습니다. Laravel Mix와 Inertia.js로 SSR 환경을 구성하고, 대용량 파일의 백그라운드 업로드와 Laravel Broadcast를 이용한 실시간 알림을 구현했습니다.',
        },
        {
          title: '개발과 프로젝트 일정 관리 병행',
          description:
            'V2 개발에서는 PM도 맡았습니다. 요구사항을 정리해 개발 범위를 정하고, 작업별 일정을 잡아 진행 상황을 확인했습니다.',
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
                caption: project.detail.caption,
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

const groupedProjects: Project[] = [
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
        '게임 지표 조회와 월간 엑셀 리포트 다운로드 기능을 개발했습니다.',
        '유저·계정·공지 관리 화면을 만들고 DB 프로시저와 연결했습니다.',
        '여러 어드민에서 쓰는 UI·인증·레이아웃을 공통 패키지로 만들었습니다.',
      ],
      summary:
        '한국과 일본 운영팀이 쓰는 게임 BI와 GM Tool을 개발했습니다. 게임 지표 조회부터 엑셀 리포트 작성, 유저·계정 관리까지 웹에서 처리할 수 있게 했습니다.',
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
      title: '보이저 플랫폼과 공식 홈페이지',
      scope: [
        '기존 워드프레스 홈페이지를 Next.js로 다시 만들고 배포했습니다.',
        '게임 소개와 회원가입·로그인 화면에 한국어·영어·일본어를 적용했습니다.',
        '디자인 토큰으로 UI를 구성하고, Unity 앱에서 쓰는 반응형 웹 화면을 개발했습니다.',
      ],
      summary:
        '게임 소개와 회원 서비스를 제공하는 플랫폼, 회사 소식과 채용 정보를 안내하는 공식 홈페이지를 개발했습니다. 두 사이트 모두 한국어·영어·일본어를 지원합니다.',
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

export const projects: Project[] = groupedProjects.map((project) => ({
  ...project,
  caseStudy: caseStudies[project.slug],
}))

export const featuredProjects = [
  'heodak-commerce',
  'game-operations',
  'aligo',
].map((slug) => projects.find((project) => project.slug === slug)!)

export const experiences: Experience[] = [
  {
    period: '2025.08 ~ 2026.04',
    company: '주식회사 보이저',
    description:
      '웹사이트와 게임 운영 도구 등 5개 프로젝트의 프론트엔드를 혼자 맡았습니다. 백엔드 개발자 두 명과 협업하며 공통 패키지와 다국어 화면을 만들고, 월간 리포트 작성을 자동화했습니다.',
  },
  {
    period: '2023.11 ~ 2025.08',
    company: '주식회사 프레시지',
    description:
      '허닭몰 재구축과 운영을 비롯해 FRAME, PDP, WMS PDA 등 7개 프로젝트를 맡았습니다. 공통 코드와 테스트·배포 환경을 구성하고, 협력사 개발 가이드 작성과 코드 리뷰도 진행했습니다.',
  },
  {
    period: '2017.10 ~ 2023.05',
    company: '알리는사람들',
    description:
      'ALIGO의 발송·결제 기능과 API 연동 패키지를 개발하고 Vue.js를 도입했습니다. V2에서는 개발과 PM을 함께 맡았고, 사내 대시보드와 칭찬 플랫폼은 프론트엔드부터 백엔드까지 개발했습니다.',
  },
  {
    period: '2016.09 ~ 2017.06',
    company: '장플레이스랩',
    description:
      'AJ park의 CEO·파트너용 화면과 백오피스, 옥반식품 등 기업 홈페이지를 만들었습니다. CSS로 반응형 화면을 구현하고 IE, Chrome, Safari에서 확인했습니다.',
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
