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

          <div className="border-2 rounded-2xl p-4 mt-20 bg-muted">
            <p className="text-muted-foreground">The quick brown fox</p>
          </div>
        </div>
      </Content>
    </>
  );
}
