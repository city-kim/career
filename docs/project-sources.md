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

카드와 팝업에 APNG를 직접 표시합니다. 재생을 끄면 기존 PNG를 표시하며, 시스템의 동작 줄이기 설정도 반영합니다. 원본 프레임과 인코딩 도구는 `.capture/frames` 및 `.capture/encode-apng.py`에 보관하며 배포하지 않습니다.

- 설명 및 이미지 경로: `data/portfolio.ts`
- 프로젝트 팝업: `components/portfolio/project-dialog.tsx`
- 원본 실행 사본과 캡처용 설정: `.capture/` (로컬 전용, 배포 제외)
- 재구성 페이지 경로 `/project-previews/*`는 삭제했습니다.
