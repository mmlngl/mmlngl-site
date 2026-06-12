import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { Button } from "~ui/button";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/ui")({
  component: UIPage,
  head: () => ({
    meta: [
      ...seo({
        title: "UI",
        description: "Internal UI playground and component test page.",
        url: "https://mmlngl.com/ui",
      }).filter((tag) => !("name" in tag && tag.name === "robots")),
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function UIPage() {
  return (
    <>
      <Header heading="UI" />
      <Content>
        <div>
          <Button>Click Me</Button>
        </div>
      </Content>
    </>
  );
}
