import { defineCollection, z, reference } from "astro:content";

const fallback = z.object({
  icon: z.string().url(),
  displayText: z.string(),
  href: z.string().url(),
}).partial({ icon: true });

const authors = defineCollection({
  type: "content",
  schema: z.object({
    first_name: z.string(),
    last_name: z.string(),
    nick_name: z.string(),
    funding: z.object({
      amazon: z.string().url(),
      github: z.string(),
      kofi: z.string(),
      patreon: z.string(),
      polar: z.string(),
    }).catchall(fallback).partial(),
    social: z.object({
      github: z.string(),
      gitlab: z.string(),
      linkedin: z.string(),
      twitter: z.string(),
    }).catchall(fallback).partial(),
    web: z.object({
      homepage: z.string().url(),
    }).catchall(fallback).partial(),
  }).partial().required({ nick_name: true }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    description: z.string(),
    author: reference("authors"),
  }),
});

export const collections = {
  authors,
  blog,
};
