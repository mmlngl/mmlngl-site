import { createFileRoute, notFound } from "@tanstack/react-router";
import { OutcomeEntity } from "~lib/entities/outcome";
import { loadOutcomeForSlugFn } from "~lib/entities/outcome/server";
import * as Outcome from "~lib/features/outcomes";
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
  return (
    <OutcomeEntity outcome={outcome}>
      <Outcome.Banner />
      <Content>
        <Outcome.Content />
      </Content>
    </OutcomeEntity>
  );
}
