import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
