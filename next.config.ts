import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  serverExternalPackages: [
    "ts-morph",
    "typescript",
    "oxc-transform",
    "twoslash",
    "shiki",
    "@shikijs/twoslash",
  ],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
};

export default withMDX(nextConfig);
