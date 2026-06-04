import type { FC } from "react";
import { useOutcome } from "~lib/entities/outcome";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const outcome = useOutcome();
  return <Header heading={outcome.name} />;
};
