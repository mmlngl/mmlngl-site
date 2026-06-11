import { createFileRoute } from "@tanstack/react-router";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header
        heading={
          <>
            Practical guides
            <br />
            for Creatives
            <br />
            leveling up with AI
          </>
        }
        lead="– Michele M."
      />
      <Content>Here</Content>
    </>
  );
}
