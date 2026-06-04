import type { FC } from "react";
import * as Entity from "~entities/skill";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  skill: Entity.SkillModel;
}

export const Card: FC<CardProps> = ({ skill }) => {
  return (
    <Entity.SkillEntity skill={skill}>
      <UICard className="group">
        <CardHeader>
          <CardTitle>
            <span className="text-muted-foreground/50 group-hover:text-foreground transition-colors">
              /skill:
            </span>
            {` `}
            {skill.name}
          </CardTitle>
        </CardHeader>
      </UICard>
    </Entity.SkillEntity>
  );
};
