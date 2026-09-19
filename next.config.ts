import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isftglobal.com",
      },
    ],
  },
};

export default nextConfig;
