import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  presets: [
    "@pandacss/preset-panda",
    "@park-ui/panda-preset",
    createPreset({ accentColor: "jade", grayColor: "sage" }),
  ],
  preflight: true,
  minify: true,
  importMap: "@/lib/styled",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  globalCss: {
    "html, body": { h: "full" },
    body: { display: "flex", flexDir: "column" },
    "body > *": { flex: "initial" },
    "header, footer": { flexShrink: 0 },
  },
  theme: {
    extend: {
      semanticTokens: {
        colors: { bg: { canvas: { value: "{colors.bg.default}" } } },
      },
      tokens: {
        borders: ["default", "muted", "subtle", "disabled", "outlined"].reduce(
          (acc, border) => ({ ...acc, [border]: { value: `1px solid {colors.border.${border}}` } }),
          {}
        ),
      },
      recipes: { button: { jsx: ["Button", "SubmitButton", "FormButton"] } },
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
  jsxFramework: "react",
});
