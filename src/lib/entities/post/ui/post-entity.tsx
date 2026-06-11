import type { FC, PropsWithChildren } from "react";
import type { PostModel } from "../lib";
import { Context } from "./post-context";

export const PostEntity: FC<PropsWithChildren<{ post: PostModel }>> = ({
  children,
  post,
}) => {
  return (
    <article>
      <Context value={post}>{children}</Context>
    </article>
  );
};
