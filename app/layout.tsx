import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "반복을 구조로 바꾸는 프론트엔드 개발자",
  description:
    "10년차 프론트엔드 개발자의 경력과 대표 프로젝트를 소개합니다. Next.js, React, Vue, TypeScript 기반으로 지속 가능한 서비스를 만듭니다.",
  openGraph: {
    title: "반복을 구조로 바꾸는 프론트엔드 개발자",
    description: "제품의 문제를 발견하고, 해결이 반복되는 구조까지 설계합니다.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "반복을 구조로 바꾸는 프론트엔드 개발자" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "반복을 구조로 바꾸는 프론트엔드 개발자",
    description: "제품의 문제를 발견하고, 해결이 반복되는 구조까지 설계합니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
