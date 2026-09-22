import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Next 16 auto-appends agent guidance to CLAUDE.md on `next dev`/`next build`;
  // this repo already maintains its own CLAUDE.md, so disable that behavior.
  agentRules: false,
};

export default nextConfig;
