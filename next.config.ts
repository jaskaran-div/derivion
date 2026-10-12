import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "derivion.in",
      },
      {
        protocol: "https",
        hostname: "isftglobal.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
