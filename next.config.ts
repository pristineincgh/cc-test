import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.BUILD_ENV === "prod"
    ? "website_out_prod"
    : "website_out_dev",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
