import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import type * as Entity from "~entities/skill";
import { Card } from "./card";

export interface CardListProps {
  skills: Entity.SkillModel[];
}

export const CardList: FC<CardListProps> = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <Link to="/skills/$slug" params={{ slug: skill.slug }} key={skill.slug}>
          <Card skill={skill} />
        </Link>
      ))}
    </div>
  );
};
