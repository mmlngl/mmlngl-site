import { createFileRoute } from "@tanstack/react-router";
import { loadAllPostsFn } from "~lib/entities/post/server";
import * as PostsUI from "~lib/widgets/posts";
import { Markdown } from "~ui/markdown";
import { Content, Header } from "~ui/page";
import { T } from "~ui/typography";

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
  loader: async () => ({
    posts: await loadAllPostsFn(),
  }),
});

function PostsIndex() {
  const { posts } = Route.useLoaderData();
  return (
    <>
      <Header heading="Posts" />
      <Content>
        <T.Lead className="max-w-full md:max-w-[40ch]">
          My thoughts on Product, software, AI, design, and entrepreneurship.
          Collected while building things.
        </T.Lead>

        {/*<hr />*/}

        <PostsUI.CardList posts={posts} heading="AI" />

        {/*<hr />*/}

        <Markdown>
          {`
# About

A collection of thoughts, experiments, technical notes, and lessons learned from building products and businesses.
`}
        </Markdown>
      </Content>
    </>
  );
}
