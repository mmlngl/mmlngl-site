import { createFileRoute, notFound } from "@tanstack/react-router";
import { SkillEntity } from "~lib/entities/skill";
import { loadSkillForSlugFn } from "~lib/entities/skill/server";
import * as Skill from "~lib/features/skills";

export const Route = createFileRoute("/skills/$slug")({
  component: SkillDetail,
  loader: async ({ params: { slug } }) => {
    const maybeSkill = await loadSkillForSlugFn({ data: { slug } });
    if (!maybeSkill) throw notFound();
    return { skill: maybeSkill };
  },
});

function SkillDetail() {
  const { skill } = Route.useLoaderData();
  return (
    <SkillEntity skill={skill}>
      <Skill.Banner />
      <Skill.Content />
    </SkillEntity>
  );
}
