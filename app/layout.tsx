import type { Metadata } from 'next'
import './globals.css'

const metadataBase =
  URL.parse(process.env.NEXT_PUBLIC_SITE_URL ?? '') ??
  URL.parse('http://localhost:3000')!

export const metadata: Metadata = {
  metadataBase,
  title: '프론트엔드 개발자 | 포트폴리오',
  description:
    '커머스, 메시징 서비스, 게임 운영 도구를 개발해 온 10년차 프론트엔드 개발자의 경력과 프로젝트를 소개합니다.',
  openGraph: {
    title: '프론트엔드 개발자 | 포트폴리오',
    description:
      '허닭몰 커머스 구축, 공통 패키지 개발, 게임 운영 리포트 자동화 프로젝트를 소개합니다.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '프론트엔드 개발자 | 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프론트엔드 개발자 | 포트폴리오',
    description:
      '허닭몰 커머스 구축, 공통 패키지 개발, 게임 운영 리포트 자동화 프로젝트를 소개합니다.',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      data-theme="light"
      className="scroll-smooth scheme-light motion-reduce:scroll-auto dark:scheme-dark"
      suppressHydrationWarning
    >
      <body className="bg-white font-sans break-keep text-zinc-900 antialiased transition-colors duration-200 selection:bg-zinc-400/30 dark:bg-zinc-950 dark:text-zinc-100 **:focus-visible:outline-2 **:focus-visible:outline-offset-4 **:focus-visible:outline-zinc-400 **:motion-reduce:animate-none **:motion-reduce:transition-none">
        {children}
      </body>
    </html>
  )
}
