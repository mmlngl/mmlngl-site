import type { FC } from "react";
import { useOutcome } from "~lib/entities/outcome";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const outcome = useOutcome();

  return <Markdown className="my-6 md:my-8">{outcome.content}</Markdown>;
};
