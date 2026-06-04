import { createFileRoute } from "@tanstack/react-router";
import { loadAllOutcomesFn } from "~lib/entities/outcome/server";
import * as OutcomesUI from "~lib/widgets/outcomes";
import { Content, Header } from "~ui/page";
import { T } from "~ui/typography";

export const Route = createFileRoute("/outcomes/")({
  component: OutcomesIndex,
  loader: async () => ({
    outcomes: await loadAllOutcomesFn(),
  }),
});

function OutcomesIndex() {
  const { outcomes } = Route.useLoaderData();
  return (
    <>
      <Header heading="Outcomes" />
      <Content>
        <T.Lead className="max-w-full md:max-w-[40ch]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1966, when designers at Letraset and James Mosley,
        </T.Lead>

        <hr />

        <OutcomesUI.CardList outcomes={outcomes} />
      </Content>
    </>
  );
}
