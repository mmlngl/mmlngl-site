import { createFileRoute } from "@tanstack/react-router";
import { SocialGrid } from "~lib/widgets/socials";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/connect")({
  component: RouteComponent,
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
