import { createServerFn } from "@tanstack/react-start";
import { allBlogposts } from "content-collections";
import type { BlogPostModel } from "./lib";

export const loadAllBlogPosts = async (): Promise<BlogPostModel[]> => {
  return allBlogposts.map((post) => post);
};

export const loadAllBlogPostsFn = createServerFn().handler(loadAllBlogPosts);

export const loadBlogPostForSlug = async (slug: BlogPostModel["slug"]) => {
  const posts = await loadAllBlogPosts();
  return posts.find((post) => post.slug === slug);
};

export const loadBlogPostForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadBlogPostForSlug(slug));
