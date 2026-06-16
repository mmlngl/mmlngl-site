import { createServerFn } from "@tanstack/react-start";
import { allPosts, type Post } from "content-collections";

export const loadAllPosts = async (): Promise<Post[]> => {
  return allPosts.toSorted(
    (a, b) =>
      new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime(),
  );
};

export const loadAllPostsFn = createServerFn().handler(loadAllPosts);

export const loadPostForSlug = async (slug: Post["slug"]) => {
  const posts = await loadAllPosts();
  return posts.find((post) => post.slug === slug);
};

export const loadPostForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadPostForSlug(slug));
