import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Pin the workspace root so Next/Turbopack resolves node_modules from this
     folder (a stray lockfile on the Desktop was confusing root detection). */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
