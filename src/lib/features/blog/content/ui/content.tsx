import type { FC } from "react";
import { useBlogPost } from "~lib/entities/blog-post";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const post = useBlogPost();

  return <Markdown className="my-6 md:my-8">{post.content}</Markdown>;
};
