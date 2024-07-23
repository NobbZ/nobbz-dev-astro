import { defineCollection, z, reference } from "astro:content";

export const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    description: z.string(),
    author: reference("authors"),
  }),
});
