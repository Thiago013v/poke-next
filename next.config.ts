import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
};

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

export default nextConfig;
