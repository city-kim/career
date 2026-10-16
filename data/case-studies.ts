import type { CaseStudy } from './portfolio'

// Statements come from the existing portfolio, project-sources.md, and the owner's clarifications.
// Unconfirmed measurements and retrospective decision rationales are omitted.
export const caseStudies: Record<string, CaseStudy> = {
  'heodak-commerce': {
    label: '허닭몰',
    headline: '운영자가 직접 편집하는 기획전',
    teaser:
      '개발팀에 요청하고 2~3일 기다리던 작업을 운영팀이 직접 처리할 수 있게 했습니다.',
    before:
      '홈이나 기획전을 바꾸려면 개발팀에 요청하고 2~3일 기다려야 했습니다. 게시도 정해진 시간에 직접 했습니다.',
    after:
      '운영자가 템플릿에 모듈을 배치하고 게시 시간을 예약할 수 있는 편집 도구를 만들었습니다.',
    focus:
      '고객용 쇼핑몰과 운영자·판매자 앱에서 쓰는 공통 코드를 정리하고, 전시 편집 도구를 개발했습니다.',
    imageNote:
      '원본 쇼핑몰 코드를 로컬에서 실행한 화면입니다. 상세 페이지에는 전시 편집 화면도 있습니다.',
    decision: [
      {
        title: '세 앱의 공통 코드를 패키지로 분리',
        description:
          '고객용 client, 운영자용 master, 판매자용 seller 앱을 Turborepo와 pnpm workspace로 한 저장소에서 관리했습니다. 세 앱에서 쓰는 UI, 유틸리티, 타입과 설정은 공통 패키지로 분리했습니다.',
      },
      {
        title: '편집 중인 데이터는 본 화면에서 관리',
        description:
          '본 화면에서 선택한 컴포넌트를 임시 상태에 담고 팝업을 엽니다. 아직 서버에 저장하지 않은 컴포넌트도 편집할 수 있습니다. 팝업 주소와 BroadcastChannel 이름에는 pageId를 넣어 어느 화면의 메시지인지 구분했습니다.',
      },
      {
        title: '팝업의 ready 신호를 받은 뒤 초기값 전달',
        description:
          '팝업이 먼저 ready를 보내고, 본 화면은 신호를 받은 뒤 초기값을 전달합니다. 팝업에서 수신 준비를 마친 다음 데이터를 보내도록 한 순서입니다. 송수신 코드는 공통 훅으로 분리했고, 템플릿의 모듈 설정에도 같은 방식을 썼습니다.',
      },
      {
        title: '팝업의 완료와 서버 저장을 별도로 처리',
        description:
          '팝업은 자체 상태로 편집하다가 완료를 누를 때 send 메시지와 수정 결과를 보냅니다. 본 화면은 기존 항목은 id로, 새 항목은 uiId로 찾아 바꿉니다. 이때는 편집 상태만 바뀌고, 서버 저장은 본 화면에서 createModule 또는 updateModule을 호출할 때 따로 처리합니다.',
      },
      {
        title: '컴포넌트 확인과 테스트 환경 설정',
        description:
          'Storybook과 Chromatic으로 컴포넌트 모양의 변화를 확인할 수 있게 했습니다. 기능과 사용자 시나리오를 테스트하는 환경에는 Vitest와 Playwright를 사용했습니다.',
      },
    ],
    flow: {
      title: '팝업에서 수정한 내용이 저장되는 순서',
      steps: [
        '본 화면에서 임시 상태 준비',
        '팝업의 ready 신호 후 초기값 전달',
        '완료를 누르면 수정 결과 전송',
        '본 화면에서 id·uiId로 항목 교체',
        '별도 저장 동작으로 서버에 반영',
      ],
      caption:
        'BroadcastChannel은 두 화면 사이의 데이터 전달에 사용합니다. 팝업에서 완료를 눌러도 바로 서버에 저장되지는 않습니다.',
    },
  },
  'game-operations': {
    label: '보이저',
    headline: '월간 엑셀 리포트 자동화',
    teaser:
      '매달 반나절 걸리던 수작업을 대신해, 서버 데이터로 엑셀 파일을 만드는 기능을 개발했습니다.',
    before:
      '운영 담당자가 직접 쿼리를 실행해 월간 리포트를 작성했습니다. 매달 반나절 정도 걸리는 일이었습니다.',
    after:
      '서버 데이터를 받아 엑셀 서식에 맞게 정리하고, 파일로 내려받을 수 있게 했습니다.',
    focus:
      '게임 지표를 조회하는 BI, 유저 정보를 관리하는 GM Tool과 공통 UI·인증 코드를 맡았습니다.',
    imageNote:
      '원본 화면에 테스트 데이터를 넣어 촬영했습니다. 표시된 수치는 실제 실적이 아닙니다.',
    decision: [
      {
        title: '서버 데이터를 엑셀 서식에 맞게 정리',
        description:
          '서버 응답을 플랫폼과 항목별로 나눈 뒤, ExcelJS로 셀을 병합하고 서식을 적용했습니다. 운영자는 대시보드에서 지표를 확인하고 월간 리포트를 내려받을 수 있습니다.',
      },
      {
        title: '여러 운영 도구에서 쓰는 코드를 공통화',
        description:
          '여러 운영 도구에서 함께 쓰는 UI와 인증, 레이아웃을 공통 패키지로 만들었습니다. shadcn/ui 컴포넌트도 여기에 포함했고, 새 어드민을 만들 때 이 패키지를 가져다 썼습니다.',
      },
      {
        title: '백엔드 개발자와 API·배포 환경 검토',
        description:
          '백엔드 개발자 두 명과 화면에 필요한 API와 데이터 구조를 검토했습니다. 한 서버에서 서비스를 운영하고 있어 Nginx 리버스 프록시 구성을 제안하고, 배포 환경을 함께 정리했습니다.',
      },
    ],
    flow: {
      title: '엑셀 리포트를 만드는 순서',
      steps: [
        '서버 데이터 조회',
        '플랫폼·항목별 분류',
        'ExcelJS로 셀 병합·서식 적용',
        '엑셀 파일 다운로드',
      ],
      caption: '데이터 분류부터 셀 병합과 서식 적용까지 코드로 처리합니다.',
    },
  },
  aligo: {
    label: '알리는사람들',
    headline: '알리고 개발·운영 5년 8개월',
    teaser:
      '문자·카카오톡 발송 서비스를 운영하면서 Vue.js를 도입하고, 고객용 npm 패키지를 개발했습니다.',
    before:
      'PHP·jQuery로 된 서비스를 유지보수하면서 새 기능도 개발해야 했습니다.',
    after:
      '팀의 학습 부담을 고려해 Vue.js를 조금씩 도입했습니다. 고객이 API 연동에 쓸 npm 패키지도 개발했습니다.',
    focus:
      '기존 서비스의 유지보수와 새 기능 개발을 함께 맡았습니다. V2 개발 때는 PM도 겸했습니다.',
    imageNote:
      '2026년 9월에 촬영한 공개 사이트입니다. 재직 당시 화면과 다를 수 있습니다.',
    decision: [
      {
        title: '기존 서비스를 운영하면서 Vue.js 도입',
        description:
          '기존 PHP·jQuery 기능은 유지보수하고, 새 화면과 기능에 Vue.js를 조금씩 적용했습니다. 팀이 새 기술을 익히는 부담도 고려했습니다.',
      },
      {
        title: '고객이 쓸 수 있는 API 연동 패키지 개발',
        description:
          '문자·카카오톡 발송 API를 연동하는 npm 패키지를 직접 개발하고 배포했습니다.',
      },
      {
        title: 'V2에서는 개발과 PM을 함께 담당',
        description:
          'Vue 3·TypeScript를 사용하는 V2에서 렌더링, 백그라운드 파일 업로드, 실시간 알림을 구현했습니다. PM으로는 요구사항과 개발 범위를 정리하고, 작업별 일정을 잡아 진행 상황을 확인했습니다.',
      },
    ],
    flow: {
      title: '기존 서비스 운영과 V2 개발',
      steps: [
        'PHP·jQuery 기능 유지보수',
        '새 화면에 Vue.js 적용',
        'Vue 3·TypeScript로 V2 개발',
      ],
      caption:
        '기존 서비스 운영과 새 기능 개발을 병행했습니다. V2에서는 개발 외에 일정 관리도 맡았습니다.',
    },
  },
}
