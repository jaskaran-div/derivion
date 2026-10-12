import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "derivion.in",
      },
    ],
  },
};

export default nextConfig;
