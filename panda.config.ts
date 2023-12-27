import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    h: "100%",
  },
  body: {
    display: "flex",
    flexDir: "column",
  },
  "body > div, body > main": {
    flex: "initial",
  },
  "header, footer": {
    flexShrink: 0,
  },
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  emitPackage: true,
  prefix: "inkhorn",
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
  globalCss,
  theme: {
    extend: {
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "50%": { opacity: 0.5 },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            canvas: { value: { base: "#faf9f5", _dark: "{colors.gray.5}" } },
          },
        },
      },
      tokens: {
        animations: {
          spin: {
            value: "spin 1s linear infinite",
          },
          pulse: {
            value: "pulse 2s cubic-bezier(.4,0,.6,1) infinite",
          },
        },
        colors: {
          primary: {
            DEFAULT: { value: "#68daa9" },
            50: { value: "#e3fdf2" },
            100: { value: "#79f7c1" },
            200: { value: "#68daa9" },
            300: { value: "#58b78e" },
            400: { value: "#4ea47f" },
            500: { value: "#428a6b" },
            600: { value: "#38755a" },
            700: { value: "#2d5e48" },
            800: { value: "#264f3d" },
            900: { value: "#1b392c" },
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      radialGradient: {
        transform: (value) => ({
          backgroundImage: `radial-gradient(${value})`,
        }),
      },
      linkDecor: {
        values: { type: "boolean" },
        transform: (value) => ({
          textDecoration: value ? undefined : "none",
        }),
      },
    },
  },
  jsxFramework: "react",
  outdir: "styled-system",
  minify: true,
});
