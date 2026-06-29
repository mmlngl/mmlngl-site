import { createFileRoute } from "@tanstack/react-router";
import type { Post } from "content-collections";
import { seo } from "~app/seo";
import { loadAllPostsFn } from "~lib/entities/post/server";
import * as PostsUI from "~lib/widgets/posts";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
  loader: async () => {
    const posts = await loadAllPostsFn();

    const byCategoryPosts = posts.reduce<Record<Post["category"], Post[]>>(
      (acc, post) => {
        acc[post.category].push(post);
        return acc;
      },
      {
        ai: [],
        product: [],
        software: [],
      },
    );

    return { byCategoryPosts };
  },
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
  const { byCategoryPosts } = Route.useLoaderData();
  return (
    <>
      <Header
        heading="Posts"
        lead="Thoughts on Product, Software, AI, Design, and Entrepreneurship. Collected while building things."
      />
      <Content>
        <PostsUI.CardList
          posts={byCategoryPosts.ai}
          heading="AI"
          headingRender={<h1 className="font-sans font-bold text-xl" />}
        />

        <PostsUI.CardList
          posts={byCategoryPosts.product}
          heading="Product"
          headingRender={<h1 className="font-sans font-bold text-xl" />}
        />

        <PostsUI.CardList
          posts={byCategoryPosts.software}
          heading="Software"
          headingRender={<h1 className="font-sans font-bold text-xl" />}
        />
      </Content>
    </>
  );
}
