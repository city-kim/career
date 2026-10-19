import { additionalProjects } from './additional-projects'
import type { Project } from './project-types'
export type { Project, ProjectTone } from './project-types'

export type Experience = {
  period: string
  company: string
  description: string
}
export type SkillGroup = { group: string; items: string[] }

const primaryProjects: Project[] = [
  {
    no: '01',
    period: '2024.05 ~ 2025.06',
    company: 'FRESHEASY, HEO DAK MALL',
    title: '허닭몰 자체 커머스 구축',
    summary:
      '메이크샵으로 운영하던 허닭몰을 자체 플랫폼으로 옮겼습니다. 프론트엔드 3인 팀에서 모노레포와 배포, 테스트 환경을 구성하고, 운영자가 홈과 기획전을 직접 편집하고 예약 게시하는 전시 빌더를 개발했습니다.',
    scope: [
      '고객, 운영자, 판매자 앱의 모노레포와 공통 UI를 설계했습니다.',
      '홈, 기획전의 편집, 미리보기와 예약 게시 기능을 개발했습니다.',
      'AWS 배포와 UI, E2E 테스트 환경을 구축하고 API 연동 구조를 정리했습니다.',
    ],
    metrics: [
      '가입 회원 100만 이상',
      '최근 1년 활동 사용자 약 20만',
      '전시 직접 구성과 예약 게시',
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
          label: 'FO, 고객용 쇼핑몰',
        },
        {
          image: '/projects/heodak-original.png',
          animation: '/projects/heodak-bo.apng',
          blur: true,
          label: 'BO, 전시 템플릿 관리',
        },
      ],
      background:
        '메이크샵 기반 허닭몰을 자체 플랫폼으로 재구축해 정식 오픈했습니다. 가입 회원은 100만 이상이며, 최근 1년간 주문, 로그인 등 활동 기준 활성 사용자는 약 20만 명이었습니다. 기존에는 운영팀이 홈이나 기획전을 바꾸기 위해 개발팀에 요청한 뒤 2~3일을 기다리고, 지정 시간에 수동으로 게시해야 했습니다.',
      work: [
        {
          title: '고객, 운영자, 판매자 앱을 하나의 저장소로',
          description:
            'Turborepo와 pnpm workspace로 고객용 client, 운영자용 master, 판매자용 seller 앱을 한 저장소에서 관리하도록 구성했습니다. 공통 UI, 유틸리티, 타입과 설정을 패키지로 분리해 여러 앱에서 함께 사용할 수 있도록 했습니다.',
        },
        {
          title: '템플릿과 모듈 기반의 전시 빌더',
          description:
            '운영자가 템플릿과 모듈을 조합해 다양한 전시 화면을 만드는 편집 기능을 개발했습니다. 상품, 카테고리, 쿠폰 검색과 선택을 공통 컴포넌트로 제공하고 편집 팝업과 본 화면을 연결했습니다.',
        },
        {
          title: '전시 유형과 예약 게시 관리',
          description:
            '홈, 탭매장, 기획전의 전시 유형과 사용 여부, 노출 시작일, 종료일을 관리하도록 개발했습니다. 운영자가 미리 화면을 준비하고 게시 시간을 예약할 수 있어, 전시를 바꿀 때마다 개발팀에 요청하고 게시 시간을 기다리던 절차를 줄였습니다.',
        },
        {
          title: '공통 UI와 테스트 환경',
          description:
            'Atomic Design을 기준으로 UI 컴포넌트를 모듈화했습니다. Storybook, Chromatic으로 컴포넌트와 시각적 변경을 확인하고, Vitest, Playwright로 기능과 사용자 시나리오를 검증할 수 있는 환경을 구축했습니다.',
        },
        {
          title: '배포 자동화와 정적 자원 관리',
          description:
            'AWS Elastic Beanstalk 기반 CI/CD 파이프라인을 구축하고 S3와 CloudFront로 상품 이미지 등 정적 자원을 제공했습니다.',
        },
        {
          title: '화면과 API 연동 구조 정리',
          description:
            'API를 검수하고 화면과 비즈니스 로직을 분리해 백엔드 연동 구조를 정리했습니다.',
        },
        {
          title: '기존 허닭몰 운영과 협력사 협업',
          area: '메이크샵 허닭몰, 2023.11 ~ 2025.05',
          description:
            '재구축과 함께 기존 메이크샵 허닭몰의 유지보수도 담당했습니다. 플랫폼의 커스터마이징 제약 안에서 기능을 개선하고, 여러 협력사가 함께 작업할 때 참고할 개발, 성능 최적화 가이드와 코드 리뷰 절차를 운영했습니다.',
        },
      ],
      architecture: [
        'Turborepo, pnpm workspace',
        'Next.js, React, TypeScript',
        '공통 UI, 유틸리티, 타입 패키지',
        'Storybook, Vitest, Playwright, AWS',
      ],
      caseStudies: [
        {
          title: '중첩된 전시 화면에서 공통화할 범위 정하기',
          problem:
            '템플릿과 모듈이 여러 단계로 중첩되고, 상품, 카테고리, 쿠폰을 검색해 넣는 기능이 여러 템플릿에 반복됐습니다. 화면 조합을 늘리면서도 같은 기능을 따로 수정하지 않을 구조가 필요했습니다.',
          decision:
            'Atomic Design을 기준으로 공통 UI를 나누고, 템플릿은 전체 레이아웃, 모듈은 내부 구성을 맡도록 했습니다. 검색과 선택은 같은 앱 안의 공통 컴포넌트가 처리하고 부모에는 선택 결과만 전달하도록 구성했습니다.',
          result:
            '여러 템플릿에서 검색, 선택과 반복 UI를 재사용했습니다. 운영자는 템플릿과 모듈을 조합해 홈, 탭매장, 기획전을 구성하고 게시 시각을 예약할 수 있게 됐습니다.',
        },
        {
          title: '전시 데이터의 조회 부하와 갱신 주기 조율하기',
          problem:
            '전시 화면의 상품 가격, 재고, 품절 여부와 쿠폰 정보를 연결해야 했습니다. 화면 진입마다 상품별 최신 정보를 API로 조회하는 방식은 요청 부하와 로딩 속도를 함께 고려해야 했습니다.',
          decision:
            '백엔드와 협의해 전시 데이터를 미리 생성하고 S3로 제공하는 방식을 선택했습니다. 프론트엔드는 이 데이터를 조회해 템플릿에 주입하도록 구현했습니다.',
          result:
            '전시 화면은 백엔드 배치가 10분 주기로 갱신한 데이터를 사용하도록 구성했습니다. 상품이나 쿠폰의 변경 사항은 다음 배치가 실행된 뒤 전시 데이터에 반영됩니다.',
        },
        {
          title: '여러 편집 팝업의 전달 대상 구분하기',
          problem:
            '같은 종류의 편집 팝업을 여러 화면에서 열면 공유 채널을 통해 다른 부모 화면에도 선택 결과가 전달될 수 있었습니다.',
          decision:
            '팝업에서 편집한 내용을 본 화면에 바로 반영하기 위해 BroadcastChannel을 사용했습니다. prefix와 팝업 생성 시각을 조합해 팝업마다 고유한 채널을 구성했습니다.',
          result:
            '각 팝업의 선택 결과를 해당 부모 화면으로 전달하도록 구성해, 여러 편집 창을 사용할 때 전달 대상이 섞이는 문제를 해결했습니다.',
        },
      ],
    },
    coverage: [
      {
        name: '차세대 허닭몰 커머스 재구축',
        period: '2024.05 ~ 2025.06',
      },
      {
        name: '허닭몰(메이크샵) 유지보수 및 협업 절차 정립',
        period: '2023.11 ~ 2025.05',
      },
    ],
  },
  {
    no: '02',
    period: '2026.06.01 ~ 현재',
    company: 'TIMOWORKS, TEMPO',
    title: 'TEMPO 근태관리 SaaS',
    summary:
      'HR 솔루션 도입 비용 부담을 줄이기 위한 사내 도구를 한국과 일본 기업용 SaaS로 확장했습니다. 관리자 웹, 직원용 앱, 백엔드와 배포를 담당하고, 서로 겹치는 근태 정책과 조직별 권한을 일관되게 처리하는 구조를 마련했습니다.',
    scope: [
      '한국어, 일본어 관리자 콘솔과 GPS 출퇴근, 휴가, 결재 앱 개발',
      '공통 타입, 근태 계산과 재계산 경로, 조직별 권한 체계 구성',
      '구독 결제, AI 개발 하네스, 테스트와 CI/CD 환경 구축',
    ],
    coverage: [
      {
        name: 'TEMPO 근태관리 SaaS 구축 및 출시',
        period: '2026.06.01 ~ 현재',
      },
    ],
    metrics: [
      '2026.09.12 웹 공개',
      'Google Play, App Store 출시',
      '급여, 월말정산, 증명서 Beta',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'React Native',
      'NestJS',
      'Prisma',
      'Playwright',
    ],
    tone: 'violet',
    image: null,
    detail: {
      category: 'ATTENDANCE MANAGEMENT SAAS',
      role: '아키텍처 설계부터 기업 관리자 웹, 플랫폼 운영자 웹, 직원용 모바일 앱, 백엔드 개발과 배포를 담당했습니다.',
      background:
        '기존 HR 솔루션의 도입 비용 부담을 줄이기 위해 사내 근태관리 도구로 시작했습니다. 외부 기업도 이용할 수 있는 SaaS로 확장하며 한국어, 일본어 UI와 국가별 공휴일, 연차 정책을 적용했습니다. 출퇴근, 휴가, 결재 등 주요 기능은 정식 출시했으며, 급여, 월말정산, 증명서 발급은 출시 후 추가한 Beta 기능입니다.',
      caseStudies: [
        {
          title: '근무제와 부분휴가, 휴게 정책이 겹치는 계산 통일하기',
          problem:
            '자정을 넘기는 교대근무, 오전 시간 단위 휴가, 점심 휴게시간과 지각 유예가 겹치는 경우를 일관되게 처리하기 어려웠습니다. 휴가 차감에 쓰는 휴게시간과 실제 근로시간의 무급 휴게 공제도 구분해야 했습니다.',
          decision:
            '직원, 날짜별 정책을 공통 입력으로 조립하고 계산, 저장과 재계산 경로를 통일했습니다. 겹치는 근무 면제 구간은 합집합으로 처리하고, 지각, 미달, 실근로는 목적별로 분리했습니다. 휴가 차감에서 제외하는 휴게시간과 실근로에서 공제하는 휴게시간도 별도로 전달했습니다.',
          result:
            'Vitest로 근무제, 부분휴가, 휴게시간, 지각 유예 조합을 검증했습니다. 특히 오전 휴가가 점심 휴게시간에 걸칠 때 두 계산이 서로 영향을 주지 않는지 확인하고, Playwright로 출퇴근, 휴가 신청, 결재 흐름을 검증했습니다.',
        },
        {
          title: '조직별 커스텀 권한을 화면과 서버에 동일하게 적용하기',
          problem:
            '조직마다 역할과 권한이 달라 메뉴 노출, 직접 URL 접근, 서버 검증의 기준을 일치시키는 것이 까다로웠습니다.',
          decision:
            '조직별 역할과 권한 목록을 DB로 관리했습니다. 프론트엔드는 같은 권한 목록으로 메뉴와 페이지 접근을 제어하고, 서버에서도 API 요청마다 권한을 검증하도록 구성했습니다.',
          result:
            '기업별로 다른 운영 권한을 적용하고, 메뉴 표시만으로 접근을 제한하지 않도록 페이지와 API의 검증 기준을 연결했습니다.',
        },
      ],
      work: [
        {
          title: '관리자 웹과 국가별 정책',
          description:
            'Next.js App Router 기반 관리자 콘솔에 출퇴근 관리, 휴가 신청, 전자결재, 근무표 편성과 조직 관리를 통합하고 한국어, 일본어 UI와 국가별 정책을 적용했습니다.',
        },
        {
          title: '웹, 모바일, 백엔드의 타입과 계산 규칙 공유',
          description:
            '모든 애플리케이션이 TypeScript를 사용하므로 타입 정의를 일치시키기 위해 pnpm 모노레포를 구성했습니다. 공통 타입과 권한, 근태 계산 로직을 패키지로 분리해 재사용했습니다.',
        },
        {
          title: '인증과 변경 이후 데이터 갱신',
          description:
            'BFF와 httpOnly 쿠키 기반 인증을 적용하고 TanStack Query, Zod로 조회, 응답 검증, 오류 처리를 공통화했습니다. 같은 화면에서 출퇴근이나 휴가 변경이 성공하면 관련 쿼리를 무효화하고 대시보드를 다시 조회하도록 했습니다.',
        },
        {
          title: '직원용 모바일 앱 출시',
          description:
            'React Native와 Expo로 GPS 기반 출퇴근, 휴가 신청, 결재 앱을 개발하고 Google Play, App Store 심사 승인과 출시를 완료했습니다.',
        },
        {
          title: '구독 결제와 요금제 제어',
          description:
            'PortOne 기반 구독 결제와 요금제별 기능 접근을 구현했습니다. 무료체험, 인원 변경, 일할 청구, 결제 실패 재시도 등 구독 상태 변화에 따른 처리 흐름을 구성했습니다.',
        },
        {
          title: 'AI 개발 하네스와 직접 코드 검토',
          description:
            'Claude Code와 Codex가 같은 규칙을 참조하도록 프로젝트 문맥과 작업 지침을 직접 구성하고, 기존 리뷰 에이전트와 스킬을 도입했습니다. 생성 코드를 직접 검토하며, PR 리뷰에서는 화면과 서버에 흩어진 카드, 카카오페이 결제수단 값을 공통 상수로 정리하도록 수정 요청했습니다.',
        },
        {
          title: '검증 절차와 배포 자동화',
          description:
            '의존 패키지 빌드, 린트, 타입 검사, 단위 테스트를 공통 명령으로 실행하고 API smoke test와 Playwright E2E를 연결했습니다. 빌드 순서와 실행한 서버 프로세스를 확인해 이전 산출물이나 다른 개발 서버를 검증하는 일을 방지했습니다. GitHub Actions, Docker, AWS EC2로 배포 환경을 구성했습니다.',
        },
        {
          title: '출시 이후 기능 확장',
          description:
            '2026년 9월 12일 웹 서비스를 공개했습니다. 출퇴근, 휴가, 결재 등 주요 기능을 정식 출시하고, 이후 급여, 월말정산, 증명서 발급을 추가 개발해 Beta로 제공했습니다.',
        },
      ],
      architecture: [
        '웹: Next.js App Router, TypeScript, Tailwind CSS, TanStack Query, Zod',
        '모바일: React Native, Expo',
        '백엔드와 데이터: NestJS, Prisma, PostgreSQL',
        '검증과 배포: Vitest, Playwright, GitHub Actions, Docker, AWS EC2',
      ],
    },
  },
  {
    no: '03',
    period: '2017.10 ~ 2023.05',
    company: 'ALIPEOPLE, ALIGO',
    title: '알리고 메시징 서비스',
    summary:
      '기업용 문자, 카카오 메시지 서비스 ALIGO를 개발하고 운영했습니다. 발송, 결제, 고객 상담 기능을 개선하고 기존 PHP, jQuery 환경에 Vue.js를 점진적으로 도입했습니다. ALIGO V2에서는 프론트엔드 개발과 PM 역할을 맡았으며, 해당 프로젝트는 출시 전에 폐기됐습니다.',
    scope: [
      '친구톡 발송, 템플릿 생성, 충전 금액 계산과 견적서 발행 기능을 개발했습니다.',
      '문자, 카카오톡 API 연동용 npm 패키지를 개발하고 배포했습니다.',
      'V2의 렌더링, 업로드, 실시간 알림을 구현하고 요구사항과 일정을 관리했습니다.',
    ],
    metrics: [
      '5년 8개월 개발과 운영',
      'Node.js용 API 패키지 배포',
      'ALIGO V2는 출시 전 폐기',
    ],
    tags: ['Vue.js', 'TypeScript', 'PHP', 'Node.js', 'Inertia.js'],
    tone: 'mint',
    image: '/projects/aligo.png',
    animation: '/projects/aligo.apng',
    detail: {
      category: 'MESSAGING SERVICE',
      role: '고객용 서비스의 프론트엔드 개발과 운영을 담당했습니다. ALIGO V2에서는 요구사항 분석, 일정 산정과 진행 상황 관리도 맡았습니다.',
      background:
        '운영 중인 문자, 카카오 메시지 서비스의 기능을 유지하면서 발송 준비와 결제 과정의 불편을 개선했습니다. 기존 서비스 개선과 별도로 ALIGO V2 개발을 진행했으나, V2는 출시 전에 폐기됐습니다. V2 항목은 개발 단계에서 구현한 내용입니다.',
      work: [
        {
          title: '운영 중인 서비스에 Vue.js 도입',
          description:
            '기존 PHP 구조를 유지하면서 친구톡 발송과 백오피스 문의하기에 Vue.js를 점진적으로 적용했습니다. 메시지와 이모티콘 변경은 데이터 바인딩으로 처리하고, 유사 함수를 공통화했습니다.',
        },
        {
          title: '친구톡 발송과 템플릿 편집',
          description:
            '엑셀에 의존하던 친구톡 발송 작업을 웹 화면에서 처리하도록 바꾸었습니다. 카카오톡 이모티콘 치환 UI와 템플릿 생성기를 개발해 메시지를 준비하고 편집하는 과정을 개선했습니다.',
        },
        {
          title: 'API 연동용 npm 패키지 개발, 배포',
          description:
            'Node.js 고객이 API 문서를 보고 요청 코드를 직접 작성하는 부담을 줄이기 위해 문자, 카카오 메시지 연동용 npm 패키지를 개발하고 배포했습니다. 당시 Express 환경에 최적화했으며, 함수를 호출해 메시지를 발송하도록 구성했습니다.',
        },
        {
          title: '결제와 고객 상담 기능 개선',
          description:
            '예상 발송량으로 필요한 충전 금액을 계산하는 기능과 견적서 자동 발행을 구현했습니다. 채널톡 연동과 고객 정보 제공 API도 개발해 전화, 게시판 외에 상담을 받을 수 있는 경로를 추가했습니다.',
        },
        {
          title: 'ALIGO V2의 렌더링, 업로드, 알림',
          description:
            'Vue 3, TypeScript, Pinia를 사용하고 Laravel Mix, Inertia.js 기반 SSR 환경을 구성했습니다. 대용량 파일 업로드를 백그라운드에서 처리하도록 구현하고, Laravel Broadcast와 연동한 실시간 알림을 개발했습니다.',
          area: 'ALIGO V2, 2021.12 ~ 2022.06, 출시 전 폐기',
        },
        {
          title: '개발과 프로젝트 일정 관리 병행',
          description:
            'ALIGO V2에서 PM 역할을 함께 맡았습니다. 요구사항을 분석해 개발 범위를 정리하고, 작업별 일정을 산정하며 진행 상황을 관리했습니다.',
          area: 'ALIGO V2, 2021.12 ~ 2022.06, 출시 전 폐기',
        },
      ],
      architecture: [
        'Vue.js, Vue 3, TypeScript, Pinia',
        'PHP, jQuery, Tailwind CSS',
        'Node.js, Express.js, npm',
        'Laravel Mix, Inertia.js, Laravel Broadcast, Jest',
      ],
      links: [
        {
          label: '알리고 사이트 방문',
          href: 'https://smartsms.aligo.in',
        },
      ],
      caseStudies: [
        {
          title: '운영 중인 PHP 화면에 Vue를 점진적으로 적용하기',
          problem:
            'jQuery로 DOM을 직접 제어하면서 화면이 복잡해질수록 상태 관리와 유지보수가 어려워졌습니다. 기존 PHP 서비스 구조를 유지하면서 개선할 범위를 정해야 했습니다.',
          decision:
            '친구톡 발송과 백오피스 문의하기부터 Vue를 적용했습니다. 메시지와 이모티콘 변경을 데이터 바인딩으로 처리하고 화면에 흩어진 유사 함수를 공통화했습니다.',
          result:
            '같은 변경을 여러 곳에 따로 적용하는 작업을 줄이고, 기존 PHP 구조 안에서 화면 상태를 관리할 수 있도록 개선했습니다.',
        },
        {
          title: '업로드 처리 중 다른 작업을 할 수 있도록 구성하기',
          problem:
            '대용량 파일을 업로드하고 처리하는 동안 사용자가 계속 기다려야 하는 불편을 해결하려 했습니다.',
          decision:
            '백그라운드 처리와 Laravel Broadcast 연동 소켓 알림을 구현했습니다. 처리 중 다른 작업을 하고, 완료되면 알림을 확인하는 흐름으로 구성했습니다.',
          result:
            '기능을 구현한 단계에서 ALIGO V2가 폐기되어 사용자 대상 출시까지 이어지지는 않았습니다.',
          area: 'ALIGO V2',
        },
      ],
    },
    coverage: [
      {
        name: 'ALIGO 문자 서비스 유지보수 및 신규 기능 개발',
        period: '2017.10 ~ 2023.05',
      },
      {
        name: 'ALIGO V2 개발',
        period: '2021.12 ~ 2022.06',
      },
    ],
  },
  {
    no: '04',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER, GAME OPERATIONS',
    title: '게임 운영 도구와 리포트 자동화',
    summary:
      '게임 BI와 에테르나 GM Tool을 개발했습니다. 운영 지표 조회와 월간 리포트 자동화부터 유저 검색, 계정 상태 관리, 공지 편집까지 운영팀의 업무를 지원했습니다.',
    metrics: [
      '월간 리포트 자동화',
      '한, 일 운영 인력 10여 명',
      '유저, 계정, 공지 관리',
    ],
    tags: [],
    tone: 'mint',
    image: '/projects/bi-original.png',
    animation: '/projects/bi.apng',
    blur: true,
    detail: {
      category: 'GAME BI & GM TOOL',
      role: '프론트엔드를 혼자 맡아 게임 BI, GM Tool과 플랫폼 어드민을 개발했습니다. 백엔드 개발자 2인과 데이터 연동 및 운영 환경을 협의했습니다.',
      screenshots: [
        {
          image: '/projects/bi-original.png',
          animation: '/projects/bi.apng',
          blur: true,
          label: '게임 운영 대시보드와 리포트 자동화',
        },
        {
          image: '/projects/gm-original.png',
          animation: '/projects/gm.apng',
          blur: true,
          label: '에테르나 GM Tool',
        },
      ],
      background:
        '한국과 일본 운영 인력 10여 명이 게임 지표를 확인하는 BI 대시보드를 개발했습니다. 운영 담당자가 매달 반나절 동안 수동 쿼리로 작성하던 리포트를 서버 데이터로 자동 생성하도록 바꾸었습니다. GM Tool에서는 게임 운영자가 유저 정보를 조회하고 계정 상태와 공지를 관리할 수 있도록 했습니다. 여러 운영 도구를 동시에 개발해야 했기 때문에 공통 기능을 패키지로 분리하는 작업도 함께 진행했습니다.',
      work: [
        {
          title: '운영 지표를 한곳에서 조회',
          description:
            '기본 지표, 매출 상세, 리텐션, 퍼널, 상위 결제 이용자 등 분석 목적에 따라 조회 화면을 분리했습니다.',
          area: '게임 운영 대시보드와 리포트 자동화',
        },
        {
          title: '월간 매출 리포트 자동 생성',
          description:
            '서버 응답을 플랫폼과 항목별로 묶고 ExcelJS로 셀 병합과 서식을 적용한 엑셀 리포트를 생성하도록 구현했습니다.',
          area: '게임 운영 대시보드와 리포트 자동화',
        },
        {
          title: '언어와 권한에 맞춘 화면',
          description:
            '한국어, 일본어, 영어 사전으로 지표와 메뉴를 표시하고, 관리자 권한에 따라 계정 관리 메뉴를 구분했습니다.',
          area: '게임 운영 대시보드와 리포트 자동화',
        },
        {
          title: '운영 서버의 배포 환경 개선',
          description:
            '단일 서버에서 서비스를 운영하는 상황을 고려해 Nginx 리버스 프록시 구성을 제안했습니다. 백엔드 개발자와 협업해 배포 환경 개선에 참여했습니다.',
          area: '게임 운영 대시보드와 리포트 자동화',
        },
        {
          title: '조건별 유저 검색',
          description:
            '서버, 계정 ID, 유저 ID, 닉네임, 계정 상태로 검색하고 결과를 페이지 단위로 조회하도록 구성했습니다.',
          area: '에테르나 GM Tool',
        },
        {
          title: '유저별 운영 기능',
          description:
            '유저별 아이템, 재화, 결제, 멤버십 조회와 닉네임, 상태 변경, 강제 로그아웃 기능을 개별 팝업으로 구성했습니다.',
          area: '에테르나 GM Tool',
        },
        {
          title: '공지 콘텐츠 편집',
          description:
            '공지 목록과 작성, 편집 화면을 분리하고 Tiptap 기반의 콘텐츠 편집기를 적용했습니다. 클라이언트 측 이미지 업로드 처리도 구현해 운영자가 공지 내용을 직접 작성할 수 있도록 했습니다.',
          area: '에테르나 GM Tool',
        },
        {
          title: '운영 도구의 데이터 접근 구조',
          description:
            '게임 서버팀의 부하 분리 요청에 따라, 해당 팀이 작성한 MySQL DB 프로시저를 호출하는 Next.js API Route와 프론트엔드 화면을 구현했습니다.',
          area: '에테르나 GM Tool',
        },
        {
          title: '플랫폼 어드민과 공통 패키지',
          description:
            'shadcn/ui 기반 공통 UI, 인증, 레이아웃을 패키지로 구성했습니다. 관리자 화면용 API와 데이터 구조를 백엔드 개발자와 검토하고, ESLint와 lint-staged로 코드 품질 검사를 자동화했습니다.',
          area: '에테르나 GM Tool',
        },
      ],
      architecture: [],
      links: [],
      caseStudies: [
        {
          title: '기존 엑셀 양식을 유지하면서 월간 리포트 자동화하기',
          problem:
            '운영 담당자가 매달 반나절 동안 수동 쿼리로 리포트를 작성했습니다. 자동화하더라도 플랫폼, 항목별 수치와 기존 양식의 셀 병합, 서식을 그대로 맞춰야 했습니다.',
          decision:
            '서버 데이터를 플랫폼과 항목별로 가공하고 ExcelJS로 기존 양식을 재현했습니다. 운영자가 화면에서 리포트를 생성하고 다운로드할 수 있도록 구성했습니다.',
          result:
            '동일 기간의 수동 리포트와 자동 생성 리포트를 직접 대조해 수치, 셀 병합, 서식이 일치하는지 확인했습니다.',
          area: '게임 BI',
        },
        {
          title: '운영 도구에서 함께 유지할 요소와 개별 로직 구분하기',
          problem:
            '여러 운영 도구와 BI의 디자인, 사용 방식을 일관되게 맞추고, 새 도구마다 인증과 기본 레이아웃을 반복 구성하는 작업을 줄이고자 했습니다.',
          decision:
            '인증, 레이아웃, 공통 UI는 패키지로 분리했습니다. 각 도구에만 필요한 화면과 업무 로직은 개별 프로젝트에 남겨 공통화 범위를 정했습니다.',
          result:
            '새 운영 도구에서는 공통 패키지를 적용한 뒤 해당 도구의 화면과 업무 로직 개발부터 시작할 수 있었습니다.',
          area: '플랫폼 어드민과 공통 패키지',
        },
        {
          title: '게임 서버와 운영 도구의 요청 처리 분리하기',
          problem:
            '게임 서버팀에서 운영 도구의 요청으로 발생하는 게임 서버 부하를 분리해 달라는 요청이 있었습니다.',
          decision:
            '게임 서버팀이 작성한 DB 프로시저를 Next.js API Route에서 호출하는 구조를 적용했습니다. 저는 API Route와 프론트엔드 화면을 구현했습니다.',
          result:
            '운영 요청이 게임 서버를 거치지 않고 Next.js API Route를 통해 DB 프로시저로 전달되도록 연결했습니다.',
          area: '에테르나 GM Tool',
        },
      ],
    },
    scope: [
      '운영 지표 대시보드와 엑셀 리포트 자동 생성 기능을 개발했습니다.',
      '유저, 계정, 공지 관리와 GM Tool의 DB 프로시저 호출을 구현했습니다.',
      '플랫폼 어드민의 공통 UI, 인증, 레이아웃을 패키지로 정리했습니다.',
    ],
    coverage: [
      {
        name: '러브라이브 게임 BI 구축',
        period: '2025.08 ~ 2026.03',
      },
      {
        name: '플랫폼 어드민 및 공통 패키지 개발',
        period: '2025.08 ~ 2026.03',
      },
      {
        name: '에테르나 GM Tool 개발',
        period: '2025.08 ~ 2026.03',
      },
    ],
  },
  {
    no: '05',
    period: '2025.08 ~ 2026.03',
    company: 'VOYAGER, WEB PLATFORM',
    title: '게임 플랫폼과 다국어 웹사이트',
    summary:
      '게임 소개와 회원 서비스를 제공하는 플랫폼 사이트, 기업 소식과 게임 프로젝트를 소개하는 공식 홈페이지를 개발했습니다. 다국어 콘텐츠와 회원가입, 로그인 화면을 구성했습니다.',
    metrics: [
      '데스크톱 LCP 2초 이내',
      '회원 서비스와 게임 소개',
      '한국어, 영어, 일본어',
    ],
    tags: [],
    tone: 'violet',
    image: '/projects/platform-site-original.png',
    animation: '/projects/platform-site.apng',
    detail: {
      category: 'GAME PLATFORM & CORPORATE WEBSITE',
      role: '프론트엔드 1인 담당으로 웹 화면과 다국어 구조를 개발하고, 백엔드 개발자와 회원 API를 연동했습니다.',
      screenshots: [
        {
          image: '/projects/platform-site-original.png',
          animation: '/projects/platform-site.apng',
          label: '보이저 플랫폼 사이트',
        },
        {
          image: '/projects/voyager-archive.png',
          animation: '/projects/voyager-archive.apng',
          label: '보이저 공식 홈페이지',
        },
      ],
      background:
        '게임을 소개하는 페이지와 회원 서비스를 하나의 플랫폼에서 제공하는 웹사이트입니다. 게임 콘텐츠를 탐색한 뒤 회원가입과 로그인으로 이어질 수 있도록 구성했습니다. 공식 홈페이지는 워드프레스 기반 사이트의 성능과 확장성 문제를 개선하기 위해 직접 리뉴얼을 제안했습니다. 기술 선정부터 Next.js 기반 재구축과 배포까지 담당했습니다.',
      work: [
        {
          title: 'ETERNA AI 게임 소개',
          description:
            '영상 배경, Motion 애니메이션과 Swiper를 활용해 게임의 메인 화면과 소개 섹션을 구성했습니다.',
          area: '보이저 플랫폼 사이트',
        },
        {
          title: '회원 서비스 화면',
          description:
            '회원가입, 로그인, 비밀번호 찾기를 별도 경로로 구성하고 회원 API와 연결하는 구조를 마련했습니다.',
          area: '보이저 플랫폼 사이트',
        },
        {
          title: '언어별 경로와 이용 안내',
          description:
            '한국어, 일본어, 영어 경로와 사전, 페이지별 메타데이터를 적용하고 약관, 개인정보처리방침, 게임 이용 안내를 구성했습니다.',
          area: '보이저 플랫폼 사이트',
        },
        {
          title: 'Unity 하이브리드 앱과 반응형 화면',
          description:
            'Unity 애플리케이션과 결합되는 하이브리드 앱 구조에 맞춰 웹 화면을 구현했습니다. 주요 해상도별 반응형 화면을 구성하고 사용자 경험을 점검했습니다.',
          area: '보이저 플랫폼 사이트',
        },
        {
          title: '워드프레스에서 Next.js로 재구축',
          description:
            '기존 템플릿의 제약과 성능 문제를 검토하고 Next.js App Router와 RSC 기반 서버 렌더링 구조로 전환했습니다. 디자이너와 디자인 토큰 기반 컴포넌트 체계를 적용하고, 다국어, 반응형, 크로스 브라우징에 대응했습니다.',
          area: '보이저 공식 홈페이지',
        },
        {
          title: '영상과 스크롤을 활용한 메인 화면',
          description:
            '배경 영상, 스크롤 위치에 따른 요소 노출, 게임 캐러셀을 조합해 주요 프로젝트를 소개하는 화면을 구성했습니다.',
          area: '보이저 공식 홈페이지',
        },
        {
          title: '다국어 콘텐츠 구조',
          description:
            '언어별 경로와 사전을 사용해 한국어, 영어, 일본어 콘텐츠를 제공하고, 메타데이터와 사이트맵을 구성했습니다.',
          area: '보이저 공식 홈페이지',
        },
        {
          title: '게임, 뉴스, 채용 페이지',
          description:
            '자체 IP와 공동 개발 게임을 구분한 갤러리, 보도자료와 IR 자료, 채용 안내를 개별 경로로 구성했습니다.',
          area: '보이저 공식 홈페이지',
        },
      ],
      architecture: [],
      links: [
        {
          label: '공식 홈페이지 아카이브',
          href: 'https://web.archive.org/web/20260223175931/https://www.voyagergames.gg/ko',
        },
      ],
      caseStudies: [
        {
          title: '서버 렌더링으로 초기 JavaScript 부담 줄이기',
          problem:
            '워드프레스 홈페이지의 성능과 템플릿 확장성에 제약이 있었습니다. 초기 로딩을 개선하면서 영상과 캐러셀, 다국어 콘텐츠를 함께 제공해야 했습니다.',
          decision:
            '클라이언트에서 실행되는 JavaScript를 줄이기 위해 Next.js App Router와 RSC 기반 서버 렌더링 구조를 선택했습니다. 인터랙션이 필요한 Motion, Swiper 영역은 클라이언트에서 동작하도록 구성했습니다.',
          result:
            '재구축 후 Lighthouse 성능 점수는 40~50점대에서 80점 후반대로 개선됐고 데스크톱 LCP는 2초 이내였습니다. Swiper의 클라이언트 JavaScript 로딩 부담은 RSC 전환만으로 크게 개선되지 않았습니다.',
          area: '보이저 공식 홈페이지',
        },
      ],
    },
    scope: [
      '워드프레스 홈페이지의 리뉴얼을 제안하고 Next.js 재구축과 배포를 맡았습니다.',
      '게임 소개, 회원 서비스와 언어별 콘텐츠, 이용 안내를 구현했습니다.',
      '디자인 토큰 기반 UI와 Unity 하이브리드 앱, 반응형 화면에 대응했습니다.',
    ],
    coverage: [
      {
        name: '자사 홈페이지 리뉴얼',
        period: '2025.08 ~ 2026.03',
      },
      {
        name: '플랫폼 홈페이지 개발',
        period: '2025.08 ~ 2026.03',
      },
    ],
  },
]

export const projects: Project[] = [...primaryProjects, ...additionalProjects]

export const experiences: Experience[] = [
  {
    period: '2026.06.01 ~ 현재',
    company: '주식회사 티모웍스',
    description:
      'HR 솔루션 도입 비용 부담을 줄이기 위해 사내 근태관리 도구를 개발한 뒤, 외부 기업도 이용할 수 있는 SaaS로 확장했습니다. 회사의 일본 시장 진출 방향에 맞춰 한국과 일본을 지원하며, 기업 관리자 웹, 플랫폼 운영자 웹, 직원용 앱, 백엔드 개발과 배포를 담당했습니다.',
  },
  {
    period: '2025.08 ~ 2026.04',
    company: '주식회사 보이저',
    description:
      '프론트엔드 개발자 1인으로 백엔드 개발자 2인과 협업하며 자사 홈페이지, 게임 BI, 플랫폼 어드민, GM Tool과 플랫폼 홈페이지 등 5개 프로젝트를 병행했습니다.',
  },
  {
    period: '2023.11 ~ 2025.08',
    company: '주식회사 프레시지',
    description:
      '커머스 재구축, 사내 시스템 신규 개발, 기존 서비스 운영 등 7개 프로젝트를 수행했습니다. 허닭몰은 가입 회원 100만 이상, 최근 1년간 주문, 로그인 등 활동 기준 활성 사용자 약 20만 규모였습니다.',
  },
  {
    period: '2017.10 ~ 2023.05',
    company: '주식회사 알리는사람들',
    description:
      '기업용 문자, 카카오 메시지 서비스 ALIGO의 프론트엔드 개발과 운영을 담당했습니다. 기존 서비스의 기능 개선과 Vue 점진 도입, 고객용 API 연동 패키지 개발을 수행하고, 사내 시스템의 기획과 풀스택 개발도 담당했습니다.',
  },
  {
    period: '2016.09 ~ 2017.06',
    company: '주식회사 장플레이스랩',
    description:
      '웹 에이전시에서 주차관리 서비스와 기업 홈페이지의 프론트엔드 개발을 담당했습니다.',
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
  {
    group: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    group: 'Backend',
    items: ['NestJS', 'Node.js', 'Express.js', 'Koa.js'],
  },
  {
    group: 'Database',
    items: ['PostgreSQL', 'Prisma', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Tools & Platforms',
    items: [
      'pnpm',
      'Turborepo',
      'Docker',
      'GitHub Actions',
      'AWS',
      'S3',
      'CloudFront',
      'Nginx',
      'Vercel',
    ],
  },
  {
    group: 'Testing & UI',
    items: ['Playwright', 'Vitest', 'Storybook', 'Chromatic', 'shadcn/ui'],
  },
  {
    group: 'AI Development',
    items: ['Claude Code', 'Codex', 'AGENTS.md', 'Review Agents', 'Skills'],
  },
]
