import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostEntity } from "~lib/entities/blog-post";
import { loadBlogPostForSlugFn } from "~lib/entities/blog-post/server";
import * as Blog from "~lib/features/blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogIndex,
  loader: async ({ params: { slug } }) => {
    const maybePost = await loadBlogPostForSlugFn({ data: { slug } });
    if (!maybePost) throw notFound();
    return { post: maybePost };
  },
});

function BlogIndex() {
  const { post } = Route.useLoaderData();
  return (
    <BlogPostEntity post={post}>
      <Blog.Banner />
      <Blog.Content />
    </BlogPostEntity>
  );
}
