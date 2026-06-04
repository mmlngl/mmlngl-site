import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import type * as Entity from "~entities/guide-post";
import { Card } from "./card";

export interface CardListProps {
  posts: Entity.GuideModel[];
}

export const CardList: FC<CardListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link to="/guides/$slug" params={{ slug: post.slug }} key={post.slug}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
};
