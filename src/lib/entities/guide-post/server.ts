import { createServerFn } from "@tanstack/react-start";
import { allGuides } from "content-collections";
import type { GuideModel } from "./lib";

export const loadAllGuides = async (): Promise<GuideModel[]> => {
  return allGuides.toSorted((a, b) => a.order - b.order);
};

export const loadAllGuidesFn = createServerFn().handler(loadAllGuides);

export const loadGuideForSlug = async (slug: GuideModel["slug"]) => {
  const guides = await loadAllGuides();
  return guides.find((guide) => guide.slug === slug);
};

export const loadGuideForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadGuideForSlug(slug));
