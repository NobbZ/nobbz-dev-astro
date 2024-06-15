import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    slug: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  blog,
};
