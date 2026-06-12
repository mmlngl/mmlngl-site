import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Logomark } from "~ui/logomark";
import { Content } from "~ui/page";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t-2 ">
      <Content>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Link to="/posts">Posts</Link>
            <Link to="/connect">Connect</Link>
          </div>
          <div className=" text-right">
            <Logomark className="h-5 inline" />
          </div>
        </div>
      </Content>
    </footer>
  );
};
