import type { FC } from "react";
import { useSkill } from "~lib/entities/skill";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const skill = useSkill();
  return <Header heading={skill.name} />;
};
