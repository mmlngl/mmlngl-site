import { createFileRoute, notFound } from "@tanstack/react-router";
import { OutcomeEntity } from "~lib/entities/outcome";
import { loadOutcomeForSlugFn } from "~lib/entities/outcome/server";
import * as OutcomesUI from "~lib/features/outcomes";
import * as SkillsUI from "~lib/widgets/skills";
import { Content } from "~ui/page";

export const Route = createFileRoute("/outcomes/$slug")({
  component: OutcomeDetail,
  loader: async ({ params: { slug } }) => {
    const maybeOutcome = await loadOutcomeForSlugFn({ data: { slug } });
    if (!maybeOutcome) throw notFound();
    return { outcome: maybeOutcome };
  },
});

function OutcomeDetail() {
  const { outcome } = Route.useLoaderData();
  const skills = outcome.skills.filter((s) => s !== undefined);
  return (
    <OutcomeEntity outcome={outcome}>
      <OutcomesUI.Banner />
      <Content>
        <OutcomesUI.Content
          extraComponents={{
            SkillsList: (props: Omit<SkillsUI.CardListProps, "skills">) => (
              <SkillsUI.CardList skills={skills} {...props} />
            ),
          }}
        />
      </Content>
    </OutcomeEntity>
  );
}
