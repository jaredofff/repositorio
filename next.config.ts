import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: rootDir,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },
};

export default nextConfig;
