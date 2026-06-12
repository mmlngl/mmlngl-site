import type { FC } from "react";
import * as Entity from "~lib/entities/project";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  project: Entity.ProjectModel;
}

export const Card: FC<CardProps> = ({ project }) => {
  return (
    <Entity.ProjectEntity project={project}>
      <UICard className="group">
        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </CardHeader>
      </UICard>
    </Entity.ProjectEntity>
  );
};
