import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
