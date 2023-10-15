/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  env: {
    jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET,
  },
};

module.exports = nextConfig;
