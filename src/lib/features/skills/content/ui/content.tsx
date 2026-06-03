import type { FC } from "react";
import { useSkill } from "~lib/entities/skill";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const skill = useSkill();

  return (
    <div className="prose">
      <Markdown content={skill.content} />
    </div>
  );
};
