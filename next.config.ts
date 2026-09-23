import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  // Needed so /admin (Decap CMS, served from public/admin/index.html) and
  // routes like /muebles resolve as folder + index.html both in `next dev`
  // and on the static host, instead of 404ing on the bare path.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Next 16 auto-appends agent guidance to CLAUDE.md on `next dev`/`next build`;
  // this repo already maintains its own CLAUDE.md, so disable that behavior.
  agentRules: false,
};

export default nextConfig;
