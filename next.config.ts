import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"],

    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png
  },
};

export default nextConfig;
