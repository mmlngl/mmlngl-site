import { createServerFn } from "@tanstack/react-start";
import type { BlogPostModel } from "./lib";

export const loadAllBlogPosts = async (): Promise<BlogPostModel[]> => {
  return [
    {
      title: "Yes",
      slug: "yes",
      content:
        "Something **here**. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.",
    },
    {
      title: "Something Else",
      slug: "something-else",
      content: "Something __here__",
    },
  ];
};

export const loadAllBlogPostsFn = createServerFn().handler(loadAllBlogPosts);

export const loadBlogPostForSlug = async (slug: BlogPostModel["slug"]) => {
  const posts = await loadAllBlogPosts();
  return posts.find((post) => post.slug === slug);
};

export const loadBlogPostForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadBlogPostForSlug(slug));
