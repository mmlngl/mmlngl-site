import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Content } from "~ui/page";
import { Copyright } from "./copyright";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t">
      <Content>
        <Copyright />
        <Link to="/posts">Posts</Link>
        <Link to="/connect">Connect</Link>
      </Content>
    </footer>
  );
};
