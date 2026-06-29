import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/robotics-site-test",
  assetPrefix: "/robotics-site-test", // This forces Next.js to inject the prefix into assets!
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