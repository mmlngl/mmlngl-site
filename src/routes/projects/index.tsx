import { createFileRoute } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { loadAllProjectsFn } from "~lib/entities/project/server";
import * as ProjectsUI from "~lib/widgets/projects";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  loader: async () => ({
    projects: await loadAllProjectsFn(),
  }),
  head: () => ({
    meta: [
      ...seo({
        title: "Projects",
        description:
          "Essays, notes, and experiments on product, software, AI, design, and entrepreneurship.",
        keywords:
          "mmlngl projects, blog, essays, product, software, AI, design, entrepreneurship",
        url: "https://mmlngl.com/projects",
      }),
    ],
  }),
});

function ProjectsIndex() {
  const { projects } = Route.useLoaderData();
  return (
    <>
      <Header
        heading="Projects"
        lead="Thoughts on Product, Software, AI, Design, and Entrepreneurship. Collected while building things."
      />
      <Content>
        <ProjectsUI.CardList
          projects={projects}
          heading="AI"
          headingRender={<h1 className="font-sans font-bold text-xl" />}
          footer={<p>Stuff and things here</p>}
        />
      </Content>
    </>
  );
}
