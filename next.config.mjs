/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && {
    output: 'export',
    basePath: '/Portfolio',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
