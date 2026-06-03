import { createFileRoute } from "@tanstack/react-router";
import { loadAllBlogPostsFn } from "~lib/entities/blog-post/server";
import * as BlogUI from "~lib/widgets/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogPost,
  loader: async () => ({
    posts: await loadAllBlogPostsFn(),
  }),
});

function BlogPost() {
  const { posts } = Route.useLoaderData();
  return (
    <div>
      <BlogUI.CardList posts={posts} />
    </div>
  );
}
