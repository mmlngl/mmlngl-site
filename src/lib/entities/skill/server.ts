import { createServerFn } from "@tanstack/react-start";
import { allSkills } from "content-collections";
import type { SkillModel } from "./lib";

export const loadAllSkills = async (): Promise<SkillModel[]> => {
  return allSkills.map((skill) => skill);
};

export const loadAllSkillsFn = createServerFn().handler(loadAllSkills);

export const loadSkillForSlug = async (slug: SkillModel["slug"]) => {
  const skills = await loadAllSkills();
  return skills.find((skill) => skill.slug === slug);
};

export const loadSkillForSlugFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data: { slug } }) => loadSkillForSlug(slug));
