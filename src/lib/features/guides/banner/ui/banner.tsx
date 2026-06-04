import type { FC } from "react";
import { useGuide } from "~lib/entities/guide-post";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const post = useGuide();
  return <Header heading={post.title} />;
};
