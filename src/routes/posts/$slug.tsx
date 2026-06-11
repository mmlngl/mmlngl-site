import { createFileRoute, notFound } from "@tanstack/react-router";
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
