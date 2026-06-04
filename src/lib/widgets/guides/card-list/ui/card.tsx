import type { FC } from "react";
import * as Entity from "~entities/guide-post";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  post: Entity.GuideModel;
}

export const Card: FC<CardProps> = ({ post }) => {
  return (
    <Entity.GuideEntity post={post}>
      <UICard>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
      </UICard>
    </Entity.GuideEntity>
  );
};
