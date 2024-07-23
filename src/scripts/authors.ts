import { getCollection, type CollectionEntry } from "astro:content";

export type Author = CollectionEntry<"authors">;

export type WithPosts<T extends Author> = T & {
  posts: CollectionEntry<"blog">[],
};

export const withPosts = async <T extends Author>(author: T): Promise<WithPosts<T>> => {
  const posts = await getCollection("blog", ({ data: { author: postAuthor } }) => author.slug == postAuthor.slug);

  return { ...author, posts }
}
