import { createFileRoute } from "@tanstack/react-router";
import { loadAllSkillsFn } from "~lib/entities/skill/server";
import * as SkillsUI from "~lib/widgets/skills";

export const Route = createFileRoute("/skills/")({
  component: SkillsIndex,
  loader: async () => ({
    skills: await loadAllSkillsFn(),
  }),
});

function SkillsIndex() {
  const { skills } = Route.useLoaderData();
  return (
    <div>
      <SkillsUI.CardList skills={skills} />
    </div>
  );
}
