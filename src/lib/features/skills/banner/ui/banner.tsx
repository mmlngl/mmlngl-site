import type { FC } from "react";
import { useSkill } from "~lib/entities/skill";

export const Banner: FC = () => {
  const skill = useSkill();

  return (
    <header>
      <h1 className="text-9xl">{skill.name}</h1>
    </header>
  );
};
