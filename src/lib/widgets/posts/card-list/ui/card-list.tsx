import { Link } from "@tanstack/react-router";
import type { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import type * as Entity from "~lib/entities/post";
import { cn } from "~lib/shared/design-system/utils";
import { T } from "~ui/typography";
import { Card } from "./card";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingRender?: ReactElement;
  posts: Entity.PostModel[];
  filterWith?: Entity.PostModel["slug"][];
}

export const CardList: FC<CardListProps> = ({
  posts,
  heading,
  headingRender,
  filterWith = [],
  className,
  ...props
}) => {
  const filteredPosts =
    filterWith.length === 0
      ? posts
      : posts.filter((post) => filterWith.includes(post.slug));
  const orderedPosts = filteredPosts.toSorted((a, b) => a.order - b.order);

  return (
    <section className={cn("flex flex-col gap-6", className)} {...props}>
      {heading ? <T.H2 render={headingRender}>{heading}</T.H2> : null}
      <div className="flex flex-col gap-4">
        {orderedPosts.map((post) => (
          <Link
            className="no-underline"
            to="/posts/$slug"
            params={{ slug: post.slug }}
            key={post.slug}
          >
            <Card post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
};
