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
    jwtSecret: process.env.NEXTAUTH_SECRET,
  },
};

module.exports = nextConfig;
