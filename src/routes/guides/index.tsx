import { createFileRoute } from "@tanstack/react-router";
import { loadAllGuidesFn } from "~lib/entities/guide-post/server";
import * as GuidesUI from "~lib/widgets/guides";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/guides/")({
  component: GuidesPage,
  loader: async () => ({
    posts: await loadAllGuidesFn(),
  }),
});

function GuidesPage() {
  const { posts } = Route.useLoaderData();
  return (
    <div>
      <Header heading="Guides" lead="Stuff &amp; things here" />
      <Content>
        <GuidesUI.CardList posts={posts} />
      </Content>
    </div>
  );
}
