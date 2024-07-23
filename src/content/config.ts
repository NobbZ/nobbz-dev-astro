import { defineCollection, z, reference } from "astro:content";

import { authors } from "./schemas/authors";

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
