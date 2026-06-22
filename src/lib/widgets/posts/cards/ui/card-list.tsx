import type { Post } from "content-collections";
import type { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import { cn } from "~lib/shared/design-system/utils";
import { T } from "~ui/typography";
import { CardListItem } from "./card-list-item";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  footer?: ReactNode;
  headingRender?: ReactElement;
  posts: Post[];
  filterWith?: Post["slug"][];
}

export const CardList: FC<CardListProps> = ({
  posts,
  heading,
  footer,
  headingRender,
  filterWith = [],
  className,
  ...props
}) => {
  const filteredPosts =
    filterWith.length === 0
      ? posts
      : posts.filter((post) => filterWith.includes(post.slug));
  const orderedPosts = filteredPosts.toSorted(
    (a, b) =>
      new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime(),
  );

  return (
    <section className={cn("flex flex-col gap-6 mt-4", className)} {...props}>
      {heading ? (
        <T.H2 className="text-primary" render={headingRender}>
          {heading}
        </T.H2>
      ) : null}
      <div className="flex flex-col gap-6">
        {orderedPosts.map((post) => (
          <CardListItem key={post.slug} post={post} />
        ))}
      </div>
      {footer ? <div className="mt-4 text-primary">{footer}</div> : null}
    </section>
  );
};
