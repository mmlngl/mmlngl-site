import type { FC } from "react";
import * as Entity from "~entities/outcome";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  outcome: Entity.OutcomeModel;
}

export const Card: FC<CardProps> = ({ outcome }) => {
  return (
    <Entity.OutcomeEntity outcome={outcome}>
      <UICard>
        <CardHeader>
          <CardTitle>{outcome.name}</CardTitle>
        </CardHeader>
      </UICard>
    </Entity.OutcomeEntity>
  );
};
