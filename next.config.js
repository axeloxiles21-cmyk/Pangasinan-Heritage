/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Pangasinan-Heritage',
  assetPrefix: '/Pangasinan-Heritage/',
  images: {
    unoptimized: true, // GitHub Pages can't run Next's image optimization server
  },
};

module.exports = nextConfig;