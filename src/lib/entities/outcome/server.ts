import { createServerFn } from "@tanstack/react-start";
import { allOutcomes } from "content-collections";
import type { OutcomeModel } from "./lib";

export const loadAllOutcomes = async (): Promise<OutcomeModel[]> => {
  return allOutcomes.map((outcome) => outcome);
};

export const loadAllOutcomesFn = createServerFn().handler(loadAllOutcomes);

export const loadOutcomeForSlug = async (slug: OutcomeModel["slug"]) => {
  const outcomes = await loadAllOutcomes();
  return outcomes.find((outcome) => outcome.slug === slug);
};

export const loadOutcomeForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadOutcomeForSlug(slug));
