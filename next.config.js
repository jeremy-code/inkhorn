// @ts-check
const { readdirSync, statSync } = require("fs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// optimize package imports for imports "@/components/*"
// necessary to avoid unnecessary bundling with barrel files for component modules
const componentDirs = readdirSync("./src/components")
  .filter((file) => statSync(`./src/components/${file}`).isDirectory())
  .map((dir) => `@/components/${dir}`);

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  experimental: {
    optimizePackageImports: [...componentDirs],
    ppr: true,
    taint: true,
    webpackBuildWorker: true,
  },
});
