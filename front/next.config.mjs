/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.hermes.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
