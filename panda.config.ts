import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@park-ui/panda-preset", createPreset({ grayColor: "sage" })],
  preflight: true,
  prefix: "inkhorn",
  minify: true,
  importMap: "@/lib/styled",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  watch: true,
  globalCss: {
    "html, body": { h: "full" },
    body: { display: "flex", flexDir: "column" },
    "body > *": { flex: "initial" },
    "header, footer": { flexShrink: 0 },
  },
  theme: {
    extend: {
      keyframes: { spin: { to: { transform: "rotate(360deg)" } } },
      semanticTokens: {
        colors: {
          bg: { canvas: { value: "{colors.bg.default}" } },
          primary: {
            1: { value: { base: "{colors.primary.light.1}", _dark: "{colors.primary.dark.1}" } },
            2: { value: { base: "{colors.primary.light.2}", _dark: "{colors.primary.dark.2}" } },
            3: { value: { base: "{colors.primary.light.3}", _dark: "{colors.primary.dark.3}" } },
            4: { value: { base: "{colors.primary.light.4}", _dark: "{colors.primary.dark.4}" } },
            5: { value: { base: "{colors.primary.light.5}", _dark: "{colors.primary.dark.5}" } },
            6: { value: { base: "{colors.primary.light.6}", _dark: "{colors.primary.dark.6}" } },
            7: { value: { base: "{colors.primary.light.7}", _dark: "{colors.primary.dark.7}" } },
            8: { value: { base: "{colors.primary.light.8}", _dark: "{colors.primary.dark.8}" } },
            9: { value: { base: "{colors.primary.light.9}", _dark: "{colors.primary.dark.9}" } },
            10: { value: { base: "{colors.primary.light.10}", _dark: "{colors.primary.dark.10}" } },
            11: { value: { base: "{colors.primary.light.11}", _dark: "{colors.primary.dark.11}" } },
            12: { value: { base: "{colors.primary.light.12}", _dark: "{colors.primary.dark.12}" } },
            default: { value: "{colors.primary.8}" },
            emphasized: { value: "{colors.primary.9}" },
            fg: { value: "{colors.white}" },
            text: { value: "{colors.primary.11}" },
          },
        },
      },
      tokens: {
        animations: { spin: { value: "spin 1s linear infinite" } },
        borders: {
          default: { value: "1px solid {colors.border.default}" },
          muted: { value: "1px solid {colors.border.muted}" },
          subtle: { value: "1px solid {colors.border.subtle}" },
          disabled: { value: "1px solid {colors.border.disabled}" },
          outlined: { value: "1px solid {colors.border.outline}" },
        },
        colors: {
          primary: {
            "light.1": { value: "#FBFEFD" },
            "light.2": { value: "#F2FBFB" },
            "light.3": { value: "#E8FAF4" },
            "light.4": { value: "#C5EEDE" },
            "light.5": { value: "#96DEC1" },
            "light.6": { value: "#6CD0AA" },
            "light.7": { value: "#64C19B" },
            "light.8": { value: "#3FA87E" },
            "light.9": { value: "#2F8B65" },
            "light.10": { value: "#296B50" },
            "light.11": { value: "#265441" },
            "light.12": { value: "#16372B" },
            "dark.1": { value: "#16372B" },
            "dark.2": { value: "#16372B" },
            "dark.3": { value: "#16372B" },
            "dark.4": { value: "#16372B" },
            "dark.5": { value: "#265441" },
            "dark.6": { value: "#265441" },
            "dark.7": { value: "#296B50" },
            "dark.8": { value: "#2F8B65" },
            "dark.9": { value: "#3FA87E" },
            "dark.10": { value: "#3FA87E" },
            "dark.11": { value: "#96DEC1" },
            "dark.12": { value: "#C5EEDE" },
          },
        },
      },
    },
  },
  utilities: {
    extend: {
      linkDecoration: {
        shorthand: "linkDecor",
        values: { type: "boolean" },
        transform: (value: boolean) => (value ? {} : { textDecorationLine: "none" }),
      },
    },
  },
  // autogenerate sizes "md" and "lg" for buttons
  staticCss: { recipes: { button: [{ size: ["md", "lg"], responsive: true }] } },
  jsxFramework: "react",
});
