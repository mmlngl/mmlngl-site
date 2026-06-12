import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { loadAllPostsFn } from "~lib/entities/post/server";
import * as PostsUI from "~lib/widgets/posts";
import { Markdown } from "~ui/markdown";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
  loader: async () => ({
    posts: await loadAllPostsFn(),
  }),
  head: () => ({
    meta: [
      ...seo({
        title: "Posts",
        description:
          "Essays, notes, and experiments on product, software, AI, design, and entrepreneurship.",
        keywords:
          "mmlngl posts, blog, essays, product, software, AI, design, entrepreneurship",
        url: "https://mmlngl.com/posts",
      }),
    ],
  }),
});

function PostsIndex() {
  const { posts } = Route.useLoaderData();
  return (
    <>
      <Header
        heading="Posts"
        lead="Thoughts on Product, Software, AI, Design, and Entrepreneurship. Collected while building things."
      />
      <Content>
        <PostsUI.CardList
          posts={posts}
          heading="AI"
          headingRender={<h1 className="font-sans font-bold text-xl" />}
          footer={<p>Stuff and things here</p>}
        />
      </Content>
    </>
  );
}
