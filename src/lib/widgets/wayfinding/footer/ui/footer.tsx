import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Logomark } from "~ui/logomark";
import { Content } from "~ui/page";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t-2 ">
      <Content>
        <Link to="/posts">Posts</Link>
        <Link to="/connect">Connect</Link>
        <Logomark className="h-5 text-foreground" />
      </Content>
    </footer>
  );
};
