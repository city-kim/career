# 프로젝트 캡처와 설명의 근거

확인일: 2026-09-09.

로컬 프로젝트 캡처는 제공된 원본 컴포넌트와 CSS를 그대로 실행한 결과입니다. 임의로 디자인한 샘플 페이지와 이미지는 삭제했습니다. 원본 폴더는 변경하지 않았습니다.

## 원본 UI 보존 검증

원본과 `.capture` 안의 실행 사본에 있는 `.tsx` 및 `.css` 파일의 바이트를 비교했습니다.

| 프로젝트                         | 비교한 UI 파일 | 변경된 UI 파일 |
| -------------------------------- | -------------: | -------------: |
| 보이저 플랫폼 어드민 (이전 캡처) |             70 |              0 |
| 보이저 플랫폼 사이트             |             94 |              0 |
| 허닭몰 FO                        |            363 |              0 |
| 보이저 게임 BI                   |             50 |              0 |
| 허닭몰                           |          1,390 |              0 |

`.capture/`는 버전 관리와 포트폴리오 빌드에서 제외합니다. 원본 환경 변수와 비밀 정보는 복사하지 않았습니다.

## 허닭몰

- 원본: `C:/repo/heodakmall`
- 캡처: `public/projects/heodak-original.png`
- 원본 경로: `/display-manager/template`, 템플릿을 선택한 편집 상태.
- 원본 Next.js 14, UI 패키지, Tailwind 설정, 기존 MSW와 로그인 테스트 데이터를 사용했습니다. UI 파일은 수정하지 않았습니다.
- 실행용 환경 변수만 로컬 사본에 설정했습니다.
- FO 캡처: `public/projects/heodak-fo-original.png`, 원본 `apps/client`의 `/` 홈 화면. 기존 MSW 테스트 데이터와 상품 이미지를 사용했습니다.
- 상세 팝업에서 FO 고객용 쇼핑몰과 BO 전시 템플릿 관리 화면을 함께 표시합니다.
- 설명 근거: `apps/master/src/types/display/template.ts`, `types/display/index.ts`, `app/display-manager/template/components/detail/index.tsx` 및 모노레포 설정.

## 보이저 플랫폼 사이트

- 원본: `C:/Users/김찬태/Downloads/code/project/voyagerkr/platform-frontend-main`
- 캡처: `public/projects/platform-site-original.png`
- 원본 경로: `/ko/eterna-ai`. 원본의 해당 게임 소개 문구는 일본어로 표시됩니다.
- 외부 CDN의 배경 영상과 다운로드 버튼 이미지가 로드되지 않는 상태를 그대로 캡처했으며 팝업에도 명시했습니다.
- UI와 CSS는 변경하지 않았고, 실행 사본의 Next.js 개발 표시만 비활성화했습니다.
- 설명 근거: `src/app/[lang]/(public)/eterna-ai`, `member`, `customer`, `src/dictionaries`, `src/proxy.ts`.

## 보이저 플랫폼 어드민 (이전 캡처 기록)

- 원본: `C:/Users/김찬태/Downloads/code/project/voyagerkr/platform-frontend-admin`
- 캡처: `public/projects/platform-original.png`
- 원본 경로: `/ko/permission/company`.
- 원본 Next.js, React, shadcn/ui 컴포넌트 및 CSS를 그대로 사용했습니다.
- 운영 서버가 없어 실행 사본의 proxy와 API 응답만 로컬 캡처용으로 교체했습니다. 예시 회사명에 `(예시)`를 표시했습니다.
- 설명 근거: `src/layout/sidebar.tsx`, `src/types/permission`, `src/lib/queries`, 기존 포트폴리오의 공통 패키지 개발 경험.

## 에테르나 GM Tool 추가

- 원본: `C:/Users/김찬태/Downloads/code/project/voyagerkr/platform-frontend-eterna`
- 설명 근거: `src/app/[lang]/(private)/user-list/client.tsx`, `user-list/_components`, `notice`, `src/types/user.ts`.
- 플랫폼 사이트와 별도 프로젝트로 추가했습니다. 실행을 다시 시도해 원본 유저 검색, 닉네임·상태 관리 팝업을 캡처했습니다. 운영 서버 대신 로컬 테스트 유저 4명을 사용했습니다.
- 캡처: `public/projects/gm-original.png`, `public/projects/gm.apng`. 원본 UI 파일은 변경하지 않았으며 실행 사본의 proxy, 사용자 조회 API, 개발 표시 설정만 조정했습니다.
- 플랫폼 카드의 이미지 로딩 실패는 Next.js 이미지 변환 경로를 거치지 않고 저장된 PNG를 직접 표시하도록 수정했습니다. 전체 카드 이미지가 브라우저에서 정상 로드되는 것을 확인했습니다.

## 보이저 게임 BI 캡처

- 원본: `C:/Users/김찬태/Downloads/code/frontend/frontend`
- 캡처: `public/projects/bi-original.png`
- 원본 경로: `/ko/sales`.
- 원본 Google Charts와 카드 구성, 언어 선택, 다운로드 UI, 스타일을 그대로 사용했습니다.
- 운영 서버가 없어 실행 사본의 proxy와 API 연결만 로컬 테스트 응답으로 교체했습니다. 원본 응답 타입에 맞춘 가상 수치이며 실제 실적이 아닙니다.
- 설명 근거: `src/layout/sidebar.tsx`, `src/app/(private)/[lang]/sales/client.tsx`, `card-bar.tsx`, `card-pie.tsx`.

## 보이저 공식 홈페이지

- 원본: `C:/Users/김찬태/Downloads/code/project/voyagerkr/official-site`
- 캡처: `public/projects/voyager-archive.png`
- 사용자가 제공한 [2026-02-23 아카이브](https://web.archive.org/web/20260223175931/https://www.voyagergames.gg/ko)의 실제 브라우저 화면입니다.
- 설명은 원본 메인 화면, 언어별 사전, 게임·뉴스·채용 경로를 확인해 작성했습니다.
- 프로젝트 기간은 기존 보이저 프로젝트 기간을 사용했습니다. 개별 착수·완료일이 별도로 검증된 것은 아닙니다.

## 알리고

- 캡처: `public/projects/aligo.png`
- [알리고 공개 사이트](https://smartsms.aligo.in)의 2026-09-09 실제 브라우저 화면입니다.
- 현재 사이트는 재직 당시 UI와 다를 수 있음을 팝업에 표시했습니다.
- 담당 작업은 기존 경력에 기재된 문자·카카오톡 서비스 및 사내 대시보드 개발에 한정했습니다. 소스가 제공되지 않아 구체적인 프레임워크는 추정하지 않았습니다.

## 포트폴리오 구성

### APNG 캡처

원본 브라우저 화면을 여러 프레임으로 캡처한 뒤 APNG로 인코딩했습니다. 프레임 사이에 새로운 화면을 합성하지 않았습니다. 브라우저 캡처 간격이 일정하지 않아 실시간 영상과 같은 프레임 속도를 보장하지 않으며, 스크롤과 편집 화면은 주요 상태를 보여 주는 짧은 반복 시퀀스입니다.

| 파일                   | 캡처한 동작                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `platform-site.apng`   | 원본 로고 애니메이션 (외부 영상·버튼 이미지 로딩 제한 유지) |
| `gm.apng`              | 테스트 유저 목록과 닉네임·상태 팝업                         |
| `heodak-fo.apng`       | 홈 배너 전환                                                |
| `heodak-bo.apng`       | 전시 템플릿 선택 전환                                       |
| `bi.apng`              | 매출 차트 화면 스크롤                                       |
| `voyager-archive.apng` | 원본 아카이브의 메인·게임 섹션 스크롤                       |
| `aligo.apng`           | 공개 사이트의 메인 화면 스크롤                              |

카드는 정지 PNG로 표시하고, 상세 페이지에서 사용자가 동작 보기를 선택할 때 APNG를 재생합니다. 재생을 멈추면 기존 PNG를 표시하며, 시스템의 동작 줄이기 설정이 활성화되면 재생을 중단합니다. 원본 프레임과 인코딩 도구는 `.capture/frames` 및 `.capture/encode-apng.py`에 보관하며 배포하지 않습니다.

- 설명 및 이미지 경로: `data/portfolio.ts`
- 프로젝트 상세: `app/projects/[slug]/page.tsx`
- 캡처 재생과 확대: `components/portfolio/project-screenshots.tsx`
- 원본 실행 사본과 캡처용 설정: `.capture/` (로컬 전용, 배포 제외)
- 재구성 페이지 경로 `/project-previews/*`는 삭제했습니다.

## 2026-10-16 포트폴리오 개편과 사실 확인

- 프로젝트 6개는 기존 순서와 2열 카드 구성으로 표시합니다. 각 프로젝트는 `/projects/[slug]/`의 독립된 정적 페이지로 제공합니다.
- 대표 사례의 설명은 `data/case-studies.ts`에서 관리합니다. 일반 프로젝트 내용과 경력은 기존 `data/portfolio.ts`, `data/additional-projects.ts`를 사용합니다.
- 허닭몰의 약 20만 계정은 사용자가 확인한 로그인·구매 등 활동 기준입니다. 총 가입 계정 수가 아니며, 집계 기간을 확인하지 않았으므로 DAU·MAU라고 표기하지 않습니다. 서비스 규모이며 개인이 증가시킨 사용자 수로 표현하지 않습니다.
- 알리고의 약 10%는 API 요청 사용자 수와 npm 다운로드 수를 비교한 추산이라고 사용자가 설명했습니다. 다운로드 수는 고유 고객 수와 같지 않으므로 사이트에서 실제 도입률로 사용하지 않습니다.
- 전시 빌더의 pageId, ready/send, id/uiId, 별도 createModule/updateModule 저장 과정은 사용자가 현재 코드에 근거해 제공한 설명입니다. BroadcastChannel의 선택 이유를 확정적으로 소급해서 만들지 않았습니다.
- 기존 README의 성능 수치·전환율·매출 등은 이번 변경에서 검증한 자료가 아니므로 사이트에 새로 옮기지 않았습니다.
- 캡처를 기본적으로 정지 화면으로 표시하고, 사용자가 요청할 때만 APNG를 재생합니다. 테스트 데이터와 공개 사이트의 캡처 시점 설명을 복원했습니다. 기존 흐림 처리는 유지합니다.
- 문구는 실제로 맡은 일과 구현 과정을 직접 설명하는 문장으로 정리했습니다. 확인되지 않은 성과나 기술 선택 이유는 추가하지 않았습니다.
- 기존 포트폴리오의 타이포그래피, 타이핑 효과, 아이콘 메뉴, 기술 카드, 프로젝트 카드와 섹션 순서를 유지했습니다. 카드 내부 간격, 회사명·기간의 반응형 배치, 하단 링크 정렬과 테두리·그림자를 다듬었습니다. 문구는 기존 항목 안에서 수정했으며, 사실 확인 내용과 상세 페이지 기능은 유지했습니다. 처음 참고한 사이트는 [heymufi.com](https://heymufi.com/)입니다.

### 후속 작업

- [ ] 최종 이력서 PDF를 업로드한 뒤 연락처 영역에 다운로드 링크를 연결합니다. 해당 위치에도 TODO를 남겼습니다.
- [ ] 사용자가 요청하면 공개 npm 패키지와 저장소 링크를 연결합니다. 현재는 새 외부 링크를 추가하지 않습니다.
- [ ] 활성 계정 집계 기간을 확인할 수 있으면 서비스 규모 설명에 추가합니다.
