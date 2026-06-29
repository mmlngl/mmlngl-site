import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { Logomark } from "~ui/logomark";
import { Content } from "~ui/page";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t-2 ">
      <Content>
        <div className="grid grid-cols-2 gap-6">
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="hover:underline" to="/posts">
                Posts
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/connect">
                Connect
              </Link>
            </li>
          </ul>
          <div className=" text-right">
            <Logomark className="h-5 inline" />
          </div>
        </div>
      </Content>
    </footer>
  );
};
