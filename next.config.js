/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60,
  },
  output: "standalone",
};

module.exports = nextConfig;
