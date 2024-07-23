import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

const tailwindIntegration = tailwind({
  applyBaseStyles: false,
});

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwindIntegration],
});
