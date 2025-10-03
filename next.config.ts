import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  eslint: {
    // Allow builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
