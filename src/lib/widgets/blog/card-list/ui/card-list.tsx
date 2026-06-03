import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import type * as Entity from "~entities/blog-post";
import { Card } from "./card";

export interface CardListProps {
  posts: Entity.BlogPostModel[];
}

export const CardList: FC<CardListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Link to="/blog/$slug" params={{ slug: post.slug }} key={post.slug}>
          <Card post={post} />
        </Link>
      ))}
    </div>
  );
};
