import { createFileRoute } from "@tanstack/react-router";
import { loadAllSkillsFn } from "~lib/entities/skill/server";
import * as SkillsUI from "~lib/widgets/skills";
import { Content, Header } from "~ui/page";

export const Route = createFileRoute("/skills/")({
  component: SkillsIndex,
  loader: async () => ({
    skills: await loadAllSkillsFn(),
  }),
});

function SkillsIndex() {
  const { skills } = Route.useLoaderData();
  return (
    <>
      <Header heading="Skills" lead="Stuff &amp; things here" />
      <Content>
        <SkillsUI.CardList skills={skills} />
      </Content>
    </>
  );
}
