import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { getFakeViews } from "~features/posts/hit-counter/server";
import { PostEntity, type PostModel } from "~lib/entities/post";
import { loadPostForSlugFn } from "~lib/entities/post/server";
import { Content as PostContent } from "~lib/features/posts";
import { Banner as PostBanner } from "~lib/widgets/posts/banner/ui/banner";
import { Content } from "~ui/page";

export const Route = createFileRoute("/posts/$slug")({
  component: PostDetail,
  loader: async ({ params: { slug } }) => {
    const maybePost = await loadPostForSlugFn({ data: { slug } });
    if (!maybePost) throw notFound();
    const viewCount = getFakeViews({
      launchDate: maybePost.publishedOn,
    });

    return {
      post: {
        ...maybePost,
        viewCount,
      } satisfies PostModel,
    };
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
      <PostBanner />
      <Content>
        <PostContent />
      </Content>
    </PostEntity>
  );
}
