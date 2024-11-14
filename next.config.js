/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  swcMinify: true,
  experimental: {
    swcLoader: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;