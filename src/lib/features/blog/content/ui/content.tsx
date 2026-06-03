import type { FC } from "react";
import { useBlogPost } from "~lib/entities/blog-post";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const post = useBlogPost();

  return (
    <div className="prose">
      <Markdown content={post.content} />
    </div>
  );
};
