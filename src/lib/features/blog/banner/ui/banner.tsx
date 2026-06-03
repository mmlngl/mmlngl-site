import type { FC } from "react";
import { useBlogPost } from "~lib/entities/blog-post";

export const Banner: FC = () => {
  const post = useBlogPost();

  return (
    <header>
      <h1 className="text-9xl">{post.title}</h1>
    </header>
  );
};
