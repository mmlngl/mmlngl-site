import type { FC, PropsWithChildren } from "react";
import type { BlogPostModel } from "../lib";
import { Context } from "./blog-post-context";

export const BlogPostEntity: FC<PropsWithChildren<{ post: BlogPostModel }>> = ({
  children,
  post,
}) => {
  return (
    <article>
      <Context value={post}>{children}</Context>
    </article>
  );
};
