/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'api.lorem.space',
      },
      {
        protocol:'https',
        hostname:'placeimg.com',
      },
      {
        protocol:'https',
        hostname:'wixmp.com'
      },
    ],
  },
};

module.exports = nextConfig
