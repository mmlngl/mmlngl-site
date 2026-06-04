import type { FC } from "react";
import { useGuide } from "~lib/entities/guide-post";
import { Markdown } from "~ui/markdown";

export const Content: FC = () => {
  const post = useGuide();

  return <Markdown className="my-6 md:my-8">{post.content}</Markdown>;
};
