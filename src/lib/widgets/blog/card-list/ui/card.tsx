import type { FC } from "react";
import * as Entity from "~entities/blog-post";
import { CardHeader, CardTitle, Card as UICard } from "~ui/card";

export interface CardProps {
  post: Entity.BlogPostModel;
}

export const Card: FC<CardProps> = ({ post }) => {
  return (
    <Entity.BlogPostEntity post={post}>
      <UICard>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
      </UICard>
    </Entity.BlogPostEntity>
  );
};
