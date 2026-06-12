import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { PostEntity } from "~lib/entities/post";
import { loadPostForSlugFn } from "~lib/entities/post/server";
import * as Post from "~lib/features/posts";
import { Content } from "~ui/page";

export const Route = createFileRoute("/posts/$slug")({
  component: PostDetail,
  loader: async ({ params: { slug } }) => {
    const maybePost = await loadPostForSlugFn({ data: { slug } });
    if (!maybePost) throw notFound();
    return { post: maybePost };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...seo({
        title: loaderData?.post.title,
        description: loaderData?.post.description,
        keywords: loaderData?.post.keywords.join(", "),
        url: loaderData?.post.slug
          ? `https://mmlngl.com/posts/${loaderData.post.slug}`
          : "https://mmlngl.com/posts",
      }),
    ],
  }),
});

function PostDetail() {
  const { post } = Route.useLoaderData();
  return (
    <PostEntity post={post}>
      <Post.Banner />
      <Content>
        <Post.Content />
      </Content>
    </PostEntity>
  );
}
