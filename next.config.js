/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/dreaps-assets/**",
      },
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
