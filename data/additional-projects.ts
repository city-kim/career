import type { Project } from './portfolio'

export const additionalProjects: Project[] = [
  {
    slug: 'fresheasy-business-systems',
    no: '05',
    period: '2023.11 ~ 2024.11',
    company: 'FRESHEASY · BUSINESS SYSTEMS',
    title: '프레시지 사내 시스템과 쇼핑몰 운영',
    summary:
      '프레시지에서 일정 관리 도구 PDP, 데이터 검증용 FRAME, 물류 현장에서 쓰는 WMS PDA를 개발했습니다. HD마켓과 기업 사이트의 유지보수도 맡았습니다.',
    scope: [
      'PDP의 달력을 직접 만들고 Webpack으로 빌드 환경을 구성했습니다.',
      'FRAME의 차트·테이블을 개발하고, WMS PDA의 입력 처리와 개발 가이드를 정리했습니다.',
      'HD마켓의 상품 정렬·가입·결제 기능을 고치고 기업 사이트를 유지보수했습니다.',
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
      role: 'PDP는 설계와 프론트엔드 개발을 혼자 맡았습니다. FRAME에서는 차트와 API 연동을, WMS PDA에서는 개발 가이드 작성과 기존 코드 수정을 담당했습니다. 운영 중인 쇼핑몰과 기업 사이트의 기능도 개선했습니다.',
      background:
        '허닭몰 외에도 사내 여러 팀에서 쓰는 도구를 개발했습니다. 일정 관리, 사업 검증, 물류 작업처럼 용도가 달랐습니다. 새 프로젝트를 개발하면서 HD마켓과 기업 사이트에서 발생하는 오류도 고쳤습니다.',
      work: [
        {
          area: 'PDP · 2024.01 ~ 2024.03',
          title: '일정 관리 시스템 설계와 달력 구현',
          description:
            '팀 일정과 업무를 관리하는 시스템을 설계하고 프론트엔드를 개발했습니다. 달력은 직접 구현해 렌더링 성능을 개선했고, 빌드에는 Webpack을 사용했습니다. API 설계와 DB 구조 검토에도 참여했습니다.',
        },
        {
          area: 'FRAME · 2024.10 ~ 2024.11',
          title: '비즈니스 검증을 위한 MVP 구축',
          description:
            '2개월 안에 MVP를 만들었습니다. React, TypeScript, Chart.js로 데이터를 조회하는 차트와 테이블을 개발하고, 백엔드 개발자와 API 응답과 연동 방식을 검토했습니다.',
        },
        {
          area: 'WMS PDA · 2024.03 ~ 2024.04',
          title: '물류 작업 화면의 개발 기준과 입력 UX 개선',
          description:
            'PDA 프로젝트의 프론트엔드 구조와 개발 가이드를 작성했습니다. 가이드에 맞춰 기존 코드를 수정하고, 물류 작업자가 값을 입력할 때의 동작과 오류 처리를 다듬었습니다.',
        },
        {
          area: 'HD마켓 · 2023.11 ~ 2024.05',
          title: '상품 탐색과 회원가입 과정 개선',
          description:
            '상품 정렬 기능을 고치고 회원가입 단계를 줄였습니다. 처음 불러오는 이미지가 너무 많지 않도록 지연 로딩을 적용하고, 쓰지 않는 API와 기능은 정리했습니다.',
        },
        {
          area: 'HD마켓 · 2023.11 ~ 2024.05',
          title: '선물 결제와 주문서 오류 대응',
          description:
            '선물 결제 과정을 개선하고, 주문서 오류의 발생 조건을 재현하고 수정했습니다.',
        },
        {
          area: '기업 사이트 · 2023.11 ~ 2024.05',
          title: '기업·채용 관련 사이트 유지보수',
          description:
            'corp.fresheasy와 jobssystem의 기능을 수정하고 디자인을 개편했습니다. Vanilla JS, jQuery, PHP로 작성된 코드를 리팩토링하고 렌더링 성능도 개선했습니다.',
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
    slug: 'alipeople-internal-tools',
    no: '06',
    period: '2021.11 ~ 2023.03',
    company: 'ALIPEOPLE · INTERNAL TOOLS',
    title: '사내 KPI 대시보드와 헤이고래',
    summary:
      '사내 KPI 대시보드와 칭찬 플랫폼 헤이고래를 기획하고 개발했습니다. 대시보드에서는 서비스·상담 지표를 조회하고, 헤이고래에서는 Slack으로 주고받은 칭찬을 집계합니다.',
    scope: [
      'AARRR·HEART·CS 지표를 조회하는 대시보드와 공통 UI를 만들었습니다.',
      'Koa.js와 MySQL로 API를 만들고 Google 계정 로그인을 연결했습니다.',
      'Slack에서 받은 칭찬을 집계하고 Socket.io로 화면에 실시간 반영했습니다.',
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
      role: '두 도구 모두 기획부터 프론트엔드, 백엔드 API, 데이터베이스 설계까지 직접 맡았습니다.',
      background:
        '서비스 이용과 고객 상담 현황을 볼 수 있는 대시보드가 필요했습니다. 별도로, Slack에서 동료에게 보낸 칭찬을 모아 볼 수 있는 헤이고래도 만들었습니다.',
      work: [
        {
          area: 'KPI 대시보드 · 2022.07 ~ 2023.03',
          title: '서비스·고객 상담 지표 시각화',
          description:
            'AARRR, HEART, CS 지표를 조회하는 대시보드를 기획하고 개발했습니다. Vue 3, TypeScript, Pinia를 사용했고, 공통 컴포넌트는 Atomic Design을 기준으로 나눴습니다. Jest로 테스트 코드도 작성했습니다.',
        },
        {
          area: 'KPI 대시보드 · 2022.07 ~ 2023.03',
          title: '로그인과 데이터 API 직접 개발',
          description:
            'Koa.js와 MySQL로 RESTful API를 만들었습니다. 코드는 Routes, Controllers, Services로 나누고, 로그인에는 Google OAuth 2.0을 사용했습니다.',
        },
        {
          area: '헤이고래 · 2021.11 ~ 2022.01',
          title: 'Slack 기반 칭찬 집계와 실시간 화면',
          description:
            '헤이고래는 Node.js, Express.js, MongoDB로 개발했습니다. Slack Bot API와 Webhook으로 칭찬 횟수를 집계하고, Socket.io로 웹 화면에 실시간으로 반영했습니다.',
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
