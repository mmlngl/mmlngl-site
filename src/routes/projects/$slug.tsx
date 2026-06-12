import { createFileRoute, notFound } from "@tanstack/react-router";
import { seo } from "~app/seo";
import { ProjectEntity } from "~lib/entities/project";
import { loadProjectForSlugFn } from "~lib/entities/project/server";
import * as Project from "~lib/features/projects";
import { Content } from "~ui/page";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: async ({ params: { slug } }) => {
    const maybeProject = await loadProjectForSlugFn({ data: { slug } });
    if (!maybeProject) throw notFound();
    return { project: maybeProject };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...seo({
        title: loaderData?.project.title,
        description: loaderData?.project.description,
        keywords: loaderData?.project.keywords.join(", "),
        url: loaderData?.project.slug
          ? `https://mmlngl.com/projects/${loaderData.project.slug}`
          : "https://mmlngl.com/projects",
      }),
    ],
  }),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <ProjectEntity project={project}>
      <Project.Banner />
      <Content>
        <Project.Content />
      </Content>
    </ProjectEntity>
  );
}
