import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Content } from "~ui/page";
import { Copyright } from "./copyright";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t">
      <Content>
        <Copyright />
        <Link to="/posts">AI Posts</Link>
      </Content>
    </footer>
  );
};
