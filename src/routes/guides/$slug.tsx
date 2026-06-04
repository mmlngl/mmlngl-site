import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuideEntity } from "~lib/entities/guide-post";
import { loadGuideForSlugFn } from "~lib/entities/guide-post/server";
import * as Guides from "~lib/features/guides";
import { Content } from "~ui/page";

export const Route = createFileRoute("/guides/$slug")({
  component: GuidePage,
  loader: async ({ params: { slug } }) => {
    const maybePost = await loadGuideForSlugFn({ data: { slug } });
    if (!maybePost) throw notFound();
    return { post: maybePost };
  },
});

function GuidePage() {
  const { post } = Route.useLoaderData();
  return (
    <GuideEntity post={post}>
      <Guides.Banner />
      <Content>
        <Guides.Content />
      </Content>
    </GuideEntity>
  );
}
