import { createServerFn } from "@tanstack/react-start";
import { allSkills } from "content-collections";
import type { SkillModel } from "./lib";

export const loadAllSkillsts = async (): Promise<SkillModel[]> => {
  return allSkills.map((skill) => skill);
};

export const loadAllSkillsFn = createServerFn().handler(loadAllSkillsts);

export const loadSkillForSlug = async (slug: SkillModel["slug"]) => {
  const skills = await loadAllSkillsts();
  return skills.find((skill) => skill.slug === slug);
};

export const loadSkillForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadSkillForSlug(slug));
