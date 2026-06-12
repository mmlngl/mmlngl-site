import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { Content, Header } from "~ui/page";
import { Prose } from "~ui/prose";
import { T } from "~ui/typography";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      ...seo({
        description:
          "Thoughts on product, software, AI, design, and entrepreneurship by Michele Memoli.",
        keywords:
          "mmlngl, Michele Memoli, product strategy, software engineering, AI, design, entrepreneurship",
        url: "https://mmlngl.com/",
      }),
    ],
  }),
});

function HomePage() {
  return (
    <>
      <Header
        heading={
          <>
            Same
            <br /> Problems.{" "}
            <span className="text-right block mt-12">
              Different perspectives.
            </span>
          </>
        }
        headingRender={
          <h1 className="text-7xl! sm:text-8xl! md:text-9xl! mb-8" />
        }
        lead="Thoughts on Product, Software, AI, Design, and Entrepreneurship.
        Collected while building things."
      />
      <Content>
        <Prose className="prose-2xl max-w-lg" render={<section />}>
          <T.H2>About Me</T.H2>

          <p>
            Product leader, software engineer, and entrepreneur. Interested in
            how software, AI, and good product thinking create leverage for
            teams and businesses.
          </p>
        </Prose>

        <Prose className="prose-2xl max-w-lg" render={<section />}>
          <T.H2>Background</T.H2>

          <p>
            Over 15 years across UX, product, and engineering. Previously worked
            with organisations including Google, BBC, ITV, MTV, and Burberry.
            Founder and CTO of HTCH.
          </p>
        </Prose>

        <Prose className="prose-2xl max-w-lg" render={<section />}>
          <T.H2>My Focus</T.H2>

          <p>
            Currently living and working in Bangkok, TH. exploring AI-assisted
            software development, product strategy, and how small teams can
            achieve outsized results through better systems, tools, and
            workflows.
          </p>
        </Prose>
      </Content>
    </>
  );
}
