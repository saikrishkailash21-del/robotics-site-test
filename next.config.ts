import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // FIXED: Automatically injects your repository name in production
  basePath: process.env.NODE_ENV === "production" ? "/robotics-club-repository-name" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/robotics-club-repository-name/" : "",
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "RoboticsClubIITK.github.io",
      },
    ],
  },
};

export default nextConfig;