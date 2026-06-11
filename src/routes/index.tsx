import { createFileRoute } from "@tanstack/react-router";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header
        heading={<>Same ideas. Different perspectives.</>}
        headingRender={<h1 className="text-7xl! md:text-9xl!" />}
        lead="Thoughts on Product, Software, AI, Design, and Entrepreneurship.
        Collected while building things."
      />
      <Content>Here</Content>
    </>
  );
}
