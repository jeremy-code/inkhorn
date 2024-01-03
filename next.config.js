const fs = require("fs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// optimize package imports for imports "@/components/*"
// necessary to avoid unnecessary bundling with barrel files for component modules
const componentDirs = fs
  .readdirSync("./src/components")
  .filter((file) => fs.statSync(`./src/components/${file}`).isDirectory())
  .map((dir) => `@/components/${dir}`);

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizePackageImports: [...componentDirs],
    ppr: true,
    taint: true,
    webpackBuildWorker: true,
  },
});
