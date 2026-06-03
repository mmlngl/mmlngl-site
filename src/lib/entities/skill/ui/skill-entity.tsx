import type { FC, PropsWithChildren } from "react";
import type { SkillModel } from "../lib";
import { Context } from "./skill-context";

export const SkillEntity: FC<PropsWithChildren<{ skill: SkillModel }>> = ({
  children,
  skill,
}) => {
  return (
    <article>
      <Context value={skill}>{children}</Context>
    </article>
  );
};
