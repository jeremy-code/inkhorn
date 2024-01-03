import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": { h: "100%" },
  body: { display: "flex", flexDir: "column" },
  "body > div, body > main": { flex: "initial" },
  "header, footer": { flexShrink: 0 },
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
        spin: { to: { transform: "rotate(360deg)" } },
        pulse: { "50%": { opacity: 0.5 } },
      },
      tokens: {
        animations: {
          spin: { value: "spin 1s linear infinite" },
          pulse: { value: "pulse 2s cubic-bezier(.4,0,.6,1) infinite" },
        },
        colors: {
          primary: {
            1: { value: "#e3fdf2" },
            2: { value: "#79f7c1" },
            3: { value: "#68daa9" },
            4: { value: "#58b78e" },
            5: { value: "#4ea47f" },
            6: { value: "#428a6b" },
            7: { value: "#38755a" },
            8: { value: "#30654e" },
            9: { value: "#2d5e48" },
            10: { value: "#224838" },
            11: { value: "#142b21" },
            12: { value: "#070e0b" },
            default: { value: "{colors.primary.3}" },
            emphasized: { value: "{colors.primary.4}" },
            fg: { value: "{colors.primary.12}" },
            text: { value: "{colors.primary.12}" },
          },
        },
        gradients: {
          hero: {
            value: {
              type: "linear",
              placement: "to right",
              stops: ["{colors.blue.4}", "{colors.primary.5}"],
            },
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      radialGradient: {
        transform: (value: string) => ({ backgroundImage: `radial-gradient(${value})` }),
      },
      linkDecor: {
        values: { type: "boolean" },
        transform: (value: boolean) => (value ? {} : { textDecoration: "none" }),
      },
    },
  },
  staticCss: {
    recipes: {
      button: [
        {
          // autogenerate sizes "md" and "lg" for buttons
          size: ["md", "lg"],
          responsive: true,
        },
      ],
    },
  },
  jsxFramework: "react",
  outdir: "styled-system",
  minify: true,
});
