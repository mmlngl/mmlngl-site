import { createServerFn } from "@tanstack/react-start";
import { allGuides } from "content-collections";
import type { GuideModel } from "./lib";

export const loadAllGuides = async (): Promise<GuideModel[]> => {
  return allGuides.map((post) => post);
};

export const loadAllGuidesFn = createServerFn().handler(loadAllGuides);

export const loadGuideForSlug = async (slug: GuideModel["slug"]) => {
  const posts = await loadAllGuides();
  return posts.find((post) => post.slug === slug);
};

export const loadGuideForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadGuideForSlug(slug));
