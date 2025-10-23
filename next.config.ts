import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  eslint: {
    // Allow builds to succeed even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // Azure App Service configuration
  output: "standalone",
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Azure-specific optimizations
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
