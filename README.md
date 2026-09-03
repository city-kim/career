# Frontend Portfolio

경력기술서와 자기소개서의 내용을 바탕으로 구성한 Next.js·Tailwind CSS 포트폴리오입니다.

화면 섹션은 `components/portfolio/`에, 경력과 프로젝트 데이터는 `data/portfolio.ts`에 분리되어 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 전 교체할 항목

### 프로젝트 스크린샷

1. 이미지를 `public/projects/` 폴더에 저장합니다.
2. `data/portfolio.ts`의 `projects` 배열에서 해당 프로젝트의 `image` 값을 `/projects/파일명.webp`처럼 변경합니다.

이미지는 4:3 비율, 1600×1200px 이상의 WebP 파일을 권장합니다.

### 연락처와 이력서

- `components/portfolio/contact-section.tsx`의 연락 섹션에 실제 이메일 링크를 연결합니다.
- 이력서를 `public/resume.pdf`에 추가한 뒤 다운로드 버튼을 링크로 변경합니다.

## Vercel 배포

Git 저장소를 Vercel에 연결하면 별도의 빌드 설정 없이 자동으로 Next.js 프로젝트를 인식합니다.

- Build Command: `npm run build`
- Output: Next.js 기본값을 사용합니다.
- Node.js: 20 이상을 권장합니다.

배포 후 `NEXT_PUBLIC_SITE_URL` 환경 변수에는 `https://`로 시작하는 실제 배포 주소를 입력합니다. 이 값은 공유 미리보기 이미지의 절대 주소를 만드는 데 사용됩니다.
