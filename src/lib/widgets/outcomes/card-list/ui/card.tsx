import type { FC } from "react";
import * as Entity from "~entities/outcome";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  outcome: Entity.OutcomeModel;
}

export const Card: FC<CardProps> = ({ outcome }) => {
  return (
    <Entity.OutcomeEntity outcome={outcome}>
      <UICard className="group hover:bg-primary hover:border-primary transition-colors">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-primary-foreground">
            <span className="text-muted-foreground/50 group-hover:text-primary-foreground">
              How to
            </span>
            {` `}
            {outcome.name}
          </CardTitle>
        </CardHeader>
      </UICard>
    </Entity.OutcomeEntity>
  );
};
