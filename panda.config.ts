import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

const globalCss = defineGlobalStyles({
  "html, body": { h: "100%" },
  body: { display: "flex", flexDir: "column" },
  "body > div, body > main": { flex: "initial" },
  "header, footer": { flexShrink: 0 },
});

export default defineConfig({
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset", createPreset({ grayColor: "sage" })],
  preflight: true,
  prefix: "inkhorn",
  minify: true,
  importMap: "@/lib/styled",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  watch: true,
  globalCss,
  theme: {
    extend: {
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        pulse: { "50%": { opacity: 0.5 } },
      },
      semanticTokens: {
        colors: {
          bg: { canvas: { value: "{colors.white}" } },
        },
      },
      tokens: {
        animations: {
          spin: { value: "spin 1s linear infinite" },
          pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
        },
        borders: {
          muted: { value: "1px solid {colors.border.muted}" },
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
          textHighlight: {
            value: {
              type: "linear",
              placement: "to right",
              stops: ["{colors.primary.3}", "{colors.primary.5}"],
            },
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      linkDecor: {
        values: { type: "boolean" },
        transform: (value: boolean) => (value ? {} : { textDecoration: "none" }),
      },
      radialGradient: {
        transform: (value: string) => ({ backgroundImage: `radial-gradient(${value})` }),
      },
    },
  },
  staticCss: {
    recipes: {
      // autogenerate sizes "md" and "lg" for buttons
      button: [{ size: ["md", "lg"], responsive: true }],
    },
  },
  jsxFramework: "react",
});
