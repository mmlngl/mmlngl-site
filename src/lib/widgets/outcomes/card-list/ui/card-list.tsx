import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import type * as Entity from "~entities/outcome";
import { Card } from "./card";

export interface CardListProps {
  outcomes: Entity.OutcomeModel[];
}

export const CardList: FC<CardListProps> = ({ outcomes }) => {
  return (
    <div className="flex flex-col gap-4">
      {outcomes.map((outcome) => (
        <Link
          to="/outcomes/$slug"
          params={{ slug: outcome.slug }}
          key={outcome.slug}
        >
          <Card outcome={outcome} />
        </Link>
      ))}
    </div>
  );
};
