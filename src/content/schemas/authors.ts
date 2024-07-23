import { defineCollection, z } from "astro:content";

const catchall = z.object({
  icon: z.string().url(),
  displayText: z.string(),
  href: z.string().url(),
}).partial({ icon: true });

const funding = z.object({
  amazon: z.string().url(),
  github: z.string(),
  kofi: z.string(),
  patreon: z.string(),
  polar: z.string(),
}).catchall(catchall).partial();

const social = z.object({
  github: z.string(),
  gitlab: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
}).catchall(catchall).partial();

const web = z.object({
  homepage: z.string().url(),
}).catchall(catchall).partial();

const schema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  nick_name: z.string(),
  funding,
  social,
  web,
}).partial().required({ nick_name: true });

export const authors = defineCollection({
  type: "content",
  schema,
});
