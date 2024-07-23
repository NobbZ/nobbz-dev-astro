import eslint from "@eslint/js";
import tseslinst from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
  eslint.configs.recommended,
  ...tseslinst.configs.recommended,
  ...astro.configs.recommended,
  { ignores: ["dist/*", ".astro/*"] },
  { languageOptions: { globals: { astroHTML: "readonly" } } },
];
