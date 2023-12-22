import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  emitPackage: true,
  prefix: "inkhorn",
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      tokens: {
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
  jsxFramework: "react",
  outdir: "styled-system",
  minify: true,
});
