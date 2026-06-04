import { createFileRoute } from "@tanstack/react-router";
import { loadAllBlogPostsFn } from "~lib/entities/blog-post/server";
import * as BlogUI from "~lib/widgets/blog";
import { Content, Header } from "~ui/page";

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
      <Header heading="Blog" lead="Stuff &amp; things here" />
      <Content>
        <BlogUI.CardList posts={posts} />
      </Content>
    </div>
  );
}
