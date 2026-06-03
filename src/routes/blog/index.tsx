import { createFileRoute } from "@tanstack/react-router";
import { loadAllBlogPostsFn } from "~lib/entities/blog-post/server";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  loader: async () => ({
    posts: await loadAllBlogPostsFn(),
  }),
});

function BlogIndex() {
  const { posts } = Route.useLoaderData();
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
