import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    compiler: 'modern',
    silenceDeprecations: ['legacy-js-api'],
  },
  experimental: {},
};

export default nextConfig;
