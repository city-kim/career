/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  devIndicators: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  ...(process.env.STATIC_EXPORT === 'true'
    ? { output: 'export', images: { unoptimized: true } }
    : {}),
}

export default nextConfig
