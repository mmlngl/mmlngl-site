import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~ui/button";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/ui")({
  component: UIPage,
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
