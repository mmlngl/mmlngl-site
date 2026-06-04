import type { FC } from "react";
import { useSkill } from "~lib/entities/skill";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const skill = useSkill();

  return <Markdown className="my-6 md:my-8">{skill.content}</Markdown>;
};
