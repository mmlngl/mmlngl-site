import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~lib/app/seo";
import { SocialGrid } from "~lib/widgets/socials";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/connect")({
  component: RouteComponent,
  head: () => ({
    meta: [
      ...seo({
        title: "Connect",
        description:
          "Find Michele Memoli across X, GitHub, LinkedIn, Substack, and other platforms.",
        keywords:
          "mmlngl, Michele Memoli, connect, social links, X, GitHub, LinkedIn, Substack",
        url: "https://mmlngl.com/connect",
      }),
    ],
  }),
});

function RouteComponent() {
  return (
    <>
      <Header heading="Connect" lead="Pick your poison" />
      <Content>
        <SocialGrid />
      </Content>
    </>
  );
}
