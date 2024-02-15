import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  presets: [
    "@pandacss/preset-panda",
    "@park-ui/panda-preset",
    createPreset({ accentColor: "jade", grayColor: "sage", borderRadius: "md" }),
  ],
  preflight: true,
  minify: true,
  importMap: "@/lib/styled",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  globalCss: {
    extend: {
      html: { h: "full", "--global-font-body": "{fonts.sans}" },
      body: { h: "full", display: "flex", flexDir: "column" },
      "body > *": { flex: "1 0 auto" },
      "header, footer": { flex: "none" },
    },
  },
  theme: {
    extend: {
      recipes: { button: { jsx: ["Button", "SubmitButton", "FormButton"] } },
      semanticTokens: {
        colors: { bg: { canvas: { value: "{colors.bg.default}" } } },
      },
      slotRecipes: {
        // for some reason, the default font color here is "fg.muted", overriding it to "fg.default"
        splitter: { base: { panel: { color: "fg.default" } } },
      },
      tokens: {
        borders: ["default", "muted", "subtle", "disabled", "outlined"].reduce(
          (acc, border) => ({ ...acc, [border]: { value: `1px solid {colors.border.${border}}` } }),
          {}
        ),
        fonts: { sans: { value: "{fonts.outfit}, var(--font-fallback)" } },
      },
    },
  },
  utilities: {
    extend: {
      underline: {
        className: "underline",
        shorthand: "ul",
        values: ["always", "hover", "none"],
        transform: (value: string) =>
          ({
            always: { textDecoration: "underline" },
            none: { textDecoration: "none" },
            hover: {},
          })[value],
      },
    },
  },
  jsxFramework: "react",
});
