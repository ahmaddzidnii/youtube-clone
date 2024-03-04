/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "i.ytimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
