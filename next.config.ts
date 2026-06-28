import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/robotics-site-test", // <-- Change this from "" to your repository name
  assetPrefix: "/robotics-site-test/", // <-- Add this line so Next.js prefixes your media paths
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