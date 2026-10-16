import type { Metadata } from 'next'
import { assetPath } from '@/lib/asset-path'
import './globals.css'

const metadataBase =
  URL.parse(process.env.NEXT_PUBLIC_SITE_URL ?? '') ??
  URL.parse('https://city-kim.github.io')!

export const metadata: Metadata = {
  metadataBase,
  title: '김찬태 | 프론트엔드 개발자',
  description:
    '프론트엔드 개발자 김찬태의 포트폴리오입니다. 허닭몰, 알리고, 보이저에서 맡았던 프로젝트와 경력을 정리했습니다.',
  openGraph: {
    title: '김찬태 | 프론트엔드 개발자',
    description:
      '허닭몰 전시 편집 도구, 게임 리포트 자동화, 알리고 개발·운영 경험을 정리했습니다.',
    type: 'website',
    images: [
      {
        url: assetPath('/og.png'),
        width: 1200,
        height: 630,
        alt: '김찬태 | 프론트엔드 개발자',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '김찬태 | 프론트엔드 개발자',
    description:
      '허닭몰 전시 편집 도구, 게임 리포트 자동화, 알리고 개발·운영 경험을 정리했습니다.',
    images: [assetPath('/og.png')],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      data-theme="light"
      data-scroll-behavior="smooth"
      className="scroll-smooth scheme-light motion-reduce:scroll-auto dark:scheme-dark"
      suppressHydrationWarning
    >
      <body className="bg-white font-sans break-keep text-zinc-900 antialiased transition-colors duration-200 selection:bg-zinc-400/30 dark:bg-zinc-950 dark:text-zinc-100 **:focus-visible:outline-2 **:focus-visible:outline-offset-4 **:focus-visible:outline-zinc-400 **:motion-reduce:animate-none **:motion-reduce:transition-none">
        <a href="#main-content" className="skip-link">
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  )
}
