import { createServerFn } from "@tanstack/react-start";
import { allProjects } from "content-collections";
import type { ProjectModel } from "./lib";

export const loadAllProjects = async (): Promise<ProjectModel[]> => {
  return allProjects;
};

export const loadAllProjectsFn = createServerFn().handler(loadAllProjects);

export const loadProjectForSlug = async (slug: ProjectModel["slug"]) => {
  const posts = await loadAllProjects();
  return posts.find((post) => post.slug === slug);
};

export const loadProjectForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadProjectForSlug(slug));
