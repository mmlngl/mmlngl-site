import type { FC } from "react";
import { useBlogPost } from "~lib/entities/blog-post";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const post = useBlogPost();
  return <Header heading={post.title} />;
};
