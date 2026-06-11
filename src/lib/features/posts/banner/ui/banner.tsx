import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { usePost } from "~lib/entities/post";
import { formatDate } from "~lib/shared/design-system/utils";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const post = usePost();
  return (
    <Header
      heading={
        <>
          <span className="text-foreground/40 text-[50%]">Dear Reader,</span>
          <br /> {post.title}
        </>
      }
      lead={formatDate(post.publishedOn)}
      leadRender={<p className="text-sm!" />}
      breadcrumbs={[
        <Link to="/posts" key="posts" className="hover:underline">
          Posts
        </Link>,
      ]}
    />
  );
};
