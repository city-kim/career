import type { Project } from './portfolio'

export const additionalProjects: Project[] = [
  {
    no: '05',
    period: '2023.11 ~ 2024.11',
    company: 'FRESHEASY · BUSINESS SYSTEMS',
    title: '프레시지 사내 업무 시스템과 커머스 운영 개선',
    summary:
      '프레시지에서 일정 관리 시스템 PDP, 데이터 검증용 FRAME MVP, 물류 작업용 WMS PDA를 개발하고 개선했습니다. HD마켓과 기업 사이트의 유지보수도 담당하며 상품 탐색, 가입, 결제와 업무 처리 화면을 다듬었습니다.',
    scope: [
      'PDP의 달력을 직접 구현하고 프론트엔드·빌드 환경을 구성했습니다.',
      'FRAME의 차트·테이블 UI와 WMS PDA의 개발 가이드·입력 처리를 정리했습니다.',
      'HD마켓의 상품 정렬·가입·결제와 기업 사이트의 기능·코드 구조를 개선했습니다.',
    ],
    metrics: [
      'PDP 프론트엔드 전담',
      'FRAME MVP 2개월 내 구축',
      '물류·커머스 운영 개선',
    ],
    tags: ['React', 'TypeScript', 'Chart.js', 'Webpack', 'jQuery'],
    tone: 'blue',
    image: null,
    detail: {
      category: 'BUSINESS SYSTEMS & COMMERCE OPERATIONS',
      role: 'PDP는 설계와 프론트엔드 개발을 전담했습니다. FRAME에서는 데이터 시각화와 API 연동을 맡았고, WMS PDA와 기존 서비스에서는 개발 가이드 수립·리팩토링·기능 개선을 수행했습니다.',
      background:
        '허닭몰 재구축 외에도 팀의 일정과 업무를 관리하는 도구, 비즈니스 검증용 프로토타입, 물류 현장의 PDA 화면을 다뤘습니다. 신규 개발과 함께 운영 중인 HD마켓·기업 사이트의 불편과 오류를 개선하는 작업을 병행했습니다.',
      work: [
        {
          area: 'PDP · 2024.01 ~ 2024.03',
          title: '일정 관리 시스템 설계와 달력 구현',
          description:
            '팀 일정과 업무를 관리하는 시스템을 설계하고 프론트엔드를 전담 개발했습니다. 달력 기능은 직접 구현해 렌더링 성능을 개선했으며, Webpack 통합 빌드 환경을 구성했습니다. API 설계에 참여하고 DB 구조도 함께 검토했습니다.',
        },
        {
          area: 'FRAME · 2024.10 ~ 2024.11',
          title: '비즈니스 검증을 위한 MVP 구축',
          description:
            '2개월 안에 MVP 프로토타입을 구축했습니다. React·TypeScript·Chart.js로 복잡한 데이터를 확인할 수 있는 차트와 테이블 화면을 만들고, 백엔드 개발자와 API 효율성과 연동 구조를 검토했습니다.',
        },
        {
          area: 'WMS PDA · 2024.03 ~ 2024.04',
          title: '물류 작업 화면의 개발 기준과 입력 UX 개선',
          description:
            'PDA 신규 프로젝트의 프론트엔드 아키텍처 초안과 개발 가이드를 작성했습니다. 가이드와 다르게 구성된 기존 코드를 리팩토링하고, 물류 작업자의 입력 과정과 오류 처리 기준을 정리했습니다.',
        },
        {
          area: 'HD마켓 · 2023.11 ~ 2024.05',
          title: '상품 탐색과 회원가입 과정 개선',
          description:
            '상품 정렬 기능을 개선하고 회원가입 단계를 줄였습니다. 이미지에는 지연 로딩을 적용해 초기 로딩 부담을 줄이고, 사용하지 않는 API와 기능을 정리했습니다.',
        },
        {
          area: 'HD마켓 · 2023.11 ~ 2024.05',
          title: '선물 결제와 주문서 오류 대응',
          description:
            '선물 결제 과정을 개선하고 주문서에서 발생하는 오류의 재현 사례를 정리했습니다. 운영 중 발생하는 문제를 재현하고 확인할 수 있도록 결제 관련 유지보수 작업을 수행했습니다.',
        },
        {
          area: '기업 사이트 · 2023.11 ~ 2024.05',
          title: '기업·채용 관련 사이트 유지보수',
          description:
            'corp.fresheasy와 jobssystem 사이트의 기능 개선과 디자인 리뉴얼을 담당했습니다. Vanilla JS·jQuery·PHP 기반의 기존 코드 구조를 리팩토링하고 렌더링 성능을 개선했습니다.',
        },
      ],
      architecture: [
        'PDP: React · Tailwind CSS · Webpack',
        'FRAME: React · TypeScript · Chart.js · SCSS',
        'WMS PDA: Vanilla JS · jQuery · CSS',
        'HD마켓: Laravel · jQuery · CSS',
        '기업 사이트: Vanilla JS · jQuery · PHP · CSS',
      ],
    },
  },
  {
    no: '06',
    period: '2021.11 ~ 2023.03',
    company: 'ALIPEOPLE · INTERNAL TOOLS',
    title: '알리는사람들 KPI 대시보드와 사내 칭찬 플랫폼',
    summary:
      '서비스와 고객 상담 지표를 확인하는 KPI 대시보드, Slack에서 주고받은 칭찬을 집계하는 사내 플랫폼 헤이고래를 기획하고 개발했습니다. 화면뿐 아니라 로그인, API, 데이터베이스와 실시간 연동까지 직접 구현했습니다.',
    scope: [
      'AARRR·HEART·CS 지표를 조회하는 대시보드와 공통 컴포넌트를 만들었습니다.',
      'Koa.js·MySQL 기반 API와 Google OAuth 2.0 로그인을 구현했습니다.',
      'Slack Bot·Webhook으로 칭찬을 집계하고 Socket.io로 웹 화면에 반영했습니다.',
    ],
    metrics: [
      '기획부터 풀스택 개발',
      '지표 조회·인증·API 구현',
      'Slack 실시간 연동',
    ],
    tags: ['Vue 3', 'TypeScript', 'Koa.js', 'MySQL', 'Socket.io'],
    tone: 'mint',
    image: null,
    detail: {
      category: 'KPI DASHBOARD & TEAM PLATFORM',
      role: '두 사내 도구의 기획과 풀스택 개발을 담당했습니다. 프론트엔드 컴포넌트, 백엔드 API와 데이터 저장 구조를 직접 설계하고 구현했습니다.',
      background:
        '서비스 이용과 고객 상담 현황을 확인하는 대시보드, 동료 간 칭찬을 기록하는 사내 도구를 만들었습니다. 각각 데이터를 조회하는 업무와 메신저에서 이루어지는 소통을 웹 화면으로 연결하는 작업이었습니다.',
      work: [
        {
          area: 'KPI 대시보드 · 2022.07 ~ 2023.03',
          title: '서비스·고객 상담 지표 시각화',
          description:
            'AARRR와 HEART 프레임워크, CS 측정 지표를 확인할 수 있는 대시보드를 기획하고 개발했습니다. Vue 3·TypeScript·Pinia로 화면을 구성하고, Atomic Design에 따라 공통 컴포넌트를 설계했습니다. Jest 기반 테스트 코드도 작성했습니다.',
        },
        {
          area: 'KPI 대시보드 · 2022.07 ~ 2023.03',
          title: '로그인과 데이터 API 직접 개발',
          description:
            'Koa.js와 MySQL로 RESTful API를 구현했습니다. Routes·Controllers·Services로 역할을 나누고, Google OAuth 2.0 기반 로그인까지 포함한 백엔드 시스템을 구축했습니다.',
        },
        {
          area: '헤이고래 · 2021.11 ~ 2022.01',
          title: 'Slack 기반 칭찬 집계와 실시간 화면',
          description:
            '사내 칭찬 플랫폼을 기획하고 Node.js·Express.js·MongoDB로 개발했습니다. Slack Bot API와 Webhook으로 메신저의 칭찬 횟수를 집계하고, Socket.io를 사용해 웹 화면에 실시간으로 동기화했습니다.',
        },
      ],
      architecture: [
        'KPI 화면: Vue 3 · TypeScript · Pinia · Tailwind CSS · Jest',
        'KPI API: Koa.js · MySQL · Google OAuth 2.0',
        '헤이고래: Node.js · Express.js · MongoDB · PM2',
        '실시간 연동: Slack Bot API · Webhook · Socket.io',
      ],
    },
  },
]
