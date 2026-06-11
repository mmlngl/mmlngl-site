import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { usePost } from "~lib/entities/post";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const post = usePost();
  return (
    <Header
      heading={
        <>
          <span className="text-foreground/20 font-[80%]">Dear Reader,</span>
          <br /> {post.title}
        </>
      }
      breadcrumbs={[
        <Link to="/posts" key="posts" className="hover:underline">
          Posts
        </Link>,
      ]}
    />
  );
};
