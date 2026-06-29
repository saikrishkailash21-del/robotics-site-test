import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/robotics-site-test", 
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