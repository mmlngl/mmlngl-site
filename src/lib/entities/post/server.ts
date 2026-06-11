import { createServerFn } from "@tanstack/react-start";
import { allPosts } from "content-collections";
import type { PostModel } from "./lib";

export const loadAllPosts = async (): Promise<PostModel[]> => {
  return allPosts.toSorted((a, b) => a.order - b.order);
};

export const loadAllPostsFn = createServerFn().handler(loadAllPosts);

export const loadPostForSlug = async (slug: PostModel["slug"]) => {
  const posts = await loadAllPosts();
  return posts.find((post) => post.slug === slug);
};

export const loadPostForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadPostForSlug(slug));
