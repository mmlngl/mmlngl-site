import type { FC } from "react";
import { usePost } from "~lib/entities/post";

export const HitCounter: FC = () => {
  const post = usePost();
  return <div>{post.viewCount} Views</div>;
};
