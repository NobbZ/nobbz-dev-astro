import { defineCollection, z, reference } from "astro:content";

const authors = defineCollection({
  type: "content",
  schema: z.object({
    first_name: z.string(),
    last_name: z.string(),
    nick_name: z.string(),
    social: z.object({
      amazon: z.string(),
      github: z.string(),
      gitlab: z.string(),
      "ko-fi": z.string(),
      linkedin: z.string(),
      twitter: z.string(),
      web: z.object({
        url: z.string(),
        name: z.string(),
      }),
    }),
  }),
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
