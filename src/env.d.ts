/// <reference types="astro/client" />

import "../.astro/types";

declare module "*.astro" {
  import type { AstroComponentFactory } from "astro/runtime/server";
  const component: AstroComponentFactory;
  export default component;
}
