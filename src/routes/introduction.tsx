import { createFileRoute, Link } from "@tanstack/react-router";
import { Content, Header } from "~ui/page";
import { Lead } from "~ui/typography";

export const Route = createFileRoute("/introduction")({
  component: IntroductionPage,
});

function IntroductionPage() {
  return (
    <>
      <Header heading="Introduction" />
      <Content>
        <Lead>Somethign here</Lead>
        <div className="prose">
          <h1>Getting Set up</h1>
          <p>
            There's a I've written a{" "}
            <Link to="/guides/$slug" params={{ slug: "adding-skills" }}>
              guide to getting set up with Skills
            </Link>{" "}
            for you to follow
          </p>
        </div>
      </Content>
    </>
  );
}
