import type { FC } from "react";
import * as Entity from "~lib/entities/post";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  post: Entity.PostModel;
}

export const Card: FC<CardProps> = ({ post }) => {
  return (
    <Entity.PostEntity post={post}>
      <UICard className="group">
        <CardHeader>
          <CardTitle className="text-lg">{post.title}</CardTitle>
        </CardHeader>
      </UICard>
    </Entity.PostEntity>
  );
};
